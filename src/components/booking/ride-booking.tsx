'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { MapPin, Car, Clock, ArrowRight, Search, Navigation, Calendar, RotateCcw, IndianRupee, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface VehicleOption {
  type: string
  name: string
  image: string
  capacity: string
  price: string
  estimatedTime: string
}

interface FareEstimate {
  distance: number
  duration: number
  baseFare: number
  distanceFare: number
  timeFare: number
  gstAmount: number
  discountAmount: number
  surgeMultiplier: number
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

const VEHICLE_OPTIONS: VehicleOption[] = [
  { type: 'hatchback', name: 'Hatchback', image: '🚗', capacity: '4', price: '₹49/km', estimatedTime: '3 min' },
  { type: 'sedan', name: 'Sedan', image: '🚙', capacity: '4', price: '₹69/km', estimatedTime: '4 min' },
  { type: 'suv', name: 'SUV', image: '🚐', capacity: '6', price: '₹99/km', estimatedTime: '5 min' },
  { type: 'premium_sedan', name: 'Premium Sedan', image: '🚘', capacity: '4', price: '₹149/km', estimatedTime: '6 min' },
]

const POPULAR_LOCATIONS = [
  'Tirumala Temple',
  'Renigunta Airport',
  'Tirupati Railway Station',
  'Sri Venkateswara Zoological Park',
  'Chandragiri Fort',
  'ISKCON Temple',
  'Kapila Theertham',
  'Sri Govindaraja Swamy Temple'
]

export function RideBooking() {
  const [pickup, setPickup] = useState('')
  const [drop, setDrop] = useState('')
  const [selectedVehicle, setSelectedVehicle] = useState<string>('sedan')
  const [showPopular, setShowPopular] = useState<'pickup' | 'drop' | null>(null)
  const [fareEstimate, setFareEstimate] = useState<FareEstimate | null>(null)
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState<'location' | 'vehicle' | 'confirm'>('location')
  const [swapLocations, setSwapLocations] = useState(false)

  const handleGetEstimate = async () => {
    if (!pickup || !drop) return

    setLoading(true)
    try {
      const pickupCoords = { lat: 13.6288, lon: 79.4191 }
      const dropCoords = { lat: 13.6833, lon: 79.35 }

      const response = await fetch('/api/rides/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pickupLat: pickupCoords.lat,
          pickupLon: pickupCoords.lon,
          dropLat: dropCoords.lat,
          dropLon: dropCoords.lon,
          vehicleType: selectedVehicle
        })
      })

      const data = await response.json()

