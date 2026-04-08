import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, password, language } = body

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone number are required' },
        { status: 400 }
      )
    }

    // Validate phone number
    const phoneRegex = /^[6-9]\d{9}$/
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      )
    }

    // Validate email if provided
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { error: 'Invalid email format' },
          { status: 400 }
        )
      }
    }

    // Validate password if provided
    if (password) {
      if (password.length < 8) {
        return NextResponse.json(
          { error: 'Password must be at least 8 characters long' },
          { status: 400 }
        )
      }
    }

    // Check if phone already exists
    const existingPhone = await db.user.findUnique({
      where: { phone }
    })

    if (existingPhone) {
      return NextResponse.json(
        { error: 'Phone number already registered' },
        { status: 409 }
      )
    }

    // Check if email already exists
    if (email) {
      const existingEmail = await db.user.findUnique({
        where: { email: email.toLowerCase() }
      })

      if (existingEmail) {
        return NextResponse.json(
          { error: 'Email already registered' },
          { status: 409 }
        )
      }
    }

    // Generate referral code
    const referralCode = `G7${phone.slice(-6).toUpperCase()}${Math.random().toString(36).substring(2, 4).toUpperCase()}`

    // Create user
    const user = await db.user.create({
      data: {
        name,
        phone,
        email: email?.toLowerCase(),
        password,
        language: language || 'en',
        referralCode,
        role: 'CUSTOMER',
        status: 'ACTIVE',
        city: 'Tirupati',
        state: 'Andhra Pradesh',
        country: 'India',
        phoneVerified: true, // Auto-verify for registration
        lastLoginAt: new Date()
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
      message: 'Registration successful',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        referralCode: user.referralCode
      }
    })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Registration failed. Please try again.' },
      { status: 500 }
    )
  }
}
