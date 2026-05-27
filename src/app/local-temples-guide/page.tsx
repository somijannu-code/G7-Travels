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
  Sparkles,
  Heart,
  Droplet
} from 'lucide-react'

export default function LocalTemplesGuidePage() {
  const [activeSection, setActiveSection] = useState<'tiruchanur' | 'govindaraja' | 'kapila'>('tiruchanur')

  const sectionDetails = {
    tiruchanur: {
      title: 'Sri Padmavathi Ammavari Temple (Tiruchanur)',
      badge: 'Mandatory Consort Pilgrimage',
      summary: 'Located 5 km from Tirupati, this historical temple is dedicated to Goddess Padmavathi, the consort of Lord Venkateswara.',
      points: [
        'Divine Precedent: Traditionally, a pilgrimage to Tirumala is considered spiritually incomplete without paying respects to Goddess Padmavathi here.',
        'Pushkarini Water Tank: Features a sacred water tank where the Goddess is believed to have manifested on a golden lotus flower.',
        'Temple Timings: Open daily from 5:00 AM to 9:00 PM. Best times to visit are early mornings or post-afternoon.',
        'Darshan Tickets: Special Entry Quick Darshan tickets are available offline at the counter for ₹20 and ₹100.',
        'Transit Advisory: Standard auto-rickshaw rides can be dusty. G7 Travels local cabs provide air-conditioned, direct drop-offs right at the temple plaza.'
      ]
    },
    govindaraja: {
      title: 'Sri Govindaraja Swamy Temple',
      badge: 'Historic 12th Century Landmark',
      summary: 'An ancient temple situated in the heart of Tirupati town, featuring a massive, majestic 7-tiered entrance tower (Gopuram).',
      points: [
        'Deity Concept: Houses Lord Govindaraja Swamy in a peaceful, reclining yoga-sleep posture (Ananta Sayana), acting as the elder brother of Balaji.',
        'Consecrated by Ramanujacharya: Officially consecrated in the year 1130 AD by the great saint Ramanujacharya, making it highly historic.',
        'Temple Timings: Open daily from 5:00 AM to 9:30 PM. Centrally located within 500 meters of the central railway station.',
        'Darshan Entry: Quick Darshan ticket counter is active inside the courtyard, priced at ₹20 per pilgrim.',
        'Convenience: Perfect quick stop for pilgrims waiting for their evening outbound trains or flights.'
      ]
    },
    kapila: {
      title: 'Sri Kapileswara Swamy Temple (Kapila Theertham)',
      badge: 'Sacred Foothills Shiva Sthalam',
      summary: 'The only major temple dedicated to Lord Shiva in Tirupati town, situated directly at the foothills of the holy Tirumala range.',
      points: [
        'Natural Waterfall: Located at a picturesque spot where a natural mountain waterfall cascades directly down the hills into the sacred temple tank.',
        'Sage Kapila Legend: Named after Sage Kapila Maharishi, who is believed to have performed intense penance here before the Shiva Lingam.',
        'Temple Timings: Open daily from 5:00 AM to 8:00 PM. Highly peaceful, natural, and spiritual atmosphere.',
        'Attire Advisory: Attire rules are strictly enforced. Avoid shorts, sleeveless shirts, or western nightwear.',
        'Travel Tip: The waterfall volume is majestic post-monsoon (October to December). G7 Cabs can easily combine this with a foothills drop.'
      ]
    }
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-950 via-slate-900 to-yellow-950 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-orange-400 transition-colors font-medium">Home</Link>
            <span>/</span>
            <span className="text-slate-200 font-semibold">Local Temples Guide</span>
          </div>

          <div className="max-w-3xl">
            <Badge className="bg-amber-600 hover:bg-amber-700 text-white mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              Tirupati Town Sightseeing & Holy Transit
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-amber-100 to-yellow-300 bg-clip-text text-transparent">
              Tirupati Local Temples Tour Guide
            </h1>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Complete your spiritual journey. Plan visits to the sacred shrines of Tiruchanur Padmavathi, Govindaraja Swamy, and Kapila Theertham waterfall temple with transparent, local cab rates.
            </p>
          </div>
        </div>
      </section>

      {/* Scenic Location Image Banner */}
      <section className="container mx-auto max-w-6xl px-4 mt-8">
        <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-white">
          <img 
            src="/tiruchanur-temple.png" 
            alt="Scenic Padmavathi Ammavari Temple at Tiruchanur" 
            className="w-full h-[350px] md:h-[480px] object-cover hover:scale-[1.01] transition-transform duration-500"
          />
          <div className="p-4 bg-slate-900 text-slate-300 text-xs md:text-sm font-medium flex items-center gap-2">
            <Info className="w-4 h-4 text-orange-400" />
            <span>Actual photograph of the sacred Goddess Padmavathi Ammavari Temple at Tiruchanur reflecting inside the holy Pushkarini tank.</span>
          </div>
        </div>
      </section>

      {/* Pilgrimage Advisory Alert */}
      <section className="container mx-auto max-w-6xl px-4 mt-8">
        <Alert className="border-amber-500/20 bg-amber-500/5 text-slate-800">
          <Info className="h-5 w-5 text-amber-600 flex-shrink-0" />
          <AlertTitle className="text-amber-950 font-bold text-sm">
            Pilgrimage Completion Guideline
          </AlertTitle>
          <AlertDescription className="text-slate-700 text-xs md:text-sm mt-1">
            Vedic traditions recommend paying respects to Goddess Padmavathi at Tiruchanur to complete your Tirupati pilgrimage. Booking a **G7 Travels half-day local cab package** is the most stress-free way to visit all three local town temples in one comfortable go, avoiding negotiations with multiple local auto drivers.
          </AlertDescription>
        </Alert>
      </section>

      {/* Interactive Tabs */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-2xl mx-auto mb-10 bg-slate-200/50 p-1.5 rounded-xl border border-slate-300/40">
          <button
            onClick={() => setActiveSection('tiruchanur')}
            className={`py-3 px-2 md:px-4 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-1 md:gap-1.5 ${
              activeSection === 'tiruchanur'
                ? 'bg-white text-amber-700 shadow-md border-b-2 border-amber-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Heart className="w-4 h-4 text-amber-600" /> Tiruchanur
          </button>
          <button
            onClick={() => setActiveSection('govindaraja')}
            className={`py-3 px-2 md:px-4 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-1 md:gap-1.5 ${
              activeSection === 'govindaraja'
                ? 'bg-white text-amber-700 shadow-md border-b-2 border-amber-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-600" /> Govindaraja
          </button>
          <button
            onClick={() => setActiveSection('kapila')}
            className={`py-3 px-2 md:px-4 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-1 md:gap-1.5 ${
              activeSection === 'kapila'
                ? 'bg-white text-amber-700 shadow-md border-b-2 border-amber-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Droplet className="w-4 h-4 text-amber-600" /> Kapila Falls
          </button>
        </div>

        {/* Section Data Cards */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Highlights */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full">
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
                  <FileText className="w-5 h-5 text-amber-700" /> Key Visitor Facts:
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
                  Sightseeing Details
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Location Coverage</div>
                      <div className="text-sm font-extrabold text-slate-900">Within Tirupati Municipal Limits</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Best Time to Visit</div>
                      <div className="text-sm font-extrabold text-slate-900">07:00 AM to 11:00 AM</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Minimum Custom Time</div>
                      <div className="text-sm font-bold text-slate-800 leading-tight">4 Hours for standard tour</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <a 
                  href={`https://wa.me/919014878313?text=${encodeURIComponent(`Hi G7 Travels, I would like to book a local temples half-day cab package in Tirupati. Please verify rates.`)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md">
                    Book Local Temple Cab <ArrowLeft className="w-4 h-4 rotate-180" />
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
          <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.06),transparent_50%)] pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-amber-100 text-amber-700 font-semibold mb-3 border border-amber-200">
                Local Town Packages
              </Badge>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Flexible Half-Day & Full-Day Cab Fares
              </h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                Explore local shrines at your own relaxed pace. Our dedicated town tour cabs pick you up directly from your hotel or railway station, drive you comfortably to Tiruchanur, Govindaraja Swamy, Kapila Theertham, and return you safely. Perfect for families, senior citizens, and large groups.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/book-ride">
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 rounded-xl font-bold shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2">
                    <Car className="w-5 h-5" /> Book Local Sightseeing Cab
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
                Tirupati Local Town Tour Rates (Inclusive of Fuel & Waiting)
              </h3>
              <div className="grid gap-3.5">
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-amber-500/5 hover:border-amber-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">Half-Day Package (4hrs / 40km)</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Sedan (Dzire) | Covers Tiruchanur & 2 other temples</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-semibold font-medium">Flat Rate</span>
                    <div className="text-sm font-extrabold text-amber-600 mt-0.5">₹1,500</div>
                  </div>
                </div>
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-amber-500/5 hover:border-amber-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">Full-Day Package (8hrs / 80km)</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Sedan (Dzire) | All local temples & shopping drops</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-semibold font-medium">Flat Rate</span>
                    <div className="text-sm font-extrabold text-amber-600 mt-0.5">₹2,200</div>
                  </div>
                </div>
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-amber-500/5 hover:border-amber-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">SUV Full-Day (Ertiga/Innova)</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Spacious seating for groups of 6 to 7 people</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-semibold font-medium">Flat Rate</span>
                    <div className="text-sm font-extrabold text-amber-600 mt-0.5">₹3,000 / ₹4,000</div>
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
