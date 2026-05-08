'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Switch } from '@/components/ui/switch'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { format, addDays } from 'date-fns'
import { Car, CheckCircle2, Settings, Loader2, Calendar as CalendarIcon, Star, Volume2, Snowflake, Phone, Navigation, Share2, User, Wallet, Users, Briefcase } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function AdvancedRideBooking() {
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
  const [paymentMethod, setPaymentMethod] = useState('CASH')

  const [isLoading, setIsLoading] = useState(false)

  // VEHICLE CONFIGURATION
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
    { id: 'CASH', name: 'Pay by Cash', icon: <Phone className="h-4 w-4" /> }, // Adjusted icon to remove IndianRupee dependency if not imported
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

  const handleWhatsAppBooking = () => {
    setIsLoading(true)

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
    const vehicleName = vehicleTypes.find(v => v.id === vehicleType)?.name || vehicleType

    const message = `*🚕 NEW RIDE REQUEST | G7 TRAVELS*
${scheduleText}
*🚘 Vehicle:* ${vehicleName}

*💰 PAYMENT PREFERENCE*
- Payment Method: ${paymentMethod}
${preferencesText}${notesText}

Please contact me to confirm the locations and fare. Thank you! ✅`

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
                Select your preferred vehicle and schedule your ride directly via WhatsApp.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-8 pt-6">

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

          {/* Payment Method */}
          <div className="space-y-3 pt-4">
            <Label className="text-slate-700 font-semibold text-base">Preferred Payment Method</Label>
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

          {/* Send Request Button */}
          <div className="pt-8">
            <Button
              className="w-full h-16 text-xl rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg shadow-green-500/30 font-bold"
              disabled={isLoading}
              onClick={handleWhatsAppBooking}
            >
              {isLoading ? (
                <Loader2 className="mr-2 h-6 w-6 animate-spin" />
              ) : (
                <Phone className="mr-3 h-6 w-6" />
              )}
              {scheduleRide ? 'Send Request via WhatsApp' : 'Book Ride via WhatsApp'}
            </Button>
          </div>

        </CardContent>
      </Card>
    </div>
  )
}
