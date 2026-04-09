'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, MapPin, Calendar, Users, Clock, Star, CheckCircle2, Car, Building2, IndianRupee, Phone } from 'lucide-react'
import Link from 'next/link'

export default function PilgrimagePackagesPage() {
  // Your custom packages and pricing
  const packages = [
    {
      name: 'Airport - Tirumala Darshan (Direct)',
      image: '/pkg-1.jpg', // Upload this image to your public folder
      duration: '1 Day',
      price: '3,500',
      rating: 4.9,
      reviews: 1250,
      highlights: [
        'Pickup from Tirupati Airport',
        'Direct travel to Tirumala for Darshan',
        'Drop back at Airport or Tirupati City',
        'AC Sedan/Hatchback included'
      ],
      capacity: '4 Passengers'
    },
    {
      name: 'Airport - Tirumala + Sightseeing',
      image: '/pkg-2.jpg', // Upload this image to your public folder
      duration: '1 Day',
      price: '4,500',
      rating: 4.8,
      reviews: 890,
      highlights: [
        'Pickup from Tirupati Airport',
        'Tirumala Darshan',
        'Visit to local side scenes/attractions',
        'Drop back at Airport or Tirupati City'
      ],
      capacity: '4 Passengers'
    },
    {
      name: 'Local Temples Tour',
      image: '/pkg-3.jpg', // Upload this image to your public folder
      duration: 'Half Day',
      price: '2,500',
      rating: 4.7,
      reviews: 654,
      highlights: [
        'Pickup from your location in Tirupati',
        'Visit to major local Tirupati temples',
        'Padmavathi Temple, Govindaraja Swamy, etc.',
        'Drop back at your location'
      ],
      capacity: '4 Passengers'
    },
    {
      name: 'Tirupati to Kanipakam',
      image: '/pkg-4.jpg', // Upload this image to your public folder
      duration: '1 Day',
      price: '3,500',
      rating: 4.9,
      reviews: 432,
      highlights: [
        'Pickup from Tirupati',
        'Travel to Kanipakam Varasiddhi Vinayaka Temple',
        'Darshan assistance',
        'Return drop at Tirupati'
      ],
      capacity: '4 Passengers'
    },
    {
      name: 'Tirupati to Srikalahasti',
      image: '/pkg-5.jpg', // Upload this image to your public folder
      duration: 'Half Day',
      price: '2,500',
      rating: 4.8,
      reviews: 512,
      highlights: [
        'Pickup from Tirupati',
        'Travel to Srikalahasti Shiva Temple',
        'Darshan assistance',
        'Return drop at Tirupati'
      ],
      capacity: '4 Passengers'
    },
    {
      name: 'Kanipakam & Golden Temple',
      image: '/pkg-6.jpg', // Upload this image to your public folder
      duration: '1 Day',
      price: '5,000',
      rating: 4.9,
      reviews: 876,
      highlights: [
        'Pickup from Tirupati',
        'Visit Kanipakam Temple',
        'Travel to Vellore Golden Temple (Sripuram)',
        'Return drop at Tirupati'
      ],
      capacity: '4 Passengers'
    },
    {
      name: 'Kanipakam, Golden Temple & Arunachalam',
      image: '/pkg-7.jpg', // Upload this image to your public folder
      duration: '1-2 Days',
      price: '6,500',
      rating: 4.9,
      reviews: 342,
      highlights: [
        'Pickup from Tirupati',
        'Visit Kanipakam Temple',
        'Visit Vellore Golden Temple',
        'Visit Arunachalam (Tiruvannamalai)',
        'Return drop at Tirupati'
      ],
      capacity: '4 Passengers'
    },
    {
      name: 'Mega Round Trip (2 Days)',
      image: '/pkg-8.jpg', // Upload this image to your public folder
      duration: '2 Days',
      price: '11,000',
      rating: 5.0,
      reviews: 128,
      highlights: [
        'Tirupati pickup',
        'Vakulamatha Temple & Srinivasa Mangapuram',
        'Kanipakam & Golden Temple',
        'Arunachalam & Kanchi',
        'Tiruttani & Return'
      ],
      capacity: '4 Passengers',
      badge: 'Best Value'
    },
    {
      name: 'Tirupati to Chennai Drop',
      image: '/pkg-9.jpg', // Upload this image to your public folder
      duration: 'One Way',
      price: '5,500',
      rating: 4.7,
      reviews: 550,
      highlights: [
        'Pickup from anywhere in Tirupati',
        'Direct travel to Chennai',
        'Drop at Airport, Railway Station, or City',
        'Toll & State Tax included'
      ],
      capacity: '4 Passengers'
    },
    {
      name: 'Tirupati to Bangalore Drop',
      image: '/pkg-10.jpg', // Upload this image to your public folder
      duration: 'One Way',
      price: '7,000',
      rating: 4.8,
      reviews: 420,
      highlights: [
        'Pickup from anywhere in Tirupati',
        'Direct travel to Bangalore',
        'Drop at Airport, Railway Station, or City',
        'Toll & State Tax included'
      ],
      capacity: '4 Passengers'
    }
  ]

  const inclusions = [
    'Comfortable AC vehicle',
    'Experienced driver familiar with temple routes',
    'Toll & Parking charges (unless specified)',
    '24/7 Phone Support',
    'Clean and sanitized cars',
    'Flexible pickup timings'
  ]

  const handleWhatsAppBooking = (pkgName: string, pkgPrice: string) => {
    const message = `*🚕 Package Enquiry | G7 TRAVELS*
    
I am interested in booking the following package:
*Package:* ${pkgName}
*Price:* ₹${pkgPrice}

Please provide more details regarding availability and booking.`

    const whatsappUrl = `https://wa.me/919014878313?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Building2 className="w-8 h-8 text-orange-600" />
          <h2 className="text-4xl font-bold text-slate-800">Sacred Pilgrimage Packages</h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Experience the divine journey to Tirumala and other sacred temples with our specially curated, fixed-price pilgrimage packages
        </p>
      </div>

      {/* Packages Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {packages.map((pkg, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow border-2 border-slate-100 hover:border-orange-200">
            {/* Changed bg-slate-200 to bg-white to ensure a clean background for uncropped images */}
            <div className="relative h-64 bg-white flex items-center justify-center p-4 border-b border-slate-100">
              <img
                src={pkg.image}
                alt={pkg.name}
                // Changed object-cover to object-contain so it doesn't crop
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80' // Fallback temple image
                }}
              />
              <Badge className="absolute top-4 right-4 bg-orange-600 hover:bg-orange-700 text-white px-3 py-1 shadow-md">
                {pkg.duration}
              </Badge>
              {pkg.badge && (
                <Badge className="absolute top-4 left-4 bg-green-600 hover:bg-green-700 text-white px-3 py-1 shadow-md">
                  {pkg.badge}
                </Badge>
              )}
            </div>
            <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
              <div className="flex items-start justify-between mb-2">
                <CardTitle className="text-xl text-slate-800 leading-tight">{pkg.name}</CardTitle>
                <div className="flex items-center gap-1 text-sm bg-white px-2 py-1 rounded-md shadow-sm border border-slate-100">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-slate-700">{pkg.rating}</span>
                </div>
              </div>
              <CardDescription>
                <div className="flex items-center gap-4 text-sm text-slate-600 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-orange-500" />
                    {pkg.capacity}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-orange-500" />
                    {pkg.duration}
                  </span>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div>
                <h4 className="font-semibold mb-3 text-sm text-slate-700">Package Highlights:</h4>
                <ul className="space-y-2">
                  {pkg.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between pt-6 mt-4 border-t border-slate-100">
                <div>
                  <span className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Fixed Price</span>
                  <div className="text-2xl font-black text-orange-600 flex items-center gap-1">
                    <IndianRupee className="w-5 h-5" />
                    {pkg.price}
                  </div>
                </div>
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg transition-all"
                  onClick={() => handleWhatsAppBooking(pkg.name, pkg.price)}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Book via WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* What's Included */}
      <div className="max-w-4xl mx-auto mb-16">
        <h3 className="text-2xl font-bold text-center mb-8 text-slate-800">What's Included in all Packages</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {inclusions.map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-orange-300 hover:shadow-md transition-all">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="font-medium text-slate-700 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-4xl mx-auto mb-8">
        <Card className="bg-gradient-to-br from-orange-600 to-red-600 text-white border-0 shadow-xl overflow-hidden">
          <div className="absolute inset-0 bg-[url('/tirupati-god.png')] bg-cover bg-center opacity-10 mix-blend-overlay" />
          <CardHeader className="relative z-10 pb-2">
            <CardTitle className="text-3xl text-center font-bold">Why Choose G7 Travels?</CardTitle>
          </CardHeader>
          <CardContent className="relative z-10 pt-6">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-4xl font-black mb-2 text-orange-100">10K+</div>
                <div className="text-sm font-medium text-orange-50 uppercase tracking-wider">Pilgrims Served</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-4xl font-black mb-2 text-orange-100">Fixed</div>
                <div className="text-sm font-medium text-orange-50 uppercase tracking-wider">Transparent Pricing</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-4xl font-black mb-2 text-orange-100">24/7</div>
                <div className="text-sm font-medium text-orange-50 uppercase tracking-wider">Support Available</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
