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
  CalendarDays,
  Coins,
  ShieldCheck
} from 'lucide-react'

export default function KanipakamGuidePage() {
  const [activeSection, setActiveSection] = useState<'darshan' | 'pooja' | 'rules'>('darshan')

  const sectionDetails = {
    darshan: {
      title: 'Varasiddhi Vinayaka Darshan Slots',
      badge: 'Darshan Details',
      summary: 'Lord Ganesha is worshipped here as Swayambhu (self-manifested) inside a sacred water well that never dries.',
      points: [
        'Darshan Schedule: Temple gates open daily from 04:00 AM to 09:30 PM for general pilgrims.',
        'Sarvadarshanam (Free): Wait times average 1 to 2 hours depending on weekend pilgrim influx.',
        'Special Entry Darshan (SED): Tickets are priced at ₹100 and ₹150 for immediate direct access corridors, reducing wait time to less than 20 minutes.',
        'Swayambhu Miracle: The idol sits inside a running well. The water from the well is distributed to devotees as highly sacred Vinayaka Prasadam.'
      ]
    },
    pooja: {
      title: 'Sacred Poojas & Seva Packages',
      badge: 'Ritual Packages',
      summary: 'Participate in beautiful traditional rituals conducted by authorized temple priests.',
      points: [
        'Ganapathi Homam: Performed daily in the early morning at 05:00 AM. Highly powerful for removing obstacles. Ticket priced at ₹500.',
        'Nitya Kalyanotsavam: Celestial marriage ritual of the deity celebrated daily at 11:00 AM. Ticket costs ₹1,000 for couples.',
        'Sahasra Namarchana: Grand chanting of Ganesha\'s 1000 holy names, held daily. Tickets are priced at ₹150 per pilgrim.',
        'Abhishekam: Sacred bathing seva of the Ganesha idol performed during auspicious days. Advanced booking online is highly recommended.'
      ]
    },
    rules: {
      title: 'Temple Decorum, Attire & Facilities',
      badge: 'Pilgrim Conduct',
      summary: 'Strict Vedic codes of conduct are enforced inside the temple to preserve spiritual sanctity.',
      points: [
        'Male Attire: White dhotis, panchas, or light-colored traditional Kurta-Pyjamas are strongly recommended.',
        'Female Attire: Sarees, half-sarees, or traditional salwar-kameez with dupatta (chunni). Western trousers/jeans are completely banned.',
        'Electronic Ban: Mobile phones, tablets, smartwatches, and cameras are strictly prohibited inside the inner complex. Deposit them at baggage counters.',
        'Baggage Storage: Lockers are available outside the main gate. Alternatively, keep them safely locked inside your G7 Travels cab.'
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
            <span className="text-slate-200 font-semibold">Kanipakam Temple Guide</span>
          </div>

          <div className="max-w-3xl">
            <Badge className="bg-red-600 hover:bg-red-700 text-white mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              Swayambhu Varasiddhi Vinayaka Temple
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-amber-100 to-red-300 bg-clip-text text-transparent">
              Kanipakam Temple Guide & Cabs
            </h1>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Unlock the complete spiritual guide to visiting the legendary Kanipakam Ganesha Temple. Master darshan schedules, Ganapathi Homam timings, strict dress codes, and secure comfortable roundtrip cabs from Tirupati.
            </p>
          </div>
        </div>
      </section>

      {/* Scenic Location Image Banner */}
      <section className="container mx-auto max-w-6xl px-4 mt-8">
        <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-white">
          <img 
            src="/kanipakam-temple.png" 
            alt="Scenic Kanipakam Vinayaka Temple with reflection in pushkarini tank" 
            className="w-full h-[350px] md:h-[480px] object-cover hover:scale-[1.01] transition-transform duration-500"
          />
          <div className="p-4 bg-slate-900 text-slate-300 text-xs md:text-sm font-medium flex items-center gap-2">
            <Info className="w-4 h-4 text-orange-400" />
            <span>Actual photograph of the ancient Kanipakam Varasiddhi Vinayaka Temple showing the beautiful Dravidian Gopuram reflecting in the sacred pushkarini tank.</span>
          </div>
        </div>
      </section>

      {/* Travel Advisory Alert */}
      <section className="container mx-auto max-w-6xl px-4 mt-8">
        <Alert className="border-red-500/20 bg-red-500/5 text-slate-800">
          <Info className="h-5 w-5 text-red-600 flex-shrink-0" />
          <AlertTitle className="text-red-950 font-bold text-sm">
            Tirupati to Kanipakam Transit Logistics
          </AlertTitle>
          <AlertDescription className="text-slate-700 text-xs md:text-sm mt-1">
            Kanipakam is located 72 km from Tirupati city center. Local bus transits are highly crowded and often lack direct drop-offs near the entrance corridors. To avoid multiple transfers and long walking stretches carrying family baggage, we highly recommend booking a **G7 Travels private roundtrip cab**. Chauffeurs comfortably wait in the parking bays and bring you back after your darshan.
          </AlertDescription>
        </Alert>
      </section>

      {/* Interactive Tabs */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-2xl mx-auto mb-10 bg-slate-200/50 p-1.5 rounded-xl border border-slate-300/40">
          <button
            onClick={() => setActiveSection('darshan')}
            className={`py-3 px-2 md:px-4 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-1 md:gap-1.5 ${
              activeSection === 'darshan'
                ? 'bg-white text-red-700 shadow-md border-b-2 border-red-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Sparkles className="w-4 h-4 text-red-600" /> Darshan Info
          </button>
          <button
            onClick={() => setActiveSection('pooja')}
            className={`py-3 px-2 md:px-4 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-1 md:gap-1.5 ${
              activeSection === 'pooja'
                ? 'bg-white text-red-700 shadow-md border-b-2 border-red-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Flame className="w-4 h-4 text-red-600" /> Seva Poojas
          </button>
          <button
            onClick={() => setActiveSection('rules')}
            className={`py-3 px-2 md:px-4 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-1 md:gap-1.5 ${
              activeSection === 'rules'
                ? 'bg-white text-red-700 shadow-md border-b-2 border-red-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-red-600" /> Decorum Rules
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
                  <FileText className="w-5 h-5 text-red-700" /> Important Guidelines:
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
                  Travel Details
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Tirupati to Kanipakam</div>
                      <div className="text-sm font-extrabold text-slate-900">72 Kilometers (1.5 Hours)</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Average Darshan Wait</div>
                      <div className="text-sm font-extrabold text-slate-900">20 Mins (SED) / 1.5 Hrs (Free)</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Coins className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Special Darshan Ticket</div>
                      <div className="text-sm font-bold text-slate-800 leading-tight">₹100 / ₹150 per person</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <a 
                  href={`https://wa.me/919014878313?text=${encodeURIComponent(`Hi G7 Travels, I need to book a roundtrip taxi from Tirupati to Kanipakam Temple. Please share rates.`)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md">
                    Book Kanipakam Cab <ArrowLeft className="w-4 h-4 rotate-180" />
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
                Roundtrip Cab Packages
              </Badge>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Tirupati to Kanipakam Roundtrip Rates
              </h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                Enjoy a comfortable, completely hassle-free private drive to Kanipakam. Our professional chauffeurs will pick you up from your hotel or railway station in Tirupati, drive you safely, wait for you to finish your prayers, and drop you back directly at your hotel doorstep.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/book-ride">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-xl font-bold shadow-lg shadow-red-500/20 transition-all flex items-center gap-2">
                    <Car className="w-5 h-5" /> Book Kanipakam Cab
                  </Button>
                </Link>
                <a href="tel:+919866143321">
                  <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50 text-slate-700 font-bold px-6 py-6 rounded-xl flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Call 24/7 Helpline
                  </Button>
                </a>
              </div>
            </div>

            {/* Cab Fares Grid */}
            <div className="space-y-4">
              <h3 className="font-bold text-slate-800 text-sm tracking-wider uppercase mb-2">
                All-Inclusive Roundtrip Cab Packages
              </h3>
              <div className="grid gap-3.5">
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-red-500/5 hover:border-red-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">AC Sedan (Swift Dzire/Etios)</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Seats 4 | Best choice for couples and small family groups</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-semibold font-medium">Flat Rate</span>
                    <div className="text-sm font-extrabold text-red-600 mt-0.5">₹2,200</div>
                  </div>
                </div>
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-red-500/5 hover:border-red-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">AC SUV (Suzuki Ertiga)</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Seats 6 | Premium seating comfort with foldable back rows for bags</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-semibold font-medium">Flat Rate</span>
                    <div className="text-sm font-extrabold text-red-600 mt-0.5">₹3,200</div>
                  </div>
                </div>
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-red-500/5 hover:border-red-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">AC Luxury SUV (Innova Crysta)</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Seats 6 | Absolute maximum highway luxury, legroom, and premium shock absorption</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-semibold font-medium">Flat Rate</span>
                    <div className="text-sm font-extrabold text-red-600 mt-0.5">₹4,200</div>
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
