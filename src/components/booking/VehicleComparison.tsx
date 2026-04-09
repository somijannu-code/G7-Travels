'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Car, Users, Package, Star, Check, X, Info } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Vehicle {
  id: string
  name: string
  capacity: number
  luggage: number
  image: string
  pricePerKm: number
  baseFare: number
  minFare: number
  features: string[]
  rating: number
  totalRides: number
  popular?: boolean
  isCustomPrice?: boolean
}

// Synced with exact fleet and pricing
const VEHICLES: Vehicle[] = [
  {
    id: 'TOYOTA_ETIOS',
    name: 'Toyota Etios',
    capacity: 4,
    luggage: 2,
    image: 'https://media.zigcdn.com/media/content/2014/Jul/toyota-etios-xclusive-pic-photo-image-04072014-m1_560x420.jpg?tr=w-420',
    pricePerKm: 14,
    baseFare: 40,
    minFare: 60,
    features: ['AC', 'Music', 'Seat Belts', 'Comfortable'],
    rating: 4.6,
    totalRides: 12500
  },
  {
    id: 'SWIFT_DZIRE',
    name: 'Swift Dzire',
    capacity: 4,
    luggage: 2,
    image: 'https://www.ecorentacar.com/wp-content/uploads/2022/11/01-4.jpg',
    pricePerKm: 16,
    baseFare: 40,
    minFare: 60,
    features: ['AC', 'Music', 'Comfortable', 'Seat Belts'],
    rating: 4.8,
    totalRides: 18200,
    popular: true
  },
  {
    id: 'MARUTI_SUZUKI_ERTIGA',
    name: 'Maruti Suzuki Ertiga',
    capacity: 6,
    luggage: 3,
    image: 'https://blogs.gomechanic.com/wp-content/uploads/2020/04/How-the-Maruti-Suzuki-Ertiga-dominates-the-MPV-segment-01.jpg',
    pricePerKm: 19,
    baseFare: 50,
    minFare: 80,
    features: ['AC', 'Music', 'Spacious MUV', 'Extra Legroom'],
    rating: 4.7,
    totalRides: 9800
  },
  {
    id: 'TOYOTA_INNOVA',
    name: 'Toyota Innova',
    capacity: 6,
    luggage: 4,
    image: 'https://images.financialexpressdigital.com/2021/07/toyota-Innova-crysta-2021.jpg',
    pricePerKm: 20,
    baseFare: 50,
    minFare: 100,
    features: ['AC', 'Music', 'Premium MUV', 'Extra Legroom'],
    rating: 4.8,
    totalRides: 14500
  },
  {
    id: 'TOYOTA_INNOVA_CRYSTA',
    name: 'Toyota Innova Crysta',
    capacity: 6,
    luggage: 4,
    image: 'https://i.ytimg.com/vi/c_KKvkl1unE/sddefault.jpg',
    pricePerKm: 22,
    baseFare: 50,
    minFare: 120,
    features: ['AC', 'Premium Audio', 'Luxury Comfort', 'Extra Legroom'],
    rating: 4.9,
    totalRides: 8100
  },
  {
    id: 'TEMPO_TRAVELLER_12',
    name: 'Traveller Tempo (12s)',
    capacity: 12,
    luggage: 8,
    image: 'https://www.simplytrip.in/articles/wp-content/uploads/2025/10/12-seater-tempo.jpg.webp',
    pricePerKm: 28,
    baseFare: 100,
    minFare: 150,
    features: ['AC', 'Music', 'Pushback Seats', 'PA System'],
    rating: 4.6,
    totalRides: 3200
  },
  {
    id: 'TEMPO_TRAVELLER_16',
    name: 'Traveller Tempo (16s)',
    capacity: 16,
    luggage: 10,
    image: 'https://tejas-travels-prod.s3.ap-south-1.amazonaws.com/513922250_9969870213090517_5965926465895803421_n.jpg',
    pricePerKm: 30,
    baseFare: 100,
    minFare: 150,
    features: ['AC', 'Music', 'Pushback Seats', 'PA System', 'Extra Space'],
    rating: 4.6,
    totalRides: 2800
  },
  {
    id: 'BUSES',
    name: 'All Buses (22-50s)',
    capacity: 50,
    luggage: 20,
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80',
    pricePerKm: 0,
    baseFare: 0,
    minFare: 0,
    features: ['AC/Non-AC', 'Group Travel', 'PA System'],
    rating: 4.5,
    totalRides: 1200,
    isCustomPrice: true
  }
]

