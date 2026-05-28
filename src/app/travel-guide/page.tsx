'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Hotel, 
  Car, 
  Phone, 
  MapPin, 
  Clock, 
  Calendar, 
  AlertCircle,
  HelpCircle,
  FileText,
  BookmarkCheck,
  Compass,
  Info
} from 'lucide-react'

export default function TirupatiTravelGuidePage() {
  const stayZones = [
    {
      name: 'Zone 1: Srinivasam & RTC Bus Stand Area',
      suitability: 'Best for Budget & Mid-Range Travelers',
      desc: 'Highly busy, central tourism hub. Home to the Srinivasam Complex (TTD guest lodging) and dozens of family-friendly budget, 2-star, and 3-star business hotels.',
      advantages: [
        'Instant boarding for Tirumala ghat road buses',
        'Abundant restaurant choices (South Indian & Multi-cuisine)',
        'Extremely active shopping corridors'
      ]
    },
    {
      name: 'Zone 2: Railway Station & Vishnu Nivasam Area',
      suitability: 'Best for Train Passengers & Short Stays',
      desc: 'Located in the core heart of Tirupati town. Features Vishnu Nivasam (TTD mega lodging) directly opposite the platform exit. Best for quick overnight fresh-up stays.',
      advantages: [
        'Zero transit luggage hassle from platforms',
        '24/7 access to local municipal transport',
        'Affordable dormitories and budget lodge options'
      ]
    },
    {
      name: 'Zone 3: Alipiri Bypass & Karakambadi Roads',
      suitability: 'Best for Premium, Luxury & Peace Seekers',
      desc: 'Located on the outer perimeter scenic bypass road. Features upscale 3-star, 4-star, and 5-star international hotel chains (Taj Tirupati, Fortune Select, Marasa Sarovar).',
      advantages: [
        'Stunning, panoramic views of the Tirumala Seshachalam hills',
        'Traffic-free environment with wide roads',
        'Closer proximity to pedestrian footpaths (Srivari Mettu & Alipiri)'
      ]
    }
  ]

  const packingTips = [
    { title: 'Mandatory Traditional Attire', text: 'Vedic shrines enforce strict dress guidelines. Pack white Dhoti, Pancha, or plain Kurta-Pyjamas for men. Pack Sarees, Half-sarees, or Salwar Kameez with a dupatta for women.' },
    { title: 'Original Physical ID Proofs', text: 'You must carry the exact original physical ID card (Aadhaar or Passport) used during online TTD booking. Scans or digital IDs are strictly denied entry.' },
    { title: 'Footwear & Weather Items', text: 'Pack slip-on sandals as shoes are banned in temple storage lines. Bring light cotton clothing for summer, and lightweight jackets or shawls if visiting during cool winter nights.' },
    { title: 'Electronic Locker Rules', text: 'Mobile phones and gadgets are completely banned. Keep lockable small bags ready to deposit items at Vaikuntam Queue complexes.' }
  ]

  const localTransport = [
    { title: 'APSRTC Hill Buses', desc: 'Frequent state-owned buses operate between Tirupati RTC stand and Tirumala hilltop every 2 to 3 minutes, running round-the-clock.' },
    { title: 'TTD Dharmaratham Shuttles', desc: 'Complimentary yellow-colored local shuttle buses constantly circle Tirumala hilltop to connect cottages, locker counters, and temple entry gates.' },
    { title: 'G7 Travels Private Taxis', desc: 'Chauffeur-driven private sedans, SUVs, and Tempo Travellers starting from ₹14/km. Provide maximum privacy, point-to-point drop-offs, and custom sightseeing itineraries.' }
  ]

  const faqs = [
    { q: 'What is the road distance and travel time to Tirumala?', a: 'Tirumala hilltop is 22 km from Tirupati city. Chauffeur cars usually take 45 to 60 minutes to scale the beautiful ghat road, passing through safety toll checks.' },
    { q: 'Can we book hotels in Tirumala hilltop directly?', a: 'TTD guest rooms in Tirumala must be pre-booked online on the official TTD portal. Offline allotment is limited and carries high wait times. Booking accommodation in Tirupati city is highly recommended for flexibility.' },
    { q: 'Is there a toll gate restriction for vehicles?', a: 'Yes, the Alipiri Toll Gate restricts entry between 12:00 AM and 3:00 AM daily for safety on hill roads. Please plan your airport or railway pickups accordingly.' }
  ]

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-orange-400 transition-colors font-medium">Home</Link>
            <span>/</span>
            <span className="text-slate-200 font-semibold">Tirupati Travel Guide</span>
          </div>

          <div className="max-w-3xl">
            <Badge className="bg-orange-500 hover:bg-orange-600 text-white mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              Pilgrim Resource & Stay Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-orange-100 to-orange-300 bg-clip-text text-transparent">
              Tirupati Travel Guide: Stay Areas & Transit Tips
            </h1>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Simplify your spiritual trip to Tirupati. Read expert guidance on stay zones near the station, packing rules, local transport guidelines, and hire safe chauffeur cabs starting at ₹14/km.
            </p>
          </div>
        </div>
      </section>

      {/* Scenic Location Image Banner */}
      <section className="container mx-auto max-w-6xl px-4 mt-8">
        <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-white">
          <img 
            src="/tirupati-travel-guide.png" 
            alt="Scenic winding ghat road climbing to Tirumala hilltop surrounded by green forest hills" 
            className="w-full h-[350px] md:h-[480px] object-cover hover:scale-[1.01] transition-transform duration-500"
          />
          <div className="p-4 bg-slate-900 text-slate-300 text-xs md:text-sm font-medium flex items-center gap-2">
            <Info className="w-4 h-4 text-orange-400" />
            <span>Scenic photograph of the clean, winding double-lane asphalt ghat road climbing through the lush Seshachalam hills of Tirumala.</span>
          </div>
        </div>
      </section>

      {/* Hotel Stay Zones */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge className="bg-orange-100 text-orange-600 border border-orange-200 mb-2 font-semibold">
            Where to Lodge
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Tirupati Stay & Accommodation Zones
          </h2>
          <p className="text-slate-500 mt-1">
            Choose the perfect neighborhood to book your stay based on your transit style and budget comfort.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stayZones.map((zone, idx) => (
            <Card key={idx} className="bg-white border border-slate-200 hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between">
              <CardHeader>
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                  <Hotel className="w-5 h-5 text-orange-600" />
                </div>
                <CardTitle className="text-lg font-bold text-slate-800 leading-tight">
                  {zone.name}
                </CardTitle>
                <CardDescription className="text-slate-500 text-xs font-bold uppercase mt-1">
                  {zone.suitability}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-0">
                <p className="text-slate-650 text-sm leading-relaxed border-b border-slate-100 pb-3">
                  {zone.desc}
                </p>
                <div className="space-y-2">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400">Key Advantages:</h4>
                  <ul className="space-y-1.5">
                    {zone.advantages.map((adv, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <BookmarkCheck className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Advisory Packing & Travel Regulations Grid */}
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="bg-orange-500 text-white uppercase tracking-wider mb-2 font-semibold">
              Travel Advisories
            </Badge>
            <h2 className="text-3xl font-extrabold tracking-tight">
              Essential Packing & Rules Check
            </h2>
            <p className="text-slate-450 mt-2 text-sm">
              Keep these rules in mind before departing to avoid check-point delays or dress violations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packingTips.map((tip, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-800 border border-slate-700 space-y-3">
                <span className="text-xs font-bold text-orange-400 bg-orange-950/40 border border-orange-500/20 px-2 py-0.5 rounded-full inline-block">
                  Rule {idx + 1}
                </span>
                <h4 className="font-bold text-base text-white">{tip.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Transport Breakdown & G7 Cabs Crossover */}
      <section className="container mx-auto max-w-6xl px-4 py-16">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-8 md:p-12">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            
            {/* CTA */}
            <div className="lg:col-span-1 space-y-6">
              <Badge className="bg-orange-100 text-orange-600 border border-orange-200 font-semibold">
                Transport Solutions
              </Badge>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                How to Travel Locally in Tirupati
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Choose the best transport option matching your family size. Private car rentals offer maximum safety, speed, and flexibility when traveling with seniors or children.
              </p>
              <div className="pt-2">
                <Link href="/book-ride">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-6 px-8 rounded-xl shadow-lg shadow-orange-500/20 flex items-center gap-2">
                    <Car className="w-5 h-5" /> Hire a Chauffeur Cab
                  </Button>
                </Link>
              </div>
            </div>

            {/* Transport Options Grid */}
            <div className="lg:col-span-2 space-y-4">
              {localTransport.map((opt, idx) => (
                <div key={idx} className="p-5 border border-slate-100 rounded-2xl bg-slate-50 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx === 0 && <Compass className="w-5 h-5 text-orange-600" />}
                    {idx === 1 && <Clock className="w-5 h-5 text-orange-600" />}
                    {idx === 2 && <Car className="w-5 h-5 text-orange-600" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">{opt.title}</h4>
                    <p className="text-slate-650 text-xs md:text-sm mt-1 leading-relaxed">{opt.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Guide FAQs Accordion */}
      <section className="container mx-auto max-w-4xl px-4 py-8 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center justify-center gap-2">
            <HelpCircle className="w-6 h-6 text-orange-500" /> Essential Travel FAQs
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Common logistical questions answered for a hassle-free trip to Tirupati.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <h4 className="font-bold text-slate-900 text-sm md:text-base mb-2">
                {faq.q}
              </h4>
              <p className="text-slate-650 text-xs md:text-sm leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
