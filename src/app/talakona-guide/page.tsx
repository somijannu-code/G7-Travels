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
  Trees,
  Compass,
  Activity,
  Flame
} from 'lucide-react'

export default function TalakonaGuidePage() {
  const [activeSection, setActiveSection] = useState<'trekking' | 'canopy' | 'stays'>('trekking')

  const sectionDetails = {
    trekking: {
      title: 'Trekking Trails & Scenic Waterfalls',
      badge: 'Nature Trails',
      summary: 'Talakona hosts multiple forest trekking pathways ranging from beginner-friendly paths to challenging forest hill treks.',
      points: [
        'Waterfall Trek: A well-laid 1.5 km stone trail from the forest entrance arch leading to the base of the majestic 270-foot waterfall cascades.',
        'Siddheswara Swamy Temple Trail: Walk along the serene river streams to visit the ancient Shiva temple built in the 14th century.',
        'Deep Forest Trekking: Guided treks organized by forest rangers (requires permissions) that climb higher up the hills to the waterfall source.',
        'Best Season: September to January post-monsoon offers high-volume water flow and lush green nature foliage.',
        'Timings & Fee: Entry is open from 6:00 AM to 5:00 PM. A nominal forest entry fee of ₹30 per adult is collected at the entrance gate.'
      ]
    },
    canopy: {
      title: 'Canopy Rope Walk & Biodiversity Parks',
      badge: 'Forest Adventure',
      summary: 'Walk 40 feet above the forest floor on a thrilling suspension bridge system and witness diverse wildlife up close.',
      points: [
        'Suspension Bridge: A 240-meter-long canopy walkway suspended between massive trees, providing a bird\'s-eye view of the valleys.',
        'Rich Biodiversity: Home to rare and endangered wildlife including the Slender Loris, Golden Gecko, and giant squirrels.',
        'Medicinal Plants: The surrounding national park is a designated biosphere reserve containing over 450 species of rare medicinal herbs.',
        'Family Friendly: Highly secure, double-netted safety ropes ensure safety for kids and elderly visitors alike.',
        'Canopy Fee: A ticket of ₹50 per person is available directly at the canopy walk starting counter.'
      ]
    },
    stays: {
      title: 'Forest Log Cabins & Eco-Tourism Stays',
      badge: 'Eco Accommodations',
      summary: 'Spend a peaceful night in the heart of the forest reserve. Wake up to bird calls and pristine cool mountain breezes.',
      points: [
        'Eco Log Huts: Cozy wooden cabins built by the AP Forest Department, blending seamlessly into the natural surroundings.',
        'Haritha Forest Suites: Spacious family cottages equipped with basic modern amenities like air conditioning and private verandas.',
        'Dormitories: Budget-friendly large-capacity forest rooms perfect for student groups or trekking clubs.',
        'Booking Method: Offline booking at Nerabailu forest department offices or online via the AP Tourism (APTDC) portal is required in advance.',
        'Important Tip: Network connectivity is extremely limited inside the forest. Book cabs in advance to avoid being stranded.'
      ]
    }
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-950 via-slate-900 to-orange-950 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-orange-400 transition-colors font-medium">Home</Link>
            <span>/</span>
            <span className="text-slate-200 font-semibold">Talakona Waterfalls Guide</span>
          </div>

          <div className="max-w-3xl">
            <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              Andhra\'s Highest Waterfall & Biosphere Reserve
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-emerald-100 to-orange-300 bg-clip-text text-transparent">
              Talakona Waterfalls Ecotourism & Cab Guide
            </h1>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Plan the perfect 1-day eco-getaway from Tirupati. Explore forest canopy walks, deep woods trekking trails, log cabin stays, and book reliable private roundtrip transport.
            </p>
          </div>
        </div>
      </section>

      {/* Forest Advisory Alert */}
      <section className="container mx-auto max-w-6xl px-4 mt-8">
        <Alert className="border-emerald-500/20 bg-emerald-500/5 text-slate-800">
          <Info className="h-5 w-5 text-emerald-600 flex-shrink-0" />
          <AlertTitle className="text-emerald-950 font-bold text-sm">
            Ecotourism Visitor Advisory
          </AlertTitle>
          <AlertDescription className="text-slate-700 text-xs md:text-sm mt-1">
            Talakona falls within a strictly protected national forest reserve. Plastic usage is highly discouraged, and cellular network signals (Airtel, Jio) are extremely weak near the falls. Ensure you book a **G7 Travels roundtrip cab** where the driver will comfortably wait for you at the forest base parking lot until you complete your trek and return.
          </AlertDescription>
        </Alert>
      </section>

      {/* Interactive Tabs */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-2xl mx-auto mb-10 bg-slate-200/50 p-1.5 rounded-xl border border-slate-300/40">
          <button
            onClick={() => setActiveSection('trekking')}
            className={`py-3 px-2 md:px-4 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-1 md:gap-1.5 ${
              activeSection === 'trekking'
                ? 'bg-white text-emerald-700 shadow-md border-b-2 border-emerald-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Compass className="w-4 h-4 text-emerald-600" /> Trails & Falls
          </button>
          <button
            onClick={() => setActiveSection('canopy')}
            className={`py-3 px-2 md:px-4 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-1 md:gap-1.5 ${
              activeSection === 'canopy'
                ? 'bg-white text-emerald-700 shadow-md border-b-2 border-emerald-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Activity className="w-4 h-4 text-emerald-600" /> Canopy Rope
          </button>
          <button
            onClick={() => setActiveSection('stays')}
            className={`py-3 px-2 md:px-4 rounded-lg font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-1 md:gap-1.5 ${
              activeSection === 'stays'
                ? 'bg-white text-emerald-700 shadow-md border-b-2 border-emerald-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Trees className="w-4 h-4 text-emerald-600" /> Log Stays
          </button>
        </div>

        {/* Section Data Cards */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Highlights */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
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
                  <FileText className="w-5 h-5 text-emerald-700" /> Quick Travel Checklist:
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

            {/* Trek Parameters / Stats */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 flex flex-col justify-between">
              <div className="space-y-6">
                <h4 className="font-bold text-slate-900 text-sm tracking-wider uppercase">
                  Travel Parameters
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Distance from Tirupati</div>
                      <div className="text-sm font-extrabold text-slate-900">58 Kilometers (One-way)</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Trek Difficulty</div>
                      <div className="text-sm font-extrabold text-slate-900">Easy to Moderate</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Ideal Time Needed</div>
                      <div className="text-sm font-bold text-slate-800 leading-tight">4 to 6 Hours inside park</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <a 
                  href={`https://wa.me/919014878313?text=${encodeURIComponent(`Hi G7 Travels, I want to book a roundtrip 1-day package taxi from Tirupati to Talakona Waterfalls. Please confirm availability.`)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md">
                    Book Talakona Cab <ArrowLeft className="w-4 h-4 rotate-180" />
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
          <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.06),transparent_50%)] pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-emerald-100 text-emerald-700 font-semibold mb-3 border border-emerald-200">
                Outstation Flat Fares
              </Badge>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                1-Day Outing Roundtrip Cab Packages
              </h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                Enjoy a hassle-free family roadtrip to Talakona forest area. Our private roundtrip packages include pickup from your hotel/railway station in Tirupati, driving to Talakona, full-day driver waiting time, fuel charges, and convenient drop-off back in Tirupati.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/book-ride">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 rounded-xl font-bold shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2">
                    <Car className="w-5 h-5" /> Book 1-Day Outing Cab
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
                Tirupati to Talakona Roundtrip Rates (Inclusive of Waiting)
              </h3>
              <div className="grid gap-3.5">
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-emerald-500/5 hover:border-emerald-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">Swift Dzire (Sedan)</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Ideal for small families (up to 4 seats)</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-semibold font-medium">Full Day package</span>
                    <div className="text-sm font-extrabold text-emerald-600 mt-0.5">₹2,500</div>
                  </div>
                </div>
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-emerald-500/5 hover:border-emerald-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">Maruti Ertiga (SUV)</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Spacious seating for groups of 5 to 6 people</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-semibold font-medium">Full Day package</span>
                    <div className="text-sm font-extrabold text-emerald-600 mt-0.5">₹3,500</div>
                  </div>
                </div>
                <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-emerald-500/5 hover:border-emerald-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">Toyota Innova (Premium SUV)</h4>
                    <p className="text-slate-500 text-xs mt-0.5">Maximum travel comfort & luxury (up to 7 seats)</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-slate-400 font-semibold font-medium">Full Day package</span>
                    <div className="text-sm font-extrabold text-emerald-600 mt-0.5">₹4,500</div>
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
