'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, FileText, CheckCircle2, AlertCircle, Ban } from 'lucide-react'
import Link from 'next/link'

export default function TermsPage() {
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
          <h1 className="text-xl font-bold">Terms of Service</h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FileText className="w-8 h-8 text-orange-600" />
            <h2 className="text-4xl font-bold">Terms of Service</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Last updated: January 2024
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle>Introduction</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <p>
                Welcome to G7 Travels. By using our travel services, you agree to comply with and be bound by the following Terms of Service ("Terms"). Please read them carefully.
              </p>
              <p>
                G7 Travels provides transportation services including ride booking, car rentals, and outstation travel in Tirupati and surrounding areas.
              </p>
            </CardContent>
          </Card>

          {/* Acceptance of Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-orange-600" />
                Acceptance of Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you may not use our services.
              </p>
              <p className="text-sm text-muted-foreground">
                We reserve the right to modify these Terms at any time. Your continued use of the services after any modifications constitutes acceptance of the updated Terms.
              </p>
            </CardContent>
          </Card>

          {/* Services */}
          <Card>
            <CardHeader>
              <CardTitle>Our Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                G7 Travels provides the following services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li><strong>Ride Booking:</strong> On-demand transportation within Tirupati and surrounding areas</li>
                <li><strong>Car Rentals:</strong> Self-drive and chauffeur-driven vehicle rentals</li>
                <li><strong>Airport Transfers:</strong> Pickup and drop services to/from Renigunta Airport</li>
                <li><strong>Outstation Travel:</strong> One-way and round-trip services to other cities</li>
                <li><strong>Pilgrimage Packages:</strong> Curated packages for temple visits and religious tours</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card>
            <CardHeader>
              <CardTitle>User Responsibilities</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Provide accurate and complete information when booking</li>
                <li>Be ready at the pickup location at the scheduled time</li>
                <li>Respect the driver and maintain appropriate behavior</li>
                <li>Not damage the vehicle or its contents</li>
                <li>Pay all applicable fares and charges promptly</li>
                <li>Follow all safety guidelines and instructions</li>
                <li>Not use our services for illegal activities</li>
              </ul>
            </CardContent>
          </Card>

          {/* Prohibited Activities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Ban className="w-5 h-5 text-orange-600" />
                Prohibited Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                You agree NOT to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Use the service for any illegal or unauthorized purpose</li>
                <li>Harass, abuse, or threaten drivers or other users</li>
                <li>Provide false or misleading information</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt our services</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Use the service to transport illegal goods or substances</li>
              </ul>
            </CardContent>
          </Card>

          {/* Pricing and Payments */}
          <Card>
            <CardHeader>
              <CardTitle>Pricing and Payments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold mb-2">Fare Calculation</h4>
                <p className="text-sm text-muted-foreground">
                  Fares are calculated based on distance (₹20/km), time, vehicle type, and applicable taxes (18% GST). The exact fare is displayed before booking confirmation.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Payment Methods</h4>
                <p className="text-sm text-muted-foreground">
                  We accept UPI, credit/debit cards, net banking, and cash. By providing payment information, you represent that you are authorized to use the payment method.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Additional Charges</h4>
                <p className="text-sm text-muted-foreground">
                  Additional charges may apply for waiting time, tolls, parking fees, night surcharge (10 PM - 6 AM), and outstation trips. All charges are transparently displayed.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Cancellation and Refunds */}
          <Card>
            <CardHeader>
              <CardTitle>Cancellation and Refunds</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground"><strong>Free Cancellation:</strong> Cancel up to 30 minutes before pickup with no charge</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground"><strong>Late Cancellation:</strong> Cancellations within 30 minutes incur a ₹50 fee</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground"><strong>No-Show:</strong> If you're not present at pickup location, full fare is charged</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground"><strong>Refunds:</strong> Processed within 5-7 business days to the original payment method</p>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-orange-600" />
                Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                To the maximum extent permitted by law, G7 Travels shall not be liable for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Indirect, incidental, special, or consequential damages</li>
                <li>Loss of profits, data, or business opportunities</li>
                <li>Delays or cancellations due to circumstances beyond our control</li>
                <li>Actions or omissions of third-party drivers</li>
                <li>Personal injury or property damage (except where caused by our negligence)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card>
            <CardHeader>
              <CardTitle>Governing Law</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Tirupati, Andhra Pradesh.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-gradient-to-br from-orange-600 to-red-600 text-white border-0">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/90 mb-4">
                For questions about these Terms, please contact us:
              </p>
              <div className="space-y-2">
                <p className="text-sm"><strong>Email:</strong> legal@g7travels.com</p>
                <p className="text-sm"><strong>Phone:</strong> +91 98765 43210</p>
                <p className="text-sm"><strong>Address:</strong> 123 Tirumala Road, Tirupati, Andhra Pradesh - 517501</p>
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
