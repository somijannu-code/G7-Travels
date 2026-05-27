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
  Home,
  Building,
  Key
} from 'lucide-react'

export default function AccommodationGuidePage() {
  const [activeSection, setActiveSection] = useState<'tirumala' | 'tirupati' | 'cro'>('tirumala')

  const sectionDetails = {
    tirumala: {
      title: 'Tirumala Hilltop TTD Accommodations',
      badge: 'Hilltop Lodging',
      summary: 'サブシライズド accommodations managed directly by the Tirumala Tirupati Devasthanams (TTD) on the holy hill.',
      points: [
        'Online Booking: Advanced rooms (₹100, ₹500, ₹1000) must be booked exactly 3 months in advance via the official TTD website.',
        'Subsidy Rate: Highly economical rooms are clean, equipped with water geysers, beds, and standard private bathrooms.',
        'Allocation Point: On arrival, report to the specific Sub-Enquiry office mentioned on your accommodation receipt.',
        'Duration Constraint: Rooms are strictly allotted for a maximum of 24 hours only. Extension is not permitted due to high pilgrim demand.',
        'Security Deposit: A refundable deposit (₹500 to ₹1000) is collected during check-in and auto-refunded to your bank account after check-out.'
      ]
    },
    tirupati: {
      title: 'Tirupati Town Private Hotels & Stays',
      badge: 'Town Hotel Stays',
      summary: 'Tirupati town offers hundreds of private luxury, budget, and family-friendly hotels located close to major transit terminals.',
      points: [
        'Railway Station Area: Best for transit travelers. Features popular budget and mid-range hotels within walking distance.',
        'RTC Bus Stand Area: Features major premium 3-star and 4-star hotels, ideal for families seeking luxury and fine dining options.',
        'Alipiri Bypass Road: Excellent for self-driving travelers or those planning to climb the hills on foot via the Alipiri footpath.',
        'High Flexibility: Unlike hilltop stays, private hotels offer 24-hour check-ins, flexible stays, room service, and immediate booking availability.',
        'Cab Convenience: Book a G7 Travels AC cab to pick you up directly from your town hotel lobby and drive you up the ghat road in just 45 minutes.'
      ]
    },
    cro: {
      title: 'CRO Office Offline Room Allocation',
      badge: 'Offline Allotments',
      summary: 'The Central Reception Office (CRO) located near the Tirumala bus stand is the central point for offline room allotments.',
      points: [
        '24/7 Operation: Offline room allocation counters are active round the clock. Report directly on climbing to the hilltop.',
        'Mandatory Documents: You must present a physical Aadhaar card and a valid Darshan ticket copy to qualify for allotment.',
        'First-Come Basis: Rooms are allotted based on queue priority. Average waiting time varies from 1 to 3 hours during peak pilgrim seasons.',
        'Subsidy Rooms: Primarily distributes basic ₹50 and ₹100 standard non-AC accommodations.',
        'Warning: Do not fall prey to local agents or brokers promising offline guest house keys; TTD only allots rooms through secure biometric systems.'
      ]
    }
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-orange-400 transition-colors font-medium">Home</Link>
            <span>/</span>
            <span className="text-slate-200 font-semibold">Accommodation Guide</span>
          </div>

          <div className="max-w-3xl">
            <Badge className="bg-indigo-600 hover:bg-indigo-700 text-white mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              Tirumala Hilltop Stays & Tirupati Town Hotels
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-indigo-100 to-indigo-300 bg-clip-text text-transparent">
              Tirumala Accommodation & Room Booking Guide
            </h1>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Find the perfect place to rest. Master the TTD offline CRO office room allocation process, online advanced lodging rules, and book quick luggage-transfer cabs to your cottage door.
            </p>
          </div>
        </div>
      </section>

      {/* Accommodation Warning Alert */}
      <section className="container mx-auto max-w-6xl px-4 mt-8">
        <Alert className="border-indigo-500/20 bg-indigo-500/5 text-slate-800">
          <Info className="h-5 w-5 text-indigo-600 flex-shrink-0" />
          <AlertTitle className="text-indigo-950 font-bold text-sm">
            Luggage & Cottage Allotment Advisory
          </AlertTitle>
          <AlertDescription className="text-slate-700 text-xs md:text-sm mt-1">
            Hilltop cottages in Tirumala are highly spread out (over a 5 km radius) and finding your allotted guest house carrying heavy family bags can be exhausting. TTD does not allow local auto-rickshaws on the hill. We recommend booking a **G7 Travels cottage drop cab** to pick you up from your arrival point and safely deliver your family right at your cottage doorstep.
          </AlertDescription>
        </Alert>
      </section>

      {/* Interactive Tabs */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-2xl mx-auto mb-10 bg-slate-200/50 p-1.5 rounded-xl border border-slate-300/40">
          <button
            onClick={() => setActiveSection('tirumala')}
            className={`py-3 px-2 md:px-4 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-1 md:gap-1.5 ${
              activeSection === 'tirumala'
                ? 'bg-white text-indigo-700 shadow-md border-b-2 border-indigo-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Home className="w-4 h-4 text-indigo-600" /> Hilltop Stays
          </button>
          <button
            onClick={() => setActiveSection('tirupati')}
            className={`py-3 px-2 md:px-4 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-1 md:gap-1.5 ${
              activeSection === 'tirupati'
                ? 'bg-white text-indigo-700 shadow-md border-b-2 border-indigo-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Building className="w-4 h-4 text-indigo-600" /> Town Hotels
          </button>
          <button
            onClick={() => setActiveSection('cro')}
            className={`py-3 px-2 md:px-4 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-1 md:gap-1.5 ${
              activeSection === 'cro'
                ? 'bg-white text-indigo-700 shadow-md border-b-2 border-indigo-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Key className="w-4 h-4 text-indigo-600" /> CRO Offline
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
                  <FileText className="w-5 h-5 text-indigo-700" /> Essential Stay Guidelines:
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
                  Stay Parameters
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Tirumala Cottage Spread</div>
                      <div className="text-sm font-extrabold text-slate-900">5 Kilometer Radius (Hilltop)</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Subsidized Pricing</div>
                      <div className="text-sm font-extrabold text-slate-900">₹50 to ₹1,000 / day</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Allotment Limitation</div>
                      <div className="text-sm font-bold text-slate-800 leading-tight">Strictly 24 Hours Max</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <a 
                  href={`https://wa.me/919014878313?text=${encodeURIComponent(`Hi G7 Travels, I need to book a cottage transfer / hilltop hotel drop cab. Please share rates.`)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md">
                    Book Cottage Drop Cab <ArrowLeft className="w-4 h-4 rotate-180" />
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
                Hilltop Transit Fares
              </Badge>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Tirupati-Tirumala Hill climb & Cottage Drops
              </h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                Avoid walking in search of your guest house or climbing the ghat road in crowded public buses. Our air-conditioned private cabs pick you up directly from your hotel/station in Tirupati, climb up the beautiful ghat road, wait for you to collect your offline room keys, and safely drop you directly inside your allotted cottage.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/book-ride">
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 rounded-xl font-bold shadow-lg shadow-indigo-500/20 transition-all flex items-center gap-2">
                    <Car className="w-5 h-5" /> Book Hilltop Stay Cab
                  </Button>
                </Link>
                <a href="tel:+919866143321">
                  <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50 text-slate-700 font-bold px-6 py-6 rounded-xl flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Call 24/7 Support
                  </Button>
                </a>
              </div>
            </div>

            {/* Cab Fares Grid */}
            <div className="space-y-4">
              <h3 className="font-bold text-slate-800 text-sm tracking-wider uppercase mb-2">
                Tirupati to Tirumala Hill climbs & Cottage Drop Rates
              </h3>
              <div className="grid gap-3.5">
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-indigo-500/5 hover:border-indigo-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">Tirupati to Tirumala Cottage drop</h4>
                    <p className="text-slate-500 text-xs mt-0.5">AC Sedan (Dzire) | Includes full ghat climb & guest house delivery</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-semibold font-medium">Flat Rate</span>
                    <div className="text-sm font-extrabold text-indigo-600 mt-0.5">₹1,800</div>
                  </div>
                </div>
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-indigo-500/5 hover:border-indigo-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">SUV Hill climb & Cottage drop</h4>
                    <p className="text-slate-500 text-xs mt-0.5">AC Ertiga/Innova | Best for large families with heavy luggage</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-semibold font-medium">Flat Rate</span>
                    <div className="text-sm font-extrabold text-indigo-600 mt-0.5">₹2,800 / ₹3,800</div>
                  </div>
                </div>
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-indigo-500/5 hover:border-indigo-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">Local Hilltop Cottage to Cottage Transfer</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Sedan (Dzire) | Short transfer on the hilltop between cottage sectors</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-semibold font-medium">Flat Rate</span>
                    <div className="text-sm font-extrabold text-indigo-600 mt-0.5">₹800</div>
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
