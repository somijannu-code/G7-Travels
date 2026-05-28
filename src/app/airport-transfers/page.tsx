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
  PlaneTakeoff
} from 'lucide-react'

export default function AirportTransfersPage() {
  const [activeSection, setActiveSection] = useState<'transfers' | 'rules' | 'flights'>('transfers')

  const sectionDetails = {
    transfers: {
      title: 'Seamless Renigunta Airport Transfers',
      badge: 'Airport Pickups & Drops',
      summary: 'G7 Travels offers fixed, premium, and on-time airport taxi transfers to any hotel in Tirupati or direct cottage drop-offs on Tirumala Hill.',
      points: [
        'Renigunta Airport (TIR) to Tirupati City: Fast direct transit taking about 30 to 45 minutes. Flat rate of ₹800 including standard airport terminal parking.',
        'Renigunta Airport (TIR) to Tirumala Hilltop: Direct climb up the scenic ghat road taking 1.5 to 2 hours. Flat rate of ₹1,800. Driver delivers you directly to your hilltop cottage doorstep.',
        'Flight Delay Shield: We track passenger flights in real-time. If your flight is delayed, our driver waits for up to 60 minutes with zero surcharge fees.',
        'Meet & Greet Service: Chauffeurs wait outside the arrival gates holding a name board for comfortable identification.'
      ]
    },
    rules: {
      title: 'Airport Parking & Alipiri Checkpost Rules',
      badge: 'Local Traffic Rules',
      summary: 'Understand the terminal parking regulations and the hilltop checkpost guidelines to plan your flight pick-ups safely.',
      points: [
        'Alipiri Security Gates: General private vehicles scaling the Tirumala hilltop are strictly locked at Alipiri between 12:00 AM and 03:00 AM daily. Choose late flight arrivals with this context.',
        'TTD Luggage Scanning: TTD security officers scan all guest luggage and bags at Alipiri toll check gate. Ensure no prohibited materials (alcohol, tobacco, plastics) are inside.',
        'Airport Parking Surcharges: G7 Travels outstation and airport fares strictly include airport terminal entry and commercial parking clearances.',
        'Chauffeur ID Verification: Drivers carry valid commercial licenses and TTD-verified vehicle decals for smooth hilltop gate crossings.'
      ]
    },
    flights: {
      title: 'TTD Pilgrims Flight Advisories & Tips',
      badge: 'Pilgrim Advisories',
      summary: 'Coordinate your flight schedules with your booked TTD darshan slots using these expert tips.',
      points: [
        'Transit Buffer: Always factor in at least a 2.5-hour buffer between landing at Renigunta and reporting at Vaikuntam Queue Complex (VQC) in Tirumala.',
        'Special Entry Darshan (SED): Do not forget to pre-book your ₹300 SED or Arjitha Seva tickets online in advance. Airport cabs do not guarantee darshan entry.',
        'Strict Vedic Dress Code: Ensure traditional clothing is packed in your hand baggage. Men must wear white dhotis or kurtas, women must wear traditional sarees or salwar-kameez.',
        'Midnight Arrivals: If landing on late evening flights, we highly recommend checking in at a Tirupati city hotel overnight and climbing up the next morning.'
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
            <span className="text-slate-200 font-semibold">Airport Transfers</span>
          </div>

          <div className="max-w-3xl">
            <Badge className="bg-indigo-600 hover:bg-indigo-700 text-white mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              On-Time Guaranteed Renigunta Airport Transfers
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-indigo-100 to-indigo-300 bg-clip-text text-transparent">
              Tirupati Renigunta Airport Taxi Bookings
            </h1>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Experience the gold standard in airport transfers. Book direct pick-ups and drops between Renigunta Airport (TIR) and Tirupati City or Tirumala Hilltop. Fixed rates, clean vehicles, and flight tracking.
            </p>
          </div>
        </div>
      </section>

      {/* Scenic Location Image Banner */}
      <section className="container mx-auto max-w-6xl px-4 mt-8">
        <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-white">
          <img 
            src="/renigunta-airport.png" 
            alt="Scenic Renigunta Airport in Tirupati with a G7 Travels AC sedan taxi waiting outside Arrivals" 
            className="w-full h-[350px] md:h-[480px] object-cover hover:scale-[1.01] transition-transform duration-500"
          />
          <div className="p-4 bg-slate-900 text-slate-300 text-xs md:text-sm font-medium flex items-center gap-2">
            <Info className="w-4 h-4 text-orange-400" />
            <span>Actual photograph of our premium white AC sedan parked cleanly in the pick-up zone outside the modern arrivals terminal at Renigunta Airport (TIR) in Tirupati.</span>
          </div>
        </div>
      </section>

      {/* Airport Transit Advisory Alert */}
      <section className="container mx-auto max-w-6xl px-4 mt-8">
        <Alert className="border-indigo-500/20 bg-indigo-500/5 text-slate-800">
          <Info className="h-5 w-5 text-indigo-600 flex-shrink-0" />
          <AlertTitle className="text-indigo-950 font-bold text-sm">
            Flight Arrival & Midnight Checkpost Advisory
          </AlertTitle>
          <AlertDescription className="text-slate-700 text-xs md:text-sm mt-1">
            Landing on late evening flights? The Alipiri checkpost blocks private passenger vehicles climbing up to Tirumala Hilltop between **12:00 AM and 03:00 AM**. To avoid being stuck at the checkpoint, G7 Travels suggests checking in at a comfortable hotel in Tirupati City for the night and scheduling your hilltop taxi climb the next morning.
          </AlertDescription>
        </Alert>
      </section>

      {/* Interactive Tabs */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-2xl mx-auto mb-10 bg-slate-200/50 p-1.5 rounded-xl border border-slate-300/40">
          <button
            onClick={() => setActiveSection('transfers')}
            className={`py-3 px-2 md:px-4 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-1 md:gap-1.5 ${
              activeSection === 'transfers'
                ? 'bg-white text-indigo-700 shadow-md border-b-2 border-indigo-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <PlaneTakeoff className="w-4 h-4 text-indigo-600" /> Transfer Rates
          </button>
          <button
            onClick={() => setActiveSection('rules')}
            className={`py-3 px-2 md:px-4 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-1 md:gap-1.5 ${
              activeSection === 'rules'
                ? 'bg-white text-indigo-700 shadow-md border-b-2 border-indigo-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Coins className="w-4 h-4 text-indigo-600" /> Parking & Tolls
          </button>
          <button
            onClick={() => setActiveSection('flights')}
            className={`py-3 px-2 md:px-4 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-1 md:gap-1.5 ${
              activeSection === 'flights'
                ? 'bg-white text-indigo-700 shadow-md border-b-2 border-indigo-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-indigo-600" /> Pilgrim Tips
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
                  <FileText className="w-5 h-5 text-indigo-700" /> Essential Details:
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
                    <MapPin className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">TIR Airport to City</div>
                      <div className="text-sm font-extrabold text-slate-900">15 Kilometers (35 Mins)</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Free Flight Delay Waiting</div>
                      <div className="text-sm font-extrabold text-slate-900">Up to 60 Minutes</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Airport Parking Charges</div>
                      <div className="text-sm font-bold text-slate-800 leading-tight">Fully Inclusive in Rate</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <a 
                  href={`https://wa.me/919014878313?text=${encodeURIComponent(`Hi G7 Travels, I need to book a taxi from Renigunta Airport to my hotel. Please share rates for AC Sedan/SUV.`)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md">
                    Book Airport Taxi <ArrowLeft className="w-4 h-4 rotate-180" />
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
                Direct Airport Transfers
              </Badge>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Renigunta Airport Pickups & Drops
              </h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                Skip the long taxi lines and stressful airport bargains. G7 Travels guarantees professional chauffeurs waiting in the arrival lounge with clean vehicles, pre-tracked arrival times, and transparent pricing.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/book-ride">
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 rounded-xl font-bold shadow-lg shadow-indigo-500/20 transition-all flex items-center gap-2">
                    <Car className="w-5 h-5" /> Book Airport Cab
                  </Button>
                </Link>
                <a href="tel:+919866143321">
                  <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50 text-slate-700 font-bold px-6 py-6 rounded-xl flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Call 24/7 Dispatch
                  </Button>
                </a>
              </div>
            </div>

            {/* Cab Fares Grid */}
            <div className="space-y-4">
              <h3 className="font-bold text-slate-800 text-sm tracking-wider uppercase mb-2">
                Flat Airport Pick-up & Drop Rates
              </h3>
              <div className="grid gap-3.5">
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-indigo-500/5 hover:border-indigo-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">Airport to Tirupati City (Dzire / Etios)</h4>
                    <p className="text-slate-500 text-xs mt-0.5">AC Sedan | Fully inclusive flat rate to any city hotel or bus stand</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-semibold font-medium">Flat Rate</span>
                    <div className="text-sm font-extrabold text-indigo-600 mt-0.5">₹800</div>
                  </div>
                </div>
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-indigo-500/5 hover:border-indigo-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">Airport to Tirumala Hilltop (Dzire / Etios)</h4>
                    <p className="text-slate-500 text-xs mt-0.5">AC Sedan | Direct cottage delivery climbing the beautiful ghat road</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-semibold font-medium">Flat Rate</span>
                    <div className="text-sm font-extrabold text-indigo-600 mt-0.5">₹1,800</div>
                  </div>
                </div>
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-indigo-500/5 hover:border-indigo-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">Airport to Tirumala SUV (Ertiga / Innova)</h4>
                    <p className="text-slate-500 text-xs mt-0.5">AC SUV | Best choice for large families arriving with heavy luggage</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-semibold font-medium">Flat Rate</span>
                    <div className="text-sm font-extrabold text-indigo-600 mt-0.5">₹2,800 / ₹3,800</div>
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
