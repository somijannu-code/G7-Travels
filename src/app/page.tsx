'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Clock, Car, Shield, Users, Zap, Headphones, History, Settings, Navigation, Bell, Gift, TrendingUp, Award, Flame, Wallet, Map } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { RideBookingWithMap } from '@/components/booking/RideBookingWithMap'
import { AdvancedRideBooking } from '@/components/booking/AdvancedRideBooking'
import { RideTracking } from '@/components/booking/RideTracking'
import { RideHistory } from '@/components/booking/RideHistory'
import { VehicleComparison } from '@/components/booking/VehicleComparison'

export default function G7TravelsPage() {
  const [activeTab, setActiveTab] = useState('book')

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Safe & Secure',
      description: 'Verified drivers, GPS tracking, SOS button, and 24/7 support'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Instant Booking',
      description: 'Book rides in seconds with our quick booking system'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Local Experts',
      description: 'Drivers familiar with Tirupati routes, temples, and pilgrimage sites'
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: 'Best Prices',
      description: '₹20/km for all vehicles, transparent pricing, multiple payment options'
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: 'Variety of Vehicles',
      description: 'From hatchbacks to minibuses, choose what fits your needs'
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer service and emergency assistance'
    }
  ]

  const advancedFeatures = [
    { icon: <Calendar className="w-5 h-5" />, title: 'Schedule Rides', desc: 'Book rides for later with date & time selection' },
    { icon: <Navigation className="w-5 h-5" />, title: 'Multiple Stops', desc: 'Add up to 3 stops for your journey' },
    { icon: <Gift className="w-5 h-5" />, title: 'Promo Codes', desc: 'Apply promo codes for discounts' },
    { icon: <Bell className="w-5 h-5" />, title: 'Real-time Tracking', desc: 'Track your ride live with ETA updates' },
    { icon: <History className="w-5 h-5" />, title: 'Ride History', desc: 'View all your past rides with detailed reports' },
    { icon: <TrendingUp className="w-5 h-5" />, title: 'Compare Vehicles', desc: 'Compare features and prices side by side' },
    { icon: <Award className="w-5 h-5" />, title: 'Loyalty Rewards', desc: 'Earn points on every ride' },
    { icon: <Flame className="w-5 h-5" />, title: 'Ride Preferences', desc: 'AC, music, driver preferences & more' }
  ]

  const serviceAreas = [
    'Tirupati City', 'Tirumala', 'Chandragiri', 'Sricity', 'Srikalahasti Temple', 
    'Renigunta Airport', 'Tirupati Railway Station', 'Bus Stands', 'Major Temples'
  ]

  const vehicleTypes = [
    { name: 'Toyota Etios', capacity: '4', image: 'https://media.zigcdn.com/media/content/2014/Jul/toyota-etios-xclusive-pic-photo-image-04072014-m1_560x420.jpg?tr=w-420', price: '₹14' },
    { name: 'Swift Dzire', capacity: '4', image: 'https://www.ecorentacar.com/wp-content/uploads/2022/11/01-4.jpg', price: '₹16' },
    { name: 'Maruti Suzuki Ertiga', capacity: '6', image: 'https://blogs.gomechanic.com/wp-content/uploads/2020/04/How-the-Maruti-Suzuki-Ertiga-dominates-the-MPV-segment-01.jpg', price: '₹19' },
    { name: 'Toyota Innova', capacity: '6', image: 'https://images.financialexpressdigital.com/2021/07/toyota-Innova-crysta-2021.jpg', price: '₹20' },
    { name: 'Toyota Innova Crysta', capacity: '6', image: 'https://i.ytimg.com/vi/c_KKvkl1unE/sddefault.jpg', price: '₹22' },
    { name: 'Traveller Tempo (12s)', capacity: '12', image: 'https://www.simplytrip.in/articles/wp-content/uploads/2025/10/12-seater-tempo.jpg.webp', price: '₹28' },
    { name: 'Traveller Tempo (16s)', capacity: '16', image: 'https://tejas-travels-prod.s3.ap-south-1.amazonaws.com/513922250_9969870213090517_5965926465895803421_n.jpg', price: '₹30' },
    { name: 'All Buses (22-50s)', capacity: '22-50', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80', price: 'Custom' }
  ]

  return (
    <>
      {/* Hero Section with Tabs */}
      <section className="relative py-12 md:py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-white to-red-100 opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">
                <MapPin className="w-3 h-3 mr-1" />
                Serving Tirupati & Surrounding Areas
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Your Trusted Travel Partner in{' '}
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Tirupati
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Book rides with advanced features including scheduling, multiple stops, real-time tracking, and more!
              </p>
            </motion.div>
          </div>

          {/* Main Booking Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <Card className="shadow-2xl border-0">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                {/* Updated TabsList for mobile wrapping */}
                <TabsList className="flex flex-wrap w-full h-auto p-1 bg-muted/50 justify-start sm:justify-center">
                  <TabsTrigger value="book" className="flex-1 min-w-[120px] data-[state=active]:bg-white py-3">
                    <Car className="w-4 h-4 mr-2" />
                    Quick Book
                  </TabsTrigger>
                  <TabsTrigger value="advanced" className="flex-1 min-w-[120px] data-[state=active]:bg-white py-3">
                    <Settings className="w-4 h-4 mr-2" />
                    Advanced
                  </TabsTrigger>
                  <TabsTrigger value="tracking" className="flex-1 min-w-[120px] data-[state=active]:bg-white py-3">
                    <Navigation className="w-4 h-4 mr-2" />
                    Track Ride
                  </TabsTrigger>
                  <TabsTrigger value="history" className="flex-1 min-w-[120px] data-[state=active]:bg-white py-3">
                    <History className="w-4 h-4 mr-2" />
                    History
                  </TabsTrigger>
                  <TabsTrigger value="compare" className="flex-1 min-w-[120px] data-[state=active]:bg-white py-3">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Compare
                  </TabsTrigger>
                </TabsList>

                <div className="mt-4">
                  <TabsContent value="book" className="p-4 sm:p-6 mt-0">
                    <RideBookingWithMap />
                  </TabsContent>

                  <TabsContent value="advanced" className="p-4 sm:p-6 mt-0">
                    <AdvancedRideBooking />
                  </TabsContent>

                  <TabsContent value="tracking" className="p-4 sm:p-6 mt-0">
                    <RideTracking />
                  </TabsContent>

                  <TabsContent value="history" className="p-4 sm:p-6 mt-0">
                    <RideHistory />
                  </TabsContent>

                  <TabsContent value="compare" className="p-4 sm:p-6 mt-0">
                    <VehicleComparison />
                  </TabsContent>
                </div>
              </Tabs>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Advanced Features Grid */}
      <section className="relative py-16 bg-white z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Advanced Features</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the next level of ride booking with our advanced features
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {advancedFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 border-2 hover:border-orange-200">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.desc}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="relative py-16 bg-gradient-to-br from-slate-50 to-orange-50/50 z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Service Areas</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We cover all major locations in and around Tirupati for your convenience
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Badge variant="outline" className="w-full justify-center py-3 text-sm border-2 hover:border-orange-500 hover:text-orange-600 cursor-pointer transition-all">
                  <MapPin className="w-3 h-3 mr-2" />
                  {area}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-16 bg-white z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Why Choose G7 Travels?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing you with the best travel experience in Tirupati
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-2 hover:border-orange-200">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Fleet */}
      <section className="relative py-16 bg-gradient-to-br from-slate-50 to-orange-50/50 z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Vehicle Fleet</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our wide range of well-maintained vehicles starting at ₹14/km
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {vehicleTypes.map((vehicle, index) => (
              <motion.div
                key={vehicle.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="text-center hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="mb-2 rounded-lg overflow-hidden bg-slate-100">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardTitle className="text-lg">{vehicle.name}</CardTitle>
                    <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                      <Users className="w-3 h-3" />
                      {vehicle.capacity} Seats
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-orange-600">
                      {vehicle.price === 'Custom' ? (
                        <span className="text-xl">Price on Request</span>
                      ) : (
                        <>
                          {vehicle.price}
                          <span className="text-sm text-muted-foreground font-normal">/km</span>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Code Banner */}
      <section className="relative py-12 bg-gradient-to-r from-orange-600 to-red-600 text-white z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">🎉 Special Offers Available!</h3>
              <p className="opacity-90">Use promo codes to get discounts on your rides</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <Badge variant="secondary" className="px-4 py-2 text-sm">WELCOME10 - 10% OFF</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">FLAT50 - ₹50 OFF</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">TIRUPATI20 - 20% OFF</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white z-10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Ready to Experience the Future of Travel?</h3>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Book now with advanced features like ride scheduling, multiple stops, real-time tracking, and more!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 flex-wrap">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white border-0 shadow-xl shadow-orange-500/30 h-16 px-10 text-lg rounded-full font-semibold w-full sm:w-auto"
                onClick={() => {
                  setActiveTab('book')
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <Car className="w-6 h-6 mr-3" />
                Quick Book
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="bg-white text-orange-600 border-0 hover:bg-orange-50 hover:text-orange-700 shadow-xl h-16 px-10 text-lg rounded-full font-semibold w-full sm:w-auto"
                onClick={() => {
                  setActiveTab('advanced')
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <Settings className="w-6 h-6 mr-3 text-orange-500" />
                Advanced Booking
              </Button>
            </motion.div>

            {/* Added Package Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/pilgrimage-packages">
                <Button
                  variant="outline"
                  className="bg-white text-orange-600 border-0 hover:bg-orange-50 hover:text-orange-700 shadow-xl h-16 px-10 text-lg rounded-full font-semibold w-full sm:w-auto"
                >
                  <Map className="w-6 h-6 mr-3 text-orange-500" />
                  Pilgrimage Packages
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
