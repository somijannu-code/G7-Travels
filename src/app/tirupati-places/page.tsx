'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { 
  Compass, 
  MapPin, 
  Clock, 
  Ticket, 
  CalendarDays, 
  Car, 
  Phone,
  ArrowRight,
  Sparkles,
  Info
} from 'lucide-react'

export default function TirupatiPlacesPage() {
  const touristPlaces = [
    {
      name: 'Tirumala Venkateswara Temple',
      category: 'Spiritual Center',
      distance: '22 km from Central Tirupati',
      timeToReach: '1.5 Hours by road',
      duration: '3 - 8 Hours depending on queue',
      tickets: 'Free / ₹300 Special SED ticket',
      bestTime: 'October to March (Pleasant weather)',
      desc: 'The world-famous hilltop shrine of Lord Venkateswara (Balaji). Set atop the Saptagiri (seven hills) of the Seshachalam range, it stands as the most visited pilgrimage center in India. Enforces a strict traditional dress code.',
      image: '/tirupati-god.png'
    },
    {
      name: 'Srikalahasti Shiva Temple',
      category: 'Spiritual / Vedic Astrological',
      distance: '38 km from Central Tirupati',
      timeToReach: '1 Hour by road',
      duration: '2 - 3 Hours',
      tickets: 'Free entry / Pooja ticket (₹500 to ₹2,500)',
      bestTime: 'Year-round (Special poojas on Sundays & Wednesdays)',
      desc: 'Dedicated to Lord Shiva as Srikalahasteeswara, representing the element of Air (Vayu Lingam). Famous worldwide for performing the Rahu-Ketu Sarpa Dosha Pooja. The temple architecture features massive, historic gopurams.',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80'
    },
    {
      name: 'Talakona Scenic Waterfalls',
      category: 'Nature & Trekking',
      distance: '58 km from Central Tirupati',
      timeToReach: '1.5 Hours by road',
      duration: '4 - 6 Hours (including trekking)',
      tickets: '₹50 per person entry fee',
      bestTime: 'September to January (Post-monsoon cascade)',
      desc: 'The highest waterfall in Andhra Pradesh, cascading down from a height of 270 feet. Nestled inside the dense Sri Venkateswara National Park, it features scenic forest trails, a canopy rope walk, and beautiful ecotourism bathing zones.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80'
    },
    {
      name: 'Chandragiri Historical Fort',
      category: 'Heritage & Archaeology',
      distance: '15 km from Central Tirupati',
      timeToReach: '30 mins by road',
      duration: '2 - 3 Hours',
      tickets: '₹20 Entry / ₹100 Sound & Light Show',
      bestTime: '4:00 PM to 8:00 PM (to catch the evening light show)',
      desc: 'An 11th-century fort built by the Yadava Raya dynasty, later serving as the fortified capital of the Vijayanagara Empire. Features outstanding Raja Mahal and Rani Mahal palaces showing classic Indo-Saracenic stone architecture.',
      image: 'https://images.unsplash.com/photo-1608958416710-df9827367df2?w=800&q=80'
    },
    {
      name: 'Kanipakam Varasiddhi Vinayaka Temple',
      category: 'Spiritual Center',
      distance: '75 km from Central Tirupati',
      timeToReach: '1.5 - 2 Hours by road',
      duration: '1.5 - 2 Hours',
      tickets: 'Free / ₹100 Special Entry ticket',
      bestTime: 'August/September (Ganesh Chaturthi celebrations)',
      desc: 'A highly sacred temple dedicated to a self-manifested (Swayambhu) idol of Lord Ganesha in a well. Miraculously, the water in the well is perennial and is distributed as sacred teertham. Known as the temple of truth.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80'
    },
    {
      name: 'Sri Padmavathi Ammavari Temple (Tiruchanur)',
      category: 'Spiritual Center',
      distance: '5 km from Central Tirupati',
      timeToReach: '15 mins by road',
      duration: '1 - 2 Hours',
      tickets: 'Free / ₹100 Special Entry',
      bestTime: 'Year-round (Best visited before ascending Tirumala)',
      desc: 'Dedicated to Goddess Padmavathi (Alamelu Manga), the divine consort of Lord Venkateswara. Vedic tradition holds that pilgrims must seek the blessings of the Goddess in Tiruchanur before entering the hilltop shrine of Tirumala.',
      image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=800&q=80'
    }
  ]

  const cabRates = [
    { name: 'Swift Dzire (Sedan)', capacity: '4 Passengers', rates: '₹2,500', outstation: '₹14 / km' },
    { name: 'Ertiga (Comfort MPV)', capacity: '6 Passengers', rates: '₹3,500', outstation: '₹17 / km' },
    { name: 'Innova Crysta (Premium SUV)', capacity: '6 Passengers', rates: '₹4,500', outstation: '₹21 / km' },
    { name: 'Tempo Traveller (Group Van)', capacity: '12-16 Passengers', rates: '₹8,000', outstation: '₹26 / km' }
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
            <span className="text-slate-200 font-semibold">Tirupati Tourist Places</span>
          </div>

          <div className="max-w-3xl">
            <Badge className="bg-orange-500 hover:bg-orange-600 text-white mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              Local Sightseeing Directory
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-orange-100 to-orange-300 bg-clip-text text-transparent">
              Tirupati Sightseeing & Best Tourist Places to Visit
            </h1>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Explore spectacular spiritual centers, heritage palaces, and lush waterfalls. Our curated guide lists travel times, tickets, and professional taxi rates starting from ₹14/km.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid tourist places */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge className="bg-orange-100 text-orange-600 border border-orange-200 mb-2 font-semibold">
            Featured Attractions
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Top Places to Visit Around Tirupati
          </h2>
          <p className="text-slate-500 mt-1">
            Plan your custom sightseeing itinerary with our comprehensive directory of heritage sites and local shrines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {touristPlaces.map((place, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-200 bg-white flex flex-col justify-between">
              <div>
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80'
                    }}
                  />
                  <Badge className="absolute top-4 right-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold">
                    {place.category}
                  </Badge>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold text-slate-800 leading-tight">
                    {place.name}
                  </CardTitle>
                  <CardDescription className="text-orange-600 font-semibold text-xs mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" /> {place.distance}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-3.5 pt-0">
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed border-b border-slate-100 pb-3">
                    {place.desc}
                  </p>

                  <div className="space-y-2 text-xs text-slate-600 font-medium">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Road Transit Time:</span>
                      <span className="text-slate-800 font-bold">{place.timeToReach}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Average Visit Time:</span>
                      <span className="text-slate-800 font-bold">{place.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Entry / Ticket Costs:</span>
                      <span className="text-slate-800 font-bold text-right max-w-[150px]">{place.tickets}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Best Season:</span>
                      <span className="text-slate-800 font-bold">{place.bestTime}</span>
                    </div>
                  </div>
                </CardContent>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-4">
                <a 
                  href={`https://wa.me/919014878313?text=${encodeURIComponent(`Hi G7 Travels, I would like to book a taxi tour to visit "${place.name}". Please provide availability and rates.`)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="outline" className="w-full border-slate-350 hover:bg-orange-500 hover:text-white text-slate-700 font-bold flex items-center justify-center gap-1.5">
                    Book Cab for this Spot <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Sightseeing Cabs Pricing Table */}
      <section className="container mx-auto max-w-6xl px-4 py-8 border-t border-slate-200">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.06),transparent_50%)] pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-orange-100 text-orange-600 font-semibold mb-3 border border-orange-200">
                Transparent Local Rates
              </Badge>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Hire Local Sightseeing Cabs at Fixed Prices
              </h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                Rent a car with a professional, local-language speaking chauffeur who knows all the temple schedules, parking locations, and pooja procedures. Clean vehicles, transparent pricing, and zero extra costs.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/book-ride">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-xl font-bold shadow-lg shadow-orange-500/20 transition-all flex items-center gap-2">
                    <Car className="w-5 h-5" /> Book a Sightseeing Ride
                  </Button>
                </Link>
                <a href="tel:+919866143321">
                  <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50 text-slate-700 font-bold px-6 py-6 rounded-xl flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Call Our Agent
                  </Button>
                </a>
              </div>
            </div>

            {/* Cab Rates Card */}
            <div className="space-y-4">
              <h3 className="font-bold text-slate-800 text-sm tracking-wider uppercase mb-2">
                Sightseeing Car Rental Price List
              </h3>
              <div className="grid gap-3.5">
                {cabRates.map((cab, idx) => (
                  <div key={idx} className="p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-orange-500/5 hover:border-orange-500/20 transition-all duration-200 flex justify-between items-center gap-4">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm md:text-base">{cab.name}</h4>
                      <p className="text-slate-500 text-xs mt-0.5">{cab.capacity}</p>
                      <span className="inline-block mt-2 text-[10px] bg-slate-200/60 text-slate-600 font-bold px-2 py-0.5 rounded-full uppercase">
                        Outstation: {cab.outstation}
                      </span>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-xs text-slate-400 font-semibold">1 Day Local Tour</div>
                      <div className="text-sm font-extrabold text-orange-600 mt-0.5">{cab.rates}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Restrictions Section */}
      <section className="container mx-auto max-w-4xl px-4 py-8">
        <Alert className="border-orange-500/20 bg-orange-500/5 text-slate-800">
          <Info className="h-5 w-5 text-orange-600 flex-shrink-0" />
          <AlertTitle className="text-orange-950 font-bold text-sm">
            Tirupati Travel Advice
          </AlertTitle>
          <AlertDescription className="text-slate-700 text-xs md:text-sm mt-1">
            Many major temples in the region (Tirumala Venkateswara and Srikalahasti) enforce strict cell phone restrictions and traditional Indian dress codes. Jeans, t-shirts, and short outfits are strictly prohibited for entering primary queue lines. Our drivers are trained to remind and guide you accordingly to prevent entry delays.
          </AlertDescription>
        </Alert>
      </section>

    </div>
  )
}
