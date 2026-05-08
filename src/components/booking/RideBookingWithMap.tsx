'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Car, CheckCircle2, Loader2, Phone, Users, Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'

export function RideBookingWithMap() {
  // State for the selected vehicle (Default to Swift Dzire)
  const [vehicleType, setVehicleType] = useState('SWIFT_DZIRE')
  const [isLoading, setIsLoading] = useState(false)

  // Synced Vehicle Fleet with proper IDs
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

  const handleWhatsAppBooking = () => {
    setIsLoading(true)

    const vehicle = vehicleTypes.find(v => v.id === vehicleType)
    const vehicleName = vehicle?.name || vehicleType

    const message = `*🚕 NEW QUICK RIDE INQUIRY | G7 TRAVELS*
    
*🚘 Selected Vehicle:* ${vehicleName}

Please provide me with a fare estimate and booking details. Thank you! ✅`

    const whatsappUrl = `https://wa.me/919014878313?text=${encodeURIComponent(message)}`
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank')
    
    // Reset loading state after a brief moment
    setTimeout(() => setIsLoading(false), 1000)
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card className="border-0 shadow-lg ring-1 ring-slate-100">
        <CardHeader className="border-b bg-slate-50/50 pb-6 rounded-t-xl">
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Car className="h-6 w-6 text-orange-600" />
            Quick Vehicle Inquiry
          </CardTitle>
          <CardDescription className="mt-1 font-medium">
            Select your preferred vehicle and get an instant quote directly via WhatsApp.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-8 pt-8">
          
          {/* Vehicle Type Selection */}
          <div className="space-y-4 pt-2">
            <Label className="text-lg font-bold text-slate-800">Select Vehicle</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {vehicleTypes.map((vehicle) => {
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
                      onClick={() => setVehicleType(vehicle.id)}
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

          {/* Get Estimate WhatsApp Button */}
          <div className="pt-4">
            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <Button
                onClick={handleWhatsAppBooking}
                disabled={isLoading}
                className="w-full h-16 text-xl rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-xl shadow-green-500/30 font-black tracking-wide"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-6 w-6 animate-spin text-white" />
                    Connecting...
                  </>
                ) : (
                  <>
                    <Phone className="mr-3 h-6 w-6" />
                    Get Estimate via WhatsApp
                  </>
                )}
              </Button>
            </motion.div>
          </div>

        </CardContent>
      </Card>
    </div>
  )
}
