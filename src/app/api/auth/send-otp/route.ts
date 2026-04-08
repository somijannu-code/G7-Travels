import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { User } from '@prisma/client'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { phone } = body

    // Validate phone number (Indian format)
    const phoneRegex = /^[6-9]\d{9}$/
    if (!phone || !phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number. Please enter a valid 10-digit Indian mobile number.' },
        { status: 400 }
      )
    }

    // Check if user exists
    const user = await db.user.findUnique({
      where: { phone }
    })

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000) // 10 minutes

    if (user) {
      // Update existing user's OTP
      await db.user.update({
        where: { phone },
        data: {
          otp,
          otpExpiry,
          failedLoginAttempts: 0,
          lockedUntil: null
        }
      })
    } else {
      // For new users, we'll create a temporary record
      // Actual user creation happens during verify-otp or registration
      await db.user.create({
        data: {
          phone,
          otp,
          otpExpiry,
          name: 'User', // Temporary name, will be updated during registration
          role: 'CUSTOMER',
          status: 'PENDING_VERIFICATION'
        }
      })
    }

    // TODO: Send OTP via SMS (Twilio/MSG91)
    // For now, we'll return the OTP in response (development only)
    console.log(`OTP for ${phone}: ${otp}`)

    return NextResponse.json({
      success: true,
      message: 'OTP sent successfully',
      // In production, remove this line
      otp: process.env.NODE_ENV === 'development' ? otp : undefined
    })
  } catch (error) {
    console.error('Send OTP error:', error)
    return NextResponse.json(
      { error: 'Failed to send OTP. Please try again.' },
      { status: 500 }
    )
  }
}
