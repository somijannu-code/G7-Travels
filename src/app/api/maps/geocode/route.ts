import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('q')

    if (!query || query.length < 3) {
      return NextResponse.json(
        { error: 'Query must be at least 3 characters' },
        { status: 400 }
      )
    }

    // Use Nominatim API (OpenStreetMap) for geocoding
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5&countrycodes=in&addressdetails=1&bounded=1&viewbox=79.3,13.7,79.6,13.5`,
      {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'G7-Travels-Backend'
        }
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch location data')
    }

    const data = await response.json()

    return NextResponse.json({
      success: true,
      results: data.map((item: any) => ({
        placeId: item.place_id,
        displayName: item.display_name,
        lat: parseFloat(item.lat),
        lon: parseFloat(item.lon),
        address: {
          road: item.address?.road,
          city: item.address?.city || item.address?.town || item.address?.village,
          state: item.address?.state,
          country: item.address?.country,
          postcode: item.address?.postcode
        }
      }))
    })
  } catch (error) {
    console.error('Geocoding error:', error)
    return NextResponse.json(
      { error: 'Failed to search location. Please try again.' },
      { status: 500 }
    )
  }
}
