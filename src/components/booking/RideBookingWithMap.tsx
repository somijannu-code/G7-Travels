'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { LocationAutocomplete } from '@/components/maps/LocationAutocomplete'
import { MapPin, Car, Clock, Route, IndianRupee, CheckCircle2, Loader2, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface FareEstimate {
  distance: number
  duration: number
  baseFare: number
  distanceFare: number
  timeFare: number
  gstAmount: number
  discountAmount: number
  surgeMultiplier: number
  estimatedFare: number
  totalAmount: number
  breakdown: {
    baseFare: number
    distanceCharge: number
    timeCharge: number
    gst: number
    discount: number
    surgeCharge: number
  }
}

export function RideBookingWithMap() {
  const [pickupLocation, setPickupLocation] = useState('')
  const [pickupCoords, setPickupCoords] = useState({ lat: 0, lon: 0 })
  const [dropLocation, setDropLocation] = useState('')
  const [dropCoords, setDropCoords] = useState({ lat: 0, lon: 0 })
  const [vehicleType, setVehicleType] = useState('SEDAN')
  const [isLoading, setIsLoading] = useState(false)
  const [estimate, setEstimate] = useState<FareEstimate | null>(null)
  const [error, setError] = useState('')

  const vehicleTypes = [
    { id: 'HATCHBACK', name: 'Hatchback', capacity: '4 Passengers', luggage: '2 Bags', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80' },
    { id: 'SEDAN', name: 'Sedan', capacity: '4 Passengers', luggage: '3 Bags', image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&q=80' },
    { id: 'SUV', name: 'SUV', capacity: '6 Passengers', luggage: '4 Bags', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80' },
    { id: 'PREMIUM_SEDAN', name: 'Premium Sedan', capacity: '4 Passengers', luggage: '3 Bags', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80' },
    { id: 'TEMPO_TRAVELLER', name: 'Tempo Traveller', capacity: '12 Passengers', luggage: '10 Bags', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80' },
    { id: 'MINIBUS', name: 'Minibus', capacity: '20 Passengers', luggage: '15 Bags', image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80' }
  ]

  const handleGetEstimate = async () => {
    // Reset previous state
    setError('')
    setEstimate(null)

    // Validation
    if (!pickupLocation || !pickupCoords.lat || !dropLocation || !dropCoords.lat) {
      setError('Please select both pickup and drop locations from the suggestions')
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/rides/estimate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pickupLat: pickupCoords.lat,
          pickupLon: pickupCoords.lon,
          dropLat: dropCoords.lat,
          dropLon: dropCoords.lon,
          vehicleType
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get fare estimate')
      }

      setEstimate(data.estimate)
    } catch (err: any) {
      setError(err.message || 'Failed to calculate fare. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleBookRide = () => {
    if (!estimate) return

    setIsLoading(true)
    
    const vehicleName = vehicleTypes.find(v => v.id === vehicleType)?.name || vehicleType

    const message = `*🚕 New Map Ride Booking (G7 Travels)*
    
*Pickup:* ${pickupLocation}
*Drop:* ${dropLocation}
*Vehicle:* ${vehicleName}
*Total Fare:* ₹${estimate.totalAmount}

Please confirm my booking. Thank you!`

    // 91 is the country code for India
    const whatsappUrl = `https://wa.me/919014878313?text=${encodeURIComponent(message)}`
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank')
    setIsLoading(false)
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Car className="h-5 w-5" />
            Book Your Ride
          </CardTitle>
          <CardDescription>
            Enter your pickup and drop locations to get an instant fare estimate
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Pickup Location */}
          <div className="space-y-2">
            <Label htmlFor="pickup" className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-green-600" />
              Pickup Location
            </Label>
            <LocationAutocomplete
              id="pickup"
              value={pickupLocation}
              onChange={(value, coords) => {
                setPickupLocation(value)
                setPickupCoords(coords)
                // Clear estimate when location changes
                setEstimate(null)
              }}
              placeholder="Enter pickup location (e.g., Tirupati Railway Station)"
            />
          </div>

          {/* Drop Location */}
          <div className="space-y-2">
            <Label htmlFor="drop" className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-red-600" />
              Drop Location
            </Label>
            <LocationAutocomplete
              id="drop"
              value={dropLocation}
              onChange={(value, coords) => {
                setDropLocation(value)
                setDropCoords(coords)
                // Clear estimate when location changes
                setEstimate(null)
              }}
              placeholder="Enter drop location (e.g., Tirumala Temple)"
            />
          </div>

          {/* Vehicle Type Selection */}
          <div className="space-y-3">
            <Label>Select Vehicle Type</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {vehicleTypes.map((vehicle) => (
                <motion.div
                  key={vehicle.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setVehicleType(vehicle.id)
                      setEstimate(null)
                    }}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all overflow-hidden ${
                      vehicleType === vehicle.id
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-28 h-16 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                        <img
                          src={vehicle.image}
                          alt={vehicle.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      {vehicleType === vehicle.id && (
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      )}
                    </div>
                    <h3 className="font-semibold">{vehicle.name}</h3>
                    <p className="text-sm text-muted-foreground">{vehicle.capacity}</p>
                    <p className="text-xs text-muted-foreground">{vehicle.luggage}</p>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Get Estimate Button */}
          <Button
            onClick={handleGetEstimate}
            disabled={isLoading}
            className="w-full"
            size="lg"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Calculating...
              </>
            ) : (
              <>
                <Route className="mr-2 h-4 w-4" />
                Get Fare Estimate
              </>
            )}
          </Button>

          {/* Error Message */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Fare Estimate Result */}
          <AnimatePresence>
            {estimate && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Fare Estimate</span>
                      <IndianRupee className="h-5 w-5" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Distance and Duration */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Route className="h-4 w-4 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Distance</p>
                          <p className="font-semibold">{estimate.distance} km</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Estimated Time</p>
                          <p className="font-semibold">{estimate.duration} mins</p>
                        </div>
                      </div>
                    </div>

                    {/* Fare Breakdown */}
                    <div className="space-y-2 pt-4 border-t">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Base Fare</span>
                        <span>₹{estimate.breakdown.baseFare}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Distance Charge ({estimate.distance} km × ₹20)</span>
                        <span>₹{estimate.breakdown.distanceCharge}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Time Charge ({estimate.duration} mins)</span>
                        <span>₹{estimate.breakdown.timeCharge}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">GST (18%)</span>
                        <span>₹{estimate.breakdown.gst}</span>
                      </div>
                      <div className="flex justify-between text-sm text-green-600 font-medium bg-green-50/50 p-1 rounded">
                        <span>Automatic Discount (Time + GST Waiver)</span>
                        <span>-₹{estimate.breakdown.discount}</span>
                      </div>
                      {estimate.surgeMultiplier > 1 && (
                        <div className="flex justify-between text-sm text-orange-600 mt-1">
                          <span>Surge Multiplier ({estimate.surgeMultiplier}x)</span>
                          <span>+₹{estimate.breakdown.surgeCharge}</span>
                        </div>
                      )}
                    </div>

                    {/* Total Amount */}
                    <div className="pt-4 border-t">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold">Total Amount</span>
                        <span className="text-2xl font-bold text-primary">
                          ₹{estimate.totalAmount}
                        </span>
                      </div>
                    </div>

                    {/* Book via WhatsApp Button */}
                    <Button
                      onClick={handleBookRide}
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      size="lg"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Book via WhatsApp - ₹{estimate.totalAmount}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  )
}
