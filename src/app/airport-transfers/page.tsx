'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Plane, Clock, Shield, Luggage, Users, Car, MapPin, CheckCircle2, IndianRupee } from 'lucide-react'
import Link from 'next/link'

export default function AirportTransfersPage() {
  const services = [
    {
      name: 'Renigunta Airport Pickup',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
      from: 'Renigunta Airport (TIR)',
      to: 'Tirupati City',
      duration: '30-45 mins',
      price: '₹800',
      capacity: '4 Passengers',
      luggage: '2 Large + 2 Small',
      features: ['Meet & Greet', 'Flight Tracking', 'Waiting Time: 60 mins', '24/7 Available']
    },
    {
      name: 'City to Airport Drop',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      from: 'Tirupati City',
      to: 'Renigunta Airport (TIR)',
      duration: '30-45 mins',
      price: '₹800',
      capacity: '4 Passengers',
      luggage: '2 Large + 2 Small',
      features: ['On-time Pickup', 'Flight Check', 'Door-to-Door', 'No Extra Charge']
    },
    {
      name: 'Tirumala to Airport',
      image: 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=800&q=80',
      from: 'Tirumala',
      to: 'Renigunta Airport (TIR)',
      duration: '1.5 - 2 hours',
      price: '₹1,800',
      capacity: '4 Passengers',
      luggage: '2 Large + 2 Small',
      features: ['Hill Route Expert', 'Comfortable Ride', 'Scenic Route', 'Timely Arrival']
    },
    {
      name: 'Airport to Tirumala',
      image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&q=80',
      from: 'Renigunta Airport (TIR)',
      to: 'Tirumala',
      duration: '1.5 - 2 hours',
      price: '₹1,800',
      capacity: '4 Passengers',
      luggage: '2 Large + 2 Small',
      features: ['Direct Route', 'Darshan Assistance', 'Luggage Help', 'Flexible Timing']
    }
  ]

  const fleet = [
    { name: 'Sedan', passengers: '4', luggage: '3 Bags', icon: '🚙' },
    { name: 'SUV', passengers: '6', luggage: '5 Bags', icon: '🚐' },
    { name: 'Tempo Traveller', passengers: '12', luggage: '10 Bags', icon: '🚌' }
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
          <h1 className="text-xl font-bold">Airport Transfers</h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Plane className="w-8 h-8 text-orange-600" />
            <h2 className="text-4xl font-bold">Airport Transfer Services</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reliable and comfortable airport transfers to and from Renigunta Airport (TIR). Never miss a flight with our on-time guarantee.
          </p>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-orange-600">
                  {service.duration}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle>{service.name}</CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-2 mt-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{service.from}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <MapPin className="w-4 h-4 text-orange-600" />
                    <span className="text-sm font-medium">{service.to}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span>{service.capacity}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Luggage className="w-4 h-4 text-muted-foreground" />
                    <span>{service.luggage}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-2xl font-bold text-orange-600 flex items-center gap-1">
                    <IndianRupee className="w-5 h-5" />
                    {service.price}
                  </div>
                  <Button>Book Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Fleet */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Our Airport Transfer Fleet</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {fleet.map((vehicle, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-5xl mb-3">{vehicle.icon}</div>
                  <CardTitle>{vehicle.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span>{vehicle.passengers}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Luggage className="w-4 h-4 text-muted-foreground" />
                    <span>{vehicle.luggage}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Why Choose Our Airport Transfer?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-4 bg-white rounded-lg border">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">On-Time Guarantee</h4>
                <p className="text-sm text-muted-foreground">We track your flight and adjust pickup time accordingly</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white rounded-lg border">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Safe & Reliable</h4>
                <p className="text-sm text-muted-foreground">Verified drivers and well-maintained vehicles</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white rounded-lg border">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Luggage className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Luggage Assistance</h4>
                <p className="text-sm text-muted-foreground">Drivers help with loading and unloading luggage</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white rounded-lg border">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Car className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Comfortable Ride</h4>
                <p className="text-sm text-muted-foreground">AC vehicles with comfortable seating</p>
              </div>
            </div>
          </div>
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
