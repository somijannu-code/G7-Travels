'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { MapPin, Car, Clock, ArrowRight, Search, Navigation, Calendar, RotateCcw, IndianRupee, Phone, CheckCircle2, Users, Briefcase, Gift } from 'lucide-react'
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

// Synced with your exact fleet and pricing
const VEHICLE_OPTIONS = [
  { type: 'TOYOTA_ETIOS', name: 'Toyota Etios', image: '🚗', capacity: '4', luggage: '2', price: '₹14/km', basePrice: 14, estimatedTime: '3 min' },
  { type: 'SWIFT_DZIRE', name: 'Swift Dzire', image: '🚙', capacity: '4', luggage: '2', price: '₹16/km', basePrice: 16, estimatedTime: '4 min', popular: true },
  { type: 'MARUTI_SUZUKI_ERTIGA', name: 'Maruti Ertiga', image: '🚐', capacity: '6', luggage: '3', price: '₹19/km', basePrice: 19, estimatedTime: '5 min' },
  { type: 'TOYOTA_INNOVA', name: 'Toyota Innova', image: '🚘', capacity: '6', luggage: '4', price: '₹20/km', basePrice: 20, estimatedTime: '6 min' },
  { type: 'TOYOTA_INNOVA_CRYSTA', name: 'Innova Crysta', image: '✨', capacity: '6', luggage: '4', price: '₹22/km', basePrice: 22, estimatedTime: '8 min' },
  { type: 'TEMPO_TRAVELLER_12', name: 'Tempo (12s)', image: '🚌', capacity: '12', luggage: '8', price: '₹28/km', basePrice: 28, estimatedTime: '10 min' },
  { type: 'TEMPO_TRAVELLER_16', name: 'Tempo (16s)', image: '🚌', capacity: '16', luggage: '10', price: '₹30/km', basePrice: 30, estimatedTime: '12 min' },
  { type: 'BUSES', name: 'All Buses', image: '🚍', capacity: '22-50', luggage: 'Max', price: 'Custom', basePrice: 0, estimatedTime: 'Contact Us' }
]

const POPULAR_LOCATIONS = [
  'Tirumala Temple',
  'Renigunta Airport',
  'Tirupati Railway Station',
  'Sri Venkateswara Zoological Park',
  'Chandragiri Fort',
  'ISKCON Temple',
  'Kapila Theertham'
]

// Animation variants for smooth sliding
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 20 : -20,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 20 : -20,
    opacity: 0
  })
}

