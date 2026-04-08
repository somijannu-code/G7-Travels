'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Shield, CheckCircle2, UserCheck, MapPin, AlertTriangle, Phone, Lock } from 'lucide-react'
import Link from 'next/link'

export default function SafetyPage() {
  const safetyFeatures = [
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: 'Verified Drivers',
      description: 'All drivers undergo comprehensive background checks, document verification, and training before joining our platform'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Live GPS Tracking',
      description: 'Every ride is tracked in real-time. Share your trip status with trusted contacts for added security'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'SOS Button',
      description: 'One-tap emergency alert that notifies our support team and shares your location with emergency contacts'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support and emergency response team available at all times'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Secure Payments',
      description: 'All transactions are encrypted and processed through secure payment gateways. No cash needed'
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: 'Vehicle Maintenance',
      description: 'Regular safety inspections and maintenance checks ensure all vehicles are in top condition'
    }
  ]

  const safetyTips = [
    'Always verify the driver and vehicle details before starting your ride',
    'Share your trip status with family or friends',
    'Sit in the back seat for personal space',
    'Keep your belongings with you at all times',
    'Trust your instincts - if something feels wrong, end the ride',
    'Use the in-app SOS feature in emergencies'
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
          <h1 className="text-xl font-bold">Safety</h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-8 h-8 text-orange-600" />
            <h2 className="text-4xl font-bold">Your Safety is Our Priority</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've built multiple layers of safety into every ride to ensure you travel with peace of mind
          </p>
        </div>

        {/* Safety Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {safetyFeatures.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Safety Tips */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-gradient-to-br from-orange-600 to-red-600 text-white border-0">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-6 h-6" />
                <CardTitle className="text-2xl">Safety Tips for Passengers</CardTitle>
              </div>
              <CardDescription className="text-white/90">
                Follow these guidelines to ensure a safe journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {safetyTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Contact */}
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600">
                <Phone className="w-5 h-5" />
                Emergency Contact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                If you ever feel unsafe during a ride, immediately call our emergency helpline
              </p>
              <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground">24/7 Emergency Helpline</p>
                  <p className="text-2xl font-bold text-red-600">+91 90148 78313</p>
                </div>
                <Button variant="destructive" size="lg">
                  Call Now
                </Button>
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
