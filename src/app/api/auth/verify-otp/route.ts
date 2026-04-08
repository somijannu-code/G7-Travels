import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { User } from '@prisma/client'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { phone, otp, name, email } = body

    // Validate input
    if (!phone || !otp) {
      return NextResponse.json(
        { error: 'Phone number and OTP are required' },
        { status: 400 }
      )
    }

    // Find user by phone
    const user = await db.user.findUnique({
      where: { phone }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'User not found. Please request a new OTP.' },
        { status: 404 }
      )
    }

    // Check if account is locked
    if (user.lockedUntil && user.lockedUntil > new Date()) {
      return NextResponse.json(
        { error: 'Account temporarily locked. Please try again later.' },
        { status: 429 }
      )
    }

    // Verify OTP
    if (user.otp !== otp || user.otpExpiry! < new Date()) {
      // Increment failed attempts
      const failedAttempts = (user.failedLoginAttempts || 0) + 1
      const updateData: any = { failedLoginAttempts: failedAttempts }

      // Lock account after 5 failed attempts
      if (failedAttempts >= 5) {
        updateData.lockedUntil = new Date(Date.now() + 30 * 60 * 1000) // 30 minutes
      }

      await db.user.update({
        where: { phone },
        data: updateData
      })

      return NextResponse.json(
        { error: 'Invalid or expired OTP' },
        { status: 400 }
      )
    }

    // OTP is valid - update user
    const userData: any = {
      otp: null,
      otpExpiry: null,
      phoneVerified: true,
      failedLoginAttempts: 0,
      lockedUntil: null,
      lastLoginAt: new Date()
    }

    // Update name and email if provided (new user registration)
    if (name && user.status === 'PENDING_VERIFICATION') {
      userData.name = name
      userData.status = 'ACTIVE'
    }

    if (email) {
      userData.email = email
    }

    const updatedUser = await db.user.update({
      where: { phone },
      data: userData
    })

    // Create JWT token (simplified - use proper JWT in production)
    const token = Buffer.from(JSON.stringify({
      userId: updatedUser.id,
      phone: updatedUser.phone,
      role: updatedUser.role
    })).toString('base64')

    return NextResponse.json({
      success: true,
      message: 'OTP verified successfully',
      token,
      user: {
        id: updatedUser.id,
        name: updatedUser.name,
        phone: updatedUser.phone,
        email: updatedUser.email,
        role: updatedUser.role
      }
    })
  } catch (error) {
    console.error('Verify OTP error:', error)
    return NextResponse.json(
      { error: 'Failed to verify OTP. Please try again.' },
      { status: 500 }
    )
  }
}
