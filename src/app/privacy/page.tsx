'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, Cookie } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicyPage() {
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
          <h1 className="text-xl font-bold">Privacy Policy</h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-8 h-8 text-orange-600" />
            <h2 className="text-4xl font-bold">Privacy Policy</h2>
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
                G7 Travels ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our travel services.
              </p>
              <p>
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5 text-orange-600" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Personal Information</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Name and contact details (phone, email)</li>
                  <li>Address and location data</li>
                  <li>Payment information</li>
                  <li>Driver's license and vehicle documents (for drivers)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Travel Information</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Pickup and drop locations</li>
                  <li>Ride history and booking details</li>
                  <li>Vehicle preferences</li>
                  <li>Travel patterns</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Technical Information</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Your Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-orange-600" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">To provide, maintain, and improve our services</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">To process transactions and send booking confirmations</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">To send technical notices and support messages</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">To respond to comments and questions</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">To monitor and analyze trends, usage, and activities</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">To detect, prevent, and address technical issues</p>
              </div>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-orange-600" />
                Data Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Restricted access to personal data</li>
                <li>Secure payment processing through PCI DSS compliant providers</li>
                <li>Regular backups and disaster recovery procedures</li>
              </ul>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-orange-600" />
                Your Rights (DPDP Act 2023)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground"><strong>Right to Access:</strong> Request a copy of your personal data</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground"><strong>Right to Correction:</strong> Update inaccurate or incomplete data</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground"><strong>Right to Erasure:</strong> Request deletion of your personal data</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground"><strong>Right to Portability:</strong> Receive your data in a structured format</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground"><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time</p>
              </div>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cookie className="w-5 h-5 text-orange-600" />
                Cookies and Tracking Technologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information.
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Essential Cookies:</strong> Required for the website to function</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how you use our services</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-gradient-to-br from-orange-600 to-red-600 text-white border-0">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/90 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="space-y-2">
                <p className="text-sm"><strong>Email:</strong> privacy@g7travels.com</p>
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
