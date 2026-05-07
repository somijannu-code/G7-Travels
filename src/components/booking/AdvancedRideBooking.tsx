'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Switch } from '@/components/ui/switch'
import { Input } from '@/components/ui/input'
import { LocationAutocomplete } from '@/components/maps/LocationAutocomplete'
import { cn } from '@/lib/utils'
import { format, addDays } from 'date-fns'
import { MapPin, Car, Clock, Route, IndianRupee, CheckCircle2, Settings, Loader2, Calendar as CalendarIcon, Plus, X, Star, Volume2, Snowflake, Phone, Navigation, Share2, Heart, Trash2, ChevronRight, Home, Briefcase, User, Wallet, Shield, CircleDot, Users } from 'lucide-react'
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

interface Stop {
  id: string
  location: string
  coords: { lat: number; lon: number }
}

interface PromoCode {
  code: string
  discount: number
  type: 'PERCENTAGE' | 'FLAT'
  maxDiscount?: number
  minAmount?: number
  validUntil?: Date
}

interface FavoriteLocation {
  id: string
  name: string
  address: string
  coords: { lat: number; lon: number }
  type: 'HOME' | 'WORK' | 'OTHER'
}

export function AdvancedRideBooking() {
  const estimateRef = useRef<HTMLDivElement>(null)

  const [pickupLocation, setPickupLocation] = useState('')
  const [pickupCoords, setPickupCoords] = useState({ lat: 0, lon: 0 })
  const [dropLocation, setDropLocation] = useState('')
  const [dropCoords, setDropCoords] = useState({ lat: 0, lon: 0 })

  const [stops, setStops] = useState<Stop[]>([])
  const [showStops, setShowStops] = useState(false)

  const [scheduleRide, setScheduleRide] = useState(false)
  const [scheduleDate, setScheduleDate] = useState<Date | undefined>(new Date())
  const [scheduleTime, setScheduleTime] = useState('')

  // Set default to Swift Dzire
  const [vehicleType, setVehicleType] = useState('SWIFT_DZIRE')

  const [acRequired, setAcRequired] = useState(true)
  const [musicPreference, setMusicPreference] = useState('none')
  const [needChildSeat, setNeedChildSeat] = useState(false)
  const [wheelchairAccessible, setWheelchairAccessible] = useState(false)
  const [petFriendly, setPetFriendly] = useState(false)
  const [femaleDriver, setFemaleDriver] = useState(false)

  const [tripNotes, setTripNotes] = useState('')
  const [promoCode, setPromoCode] = useState('')
  const [appliedPromo, setAppliedPromo] = useState<PromoCode | null>(null)
  const [promoError, setPromoError] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('CASH')

  const [favoriteLocations] = useState<FavoriteLocation[]>([
    { id: '1', name: 'Home', address: '123 Main Street, Tirupati', coords: { lat: 13.6288, lon: 79.4192 }, type: 'HOME' },
    { id: '2', name: 'Work', address: '456 Business Park, Tirupati', coords: { lat: 13.6158, lon: 79.4292 }, type: 'WORK' }
  ])
  const [showFavorites, setShowFavorites] = useState(false)

  const [isLoading, setIsLoading] = useState(false)
  const [estimate, setEstimate] = useState<FareEstimate | null>(null)
  const [error, setError] = useState('')

  // NEW VEHICLE CONFIGURATION
  const vehicleTypes = [
    { id: 'TOYOTA_ETIOS', name: 'Toyota Etios', capacity: '4 Passengers', luggage: '2 Bags', image: 'https://media.zigcdn.com/media/content/2014/Jul/toyota-etios-xclusive-pic-photo-image-04072014-m1_560x420.jpg?tr=w-420%27', price: '14', features: ['AC', 'Music'] },
    { id: 'SWIFT_DZIRE', name: 'Swift Dzire', capacity: '4 Passengers', luggage: '2 Bags', image: 'https://www.ecorentacar.com/wp-content/uploads/2022/11/01-4.jpg', price: '16', features: ['AC', 'Comfortable'], popular: true },
    { id: 'MARUTI_SUZUKI_ERTIGA', name: 'Maruti Suzuki Ertiga', capacity: '6 Passengers', luggage: '3 Bags', image: 'https://blogs.gomechanic.com/wp-content/uploads/2020/04/How-the-Maruti-Suzuki-Ertiga-dominates-the-MPV-segment-01.jpg', price: '19', features: ['AC', 'Spacious MUV'] },
    { id: 'TOYOTA_INNOVA', name: 'Toyota Innova', capacity: '6 Passengers', luggage: '4 Bags', image: 'https://images.financialexpressdigital.com/2021/07/toyota-Innova-crysta-2021.jpg', price: '20', features: ['AC', 'Premium MUV'] },
    { id: 'TOYOTA_INNOVA_CRYSTA', name: 'Toyota Innova Crysta', capacity: '6 Passengers', luggage: '4 Bags', image: 'https://i.ytimg.com/vi/c_KKvkl1unE/sddefault.jpg', price: '22', features: ['AC', 'Luxury Comfort'] },
    { id: 'TEMPO_TRAVELLER_12', name: 'Traveller Tempo (12)', capacity: '12 Passengers', luggage: '8 Bags', image: 'https://www.simplytrip.in/articles/wp-content/uploads/2025/10/12-seater-tempo.jpg.webp', price: '28', features: ['AC', 'Pushback Seats'] },
    { id: 'TEMPO_TRAVELLER_16', name: 'Traveller Tempo (16)', capacity: '16 Passengers', luggage: '10 Bags', image: 'https://tejas-travels-prod.s3.ap-south-1.amazonaws.com/513922250_9969870213090517_5965926465895803421_n.jpg', price: '30', features: ['AC', 'Pushback Seats'] },
    { id: 'BUSES', name: 'All Buses (22-50 Seats)', capacity: '22-50 Passengers', luggage: 'Large Storage', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80', price: 'Custom', features: ['AC/Non-AC', 'Group Travel'] }
  ]

  const paymentMethods = [
    { id: 'CASH', name: 'Pay by Cash', icon: <IndianRupee className="h-4 w-4" /> },
    { id: 'UPI', name: 'UPI Payment', icon: <Phone className="h-4 w-4" /> },
    { id: 'CARD', name: 'Credit/Debit Card', icon: <Star className="h-4 w-4" /> },
    { id: 'WALLET', name: 'G7 Wallet', icon: <Wallet className="h-4 w-4" /> }
  ]

  const musicOptions = [
    { value: 'none', label: 'No Preference' },
    { value: 'telugu', label: 'Telugu Music' },
    { value: 'hindi', label: 'Hindi Music' },
    { value: 'english', label: 'English Music' },
    { value: 'devotional', label: 'Devotional' },
    { value: 'silent', label: 'Silent Ride' }
  ]

  const handleAddStop = () => {
    const newStop: Stop = { id: Date.now().toString(), location: '', coords: { lat: 0, lon: 0 } }
    setStops([...stops, newStop])
  }

  const handleRemoveStop = (id: string) => {
    setStops(stops.filter(stop => stop.id !== id))
  }

  const handleStopChange = (id: string, location: string, coords: { lat: number; lon: number }) => {
    setStops(stops.map(stop => stop.id === id ? { ...stop, location, coords } : stop))
    setEstimate(null)
  }

  const handleApplyPromo = async () => {
    if (!promoCode.trim()) {
      setPromoError('Please enter a promo code')
      return
    }
    try {
      const response = await fetch('/api/promo/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: promoCode, amount: estimate?.totalAmount || 0 })
      })
      const data = await response.json()
      if (response.ok) {
        setAppliedPromo(data.promo)
        setPromoError('')
      } else {
        setPromoError(data.error || 'Invalid promo code')
        setAppliedPromo(null)
      }
    } catch (err) {
      setPromoError('Failed to validate promo code')
    }
  }

  const handleSelectFavorite = (fav: FavoriteLocation, isPickup: boolean) => {
    if (isPickup) {
      setPickupLocation(fav.address)
      setPickupCoords(fav.coords)
    } else {
      setDropLocation(fav.address)
      setDropCoords(fav.coords)
    }
    setShowFavorites(false)
    setEstimate(null)
  }

  const handleGetEstimate = async () => {
    setError('')
    setEstimate(null)
    setAppliedPromo(null)

    if (!pickupLocation || !pickupCoords.lat || !dropLocation || !dropCoords.lat) {
      setError('Please select both pickup and drop locations')
      return
    }

    for (const stop of stops) {
      if (!stop.location || !stop.coords.lat) {
        setError('Please fill in all stop locations')
        return
      }
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
          vehicleType,
          stops: stops.map(s => ({ lat: s.coords.lat, lon: s.coords.lon }))
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get fare estimate')
      }

      setEstimate(data.estimate)
      setTimeout(() => {
        estimateRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 100)

    } catch (err: any) {
      setError(err.message || 'Failed to calculate fare')
    } finally {
      setIsLoading(false)
    }
  }

  const calculatePromoDiscount = (): number => {
    if (!estimate || !appliedPromo) return 0
    const amount = estimate.totalAmount
    let discount = 0
    if (appliedPromo.type === 'PERCENTAGE') {
      discount = (amount * appliedPromo.discount) / 100
      if (appliedPromo.maxDiscount && discount > appliedPromo.maxDiscount) {
        discount = appliedPromo.maxDiscount
      }
    } else {
      discount = appliedPromo.discount
    }
    return discount
  }

  const getFinalAmount = (): number => {
    if (!estimate) return 0
    return Math.max(0, estimate.totalAmount - calculatePromoDiscount())
  }

  const handleWhatsAppBooking = () => {
    if (!estimate) return
    setIsLoading(true)

    const stopsText = stops.length > 0 ? `\n*📍 Stops:* \n  - ${stops.map(s => s.location).join('\n  - ')}` : ''
    const scheduleText = scheduleRide 
      ? `\n*⏰ Scheduled For:* ${scheduleDate ? format(scheduleDate, "PPP") : ''} at ${scheduleTime}` 
      : '\n*⏰ Time:* Immediate (Ride Now)'
    
    const activePrefs = [
      acRequired ? 'AC' : '',
      needChildSeat ? 'Child Seat' : '',
      wheelchairAccessible ? 'Wheelchair Accessible' : '',
      petFriendly ? 'Pet Friendly' : '',
      femaleDriver ? 'Female Driver' : '',
      musicPreference !== 'none' ? `Music: ${musicPreference}` : ''
    ].filter(Boolean).join(', ')
    
    const preferencesText = activePrefs ? `\n*⚙️ Preferences:* ${activePrefs}` : ''
    const notesText = tripNotes ? `\n*📝 Notes:* ${tripNotes}` : ''
    const promoText = appliedPromo ? `\n*🎟️ Promo Applied:* ${appliedPromo.code} (Saved ₹${calculatePromoDiscount()})` : ''
    const vehicleName = vehicleTypes.find(v => v.id === vehicleType)?.name || vehicleType

    const priceText = vehicleType === 'BUSES' ? '*Price on Request*' : `*₹${getFinalAmount()}*`

    const message = `*🚕 NEW RIDE REQUEST | G7 TRAVELS*
    
*🟢 Pickup:* ${pickupLocation}${stopsText}
*🔴 Drop:* ${dropLocation}
${scheduleText}
*🚘 Vehicle:* ${vehicleName}

*💰 FARE SUMMARY*
- Payment: ${paymentMethod}
- Total Fare: ${priceText}${promoText}
${preferencesText}${notesText}

Please confirm my booking. Thank you! ✅`

    const whatsappUrl = `https://wa.me/919014878313?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setIsLoading(false)
  }

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      <Card className="border-0 shadow-lg">
        <CardHeader className="border-b bg-slate-50/50 pb-6">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Car className="h-6 w-6 text-orange-600" />
                Advanced Booking
              </CardTitle>
              <CardDescription className="mt-1">
                Customize your journey with multiple stops, scheduling, and specific preferences.
              </CardDescription>
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setShowFavorites(!showFavorites)}
              className="hidden md:flex"
            >
              <Heart className="h-4 w-4 mr-2 text-orange-500" />
              Saved Locations
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-8 pt-6">
          {/* Route Timeline UI */}
          <div className="relative pl-4 md:pl-8">
            <div className="absolute left-[23px] md:left-[39px] top-8 bottom-8 w-0.5 border-l-2 border-dashed border-slate-300 z-0" />

            <div className="grid md:grid-cols-2 gap-4 relative z-10">
              {/* Pickup Location */}
              <div className="space-y-2 relative bg-white">
                <div className="absolute -left-6 md:-left-10 top-9 w-4 h-4 rounded-full bg-green-100 border-4 border-green-500 flex items-center justify-center shadow-sm" />
                <Label htmlFor="pickup" className="font-semibold text-slate-700">Pickup Location</Label>
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

              <div className="hidden md:block" />

              {/* Dynamic Stops */}
              <AnimatePresence>
                {showStops && stops.map((stop, index) => (
                  <motion.div
                    key={stop.id}
                    initial={{ opacity: 0, height: 0, x: -20 }}
                    animate={{ opacity: 1, height: 'auto', x: 0 }}
                    exit={{ opacity: 0, height: 0, x: -20 }}
                    className="space-y-2 relative bg-white col-span-1 md:col-span-2"
                  >
                    <div className="absolute -left-6 md:-left-10 top-9 w-4 h-4 rounded-full bg-orange-100 border-4 border-orange-500 flex items-center justify-center shadow-sm" />
                    <div className="flex gap-2 w-full md:w-1/2">
                      <div className="flex-1 space-y-2">
                        <Label className="font-semibold text-slate-700">Stop {index + 1}</Label>
                        <LocationAutocomplete
                          id={`stop-${stop.id}`}
                          value={stop.location}
                          onChange={(value, coords) => handleStopChange(stop.id, value, coords)}
                          placeholder="Add a stop along the way"
                        />
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveStop(stop.id)}
                        className="mt-7 text-slate-400 hover:text-red-500 hover:bg-red-50"
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Drop Location */}
              <div className="space-y-2 relative bg-white mt-2">
                <div className="absolute -left-6 md:-left-10 top-9 w-4 h-4 rounded-full bg-red-100 border-4 border-red-500 flex items-center justify-center shadow-sm" />
                <Label htmlFor="drop" className="font-semibold text-slate-700">Drop Location</Label>
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

              <div className="flex items-end">
                {!showStops || stops.length < 3 ? (
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => {
                      if (!showStops) setShowStops(true)
                      else handleAddStop()
                    }}
                    className="text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    {showStops ? 'Add Another Stop' : 'Add a Stop'}
                  </Button>
                ) : null}
              </div>
            </div>
          </div>

          {/* Favorite Locations Dropdown (Mobile visible too) */}
          <AnimatePresence>
            {showFavorites && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="p-4 bg-orange-50/50 border border-orange-100 rounded-xl space-y-3"
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-slate-800">Saved Locations</h4>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => setShowFavorites(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {favoriteLocations.map((fav) => (
                    <div
                      key={fav.id}
                      className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-100 hover:border-orange-300 hover:shadow-md cursor-pointer transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                          {fav.type === 'HOME' ? <Home className="h-4 w-4" /> :
                           fav.type === 'WORK' ? <Briefcase className="h-4 w-4" /> :
                           <MapPin className="h-4 w-4" />}
                        </div>
                        <div>
                          <p className="font-medium text-sm">{fav.name}</p>
                          <p className="text-xs text-muted-foreground truncate max-w-[150px]">{fav.address}</p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <hr className="border-slate-100" />

          {/* Schedule Ride */}
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
              <div>
                <Label htmlFor="schedule" className="text-base font-semibold cursor-pointer">Schedule for Later</Label>
                <p className="text-sm text-slate-500">Book your ride in advance for peace of mind.</p>
              </div>
              <Switch
                id="schedule"
                checked={scheduleRide}
                onCheckedChange={setScheduleRide}
                className="data-[state=checked]:bg-orange-500"
              />
            </div>
            
            <AnimatePresence>
              {scheduleRide && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  className="grid md:grid-cols-2 gap-4 px-2"
                >
                  <div className="space-y-2">
                    <Label className="text-slate-700 font-medium">Select Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal border-slate-200",
                            !scheduleDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4 text-orange-500" />
                          {scheduleDate ? format(scheduleDate, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={scheduleDate}
                          onSelect={setScheduleDate}
                          disabled={(date) => date < new Date() || date < addDays(new Date(), -1)}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-700 font-medium">Select Time</Label>
                    <Input
                      type="time"
                      value={scheduleTime}
                      onChange={(e) => setScheduleTime(e.target.value)}
                      className="border-slate-200"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Vehicle Type Selection */}
          <div className="space-y-4 pt-4">
            <Label className="text-lg font-semibold">Select Vehicle Type</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {vehicleTypes.map((vehicle) => (
                <motion.div
                  key={vehicle.id}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative"
                >
                  {vehicle.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md z-10">
                      MOST POPULAR
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      setVehicleType(vehicle.id)
                      setEstimate(null)
                    }}
                    className={`w-full p-5 rounded-xl border-2 text-left transition-all overflow-hidden h-full ${
                      vehicleType === vehicle.id
                        ? 'border-orange-500 bg-orange-50/30 shadow-[0_0_20px_rgba(249,115,22,0.15)]'
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
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        vehicleType === vehicle.id ? 'border-orange-500 bg-orange-500' : 'border-slate-300'
                      }`}>
                        {vehicleType === vehicle.id && <CheckCircle2 className="h-4 w-4 text-white" />}
                      </div>
                    </div>
                    <h3 className="font-bold text-slate-800 text-lg">{vehicle.name}</h3>
                    
                    <div className="text-xl font-bold text-orange-600 mt-2">
                      {vehicle.price === 'Custom' ? 'Based on trip' : (
                        <>₹{vehicle.price}<span className="text-sm text-slate-500 font-normal">/km</span></>
                      )}
                    </div>

                    <div className="flex items-center gap-3 text-sm text-slate-500 mt-1 mb-3">
                      <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {vehicle.capacity}</span>
                      <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" /> {vehicle.luggage}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {vehicle.features.map((feature, i) => (
                        <span
                          key={i}
                          className={`text-[10px] px-2 py-1 rounded-md font-medium ${
                            vehicleType === vehicle.id ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Ride Preferences */}
          <div className="space-y-4">
            <Label className="flex items-center gap-2 text-lg font-semibold">
              <Settings className="h-5 w-5 text-orange-500" />
              Ride Preferences
            </Label>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 bg-slate-50 border border-slate-100 rounded-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <Snowflake className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">AC Required</span>
                </div>
                <Switch checked={acRequired} onCheckedChange={setAcRequired} />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <Volume2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Child Seat</span>
                </div>
                <Switch checked={needChildSeat} onCheckedChange={setNeedChildSeat} />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <Navigation className="h-4 w-4 text-purple-500" />
                  <span className="text-sm">Wheelchair Access</span>
                </div>
                <Switch checked={wheelchairAccessible} onCheckedChange={setWheelchairAccessible} />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <Share2 className="h-4 w-4 text-amber-500" />
                  <span className="text-sm">Pet Friendly</span>
                </div>
                <Switch checked={petFriendly} onCheckedChange={setPetFriendly} />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <User className="h-4 w-4 text-pink-500" />
                  <span className="text-sm">Female Driver</span>
                </div>
                <Switch checked={femaleDriver} onCheckedChange={setFemaleDriver} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="space-y-2">
                <Label className="text-slate-700 font-medium">Music Preference</Label>
                <Select value={musicPreference} onValueChange={setMusicPreference}>
                  <SelectTrigger className="border-slate-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {musicOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Trip Notes */}
              <div className="space-y-2">
                <Label className="text-slate-700 font-medium">Trip Notes (Optional)</Label>
                <Input
                  placeholder="E.g., Landmark, gate number, special requirements"
                  value={tripNotes}
                  onChange={(e) => setTripNotes(e.target.value)}
                  className="border-slate-200"
                />
              </div>
            </div>
          </div>

          {/* Get Estimate Button */}
          <div className="pt-4">
            <Button
              onClick={handleGetEstimate}
              disabled={isLoading}
              className="w-full h-14 text-lg font-bold bg-slate-900 hover:bg-slate-800 text-white shadow-xl shadow-slate-900/20"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Calculating Best Route...
                </>
              ) : (
                <>
                  <Route className="mr-2 h-5 w-5 text-orange-500" />
                  Get Fare Estimate
                </>
              )}
            </Button>
          </div>

          {/* Error Message */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 font-medium text-sm flex items-center"
              >
                <div className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse" />
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
                  <Card className="border-2 border-orange-200 bg-white shadow-xl overflow-hidden">
                    <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 to-red-600" />
                    <CardHeader className="pb-4 border-b border-slate-100 bg-slate-50/50">
                      <CardTitle className="flex items-center justify-between text-xl">
                        <span>Fare Summary</span>
                        {vehicleType !== 'BUSES' && (
                          <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm flex items-center font-bold">
                            <IndianRupee className="h-4 w-4 mr-1" />
                            {getFinalAmount()}
                          </div>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6 pt-6">
                      
                      {/* Distance and Duration Cards */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                          <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                            <Route className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Distance</p>
                            <p className="font-bold text-slate-800">{estimate.distance} km</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                          <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600">
                            <Clock className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Est. Time</p>
                            <p className="font-bold text-slate-800">{estimate.duration} mins</p>
                          </div>
                        </div>
                      </div>

                      {/* Detailed Fare Breakdown or Bus Prompt */}
                      {vehicleType === 'BUSES' ? (
                        <div className="bg-orange-50 rounded-xl p-8 border border-orange-200 text-center space-y-3">
                          <h4 className="text-xl font-bold text-orange-800">Bus Pricing is Custom</h4>
                          <p className="text-orange-700 font-medium max-w-md mx-auto">
                            Because bus trips vary greatly based on duration and distance, please confirm via WhatsApp for an exact, tailored quote.
                          </p>
                        </div>
                      ) : (
                        <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 space-y-3">
                          <div className="flex justify-between text-sm text-slate-600 font-medium">
                            <span>Base Fare</span>
                            <span className="text-slate-900">₹{estimate.breakdown.baseFare}</span>
                          </div>
                          <div className="flex justify-between text-sm text-slate-600 font-medium">
                            <span>Distance Charge ({estimate.distance} km)</span>
                            <span className="text-slate-900">₹{estimate.breakdown.distanceCharge}</span>
                          </div>
                          <div className="flex justify-between text-sm text-slate-600 font-medium">
                            <span>Time Charge ({estimate.duration} mins)</span>
                            <span className="text-slate-900">₹{estimate.breakdown.timeCharge}</span>
                          </div>
                          <div className="flex justify-between text-sm text-slate-600 font-medium">
                            <span>GST (18%)</span>
                            <span className="text-slate-900">₹{estimate.breakdown.gst}</span>
                          </div>
                          
                          <div className="my-2 border-t border-dashed border-slate-300" />
                          
                          <div className="flex justify-between text-sm text-green-700 font-semibold">
                            <span>Auto Discount (Time & GST Waived)</span>
                            <span>-₹{estimate.breakdown.discount}</span>
                          </div>
                          {estimate.surgeMultiplier > 1 && (
                            <div className="flex justify-between text-sm text-red-600 font-semibold mt-1">
                              <span>High Demand Surge ({estimate.surgeMultiplier}x)</span>
                              <span>+₹{estimate.breakdown.surgeCharge}</span>
                            </div>
                          )}
                          {appliedPromo && (
                            <div className="flex justify-between text-sm text-green-700 font-semibold mt-1">
                              <span>Promo Discount ({appliedPromo.code})</span>
                              <span>-₹{calculatePromoDiscount()}</span>
                            </div>
                          )}
                          
                          <div className="my-2 border-t border-slate-300" />
                          
                          <div className="flex justify-between items-center pt-1">
                            <span className="text-base font-bold text-slate-800">Final Amount</span>
                            <span className="text-2xl font-black text-orange-600">₹{getFinalAmount()}</span>
                          </div>
                        </div>
                      )}

                      {/* Promo Code Section (Hide for buses) */}
                      {vehicleType !== 'BUSES' && (
                        <div className="space-y-3">
                          <Label className="text-slate-700">Have a Promo Code?</Label>
                          <div className="flex gap-2">
                            <Input
                              placeholder="Enter code (e.g. WELCOME10)"
                              value={promoCode}
                              onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                              disabled={!!appliedPromo}
                              className="border-slate-200 uppercase"
                            />
                            {!appliedPromo ? (
                              <Button
                                type="button"
                                variant="outline"
                                onClick={handleApplyPromo}
                                disabled={!promoCode.trim()}
                                className="border-orange-200 text-orange-700 hover:bg-orange-50"
                              >
                                Apply
                              </Button>
                            ) : (
                              <Button
                                type="button"
                                variant="outline"
                                onClick={() => {
                                  setAppliedPromo(null)
                                  setPromoCode('')
                                }}
                                className="border-red-200 text-red-600 hover:bg-red-50"
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                          {promoError && <p className="text-sm text-red-500 font-medium">{promoError}</p>}
                        </div>
                      )}

                      {/* Payment Method */}
                      <div className="space-y-3 pt-2">
                        <Label className="text-slate-700 font-semibold text-base">How would you like to pay?</Label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {paymentMethods.map((method) => (
                            <button
                              key={method.id}
                              type="button"
                              onClick={() => setPaymentMethod(method.id)}
                              className={`p-3 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${
                                paymentMethod === method.id
                                  ? 'border-orange-500 bg-orange-50 text-orange-700 shadow-sm'
                                  : 'border-slate-200 hover:border-orange-300 text-slate-600 hover:bg-slate-50'
                              }`}
                            >
                              <div className={paymentMethod === method.id ? 'text-orange-600' : 'text-slate-400'}>
                                {method.icon}
                              </div>
                              <span className="text-xs font-bold text-center">{method.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Book Button */}
                      <div className="pt-4">
                        <Button
                          className="w-full h-16 text-xl rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg shadow-green-500/30"
                          disabled={isLoading}
                          onClick={handleWhatsAppBooking}
                        >
                          <Phone className="mr-3 h-6 w-6" />
                          {scheduleRide ? 'Confirm Schedule via WhatsApp' : 'Confirm Ride via WhatsApp'}
                        </Button>
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
