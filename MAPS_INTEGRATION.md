# Maps API Integration - G7 Travels

## Overview

This document explains the Maps API integration implemented for G7 Travels, which enables users to:
- Search and select pickup/drop locations using an autocomplete interface
- Calculate distances between locations
- Get fare estimates based on distance at ₹20 per KM

## Technology Stack

We use **OpenStreetMap's Nominatim API** for geocoding, which is:
- **Free** - No API key required
- **Open Source** - Community-maintained
- **Reliable** - Good coverage in India
- **Rate Limited** - 1 request per second (we implement debouncing)

## Components

### 1. LocationAutocomplete Component

**Location:** `/src/components/maps/LocationAutocomplete.tsx`

**Features:**
- Real-time location search with debouncing (300ms)
- Autocomplete suggestions dropdown
- Validates minimum 3 characters before searching
- Displays location details (road, city, state)
- Clear button to reset selection
- Loading state indicator
- Click outside to close suggestions

**Props:**
```typescript
interface LocationAutocompleteProps {
  value: string                    // Current location name
  onChange: (value: string, location: { lat: number; lon: number }) => void
  placeholder?: string             // Default: 'Enter location...'
  className?: string
  disabled?: boolean
}
```

**Usage Example:**
```typescript
<LocationAutocomplete
  value={pickupLocation}
  onChange={(value, coords) => {
    setPickupLocation(value)
    setPickupCoords(coords)
  }}
  placeholder="Enter pickup location"
/>
```

### 2. RideBookingWithMap Component

**Location:** `/src/components/booking/RideBookingWithMap.tsx`

**Features:**
- Integrated pickup and drop location selection
- Vehicle type selection with visual cards
- Real-time fare estimation
- Detailed fare breakdown showing:
  - Base fare
  - Distance charge (₹20/km)
  - Time charge
  - GST (18%)
  - Surge pricing (if active)
- Animated transitions and loading states
- Error handling and validation

**Fare Calculation:**
```
Base Fare: ₹30-150 (depending on vehicle type)
Distance Charge: Distance (km) × ₹20
Time Charge: Duration (mins) × Time Rate
GST: 18% on total
Total = Base + Distance + Time + GST
```

## API Endpoints

### 1. Geocoding API

**Endpoint:** `GET /api/maps/geocode?q={query}`

**Description:** Searches for locations using OpenStreetMap's Nominatim API

**Parameters:**
- `q` (required): Location search query (min 3 characters)

**Response:**
```json
{
  "success": true,
  "results": [
    {
      "placeId": 12345678,
      "displayName": "Tirupati Railway Station, Tirupati, Andhra Pradesh, India",
      "lat": 13.6151,
      "lon": 79.4189,
      "address": {
        "road": "Tirupati Railway Station Road",
        "city": "Tirupati",
        "state": "Andhra Pradesh",
        "country": "India",
        "postcode": "517501"
      }
    }
  ]
}
```

**Rate Limiting:** Nominatim limits to 1 request per second. Our implementation uses debouncing to respect this limit.

### 2. Distance Calculation API

**Endpoint:** `POST /api/maps/distance`

**Description:** Calculates distance and estimated travel time between two coordinates

**Request Body:**
```json
{
  "pickupLat": 13.6151,
  "pickupLon": 79.4189,
  "dropLat": 13.6833,
  "dropLon": 79.35
}
```

**Response:**
```json
{
  "success": true,
  "distance": 18.5,
  "duration": 44,
  "unit": "km"
}
```

**Algorithm:** Uses Haversine formula for great-circle distance calculation with Earth's radius of 6,371 km.

### 3. Fare Estimation API

**Endpoint:** `POST /api/rides/estimate`

**Description:** Calculates fare estimate for a ride with selected vehicle type

**Request Body:**
```json
{
  "pickupLat": 13.6151,
  "pickupLon": 79.4189,
  "dropLat": 13.6833,
  "dropLon": 79.35,
  "vehicleType": "SEDAN"
}
```

