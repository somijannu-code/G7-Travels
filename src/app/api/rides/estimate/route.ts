import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// Vehicle pricing configuration for Tirupati area
// Updated to 20 Rs per KM as requested
const VEHICLE_PRICING = {
  HATCHBACK: { baseFare: 30, perKmRate: 20, perMinuteRate: 1, minimumFare: 50 },
  SEDAN: { baseFare: 40, perKmRate: 20, perMinuteRate: 1.5, minimumFare: 60 },
  SUV: { baseFare: 50, perKmRate: 20, perMinuteRate: 2, minimumFare: 80 },
  PREMIUM_SEDAN: { baseFare: 70, perKmRate: 20, perMinuteRate: 2.5, minimumFare: 100 },
  TEMPO_TRAVELLER: { baseFare: 100, perKmRate: 20, perMinuteRate: 3, minimumFare: 150 },
  MINIBUS: { baseFare: 150, perKmRate: 20, perMinuteRate: 4, minimumFare: 200 }
}

// Calculate distance between two coordinates (Haversine formula) in km
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371 // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLon = (lon2 - lon1) * Math.PI / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

// Estimate travel time in minutes (simplified)
function estimateDuration(distance: number): number {
  // Average speed in Tirupati city: 25 km/h
  const avgSpeed = 25
  return Math.round((distance / avgSpeed) * 60)
}

// Geo-fence validation for Tirupati area
function validateTirupatiLocation(lat: number, lon: number): boolean {
  // Tirupati approximate bounds
  const TIRUPATI_BOUNDS = {
    minLat: 13.5,
    maxLat: 13.7,
    minLon: 79.3,
    maxLon: 79.6
  }

  // Also include nearby areas
  const NEARBY_AREAS = [
    { lat: 13.6833, lon: 79.35, radius: 20 }, // Tirumala
    { lat: 13.5767, lon: 79.3, radius: 15 }, // Chandragiri
    { lat: 13.55, lon: 79.95, radius: 10 }, // Sricity
    { lat: 13.64, lon: 79.3, radius: 10 }, // Renigunta Airport
  ]

  // Check Tirupati bounds
  if (lat >= TIRUPATI_BOUNDS.minLat && lat <= TIRUPATI_BOUNDS.maxLat &&
      lon >= TIRUPATI_BOUNDS.minLon && lon <= TIRUPATI_BOUNDS.maxLon) {
    return true
  }

  // Check nearby areas
  for (const area of NEARBY_AREAS) {
    const distance = calculateDistance(lat, lon, area.lat, area.lon)
    if (distance <= area.radius) {
      return true
    }
  }

  return false
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { pickupLat, pickupLon, dropLat, dropLon, vehicleType } = body

    // Validate coordinates
    if (!pickupLat || !pickupLon || !dropLat || !dropLon) {
      return NextResponse.json(
        { error: 'Pickup and drop coordinates are required' },
        { status: 400 }
      )
    }

    // Validate vehicle type
    const vehicleTypeUpper = vehicleType?.toUpperCase()
    if (!vehicleTypeUpper || !VEHICLE_PRICING[vehicleTypeUpper as keyof typeof VEHICLE_PRICING]) {
      return NextResponse.json(
        { error: 'Invalid vehicle type' },
        { status: 400 }
      )
    }

    // Geo-fence validation
    if (!validateTirupatiLocation(pickupLat, pickupLon)) {
      return NextResponse.json(
        { error: 'Pickup location is outside our service area. We only serve Tirupati and surrounding areas.' },
        { status: 400 }
      )
    }

    if (!validateTirupatiLocation(dropLat, dropLon)) {
      return NextResponse.json(
        { error: 'Drop location is outside our service area. We only serve Tirupati and surrounding areas.' },
        { status: 400 }
      )
    }

    // Calculate distance
    const distance = calculateDistance(pickupLat, pickupLon, dropLat, dropLon)

    // Calculate duration
    const duration = estimateDuration(distance)

    // Get pricing
    const pricing = VEHICLE_PRICING[vehicleTypeUpper as keyof typeof VEHICLE_PRICING]

    // Calculate fare
    const distanceFare = distance * pricing.perKmRate
    const timeFare = duration * pricing.perMinuteRate
    let estimatedFare = pricing.baseFare + distanceFare + timeFare

    // Apply minimum fare
    if (estimatedFare < pricing.minimumFare) {
      estimatedFare = pricing.minimumFare
    }

    // Add GST (18%)
    const gstAmount = estimatedFare * 0.18
    const totalAmount = estimatedFare + gstAmount

    // Check for surge pricing SAFELY
    let surgeMultiplier = 1.0
    
    try {
      const activeSurge = await db.surgePricing.findFirst({
        where: {
          status: 'ACTIVE',
          startTime: { lte: new Date() },
          OR: [
            { endTime: null },
            { endTime: { gte: new Date() } }
          ]
        }
      })

      if (activeSurge) {
        surgeMultiplier = activeSurge.multiplier
      }
    } catch (dbError) {
      // If the database is down or the table doesn't exist yet, we catch the error here
      // This prevents the whole API route from crashing and returning a 500 error.
      console.warn('Could not fetch surge pricing from database. Defaulting to 1.0x surge.', dbError)
    }

    const finalAmount = totalAmount * surgeMultiplier

    return NextResponse.json({
      success: true,
      estimate: {
        distance: Math.round(distance * 100) / 100,
        duration,
        baseFare: pricing.baseFare,
        distanceFare: Math.round(distanceFare),
        timeFare: Math.round(timeFare),
        gstAmount: Math.round(gstAmount),
        surgeMultiplier,
        estimatedFare: Math.round(estimatedFare),
        totalAmount: Math.round(finalAmount),
        breakdown: {
          baseFare: pricing.baseFare,
          distanceCharge: Math.round(distanceFare),
          timeCharge: Math.round(timeFare),
          gst: Math.round(gstAmount),
          surgeCharge: surgeMultiplier > 1.0 ? Math.round(totalAmount * (surgeMultiplier - 1)) : 0
        }
      }
    })
  } catch (error) {
    console.error('Fare estimate error:', error)
    return NextResponse.json(
      { error: 'Failed to calculate fare estimate. Please try again.' },
      { status: 500 }
    )
  }
}
