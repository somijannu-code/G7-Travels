'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, MapPin, Clock, Users, Luggage, Car, Route, CheckCircle2, IndianRupee, Calendar } from 'lucide-react'
import Link from 'next/link'

export default function OutstationPage() {
  const destinations = [
    {
      name: 'Chennai',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
      distance: '150 km',
      duration: '3-4 hours',
      price: '₹4,500',
      oneWay: '₹4,500',
      roundTrip: '₹8,000',
      highlights: ['Marina Beach', 'Kapaleeshwarar Temple', 'Fort St. George'],
      popular: true,
      link: '/chennai-to-tirupati-taxi'
    },
    {
      name: 'Hyderabad',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80',
      distance: '560 km',
      duration: '8-10 hours',
      price: '₹12,000',
      oneWay: '₹12,000',
      roundTrip: '₹22,000',
      highlights: ['Charminar', 'Golconda Fort', 'Hussain Sagar Lake'],
      popular: false
    },
    {
      name: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1586297685580-71d4b82aeee4?w=800&q=80',
      distance: '340 km',
      duration: '6-7 hours',
      price: '₹8,000',
      oneWay: '₹8,000',
      roundTrip: '₹15,000',
      highlights: ['Bangalore Palace', 'Cubbon Park', 'ISKCON Temple'],
      popular: true,
      link: '/bangalore-to-tirupati-taxi'
    },
    {
      name: 'Vijayawada',
      image: 'https://images.unsplash.com/photo-1628103197706-3b14b7387eaa?w=800&q=80',
      distance: '380 km',
      duration: '6-7 hours',
      price: '₹9,000',
      oneWay: '₹9,000',
      roundTrip: '₹16,000',
      highlights: ['Kanaka Durga Temple', 'Prakasam Barrage', 'Bhavani Island'],
      popular: false
    }
  ]

  const services = [
    { icon: <Route className="w-5 h-5" />, title: 'One-Way Trip', description: 'Book one-way to any destination' },
    { icon: <Calendar className="w-5 h-5" />, title: 'Round Trip', description: 'Book round trip with flexible return' },
    { icon: <Users className="w-5 h-5" />, title: 'Group Travel', description: 'Tempo traveller for large groups' },
    { icon: <Luggage className="w-5 h-5" />, title: 'Luggage Space', description: 'Ample space for all your bags' }
  ]

  return (
    <div className="bg-slate-50 pb-16 min-h-screen">
      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-orange-600 transition-colors font-medium">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Outstation</span>
        </div>
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Outstation Cab Booking from Tirupati</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore destinations across Andhra Pradesh and neighboring states with our reliable outstation taxi service
          </p>
        </div>

        {/* Popular Destinations */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {destinations.map((dest, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-52">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover"
                />
                {dest.popular && (
                  <Badge className="absolute top-4 left-4 bg-red-600">
                    Popular
                  </Badge>
                )}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-sm font-semibold">
                  {dest.distance}
                </div>
              </div>
              <CardHeader>
                <CardTitle>{dest.name}</CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-4 text-sm mt-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {dest.duration}
                    </span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Popular Attractions:</h4>
                  <div className="flex flex-wrap gap-2">
                    {dest.highlights.map((highlight, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">One Way</span>
                    <span className="font-semibold flex items-center gap-1">
                      <IndianRupee className="w-3 h-3" />
                      {dest.oneWay}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Round Trip</span>
                    <span className="font-semibold text-orange-600 flex items-center gap-1">
                      <IndianRupee className="w-3 h-3" />
                      {dest.roundTrip}
                    </span>
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  {dest.link ? (
                    <>
                      <Link href={dest.link} className="flex-1">
                        <Button variant="outline" className="w-full font-bold border-orange-500 text-orange-600 hover:bg-orange-50">
                          Route Guide
                        </Button>
                      </Link>
                      <Link href="/book-ride" className="flex-1">
                        <Button className="w-full font-bold bg-orange-600 hover:bg-orange-700 text-white">
                          Book Cab
                        </Button>
                      </Link>
                    </>
                  ) : (
                    <Link href="/book-ride" className="w-full">
                      <Button className="w-full font-bold bg-orange-600 hover:bg-orange-700 text-white">Book Now</Button>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Our Outstation Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                    {service.icon}
                  </div>
                  <CardTitle className="text-base">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Custom Booking CTA */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-orange-600 to-red-600 text-white border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Custom Destination?</CardTitle>
              <CardDescription className="text-white/90 text-center">
                Going somewhere else? We provide outstation service to any destination in South India
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm">Tell us your destination</span>
                </div>
                <Button variant="secondary" size="lg" className="w-full md:w-auto">
                  Get Custom Quote
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
