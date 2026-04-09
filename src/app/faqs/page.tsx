'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, HelpCircle, ChevronDown, ChevronUp, Car, Calendar, Shield, CreditCard, Users, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
 
  const faqs = [
    {
      category: 'Booking & Rides',
      questions: [
        {
          q: 'How do I book a ride?',
          a: 'You can book a ride through our website by entering your pickup and drop locations, selecting your preferred vehicle type, and confirming the booking. The entire process takes less than 2 minutes.'
        },
        {
          q: 'Can I schedule a ride for later?',
          a: 'Yes! You can schedule a ride up to 7 days in advance. Just select your preferred pickup time during the booking process.'
        },
        {
          q: 'How do I cancel my ride?',
          a: 'Go to "My Rides" in your account, select the ride you want to cancel, and click "Cancel Ride". Free cancellation is available up to 30 minutes before pickup.'
        },
        {
          q: 'What happens if my driver cancels?',
          a: 'If your driver cancels, we will automatically assign you a new driver from nearby available drivers. You will not be charged for driver cancellations.'
        }
      ]
    },
    {
      category: 'Pricing & Payments',
      questions: [
        {
          q: 'How is the fare calculated?',
          a: 'Fare = Base Fare + (Distance × ₹20/km) + (Time × Time Rate) + GST (18%). The exact fare is shown before you confirm your booking.'
        },
        {
          q: 'Are there any hidden charges?',
          a: 'No! We believe in transparent pricing. The fare you see at booking is the fare you pay. The only additional charge is 18% GST as per government regulations.'
        },
        {
          q: 'What payment methods are accepted?',
          a: 'We accept UPI, credit/debit cards, net banking, and cash. Digital payments often come with special discounts.'
        },
        {
          q: 'Can I get an invoice for my ride?',
          a: 'Yes, GST invoices are automatically generated for all rides. You can download them from your account under "My Rides".'
        }
      ]
    },
    {
      category: 'Safety & Support',
      questions: [
        {
          q: 'Are your drivers verified?',
          a: 'Absolutely. All drivers undergo comprehensive background verification, document checks (license, Aadhaar, PAN), and training before joining our platform.'
        },
        {
          q: 'How can I track my ride?',
          a: 'Once your ride is confirmed, you can track it in real-time on our website. You can also share the live location with your contacts.'
        },
        {
          q: 'What if I leave something in the vehicle?',
          a: 'Contact our support team immediately with your ride details. We will coordinate with the driver to retrieve your item and arrange its return.'
        },
        {
          q: 'Is there an emergency contact?',
          a: 'Yes, our 24/7 emergency helpline is +91 98765 43210. We also have an SOS feature in our app for immediate assistance.'
        }
      ]
    },
    {
      category: 'Vehicles & Services',
      questions: [
        {
          q: 'What types of vehicles are available?',
          a: 'We offer Hatchback, Sedan, SUV, Premium Sedan, Tempo Traveller (12-seater), and Minibus (20-seater) to suit all your travel needs.'
        },
        {
          q: 'Can I request a specific vehicle?',
          a: 'Yes, you can select your preferred vehicle type during booking. While we cannot guarantee a specific model, we ensure the vehicle matches your selected category.'
        },
        {
          q: 'Do you provide outstation services?',
          a: 'Yes! We offer one-way and round-trip outstation services to destinations across Andhra Pradesh and neighboring states.'
        },
        {
          q: 'Can I book a vehicle for multiple days?',
          a: 'Yes, we offer rental packages for hourly, daily, and weekly durations. Contact our support team for customized quotes.'
        }
      ]
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
          <h1 className="text-xl font-bold">Frequently Asked Questions</h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="w-8 h-8 text-orange-600" />
            <h2 className="text-4xl font-bold">How Can We Help?</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to the most commonly asked questions about G7 Travels services
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto space-y-8">
          {faqs.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-xl font-bold mb-4 text-orange-600">{category.category}</h3>
              <div className="space-y-3">
                {category.questions.map((faq, faqIndex) => {
                  const index = catIndex * 100 + faqIndex
                  const isOpen = openIndex === index
                  return (
                    <Card key={index} className="overflow-hidden">
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="w-full text-left p-6 flex items-start justify-between hover:bg-slate-50 transition-colors"
                      >
                        <span className="font-semibold pr-8">{faq.q}</span>
                        {isOpen ? <ChevronUp className="w-5 h-5 flex-shrink-0 mt-0.5" /> : <ChevronDown className="w-5 h-5 flex-shrink-0 mt-0.5" />}
                      </button>
                      {isOpen && (
                        <CardContent className="pt-0 pb-6 px-6">
                          <p className="text-muted-foreground">{faq.a}</p>
                        </CardContent>
                      )}
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

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
              <a href="tel:+919014878313">
                  <Button variant="outline" size="lg" className="w-full md:w-auto bg-white/10 border-white/20 text-white hover:bg-white/20">
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
