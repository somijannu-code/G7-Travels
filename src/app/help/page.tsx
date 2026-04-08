'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ArrowLeft, Search, BookOpen, MessageSquare, Phone, Video, FileText, Headphones, AlertCircle, Car, Calendar, Shield, CreditCard } from 'lucide-react'
import { useState } from 'react'

const HELP_CATEGORIES = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Getting Started',
    description: 'Learn how to use our services',
    articles: ['How to book your first ride', 'Creating an account', 'Verifying your phone number', 'Setting up payment methods']
  },
  {
    icon: <Car className="w-6 h-6" />,
    title: 'Booking & Rides',
    description: 'Everything about booking rides',
    articles: ['Booking a ride', 'Scheduling rides', 'Tracking your ride', 'Cancelling a ride', 'Changing pickup location']
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Car Rentals',
    description: 'Self-drive and chauffeur rentals',
    articles: ['Booking a rental car', 'Rental requirements', 'Extending rental period', 'Vehicle inspection guide']
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Safety & Trust',
    description: 'Stay safe while traveling',
    articles: ['Safety features', 'Driver verification', 'Emergency SOS', 'Sharing trip details']
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: 'Payments & Refunds',
    description: 'Manage your payments',
    articles: ['Payment methods', 'Getting invoices', 'Refund process', 'Promo codes and offers']
  },
  {
    icon: <AlertCircle className="w-6 h-6" />,
    title: 'Troubleshooting',
    description: 'Solve common issues',
    articles: ['App not working', 'Payment failed', 'Driver didn\'t arrive', 'Lost items in vehicle']
  }
]

const SUPPORT_OPTIONS = [
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'Live Chat',
    description: 'Chat with our support team',
    action: 'Start Chat',
    available: '24/7'
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: 'Call Support',
    description: 'Speak with an agent',
    action: '+91 98765 43210',
    available: '24/7'
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: 'Video Support',
    description: 'Face-to-face assistance',
    action: 'Request Call',
    available: '9 AM - 9 PM'
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: 'Email Support',
    description: 'Send us a detailed query',
    action: 'support@g7travels.com',
    available: '24/7'
  }
]

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('')

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
              <p className="text-xs text-muted-foreground">Help Center</p>
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
          <Headphones className="w-16 h-16 mx-auto mb-4 text-orange-600" />
          <h1 className="text-4xl font-bold mb-4">How can we help you?</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Search our knowledge base or reach out to our support team for assistance
          </p>
        </div>

        {/* Search Bar */}
        <Card className="mb-12 max-w-2xl mx-auto">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for help articles, FAQs, or topics..."
                className="pl-9 h-12 text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Quick Support */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-6">Get Instant Help</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {SUPPORT_OPTIONS.map((option, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white mx-auto mb-3">
                    {option.icon}
                  </div>
                  <h3 className="font-semibold mb-1">{option.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{option.description}</p>
                  <p className="text-xs font-medium text-orange-600">{option.action}</p>
                  <p className="text-xs text-slate-500 mt-1">{option.available}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Help Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-6">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {HELP_CATEGORIES.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white mb-3">
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.articles.slice(0, 3).map((article, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <FileText className="w-3 h-3" />
                        {article}
                      </li>
                    ))}
                  </ul>
                  {category.articles.length > 3 && (
                    <p className="text-xs text-orange-600 mt-3 font-medium">
                      +{category.articles.length - 3} more articles
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Popular Articles */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Popular Articles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'How to get a refund for cancelled ride',
                'What to do if driver doesn\'t arrive',
                'How to report lost items',
                'Understanding surge pricing',
                'Booking a ride for someone else',
                'Adding multiple stops to your ride'
              ].map((article, index) => (
                <Link key={index} href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 transition-colors">
                  <FileText className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <span className="text-sm">{article}</span>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Still Need Help */}
        <Card className="bg-gradient-to-r from-orange-600 to-red-600 text-white border-0">
          <CardContent className="pt-8 pb-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Still Can't Find What You Need?</h2>
            <p className="opacity-90 mb-6">
              Our dedicated support team is available 24/7 to assist you with any issues or questions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Contact Support
                </Button>
              </Link>
              <a href="tel:+919876543210">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                  <Phone className="w-5 h-5 mr-2" />
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
