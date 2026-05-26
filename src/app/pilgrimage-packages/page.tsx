'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Building2, 
  Clock, 
  Users, 
  Star, 
  CheckCircle2, 
  IndianRupee, 
  Phone, 
  Hotel, 
  Compass, 
  MapPin, 
  CalendarDays,
  Plus,
  Minus,
  Sparkles
} from 'lucide-react'

export default function PilgrimagePackagesPage() {
  const packages = [
    {
      name: 'Airport - Tirumala Darshan (Direct)',
      image: '/pkg-1.jpg', 
      duration: '1 Day',
      price: '3,500',
      rating: 4.9,
      reviews: 1250,
      highlights: [
        'Pickup from Tirupati Airport',
        'Direct travel to Tirumala for Darshan',
        'Drop back at Airport or Tirupati City',
        'AC Sedan/Hatchback included'
      ],
      capacity: '4 Passengers'
    },
    {
      name: 'Airport - Tirumala + Sightseeing',
      image: '/pkg-2.jpg', 
      duration: '1 Day',
      price: '4,500',
      rating: 4.8,
      reviews: 890,
      highlights: [
        'Pickup from Tirupati Airport',
        'Tirumala Darshan',
        'Visit to local side scenes/attractions',
        'Drop back at Airport or Tirupati City'
      ],
      capacity: '4 Passengers'
    },
    {
      name: 'Local Temples Tour',
      image: '/pkg-3.jpg', 
      duration: 'Half Day',
      price: '2,500',
      rating: 4.7,
      reviews: 654,
      highlights: [
        'Pickup from your location in Tirupati',
        'Visit to major local Tirupati temples',
        'Padmavathi Temple, Govindaraja Swamy, etc.',
        'Drop back at your location'
      ],
      capacity: '4 Passengers'
    },
    {
      name: 'Tirupati to Kanipakam',
      image: '/pkg-4.jpg', 
      duration: '1 Day',
      price: '3,500',
      rating: 4.9,
      reviews: 432,
      highlights: [
        'Pickup from Tirupati',
        'Travel to Kanipakam Varasiddhi Vinayaka Temple',
        'Darshan assistance',
        'Return drop at Tirupati'
      ],
      capacity: '4 Passengers'
    },
    {
      name: 'Tirupati to Srikalahasti',
      image: '/pkg-5.jpg', 
      duration: 'Half Day',
      price: '2,500',
      rating: 4.8,
      reviews: 512,
      highlights: [
        'Pickup from Tirupati',
        'Travel to Srikalahasti Shiva Temple',
        'Darshan assistance',
        'Return drop at Tirupati'
      ],
      capacity: '4 Passengers'
    },
    {
      name: 'Kanipakam & Golden Temple',
      image: '/pkg-6.jpg', 
      duration: '1 Day',
      price: '5,000',
      rating: 4.9,
      reviews: 876,
      highlights: [
        'Pickup from Tirupati',
        'Visit Kanipakam Temple',
        'Travel to Vellore Golden Temple (Sripuram)',
        'Return drop at Tirupati'
      ],
      capacity: '4 Passengers'
    },
    {
      name: 'Kanipakam, Golden Temple & Arunachalam',
      image: '/pkg-7.jpg', 
      duration: '1-2 Days',
      price: '6,500',
      rating: 4.9,
      reviews: 342,
      highlights: [
        'Pickup from Tirupati',
        'Visit Kanipakam Temple',
        'Visit Vellore Golden Temple',
        'Visit Arunachalam (Tiruvannamalai)',
        'Return drop at Tirupati'
      ],
      capacity: '4 Passengers'
    },
    {
      name: 'Mega Round Trip (2 Days)',
      image: '/pkg-8.jpg', 
      duration: '2 Days',
      price: '11,000',
      rating: 5.0,
      reviews: 128,
      highlights: [
        'Tirupati pickup',
        'Vakulamatha Temple & Srinivasa Mangapuram',
        'Kanipakam & Golden Temple',
        'Arunachalam & Kanchi',
        'Tiruttani & Return'
      ],
      capacity: '4 Passengers',
      badge: 'Best Value'
    },
    {
      name: 'Tirupati to Chennai Drop',
      image: '/pkg-9.jpg', 
      duration: 'One Way',
      price: '5,500',
      rating: 4.7,
      reviews: 550,
      highlights: [
        'Pickup from anywhere in Tirupati',
        'Direct travel to Chennai',
        'Drop at Airport, Railway Station, or City',
        'Toll & State Tax included'
      ],
      capacity: '4 Passengers'
    },
    {
      name: 'Tirupati to Bangalore Drop',
      image: '/pkg-10.jpg', 
      duration: 'One Way',
      price: '7,000',
      rating: 4.8,
      reviews: 420,
      highlights: [
        'Pickup from anywhere in Tirupati',
        'Direct travel to Bangalore',
        'Drop at Airport, Railway Station, or City',
        'Toll & State Tax included'
      ],
      capacity: '4 Passengers'
    }
  ]

  const inclusions = [
    'Comfortable AC vehicle',
    'Experienced driver familiar with temple routes',
    'Toll & Parking charges (unless specified)',
    '24/7 Phone Support',
    'Clean and sanitized cars',
    'Flexible pickup timings'
  ]

  // --- Dynamic Customizer State ---
  const [selectedPkgIndex, setSelectedPkgIndex] = useState(0)
  const [hotelCategory, setHotelCategory] = useState<'none' | 'standard' | 'deluxe' | 'luxury'>('none')
  const [nightsCount, setNightsCount] = useState(1)
  const [selectedSightseeing, setSelectedSightseeing] = useState<string[]>([])

  const hotelOptions = {
    none: { name: 'No Stay (Transport Only)', price: 0, desc: 'Arrange your own hotel accommodations.' },
    standard: { name: 'Standard A/C Room', price: 1500, desc: 'Clean, comfortable budget hotel room.' },
    deluxe: { name: 'Deluxe Suite (3-Star)', price: 3500, desc: 'Premium stay at Minerva Grand or Raj Park.' },
    luxury: { name: 'Luxury 5-Star Hotel', price: 7500, desc: '5-Star luxury suite (Taj Tirupati / Fortune).' }
  }

  const sightseeingOptions = [
    { id: 'shiva', name: 'Srikalahasti Shiva Temple & Rahu Ketu Pooja', price: 1000, desc: 'Srikalahasteeswara temple visit & Pooja assistance.' },
    { id: 'kanipakam', name: 'Kanipakam Varasiddhi Vinayaka Temple', price: 1500, desc: 'Vani River Ganesha temple direct drop & return.' },
    { id: 'talakona', name: 'Talakona Scenic Waterfalls', price: 2000, desc: 'Explore the highest waterfall in Andhra Pradesh.' },
    { id: 'fort', name: 'Chandragiri Historical Fort', price: 1000, desc: 'Archaeological museum and evening sound show.' }
  ]

  // Calculate pricing
  const basePrice = parseInt(packages[selectedPkgIndex].price.replace(/,/g, ''), 10)
  const hotelPrice = hotelCategory !== 'none' ? hotelOptions[hotelCategory].price * nightsCount : 0
  const sightseeingPrice = selectedSightseeing.reduce((acc, itemId) => {
    const opt = sightseeingOptions.find(o => o.id === itemId)
    return acc + (opt ? opt.price : 0)
  }, 0)
  const totalCalculatedPrice = basePrice + hotelPrice + sightseeingPrice

  const handleWhatsAppBooking = (pkg: any) => {
    const highlightsText = pkg.highlights.map((h: string) => `  - ${h}`).join('\n')
    
    const message = `*🚕 Package Booking Request | G7 TRAVELS*
    
I am interested in booking the following package:

*Package Name:* ${pkg.name}
*Price:* ₹${pkg.price}
*Duration:* ${pkg.duration}
*Capacity:* ${pkg.capacity}

*Highlights included:*
${highlightsText}

Please provide more details regarding availability and next steps.`

    const whatsappUrl = `https://wa.me/919014878313?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleCustomizedWhatsAppBooking = () => {
    const corePkg = packages[selectedPkgIndex]
    const hotelChoice = hotelOptions[hotelCategory].name
    const hotelCostText = hotelCategory !== 'none' ? ` (${nightsCount} Night(s) @ ₹${hotelOptions[hotelCategory].price}/night)` : ''
    
    const sightseeingList = selectedSightseeing.map(id => {
      const opt = sightseeingOptions.find(o => o.id === id)
      return `  - ${opt?.name} (+₹${opt?.price})`
    }).join('\n')

    const message = `*🌟 Spiritual Customizer Booking | G7 TRAVELS*
    
I would like to book a customized temple package:

*1. Base Transit Package:* ${corePkg.name} (₹${corePkg.price})
*2. Accommodation Choice:* ${hotelChoice}${hotelCostText}
*3. Sightseeing Add-Ons:*
${selectedSightseeing.length > 0 ? sightseeingList : '  - None'}

--------------------------------------
*💰 Estimated Total Price:* ₹${totalCalculatedPrice.toLocaleString('en-IN')}
--------------------------------------

Please review my selections and confirm cab availability and lodging booking details!`

    const whatsappUrl = `https://wa.me/919014878313?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const toggleSightseeing = (id: string) => {
    if (selectedSightseeing.includes(id)) {
      setSelectedSightseeing(selectedSightseeing.filter(item => item !== id))
    } else {
      setSelectedSightseeing([...selectedSightseeing, id])
    }
  }

  return (
    <div className="bg-slate-50 pb-16">
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Building2 className="w-8 h-8 text-orange-400" />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-orange-100 to-orange-300 bg-clip-text text-transparent">
              Tirupati Pilgrimage Packages & Temple Tours
            </h1>
          </div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Experience the divine journey to Tirumala and other sacred sites. Book fixed-price chauffeur transport or dynamically customize with premium hotels and local sightseeing.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="text-center max-w-xl mx-auto mb-10">
          <Badge className="bg-orange-100 text-orange-600 border border-orange-200 mb-2 font-semibold">
            All-Inclusive Chauffeur Transport
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Fixed-Price Temple Cabs
          </h2>
          <p className="text-slate-500 mt-1">
            Choose from our pre-packaged rides covering all major transit zones and local spiritual locations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow border border-slate-200/60 hover:border-orange-200 bg-white">
              <div className="relative h-64 bg-slate-100 flex items-center justify-center p-4 border-b border-slate-200/50">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80'
                  }}
                />
                <Badge className="absolute top-4 right-4 bg-orange-600 hover:bg-orange-700 text-white px-3 py-1 shadow-md font-semibold">
                  {pkg.duration}
                </Badge>
                {pkg.badge && (
                  <Badge className="absolute top-4 left-4 bg-green-600 hover:bg-green-700 text-white px-3 py-1 shadow-md font-semibold">
                    {pkg.badge}
                  </Badge>
                )}
              </div>
              <CardHeader className="bg-slate-50/70 border-b border-slate-200/50 pb-4">
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl text-slate-800 leading-tight font-bold">{pkg.name}</CardTitle>
                  <div className="flex items-center gap-1 text-sm bg-white px-2 py-1 rounded-md shadow-sm border border-slate-200/40">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-slate-700">{pkg.rating}</span>
                  </div>
                </div>
                <CardDescription>
                  <div className="flex items-center gap-4 text-slate-600 font-semibold text-xs">
                    <span className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-orange-500" />
                      {pkg.capacity}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-orange-500" />
                      {pkg.duration}
                    </span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div>
                  <h4 className="font-semibold mb-3 text-xs tracking-wider uppercase text-slate-500">Package Highlights:</h4>
                  <ul className="space-y-2">
                    {pkg.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between pt-6 mt-4 border-t border-slate-200/60">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Fixed Fare</span>
                    <div className="text-2xl font-extrabold text-orange-600 flex items-center gap-1">
                      <IndianRupee className="w-5 h-5" />
                      {pkg.price}
                    </div>
                  </div>
                  <Button 
                    className="bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg transition-all font-bold"
                    onClick={() => handleWhatsAppBooking(pkg)}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Book on WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* --- Dynamic Spiritual Itinerary Customizer Section --- */}
      <section className="bg-slate-950 text-white py-16 px-4 border-y border-slate-800">
        <div className="container mx-auto max-w-6xl">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="bg-orange-500 hover:bg-orange-600 text-white mb-3 font-semibold tracking-wide uppercase px-2.5 py-1">
              <Sparkles className="w-3.5 h-3.5 inline mr-1 animate-pulse" /> Hotel & Tour Configurator
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Interactive Spiritual Customizer
            </h2>
            <p className="text-slate-400 mt-2 text-sm md:text-base">
              Add premium hotels or scenic, archaeological sightseeing extensions to your core transportation package in real-time.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Customizer Selections Panel */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Step 1: Core Transit Package */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-300 uppercase tracking-wider block">
                  Step 1: Choose Your Core Transit Route
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {packages.map((pkg, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedPkgIndex(idx)}
                      className={`text-left p-3.5 rounded-xl border text-sm transition-all duration-200 ${
                        selectedPkgIndex === idx
                          ? 'bg-orange-500/10 border-orange-500 text-white ring-1 ring-orange-500'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:bg-slate-900/60'
                      }`}
                    >
                      <div className="font-bold">{pkg.name}</div>
                      <div className="text-xs text-slate-500 mt-1 flex justify-between">
                        <span>{pkg.duration}</span>
                        <span className="font-extrabold text-orange-400">₹{pkg.price}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Hotel Accommodation Selection */}
              <div className="space-y-4 pt-4 border-t border-slate-900">
                <label className="text-sm font-bold text-slate-300 uppercase tracking-wider block">
                  Step 2: Add Hotel Accommodation (Optional)
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {(Object.keys(hotelOptions) as Array<keyof typeof hotelOptions>).map((key) => (
                    <button
                      key={key}
                      onClick={() => setHotelCategory(key)}
                      className={`text-left p-4 rounded-xl border transition-all duration-200 flex items-start gap-3.5 ${
                        hotelCategory === key
                          ? 'bg-orange-500/10 border-orange-500 text-white ring-1 ring-orange-500'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        hotelCategory === key ? 'bg-orange-500 text-white' : 'bg-slate-850 text-slate-500'
                      }`}>
                        <Hotel className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-sm text-white flex justify-between items-center w-full">
                          <span>{hotelOptions[key].name}</span>
                          {hotelOptions[key].price > 0 && (
                            <span className="text-orange-400 font-extrabold text-xs">
                              +₹{hotelOptions[key].price}/n
                            </span>
                          )}
                        </div>
                        <p className="text-slate-500 text-xs mt-1 leading-snug">{hotelOptions[key].desc}</p>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Nights Counter if lodging is chosen */}
                {hotelCategory !== 'none' && (
                  <div className="bg-slate-900 border border-slate-850 rounded-xl p-4 flex items-center justify-between mt-3">
                    <div>
                      <div className="text-sm font-bold text-slate-300">Lodging Stay Duration</div>
                      <div className="text-xs text-slate-500 mt-0.5">Select how many nights you plan to stay in Tirupati</div>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-950 border border-slate-800 rounded-lg p-1.5">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 text-slate-400 hover:text-white"
                        onClick={() => setNightsCount(Math.max(1, nightsCount - 1))}
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </Button>
                      <span className="font-extrabold text-sm w-4 text-center">{nightsCount}</span>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 text-slate-400 hover:text-white"
                        onClick={() => setNightsCount(Math.min(5, nightsCount + 1))}
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Step 3: Scenic & Spiritual Sightseeing Extensions */}
              <div className="space-y-4 pt-4 border-t border-slate-900">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-slate-300 uppercase tracking-wider block">
                    Step 3: Add Scenic & Spiritual Extensions (Optional)
                  </label>
                  <Badge variant="outline" className="text-orange-400 border-orange-500/20 text-[10px]">
                    Multi-select enabled
                  </Badge>
                </div>
                
                <div className="grid md:grid-cols-2 gap-3.5">
                  {sightseeingOptions.map((opt) => {
                    const isSelected = selectedSightseeing.includes(opt.id)
                    return (
                      <button
                        key={opt.id}
                        onClick={() => toggleSightseeing(opt.id)}
                        className={`text-left p-4 rounded-xl border transition-all duration-200 flex gap-3.5 items-start ${
                          isSelected
                            ? 'bg-orange-500/10 border-orange-500 text-white ring-1 ring-orange-500'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          isSelected ? 'bg-orange-500 text-white' : 'bg-slate-850 text-slate-500'
                        }`}>
                          <Compass className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-bold text-sm text-white flex justify-between items-center gap-2">
                            <span>{opt.name}</span>
                            <span className="text-orange-400 font-extrabold text-xs flex-shrink-0">
                              +₹{opt.price}
                            </span>
                          </div>
                          <p className="text-slate-500 text-xs mt-1 leading-snug">{opt.desc}</p>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

            </div>

            {/* Live Pricing Breakdown Card */}
            <div>
              <div className="bg-slate-900 border border-slate-850 rounded-2xl p-6 lg:sticky lg:top-24 space-y-6">
                <div>
                  <h3 className="text-base font-bold uppercase tracking-wider text-slate-400">
                    Spiritual Estimate
                  </h3>
                  <div className="text-3xl font-black text-orange-500 mt-2 flex items-center">
                    <IndianRupee className="w-7 h-7" />
                    <span>{totalCalculatedPrice.toLocaleString('en-IN')}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Estimations exclude driver allowances & pooja tickets.</p>
                </div>

                <div className="border-t border-slate-850 pt-4 space-y-3.5">
                  <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wide">
                    Bill Summary:
                  </h4>

                  {/* Core package cost */}
                  <div className="flex justify-between items-start text-xs text-slate-300">
                    <div className="flex gap-2">
                      <MapPin className="w-3.5 h-3.5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-white">{packages[selectedPkgIndex].name}</div>
                        <div className="text-slate-500">Core Transport</div>
                      </div>
                    </div>
                    <span className="font-bold text-slate-100 flex-shrink-0">₹{packages[selectedPkgIndex].price}</span>
                  </div>

                  {/* Hotel accommodation cost */}
                  {hotelCategory !== 'none' && (
                    <div className="flex justify-between items-start text-xs text-slate-300 border-t border-slate-900 pt-3">
                      <div className="flex gap-2">
                        <Hotel className="w-3.5 h-3.5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-white">{hotelOptions[hotelCategory].name}</div>
                          <div className="text-slate-500">{nightsCount} Night(s) @ ₹{hotelOptions[hotelCategory].price}/night</div>
                        </div>
                      </div>
                      <span className="font-bold text-slate-100 flex-shrink-0">₹{hotelPrice.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  {/* Sightseeing packages */}
                  {selectedSightseeing.length > 0 && (
                    <div className="flex justify-between items-start text-xs text-slate-300 border-t border-slate-900 pt-3">
                      <div className="flex gap-2">
                        <Compass className="w-3.5 h-3.5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-white">Scenic & Spiritual Extensions</div>
                          <div className="text-slate-500">{selectedSightseeing.length} item(s) selected</div>
                        </div>
                      </div>
                      <span className="font-bold text-slate-100 flex-shrink-0">+₹{sightseeingPrice.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                </div>

                <div className="border-t border-slate-850 pt-5 space-y-3">
                  <Button 
                    onClick={handleCustomizedWhatsAppBooking}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-green-600/10"
                  >
                    <Phone className="w-4 h-4" /> Book Configured Itinerary
                  </Button>
                  <p className="text-[10px] text-center text-slate-500 leading-normal">
                    This button opens WhatsApp Web/App with your selected details for quick and secure ticket coordination.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* What's Included */}
      <section className="container mx-auto max-w-4xl px-4 py-16">
        <h3 className="text-2xl font-bold text-center mb-8 text-slate-850">What's Included in all Packages</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {inclusions.map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-orange-300 hover:shadow-md transition-all">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 animate-pulse" />
              <span className="font-bold text-slate-700 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto max-w-4xl px-4 mb-8">
        <Card className="bg-gradient-to-br from-orange-600 to-red-600 text-white border-0 shadow-xl overflow-hidden rounded-2xl relative">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none" />
          <CardHeader className="relative z-10 pb-2">
            <CardTitle className="text-3xl text-center font-bold">Why Choose G7 Travels?</CardTitle>
          </CardHeader>
          <CardContent className="relative z-10 pt-6">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-4xl font-black mb-2 text-orange-100">10K+</div>
                <div className="text-sm font-bold text-orange-50 uppercase tracking-wider">Pilgrims Served</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-4xl font-black mb-2 text-orange-100">Fixed</div>
                <div className="text-sm font-bold text-orange-50 uppercase tracking-wider">Transparent Pricing</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-4xl font-black mb-2 text-orange-100">24/7</div>
                <div className="text-sm font-bold text-orange-50 uppercase tracking-wider">Support Available</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

    </div>
  )
}
