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
  ShieldCheck,
  Coins
} from 'lucide-react'

export default function SrikalahastiGuidePage() {
  const [activeSection, setActiveSection] = useState<'pooja' | 'tickets' | 'dresscode'>('pooja')

  const sectionDetails = {
    pooja: {
      title: 'Rahu Ketu Sarpa Dosha Pooja',
      badge: 'Spiritual Significance',
      summary: 'The Sri Kalahasteeswara temple is globally renowned for performing the Rahu Ketu Sarpa Dosha Pooja to alleviate negative karmic effects.',
      points: [
        'Astrological Pariharam: This temple is named after three animals (Sri - Spider, Kala - Serpent, Hasti - Elephant) that attained salvation here.',
        'Vayu Lingam: Lord Shiva is worshipped here as Vayu Lingam (Wind Element), one of the sacred Panchabhoota Sthalams.',
        'Best Timing: The pooja is considered extremely powerful when performed during the exact daily hours of Rahukaal.',
        'Pooja Duration: The actual pooja inside the designated temple halls takes approximately 30 to 45 minutes.',
        'No Prior Booking: There is no need to book online in advance; tickets can be obtained at offline counters directly upon arriving.'
      ]
    },
    tickets: {
      title: 'Pooja Tickets & Inclusions',
      badge: 'Ticket Pricing',
      summary: 'Temple counters offer multiple ticket tiers based on the proximity to the inner sanctum and specific pooja halls.',
      points: [
        '₹500 Ticket: Standard pooja hall entry, includes basic pooja items (samagri) and copper silver serpent images.',
        '₹750 Ticket: Special pooja hall seating with slightly shorter queue times.',
        '₹1,500 Ticket: VIP pooja hall entry, closer proximity to the deities and speedier queue clearance.',
        '₹2,500 Ticket: Exclusive premium pooja hall entry, includes high-quality copper/brass pooja items and quick darshan.',
        'What\'s Included: Every ticket includes all necessary pooja materials (flowers, vermilion, sacred threads, metal serpents).'
      ]
    },
    dresscode: {
      title: 'Temple Dress Code & General Rules',
      badge: 'Attire Rules',
      summary: 'Srikalahasti Temple strictly enforces a traditional Indian attire policy for pilgrims performing the pooja.',
      points: [
        'Male Dress Code: Dhoti with a shirt, or standard kurta-pyjamas are highly recommended.',
        'Female Dress Code: Sarees, half-sarees, or salwar-kameez with a traditional dupatta (chunni).',
        'Strictly Forbidden: Western clothing like jeans, t-shirts, sleeveless tops, and shorts is not allowed for the pooja.',
        'Electronic Items: Mobile phones, smartwatches, and cameras are strictly banned inside the pooja halls. Lockers are available at the entrance.',
        'Post-Pooja Guideline: As per Vedic tradition, it is advised not to visit any other temples or friends\' homes directly after performing a Dosha Parihara pooja.'
      ]
    }
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-950 via-slate-900 to-red-950 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-orange-400 transition-colors font-medium">Home</Link>
            <span>/</span>
            <span className="text-slate-200 font-semibold">Srikalahasti Temple Guide</span>
          </div>

          <div className="max-w-3xl">
            <Badge className="bg-red-600 hover:bg-red-700 text-white mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              Panchabhoota Sthalam & Rahu-Ketu Parihara Kshetram
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-amber-100 to-red-300 bg-clip-text text-transparent">
              Srikalahasti Shiva Temple & Rahu Ketu Pooja Guide
            </h1>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Unlock the complete spiritual guide to visiting Srikalahasti. Master Rahukaal timings, pooja ticket rules, dress guidelines, and secure reliable roundtrip transfers from Tirupati.
            </p>
          </div>
        </div>
      </section>

      {/* Advisory Alert */}
      <section className="container mx-auto max-w-6xl px-4 mt-8">
        <Alert className="border-red-500/20 bg-red-500/5 text-slate-800">
          <Info className="h-5 w-5 text-red-600 flex-shrink-0" />
          <AlertTitle className="text-red-950 font-bold text-sm">
            Astrological Time Advisory
          </AlertTitle>
          <AlertDescription className="text-slate-700 text-xs md:text-sm mt-1">
            Pilgrims traveling specifically for Rahu Ketu pooja aim to perform it exactly during the **Rahukaal hour** of the day (varies daily). To ensure you reach the temple at the precise astrological window without delays, we recommend scheduling a **G7 Travels private cab**. Your driver will know the fastest routes and wait at Srikalahasti to bring you back to Tirupati after your darshan.
          </AlertDescription>
        </Alert>
      </section>

      {/* Interactive Tabs */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-2xl mx-auto mb-10 bg-slate-200/50 p-1.5 rounded-xl border border-slate-300/40">
          <button
            onClick={() => setActiveSection('pooja')}
            className={`py-3 px-2 md:px-4 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-1 md:gap-1.5 ${
              activeSection === 'pooja'
                ? 'bg-white text-red-700 shadow-md border-b-2 border-red-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Flame className="w-4 h-4 text-red-600" /> Pooja Info
          </button>
          <button
            onClick={() => setActiveSection('tickets')}
            className={`py-3 px-2 md:px-4 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-1 md:gap-1.5 ${
              activeSection === 'tickets'
                ? 'bg-white text-red-700 shadow-md border-b-2 border-red-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Coins className="w-4 h-4 text-red-600" /> Tickets
          </button>
          <button
            onClick={() => setActiveSection('dresscode')}
            className={`py-3 px-2 md:px-4 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-1 md:gap-1.5 ${
              activeSection === 'dresscode'
                ? 'bg-white text-red-700 shadow-md border-b-2 border-red-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-red-600" /> Temple Rules
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
                  <FileText className="w-5 h-5 text-red-700" /> Essential Details:
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
                    <MapPin className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Distance from Tirupati</div>
                      <div className="text-sm font-extrabold text-slate-900">38 Kilometers (One-way)</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Travel Time by Cab</div>
                      <div className="text-sm font-extrabold text-slate-900">45 to 55 Minutes</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Recommended Stay Time</div>
                      <div className="text-sm font-bold text-slate-800 leading-tight">2 to 3 Hours at temple</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <a 
                  href={`https://wa.me/919014878313?text=${encodeURIComponent(`Hi G7 Travels, I would like to book a roundtrip taxi to Srikalahasti Shiva Temple. Please share availability & rates.`)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md">
                    Book Srikalahasti Cab <ArrowLeft className="w-4 h-4 rotate-180" />
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
                Direct Roundtrip Transfers
              </Badge>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Tirupati to Srikalahasti Roundtrip Cab Fares
              </h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                Enjoy a peaceful, stress-free pilgrimage. Our roundtrip cab service includes reliable hotel/station pickup in Tirupati, comfortable AC drive to Srikalahasti, 3 hours of free driver waiting time while you perform your pooja and darshan, and drop-off back at your desired location in Tirupati.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/book-ride">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-xl font-bold shadow-lg shadow-red-500/20 transition-all flex items-center gap-2">
                    <Car className="w-5 h-5" /> Book Srikalahasti Cab
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
                Tirupati to Srikalahasti Roundtrip Rates (Inclusive of 3hr Waiting)
              </h3>
              <div className="grid gap-3.5">
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-red-500/5 hover:border-red-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">Swift Dzire (AC Sedan)</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Budget-friendly & comfortable (up to 4 seats)</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-semibold font-medium">Roundtrip Rate</span>
                    <div className="text-sm font-extrabold text-red-600 mt-0.5">₹1,800</div>
                  </div>
                </div>
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-red-500/5 hover:border-red-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">Maruti Ertiga (AC SUV)</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Perfect for medium sized families (up to 6 seats)</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-semibold font-medium">Roundtrip Rate</span>
                    <div className="text-sm font-extrabold text-red-600 mt-0.5">₹2,500</div>
                  </div>
                </div>
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-red-500/5 hover:border-red-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">Toyota Innova (AC SUV)</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Premium comfort & spacious seating (up to 7 seats)</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-semibold font-medium">Roundtrip Rate</span>
                    <div className="text-sm font-extrabold text-red-600 mt-0.5">₹3,500</div>
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
