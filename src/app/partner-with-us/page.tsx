'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Car, Users, TrendingUp, Shield, Clock, CheckCircle2, IndianRupee, Phone, Mail } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function PartnerWithUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    vehicleType: '',
    experience: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your interest! Our team will contact you within 24 hours.')
    setFormData({ name: '', phone: '', city: '', vehicleType: '', experience: '' })
  }

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'High Earnings',
      description: 'Earn up to ₹40,000 per month with flexible working hours'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Flexible Schedule',
      description: 'Be your own boss - work when you want, as much as you want'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Insurance Coverage',
      description: 'Comprehensive insurance for you and your vehicle'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Community Support',
      description: 'Join a network of 1000+ drivers in Tirupati region'
    }
  ]

  const requirements = [
    'Valid driving license (minimum 2 years)',
    'Age between 21-55 years',
    'Own a 4-wheeler (2015 model or newer)',
    'Smartphone with internet connection',
    'Aadhaar card and PAN card',
    'Bank account for earnings transfer'
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
          <h1 className="text-xl font-bold">Partner with Us</h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Car className="w-8 h-8 text-orange-600" />
            <h2 className="text-4xl font-bold">Drive with G7 Travels</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join Tirupati's leading travel service and earn money on your own terms. Be part of our growing driver community.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  {benefit.icon}
                </div>
                <CardTitle>{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Registration Form */}
          <Card>
            <CardHeader>
              <CardTitle>Register as a Driver</CardTitle>
              <CardDescription>Fill in your details to start earning with G7 Travels</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">City</label>
                  <input
                    type="text"
                    placeholder="Your city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Vehicle Type</label>
                  <select
                    value={formData.vehicleType}
                    onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Select vehicle type</option>
                    <option value="hatchback">Hatchback</option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="tempo-traveller">Tempo Traveller</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Driving Experience (years)</label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Select experience</option>
                    <option value="1-2">1-2 years</option>
                    <option value="2-5">2-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Requirements & Contact */}
          <div className="space-y-6">
            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
                <CardDescription>To drive with G7 Travels, you need:</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Earnings Info */}
            <Card className="bg-gradient-to-br from-orange-600 to-red-600 text-white border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <IndianRupee className="w-5 h-5" />
                  Earning Potential
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/90">Daily Earnings</span>
                    <span className="text-2xl font-bold">₹1,500 - ₹2,500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/90">Monthly Earnings</span>
                    <span className="text-2xl font-bold">₹35,000 - ₹45,000</span>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-white/90">
                      *Earnings vary based on hours worked, location, and demand
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call Us</p>
                    <p className="font-semibold">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email Us</p>
                    <p className="font-semibold">drivers@g7travels.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
