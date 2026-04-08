'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Car, Users, Luggage, Calendar, Clock, Fuel, Gauge, Shield, Zap, CheckCircle2, IndianRupee } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function RentalCarsPage() {
  const [selectedType, setSelectedType] = useState('self-drive')

  const vehicleTypes = [
    {
      name: 'Hatchback',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
      capacity: '4 Passengers',
      luggage: '2 Bags',
      fuel: 'Petrol',
      price: '₹2,500',
      pricePerDay: '₹2,500/day',
      features: ['AC', 'Power Steering', 'Music System', 'Bluetooth']
    },
    {
      name: 'Sedan',
      image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&q=80',
      capacity: '4 Passengers',
      luggage: '3 Bags',
      fuel: 'Petrol/Diesel',
      price: '₹3,000',
      pricePerDay: '₹3,000/day',
      features: ['AC', 'Power Windows', 'GPS', 'Bluetooth', 'USB Charger']
    },
    {
      name: 'SUV',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
      capacity: '6 Passengers',
      luggage: '4 Bags',
      fuel: 'Diesel',
      price: '₹4,500',
      pricePerDay: '₹4,500/day',
      features: ['AC', '7- Seater', 'GPS', 'Bluetooth', 'USB Charger', 'Roof Rails']
    },
    {
      name: 'Premium Sedan',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
      capacity: '4 Passengers',
      luggage: '3 Bags',
      fuel: 'Petrol',
      price: '₹6,000',
      pricePerDay: '₹6,000/day',
      features: ['Luxury AC', 'Leather Seats', 'GPS', 'Premium Sound', 'Sunroof']
    },
    {
      name: 'Tempo Traveller',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
      capacity: '12 Passengers',
      luggage: '10 Bags',
      fuel: 'Diesel',
      price: '₹8,000',
      pricePerDay: '₹8,000/day',
      features: ['AC', 'Pushback Seats', 'GPS', 'Music System', 'First Aid Kit']
    },
    {
      name: 'Minibus',
      image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80',
      capacity: '20 Passengers',
      luggage: '15 Bags',
      fuel: 'Diesel',
      price: '₹12,000',
      pricePerDay: '₹12,000/day',
      features: ['AC', 'Comfortable Seating', 'GPS', 'PA System', 'First Aid Kit']
    }
  ]

  const benefits = [
    { icon: <Shield className="w-5 h-5" />, title: 'Fully Insured', description: 'Comprehensive insurance coverage' },
    { icon: <Zap className="w-5 h-5" />, title: 'Well Maintained', description: 'Regularly serviced vehicles' },
    { icon: <CheckCircle2 className="w-5 h-5" />, title: '24/7 Support', description: 'Roadside assistance included' },
    { icon: <Clock className="w-5 h-5" />, title: 'Flexible Duration', description: 'Hourly, daily, weekly options' }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
        <div className="container mx-auto px-4 h-16 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold">Rental Cars</h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Rent a Car in Tirupati</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide range of well-maintained vehicles for your travel needs. Self-drive or chauffeur-driven options available.
          </p>
        </div>

        {/* Rental Type Selection */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-lg p-1 border shadow-sm">
            <Button
              variant={selectedType === 'self-drive' ? 'default' : 'ghost'}
              onClick={() => setSelectedType('self-drive')}
              className="rounded-md"
            >
              <Car className="w-4 h-4 mr-2" />
              Self-Drive
            </Button>
            <Button
              variant={selectedType === 'chauffeur' ? 'default' : 'ghost'}
              onClick={() => setSelectedType('chauffeur')}
              className="rounded-md"
            >
              <Users className="w-4 h-4 mr-2" />
              Chauffeur-Driven
            </Button>
          </div>
        </div>

        {/* Vehicle Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {vehicleTypes.map((vehicle, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-slate-100">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 right-3 bg-orange-600">
                  {vehicle.pricePerDay}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {vehicle.name}
                  <IndianRupee className="w-5 h-5 text-orange-600" />
                </CardTitle>
                <CardDescription>{vehicle.price} starting price</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-3 text-sm">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span>{vehicle.capacity}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Luggage className="w-4 h-4 text-muted-foreground" />
                    <span>{vehicle.luggage}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Fuel className="w-4 h-4 text-muted-foreground" />
                    <span>{vehicle.fuel}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {vehicle.features.map((feature, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
                <Button className="w-full">Book Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Why Rent with G7 Travels?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Rental Terms */}
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Rental Terms & Conditions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p>• Valid driving license required for self-drive rentals</p>
              <p>• Security deposit refundable after vehicle return</p>
              <p>• Fuel charges additional (or full-to-full fuel policy)</p>
              <p>• Minimum rental period: 4 hours</p>
              <p>• Cancellation free up to 24 hours before pickup</p>
              <p>• Late return charges: ₹200 per hour</p>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-slate-400">© 2024 G7 Travels. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
