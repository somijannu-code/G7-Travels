import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Find user by email
    const user = await db.user.findUnique({
      where: { email: email.toLowerCase() }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    // Check if account is locked
    if (user.lockedUntil && user.lockedUntil > new Date()) {
      return NextResponse.json(
        { error: 'Account temporarily locked. Please try again later.' },
        { status: 429 }
      )
    }

    // Verify password (simplified - use bcrypt in production)
    if (user.password !== password) {
      const failedAttempts = (user.failedLoginAttempts || 0) + 1
      const updateData: any = { failedLoginAttempts }

      if (failedAttempts >= 5) {
        updateData.lockedUntil = new Date(Date.now() + 30 * 60 * 1000)
      }

      await db.user.update({
        where: { email },
        data: updateData
      })

      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    // Check user status
    if (user.status === 'SUSPENDED' || user.status === 'BLACKLISTED') {
      return NextResponse.json(
        { error: 'Your account has been suspended. Please contact support.' },
        { status: 403 }
      )
    }

    // Update login info
    await db.user.update({
      where: { email },
      data: {
        lastLoginAt: new Date(),
        failedLoginAttempts: 0,
        lockedUntil: null
      }
    })

    // Create JWT token (simplified - use proper JWT in production)
    const token = Buffer.from(JSON.stringify({
      userId: user.id,
      email: user.email,
      phone: user.phone,
      role: user.role
    })).toString('base64')

    return NextResponse.json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        avatar: user.avatar
      }
    })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Login failed. Please try again.' },
      { status: 500 }
    )
  }
}
