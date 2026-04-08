import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET - List user's rides
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    const status = searchParams.get('status')
    const limit = parseInt(searchParams.get('limit') || '10')
    const offset = parseInt(searchParams.get('offset') || '0')

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      )
    }

    const where: any = { userId }
    if (status) {
      where.status = status
    }

    const rides = await db.ride.findMany({
      where,
      orderBy: { requestedAt: 'desc' },
      take: limit,
      skip: offset
    })

    const total = await db.ride.count({ where })

    return NextResponse.json({
      success: true,
      rides,
      pagination: {
        total,
        limit,
        offset,
        hasMore: offset + limit < total
      }
    })
  } catch (error) {
    console.error('Get rides error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch rides' },
      { status: 500 }
    )
  }
}

// POST - Create a new ride booking
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      userId,
      pickupLat,
      pickupLon,
      pickupAddress,
      pickupLandmark,
      dropLat,
      dropLon,
      dropAddress,
      dropLandmark,
      vehicleType,
      estimatedFare,
      bookingType = 'now',
      scheduledAt,
      promoCode
    } = body

    // Validate required fields
    if (!userId || !pickupLat || !pickupLon || !pickupAddress ||
        !dropLat || !dropLon || !dropAddress || !vehicleType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Verify user exists
    const user = await db.user.findUnique({
      where: { id: userId }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    // Check user status
    if (user.status !== 'ACTIVE') {
      return NextResponse.json(
        { error: 'Your account is not active. Please contact support.' },
        { status: 403 }
      )
    }

    // Get fare estimate
    const estimateResponse = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/rides/estimate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        pickupLat, pickupLon, dropLat, dropLon, vehicleType
      })
    })

    if (!estimateResponse.ok) {
      return NextResponse.json(
        { error: 'Failed to calculate fare estimate' },
        { status: 400 }
      )
    }

    const estimateData = await estimateResponse.json()
    const estimate = estimateData.estimate

    // Calculate discount if promo code provided
    let discountAmount = 0
    if (promoCode) {
      const promo = await db.promoCode.findFirst({
        where: {
          code: promoCode.toUpperCase(),
          status: 'ACTIVE',
          validFrom: { lte: new Date() },
          validTo: { gte: new Date() }
        }
      })

      if (promo) {
        // Check usage limits
        if (promo.usedCount >= (promo.maxUses || Infinity)) {
          return NextResponse.json(
            { error: 'Promo code has expired (usage limit reached)' },
            { status: 400 }
          )
        }

        // Check user usage
        const userUsage = await db.promoUsage.count({
          where: {
            userId,
            promoCodeId: promo.id
          }
        })

        if (userUsage >= promo.maxUsesPerUser) {
          return NextResponse.json(
            { error: 'You have already used this promo code the maximum number of times' },
            { status: 400 }
          )
        }

        // Apply discount
        if (promo.type === 'FLAT') {
          discountAmount = promo.value
        } else if (promo.type === 'PERCENTAGE') {
          discountAmount = estimate.totalAmount * (promo.value / 100)
        }

        // Cap discount at max discount
        if (promo.maxDiscount && discountAmount > promo.maxDiscount) {
          discountAmount = promo.maxDiscount
        }
      }
    }

    // Generate OTP for ride verification
    const rideOtp = Math.floor(1000 + Math.random() * 9000).toString()

    // Create ride booking
    const ride = await db.ride.create({
      data: {
        userId,
        pickupLat,
        pickupLon,
        pickupAddress,
        pickupLandmark,
        dropLat,
        dropLon,
        dropAddress,
        dropLandmark,
        vehicleType: vehicleType.toUpperCase(),
        distance: estimate.distance,
        duration: estimate.duration,
        estimatedFare: estimate.totalAmount - discountAmount,
        bookingType,
        scheduledAt: bookingType === 'schedule' ? scheduledAt : null,
        rideOtp,
        discountAmount,
        gstAmount: estimate.gstAmount,
        totalAmount: estimate.totalAmount - discountAmount,
        status: 'PENDING'
      }
    })

    // Record promo usage if applicable
    if (promoCode && discountAmount > 0) {
      await db.promoUsage.create({
        data: {
          userId,
          promoCodeId: promo.id,
          rideId: ride.id,
          discountAmount
        }
      })

      // Update promo usage count
      await db.promoCode.update({
        where: { id: promo.id },
        data: { usedCount: { increment: 1 } }
      })
    }

    // TODO: Trigger driver matching via WebSocket

    return NextResponse.json({
      success: true,
      message: 'Ride booked successfully',
      ride
    })
  } catch (error) {
    console.error('Create ride error:', error)
    return NextResponse.json(
      { error: 'Failed to create ride. Please try again.' },
      { status: 500 }
    )
  }
}
