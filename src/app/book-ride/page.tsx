'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Car, MapPin, Clock, Shield, CheckCircle2, Users, Luggage, Calendar } from 'lucide-react'
import Link from 'next/link'
import { RideBookingWithMap } from '@/components/booking/RideBookingWithMap'

export default function BookRidePage() {
  const features = [
    { icon: <Shield className="w-5 h-5" />, title: 'Safe & Secure', description: 'Verified drivers and GPS tracking' },
    { icon: <Clock className="w-5 h-5" />, title: 'Instant Booking', description: 'Book in seconds, ride in minutes' },
    { icon: <MapPin className="w-5 h-5" />, title: 'Live Tracking', description: 'Track your ride in real-time' },
    { icon: <CheckCircle2 className="w-5 h-5" />, title: 'Best Prices', description: 'Transparent fare, no hidden charges' }
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
          <h1 className="text-xl font-bold">Book a Ride</h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Booking Form */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Book Your Ride Now</h2>
            <p className="text-muted-foreground">Enter your pickup and drop locations to get instant fare estimates</p>
          </div>
          <RideBookingWithMap />
        </div>

        {/* Features */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Why Choose G7 Travels?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="font-semibold mb-2">Enter Locations</h4>
              <p className="text-sm text-muted-foreground">Enter your pickup and drop locations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="font-semibold mb-2">Choose Vehicle</h4>
              <p className="text-sm text-muted-foreground">Select from our range of vehicles</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="font-semibold mb-2">Get Picked Up</h4>
              <p className="text-sm text-muted-foreground">Driver arrives at your location</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - Simplified */}
      <footer className="bg-slate-900 text-white py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-slate-400">© 2024 G7 Travels. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
