'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Search, BookOpen, MessageCircle, Phone, Mail, CheckCircle2, HelpCircle } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const faqs = [
    {
      question: 'How do I book a ride?',
      answer: 'You can book a ride through our website by entering your pickup and drop locations, selecting your preferred vehicle type, and confirming the booking. Alternatively, call our 24/7 helpline.'
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept all major credit/debit cards, UPI payments, net banking, and cash. Digital payments are eligible for discounts.'
    },
    {
      question: 'How is the fare calculated?',
      answer: 'Fare is calculated based on distance (₹20/km), time, and base fare applicable to your vehicle type. 18% GST is added to the total amount.'
    },
    {
      question: 'Can I cancel my booking?',
      answer: 'Yes, you can cancel your booking. Cancellation is free if done 30 minutes before pickup. Late cancellations may incur a small fee.'
    },
    {
      question: 'How do I track my ride?',
      answer: 'Once your ride is confirmed, you will receive a tracking link. You can also track your ride through our website or mobile app.'
    },
    {
      question: 'Are your drivers verified?',
      answer: 'Yes, all our drivers undergo thorough background verification, document checks, and training before joining our platform.'
    }
  ]

  const contactOptions = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      description: '24/7 Customer Support',
      value: '+91 98765 43210',
      action: 'Call Now'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Live Chat',
      description: 'Chat with our support team',
      value: 'Available 9 AM - 9 PM',
      action: 'Start Chat'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      description: 'We will respond within 24 hours',
      value: 'support@g7travels.com',
      action: 'Send Email'
    }
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
          <h1 className="text-xl font-bold">Help Center</h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="w-8 h-8 text-orange-600" />
            <h2 className="text-4xl font-bold">How Can We Help?</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Find answers to common questions or get in touch with our support team
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Quick Help */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-3">
                <BookOpen className="w-6 h-6 text-orange-600" />
              </div>
              <CardTitle>FAQs</CardTitle>
              <CardDescription>Find answers to common questions</CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-3">
                <MessageCircle className="w-6 h-6 text-orange-600" />
              </div>
              <CardTitle>Live Chat</CardTitle>
              <CardDescription>Chat with our support team</CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-3">
                <Phone className="w-6 h-6 text-orange-600" />
              </div>
              <CardTitle>Call Support</CardTitle>
              <CardDescription>24/7 helpline available</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Options */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Still Need Help?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {contactOptions.map((option, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {option.icon}
                  </div>
                  <CardTitle>{option.title}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm font-medium">{option.value}</p>
                  <Button className="w-full">{option.action}</Button>
                </CardContent>
              </Card>
            ))}
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
