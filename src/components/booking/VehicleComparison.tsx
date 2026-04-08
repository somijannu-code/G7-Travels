'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { Car, Users, Package, Snowflake, Volume2, Wifi, Star, Check, X } from 'lucide-react'
import { motion } from 'framer-motion'

interface Vehicle {
  id: string
  name: string
  capacity: number
  luggage: number
  image: string
  pricePerKm: number
  baseFare: number
  features: string[]
  rating: number
  totalRides: number
}

const VEHICLES: Vehicle[] = [
  {
    id: 'HATCHBACK',
    name: 'Hatchback',
    capacity: 4,
    luggage: 2,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
    pricePerKm: 20,
    baseFare: 30,
    features: ['AC', 'Music', 'Seat Belts'],
    rating: 4.5,
    totalRides: 12500
  },
  {
    id: 'SEDAN',
    name: 'Sedan',
    capacity: 4,
    luggage: 3,
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&q=80',
    pricePerKm: 20,
    baseFare: 40,
    features: ['AC', 'Music', 'WiFi', 'Charging Points', 'Water Bottles'],
    rating: 4.7,
    totalRides: 18200
  },
  {
    id: 'SUV',
    name: 'SUV',
    capacity: 6,
    luggage: 4,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
    pricePerKm: 20,
    baseFare: 50,
    features: ['AC', 'Music', 'WiFi', 'Extra Legroom', 'Charging Points', 'Water Bottles'],
    rating: 4.8,
    totalRides: 9800
  },
  {
    id: 'PREMIUM_SEDAN',
    name: 'Premium Sedan',
    capacity: 4,
    luggage: 3,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
    pricePerKm: 20,
    baseFare: 70,
    features: ['AC', 'Premium Music', 'WiFi', 'Leather Seats', 'Charging Points', 'Water Bottles', 'Newspaper'],
    rating: 4.9,
    totalRides: 4500
  },
  {
    id: 'TEMPO_TRAVELLER',
    name: 'Tempo Traveller',
    capacity: 12,
    luggage: 10,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    pricePerKm: 20,
    baseFare: 100,
    features: ['AC', 'Music System', 'Pushback Seats', 'Extra Luggage Space', 'PA System', 'First Aid Kit'],
    rating: 4.6,
    totalRides: 2100
  },
  {
    id: 'MINIBUS',
    name: 'Minibus',
    capacity: 20,
    luggage: 15,
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80',
    pricePerKm: 20,
    baseFare: 150,
    features: ['AC', 'Music System', 'Pushback Seats', 'Extra Luggage Space', 'PA System', 'First Aid Kit', 'GPS Tracking'],
    rating: 4.5,
    totalRides: 1200
  }
]

const ALL_FEATURES = [
  'AC', 'Music', 'WiFi', 'Charging Points', 'Water Bottles',
  'Leather Seats', 'Extra Legroom', 'Pushback Seats', 'PA System',
  'First Aid Kit', 'GPS Tracking', 'Newspaper', 'Seat Belts'
]

