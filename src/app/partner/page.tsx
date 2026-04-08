'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ArrowLeft, Car, Users, Wallet, TrendingUp, Shield, CheckCircle, Send } from 'lucide-react'

const BENEFITS = [
  {
    icon: <Wallet className="w-8 h-8" />,
    title: 'High Earnings',
    description: 'Earn up to ₹40,000-50,000 per month with flexible working hours'
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Instant Payouts',
    description: 'Get your earnings transferred to your bank account daily or weekly'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Insurance Coverage',
    description: 'Comprehensive insurance for you, your vehicle, and passengers'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Community Support',
    description: 'Join a network of 150+ drivers with regular training and meetups'
  }
]

const REQUIREMENTS = [
  'Valid Driving License (minimum 2 years old)',
  'Vehicle registration (RC) in your name',
  'Valid Pollution Under Control (PUC) certificate',
  'Commercial permit for commercial vehicles',
  'Vehicle insurance (comprehensive)',
  'Aadhaar card and PAN card for verification',
  'Smartphone with internet connection',
  'Age between 21-60 years'
]

const STEPS = [
  { step: '1', title: 'Apply Online', description: 'Fill out the partner registration form with your details' },
  { step: '2', title: 'Document Verification', description: 'Upload required documents for verification' },
  { step: '3', title: 'Training', description: 'Complete our brief driver training program' },
  { step: '4', title: 'Start Earning', description: 'Get approved and start accepting ride requests' }
]

export default function PartnerPage() {
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
              <p className="text-xs text-muted-foreground">Partner With Us</p>
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
        <div className="text-center mb-12">
          <Car className="w-16 h-16 mx-auto mb-4 text-orange-600" />
          <h1 className="text-4xl font-bold mb-4">Drive with G7 Travels</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our growing network of drivers and earn on your own schedule. Be your own boss in Tirupati.
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Why Partner With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Requirements</CardTitle>
            <CardDescription>To become a G7 Travels partner, you need to meet these criteria</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-3">
              {REQUIREMENTS.map((req, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm">{req}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">How to Get Started</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {STEPS.map((step, index) => (
              <Card key={index} className="text-center relative">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
                {index < STEPS.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
                    <div className="w-6 h-0.5 bg-slate-300" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Send className="w-5 h-5 text-orange-600" />
              Apply to Become a Partner
            </CardTitle>
            <CardDescription>
              Fill out the form below and our team will contact you within 24-48 hours
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input id="fullName" placeholder="Your full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" type="tel" placeholder="+91 98765 43210" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="vehicleType">Vehicle Type *</Label>
                <select id="vehicleType" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="">Select vehicle type</option>
                  <option value="hatchback">Hatchback</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="muv">MUV/Tempo Traveller</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="vehicleNumber">Vehicle Number *</Label>
                <Input id="vehicleNumber" placeholder="AP 39 AB 1234" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Driving Experience (years) *</Label>
              <Input id="experience" type="number" placeholder="e.g., 5" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Why do you want to join G7 Travels?</Label>
              <Textarea
                id="message"
                placeholder="Tell us about yourself and why you'd be a great partner..."
                rows={4}
              />
            </div>

            <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
              <Send className="w-4 h-4 mr-2" />
              Submit Application
            </Button>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <Card className="bg-gradient-to-r from-orange-600 to-red-600 text-white border-0">
          <CardContent className="pt-8 pb-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Questions About Partnering?</h2>
            <p className="opacity-90 mb-6">
              Our partner support team is here to help you get started on your journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+919876543210">
                <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50">
                  Call Us
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                  Contact Support
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
