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
  Sparkles,
  Award,
  Music
} from 'lucide-react'

export default function ChandragiriGuidePage() {
  const [activeSection, setActiveSection] = useState<'palaces' | 'soundshow' | 'science'>('palaces')

  const sectionDetails = {
    palaces: {
      title: 'Raja Mahal & Rani Mahal Architecture',
      badge: 'Vijayanagara Legacy',
      summary: 'Dating back to 1000 AD, Chandragiri served as the majestic fortified capital of the Vijayanagara Empire.',
      points: [
        'Indo-Saracenic Architecture: Built entirely using stone, brick, and lime mortar, without using any timber (wood) in the main structure.',
        'Raja Mahal (King\'s Palace): A grand three-storied structure adorned with elegant arches, now converted into a museum by the Archaeological Survey of India (ASI).',
        'Rani Mahal (Queen\'s Palace): A two-storied palace located adjacent, featuring delicate stucco decorations and dome designs.',
        'Palace Museum: Displays historic stone sculptures, bronzes, weapons, and coins from the Chola and Vijayanagara royal periods.',
        'Visiting Hours: The palaces are open daily from 9:00 AM to 5:30 PM (Museum remains closed on Fridays).'
      ]
    },
    soundshow: {
      title: 'Evening Sound & Light Show',
      badge: 'Multimedia Spectacle',
      summary: 'A thrilling laser light and sound show that brings the ancient history of the Vijayanagara Empire back to life.',
      points: [
        'Historical Narrative: Tells the historic story of Sri Krishnadevaraya and the fall of the Vijayanagara Empire in Hampi and its shift to Chandragiri.',
        'Telugu Show: Daily from 06:30 PM to 07:15 PM (Highly popular among regional tourists).',
        'English Show: Daily from 07:30 PM to 08:15 PM (Recommended for international and non-Telugu visitors).',
        'Ticket Pricing: Standard tickets cost ₹50 for adults and ₹30 for children. Family seating is available on the lawns.',
        'Winter Note: Timings shift slightly earlier (by 15 minutes) during winter months (November to January).'
      ]
    },
    science: {
      title: 'Fort Gardens & Regional Science Center',
      badge: 'Family Outing Spots',
      summary: 'Surrounded by massive granite hills and green lawns, the fort is perfect for a refreshing evening family stroll.',
      points: [
        'Lush Landscaping: Sprawling manicured green gardens, water moats, and a natural deer sanctuary maintained near the fort foothills.',
        'Regional Science Center: Located just opposite the fort entrance, featuring an interactive science park, planetarium, and 3D theatre.',
        'Trekking & Photography: Excellent panoramic views of the Tirupati valley from the fort towers. High-quality camera entry permits apply.',
        'Food & Restrooms: basic snacks stalls and public convenience restrooms are available near the ASI ticket counter.',
        'Travel Tip: Best combined as a post-noon outing starting at 2:00 PM to explore the museum first, followed by the evening light show.'
      ]
    }
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bronze-950 via-slate-900 to-amber-950 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-orange-400 transition-colors font-medium">Home</Link>
            <span>/</span>
            <span className="text-slate-200 font-semibold">Chandragiri Fort Guide</span>
          </div>

          <div className="max-w-3xl">
            <Badge className="bg-amber-600 hover:bg-amber-700 text-white mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              11th Century Vijayanagara Capital & Archaeological Site
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
              Chandragiri Fort Heritage & Cab Guide
            </h1>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Plan the perfect family outing near Tirupati. Explore Raja & Rani Mahal palace history, catch the stunning evening sound & light show, and secure a reliable roundtrip cab.
            </p>
          </div>
        </div>
      </section>

      {/* Evening Travel Alert */}
      <section className="container mx-auto max-w-6xl px-4 mt-8">
        <Alert className="border-amber-500/20 bg-amber-500/5 text-slate-800">
          <Info className="h-5 w-5 text-amber-600 flex-shrink-0" />
          <AlertTitle className="text-amber-950 font-bold text-sm">
            Evening Sound Show Logistics
          </AlertTitle>
          <AlertDescription className="text-slate-700 text-xs md:text-sm mt-1">
            The Chandragiri Sound and Light Show finishes around 8:15 PM when the fort area becomes completely dark. Public transport (buses/shares autos) back to Tirupati town is extremely rare at this hour. We highly recommend booking a **G7 Travels roundtrip cab** where the driver comfortably waits for you in the parking lot and drops you directly back at your hotel.
          </AlertDescription>
        </Alert>
      </section>

      {/* Interactive Tabs */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-2xl mx-auto mb-10 bg-slate-200/50 p-1.5 rounded-xl border border-slate-300/40">
          <button
            onClick={() => setActiveSection('palaces')}
            className={`py-3 px-2 md:px-4 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-1 md:gap-1.5 ${
              activeSection === 'palaces'
                ? 'bg-white text-amber-700 shadow-md border-b-2 border-amber-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Award className="w-4 h-4 text-amber-600" /> Raja & Rani Mahal
          </button>
          <button
            onClick={() => setActiveSection('soundshow')}
            className={`py-3 px-2 md:px-4 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-1 md:gap-1.5 ${
              activeSection === 'soundshow'
                ? 'bg-white text-amber-700 shadow-md border-b-2 border-amber-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Music className="w-4 h-4 text-amber-600" /> Sound Show
          </button>
          <button
            onClick={() => setActiveSection('science')}
            className={`py-3 px-2 md:px-4 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-1 md:gap-1.5 ${
              activeSection === 'science'
                ? 'bg-white text-amber-700 shadow-md border-b-2 border-amber-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Compass className="w-4 h-4 text-amber-600" /> Parks & Science
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
                  <FileText className="w-5 h-5 text-amber-700" /> Essential Details:
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
                  Heritage Parameters
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Distance from Tirupati</div>
                      <div className="text-sm font-extrabold text-slate-900">15 Kilometers (One-way)</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Travel Time by Cab</div>
                      <div className="text-sm font-extrabold text-slate-900">25 to 30 Minutes</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Recommended Outing Time</div>
                      <div className="text-sm font-bold text-slate-800 leading-tight">3 to 4 Hours at fort site</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <a 
                  href={`https://wa.me/919014878313?text=${encodeURIComponent(`Hi G7 Travels, I want to book a roundtrip taxi to Chandragiri Fort. Please provide rates and driver availability.`)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md">
                    Book Chandragiri Cab <ArrowLeft className="w-4 h-4 rotate-180" />
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
          <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_bottom_left,rgba(217,119,6,0.06),transparent_50%)] pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-amber-100 text-amber-700 font-semibold mb-3 border border-amber-200">
                Heritage Roundtrip Cabs
              </Badge>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Tirupati to Chandragiri Fort Cab Rates
              </h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                Enjoy a perfect family evening heritage tour. Our roundtrip cab service includes reliable Hotel/Station pickup in Tirupati, a comfortable drive to Chandragiri Fort, 3.5 hours of driver waiting time so you can explore the palace museums and comfortably attend the sound and light show, and a drop-off back in Tirupati.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/book-ride">
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 rounded-xl font-bold shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2">
                    <Car className="w-5 h-5" /> Book Chandragiri Ride
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
                Tirupati to Chandragiri Roundtrip Rates (Inclusive of 3.5hr Waiting)
              </h3>
              <div className="grid gap-3.5">
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-amber-500/5 hover:border-amber-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">Swift Dzire (Sedan)</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Ideal for small families (up to 4 seats)</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-semibold font-medium">Roundtrip Rate</span>
                    <div className="text-sm font-extrabold text-amber-600 mt-0.5">₹1,800</div>
                  </div>
                </div>
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-amber-500/5 hover:border-amber-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">Maruti Ertiga (SUV)</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Comfortable multi-seater SUV (up to 6 seats)</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-semibold font-medium">Roundtrip Rate</span>
                    <div className="text-sm font-extrabold text-amber-600 mt-0.5">₹2,500</div>
                  </div>
                </div>
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-amber-500/5 hover:border-amber-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">Toyota Innova (Premium SUV)</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Premium touring luxury (up to 7 seats)</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-semibold font-medium">Roundtrip Rate</span>
                    <div className="text-sm font-extrabold text-amber-600 mt-0.5">₹3,500</div>
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
