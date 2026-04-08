import { NextRequest, NextResponse } from 'next/server'

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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { pickupLat, pickupLon, dropLat, dropLon } = body

    // Validate coordinates
    if (!pickupLat || !pickupLon || !dropLat || !dropLon) {
      return NextResponse.json(
        { error: 'Pickup and drop coordinates are required' },
        { status: 400 }
      )
    }

    // Validate coordinate ranges
    if (
      pickupLat < -90 || pickupLat > 90 ||
      pickupLon < -180 || pickupLon > 180 ||
      dropLat < -90 || dropLat > 90 ||
      dropLon < -180 || dropLon > 180
    ) {
      return NextResponse.json(
        { error: 'Invalid coordinates' },
        { status: 400 }
      )
    }

    // Calculate distance using Haversine formula
    const distance = calculateDistance(pickupLat, pickupLon, dropLat, dropLon)

    // Estimate travel time (average speed in Tirupati city: 25 km/h)
    const avgSpeed = 25
    const durationMinutes = Math.round((distance / avgSpeed) * 60)

    return NextResponse.json({
      success: true,
      distance: Math.round(distance * 100) / 100, // Round to 2 decimal places
      duration: durationMinutes,
      unit: 'km'
    })
  } catch (error) {
    console.error('Distance calculation error:', error)
    return NextResponse.json(
      { error: 'Failed to calculate distance. Please try again.' },
      { status: 500 }
    )
  }
}
