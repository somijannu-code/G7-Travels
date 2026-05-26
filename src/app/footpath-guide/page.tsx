'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { 
  ArrowLeft, 
  Clock, 
  MapPin, 
  Info, 
  FileText, 
  Phone, 
  Car, 
  BookmarkCheck,
  Flame,
  Milestone
} from 'lucide-react'

export default function FootpathGuidePage() {
  const [activePath, setActivePath] = useState<'alipiri' | 'srivari'>('alipiri')

  const pathDetails = {
    alipiri: {
      name: 'Alipiri Mettu Footpath (Traditional Route)',
      steps: '3,550 Steps',
      time: '4 - 6 Hours',
      timings: 'Open 24 Hours / 7 Days a week',
      distance: '9 km total walking trek',
      highlights: [
        'Fully covered overhead roof shelter protecting from rain & hot sun.',
        'Features the Gali Gopuram (tower) at step 2,083 which offers scenic views.',
        'Equipped with drinking water filters, public restrooms, and medical aid centers every 500 meters.',
        'TTD Free Luggage Counter is located right at the start. Deposit your heavy bags and collect them at the hilltop for free.',
        'Fully illuminated by floodlights during night climbs.'
      ]
    },
    srivari: {
      name: 'Srivari Mettu Footpath (Fastest Route)',
      steps: '2,100 Steps',
      time: '2 - 3 Hours',
      timings: '6:00 AM to 6:00 PM daily (Closed at night)',
      distance: '2.1 km steep walking climb',
      highlights: [
        'Significantly shorter and faster walking route, though stairs are steeper.',
        'TTD Free Luggage Counter is active near the starting arch for hilltop transport.',
        'Begins at Srinivasa Mangapuram, which is 15 km from Tirupati town center.',
        'Preferred by pilgrims seeking a quick climb or those with tight darshan slots.',
        'Surrounded by dense forest views with a peaceful, traditional environment.'
      ]
    }
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-orange-400 transition-colors font-medium">Home</Link>
            <span>/</span>
            <span className="text-slate-200 font-semibold">Tirumala Footpath Guide</span>
          </div>

          <div className="max-w-3xl">
            <Badge className="bg-orange-500 hover:bg-orange-600 text-white mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              Pedestrian Pilgrimage Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-orange-100 to-orange-300 bg-clip-text text-transparent">
              Tirumala Footpath Guide: Alipiri & Srivari Mettu
            </h1>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Plan your spiritual trek to Lord Balaji Temple. Get steps count, luggage transfer rules, and walking times for both pedestrian routes. Book easy cab drops at footpath arches.
            </p>
          </div>
        </div>
      </section>

      {/* Fraud Alert / Taxi Disclaimer */}
      <section className="container mx-auto max-w-6xl px-4 mt-8">
        <Alert className="border-orange-500/20 bg-orange-500/5 text-slate-800">
          <Info className="h-5 w-5 text-orange-600 flex-shrink-0" />
          <AlertTitle className="text-orange-950 font-bold text-sm">
            Footpath Travel Advisory
          </AlertTitle>
          <AlertDescription className="text-slate-700 text-xs md:text-sm mt-1">
            Pilgrims walking to Tirumala on foot can deposit their luggage for free at TTD counters at the start of both paths. Heavily loaded bags are safely transported by TTD vehicles to the hilltop luggage delivery center in Tirumala. We recommend booking a **G7 Travels drop taxi** to drop your family directly at the starting footpath arch in Alipiri or Srinivasa Mangapuram.
          </AlertDescription>
        </Alert>
      </section>

      {/* Interactive Path Toggle */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-2 gap-4 max-w-xl mx-auto mb-10 bg-slate-200/50 p-1.5 rounded-xl border border-slate-300/40">
          <button
            onClick={() => setActivePath('alipiri')}
            className={`py-3 px-4 rounded-lg font-bold text-sm transition-all duration-200 flex items-center justify-center gap-1.5 ${
              activePath === 'alipiri'
                ? 'bg-white text-orange-600 shadow-md border-b-2 border-orange-500'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Flame className="w-4 h-4" /> Alipiri Footpath
          </button>
          <button
            onClick={() => setActivePath('srivari')}
            className={`py-3 px-4 rounded-lg font-bold text-sm transition-all duration-200 flex items-center justify-center gap-1.5 ${
              activePath === 'srivari'
                ? 'bg-white text-orange-600 shadow-md border-b-2 border-orange-500'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Milestone className="w-4 h-4" /> Srivari Mettu
          </button>
        </div>

        {/* Path Data Cards */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Highlights */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full">
                  Route Breakdown
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-3">
                  {pathDetails[activePath].name}
                </h3>
              </div>

              <div className="border-t border-slate-100 pt-6">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-orange-600" /> Walk Highlights & Rules:
                </h4>
                <ul className="space-y-3.5">
                  {pathDetails[activePath].highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                      <BookmarkCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Path Stats */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 flex flex-col justify-between">
              <div className="space-y-6">
                <h4 className="font-bold text-slate-900 text-sm tracking-wider uppercase">
                  Trek Parameters
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Milestone className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Total Steps</div>
                      <div className="text-sm font-extrabold text-slate-900">{pathDetails[activePath].steps}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Average Trek Duration</div>
                      <div className="text-sm font-extrabold text-slate-900">{pathDetails[activePath].time}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Operational Timings</div>
                      <div className="text-sm font-bold text-slate-800 leading-tight">{pathDetails[activePath].timings}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <a 
                  href={`https://wa.me/919014878313?text=${encodeURIComponent(`Hi G7 Travels, I would like to book a taxi drop to the starting point of the "${pathDetails[activePath].name}". Please provide rates.`)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md">
                    Book Footpath Drop Cab <ArrowLeft className="w-4 h-4 rotate-180" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transit Pricing Promotion */}
      <section className="container mx-auto max-w-6xl px-4 py-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.06),transparent_50%)] pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-orange-100 text-orange-600 font-semibold mb-3 border border-orange-200">
                Tirumala Walk Pickups
              </Badge>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Descending Cabs & Hill Return Transfers
              </h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                After walking up and completing your darshan, avoid the long public bus queues on the hilltop. Book a **G7 Travels descending taxi** to pick you up directly from your Tirumala cottage or Guest House and drop you back at Tirupati central railway station or airport.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/book-ride">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-xl font-bold shadow-lg shadow-orange-500/20 transition-all flex items-center gap-2">
                    <Car className="w-5 h-5" /> Book Return Hill Ride
                  </Button>
                </Link>
                <a href="tel:+919866143321">
                  <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50 text-slate-700 font-bold px-6 py-6 rounded-xl flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Call 24/7 Support
                  </Button>
                </a>
              </div>
            </div>

            {/* Cab Fares */}
            <div className="space-y-4">
              <h3 className="font-bold text-slate-800 text-sm tracking-wider uppercase mb-2">
                Footpath Drop & return Taxi rates
              </h3>
              <div className="grid gap-3.5">
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-orange-500/5 hover:border-orange-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">Tirupati to Alipiri Arch Drop</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Perfect for Alipiri walking trek starting point</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-semibold font-medium">Fixed Rate</span>
                    <div className="text-sm font-extrabold text-orange-600 mt-0.5">₹600</div>
                  </div>
                </div>
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-orange-500/5 hover:border-orange-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">Tirupati to Srivari Mettu Drop</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Srinivasa Mangapuram arch entry point</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-semibold font-medium">Fixed Rate</span>
                    <div className="text-sm font-extrabold text-orange-600 mt-0.5">₹900</div>
                  </div>
                </div>
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-orange-500/5 hover:border-orange-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">Tirumala to Tirupati Central Drop</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Return ride descending down after darshan completion</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-semibold font-medium">Fixed Rate</span>
                    <div className="text-sm font-extrabold text-orange-600 mt-0.5">₹1,800</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
