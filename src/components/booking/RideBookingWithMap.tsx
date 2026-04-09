'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { LocationAutocomplete } from '@/components/maps/LocationAutocomplete'
import { MapPin, Car, Clock, Route, IndianRupee, CheckCircle2, Loader2, Phone, Users, Briefcase, TrendingUp, Search } from 'lucide-react'
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
  
  // State for the selected vehicle (Default to Swift Dzire)
  const [vehicleType, setVehicleType] = useState('SWIFT_DZIRE')
  
  const [isLoading, setIsLoading] = useState(false)
  const [estimate, setEstimate] = useState<FareEstimate | null>(null)
  const [error, setError] = useState('')

  // Synced Vehicle Fleet with proper IDs
  const vehicleTypes = [
    { id: 'TOYOTA_ETIOS', name: 'Toyota Etios', capacity: '4 Passengers', luggage: '2 Bags', image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&q=80', price: '14', features: ['AC', 'Music'] },
    { id: 'SWIFT_DZIRE', name: 'Swift Dzire', capacity: '4 Passengers', luggage: '2 Bags', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', price: '16', features: ['AC', 'Comfortable'], popular: true },
    { id: 'MARUTI_SUZUKI_ERTIGA', name: 'Maruti Suzuki Ertiga', capacity: '6 Passengers', luggage: '3 Bags', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80', price: '19', features: ['AC', 'Spacious MUV'] },
    { id: 'TOYOTA_INNOVA', name: 'Toyota Innova', capacity: '6 Passengers', luggage: '4 Bags', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', price: '20', features: ['AC', 'Premium MUV'] },
    { id: 'TOYOTA_INNOVA_CRYSTA', name: 'Toyota Innova Crysta', capacity: '6 Passengers', luggage: '4 Bags', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', price: '22', features: ['AC', 'Luxury Comfort'] },
    { id: 'TEMPO_TRAVELLER_12', name: 'Traveller Tempo (12)', capacity: '12 Passengers', luggage: '8 Bags', image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80', price: '28', features: ['AC', 'Pushback Seats'] },
    { id: 'TEMPO_TRAVELLER_16', name: 'Traveller Tempo (16)', capacity: '16 Passengers', luggage: '10 Bags', image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80', price: '30', features: ['AC', 'Pushback Seats'] },
    { id: 'BUSES', name: 'All Buses (22-50 Seats)', capacity: '22-50 Passengers', luggage: 'Large Storage', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80', price: 'Custom', features: ['AC/Non-AC', 'Group Travel'] }
  ]

  const handleGetEstimate = async () => {
    setError('')
    setEstimate(null)

    if (!pickupLocation || !pickupCoords.lat || !dropLocation || !dropCoords.lat) {
      setError('Please select both pickup and drop locations from the dropdown suggestions.')
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/rides/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
      
      // Auto-scroll to the estimate after a short delay
      setTimeout(() => {
        estimateRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 100)

    } catch (err: any) {
      setError(err.message || 'Failed to calculate fare. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleWhatsAppBooking = () => {
    if (!estimate) return
    setIsLoading(true)

    const vehicleName = vehicleTypes.find(v => v.id === vehicleType)?.name || vehicleType
    const priceText = vehicleType === 'BUSES' ? '*Price on Request*' : `*₹${estimate.totalAmount}*`

    const message = `*🚕 NEW QUICK RIDE | G7 TRAVELS*
    
*🟢 Pickup:* ${pickupLocation}
*🔴 Drop:* ${dropLocation}
*🚘 Vehicle:* ${vehicleName}

*💰 FARE SUMMARY*
- Payment: Cash/UPI
- Total Fare: ${priceText}

Please confirm my booking. Thank you! ✅`

    const whatsappUrl = `https://wa.me/919014878313?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setIsLoading(false)
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card className="border-0 shadow-lg ring-1 ring-slate-100">
        <CardHeader className="border-b bg-slate-50/50 pb-6 rounded-t-xl">
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Car className="h-6 w-6 text-orange-600" />
            Quick Ride Booking
          </CardTitle>
          <CardDescription className="mt-1 font-medium">
            Enter your pickup and drop locations to instantly find a vehicle and get a fare estimate.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-8 pt-8">
          
          {/* Location Inputs */}
          <div className="grid md:grid-cols-2 gap-6 relative z-10">
            <div className="space-y-2 relative bg-white">
              <div className="absolute -left-6 top-9 w-4 h-4 rounded-full bg-green-100 border-4 border-green-500 flex items-center justify-center shadow-sm md:hidden" />
              <Label htmlFor="pickup" className="font-semibold text-slate-700 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-green-600" />
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

            <div className="space-y-2 relative bg-white">
              <div className="absolute -left-6 top-9 w-4 h-4 rounded-full bg-red-100 border-4 border-red-500 flex items-center justify-center shadow-sm md:hidden" />
              <Label htmlFor="drop" className="font-semibold text-slate-700 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-red-600" />
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

          <hr className="border-slate-100" />

          {/* Vehicle Type Selection */}
          <div className="space-y-4 pt-2">
            <Label className="text-lg font-bold text-slate-800">Select Vehicle</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {vehicleTypes.map((vehicle) => {
                // FIXED LOGIC: Checks the actual ID against the state
                const isSelected = vehicleType === vehicle.id;
                
                return (
                  <motion.div
                    key={vehicle.id}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative"
                  >
                    {vehicle.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] font-black tracking-wider px-3 py-1 rounded-full shadow-md z-10">
                        MOST POPULAR
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        setVehicleType(vehicle.id) // Sets the ID correctly
                        setEstimate(null)
                      }}
                      className={`w-full p-5 rounded-xl border-2 text-left transition-all overflow-hidden h-full ${
                        isSelected
                          ? 'border-orange-500 bg-orange-50/50 shadow-[0_0_20px_rgba(249,115,22,0.15)] ring-1 ring-orange-500/20'
                          : 'border-slate-200 hover:border-orange-300 hover:shadow-md bg-white'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-24 h-14 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0 shadow-inner">
                          <img
                            src={vehicle.image}
                            alt={vehicle.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                          isSelected ? 'border-orange-500 bg-orange-500' : 'border-slate-300'
                        }`}>
                          {isSelected && <CheckCircle2 className="h-4 w-4 text-white" />}
                        </div>
                      </div>
                      <h3 className="font-bold text-slate-800 text-lg">{vehicle.name}</h3>
                      
                      <div className="text-xl font-black text-orange-600 mt-2 tracking-tight">
                        {vehicle.price === 'Custom' ? 'On Request' : (
                          <>₹{vehicle.price}<span className="text-sm text-slate-500 font-semibold tracking-normal">/km</span></>
                        )}
                      </div>

                      <div className="flex items-center gap-3 text-sm text-slate-500 font-medium mt-1 mb-3">
                        <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {vehicle.capacity}</span>
                        <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> {vehicle.luggage}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {vehicle.features.map((feature, i) => (
                          <span
                            key={i}
                            className={`text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-md ${
                              isSelected ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </button>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Get Estimate Button */}
          <div className="pt-4">
            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <Button
                onClick={handleGetEstimate}
                disabled={isLoading}
                className="w-full h-16 text-lg font-black tracking-wide bg-slate-900 hover:bg-slate-800 text-white shadow-xl shadow-slate-900/20 rounded-xl"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-6 w-6 animate-spin text-orange-500" />
                    Calculating Fare...
                  </>
                ) : (
                  <>
                    <Search className="mr-2 h-6 w-6 text-orange-500" />
                    Get Instant Estimate
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
                className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 font-bold text-sm flex items-center shadow-sm"
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
                  className="space-y-4 pt-4"
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
                      
                      {/* Distance and Duration Cards */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                          <div className="bg-blue-100 p-2.5 rounded-lg text-blue-600">
                            <Route className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Total Distance</p>
                            <p className="font-black text-slate-800 text-lg leading-tight">{estimate.distance} km</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                          <div className="bg-emerald-100 p-2.5 rounded-lg text-emerald-600">
                            <Clock className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Est. Travel Time</p>
                            <p className="font-black text-slate-800 text-lg leading-tight">{estimate.duration} mins</p>
                          </div>
                        </div>
                      </div>

                      {/* Detailed Fare Breakdown or Bus Prompt */}
                      {vehicleType === 'BUSES' ? (
                        <div className="bg-orange-50/50 rounded-2xl p-8 border-2 border-orange-200 text-center space-y-3">
                          <h4 className="text-xl font-black text-orange-800 uppercase tracking-wide">Custom Bus Pricing</h4>
                          <p className="text-orange-700 font-semibold max-w-md mx-auto">
                            Because bus trips vary greatly based on duration and total distance, please confirm via WhatsApp for an exact, tailored quote for your group.
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
                      <div className="pt-4">
                        <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                          <Button
                            className="w-full h-16 text-xl rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-xl shadow-green-500/30 font-black tracking-wide"
                            disabled={isLoading}
                            onClick={handleWhatsAppBooking}
                          >
                            <Phone className="mr-3 h-6 w-6" />
                            Confirm Ride via WhatsApp
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
