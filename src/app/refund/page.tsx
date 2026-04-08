'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, RefreshCw, Clock, CheckCircle, XCircle } from 'lucide-react'

export default function RefundPolicyPage() {
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
              <p className="text-xs text-muted-foreground">Refund Policy</p>
            </div>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-orange-600">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-12">
          <RefreshCw className="w-16 h-16 mx-auto mb-4 text-orange-600" />
          <h1 className="text-4xl font-bold mb-4">Refund Policy</h1>
          <p className="text-muted-foreground">Last updated: January 2024</p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-orange-600" />
              Refund Processing Time
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>Refunds are processed within 5-7 business days from the date of cancellation request approval.</p>
            <p><strong>Refund Methods:</strong></p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>UPI payments: Refunded to the same UPI ID</li>
              <li>Credit/Debit Cards: Refunded to the original card</li>
              <li>Net Banking: Refunded to the bank account</li>
              <li>Wallet: Refunded to the G7 Travels wallet</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Eligible for Full Refund
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>You are eligible for a full refund if:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Cancel ride within 5 minutes of booking</li>
              <li>Cancel ride more than 30 minutes before pickup time</li>
              <li>Cancel rental booking more than 24 hours before pickup</li>
              <li>Ride was cancelled by G7 Travels due to unavailability</li>
              <li>Driver did not arrive within 20 minutes of scheduled time</li>
              <li>Service quality was significantly below standards</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-600" />
              Non-Refundable Situations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>Refunds will not be processed in the following situations:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>No-show at pickup location</li>
              <li>Cancellation less than 5 minutes before ride pickup</li>
              <li>Cancellation less than 12 hours before rental pickup</li>
              <li>Driver arrived on time but customer cancelled</li>
              <li>Violation of service terms</li>
              <li>Damage to vehicle caused by customer</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-orange-600" />
              Partial Refund Policy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p><strong>Ride Cancellations (5-30 minutes before pickup):</strong></p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>50% of the estimated fare will be refunded</li>
              <li>Remaining 50% is charged as cancellation fee</li>
            </ul>
            <p className="mt-4"><strong>Rental Cancellations (12-24 hours before pickup):</strong></p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>50% of the total booking amount will be refunded</li>
              <li>Security deposit is fully refunded</li>
            </ul>
            <p className="mt-4"><strong>Trip Interruptions:</strong></p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Refund for unused portion of the trip</li>
              <li>Base cancellation fee may apply</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>How to Request a Refund</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Go to your booking history in the app</li>
              <li>Select the booking you want to cancel</li>
              <li>Click on "Request Cancellation"</li>
              <li>Provide a reason for cancellation</li>
              <li>Submit your request</li>
              <li>Receive confirmation via SMS and email</li>
            </ol>
            <p className="mt-4">
              For urgent refund requests, contact our 24/7 support team at +91 98765 43210
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-600 to-red-600 text-white border-0">
          <CardContent className="pt-8 pb-8 text-center">
            <h2 className="text-xl font-bold mb-4">Need Help with a Refund?</h2>
            <p className="opacity-90 mb-6">
              Our support team is available 24/7 to assist you with refund requests.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50">
                Contact Support
              </Button>
            </Link>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
