'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, MapPin, Calendar, Users, Clock, Star, CheckCircle2, Car, Building2, IndianRupee } from 'lucide-react'
import Link from 'next/link'

export default function PilgrimagePackagesPage() {
  const packages = [
    {
      name: 'Tirumala Darshan Package',
      image: 'https://images.unsplash.com/photo-1621252179027-94459d27d3ee?w=800&q=80',
      duration: '1 Day',
      price: '₹3,500',
      rating: 4.9,
      reviews: 1250,
      highlights: [
        'Pickup from Tirupati',
        'Tirumala darshan with special entry',
        'Laddu prasadam included',
        'Return to Tirupati',
        'Experienced guide'
      ],
      capacity: '4 Passengers'
    },
    {
      name: 'Tirupati Temple Tour',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
      duration: '2 Days',
      price: '₹7,500',
      rating: 4.8,
      reviews: 890,
      highlights: [
        'Tirupati city temples',
        'Tirumala darshan',
        'Sri Kalahasti temple visit',
        'Hotel accommodation (1 night)',
        'All meals included'
      ],
      capacity: '4 Passengers'
    },
    {
      name: 'Seven Hills Tour',
      image: 'https://images.unsplash.com/photo-1599581895698-49232dd78a4d?w=800&q=80',
      duration: '3 Days',
      price: '₹12,000',
      rating: 4.9,
      reviews: 654,
      highlights: [
        'Complete Tirumala pilgrimage',
        'All seven sacred hills',
        'Padmavathi temple',
        'ISKCON temple',
        'Hotel & meals included'
      ],
      capacity: '6 Passengers'
    },
    {
      name: 'Andhra Temples Circuit',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80',
      duration: '5 Days',
      price: '₹25,000',
      rating: 4.7,
      reviews: 432,
      highlights: [
        'Tirumala',
        'Srisailam',
        'Srikalahasti',
        'Kanipakam',
        'Hotels & transport included'
      ],
      capacity: '4 Passengers'
    }
  ]

  const inclusions = [
    'Comfortable AC vehicle',
    'Experienced driver familiar with routes',
    'Special darshan assistance',
    'Laddu prasadam',
    'Bottled water',
    'Pooja materials'
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
          <h1 className="text-xl font-bold">Pilgrimage Packages</h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Building2 className="w-8 h-8 text-orange-600" />
            <h2 className="text-4xl font-bold">Sacred Pilgrimage Packages</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the divine journey to Tirumala and other sacred temples with our specially curated pilgrimage packages
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-56">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1">
                  {pkg.duration}
                </Badge>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{pkg.rating}</span>
                    <span className="text-muted-foreground">({pkg.reviews})</span>
                  </div>
                </div>
                <CardDescription>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {pkg.capacity}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {pkg.duration}
                    </span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Package Highlights:</h4>
                  <ul className="space-y-1">
                    {pkg.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-sm text-muted-foreground">Starting from</span>
                    <div className="text-2xl font-bold text-orange-600 flex items-center gap-1">
                      <IndianRupee className="w-5 h-5" />
                      {pkg.price}
                    </div>
                  </div>
                  <Button>Book Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What's Included */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">What's Included</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {inclusions.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg border hover:shadow-md transition-shadow">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-orange-600 to-red-600 text-white border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Why Choose G7 Travels for Pilgrimage?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">10,000+</div>
                  <div className="text-sm opacity-90">Pilgrims Served</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">99%</div>
                  <div className="text-sm opacity-90">Success Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-sm opacity-90">Support Available</div>
                </div>
              </div>
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
