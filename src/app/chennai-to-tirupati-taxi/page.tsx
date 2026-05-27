'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
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
  Compass,
  Coins,
  ShieldCheck,
  CheckCircle2,
  CalendarDays
} from 'lucide-react'

export default function ChennaiToTirupatiTaxiPage() {
  const [activeSection, setActiveSection] = useState<'route' | 'fares' | 'tips'>('route')

  const sectionDetails = {
    route: {
      title: 'Chennai to Tirupati Scenic Highway Routes',
      badge: 'Highway & Navigation',
      summary: 'Explore the two primary highway corridors between Chennai and Tirupati for a scenic, traffic-free ride.',
      points: [
        'Route 1 (Thiruvallur - Tiruttani): The most popular, well-paved 4-lane highway path (approx 140 km). Takes about 3.5 hours. Highly scenic and filled with family restaurants.',
        'Route 2 (Tada - Kalahasti bypass): Best for pilgrims flying into Chennai Airport (MAA). Directly connects Tada bypass to avoid Chennai city traffic. Perfect for visiting Srikalahasti Temple first.',
        'Airport Transfers: 24/7 direct pick-ups from Chennai International Airport arrival terminals. Drivers monitor your flight in real-time.',
        'Toll Plazas: Expect 2-3 toll points along the route. G7 Travels packages cover all highway toll fares so you do not pay anything extra.'
      ]
    },
    fares: {
      title: 'Transparent & Fixed Cab Fares',
      badge: 'Premium Cab Rates',
      summary: 'G7 Travels offers fully transparent, flat fares with zero hidden surcharges or extra driver batta.',
      points: [
        'AC Sedan (Swift Dzire / Toyota Etios): Perfect for couples or small families. Flat ₹4,500 one-way including toll, ₹8,000 for full roundtrip.',
        'AC SUV (Ertiga / Innova Crysta): Best for large families with bags. Ertiga flat ₹6,500 one-way, Innova Crysta ₹7,500 one-way. Roundtrips start at ₹12,000.',
        'AC Tempo Traveller (12/16 Seater): Ideal for extended family groups. Custom competitive outstation packages available.',
        'Toll & Tax Coverage: All stated rates are strictly inclusive of state permits, toll gates, parking charges, and driver allowances.'
      ]
    },
    tips: {
      title: 'Essential Guidelines for Pilgrim Arrival',
      badge: 'Pilgrim Advisories',
      summary: 'Ensure a hassle-free outstation transit to Tirupati by keeping these travel guidelines in mind.',
      points: [
        'Alipiri Toll Check: General vehicles climbing to Tirumala hilltop are blocked at Alipiri gate between 12:00 AM and 03:00 AM. Plan departure from Chennai accordingly.',
        'Darshan Tickets: Always secure your ₹300 Special Entry Darshan (SED) or Arjitha Seva tickets online in advance. Cabs do not guarantee darshan.',
        'Dress Code Guidelines: Ensure you carry traditional attire. Men must wear white dhotis or kurtas, women must wear traditional sarees or salwar-kameez.',
        'Electronic Ban: Mobile phones, tablets, smartwatches, and cameras are strictly banned inside temple queue complexes. Keep bags locked in the cab.'
      ]
    }
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-950 via-slate-900 to-red-950 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-orange-400 transition-colors font-medium">Home</Link>
            <span>/</span>
            <Link href="/outstation" className="hover:text-orange-400 transition-colors font-medium">Outstation</Link>
            <span>/</span>
            <span className="text-slate-200 font-semibold">Chennai to Tirupati</span>
          </div>

          <div className="max-w-3xl">
            <Badge className="bg-red-600 hover:bg-red-700 text-white mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              Premium Outstation Highway Taxi Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-amber-100 to-red-300 bg-clip-text text-transparent">
              Chennai to Tirupati Taxi Service
            </h1>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Plan the perfect highway drive from Chennai to Tirupati. Secure premium, reliable, 24/7 outstation cabs starting at flat ₹4,500. Professional drivers, zero hidden charges, and clean vehicles.
            </p>
          </div>
        </div>
      </section>

      {/* Scenic Location Image Banner */}
      <section className="container mx-auto max-w-6xl px-4 mt-8">
        <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-white">
          <img 
            src="/chennai-to-tirupati.png" 
            alt="Scenic Chennai to Tirupati national highway drive in an AC SUV cab" 
            className="w-full h-[350px] md:h-[480px] object-cover hover:scale-[1.01] transition-transform duration-500"
          />
          <div className="p-4 bg-slate-900 text-slate-300 text-xs md:text-sm font-medium flex items-center gap-2">
            <Info className="w-4 h-4 text-orange-400" />
            <span>Actual photograph of our premium white AC SUV cruising on the beautiful, clean Chennai-to-Tirupati national highway route surrounded by lush green palm groves.</span>
          </div>
        </div>
      </section>

      {/* Airport Transit Advisory Alert */}
      <section className="container mx-auto max-w-6xl px-4 mt-8">
        <Alert className="border-red-500/20 bg-red-500/5 text-slate-800">
          <Info className="h-5 w-5 text-red-600 flex-shrink-0" />
          <AlertTitle className="text-red-950 font-bold text-sm">
            Chennai International Airport (MAA) Transit Advisory
          </AlertTitle>
          <AlertDescription className="text-slate-700 text-xs md:text-sm mt-1">
            Attending an early morning darshan after landing at Chennai Airport? Finding an instant taxi at midnight with highway permits can be difficult and expensive. G7 Travels specializes in **direct 24/7 Chennai Airport to Tirupati transfers**. We track your flight details, secure interstate permits in advance, and drop you directly at the Alipiri check gates in absolute comfort.
          </AlertDescription>
        </Alert>
      </section>

      {/* Interactive Tabs */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-2xl mx-auto mb-10 bg-slate-200/50 p-1.5 rounded-xl border border-slate-300/40">
          <button
            onClick={() => setActiveSection('route')}
            className={`py-3 px-2 md:px-4 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-1 md:gap-1.5 ${
              activeSection === 'route'
                ? 'bg-white text-red-700 shadow-md border-b-2 border-red-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Compass className="w-4 h-4 text-red-600" /> Routes Info
          </button>
          <button
            onClick={() => setActiveSection('fares')}
            className={`py-3 px-2 md:px-4 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-1 md:gap-1.5 ${
              activeSection === 'fares'
                ? 'bg-white text-red-700 shadow-md border-b-2 border-red-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Coins className="w-4 h-4 text-red-600" /> Cab Fares
          </button>
          <button
            onClick={() => setActiveSection('tips')}
            className={`py-3 px-2 md:px-4 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-1 md:gap-1.5 ${
              activeSection === 'tips'
                ? 'bg-white text-red-700 shadow-md border-b-2 border-red-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-red-600" /> Travel Tips
          </button>
        </div>

        {/* Section Data Cards */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Highlights */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 px-2.5 py-1 rounded-full">
                  {sectionDetails[activeSection].badge}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-3">
                  {sectionDetails[activeSection].title}
                </h3>
                <p className="text-slate-500 text-sm mt-1">
                  {sectionDetails[activeSection].summary}
                </p>
              </div>

              <div className="border-t border-slate-100 pt-6">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-red-700" /> Important Route Guidelines:
                </h4>
                <ul className="space-y-3.5">
                  {sectionDetails[activeSection].points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                      <BookmarkCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Travel Parameters */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 flex flex-col justify-between">
              <div className="space-y-6">
                <h4 className="font-bold text-slate-900 text-sm tracking-wider uppercase">
                  Drive Parameters
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Total Distance</div>
                      <div className="text-sm font-extrabold text-slate-900">140 to 155 Kilometers</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Average Travel Time</div>
                      <div className="text-sm font-extrabold text-slate-900">3.5 to 4 Hours</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Interstate Permit</div>
                      <div className="text-sm font-bold text-slate-800 leading-tight">Andhra Permit Pre-secured</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <a 
                  href={`https://wa.me/919014878313?text=${encodeURIComponent(`Hi G7 Travels, I want to book a taxi from Chennai to Tirupati. Please share rates for AC Sedan/SUV.`)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md">
                    Book Chennai Cab <ArrowLeft className="w-4 h-4 rotate-180" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transit Pricing Table */}
      <section className="container mx-auto max-w-6xl px-4 py-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.06),transparent_50%)] pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-red-100 text-red-700 font-semibold mb-3 border border-red-200">
                Outstation Pricing Options
              </Badge>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Chennai to Tirupati Outstation Fares
              </h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                Choose the best vehicle to match your family group size. We guarantee clean cars, neat interiors, certified highway drivers, and flat pricing with no hidden surprises.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/book-ride">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-xl font-bold shadow-lg shadow-red-500/20 transition-all flex items-center gap-2">
                    <Car className="w-5 h-5" /> Book Highway Cab
                  </Button>
                </Link>
                <a href="tel:+919866143321">
                  <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50 text-slate-700 font-bold px-6 py-6 rounded-xl flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Call outstation desk
                  </Button>
                </a>
              </div>
            </div>

            {/* Cab Fares Grid */}
            <div className="space-y-4">
              <h3 className="font-bold text-slate-800 text-sm tracking-wider uppercase mb-2">
                Flat One-Way & Roundtrip Outstation Packages
              </h3>
              <div className="grid gap-3.5">
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-red-500/5 hover:border-red-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">AC Sedan (Swift Dzire/Etios)</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Seats 4 | Perfect for couples and small families. Standard luggage boot.</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-medium block">Starting flat</span>
                    <div className="text-sm font-extrabold text-red-600 mt-0.5">₹4,500 One-Way</div>
                  </div>
                </div>
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-red-500/5 hover:border-red-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">AC SUV (Suzuki Ertiga)</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Seats 6 | Premium family comfort with foldable rear seats for bags.</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-medium block">Starting flat</span>
                    <div className="text-sm font-extrabold text-red-600 mt-0.5">₹6,500 One-Way</div>
                  </div>
                </div>
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-red-500/5 hover:border-red-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">AC Luxury SUV (Innova Crysta)</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Seats 6 | Absolute premium ride, high legroom and superior shock absorbency.</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-medium block">Starting flat</span>
                    <div className="text-sm font-extrabold text-red-600 mt-0.5">₹7,500 One-Way</div>
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
