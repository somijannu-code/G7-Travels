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
  Flame,
  Award,
  Sparkles,
  CalendarDays
} from 'lucide-react'

export default function TempleSevasGuidePage() {
  const [activeSection, setActiveSection] = useState<'kalyan' | 'daily' | 'rules'>('kalyan')

  const sectionDetails = {
    kalyan: {
      title: 'Sri Srinivasa Kalyanotsavam (Celestial Marriage)',
      badge: 'Celestial Seva Sthalam',
      summary: 'Performing or witnessing the celestial wedding ceremony of Lord Venkateswara and His consorts is considered highly auspicious.',
      points: [
        'Seva Schedule: Held daily from 12:00 PM to 01:00 PM at the designated Kalyanotsavam Mandapam inside the temple complex.',
        'Ticket Pricing: Priced at ₹1,000 per ticket, which permits entry for one married couple (2 people).',
        'Booking Methodology: Tickets are released online exactly 3 months in advance. A highly limited quota is also allotted via recommendation letters offline.',
        'Prasadam Inclusions: Includes one big Laddu, one sacred upper cloth (Uttareeyam), and one blouse piece as divine blessings.',
        'Darshan Advantage: Ticket holders are routed through the special Vaikuntam Queue Complex immediately after the seva for close-up darshan.'
      ]
    },
    daily: {
      title: 'Daily & Weekly Arjitha Sevas',
      badge: 'Holy Rituals Timeline',
      summary: 'Participate in TTD\'s ancient daily and weekly devotional services performed by the temple priests.',
      points: [
        'Suprabatha Seva: The early morning waking ritual performed daily at 02:30 AM. Reporting time is 01:30 AM at VQC-1 (Requires midnight taxi drop).',
        'Sahasra Deepalankara Seva: Held daily in the evening at 05:30 PM. 1000 oil lamps are lit, and the deities are placed on a swing (Unjal) in the outer courtyard. Ticket costs ₹350.',
        'Tomala & Archana Sevas: Highly premium decoration and chanting sevas performed in the early hours. Tickets are strictly allotted via the Online Lucky Dip.',
        'Weekly Sevas: Features sacred weekly rituals like Visesha Pooja (Mondays), Ashtadala Pada Padmaradhana (Tuesdays), and Sahasra Kalasabhishekam (Wednesdays).'
      ]
    },
    rules: {
      title: 'Seva Rules, Reporting Gates & Attire',
      badge: 'Pilgrim Conduct',
      summary: 'TTD enforces strict Vedic codes of conduct for all pilgrims participating in Arjitha Sevas.',
      points: [
        'Male Dress Code: Must wear white or light-colored dhotis with a matching upper cloth (Uttareeyam). Kurtas with pyjamas are also permitted.',
        'Female Dress Code: Strictly sarees or traditional salwar-kameez with a matching dupatta (chunni). Western trousers/jeans are totally banned.',
        'Reporting Gate: Pilgrims must report exactly at the Vaikuntam Queue Complex-1 (VQC-1) at the reporting hour printed on their tickets.',
        'Strict Ban: Mobile phones, tablets, smartwatches, cameras, and luggage bags are strictly prohibited inside the VQC. Use hilltop lockers.',
        'Identity Match: Carry a copy of the exact photo ID card (Aadhaar/Passport) used during online registration. Biometrics are verified at VQC entry.'
      ]
    }
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-950 via-slate-900 to-amber-950 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-orange-400 transition-colors font-medium">Home</Link>
            <span>/</span>
            <span className="text-slate-200 font-semibold">Arjitha Sevas Guide</span>
          </div>

          <div className="max-w-3xl">
            <Badge className="bg-red-600 hover:bg-red-700 text-white mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              Tirumala Kalyanotsavam, Suprabhatam & Oil Lamp Rituals
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-amber-100 to-red-300 bg-clip-text text-transparent">
              TTD Arjitha Sevas & Kalyanotsavam Guide
            </h1>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Unlock the complete spiritual guide to TTD\'s sacred rituals. Master online Lucky Dip booking procedures, Kalyanotsavam schedules, strict dress codes, and secure mid-night seva cabs.
            </p>
          </div>
        </div>
      </section>

      {/* Seva Timing Alert */}
      <section className="container mx-auto max-w-6xl px-4 mt-8">
        <Alert className="border-red-500/20 bg-red-500/5 text-slate-800">
          <Info className="h-5 w-5 text-red-600 flex-shrink-0" />
          <AlertTitle className="text-red-950 font-bold text-sm">
            Early Morning & Midnight Transit Logistics
          </AlertTitle>
          <AlertDescription className="text-slate-700 text-xs md:text-sm mt-1">
            Pilgrims attending premium early morning sevas like **Suprabhatam (02:30 AM)** must report at Vaikuntam Queue Complex-1 by **01:30 AM**. Ghat roads are closed for general public vehicles during midnight hours. However, G7 Travels registered tourist taxis have **special permissions to operate ghat-climb pick-ups 24/7**. Book your early morning/midnight seva cab in advance to reach the gates on time.
          </AlertDescription>
        </Alert>
      </section>

      {/* Interactive Tabs */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-2xl mx-auto mb-10 bg-slate-200/50 p-1.5 rounded-xl border border-slate-300/40">
          <button
            onClick={() => setActiveSection('kalyan')}
            className={`py-3 px-2 md:px-4 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-1 md:gap-1.5 ${
              activeSection === 'kalyan'
                ? 'bg-white text-red-700 shadow-md border-b-2 border-red-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Award className="w-4 h-4 text-red-600" /> Kalyanotsavam
          </button>
          <button
            onClick={() => setActiveSection('daily')}
            className={`py-3 px-2 md:px-4 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-1 md:gap-1.5 ${
              activeSection === 'daily'
                ? 'bg-white text-red-700 shadow-md border-b-2 border-red-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <CalendarDays className="w-4 h-4 text-red-600" /> Daily Sevas
          </button>
          <button
            onClick={() => setActiveSection('rules')}
            className={`py-3 px-2 md:px-4 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-1 md:gap-1.5 ${
              activeSection === 'rules'
                ? 'bg-white text-red-700 shadow-md border-b-2 border-red-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Flame className="w-4 h-4 text-red-600" /> Seva Rules
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
                  <FileText className="w-5 h-5 text-red-700" /> Essential Seva details:
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
                  Logistics Details
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Reporting Complex</div>
                      <div className="text-sm font-extrabold text-slate-900">Vaikuntam Queue Complex 1 (VQC-1)</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Advanced Booking Required</div>
                      <div className="text-sm font-extrabold text-slate-900">3 Months in Advance (Online)</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Midnight Ghat Road Access</div>
                      <div className="text-sm font-bold text-slate-800 leading-tight">24/7 Access for G7 Cabs</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <a 
                  href={`https://wa.me/919014878313?text=${encodeURIComponent(`Hi G7 Travels, I need to book a taxi for early morning TTD Arjitha Seva (Suprabhatam/Kalyanotsavam) drop-off. Please share rates.`)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md">
                    Book Seva Drop Cab <ArrowLeft className="w-4 h-4 rotate-180" />
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
                Specialized Seva Transfers
              </Badge>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                24/7 Midnight Seva Ghat-Climb Cab Rates
              </h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                Attend your sacred seva on time with zero stress. We provide reliable AC sedan and SUV pickups from your hotel or railway station in Tirupati, climb up the ghat road during closed midnight hours (using registered tourist permits), drop you right at VQC-1 reporting gates, and wait to bring you back down after your darshan.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/book-ride">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-xl font-bold shadow-lg shadow-red-500/20 transition-all flex items-center gap-2">
                    <Car className="w-5 h-5" /> Book Seva Transit Cab
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
                TTD Seva Special Transit Fares (Tirupati to Tirumala Hill Ghat climb)
              </h3>
              <div className="grid gap-3.5">
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-red-500/5 hover:border-red-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">Midnight Ghat Seva Drop (00:00 AM - 04:00 AM)</h4>
                    <p className="text-slate-500 text-xs mt-0.5">AC Sedan (Dzire) | Special permit midnight ghat climb directly to VQC-1 gate</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-semibold font-medium">Flat Rate</span>
                    <div className="text-sm font-extrabold text-red-600 mt-0.5">₹2,000</div>
                  </div>
                </div>
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-red-500/5 hover:border-red-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">Daytime Seva Roundtrip (Kalyanotsavam Special)</h4>
                    <p className="text-slate-500 text-xs mt-0.5">AC Sedan (Dzire) | 8-hour hilltop roundtrip, waits during seva & darshan</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-semibold font-medium">Flat Rate</span>
                    <div className="text-sm font-extrabold text-red-600 mt-0.5">₹3,000</div>
                  </div>
                </div>
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-red-500/5 hover:border-red-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">SUV Seva Roundtrip (Ertiga/Innova)</h4>
                    <p className="text-slate-500 text-xs mt-0.5">AC Ertiga/Innova | Daytime / Midnight seva roundtrip package</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-semibold font-medium">Flat Rate</span>
                    <div className="text-sm font-extrabold text-red-600 mt-0.5">₹4,200 / ₹5,200</div>
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
