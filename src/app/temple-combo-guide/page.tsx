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
  Map,
  Sparkles
} from 'lucide-react'

export default function TempleComboGuidePage() {
  const [activeSection, setActiveSection] = useState<'itinerary' | 'destinations' | 'permits'>('itinerary')

  const sectionDetails = {
    itinerary: {
      title: '1-Day Pilgrimage Itinerary Breakdown',
      badge: 'Itinerary Schedule',
      summary: 'A carefully curated 14-hour high-impact outstation tour designed to cover two historically significant temples in one comfortable drive.',
      points: [
        '06:00 AM - Departure: AC Cab pickup from your hotel or residence in Tirupati.',
        '07:30 AM - Kanipakam Arrival: Darshan at Swayambhu Varasiddhi Vinayaka Temple. (Usually takes 1 to 1.5 hours).',
        '09:30 AM - Drive to Vellore: A scenic 2-hour drive crossing the AP-TN state border via Chittoor highway.',
        '12:30 PM - Vellore Sripuram Golden Temple: Witness the architectural marvel covered in 1,500 kg of pure gold. Enjoy lunch and complete the star-shaped pathway walk.',
        '05:30 PM - Return Journey: Board your G7 Travels cab for the return drive back to Tirupati, arriving by 08:30 PM.'
      ]
    },
    destinations: {
      title: 'Sacred Destinations Explored',
      badge: 'Temple Highlights',
      summary: 'Understand the historical grandeur and spiritual importance of the temples on this tour.',
      points: [
        'Kanipakam Vinayaka Temple: Dedicated to a Swayambhu (self-manifested) Ganesha deity that originally emerged from a water well and continues to grow in size.',
        'Swayambhu Well: Water from the original well still flows and is distributed to pilgrims as holy teertham.',
        'Sripuram Golden Temple: Features a magnificent structure gilded with 1.5 tons of pure gold leaf, reflecting spiritual wellness.',
        'Lakshmi Narayani Temple: Surrounded by a star-shaped path (Star path) inscribed with holy spiritual quotes, offering a serene, meditative walk.',
        'Vellore Fort Temple: Optional quick stop to see the historic 16th-century Jalakandeswarar Shiva Temple inside Vellore Fort.'
      ]
    },
    permits: {
      title: 'State Border Permits & Inclusive Fares',
      badge: 'Transparent Cabs',
      summary: 'Traveling across state borders can involve unexpected paperwork and fees. G7 Travels guarantees absolute price clarity.',
      points: [
        'Multi-State Travel: The tour route starts in Andhra Pradesh (Tirupati/Kanipakam) and enters Tamil Nadu (Vellore).',
        'Tamil Nadu State Permit: Inter-state commercial vehicles must pay a mandatory state border transport entry tax.',
        'All-Inclusive Pricing: G7 Travels packages completely cover all state border permits, toll gate fees, and highway taxes.',
        'No Hidden Costs: The fare you book is exactly the fare you pay. No sudden parking surcharges or driver allowance demands.',
        'Experienced Drivers: Highly professional drivers who speak Telugu, Tamil, and English, ensuring smooth navigation through state border checks.'
      ]
    }
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-950 via-slate-900 to-orange-950 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-orange-400 transition-colors font-medium">Home</Link>
            <span>/</span>
            <span className="text-slate-200 font-semibold">Kanipakam & Vellore Guide</span>
          </div>

          <div className="max-w-3xl">
            <Badge className="bg-indigo-600 hover:bg-indigo-700 text-white mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              2-State Premium Outstation Tour
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-indigo-100 to-orange-300 bg-clip-text text-transparent">
              Kanipakam & Vellore Golden Temple Combo Tour
            </h1>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Experience the perfect single-day outstation road trip. Visit Kanipakam Varasiddhi Vinayaka and the magnificent 1.5-ton Sripuram Golden Temple in Vellore with transparent, all-inclusive cab fares.
            </p>
          </div>
        </div>
      </section>

      {/* Scenic Location Image Banner */}
      <section className="container mx-auto max-w-6xl px-4 mt-8">
        <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-white">
          <img 
            src="/vellore-golden-temple.png" 
            alt="Scenic Vellore Sripuram Lakshmi Narayani Golden Temple" 
            className="w-full h-[350px] md:h-[480px] object-cover hover:scale-[1.01] transition-transform duration-500"
          />
          <div className="p-4 bg-slate-900 text-slate-300 text-xs md:text-sm font-medium flex items-center gap-2">
            <Info className="w-4 h-4 text-orange-400" />
            <span>Actual photograph of the breathtaking Sripuram Golden Temple in Vellore, gilded with over 1.5 tons of pure gold leaf.</span>
          </div>
        </div>
      </section>

      {/* Border Advisory Alert */}
      <section className="container mx-auto max-w-6xl px-4 mt-8">
        <Alert className="border-indigo-500/20 bg-indigo-500/5 text-slate-800">
          <Info className="h-5 w-5 text-indigo-600 flex-shrink-0" />
          <AlertTitle className="text-indigo-950 font-bold text-sm">
            Inter-State Travel Peace-of-Mind
          </AlertTitle>
          <AlertDescription className="text-slate-700 text-xs md:text-sm mt-1">
            Entering Tamil Nadu requires state-level road permits for tourist cabs. Hiring local individual cabs can result in stressful delays at state border checkpoints due to tax disputes. G7 Travels guarantees that **all highway tolls and Tamil Nadu state tourist taxes** are pre-paid and fully bundled into your package price.
          </AlertDescription>
        </Alert>
      </section>

      {/* Interactive Tabs */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-2xl mx-auto mb-10 bg-slate-200/50 p-1.5 rounded-xl border border-slate-300/40">
          <button
            onClick={() => setActiveSection('itinerary')}
            className={`py-3 px-2 md:px-4 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-1 md:gap-1.5 ${
              activeSection === 'itinerary'
                ? 'bg-white text-indigo-700 shadow-md border-b-2 border-indigo-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Map className="w-4 h-4 text-indigo-600" /> Itinerary
          </button>
          <button
            onClick={() => setActiveSection('destinations')}
            className={`py-3 px-2 md:px-4 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-1 md:gap-1.5 ${
              activeSection === 'destinations'
                ? 'bg-white text-indigo-700 shadow-md border-b-2 border-indigo-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Sparkles className="w-4 h-4 text-indigo-600" /> Destinations
          </button>
          <button
            onClick={() => setActiveSection('permits')}
            className={`py-3 px-2 md:px-4 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-1 md:gap-1.5 ${
              activeSection === 'permits'
                ? 'bg-white text-indigo-700 shadow-md border-b-2 border-indigo-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Compass className="w-4 h-4 text-indigo-600" /> State Permits
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
                  Route Parameters
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Total Road Distance</div>
                      <div className="text-sm font-extrabold text-slate-900">280 Kilometers (Roundtrip)</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Total Tour Duration</div>
                      <div className="text-sm font-extrabold text-slate-900">12 to 14 Hours</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">State Border Crossing</div>
                      <div className="text-sm font-bold text-slate-800 leading-tight">Andhra Pradesh ➡️ Tamil Nadu</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <a 
                  href={`https://wa.me/919014878313?text=${encodeURIComponent(`Hi G7 Travels, I would like to book a 1-day outstation combo tour to Kanipakam & Vellore Golden Temple. Please share availability.`)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md">
                    Book Combo Tour Cab <ArrowLeft className="w-4 h-4 rotate-180" />
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
                Outstation Inter-State Fares
              </Badge>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                All-Inclusive Outstation Tour Pricing
              </h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                We believe in complete pricing transparency. Our outstation combo packages are 100% all-inclusive. The fare includes the comfortable AC vehicle of your choice, fuel cost, professional driver allowance, all national/state highway tolls, and the mandatory Tamil Nadu border permit tax.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/book-ride">
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 rounded-xl font-bold shadow-lg shadow-indigo-500/20 transition-all flex items-center gap-2">
                    <Car className="w-5 h-5" /> Book Combo Outstation Cab
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
                1-Day Tirupati-Kanipakam-Vellore Roundtrip Rates (Inclusive of Tolls & TN Permits)
              </h3>
              <div className="grid gap-3.5">
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-indigo-500/5 hover:border-indigo-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">Swift Dzire (AC Sedan)</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Compact comfort for small families (up to 4 seats)</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-semibold font-medium">All-Inclusive package</span>
                    <div className="text-sm font-extrabold text-indigo-600 mt-0.5">₹5,000</div>
                  </div>
                </div>
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-indigo-500/5 hover:border-indigo-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">Maruti Ertiga (AC SUV)</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Budget multi-seater SUV (up to 6 seats)</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-semibold font-medium">All-Inclusive package</span>
                    <div className="text-sm font-extrabold text-indigo-600 mt-0.5">₹5,800</div>
                  </div>
                </div>
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-indigo-500/5 hover:border-indigo-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">Toyota Innova (AC SUV)</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Premium touring luxury and heavy luggage capacity</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-semibold font-medium">All-Inclusive package</span>
                    <div className="text-sm font-extrabold text-indigo-600 mt-0.5">₹6,500</div>
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