export function VehicleComparison({ distance = 10, onSelectVehicle }: { distance?: number, onSelectVehicle?: (vehicleId: string) => void }) {
  const [selectedVehicles, setSelectedVehicles] = useState<string[]>(['SEDAN', 'SUV'])
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards')

  const toggleVehicle = (vehicleId: string) => {
    if (selectedVehicles.includes(vehicleId)) {
      setSelectedVehicles(prev => prev.filter(id => id !== vehicleId))
    } else if (selectedVehicles.length < 3) {
      setSelectedVehicles(prev => [...prev, vehicleId])
    }
  }

  const selectedVehicleData = VEHICLES.filter(v => selectedVehicles.includes(v.id))

  const calculateTotalFare = (vehicle: Vehicle) => {
    const distanceFare = distance * vehicle.pricePerKm
    const timeFare = Math.round((distance / 25) * 60) * (vehicle.id.includes('PREMIUM') ? 2.5 : vehicle.id === 'SUV' ? 2 : 1.5)
    const subtotal = vehicle.baseFare + distanceFare + timeFare
    const gst = subtotal * 0.18
    return Math.round(subtotal + gst)
  }

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Compare Vehicles</h2>
        <p className="text-muted-foreground">
          Select up to 3 vehicles to compare features and pricing for {distance} km journey
        </p>
      </div>

      {/* Vehicle Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Select Vehicles to Compare (Max 3)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {VEHICLES.map((vehicle) => (
              <motion.button
                key={vehicle.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleVehicle(vehicle.id)}
                className={`p-3 rounded-lg border-2 text-left transition-all ${
                  selectedVehicles.includes(vehicle.id)
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/30'
                }`}
              >
                <div className="w-full h-16 rounded overflow-hidden mb-2 bg-slate-100">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-semibold text-sm">{vehicle.name}</p>
                <p className="text-xs text-muted-foreground">₹{calculateTotalFare(vehicle)}</p>
              </motion.button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Comparison View */}
      {selectedVehicles.length >= 2 && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Vehicle Comparison</CardTitle>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === 'cards' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('cards')}
                >
                  Card View
                </Button>
                <Button
                  variant={viewMode === 'table' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('table')}
                >
                  Table View
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {viewMode === 'cards' ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedVehicleData.map((vehicle, index) => (
                  <motion.div
                    key={vehicle.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border rounded-lg overflow-hidden"
                  >
                    <div className="h-32 bg-slate-100">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 space-y-3">
                      <div>
                        <h3 className="font-bold text-lg">{vehicle.name}</h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span>{vehicle.rating}</span>
                          <span>•</span>
                          <span>{vehicle.totalRides.toLocaleString()} rides</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{vehicle.capacity} Passengers</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Package className="h-4 w-4 text-muted-foreground" />
                          <span>{vehicle.luggage} Bags</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {vehicle.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      <div className="pt-3 border-t space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Base Fare</span>
                          <span>₹{vehicle.baseFare}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Distance ({distance} km)</span>
                          <span>₹{distance * vehicle.pricePerKm}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">GST (18%)</span>
                          <span>₹{Math.round((vehicle.baseFare + distance * vehicle.pricePerKm) * 0.18)}</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg pt-2 border-t">
                          <span>Total</span>
                          <span className="text-primary">₹{calculateTotalFare(vehicle)}</span>
                        </div>
                      </div>

                      {onSelectVehicle && (
                        <Button
                          className="w-full"
                          onClick={() => onSelectVehicle(vehicle.id)}
                        >
                          Select {vehicle.name}
                        </Button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-medium">Feature</th>
                      {selectedVehicleData.map((vehicle) => (
                        <th key={vehicle.id} className="text-center p-3 font-medium">
                          {vehicle.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 text-muted-foreground">Image</td>
                      {selectedVehicleData.map((vehicle) => (
                        <td key={vehicle.id} className="p-3 text-center">
                          <img
                            src={vehicle.image}
                            alt={vehicle.name}
                            className="w-24 h-16 object-cover rounded mx-auto"
                          />
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 text-muted-foreground">Capacity</td>
                      {selectedVehicleData.map((vehicle) => (
                        <td key={vehicle.id} className="p-3 text-center">
                          <div className="flex items-center justify-center gap-1">
                            <Users className="h-4 w-4" />
                            {vehicle.capacity}
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 text-muted-foreground">Luggage</td>
                      {selectedVehicleData.map((vehicle) => (
                        <td key={vehicle.id} className="p-3 text-center">
                          <div className="flex items-center justify-center gap-1">
                            <Package className="h-4 w-4" />
                            {vehicle.luggage} Bags
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 text-muted-foreground">Rating</td>
                      {selectedVehicleData.map((vehicle) => (
                        <td key={vehicle.id} className="p-3 text-center">
                          <div className="flex items-center justify-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            {vehicle.rating}
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 text-muted-foreground">Base Fare</td>
                      {selectedVehicleData.map((vehicle) => (
                        <td key={vehicle.id} className="p-3 text-center font-medium">
                          ₹{vehicle.baseFare}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 text-muted-foreground">Price per KM</td>
                      {selectedVehicleData.map((vehicle) => (
                        <td key={vehicle.id} className="p-3 text-center font-medium">
                          ₹{vehicle.pricePerKm}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 text-muted-foreground">Total Fare ({distance} km)</td>
                      {selectedVehicleData.map((vehicle) => (
                        <td key={vehicle.id} className="p-3 text-center font-bold text-primary text-lg">
                          ₹{calculateTotalFare(vehicle)}
                        </td>
                      ))}
                    </tr>
                    {ALL_FEATURES.map((feature) => (
                      <tr key={feature} className="border-b">
                        <td className="p-3 text-muted-foreground">{feature}</td>
                        {selectedVehicleData.map((vehicle) => (
                          <td key={vehicle.id} className="p-3 text-center">
                            {vehicle.features.includes(feature) ? (
                              <Check className="h-5 w-5 text-green-600 mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-muted-foreground mx-auto" />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Pricing Info */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Car className="h-5 w-5 text-primary mt-0.5" />
            <div className="text-sm">
              <p className="font-medium">Pricing Information</p>
              <p className="text-muted-foreground mt-1">
                All prices include GST (18%). Final fare may vary based on actual route, traffic conditions, and waiting time.
                Base fare includes first 2 km. Additional distance charged at ₹20/km for all vehicle types.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
