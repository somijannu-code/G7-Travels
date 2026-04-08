import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// Sample promo codes - in production, these would come from database
const PROMO_CODES = {
  'WELCOME10': { discount: 10, type: 'PERCENTAGE', maxDiscount: 100, minAmount: 200, validUntil: new Date('2025-12-31') },
  'FLAT50': { discount: 50, type: 'FLAT', minAmount: 300, validUntil: new Date('2025-06-30') },
  'FIRSTRIDE': { discount: 20, type: 'PERCENTAGE', maxDiscount: 150, minAmount: 100, validUntil: new Date('2025-12-31') },
  'TIRUPATI20': { discount: 20, type: 'PERCENTAGE', maxDiscount: 200, minAmount: 500, validUntil: new Date('2025-08-31') },
  'SUMMER25': { discount: 25, type: 'PERCENTAGE', maxDiscount: 250, minAmount: 400, validUntil: new Date('2025-05-31') },
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { code, amount } = body

    if (!code || !amount) {
      return NextResponse.json(
        { error: 'Promo code and amount are required' },
        { status: 400 }
      )
    }

    const normalizedCode = code.toUpperCase().trim()
    const promo = PROMO_CODES[normalizedCode as keyof typeof PROMO_CODES]

    if (!promo) {
      return NextResponse.json(
        { error: 'Invalid promo code' },
        { status: 404 }
      )
    }

    // Check if promo is still valid
    if (promo.validUntil && new Date() > promo.validUntil) {
      return NextResponse.json(
        { error: 'This promo code has expired' },
        { status: 400 }
      )
    }

    // Check minimum amount
    if (promo.minAmount && amount < promo.minAmount) {
      return NextResponse.json(
        { error: `Minimum order amount of ₹${promo.minAmount} required` },
        { status: 400 }
      )
    }

    // Calculate discount
    let discountAmount = 0
    if (promo.type === 'PERCENTAGE') {
      discountAmount = (amount * promo.discount) / 100
      if (promo.maxDiscount && discountAmount > promo.maxDiscount) {
        discountAmount = promo.maxDiscount
      }
    } else {
      discountAmount = promo.discount
    }

    // Check if discount exceeds amount
    if (discountAmount >= amount) {
      return NextResponse.json(
        { error: 'Promo code discount cannot be equal to or greater than the total amount' },
        { status: 400 }
      )
    }

    // In production, you would check if the user has already used this promo
    // and update usage count in database

    return NextResponse.json({
      success: true,
      promo: {
        code: normalizedCode,
        discount: promo.discount,
        type: promo.type,
        maxDiscount: promo.maxDiscount,
        minAmount: promo.minAmount,
        validUntil: promo.validUntil
      },
      discountAmount: Math.round(discountAmount),
      finalAmount: Math.round(amount - discountAmount)
    })
  } catch (error) {
    console.error('Promo validation error:', error)
    return NextResponse.json(
      { error: 'Failed to validate promo code' },
      { status: 500 }
    )
  }
}

// GET endpoint to list available promos
export async function GET(request: NextRequest) {
  try {
    const availablePromos = Object.entries(PROMO_CODES)
      .filter(([_, promo]) => !promo.validUntil || new Date() <= promo.validUntil)
      .map(([code, promo]) => ({
        code,
        discount: promo.discount,
        type: promo.type,
        minAmount: promo.minAmount,
        validUntil: promo.validUntil
      }))

    return NextResponse.json({
      success: true,
      promos: availablePromos
    })
  } catch (error) {
    console.error('Get promos error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch promo codes' },
      { status: 500 }
    )
  }
}