      if (data.success) {
        setFareEstimate(data.estimate)
        setStep('vehicle')
      }
    } catch (error) {
      console.error('Failed to get estimate:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleBookRide = async () => {
    if (!fareEstimate) return

    setLoading(true)
    try {
      // Create Database Record
      const userId = 'demo-user-id'
      const response = await fetch('/api/rides', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          pickupLat: 13.6288,
          pickupLon: 79.4191,
          pickupAddress: pickup,
          dropLat: 13.6833,
          dropLon: 79.35,
          dropAddress: drop,
          vehicleType: selectedVehicle,
          estimatedFare: fareEstimate.totalAmount
        })
      })

      const data = await response.json()

      if (data.success) {
        // WhatsApp Redirect Logic added here!
        const vehicleName = VEHICLE_OPTIONS.find(v => v.type === selectedVehicle)?.name || selectedVehicle
        
        const message = `*🚕 New Quick Ride Booking (G7 Travels)*
        
*Pickup:* ${pickup}
*Drop:* ${drop}
*Vehicle:* ${vehicleName}
*Estimated Fare:* ₹${fareEstimate.totalAmount}

Please confirm my ride. Thank you!`

        const whatsappUrl = `https://wa.me/919014878313?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, '_blank')

        setStep('confirm')
      }
    } catch (error) {
      console.error('Failed to book ride:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSwap = () => {
    const temp = pickup
    setPickup(drop)
    setDrop(temp)
    setSwapLocations(!swapLocations)
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className={`flex items-center gap-2 ${step === 'location' ? 'text-orange-600' : 'text-green-600'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step === 'location' ? 'bg-orange-100' : 'bg-green-100'}`}>
            {step !== 'location' ? '✓' : '1'}
          </div>
          <span className="text-sm font-medium">Location</span>
        </div>
        <div className={`w-8 h-0.5 ${step !== 'location' ? 'bg-green-600' : 'bg-slate-200'}`} />
        <div className={`flex items-center gap-2 ${step === 'vehicle' ? 'text-orange-600' : step === 'confirm' ? 'text-green-600' : 'text-slate-400'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step === 'vehicle' ? 'bg-orange-100' : step === 'confirm' ? 'bg-green-100' : 'bg-slate-100'}`}>
            {step === 'confirm' ? '✓' : '2'}
          </div>
          <span className="text-sm font-medium">Vehicle</span>
        </div>
        <div className={`w-8 h-0.5 ${step === 'confirm' ? 'bg-green-600' : 'bg-slate-200'}`} />
        <div className={`flex items-center gap-2 ${step === 'confirm' ? 'text-green-600' : 'text-slate-400'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step === 'confirm' ? 'bg-green-100' : 'bg-slate-100'}`}>
            3
          </div>
          <span className="text-sm font-medium">Confirm</span>
        </div>
      </div>

      {step === 'location' && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Navigation className="w-5 h-5 text-orange-600" />
                Where to?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 relative">
                <Label htmlFor="pickup">Pickup Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-green-600" />
                  <Input
                    id="pickup"
                    placeholder="Enter pickup location"
                    className="pl-9 pr-10"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    onFocus={() => setShowPopular('pickup')}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1 h-8 w-8"
                    onClick={() => {
                      setPickup('Current Location')
                      setShowPopular(null)
                    }}
                  >
                    <Navigation className="h-4 w-4" />
                  </Button>
                </div>

                <AnimatePresence>
                  {showPopular === 'pickup' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-slate-50 rounded-lg p-3 space-y-2"
                    >
                      <p className="text-xs font-medium text-slate-600 mb-2">POPULAR LOCATIONS</p>
                      {POPULAR_LOCATIONS.slice(0, 4).map((location) => (
                        <Button
                          key={location}
                          variant="ghost"
                          className="w-full justify-start text-sm h-8"
                          onClick={() => {
                            setPickup(location)
                            setShowPopular(null)
                          }}
                        >
                          <MapPin className="w-3 h-3 mr-2 text-slate-400" />
                          {location}
                        </Button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex justify-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200"
                  onClick={handleSwap}
                >
                  <RotateCcw className={`h-4 w-4 transition-transform ${swapLocations ? 'rotate-180' : ''}`} />
                </Button>
              </div>

              <div className="space-y-2 relative">
                <Label htmlFor="drop">Drop Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-red-600" />
                  <Input
                    id="drop"
                    placeholder="Enter drop location"
                    className="pl-9"
                    value={drop}
                    onChange={(e) => setDrop(e.target.value)}
                    onFocus={() => setShowPopular('drop')}
                  />
                </div>

                <AnimatePresence>
                  {showPopular === 'drop' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-slate-50 rounded-lg p-3 space-y-2"
                    >
                      <p className="text-xs font-medium text-slate-600 mb-2">POPULAR LOCATIONS</p>
                      {POPULAR_LOCATIONS.map((location) => (
                        <Button
                          key={location}
                          variant="ghost"
                          className="w-full justify-start text-sm h-8"
                          onClick={() => {
                            setDrop(location)
                            setShowPopular(null)
                          }}
                        >
                          <MapPin className="w-3 h-3 mr-2 text-slate-400" />
                          {location}
                        </Button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex gap-2">
                <Button
                  variant={step === 'location' ? 'default' : 'outline'}
                  className="flex-1"
                  onClick={() => {}}
                >
                  <Car className="w-4 h-4 mr-2" />
                  Ride Now
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => {}}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule
                </Button>
              </div>

              <Button
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
                disabled={!pickup || !drop || loading}
                onClick={handleGetEstimate}
              >
                {loading ? 'Calculating...' : (
                  <>
                    <Search className="w-4 h-4 mr-2" />
                    Get Fare Estimate
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {step === 'vehicle' && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Select Vehicle</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{pickup}</p>
                  </div>
                </div>
                <div className="ml-2.5 border-l-2 border-dashed border-slate-300 h-4 my-1" />
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{drop}</p>
                  </div>
                </div>

                {fareEstimate && (
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-200">
                    <div className="flex items-center gap-2">
                      <Navigation className="w-4 h-4 text-slate-600" />
                      <span className="text-sm font-medium">{fareEstimate.distance} km</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-600" />
                      <span className="text-sm font-medium">{fareEstimate.duration} min</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                {VEHICLE_OPTIONS.map((vehicle) => (
                  <div
                    key={vehicle.type}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:border-orange-300 ${
                      selectedVehicle === vehicle.type ? 'border-orange-500 bg-orange-50' : 'border-slate-200'
                    }`}
                    onClick={() => setSelectedVehicle(vehicle.type)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-4xl">{vehicle.image}</div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{vehicle.name}</h3>
                            <Badge variant="outline" className="text-xs">
                              <Car className="w-3 h-3 mr-1" />
                              {vehicle.capacity} seats
                            </Badge>
                          </div>
                          <p className="text-sm text-slate-600">{vehicle.estimatedTime} away</p>
                        </div>
                      </div>
                      <div className="text-right">
                        {fareEstimate && (
                          <p className="text-xl font-bold text-orange-600">
                            ₹{Math.round(fareEstimate.totalAmount)}
                          </p>
                        )}
                        <p className="text-sm text-slate-600">{vehicle.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {fareEstimate?.surgeMultiplier && fareEstimate.surgeMultiplier > 1 && (
                <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm flex items-center gap-2">
                  <span className="font-semibold">⚠️ Surge Pricing</span>
                  <span>Fares are {Math.round((fareEstimate.surgeMultiplier - 1) * 100)}% higher due to high demand</span>
                </div>
              )}

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setStep('location')}
                >
                  Back
                </Button>
                <Button
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                  disabled={loading}
                  onClick={handleBookRide}
                >
                  {loading ? 'Booking...' : 'Book via WhatsApp'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {step === 'confirm' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Card className="border-green-200 bg-green-50">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">✓</span>
              </div>
              <h2 className="text-2xl font-bold text-green-800 mb-2">Ride Booked!</h2>
              <p className="text-green-700 mb-6">
                Your ride request has been sent to WhatsApp successfully. Our team will assist you shortly.
              </p>

              {fareEstimate && (
                <div className="bg-white rounded-lg p-4 mb-6 text-left">
                  <h3 className="font-semibold mb-3">Booking Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Base Fare</span>
                      <span>₹{fareEstimate.breakdown.baseFare}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Distance ({fareEstimate.distance} km)</span>
                      <span>₹{fareEstimate.breakdown.distanceCharge}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Time Charge ({fareEstimate.duration} min)</span>
                      <span>₹{fareEstimate.breakdown.timeCharge}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">GST (18%)</span>
                      <span>₹{fareEstimate.breakdown.gst}</span>
                    </div>
                    <div className="flex justify-between text-green-600 font-medium">
                      <span>Automatic Discount</span>
                      <span>-₹{fareEstimate.breakdown.discount}</span>
                    </div>
                    {fareEstimate.breakdown.surgeCharge > 0 && (
                      <div className="flex justify-between text-red-600 mt-1">
                        <span>Surge Charge</span>
                        <span>+₹{fareEstimate.breakdown.surgeCharge}</span>
                      </div>
                    )}
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-orange-600">₹{fareEstimate.totalAmount}</span>
                    </div>
                  </div>
                </div>
              )}

              <Button
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={() => {
                  setStep('location')
                  setPickup('')
                  setDrop('')
                  setFareEstimate(null)
                }}
              >
                Book Another Ride
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  )
}
