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

export default function BangaloreToTirupatiTaxiPage() {
  const [activeSection, setActiveSection] = useState<'route' | 'fares' | 'tips'>('route')

  const sectionDetails = {
    route: {
      title: 'Bangalore to Tirupati Scenic Highway Routes',
      badge: 'Highway & Navigation',
      summary: 'Explore the primary highway routes connecting Bangalore to Tirupati for a smooth outstation trip.',
      points: [
        'Route 1 (via Mulbagal - Chittoor): The fastest, most popular 4-lane highway route (approx 250 km) via NH 75. Driving time is 5 to 5.5 hours. Excellent highway food plazas along the way.',
        'Route 2 (via Hosur - Krishnagiri): Best if starting from South/Electronic City in Bangalore. Follows scenic border regions. Perfect if you plan to visit Vellore Golden Temple on the way.',
        'Airport Transfers: 24/7 direct outstation pick-ups from Kempegowda International Airport (BLR) arrival bays, completely avoiding city peak-hour traffic blocks.',
        'Tolls & Border Permitting: Expect 3-4 tolls. Interstate permits (Karnataka to Andhra Pradesh) are fully pre-secured and cleared by G7 Travels.'
      ]
    },
    fares: {
      title: 'Transparent Flat Outstation Rates',
      badge: 'Premium Cab Rates',
      summary: 'G7 Travels offers fixed outstation pricing packages from Bangalore with absolutely no hidden charges.',
      points: [
        'AC Sedan (Swift Dzire / Toyota Etios): Ideal for small families. Flat one-way package ₹8,000 including highway tolls. Roundtrips start at ₹15,000.',
        'AC SUV (Ertiga / Innova Crysta): Best for comfort and extra bags. Ertiga flat one-way ₹11,000, Innova Crysta flat one-way ₹13,000. Roundtrip packages start at ₹20,000.',
        'AC Tempo Traveller (12/16 Seater): Ideal for larger pilgrim groups traveling together. Customized quotes are calculated instantly.',
        'All-Inclusive Pricing: Fares strictly cover border entry tax, state tolls, highway charges, fuel, and professional driver allowances.'
      ]
    },
    tips: {
      title: 'Essential Guidelines for Pilgrim Arrival',
      badge: 'Pilgrim Advisories',
      summary: 'Ensure a smooth pilgrimage from Bangalore by keeping these general travel tips in mind.',
      points: [
        'Alipiri Security Gate: Note that the ghat road climbing to Tirumala hilltop closes between 12:00 AM and 03:00 AM daily. Plan your Bangalore departure time accordingly.',
        'TTD Darshan Tickets: Cabs do not guarantee darshan. Always book your ₹300 Special Entry Darshan (SED) or Lucky Dip tickets on TTD portal in advance.',
        'Dress Code Guidelines: Strict traditional dress code is enforced inside temple gates. Pack dhotis/kurtas for men, and traditional sarees/salwar-kameez for women.',
        'Mobile Restriction: Mobile phones, tablets, smartwatches, and cameras are completely banned inside the Vaikuntam Queue complex. Store them securely in your cab.'
      ]
    }
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-indigo-400 transition-colors font-medium">Home</Link>
            <span>/</span>
            <Link href="/outstation" className="hover:text-indigo-400 transition-colors font-medium">Outstation</Link>
            <span>/</span>
            <span className="text-slate-200 font-semibold">Bangalore to Tirupati</span>
          </div>

          <div className="max-w-3xl">
            <Badge className="bg-indigo-600 hover:bg-indigo-700 text-white mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              Premium Outstation Highway Taxi Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-indigo-100 to-indigo-300 bg-clip-text text-transparent">
              Bangalore to Tirupati Taxi Service
            </h1>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Book a reliable outstation cab from Bangalore to Tirupati. Enjoy flat rates starting at flat ₹8,000. Professional drivers, well-maintained sedans & SUVs, and complete border permit management.
            </p>
          </div>
        </div>
      </section>

      {/* Scenic Location Image Banner */}
      <section className="container mx-auto max-w-6xl px-4 mt-8">
        <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-white">
          <img 
            src="/bangalore-to-tirupati.png" 
            alt="Scenic Bangalore to Tirupati national highway drive in an AC Sedan cab" 
            className="w-full h-[350px] md:h-[480px] object-cover hover:scale-[1.01] transition-transform duration-500"
          />
          <div className="p-4 bg-slate-900 text-slate-300 text-xs md:text-sm font-medium flex items-center gap-2">
            <Info className="w-4 h-4 text-orange-400" />
            <span>Actual photograph of our premium AC Sedan cruising on the winding scenic highway from Bangalore to Tirupati, surrounded by beautiful rocky hills.</span>
          </div>
        </div>
      </section>

      {/* Border Cross Travel Advisory Alert */}
      <section className="container mx-auto max-w-6xl px-4 mt-8">
        <Alert className="border-indigo-500/20 bg-indigo-500/5 text-slate-800">
          <Info className="h-5 w-5 text-indigo-600 flex-shrink-0" />
          <AlertTitle className="text-indigo-950 font-bold text-sm">
            Interstate Toll & Permit Advisory
          </AlertTitle>
          <AlertDescription className="text-slate-700 text-xs md:text-sm mt-1">
            Traveling across state boundaries from Karnataka to Andhra Pradesh requires clearing regional border tax and purchasing transport permits. Self-drive rentals often incur long queues or heavy penalties at border checkpoints. G7 Travels outstation taxi packages are **fully inclusive of all interstate taxes, border permits, and highway tolls**, allowing your family a completely seamless crossing.
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
                ? 'bg-white text-indigo-700 shadow-md border-b-2 border-indigo-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Compass className="w-4 h-4 text-indigo-600" /> Routes Info
          </button>
          <button
            onClick={() => setActiveSection('fares')}
            className={`py-3 px-2 md:px-4 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-1 md:gap-1.5 ${
              activeSection === 'fares'
                ? 'bg-white text-indigo-700 shadow-md border-b-2 border-indigo-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Coins className="w-4 h-4 text-indigo-600" /> Cab Fares
          </button>
          <button
            onClick={() => setActiveSection('tips')}
            className={`py-3 px-2 md:px-4 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-1 md:gap-1.5 ${
              activeSection === 'tips'
                ? 'bg-white text-indigo-700 shadow-md border-b-2 border-indigo-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-indigo-600" /> Travel Tips
          </button>
        </div>

        {/* Section Data Cards */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Highlights */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full">
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
                  <FileText className="w-5 h-5 text-indigo-700" /> Important Route Guidelines:
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
                    <MapPin className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Total Distance</div>
                      <div className="text-sm font-extrabold text-slate-900">250 to 270 Kilometers</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Average Travel Time</div>
                      <div className="text-sm font-extrabold text-slate-900">5 to 6 Hours</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Interstate Permit</div>
                      <div className="text-sm font-bold text-slate-800 leading-tight">Andhra Permit Pre-secured</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <a 
                  href={`https://wa.me/919014878313?text=${encodeURIComponent(`Hi G7 Travels, I want to book a taxi from Bangalore to Tirupati. Please share rates for AC Sedan/SUV.`)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md">
                    Book Bangalore Cab <ArrowLeft className="w-4 h-4 rotate-180" />
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
          <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.06),transparent_50%)] pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-indigo-100 text-indigo-700 font-semibold mb-3 border border-indigo-200">
                Outstation Pricing Options
              </Badge>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Bangalore to Tirupati Outstation Fares
              </h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                Choose the best vehicle to match your family group size. We guarantee clean cars, neat interiors, certified highway drivers, and flat pricing with no hidden surprises.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/book-ride">
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 rounded-xl font-bold shadow-lg shadow-indigo-500/20 transition-all flex items-center gap-2">
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
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-indigo-500/5 hover:bg-indigo-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">AC Sedan (Swift Dzire/Etios)</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Seats 4 | Perfect for couples and small families. Standard luggage boot.</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-medium block">Starting flat</span>
                    <div className="text-sm font-extrabold text-indigo-600 mt-0.5">₹8,000 One-Way</div>
                  </div>
                </div>
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-indigo-500/5 hover:border-indigo-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">AC SUV (Suzuki Ertiga)</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Seats 6 | Premium family comfort with foldable rear seats for bags.</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-medium block">Starting flat</span>
                    <div className="text-sm font-extrabold text-indigo-600 mt-0.5">₹11,000 One-Way</div>
                  </div>
                </div>
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-indigo-500/5 hover:border-indigo-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">AC Luxury SUV (Innova Crysta)</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Seats 6 | Absolute premium ride, high legroom and superior shock absorbency.</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-medium block">Starting flat</span>
                    <div className="text-sm font-extrabold text-indigo-600 mt-0.5">₹13,000 One-Way</div>
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
