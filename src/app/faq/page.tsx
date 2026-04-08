'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, HelpCircle, Car, Calendar, Shield, CreditCard, Users, MapPin, Clock } from 'lucide-react'

const FAQ_CATEGORIES = [
  {
    icon: <Car className="w-6 h-6" />,
    title: 'Ride Booking',
    questions: [
      { q: 'How do I book a ride?', a: 'Enter your pickup and drop locations, select vehicle type, and confirm booking. You can book via website, app, or call our 24/7 helpline.' },
      { q: 'Can I schedule a ride for later?', a: 'Yes! Select "Schedule" option, choose date and time, and book your ride in advance.' },
      { q: 'What if no driver is available?', a: 'You will be notified immediately. You can either wait or try again later. We have 150+ drivers to ensure availability.' },
      { q: 'How do I track my ride?', a: 'Once your ride is confirmed, you can track the driver in real-time through our app or website.' }
    ]
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Rental Cars',
    questions: [
      { q: 'What documents do I need for rental?', a: 'Valid Driving License, Aadhaar card (or any government ID), and address proof for self-drive rentals.' },
      { q: 'Is fuel included in rental price?', a: 'No, fuel is not included. Vehicles are provided with a full tank and must be returned with the same fuel level.' },
      { q: 'Can I extend my rental period?', a: 'Yes, you can request an extension through the app or by calling support. Additional charges will apply based on duration.' },
      { q: 'What happens if I return the car late?', a: 'Late returns incur additional charges of ₹200 per hour. Please contact us if you anticipate being late.' }
    ]
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Safety & Security',
    questions: [
      { q: 'How do I know my driver is safe?', a: 'All drivers undergo background verification, document validation, and regular training. Ratings and reviews are also available.' },
      { q: 'What safety features are available?', a: 'Live ride tracking, SOS button, ride sharing, driver details sharing, and 24/7 emergency support.' },
      { q: 'Are vehicles insured?', a: 'Yes, all our vehicles are comprehensively insured. Passengers are covered during the ride.' },
      { q: 'What if I forget something in the vehicle?', a: 'Contact our support team immediately with ride details. We\'ll help you recover your lost items.' }
    ]
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: 'Payments & Pricing',
    questions: [
      { q: 'What payment methods are accepted?', a: 'We accept UPI, credit/debit cards, net banking, and cash. All digital payments are secure and encrypted.' },
      { q: 'Are there any hidden charges?', a: 'No, we believe in transparent pricing. The fare shown at booking is the final amount (excluding toll and parking).' },
      { q: 'How do I get an invoice?', a: 'Invoices are automatically generated after each ride and sent to your registered email. You can also download them from the app.' },
      { q: 'Can I use promo codes?', a: 'Yes! Apply promo codes during booking to avail discounts. Check our "Offers" section for latest deals.' }
    ]
  }
]

export default function FAQPage() {
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
              <p className="text-xs text-muted-foreground">FAQ</p>
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
          <HelpCircle className="w-16 h-16 mx-auto mb-4 text-orange-600" />
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        {FAQ_CATEGORIES.map((category, catIndex) => (
          <div key={catIndex} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white">
                {category.icon}
              </div>
              <h2 className="text-2xl font-bold">{category.title}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {category.questions.map((item, qIndex) => (
                <Card key={qIndex}>
                  <CardHeader>
                    <CardTitle className="text-base">{item.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Quick Links */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Quick Help</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <Link href="/book-ride">
                <div className="flex items-center gap-2 p-3 rounded-lg hover:bg-slate-100 transition-colors">
                  <Car className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-medium">Book a Ride</span>
                </div>
              </Link>
              <Link href="/rental-cars">
                <div className="flex items-center gap-2 p-3 rounded-lg hover:bg-slate-100 transition-colors">
                  <Calendar className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-medium">Rent a Car</span>
                </div>
              </Link>
              <Link href="/contact">
                <div className="flex items-center gap-2 p-3 rounded-lg hover:bg-slate-100 transition-colors">
                  <Shield className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-medium">Contact Support</span>
                </div>
              </Link>
              <Link href="/refund">
                <div className="flex items-center gap-2 p-3 rounded-lg hover:bg-slate-100 transition-colors">
                  <CreditCard className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-medium">Refund Policy</span>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Still Have Questions */}
        <Card className="bg-gradient-to-r from-orange-600 to-red-600 text-white border-0">
          <CardContent className="pt-8 pb-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="opacity-90 mb-6 max-w-2xl mx-auto">
              Our 24/7 support team is ready to help you with any queries. Don't hesitate to reach out!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50">
                  <MapPin className="w-5 h-5 mr-2" />
                  Contact Support
                </Button>
              </Link>
              <a href="tel:+919876543210">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                  <Clock className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
