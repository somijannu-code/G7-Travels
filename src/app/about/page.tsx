'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, MapPin, Users, Car, Shield, Award, Target, Heart, Star } from 'lucide-react'

const STATS = [
  { number: '50K+', label: 'Happy Customers', icon: <Users className="w-6 h-6" /> },
  { number: '200+', label: 'Vehicles', icon: <Car className="w-6 h-6" /> },
  { number: '150+', label: 'Drivers', icon: <Shield className="w-6 h-6" /> },
  { number: '4.8★', label: 'Rating', icon: <Star className="w-6 h-6" /> }
]

const VALUES = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Safety First',
    description: 'Your safety is our top priority. All drivers are verified, and vehicles undergo regular safety checks.'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Customer Love',
    description: 'We go above and beyond to ensure every customer has a memorable and comfortable journey.'
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Reliability',
    description: 'Count on us for punctual service and dependable transportation, every single time.'
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Excellence',
    description: 'We continuously improve our services to deliver the best travel experience in Tirupati.'
  }
]

const TIMELINE = [
  { year: '2018', title: 'Founded', description: 'Started with 5 vehicles serving local pilgrims' },
  { year: '2019', title: 'Expansion', description: 'Grew to 50 vehicles, added airport transfer service' },
  { year: '2020', title: 'Digital Launch', description: 'Launched online booking platform' },
  { year: '2021', title: 'Rental Service', description: 'Introduced self-drive and chauffeur-driven rentals' },
  { year: '2022', title: 'Growth Milestone', description: 'Served 25,000+ customers' },
  { year: '2023', title: 'Full Service', description: 'Complete travel solution with 200+ vehicles' },
  { year: '2024', title: 'Regional Leader', description: 'Leading travel service in Tirupati region' }
]

export default function AboutPage() {
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
              <p className="text-xs text-muted-foreground">About Us</p>
            </div>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-orange-600">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">
            <MapPin className="w-3 h-3 mr-1" />
            Serving Tirupati Since 2018
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Trusted Travel Partner in{' '}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Tirupati
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            G7 Travels has been serving pilgrims and tourists in the holy city of Tirupati with dedication and commitment.
            We understand the unique needs of travelers visiting this sacred destination and strive to make every journey
            comfortable, safe, and memorable.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {STATS.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Story */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Our Story</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Founded in 2018, G7 Travels began with a simple mission: to provide safe, reliable, and affordable transportation
              for pilgrims visiting Tirupati and Tirumala. What started as a small fleet of 5 vehicles has grown into
              Tirupati's most trusted travel service.
            </p>
            <p className="text-muted-foreground">
              Our founder, having witnessed the challenges faced by pilgrims in finding trustworthy transportation,
              envisioned a service that prioritizes safety, punctuality, and customer comfort above all else.
              Today, we continue to uphold these values while embracing technology to enhance our services.
            </p>
            <p className="text-muted-foreground">
              From airport transfers to pilgrimage packages, from hourly rentals to outstation trips, we offer
              comprehensive travel solutions designed with our customers' needs in mind. Our team of experienced
              drivers, well-versed in local routes and temple procedures, ensure a smooth and stress-free journey.
            </p>
          </CardContent>
        </Card>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Journey</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {TIMELINE.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-orange-600 mb-2">{item.year}</div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-orange-600 to-red-600 text-white border-0">
          <CardContent className="pt-8 pb-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Journey</h2>
            <p className="opacity-90 mb-6 max-w-2xl mx-auto">
              Whether you're a customer looking for reliable transportation or a partner wanting to grow with us,
              we'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book-ride">
                <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50">
                  Book a Ride
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
