'use client'

import { useState } from 'react'
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
import { MapPin, Car, Clock, Route, IndianRupee, CheckCircle2, Loader2, Calendar as CalendarIcon, Plus, X, Star, Volume2, Snowflake, Wifi, Phone, Navigation, Share2, Heart, Trash2, ChevronRight, Home, Briefcase, User, Wallet, Shield } from 'lucide-react'
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
  // Basic ride info
  const [pickupLocation, setPickupLocation] = useState('')
  const [pickupCoords, setPickupCoords] = useState({ lat: 0, lon: 0 })
  const [dropLocation, setDropLocation] = useState('')
  const [dropCoords, setDropCoords] = useState({ lat: 0, lon: 0 })

  // Multiple stops
  const [stops, setStops] = useState<Stop[]>([])
  const [showStops, setShowStops] = useState(false)

  // Scheduling
  const [scheduleRide, setScheduleRide] = useState(false)
  const [scheduleDate, setScheduleDate] = useState<Date | undefined>(new Date())
  const [scheduleTime, setScheduleTime] = useState('')

  // Vehicle type
  const [vehicleType, setVehicleType] = useState('SEDAN')

  // Ride preferences
  const [acRequired, setAcRequired] = useState(true)
  const [musicPreference, setMusicPreference] = useState('none')
  const [needChildSeat, setNeedChildSeat] = useState(false)
  const [wheelchairAccessible, setWheelchairAccessible] = useState(false)
  const [petFriendly, setPetFriendly] = useState(false)
  const [femaleDriver, setFemaleDriver] = useState(false)

  // Trip notes
  const [tripNotes, setTripNotes] = useState('')

  // Promo code
  const [promoCode, setPromoCode] = useState('')
  const [appliedPromo, setAppliedPromo] = useState<PromoCode | null>(null)
  const [promoError, setPromoError] = useState('')

  // Payment method
  const [paymentMethod, setPaymentMethod] = useState('CASH')

  // Favorite locations
  const [favoriteLocations] = useState<FavoriteLocation[]>([
    { id: '1', name: 'Home', address: '123 Main Street, Tirupati', coords: { lat: 13.6288, lon: 79.4192 }, type: 'HOME' },
    { id: '2', name: 'Work', address: '456 Business Park, Tirupati', coords: { lat: 13.6158, lon: 79.4292 }, type: 'WORK' }
  ])
  const [showFavorites, setShowFavorites] = useState(false)

  // Loading and estimate
  const [isLoading, setIsLoading] = useState(false)
  const [estimate, setEstimate] = useState<FareEstimate | null>(null)
  const [error, setError] = useState('')

  const vehicleTypes = [
    { id: 'HATCHBACK', name: 'Hatchback', capacity: '4 Passengers', luggage: '2 Bags', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', features: ['AC', 'Music'] },
    { id: 'SEDAN', name: 'Sedan', capacity: '4 Passengers', luggage: '3 Bags', image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&q=80', features: ['AC', 'Music', 'WiFi'] },
    { id: 'SUV', name: 'SUV', capacity: '6 Passengers', luggage: '4 Bags', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80', features: ['AC', 'Music', 'WiFi', 'More Space'] },
    { id: 'PREMIUM_SEDAN', name: 'Premium Sedan', capacity: '4 Passengers', luggage: '3 Bags', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', features: ['AC', 'Music', 'WiFi', 'Leather Seats', 'Water Bottles'] },
    { id: 'TEMPO_TRAVELLER', name: 'Tempo Traveller', capacity: '12 Passengers', luggage: '10 Bags', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', features: ['AC', 'Music', 'Pushback Seats', 'Extra Luggage'] },
    { id: 'MINIBUS', name: 'Minibus', capacity: '20 Passengers', luggage: '15 Bags', image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80', features: ['AC', 'Music', 'Pushback Seats', 'PA System'] }
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
    const newStop: Stop = {
      id: Date.now().toString(),
      location: '',
      coords: { lat: 0, lon: 0 }
    }
    setStops([...stops, newStop])
  }

  const handleRemoveStop = (id: string) => {
    setStops(stops.filter(stop => stop.id !== id))
  }

  const handleStopChange = (id: string, location: string, coords: { lat: number; lon: number }) => {
    setStops(stops.map(stop =>
      stop.id === id ? { ...stop, location, coords } : stop
    ))
    setEstimate(null) // Recalculate estimate when stops change
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

    // Validate all stops
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

  // Handle WhatsApp Booking submission
  const handleWhatsAppBooking = () => {
    if (!estimate) return

    setIsLoading(true)

    // Build the message details
    const stopsText = stops.length > 0 ? `\n*Stops:* ${stops.map(s => s.location).join(' -> ')}` : ''
    const scheduleText = scheduleRide 
      ? `\n*Scheduled For:* ${scheduleDate ? format(scheduleDate, "PPP") : ''} at ${scheduleTime}` 
      : '\n*Time:* Immediate (Ride Now)'
    
    // Gather Preferences
    const activePrefs = [
      acRequired ? 'AC Required' : '',
      needChildSeat ? 'Child Seat Needed' : '',
      wheelchairAccessible ? 'Wheelchair Accessible' : '',
      petFriendly ? 'Pet Friendly' : '',
      femaleDriver ? 'Female Driver Requested' : '',
      musicPreference !== 'none' ? `Music: ${musicPreference}` : ''
    ].filter(Boolean).join(', ')
    
    const preferencesText = activePrefs ? `\n*Preferences:* ${activePrefs}` : ''
    const notesText = tripNotes ? `\n*Trip Notes:* ${tripNotes}` : ''
    const promoText = appliedPromo ? `\n*Promo Applied:* ${appliedPromo.code} (Saved ₹${calculatePromoDiscount()})` : ''

    const vehicleName = vehicleTypes.find(v => v.id === vehicleType)?.name || vehicleType

    const message = `*🚕 New Advanced Ride Booking (G7 Travels)*
    
*Pickup:* ${pickupLocation}
*Drop:* ${dropLocation}${stopsText}${scheduleText}
*Vehicle:* ${vehicleName}
*Payment Method:* ${paymentMethod}
*Total Fare:* ₹${getFinalAmount()}${promoText}${preferencesText}${notesText}

Please confirm my booking. Thank you!`

    // 91 is the country code for India, followed by your provided number
    const whatsappUrl = `https://wa.me/919014878313?text=${encodeURIComponent(message)}`
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank')
    setIsLoading(false)
  }

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Main Booking Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Car className="h-5 w-5" />
            Advanced Ride Booking
          </CardTitle>
          <CardDescription>
            Book a ride with advanced options including scheduling, multiple stops, and custom preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Pickup & Drop Locations with Favorites */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="pickup" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-green-600" />
                  Pickup Location
                </Label>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowFavorites(!showFavorites)}
                >
                  <Heart className="h-3 w-3 mr-1" />
                  Favorites
                </Button>
              </div>
              <LocationAutocomplete
                id="pickup"
                value={pickupLocation}
                onChange={(value, coords) => {
                  setPickupLocation(value)
                  setPickupCoords(coords)
                  setEstimate(null)
                }}
                placeholder="Enter pickup location"
              />
            </div>

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
                  setEstimate(null)
                }}
                placeholder="Enter drop location"
              />
            </div>
          </div>

          {/* Favorite Locations Dropdown */}
          <AnimatePresence>
            {showFavorites && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="p-4 bg-muted rounded-lg space-y-3"
              >
                <h4 className="font-semibold text-sm">Saved Locations</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {favoriteLocations.map((fav) => (
                    <div
                      key={fav.id}
                      className="flex items-center justify-between p-3 bg-background rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
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
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleSelectFavorite(fav, true)}
                        >
                          <Navigation className="h-3 w-3" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleSelectFavorite(fav, false)}
                        >
                          <MapPin className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <Plus className="h-3 w-3 mr-2" />
                  Add New Location
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Multiple Stops */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label>Additional Stops</Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setShowStops(!showStops)}
              >
                {showStops ? <ChevronRight className="h-3 w-3 mr-2" /> : <Plus className="h-3 w-3 mr-2" />}
                {showStops ? 'Hide Stops' : 'Add Stop'}
              </Button>
            </div>
            <AnimatePresence>
              {showStops && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-3"
                >
                  {stops.map((stop, index) => (
                    <div key={stop.id} className="flex gap-2">
                      <div className="flex-1 space-y-2">
                        <Label>Stop {index + 1}</Label>
                        <LocationAutocomplete
                          id={`stop-${stop.id}`}
                          value={stop.location}
                          onChange={(value, coords) => handleStopChange(stop.id, value, coords)}
                          placeholder="Enter stop location"
                        />
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveStop(stop.id)}
                        className="mt-6"
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  ))}
                  {stops.length < 3 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={handleAddStop}
                      className="w-full"
                    >
                      <Plus className="h-3 w-3 mr-2" />
                      Add Another Stop
                    </Button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Schedule Ride */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="schedule">Schedule for Later</Label>
              <Switch
                id="schedule"
                checked={scheduleRide}
                onCheckedChange={setScheduleRide}
              />
            </div>
            <AnimatePresence>
              {scheduleRide && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="grid md:grid-cols-2 gap-4"
                >
                  <div className="space-y-2">
                    <Label>Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !scheduleDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
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
                    <Label>Time</Label>
                    <Input
                      type="time"
                      value={scheduleTime}
                      onChange={(e) => setScheduleTime(e.target.value)}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Vehicle Type Selection with Features */}
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
                    <p className="text-xs text-muted-foreground mb-2">{vehicle.luggage}</p>
                    <div className="flex flex-wrap gap-1">
                      {vehicle.features.map((feature, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full"
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

          {/* Ride Preferences */}
          <div className="space-y-3">
            <Label className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              Ride Preferences
            </Label>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-muted rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Snowflake className="h-4 w-4" />
                  <span className="text-sm">AC Required</span>
                </div>
                <Switch checked={acRequired} onCheckedChange={setAcRequired} />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Volume2 className="h-4 w-4" />
                  <span className="text-sm">Child Seat</span>
                </div>
                <Switch checked={needChildSeat} onCheckedChange={setNeedChildSeat} />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Navigation className="h-4 w-4" />
                  <span className="text-sm">Wheelchair Accessible</span>
                </div>
                <Switch checked={wheelchairAccessible} onCheckedChange={setWheelchairAccessible} />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  <span className="text-sm">Pet Friendly</span>
                </div>
                <Switch checked={petFriendly} onCheckedChange={setPetFriendly} />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="text-sm">Female Driver</span>
                </div>
                <Switch checked={femaleDriver} onCheckedChange={setFemaleDriver} />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Music Preference</Label>
              <Select value={musicPreference} onValueChange={setMusicPreference}>
                <SelectTrigger>
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
          </div>

          {/* Trip Notes */}
          <div className="space-y-2">
            <Label>Trip Notes (Optional)</Label>
            <Textarea
              placeholder="Any special instructions for the driver (e.g., landmark, gate number, special requirements)"
              value={tripNotes}
              onChange={(e) => setTripNotes(e.target.value)}
              rows={3}
            />
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

          {/* Fare Estimate Result with Advanced Options */}
          <AnimatePresence>
            {estimate && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
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
                        <span>Special Discount (Time + GST Waiver)</span>
                        <span>-₹{estimate.breakdown.discount}</span>
                      </div>
                      {estimate.surgeMultiplier > 1 && (
                        <div className="flex justify-between text-sm text-orange-600 mt-1">
                          <span>Surge Multiplier ({estimate.surgeMultiplier}x)</span>
                          <span>+₹{estimate.breakdown.surgeCharge}</span>
                        </div>
                      )}
                    </div>

                    {/* Promo Code Section */}
                    <div className="space-y-2 pt-4 border-t">
                      <Label>Apply Additional Promo Code</Label>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Enter promo code"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                          disabled={!!appliedPromo}
                        />
                        {!appliedPromo ? (
                          <Button
                            type="button"
                            variant="outline"
                            onClick={handleApplyPromo}
                            disabled={!promoCode.trim()}
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
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                      {promoError && (
                        <p className="text-sm text-destructive">{promoError}</p>
                      )}
                      {appliedPromo && (
                        <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                          <p className="text-sm text-green-700 dark:text-green-300">
                            Promo code applied! You saved an extra ₹{calculatePromoDiscount()}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Payment Method */}
                    <div className="space-y-3 pt-4 border-t">
                      <Label>Payment Method</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {paymentMethods.map((method) => (
                          <button
                            key={method.id}
                            type="button"
                            onClick={() => setPaymentMethod(method.id)}
                            className={`p-3 rounded-lg border-2 flex items-center gap-2 transition-all ${
                              paymentMethod === method.id
                                ? 'border-primary bg-primary/5'
                                : 'border-border hover:border-primary/50'
                            }`}
                          >
                            {method.icon}
                            <span className="text-sm font-medium">{method.name}</span>
                            {paymentMethod === method.id && (
                              <CheckCircle2 className="h-4 w-4 text-primary ml-auto" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Total Amount */}
                    <div className="pt-4 border-t space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold">Subtotal</span>
                        <span className="text-xl">₹{estimate.totalAmount}</span>
                      </div>
                      {appliedPromo && (
                        <div className="flex justify-between items-center text-green-600">
                          <span className="font-medium">Promo Discount ({appliedPromo.type === 'PERCENTAGE' ? appliedPromo.discount + '%' : '₹' + appliedPromo.discount})</span>
                          <span>-₹{calculatePromoDiscount()}</span>
                        </div>
                      )}
                      <div className="flex justify-between items-center pt-2 border-t-2 border-primary">
                        <span className="text-xl font-bold">Total Amount</span>
                        <span className="text-3xl font-bold text-primary">
                          ₹{getFinalAmount()}
                        </span>
                      </div>
                    </div>

                    {/* Book Button - NOW TRIGGERS WHATSAPP */}
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      size="lg"
                      disabled={isLoading}
                      onClick={handleWhatsAppBooking}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      {scheduleRide ? 'Schedule via WhatsApp' : 'Book via WhatsApp'} - ₹{getFinalAmount()}
                    </Button>

                    {/* Safety Notice */}
                    <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <Shield className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium text-blue-700 dark:text-blue-300">Safe & Secure Ride</p>
                        <p className="text-blue-600/70 dark:text-blue-300/70 mt-1">
                          Your ride is tracked in real-time. Share trip details with loved ones for added safety.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>

      {/* Emergency SOS Button */}
      <Card className="border-red-200 bg-red-50 dark:bg-red-900/10">
        <CardContent className="p-4">
          <Button
            variant="destructive"
            className="w-full"
            size="lg"
          >
            <Phone className="mr-2 h-4 w-4" />
            Emergency SOS - Call 24/7 Support
          </Button>
          <p className="text-xs text-center text-muted-foreground mt-2">
            Tap to immediately connect with our emergency support team
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
