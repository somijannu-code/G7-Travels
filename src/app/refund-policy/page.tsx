'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, RefreshCw, AlertCircle, CheckCircle2, Clock, IndianRupee } from 'lucide-react'
import Link from 'next/link'

export default function RefundPolicyPage() {
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
          <h1 className="text-xl font-bold">Refund Policy</h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <RefreshCw className="w-8 h-8 text-orange-600" />
            <h2 className="text-4xl font-bold">Refund & Cancellation Policy</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Last updated: January 2024
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                At G7 Travels, we understand that plans change. Our refund and cancellation policy is designed to be fair and transparent while protecting both our customers and drivers.
              </p>
              <p className="text-sm text-muted-foreground">
                This policy applies to all bookings made through our platform, including ride bookings, car rentals, and outstation trips.
              </p>
            </CardContent>
          </Card>

          {/* Cancellation Policy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-600" />
                Cancellation Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Free Cancellation</h4>
                <p className="text-sm text-green-700">
                  Cancel your ride anytime up to <strong>30 minutes before</strong> the scheduled pickup time with <strong>zero cancellation fee</strong>.
                </p>
              </div>

              <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Late Cancellation</h4>
                <p className="text-sm text-orange-700">
                  Cancellations made <strong>within 30 minutes</strong> of pickup time incur a cancellation fee of <strong>₹50</strong>.
                </p>
              </div>

              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">No-Show</h4>
                <p className="text-sm text-red-700">
                  If you are not present at the pickup location within <strong>10 minutes</strong> of the driver's arrival, the full fare will be charged.
                </p>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Driver Cancellation</h4>
                <p className="text-sm text-blue-700">
                  If the driver cancels the ride, you will <strong>not be charged</strong>. We will automatically assign a new driver if available.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Refund Process */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-orange-600" />
                Refund Process
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-3">Refund Timeline</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 text-orange-600 font-semibold text-xs">1</div>
                    <div>
                      <p className="font-medium text-sm">Request Received</p>
                      <p className="text-xs text-muted-foreground">Cancellation is processed immediately</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 text-orange-600 font-semibold text-xs">2</div>
                    <div>
                      <p className="font-medium text-sm">Refund Initiated</p>
                      <p className="text-xs text-muted-foreground">Refund is initiated within 24 hours</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 text-orange-600 font-semibold text-xs">3</div>
                    <div>
                      <p className="font-medium text-sm">Refund Processed</p>
                      <p className="text-xs text-muted-foreground">Amount credited in 5-7 business days</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t">
                <h4 className="font-semibold mb-3">Refund Methods</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>UPI:</strong> Instant refund (typically within minutes)</li>
                  <li>• <strong>Credit/Debit Card:</strong> 5-7 business days</li>
                  <li>• <strong>Net Banking:</strong> 5-7 business days</li>
                  <li>• <strong>Wallet:</strong> Instant credit to G7 Travels wallet</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Special Cases */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-orange-600" />
                Special Cases
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Outstation Trips</h4>
                <p className="text-sm text-muted-foreground">
                  For outstation bookings, cancellation policy depends on the advance payment:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mt-2">
                  <li>Cancel 48+ hours before: Full refund</li>
                  <li>Cancel 24-48 hours before: 50% refund</li>
                  <li>Cancel less than 24 hours: No refund</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Car Rentals</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Cancel 24+ hours before: Full refund</li>
                  <li>Cancel 12-24 hours before: 50% refund</li>
                  <li>Cancel less than 12 hours: No refund</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Pilgrimage Packages</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Cancel 7+ days before: Full refund (minus booking fees)</li>
                  <li>Cancel 3-7 days before: 50% refund</li>
                  <li>Cancel less than 3 days: No refund</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Non-Refundable Items */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <IndianRupee className="w-5 h-5 text-orange-600" />
                Non-Refundable Items
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                The following items are non-refundable:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li><strong>Toll Charges:</strong> Already paid tolls cannot be refunded</li>
                <li><strong>Parking Fees:</strong> Parking charges incurred during the trip</li>
                <li><strong>Night Surcharge:</strong> Applicable surcharges for late-night rides</li>
                <li><strong>Waiting Time Charges:</strong> Charges for waiting beyond free allowance</li>
                <li><strong>Booking Fees:</strong> Processing fees (if any) for special bookings</li>
              </ul>
            </CardContent>
          </Card>

          {/* Dispute Resolution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-orange-600" />
                Dispute Resolution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground mb-4">
                If you believe you're entitled to a refund that hasn't been processed:
              </p>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">Contact our support team within 7 days of the transaction</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">Provide your booking ID and reason for refund request</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">Our team will review and respond within 48 hours</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">If approved, refund will be processed as per standard timeline</p>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-gradient-to-br from-orange-600 to-red-600 text-white border-0">
            <CardHeader>
              <CardTitle>Need Help with a Refund?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/90 mb-4">
                Our support team is here to help you with any refund-related queries:
              </p>
              <div className="space-y-2">
                <p className="text-sm"><strong>Email:</strong> refunds@g7travels.com</p>
                <p className="text-sm"><strong>Phone:</strong> +91 98765 43210</p>
                <p className="text-sm"><strong>Available:</strong> 24/7</p>
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