const ALL_FEATURES = [
  'AC', 'Music', 'Seat Belts', 'Comfortable', 'Spacious MUV', 
  'Premium MUV', 'Extra Legroom', 'Luxury Comfort', 'Premium Audio', 
  'Pushback Seats', 'PA System', 'Extra Space', 'AC/Non-AC', 'Group Travel'
]

export function VehicleComparison({ distance = 10, onSelectVehicle }: { distance?: number, onSelectVehicle?: (vehicleId: string) => void }) {
  // Default selected vehicles
  const [selectedVehicles, setSelectedVehicles] = useState<string[]>(['SWIFT_DZIRE', 'TOYOTA_INNOVA', 'TEMPO_TRAVELLER_12'])
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards')

  const toggleVehicle = (vehicleId: string) => {
    if (selectedVehicles.includes(vehicleId)) {
      setSelectedVehicles(prev => prev.filter(id => id !== vehicleId))
    } else if (selectedVehicles.length < 3) {
      setSelectedVehicles(prev => [...prev, vehicleId])
    }
  }

  const selectedVehicleData = VEHICLES.filter(v => selectedVehicles.includes(v.id))

  // Aligned with the backend "Automatic Discount" logic (Base + Distance, ignoring time/GST)
  const calculateTotalFare = (vehicle: Vehicle) => {
    if (vehicle.isCustomPrice) return 'On Request'
    const distanceFare = distance * vehicle.pricePerKm
    const estimatedFare = vehicle.baseFare + distanceFare
    return `₹${Math.max(vehicle.minFare, estimatedFare)}`
  }

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-2 mb-8">
        <h2 className="text-2xl font-bold text-slate-800">Compare Fleet Pricing</h2>
        <p className="text-slate-600 font-medium">
          Select up to 3 vehicles to compare features and pricing for an estimated <span className="text-orange-600 font-bold">{distance} km</span> journey.
        </p>
      </div>

      {/* Vehicle Selection */}
      <Card className="border-0 shadow-lg ring-1 ring-slate-100">
        <CardHeader className="bg-slate-50/80 border-b border-slate-100 pb-4">
          <CardTitle className="text-lg flex justify-between items-center">
            <span>Select Vehicles (Max 3)</span>
            <Badge variant="secondary" className="bg-orange-100 text-orange-700 font-bold">
              {selectedVehicles.length}/3 Selected
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {VEHICLES.map((vehicle) => {
              const isSelected = selectedVehicles.includes(vehicle.id)
              const isDisabled = !isSelected && selectedVehicles.length >= 3

              return (
                <motion.button
                  key={vehicle.id}
                  whileHover={!isDisabled ? { scale: 1.05 } : {}}
                  whileTap={!isDisabled ? { scale: 0.95 } : {}}
                  onClick={() => toggleVehicle(vehicle.id)}
                  disabled={isDisabled}
                  className={`relative p-3 rounded-xl border-2 text-left transition-all ${
                    isSelected
                      ? 'border-orange-500 bg-orange-50/50 shadow-md ring-1 ring-orange-500/20'
                      : isDisabled
                      ? 'border-slate-100 bg-slate-50 opacity-50 cursor-not-allowed'
                      : 'border-slate-200 hover:border-orange-300 hover:shadow-sm bg-white'
                  }`}
                >
                  <div className="w-full h-12 rounded-lg overflow-hidden mb-2 bg-slate-100 shadow-inner">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-bold text-[11px] text-slate-800 leading-tight truncate">{vehicle.name}</p>
                  <p className={`text-[10px] font-black mt-1 ${isSelected ? 'text-orange-600' : 'text-slate-500'}`}>
                    {vehicle.isCustomPrice ? 'Custom' : `₹${vehicle.pricePerKm}/km`}
                  </p>
                </motion.button>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Comparison View */}
      {selectedVehicles.length > 0 && (
        <Card className="border-0 shadow-lg ring-1 ring-slate-100 overflow-hidden">
          <CardHeader className="bg-slate-50/80 border-b border-slate-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <CardTitle className="text-xl">Detailed Comparison</CardTitle>
              <div className="flex bg-slate-200/50 p-1 rounded-lg">
                <Button
                  variant={viewMode === 'cards' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('cards')}
                  className={viewMode === 'cards' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500'}
                >
                  Card View
                </Button>
                <Button
                  variant={viewMode === 'table' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('table')}
                  className={viewMode === 'table' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500'}
                >
                  Table View
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6 bg-slate-50/30">
            <AnimatePresence mode="wait">
              {viewMode === 'cards' ? (
                <motion.div
                  key="cards"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {selectedVehicleData.map((vehicle, index) => (
                    <motion.div
                      key={vehicle.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
                    >
                      <div className="h-40 bg-slate-100 relative">
                        {vehicle.popular && (
                          <Badge className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md border-0">
                            Most Popular
                          </Badge>
                        )}
                        <img
                          src={vehicle.image}
                          alt={vehicle.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-5 space-y-4">
                        <div>
                          <h3 className="font-black text-xl text-slate-800">{vehicle.name}</h3>
                          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 mt-1">
                            <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                            <span>{vehicle.rating} Rating</span>
                            <span>•</span>
                            <span>{vehicle.totalRides.toLocaleString()} rides</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                          <div className="flex items-center gap-2 font-medium text-slate-700 text-sm">
                            <Users className="h-4 w-4 text-orange-500" />
                            <span>{vehicle.capacity} Seats</span>
                          </div>
                          <div className="flex items-center gap-2 font-medium text-slate-700 text-sm">
                            <Package className="h-4 w-4 text-orange-500" />
                            <span>{vehicle.luggage} Bags</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {vehicle.features.map((feature) => (
                            <Badge key={feature} variant="secondary" className="text-[10px] bg-slate-100 text-slate-600 hover:bg-slate-200">
                              {feature}
                            </Badge>
                          ))}
                        </div>

                        <div className="pt-4 border-t border-slate-100 space-y-2">
                          <div className="flex justify-between text-sm font-medium text-slate-600">
                            <span>Base Fare</span>
                            <span>{vehicle.isCustomPrice ? '-' : `₹${vehicle.baseFare}`}</span>
                          </div>
                          <div className="flex justify-between text-sm font-medium text-slate-600">
                            <span>Rate per KM</span>
                            <span>{vehicle.isCustomPrice ? 'Custom' : `₹${vehicle.pricePerKm}`}</span>
                          </div>
                          <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                            <span className="font-bold text-slate-800">Total Est. Fare</span>
                            <span className="text-2xl font-black text-orange-600 tracking-tight">{calculateTotalFare(vehicle)}</span>
                          </div>
                        </div>

                        {onSelectVehicle && (
                          <Button
                            className="w-full h-12 text-base font-bold bg-slate-900 hover:bg-slate-800 text-white rounded-xl mt-2"
                            onClick={() => onSelectVehicle(vehicle.id)}
                          >
                            Select {vehicle.name}
                          </Button>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="table"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-white border border-slate-200 rounded-2xl overflow-x-auto shadow-sm"
                >
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="text-left p-4 font-bold text-slate-700 w-1/4">Specification</th>
                        {selectedVehicleData.map((vehicle) => (
                          <th key={vehicle.id} className="text-center p-4 font-black text-slate-800 text-base w-1/4">
                            {vehicle.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-4 font-medium text-slate-500 bg-slate-50/50">Vehicle</td>
                        {selectedVehicleData.map((vehicle) => (
                          <td key={vehicle.id} className="p-4">
                            <img
                              src={vehicle.image}
                              alt={vehicle.name}
                              className="w-28 h-16 object-cover rounded-lg mx-auto shadow-sm border border-slate-100"
                            />
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-slate-500 bg-slate-50/50">Total Est. Fare ({distance}km)</td>
                        {selectedVehicleData.map((vehicle) => (
                          <td key={vehicle.id} className="p-4 text-center font-black text-lg text-orange-600">
                            {calculateTotalFare(vehicle)}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-slate-500 bg-slate-50/50">Rate per KM</td>
                        {selectedVehicleData.map((vehicle) => (
                          <td key={vehicle.id} className="p-4 text-center font-bold text-slate-700">
                            {vehicle.isCustomPrice ? 'Custom' : `₹${vehicle.pricePerKm}`}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-slate-500 bg-slate-50/50">Seating Capacity</td>
                        {selectedVehicleData.map((vehicle) => (
                          <td key={vehicle.id} className="p-4">
                            <div className="flex items-center justify-center gap-1.5 font-bold text-slate-700">
                              <Users className="h-4 w-4 text-orange-500" />
                              {vehicle.capacity}
                            </div>
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-slate-500 bg-slate-50/50">Luggage Capacity</td>
                        {selectedVehicleData.map((vehicle) => (
                          <td key={vehicle.id} className="p-4">
                            <div className="flex items-center justify-center gap-1.5 font-bold text-slate-700">
                              <Package className="h-4 w-4 text-orange-500" />
                              {vehicle.luggage} Bags
                            </div>
                          </td>
                        ))}
                      </tr>
                      
                      {/* Features Matrix */}
                      <tr className="bg-slate-100/50">
                        <td colSpan={selectedVehicleData.length + 1} className="p-3 text-center text-xs font-bold text-slate-400 uppercase tracking-widest">
                          Features & Amenities
                        </td>
                      </tr>
                      {ALL_FEATURES.map((feature) => {
                        // Only show feature row if at least one selected vehicle has it
                        const hasFeature = selectedVehicleData.some(v => v.features.includes(feature))
                        if (!hasFeature) return null

                        return (
                          <tr key={feature} className="hover:bg-slate-50 transition-colors">
                            <td className="p-4 font-medium text-slate-600 bg-slate-50/50">{feature}</td>
                            {selectedVehicleData.map((vehicle) => (
                              <td key={vehicle.id} className="p-4 text-center">
                                {vehicle.features.includes(feature) ? (
                                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                                    <Check className="h-4 w-4 text-green-600" strokeWidth={3} />
                                  </div>
                                ) : (
                                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mx-auto">
                                    <X className="h-4 w-4 text-slate-300" strokeWidth={3} />
                                  </div>
                                )}
                              </td>
                            ))}
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      )}

      {/* Pricing Info Notice */}
      <Card className="bg-green-50 border border-green-200 shadow-sm rounded-2xl">
        <CardContent className="p-5">
          <div className="flex items-start gap-4">
            <div className="bg-white p-2 rounded-full shadow-sm border border-green-100 shrink-0 mt-0.5">
              <Info className="h-5 w-5 text-green-600" />
            </div>
            <div className="text-sm">
              <p className="font-bold text-green-900 text-base">Transparent Pricing Guarantee</p>
              <p className="text-green-800 mt-1 font-medium">
                The final estimated fares shown here are exactly what you pay. <span className="font-bold bg-green-200 px-1 rounded">Time charges and GST are automatically waived</span> as a special discount! 
                Buses are priced separately based on the specific route and requirements. Final fare for cars may only vary if the actual driven route distance changes significantly.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