export function RideBooking() {
  const [pickup, setPickup] = useState('')
  const [drop, setDrop] = useState('')
  const [selectedVehicle, setSelectedVehicle] = useState<string>('SWIFT_DZIRE')
  const [showPopular, setShowPopular] = useState<'pickup' | 'drop' | null>(null)
  const [fareEstimate, setFareEstimate] = useState<FareEstimate | null>(null)
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState<'location' | 'vehicle' | 'confirm'>('location')
  const [swapLocations, setSwapLocations] = useState(false)
  const [direction, setDirection] = useState(1) // 1 for forward, -1 for backward

  const changeStep = (newStep: 'location' | 'vehicle' | 'confirm', dir: number) => {
    setDirection(dir)
    setStep(newStep)
  }

  const handleGetEstimate = async () => {
    if (!pickup || !drop) return

    setLoading(true)
    try {
      // Mock coordinates for quick book UI
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
        changeStep('vehicle', 1)
      }
    } catch (error) {
      console.error('Failed to get estimate:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleWhatsAppBooking = () => {
    if (!fareEstimate) return

    const vehicleName = VEHICLE_OPTIONS.find(v => v.type === selectedVehicle)?.name || selectedVehicle
    const priceText = selectedVehicle === 'BUSES' ? '*Price on Request*' : `*₹${fareEstimate.totalAmount}*`
    
    const message = `*🚕 New Quick Ride Booking (G7 Travels)*
    
*🟢 Pickup:* ${pickup}
*🔴 Drop:* ${drop}
*🚘 Vehicle:* ${vehicleName}

*💰 FARE SUMMARY*
- Estimated Fare: ${priceText}

Please confirm my ride. Thank you!`

    const whatsappUrl = `https://wa.me/919014878313?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    changeStep('confirm', 1)
  }

  const handleSwap = () => {
    const temp = pickup
    setPickup(drop)
    setDrop(temp)
    setSwapLocations(!swapLocations)
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6 overflow-hidden pb-4">
      {/* Premium Stepper */}
      <div className="flex items-center justify-center gap-2 mb-6 px-4">
        <div className={`flex items-center gap-2 transition-colors duration-300 ${step === 'location' ? 'text-orange-600' : 'text-green-600'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-sm transition-colors duration-300 ${step === 'location' ? 'bg-orange-500 text-white' : 'bg-green-500 text-white'}`}>
            {step !== 'location' ? <CheckCircle2 className="w-4 h-4" /> : '1'}
          </div>
          <span className="text-sm font-bold hidden sm:block">Location</span>
        </div>
        <div className={`w-12 sm:w-20 h-1 rounded-full transition-colors duration-500 ${step !== 'location' ? 'bg-green-500' : 'bg-slate-200'}`} />
        
        <div className={`flex items-center gap-2 transition-colors duration-300 ${step === 'vehicle' ? 'text-orange-600' : step === 'confirm' ? 'text-green-600' : 'text-slate-400'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-sm transition-colors duration-300 ${step === 'vehicle' ? 'bg-orange-500 text-white' : step === 'confirm' ? 'bg-green-500 text-white' : 'bg-slate-100 text-slate-500'}`}>
            {step === 'confirm' ? <CheckCircle2 className="w-4 h-4" /> : '2'}
          </div>
          <span className="text-sm font-bold hidden sm:block">Vehicle</span>
        </div>
        <div className={`w-12 sm:w-20 h-1 rounded-full transition-colors duration-500 ${step === 'confirm' ? 'bg-green-500' : 'bg-slate-200'}`} />
        
        <div className={`flex items-center gap-2 transition-colors duration-300 ${step === 'confirm' ? 'text-green-600' : 'text-slate-400'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-sm transition-colors duration-300 ${step === 'confirm' ? 'bg-green-500 text-white' : 'bg-slate-100 text-slate-500'}`}>
            3
          </div>
          <span className="text-sm font-bold hidden sm:block">Confirm</span>
        </div>
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        {step === 'location' && (
          <motion.div
            key="location"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Card className="border-0 shadow-lg ring-1 ring-slate-100">
              <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Navigation className="w-5 h-5 text-orange-600" />
                    Where to?
                  </CardTitle>
                  
                  {/* NEW PACKAGES BUTTON */}
                  <Link href="/pilgrimage-packages" passHref>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm" 
                        className="border-orange-200 text-orange-700 hover:bg-orange-50 bg-white shadow-sm font-bold"
                      >
                        <Gift className="w-4 h-4 mr-1.5 text-orange-500" />
                        Packages
                      </Button>
                    </motion.div>
                  </Link>

                </div>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div className="space-y-2 relative">
                  <Label htmlFor="pickup" className="font-semibold text-slate-700">Pickup Location</Label>
                  <div className="relative group">
                    <div className="absolute left-3 top-3.5 w-2 h-2 rounded-full bg-green-500 ring-4 ring-green-100" />
                    <Input
                      id="pickup"
                      placeholder="Enter pickup location"
                      className="pl-9 pr-10 h-12 text-base transition-shadow focus-visible:ring-orange-500 border-slate-200"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      onFocus={() => setShowPopular('pickup')}
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-1 top-1.5 h-9 w-9 text-slate-400 hover:text-orange-600"
                      onClick={() => {
                        setPickup('Current Location')
                        setShowPopular(null)
                      }}
                      title="Use current location"
                    >
                      <Navigation className="h-4 w-4" />
                    </Button>
                  </div>

                  <AnimatePresence>
                    {showPopular === 'pickup' && (
                      <motion.div
                        initial={{ opacity: 0, y: -5, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -5, height: 0 }}
                        className="bg-white border border-slate-100 shadow-xl rounded-xl p-3 space-y-1 absolute w-full z-20 top-full mt-2"
                      >
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">Popular Locations</p>
                        {POPULAR_LOCATIONS.slice(0, 4).map((location) => (
                          <Button
                            key={location}
                            variant="ghost"
                            className="w-full justify-start text-sm h-10 hover:bg-orange-50 hover:text-orange-700"
                            onClick={() => {
                              setPickup(location)
                              setShowPopular(null)
                            }}
                          >
                            <MapPin className="w-4 h-4 mr-3 text-slate-400" />
                            {location}
                          </Button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex justify-center -my-2 relative z-10">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10 rounded-full bg-white border-slate-200 shadow-sm hover:border-orange-300 hover:text-orange-600"
                      onClick={handleSwap}
                    >
                      <RotateCcw className={`h-4 w-4 transition-transform duration-500 ${swapLocations ? 'rotate-180' : ''}`} />
                    </Button>
                  </motion.div>
                </div>

                <div className="space-y-2 relative">
                  <Label htmlFor="drop" className="font-semibold text-slate-700">Drop Location</Label>
                  <div className="relative">
                    <div className="absolute left-3 top-3.5 w-2 h-2 rounded-full bg-red-500 ring-4 ring-red-100" />
                    <Input
                      id="drop"
                      placeholder="Enter drop location"
                      className="pl-9 h-12 text-base transition-shadow focus-visible:ring-orange-500 border-slate-200"
                      value={drop}
                      onChange={(e) => setDrop(e.target.value)}
                      onFocus={() => setShowPopular('drop')}
                    />
                  </div>

                  <AnimatePresence>
                    {showPopular === 'drop' && (
                      <motion.div
                        initial={{ opacity: 0, y: -5, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -5, height: 0 }}
                        className="bg-white border border-slate-100 shadow-xl rounded-xl p-3 space-y-1 absolute w-full z-20 top-full mt-2"
                      >
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">Popular Locations</p>
                        {POPULAR_LOCATIONS.map((location) => (
                          <Button
                            key={location}
                            variant="ghost"
                            className="w-full justify-start text-sm h-10 hover:bg-orange-50 hover:text-orange-700"
                            onClick={() => {
                              setDrop(location)
                              setShowPopular(null)
                            }}
                          >
                            <MapPin className="w-4 h-4 mr-3 text-slate-400" />
                            {location}
                          </Button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button variant="default" className="flex-1 h-12 bg-slate-900 hover:bg-slate-800 text-white shadow-md rounded-xl">
                    <Car className="w-4 h-4 mr-2" /> Ride Now
                  </Button>
                  <Button variant="outline" className="flex-1 h-12 border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl">
                    <Calendar className="w-4 h-4 mr-2" /> Schedule
                  </Button>
                </div>

                <Button
                  className="w-full h-14 text-lg font-bold bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 shadow-lg shadow-orange-500/25 mt-2 rounded-xl"
                  disabled={!pickup || !drop || loading}
                  onClick={handleGetEstimate}
                >
                  {loading ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                      <Loader2 className="w-5 h-5 mr-2" />
                    </motion.div>
                  ) : (
                    <>
                      <Search className="w-5 h-5 mr-2" />
                      Find Vehicles
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {step === 'vehicle' && (
          <motion.div
            key="vehicle"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Card className="border-0 shadow-lg ring-1 ring-slate-100">
              <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-4">
                <CardTitle className="text-xl flex items-center justify-between">
                  <span>Select Vehicle</span>
                  {fareEstimate && (
                    <div className="flex items-center gap-3 text-sm font-medium bg-white px-3 py-1 rounded-full shadow-sm border border-slate-100">
                      <span className="flex items-center text-slate-600"><Navigation className="w-3.5 h-3.5 mr-1" />{fareEstimate.distance} km</span>
                      <span className="flex items-center text-slate-600"><Clock className="w-3.5 h-3.5 mr-1" />{fareEstimate.duration} min</span>
                    </div>
                  )}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4 pt-4 bg-slate-50/30">
                
                {/* Vehicle List */}
                <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1 pb-2 custom-scrollbar">
                  {VEHICLE_OPTIONS.map((vehicle) => {
                    const isSelected = selectedVehicle === vehicle.type;
                    const isBus = vehicle.type === 'BUSES';
                    
                    return (
                      <motion.div whileTap={{ scale: 0.98 }} key={vehicle.type}>
                        <div
                          className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            isSelected 
                              ? 'border-orange-500 bg-orange-50/50 shadow-md' 
                              : 'border-slate-200 bg-white hover:border-orange-300 hover:shadow-sm'
                          }`}
                          onClick={() => setSelectedVehicle(vehicle.type)}
                        >
                          {vehicle.popular && (
                            <div className="absolute -top-2.5 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[9px] font-black px-2 py-0.5 rounded-sm shadow-sm tracking-wider">
                              POPULAR
                            </div>
                          )}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className={`text-4xl w-14 h-14 flex items-center justify-center rounded-xl bg-slate-50 border ${isSelected ? 'border-orange-200' : 'border-slate-100'}`}>
                                {vehicle.image}
                              </div>
                              <div>
                                <h3 className="font-bold text-slate-800 text-lg leading-tight">{vehicle.name}</h3>
                                <div className="flex items-center gap-3 text-xs text-slate-500 mt-1.5">
                                  <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {vehicle.capacity}</span>
                                  <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> {vehicle.luggage}</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              {isSelected && fareEstimate && !isBus ? (
                                <p className="text-xl font-black text-orange-600">₹{Math.round(fareEstimate.totalAmount)}</p>
                              ) : isBus && isSelected ? (
                                <p className="text-sm font-bold text-orange-600">On Request</p>
                              ) : (
                                <p className="text-sm font-bold text-slate-400">{vehicle.price}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                {fareEstimate?.surgeMultiplier && fareEstimate.surgeMultiplier > 1 && selectedVehicle !== 'BUSES' && (
                  <div className="bg-red-50 border border-red-100 text-red-700 p-3 rounded-xl text-sm flex items-center gap-2 shadow-sm">
                    <span className="font-bold flex items-center"><TrendingUp className="w-4 h-4 mr-1"/> Surge:</span>
                    <span className="font-medium">Fares are {Math.round((fareEstimate.surgeMultiplier - 1) * 100)}% higher due to demand</span>
                  </div>
                )}

                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    className="flex-1 h-14 rounded-xl border-slate-200 hover:bg-slate-50 font-semibold"
                    onClick={() => changeStep('location', -1)}
                  >
                    Back
                  </Button>
                  <Button
                    className="flex-[2] h-14 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg shadow-green-500/25"
                    disabled={loading}
                    onClick={handleWhatsAppBooking}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Book via WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {step === 'confirm' && (
          <motion.div
            key="confirm"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Card className="border-0 shadow-lg ring-1 ring-green-100 bg-gradient-to-b from-green-50/50 to-white">
              <CardContent className="pt-10 pb-8 text-center px-6">
                <motion.div 
                  initial={{ scale: 0 }} 
                  animate={{ scale: 1 }} 
                  transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                  className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-500/30"
                >
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </motion.div>
                
                <h2 className="text-3xl font-black text-slate-800 mb-3">Request Sent!</h2>
                <p className="text-slate-600 font-medium mb-8 max-w-sm mx-auto leading-relaxed">
                  Your ride request has been securely sent to our dispatch team via WhatsApp. We will confirm your driver shortly.
                </p>

                {fareEstimate && selectedVehicle !== 'BUSES' && (
                  <div className="bg-white rounded-2xl p-5 mb-8 text-left border border-slate-100 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-green-500" />
                    <h3 className="font-bold text-slate-800 mb-4 flex items-center"><IndianRupee className="w-4 h-4 mr-1 text-slate-400"/> Fare Breakdown</h3>
                    <div className="space-y-2.5 text-sm">
                      <div className="flex justify-between font-medium">
                        <span className="text-slate-500">Base Fare</span>
                        <span className="text-slate-800">₹{fareEstimate.breakdown.baseFare}</span>
                      </div>
                      <div className="flex justify-between font-medium">
                        <span className="text-slate-500">Distance ({fareEstimate.distance} km)</span>
                        <span className="text-slate-800">₹{fareEstimate.breakdown.distanceCharge}</span>
                      </div>
                      <div className="flex justify-between font-medium">
                        <span className="text-slate-500">Time ({fareEstimate.duration} min)</span>
                        <span className="text-slate-800">₹{fareEstimate.breakdown.timeCharge}</span>
                      </div>
                      <div className="flex justify-between font-medium text-green-600 bg-green-50 p-1.5 rounded-md -mx-1.5 px-1.5">
                        <span>Auto Discount</span>
                        <span>-₹{fareEstimate.breakdown.discount}</span>
                      </div>
                      <Separator className="my-3" />
                      <div className="flex justify-between font-black text-lg items-center">
                        <span className="text-slate-800">Total</span>
                        <span className="text-green-600 text-xl">₹{fareEstimate.totalAmount}</span>
                      </div>
                    </div>
                  </div>
                )}

                <Button
                  className="w-full h-14 text-lg font-bold bg-slate-900 hover:bg-slate-800 text-white rounded-xl"
                  onClick={() => {
                    changeStep('location', -1)
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
      </AnimatePresence>
    </div>
  )
}
