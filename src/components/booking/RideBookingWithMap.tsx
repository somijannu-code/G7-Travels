'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { LocationAutocomplete } from '@/components/maps/LocationAutocomplete'
import { MapPin, Car, Clock, Route, IndianRupee, CheckCircle2, Loader2, Phone, Users, Briefcase, TrendingUp } from 'lucide-react'
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
  const estimateRef = useRef<HTMLDivElement>(null)

  const [pickupLocation, setPickupLocation] = useState('')
  const [pickupCoords, setPickupCoords] = useState({ lat: 0, lon: 0 })
  const [dropLocation, setDropLocation] = useState('')
  const [dropCoords, setDropCoords] = useState({ lat: 0, lon: 0 })
  
  // Default to Swift Dzire
  const [vehicleType, setVehicleType] = useState('SWIFT_DZIRE')
  
  const [isLoading, setIsLoading] = useState(false)
  const [estimate, setEstimate] = useState<FareEstimate | null>(null)
  const [error, setError] = useState('')

  // Synced Vehicle Fleet
  const vehicleTypes = [
    { id: 'TOYOTA_ETIOS', name: 'Toyota Etios', capacity: '4 Passengers', luggage: '2 Bags', image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&q=80', price: '14' },
    { id: 'SWIFT_DZIRE', name: 'Swift Dzire', capacity: '4 Passengers', luggage: '2 Bags', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', price: '16', popular: true },
    { id: 'MARUTI_SUZUKI_ERTIGA', name: 'Maruti Ertiga', capacity: '6 Passengers', luggage: '3 Bags', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80', price: '19' },
    { id: 'TOYOTA_INNOVA', name: 'Toyota Innova', capacity: '6 Passengers', luggage: '4 Bags', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', price: '20' },
    { id: 'TOYOTA_INNOVA_CRYSTA', name: 'Innova Crysta', capacity: '6 Passengers', luggage: '4 Bags', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', price: '22' },
    { id: 'TEMPO_TRAVELLER_12', name: 'Tempo (12s)', capacity: '12 Passengers', luggage: '8 Bags', image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80', price: '28' },
    { id: 'TEMPO_TRAVELLER_16', name: 'Tempo (16s)', capacity: '16 Passengers', luggage: '10 Bags', image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80', price: '30' },
    { id: 'BUSES', name: 'All Buses (22-50s)', capacity: '22-50 Passengers', luggage: 'Large', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80', price: 'Custom' }
  ]

  const handleGetEstimate = async () => {
    setError('')
    setEstimate(null)

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
      
      // Smooth scroll to estimate
      setTimeout(() => {
        estimateRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 100)

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
    const priceText = vehicleType === 'BUSES' ? '*Price on Request*' : `*₹${estimate.totalAmount}*`

    const message = `*🚕 NEW QUICK RIDE REQUEST | G7 TRAVELS*
    
*🟢 Pickup:* ${pickupLocation}
*🔴 Drop:* ${dropLocation}
*🚘 Vehicle:* ${vehicleName}

*💰 FARE SUMMARY*
- Estimated Fare: ${priceText}

Please confirm my booking. Thank you! ✅`

    const whatsappUrl = `https://wa.me/919014878313?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setIsLoading(false)
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card className="border-0 shadow-lg ring-1 ring-slate-100">
        <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-6 rounded-t-xl">
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Car className="h-6 w-6 text-orange-600" />
            Quick Book
          </CardTitle>
          <CardDescription className="mt-1 font-medium">
            Enter your pickup and drop locations to get an instant fare estimate
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6 pt-6">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Pickup Location */}
            <div className="space-y-2 relative">
              <Label htmlFor="pickup" className="font-semibold text-slate-700 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 ring-4 ring-green-100" />
                Pickup Location
              </Label>
              <LocationAutocomplete
                id="pickup"
                value={pickupLocation}
                onChange={(value, coords) => {
                  setPickupLocation(value)
                  setPickupCoords(coords)
                  setEstimate(null)
                }}
                placeholder="Where are you starting?"
              />
            </div>

            {/* Drop Location */}
            <div className="space-y-2 relative">
              <Label htmlFor="drop" className="font-semibold text-slate-700 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 ring-4 ring-red-100" />
                Drop Location
              </Label>
              <LocationAutocomplete
                id="drop"
                value={dropLocation}
                onChange={(value, coords) => {
                  setDropLocation(value)
                  setDropCoords(coords)
                  setEstimate(null)
                }}
                placeholder="Where are you heading?"
              />
            </div>
          </div>

          <hr className="border-slate-100 my-2" />

          {/* Vehicle Type Selection */}
          <div className="space-y-4 pt-2">
            <Label className="text-lg font-bold text-slate-800">Select Vehicle Type</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {vehicleTypes.map((vehicle) => (
                <motion.div key={vehicle.id} whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="relative">
                  {vehicle.popular && (
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[9px] font-black tracking-wider px-2 py-0.5 rounded-full shadow-md z-10">
                      POPULAR
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      setVehicleType(vehicle.id)
                      setEstimate(null)
                    }}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all overflow-hidden h-full ${
                      vehicleType === vehicle.id
                        ? 'border-orange-500 bg-orange-50/50 shadow-md ring-1 ring-orange-500/20'
                        : 'border-slate-200 hover:border-orange-300 hover:shadow-sm bg-white'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-16 h-10 rounded-md overflow-hidden bg-slate-100 flex-shrink-0">
                        <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover" />
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                        vehicleType === vehicle.id ? 'border-orange-500 bg-orange-500' : 'border-slate-300'
                      }`}>
                        {vehicleType === vehicle.id && <CheckCircle2 className="h-3 w-3 text-white" />}
                      </div>
                    </div>
                    <h3 className="font-bold text-slate-800 text-sm leading-tight">{vehicle.name}</h3>
                    <div className="text-sm font-black text-orange-600 mt-1">
                      {vehicle.price === 'Custom' ? 'On Request' : <>₹{vehicle.price}<span className="text-[10px] text-slate-500 font-semibold">/km</span></>}
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Get Estimate Button */}
          <div className="pt-4">
            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <Button
                onClick={handleGetEstimate}
                disabled={isLoading}
                className="w-full h-14 text-lg font-black tracking-wide bg-slate-900 hover:bg-slate-800 text-white shadow-xl rounded-xl"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin text-orange-500" />
                    Calculating Best Route...
                  </>
                ) : (
                  <>
                    <Route className="mr-2 h-5 w-5 text-orange-500" />
                    Get Fare Estimate
                  </>
                )}
              </Button>
            </motion.div>
          </div>

          {/* Error Message */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 font-bold text-sm flex items-center"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 mr-3 animate-pulse" />
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Fare Estimate Result */}
          <div ref={estimateRef} className="scroll-m-24">
            <AnimatePresence>
              {estimate && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="pt-4"
                >
                  <Card className="border-2 border-orange-200 bg-white shadow-xl overflow-hidden rounded-2xl">
                    <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 to-red-600" />
                    <CardHeader className="pb-4 border-b border-slate-100 bg-slate-50/80">
                      <CardTitle className="flex items-center justify-between text-xl font-black">
                        <span>Fare Summary</span>
                        {vehicleType !== 'BUSES' && (
                          <div className="bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-base flex items-center font-black shadow-inner border border-orange-200">
                            <IndianRupee className="h-4 w-4 mr-0.5" />
                            {estimate.totalAmount}
                          </div>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6 pt-6">
                      
                      {/* Distance and Duration */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                          <div className="bg-blue-100 p-2.5 rounded-lg text-blue-600">
                            <Route className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Distance</p>
                            <p className="font-black text-slate-800 text-lg leading-tight">{estimate.distance} km</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                          <div className="bg-emerald-100 p-2.5 rounded-lg text-emerald-600">
                            <Clock className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Est. Time</p>
                            <p className="font-black text-slate-800 text-lg leading-tight">{estimate.duration} mins</p>
                          </div>
                        </div>
                      </div>

                      {/* Detailed Fare Breakdown */}
                      {vehicleType === 'BUSES' ? (
                        <div className="bg-orange-50/50 rounded-2xl p-6 border-2 border-orange-200 text-center space-y-2">
                          <h4 className="text-lg font-black text-orange-800 uppercase tracking-wide">Custom Bus Pricing</h4>
                          <p className="text-orange-700 text-sm font-semibold max-w-md mx-auto">
                            Bus trips vary based on duration and distance. Please confirm via WhatsApp for an exact quote.
                          </p>
                        </div>
                      ) : (
                        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3 shadow-inner">
                          <div className="flex justify-between text-sm text-slate-600 font-bold">
                            <span>Base Fare</span>
                            <span className="text-slate-900">₹{estimate.breakdown.baseFare}</span>
                          </div>
                          <div className="flex justify-between text-sm text-slate-600 font-bold">
                            <span>Distance Charge ({estimate.distance} km)</span>
                            <span className="text-slate-900">₹{estimate.breakdown.distanceCharge}</span>
                          </div>
                          <div className="flex justify-between text-sm text-slate-600 font-bold">
                            <span>Time Charge ({estimate.duration} mins)</span>
                            <span className="text-slate-900">₹{estimate.breakdown.timeCharge}</span>
                          </div>
                          <div className="flex justify-between text-sm text-slate-600 font-bold">
                            <span>GST (18%)</span>
                            <span className="text-slate-900">₹{estimate.breakdown.gst}</span>
                          </div>
                          
                          <div className="my-2 border-t-2 border-dashed border-slate-300" />
                          
                          <div className="flex justify-between text-sm text-green-700 font-black bg-green-100 p-2 rounded-lg -mx-2 px-2">
                            <span>Auto Discount (Time & GST Waived)</span>
                            <span>-₹{estimate.breakdown.discount}</span>
                          </div>
                          {estimate.surgeMultiplier > 1 && (
                            <div className="flex justify-between text-sm text-red-600 font-black mt-2 bg-red-50 p-2 rounded-lg -mx-2 px-2 border border-red-100">
                              <span className="flex items-center"><TrendingUp className="w-4 h-4 mr-1"/> High Demand Surge ({estimate.surgeMultiplier}x)</span>
                              <span>+₹{estimate.breakdown.surgeCharge}</span>
                            </div>
                          )}
                          
                          <div className="my-3 border-t-2 border-slate-300" />
                          
                          <div className="flex justify-between items-center pt-1">
                            <span className="text-lg font-black text-slate-800 uppercase tracking-wide">Final Amount</span>
                            <span className="text-3xl font-black text-orange-600 tracking-tighter">₹{estimate.totalAmount}</span>
                          </div>
                        </div>
                      )}

                      {/* Book Button */}
                      <div className="pt-2">
                        <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                          <Button
                            onClick={handleBookRide}
                            className="w-full h-16 text-xl rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-xl shadow-green-500/30 font-black tracking-wide"
                            size="lg"
                          >
                            <Phone className="mr-3 h-6 w-6" />
                            Book via WhatsApp
                          </Button>
                        </motion.div>
                      </div>

                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
