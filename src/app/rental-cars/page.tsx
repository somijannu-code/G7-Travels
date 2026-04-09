'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Car, Users, Luggage, Calendar, Clock, Fuel, Gauge, Shield, Zap, CheckCircle2, IndianRupee } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function RentalCarsPage() {
  const [selectedType, setSelectedType] = useState('self-drive')

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
