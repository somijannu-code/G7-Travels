'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  MapPin, 
  ShieldAlert, 
  UserCheck, 
  Info, 
  FileText, 
  Shirt, 
  Phone, 
  ExternalLink, 
  HelpCircle, 
  Ban, 
  CheckCircle,
  TrendingUp,
  Car
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function DarshanGuidePage() {
  const [activeTab, setActiveTab] = useState<'special' | 'sarva' | 'nri' | 'special-needs'>('special')

  const darshanStreams = {
    special: {
      title: '₹300 Special Entry Darshan (SED)',
      subtitle: 'The most popular pre-booked entry method with minimal wait times.',
      wait: '2 - 4 Hours average wait time',
      cost: '₹300 per pilgrim (online payment only)',
      booking: 'Online only via TTD official portal',
      details: [
        'Booking window opens 2-3 months in advance on the official TTD website.',
        'Pilgrims must register using a unique Indian mobile number and valid ID proof.',
        'A single user can book up to 10 tickets per transaction with guest ID details.',
        'Reporting point is the Special Entry Darshan complex near the Vaikuntam Queue Complex-I.',
        'Original photo ID used during booking is strictly checked at the entry gate.'
      ],
      cta: 'Book ₹300 Tickets',
      link: 'https://ttdevasthanams.ap.gov.in'
    },
    sarva: {
      title: 'Slotted Sarva Darshan (Free Walk-in)',
      subtitle: 'Free general entry based on daily biometric token counters.',
      wait: '8 - 24 Hours depending on seasonal crowds',
      cost: 'Free / Complementary',
      booking: 'Offline biometric counters in Tirupati city',
      details: [
        'Daily tokens are issued on a first-come, first-served basis starting at 3:00 AM.',
        'You must physically stand in line at local Tirupati counters with your original Aadhaar card.',
        'Major Counter Locations: Srinivasam Complex (opposite Bus Stand), Vishnu Nivasam (opposite Railway Station), and Bhadevi Complex (Alipiri).',
        'Once tokens run out for the day, general walk-in without a token is allowed but can result in extremely long wait times.',
        'We recommend checking token availability status on the official app before going.'
      ],
      cta: 'Check Token Status',
      link: 'https://ttdevasthanams.ap.gov.in'
    },
    nri: {
      title: 'NRI Supadam Walk-in Darshan',
      subtitle: 'Dedicated direct physical entry for International Pilgrims (Non-Resident Indians).',
      wait: '1 - 2 Hours (Fastest physical entry stream)',
      cost: '₹300 per person (payable at Supadam counter)',
      booking: 'Direct Walk-in / Spot booking in Tirumala',
      details: [
        'No online booking required. Eligible NRIs must physically report directly to the Supadam Entrance in Tirumala.',
        'Entry timings are strictly restricted: Daily between 12:00 PM and 5:00 PM (subject to temple operational changes).',
        'Mandatory documents: Original Passport, valid foreign Visa or OCI card, and an Indian Immigration stamp showing entry into India within the last 30 days.',
        'Spouse and minor children of the NRI can also accompany them by providing valid relationship proofs (marriage certificate, passports).',
        'Payment of ₹300 per person is collected at the Supadam ticket counter via debit/credit cards or UPI.'
      ],
      cta: 'Read Supadam FAQs',
      link: 'https://ttdevasthanams.ap.gov.in'
    },
    'special-needs': {
      title: 'Senior Citizens & Differently-Abled Quota',
      subtitle: 'Dedicated special privilege entry slots designed for convenience.',
      wait: '1 - 1.5 Hours with dedicated resting areas',
      cost: 'Free (Online slot pre-booking required)',
      booking: 'Online quota released monthly',
      details: [
        'Dedicated quota is released on the TTD portal, typically in the third week of every month.',
        'Senior citizens must be 65 years of age or older on the date of darshan.',
        'Differently-abled individuals must upload a valid medical board certificate during online booking.',
        'Reporting Point: Dedicated Special Gate near the Bridge on Dakshina Mada Street (Tirumala).',
        'One attendant/spouse is permitted to accompany the pilgrim. Attendant ticket cost is ₹300.'
      ],
      cta: 'Book Special Quota',
      link: 'https://ttdevasthanams.ap.gov.in'
    }
  }

  const travelPackages = [
    {
      name: 'Renigunta Airport to Tirumala Round-trip',
      desc: 'Seamless transfers from Tirupati Airport to the hilltop and return.',
      sedan: '₹3,500',
      suv: '₹4,500',
      time: '1 Day Trip'
    },
    {
      name: 'Tirupati Local Temple Sightseeing',
      desc: 'Sightseeing package covering Padmavathi Temple, Govindaraja Swamy, and Srikalahasti.',
      sedan: '₹2,500',
      suv: '₹3,500',
      time: 'Half Day (6-8 hrs)'
    },
    {
      name: 'Chennai to Tirupati Pilgrim Special',
      desc: 'Complete round-trip outstation cab package originating from Chennai.',
      sedan: '₹6,500',
      suv: '₹8,500',
      time: '1-2 Days'
    },
    {
      name: 'Bangalore to Tirupati Spiritual Tour',
      desc: 'Doorstep pickup from Bangalore, round-trip transportation, and local guidance.',
      sedan: '₹10,500',
      suv: '₹14,000',
      time: '2 Days Round-trip'
    }
  ]

  const faqs = [
    {
      q: 'Is carrying physical ID proof mandatory for Tirumala entry?',
      a: 'Yes. You must carry the exact original ID card (Aadhaar, Passport, Voter ID) that you used while booking the ticket. Digital copies or scans on mobile phones are not accepted at the primary verification gates.'
    },
    {
      q: 'What happens if I miss my slotted reporting time?',
      a: 'TTD is highly strict regarding reporting slots. If you miss your slotted hour, security may deny entry, and you might have to purchase standard walk-in tokens or seek general Sarva Darshan queues. It is highly recommended to arrive at the reporting location 30 minutes before your slot.'
    },
    {
      q: 'Can I carry my mobile phone or smart gadgets inside the temple?',
      a: 'No. Cell phones, cameras, smartwatches, voice recorders, luggage, and large backpacks are completely prohibited inside the inner temple complex. You must store them in the free electronic lockers available at the queue complex before entering.'
    },
    {
      q: 'Does G7 Travels guarantee or sell Tirumala Darshan tickets?',
      a: 'No. G7 Travels does not sell or guarantee Tirumala Darshan tickets. TTD temple entry tickets can only be booked officially on the TTD website. G7 Travels is an authorized, premium car rental and taxi partner. We provide comfortable, reliable travel and local transportation to and from Tirupati / Tirumala once you have secured your tickets.'
    }
  ]

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.15),transparent_40%)]" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors mb-6 text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="max-w-3xl">
            <Badge className="bg-orange-500 hover:bg-orange-600 text-white mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              Updated TTD Rules & Travel Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-orange-100 to-orange-300 bg-clip-text text-transparent">
              Tirumala Darshan Guide & TTD Booking Rules
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Plan your ultimate pilgrimage to Tirupati Balaji Temple. Find exact guidelines for ₹300 Special Entry, Free SSD Tokens, NRI Walk-in via Supadam, and Senior Citizen quotas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-lg shadow-orange-500/25 transition-all">
                <a href="#quick-guide">Explore Darshan Streams</a>
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 hover:bg-slate-800 hover:text-white text-slate-200">
                <a href="#travel-packages">Book Chauffeur Cabs</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fraud Alert & Transport Disclaimer Strip */}
      <section className="container mx-auto max-w-6xl px-4 mt-8">
        <Alert className="border-orange-500/30 bg-orange-500/5 text-slate-800 shadow-sm">
          <ShieldAlert className="h-5 w-5 text-orange-600 flex-shrink-0" />
          <AlertTitle className="text-orange-950 font-bold text-base">
            Important Travel & TTD Ticket Advisory
          </AlertTitle>
          <AlertDescription className="text-slate-700 text-sm mt-1">
            <strong>Fraud Alert:</strong> Beware of illegal websites or travel agents claiming to sell guaranteed TTD Darshan tickets under the G7 Travels name. <strong>G7 Travels only provides professional, authorized car rentals, airport drops, and sightseeing taxi services.</strong> All temple darshan tickets must be booked officially by pilgrims on the official TTD Devastanam portal. We highly recommend booking your transport only after securing your official entry ticket.
          </AlertDescription>
        </Alert>
      </section>

      {/* Interactive Guide Section */}
      <section id="quick-guide" className="container mx-auto max-w-6xl px-4 py-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Choose Your Entry Route
          </h2>
          <p className="text-slate-600 mt-2">
            Select one of the official darshan options below to learn its complete booking timeline, documents, and reporting procedures.
          </p>
        </div>

        {/* Tab Triggers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 bg-slate-200/50 p-1.5 rounded-xl border border-slate-300/40">
          {(Object.keys(darshanStreams) as Array<keyof typeof darshanStreams>).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center text-center ${
                activeTab === tab
                  ? 'bg-white text-orange-600 shadow-md border-b-2 border-orange-500 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              {tab === 'special' && '₹300 Special SED'}
              {tab === 'sarva' && 'Free SSD Token'}
              {tab === 'nri' && 'NRI (Supadam)'}
              {tab === 'special-needs' && 'Senior / Special'}
            </button>
          ))}
        </div>

        {/* Tab Content Block */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Highlights Block */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full">
                  Step-by-Step Guidelines
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-3">
                  {darshanStreams[activeTab].title}
                </h3>
                <p className="text-slate-600 mt-1 text-sm md:text-base leading-relaxed">
                  {darshanStreams[activeTab].subtitle}
                </p>
              </div>

              <div className="border-t border-slate-100 pt-6">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-orange-600" /> Crucial Entry Requirements
                </h4>
                <ul className="space-y-3.5">
                  {darshanStreams[activeTab].details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center font-bold text-xs">
                        {index + 1}
                      </span>
                      <span className="pt-0.5">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Summary Sidebar */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-6 flex flex-col justify-between">
              <div className="space-y-6">
                <h4 className="font-bold text-slate-900 text-sm tracking-wider uppercase">
                  Quick Details Card
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Average Queue Wait</div>
                      <div className="text-sm font-bold text-slate-900">{darshanStreams[activeTab].wait}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Ticket Price</div>
                      <div className="text-sm font-bold text-slate-900">{darshanStreams[activeTab].cost}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Booking Location</div>
                      <div className="text-sm font-bold text-slate-900">{darshanStreams[activeTab].booking}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md">
                  <a 
                    href={darshanStreams[activeTab].link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 w-full justify-center"
                  >
                    Go to TTD Official Portal <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
                <p className="text-[10px] text-center text-slate-400 mt-2">
                  Link opens official TTD Government Booking website in a new tab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Restrictions Section */}
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="bg-orange-500 text-white uppercase tracking-wider mb-2 font-semibold">
              Rules & Regulations
            </Badge>
            <h2 className="text-3xl font-extrabold tracking-tight">
              Strict Tirumala Temple Advisories
            </h2>
            <p className="text-slate-400 mt-2">
              TTD enforces mandatory rules inside the temple complex. Compliance is strictly audited before entry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                  <Shirt className="w-6 h-6 text-orange-500" />
                </div>
                <CardTitle className="text-xl">Mandatory Dress Code</CardTitle>
                <CardDescription className="text-slate-400">Strictly traditional attire only.</CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300 text-sm space-y-2">
                <p><strong>Men:</strong> Must wear a traditional White Dhoti/Pancha (with upper cloth) or a matching Kurta-Pyjama.</p>
                <p><strong>Women:</strong> Must wear a Saree, Half-saree, or Churidar/Salwar Kameez with a Dupatta.</p>
                <p className="text-red-400 font-semibold bg-red-950/40 p-2 rounded border border-red-500/20">
                  Western outfits, jeans, t-shirts, shorts, and skirts are strictly banned.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                  <Ban className="w-6 h-6 text-orange-500" />
                </div>
                <CardTitle className="text-xl">Prohibited Gadgets</CardTitle>
                <CardDescription className="text-slate-400">Completely electronic-free zone.</CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300 text-sm space-y-2">
                <p>Mobile phones, cameras, recording equipment, smartwatches, and headphones are banned inside the Vaikuntam Queue Complex.</p>
                <p>Luggage and backpacks are subject to full scanning. You must deposit them in designated free lockers at the queue gate.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                  <UserCheck className="w-6 h-6 text-orange-500" />
                </div>
                <CardTitle className="text-xl">Verification Proofs</CardTitle>
                <CardDescription className="text-slate-400">Strict personal identification match.</CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300 text-sm space-y-2">
                <p>All pilgrims must present the **original physical photo ID** (Aadhaar Card, Passport, or PAN Card) used during ticket booking.</p>
                <p>Photo mismatch or failure to display physical ID leads to cancellation of the ticket with zero refund.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* G7 Travels Cabs Promotion Section */}
      <section id="travel-packages" className="container mx-auto max-w-6xl px-4 py-16">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.08),transparent_50%)] pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-orange-100 text-orange-600 font-semibold mb-3 border border-orange-200">
                Post-Ticket Transit Partner
              </Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Secure Your Premium Ride with G7 Travels
              </h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                Got your Tirumala Darshan tickets? Now trust Tirupati's most professional chauffeur cab network. We specialize in hassle-free pickups from Renigunta Airport, Tirupati Station, Chennai, and Bangalore.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-sm font-semibold text-slate-700">Experienced Local Drivers with deep route knowledge</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-sm font-semibold text-slate-700">Strictly sanitized, well-maintained hatchbacks, sedans, SUVs, and Tempo Travellers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-sm font-semibold text-slate-700">Transparent pricing from ₹14/km. Zero toll & permit surprise costs.</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/book-ride">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-xl font-bold shadow-lg shadow-orange-500/20 transition-all flex items-center gap-2">
                    <Car className="w-5 h-5" /> Book Your Ride Now
                  </Button>
                </Link>
                <a href="tel:+919866143321">
                  <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50 text-slate-700 font-bold px-6 py-6 rounded-xl flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Call 24/7 Support
                  </Button>
                </a>
              </div>
            </div>

            {/* Fare Matrix Grid */}
            <div className="space-y-4">
              <h3 className="font-bold text-slate-800 text-sm tracking-wider uppercase mb-2">
                Popular Pilgrimage Route Fares
              </h3>
              <div className="grid gap-3.5">
                {travelPackages.map((pkg, idx) => (
                  <div key={idx} className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-orange-500/5 hover:border-orange-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm md:text-base">{pkg.name}</h4>
                      <p className="text-slate-500 text-xs mt-0.5">{pkg.desc}</p>
                      <span className="inline-block mt-2 text-[10px] bg-slate-200/60 text-slate-600 font-bold px-2 py-0.5 rounded-full uppercase">
                        {pkg.time}
                      </span>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-xs text-slate-400 font-semibold">Sedan / SUV</div>
                      <div className="text-sm font-extrabold text-orange-600 mt-0.5">{pkg.sedan} / {pkg.suv}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="container mx-auto max-w-4xl px-4 py-8 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center justify-center gap-2">
            <HelpCircle className="w-6 h-6 text-orange-500" /> Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Find answers to standard administrative questions regarding TTD temple policies.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <h4 className="font-bold text-slate-900 text-sm md:text-base mb-2">
                {faq.q}
              </h4>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
