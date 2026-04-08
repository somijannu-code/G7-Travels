'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Car, Calendar, MapPin, Shield, Clock, Users, Star, Phone, Plane, Train, Bus, Map } from 'lucide-react'

const SERVICES = [
  {
    icon: <Car className="w-8 h-8" />,
    title: 'On-Demand Rides',
    description: 'Book instant rides with our fleet of well-maintained vehicles. Available 24/7 across Tirupati.',
    features: ['Real-time tracking', 'Multiple vehicle types', 'Cashless payments', 'Ride sharing'],
    link: '/book-ride',
    badge: 'Most Popular'
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: 'Rental Cars',
    description: 'Self-drive or chauffeur-driven rentals for hours, days, or weeks. Perfect for exploring at your own pace.',
    features: ['Self-drive option', 'Chauffeur driven', 'Flexible duration', 'Multiple pickup points'],
    link: '/rental-cars',
    badge: 'Best Value'
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: 'Pilgrimage Packages',
    description: 'Special packages for Tirumala pilgrimage with experienced drivers familiar with temple procedures.',
    features: ['Tirumala darshan assistance', 'Special entry guidance', 'Local language drivers', 'Flexible timing'],
    link: '/book-ride'
  },
  {
    icon: <Plane className="w-8 h-8" />,
    title: 'Airport Transfers',
    description: 'Seamless airport pickup and drop services. Never miss your flight with our reliable transfers.',
    features: ['Flight tracking', 'Meet & greet', 'Luggage assistance', '24/7 availability'],
    link: '/book-ride'
  },
  {
    icon: <Train className="w-8 h-8" />,
    title: 'Railway Station Transfers',
    description: 'Quick pickup and drop at Tirupati Railway Station. Perfect for pilgrims and tourists.',
    features: ['Platform assistance', 'Luggage help', 'Waiting charges waived', 'Real-time train tracking'],
    link: '/book-ride'
  },
  {
    icon: <Bus className="w-8 h-8" />,
    title: 'Bus Stand Transfers',
    description: 'Convenient transfers from APSRTC and private bus stands to any location in Tirupati.',
    features: ['All bus stands covered', 'Quick pickup', 'Help with luggage', 'Affordable rates'],
    link: '/book-ride'
  },
  {
    icon: <Map className="w-8 h-8" />,
    title: 'Outstation Trips',
    description: 'Plan trips to nearby destinations like Sricity, Chandragiri, and other tourist spots.',
    features: ['Round trip packages', 'Experienced drivers', 'Flexible itinerary', 'Transparent pricing'],
    link: '/book-ride'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Group Travel',
    description: 'Tempo travellers and minibuses for large groups, family trips, and corporate outings.',
    features: ['12-20 seater vehicles', 'Professional drivers', 'Customized routes', 'Group discounts'],
    link: '/rental-cars'
  }
]

const WHY_CHOOSE_US = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Safe & Secure',
    description: 'Verified drivers, GPS tracking, and 24/7 support for your peace of mind'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Punctual Service',
    description: 'We value your time. Our drivers arrive on time, every time'
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Highly Rated',
    description: '4.8/5 rating from thousands of satisfied customers'
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: '24/7 Support',
    description: 'Round-the-clock customer service for any assistance'
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-orange-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
              G7
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                G7 Travels
              </h1>
              <p className="text-xs text-muted-foreground">Our Services</p>
            </div>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-orange-600">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive travel solutions tailored for Tirupati pilgrims and tourists
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Why Choose G7 Travels?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SERVICES.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-orange-200">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white mb-4">
                    {service.icon}
                  </div>
                  {service.badge && (
                    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200">
                      {service.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Key Features:</p>
                  <ul className="space-y-1">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-600 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={service.link}>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
                    Book Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-orange-600 to-red-600 text-white border-0">
          <CardContent className="pt-8 pb-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need a Custom Package?</h2>
            <p className="opacity-90 mb-6 max-w-2xl mx-auto">
              We can create personalized travel packages for groups, corporate events, weddings, and special occasions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50">
                  Contact Us
                </Button>
              </Link>
              <Link href="/partner">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
