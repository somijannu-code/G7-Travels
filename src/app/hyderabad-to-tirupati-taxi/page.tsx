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
  CheckCircle2
} from 'lucide-react'

export default function HyderabadToTirupatiTaxiPage() {
  const [activeSection, setActiveSection] = useState<'route' | 'fares' | 'tips'>('route')

  const sectionDetails = {
    route: {
      title: 'Hyderabad to Tirupati Highway Corridors',
      badge: 'Highway & Navigation',
      summary: 'Choose the best highway routes between Hyderabad and Tirupati for a smooth and scenic long-distance outstation drive.',
      points: [
        'Route 1 (via Kurnool - Nandyal - Kadapa): The primary, standard outstation path (approx 560 km) via NH 44 and NH 40. Drive time is 9 to 10 hours. Beautifully paved 4-lane roads with scenic forest climbs and plenty of safe family highway food courts.',
        'Route 2 (via Nagarjuna Sagar - Markapur - Nellore): Best if you wish to explore scenic landmarks like Nagarjuna Sagar Dam, Srisailam forest areas, and other local heritage landmarks along the way.',
        'Custom Stopovers: Add spiritual stopovers like Mahanandi, Ahobilam, Yaganti, or Kadapa Devuni Kadapa on the way to Tirupati. Your driver will comfortably wait.',
        'Permit Operations: Crossing between Telangana and Andhra Pradesh is entirely managed by G7 Travels. All state taxes and highway tolls are fully inclusive.'
      ]
    },
    fares: {
      title: 'Transparent Long-Distance Outstation Rates',
      badge: 'Premium Cab Rates',
      summary: 'G7 Travels offers fixed, competitive, and transparent outstation packages from Hyderabad with no hidden costs.',
      points: [
        'AC Sedan (Swift Dzire / Toyota Etios): Perfect for couples or small families. Flat one-way outstation price of ₹12,000 including all tolls and tax permits. Roundtrips start at ₹22,000.',
        'AC SUV (Ertiga / Innova Crysta): Highly recommended for maximum legroom and extra luggage space. Ertiga flat one-way ₹16,000, Innova Crysta flat one-way ₹19,000. Roundtrips start at ₹30,000.',
        'AC Tempo Traveller (12/16 Seater): Ideal for larger families or senior pilgrim groups. Quotes are fully customized and provided instantly.',
        'All-Inclusive Coverage: Our fares cover interstate permit fees, NHAI toll gates, fuel, parking charges, and professional driver allowances.'
      ]
    },
    tips: {
      title: 'Essential Outstation Travel Guidelines',
      badge: 'Pilgrim Advisories',
      summary: 'Keep these rules in mind to ensure a highly comfortable long-distance road trip from Hyderabad to Tirupati.',
      points: [
        'Alipiri Hilltop Gate: Note that TTD locks the Alipiri check post gates between 12:00 AM and 03:00 AM daily for passenger safety. Coordinate your Hyderabad departure time accordingly.',
        'TTD Darshan Tickets: Cabs do not guarantee darshan slots. Please ensure you have pre-booked your ₹300 Special Entry Darshan (SED) or offline slot tickets.',
        'Strict Traditional Attire: Strict traditional dress code is enforced inside the temple compound. Men must wear white dhotis or kurtas, women must wear traditional sarees or salwar-kameez.',
        'Electronic Equipment Ban: Mobile phones, tablets, smartwatches, and cameras are completely banned inside the queue complex. Leave them safely locked in the vehicle.'
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
            <span className="text-slate-200 font-semibold">Hyderabad to Tirupati</span>
          </div>

          <div className="max-w-3xl">
            <Badge className="bg-red-600 hover:bg-red-700 text-white mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              Premium Outstation Highway Taxi Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-amber-100 to-red-300 bg-clip-text text-transparent">
              Hyderabad to Tirupati Taxi Service
            </h1>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Book a premium, safe, and comfortable outstation cab from Hyderabad to Tirupati. Flat-rate pricing starting at ₹12,000. Professional highway drivers, Interstate permit management, and zero hidden surcharges.
            </p>
          </div>
        </div>
      </section>

      {/* Scenic Location Image Banner */}
      <section className="container mx-auto max-w-6xl px-4 mt-8">
        <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-white">
          <img 
            src="/hyderabad-to-tirupati.png" 
            alt="Scenic Hyderabad to Tirupati national highway drive in an AC SUV cab" 
            className="w-full h-[350px] md:h-[480px] object-cover hover:scale-[1.01] transition-transform duration-500"
          />
          <div className="p-4 bg-slate-900 text-slate-300 text-xs md:text-sm font-medium flex items-center gap-2">
            <Info className="w-4 h-4 text-orange-400" />
            <span>Actual photograph of our premium white AC SUV cruising smoothly on the clean, wide 4-lane highway route from Hyderabad to Tirupati.</span>
          </div>
        </div>
      </section>

      {/* Outstation Travel Advisory Alert */}
      <section className="container mx-auto max-w-6xl px-4 mt-8">
        <Alert className="border-red-500/20 bg-red-500/5 text-slate-800">
          <Info className="h-5 w-5 text-red-600 flex-shrink-0" />
          <AlertTitle className="text-red-950 font-bold text-sm">
            Long-Distance Chauffeur Drive Advisory
          </AlertTitle>
          <AlertDescription className="text-slate-700 text-xs md:text-sm mt-1">
            Driving continuously for 560 km can be extremely fatiguing and risky for self-drive travelers, especially when navigating hill roads and security checkposts upon arrival. G7 Travels provides **highly experienced national highway chauffeurs** who are expert hill navigators. Enjoy the beautiful drive while our professional drivers manage toll lines, regional permit clearances, and drop you safely at your guest house door.
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
                      <div className="text-sm font-extrabold text-slate-900">550 to 570 Kilometers</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Average Travel Time</div>
                      <div className="text-sm font-extrabold text-slate-900">9 to 10 Hours</div>
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
                  href={`https://wa.me/919014878313?text=${encodeURIComponent(`Hi G7 Travels, I want to book a taxi from Hyderabad to Tirupati. Please share rates for AC Sedan/SUV.`)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md">
                    Book Hyderabad Cab <ArrowLeft className="w-4 h-4 rotate-180" />
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
                Hyderabad to Tirupati Outstation Fares
              </h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                Choose the perfect outstation vehicle option for your family group. We guarantee clean cars, fresh interiors, highly experienced long-route drivers, and competitive flat fares.
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
                    <p className="text-slate-500 text-xs mt-0.5">Seats 4 | Perfect for couples and small families. standard luggage boot.</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-medium block">Starting flat</span>
                    <div className="text-sm font-extrabold text-red-600 mt-0.5">₹12,000 One-Way</div>
                  </div>
                </div>
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-red-500/5 hover:border-red-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">AC SUV (Suzuki Ertiga)</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Seats 6 | Comfortable seating, spacious legroom for children and elderly.</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-medium block">Starting flat</span>
                    <div className="text-sm font-extrabold text-red-600 mt-0.5">₹16,000 One-Way</div>
                  </div>
                </div>
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-red-500/5 hover:border-red-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">AC Luxury SUV (Innova Crysta)</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Seats 6 | Premium ride quality, superior safety, and large luggage capacity.</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-medium block">Starting flat</span>
                    <div className="text-sm font-extrabold text-red-600 mt-0.5">₹19,000 One-Way</div>
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
