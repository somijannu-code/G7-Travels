import { NextRequest, NextResponse } from 'next/server'

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

    // Use OSRM Public API for actual driving distance
    // Note: OSRM expects coordinates in Longitude,Latitude order
    const osrmUrl = `http://router.project-osrm.org/route/v1/driving/${pickupLon},${pickupLat};${dropLon},${dropLat}?overview=false`

    const response = await fetch(osrmUrl, {
      headers: {
        'User-Agent': 'G7-Travels-App' // Good practice to identify your app to free public APIs
      }
    })

    if (!response.ok) {
      throw new Error('Failed to fetch route from OSRM')
    }

    const data = await response.json()

    if (data.code !== 'Ok' || !data.routes || data.routes.length === 0) {
      throw new Error('No driving route found between these coordinates')
    }

    // OSRM returns distance in meters and duration in seconds
    const distanceMeters = data.routes[0].distance
    const durationSeconds = data.routes[0].duration

    // Convert to kilometers (rounded to 2 decimals) and minutes
    const distanceKm = Math.round((distanceMeters / 1000) * 100) / 100
    const durationMinutes = Math.round(durationSeconds / 60)

    return NextResponse.json({
      success: true,
      distance: distanceKm,
      duration: durationMinutes,
      unit: 'km'
    })
    
  } catch (error) {
    console.error('Distance calculation error:', error)
    return NextResponse.json(
      { error: 'Failed to calculate driving distance. Please try again.' },
      { status: 500 }
    )
  }
}