**Response:**
```json
{
  "success": true,
  "estimate": {
    "distance": 18.5,
    "duration": 44,
    "baseFare": 40,
    "distanceFare": 370,
    "timeFare": 66,
    "gstAmount": 85.68,
    "surgeMultiplier": 1.0,
    "estimatedFare": 476,
    "totalAmount": 562,
    "breakdown": {
      "baseFare": 40,
      "distanceCharge": 370,
      "timeCharge": 66,
      "gst": 86,
      "surgeCharge": 0
    }
  }
}
```

## Vehicle Pricing (Updated to ₹20/km)

| Vehicle Type | Base Fare | Per KM | Per Min | Minimum |
|--------------|-----------|--------|---------|---------|
| Hatchback    | ₹30       | ₹20    | ₹1      | ₹50     |
| Sedan        | ₹40       | ₹20    | ₹1.5    | ₹60     |
| SUV          | ₹50       | ₹20    | ₹2      | ₹80     |
| Premium Sedan| ₹70       | ₹20    | ₹2.5    | ₹100    |
| Tempo Traveller| ₹100    | ₹20    | ₹3      | ₹150    |
| Minibus      | ₹150      | ₹20    | ₹4      | ₹200    |

## Service Area

The system includes geo-fencing for the Tirupati region:

**Primary Area (Tirupati City):**
- Latitude: 13.5° to 13.7°
- Longitude: 79.3° to 79.6°

**Nearby Areas (within radius):**
- Tirumala (20 km)
- Chandragiri (15 km)
- Sricity (10 km)
- Renigunta Airport (10 km)

**Validation:** The fare estimation API validates that both pickup and drop locations are within the service area before calculating fare.

## Implementation Notes

### 1. Debouncing
The LocationAutocomplete component implements 300ms debouncing to:
- Reduce API calls
- Respect Nominatim's rate limits
- Improve performance

### 2. Geo-fencing
The system validates locations are within service area:
- Prevents bookings outside service region
- Provides clear error messages to users
- Focuses search results on Tirupati area

### 3. Error Handling
All API endpoints include comprehensive error handling:
- Input validation
- Coordinate range validation
- Graceful error messages
- Proper HTTP status codes

### 4. User Experience
- Loading states during API calls
- Clear visual feedback
- Animated transitions
- Mobile-responsive design
- Accessible keyboard navigation

## Future Enhancements

Potential improvements for production:

1. **Map Visualization**
   - Display pickup/drop points on an interactive map
   - Show route preview
   - Use Leaflet or Mapbox GL

2. **Enhanced Routing**
   - Integrate OSRM (Open Source Routing Machine)
   - Get actual road distances (not straight-line)
   - Better time estimates based on traffic

3. **Reverse Geocoding**
   - Convert coordinates to addresses
   - GPS location detection
   - "Current Location" button

4. **Saved Locations**
   - Home, Work, Favorites
   - Recent locations history
   - One-tap booking

5. **Alternative APIs**
   - Google Maps API (requires API key)
   - Mapbox API (free tier available)
   - HERE Technologies

## Testing

To test the Maps integration:

1. **Location Search:**
   - Open the landing page
   - Click on pickup location field
   - Type "Tirupati" (wait 300ms for suggestions)
   - Select a location from dropdown

2. **Fare Estimation:**
   - Select pickup and drop locations
   - Choose vehicle type
   - Click "Get Fare Estimate"
   - View detailed fare breakdown

3. **Error Handling:**
   - Try booking outside service area (e.g., Chennai)
   - Test with invalid coordinates
   - Verify error messages display correctly

## Troubleshooting

### Issue: No location suggestions appear
**Solution:**
- Check minimum 3 characters are entered
- Wait 300ms for debounced search
- Verify internet connection
- Check browser console for errors

### Issue: "Location outside service area" error
**Solution:**
- Ensure location is in Tirupati region
- Try more specific location name
- Check coordinates are within bounds

### Issue: API rate limit errors
**Solution:**
- The debouncing should prevent this
- If persistent, increase debounce delay
- Consider implementing request queuing

## Support

For issues or questions about the Maps integration:
- Check this documentation first
- Review component source code
- Check API endpoint responses in browser DevTools
- Contact development team

## License

This Maps integration uses OpenStreetMap data, licensed under the ODbL.
For more information: https://www.openstreetmap.org/copyright
