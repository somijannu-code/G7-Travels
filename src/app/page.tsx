'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Clock, Car, Shield, Users, Zap, Headphones, History, Settings, Navigation, Bell, Gift, TrendingUp, Award, Flame, Wallet } from 'lucide-react'
import { motion } from 'framer-motion'
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
    { name: 'Hatchback', capacity: '4', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', price: '₹20' },
    { name: 'Sedan', capacity: '4', image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&q=80', price: '₹30' },
    { name: 'SUV', capacity: '6', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80', price: '₹40' },
    { name: 'Premium Sedan', capacity: '4', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', price: '₹60' },
    { name: 'Tempo Traveller', capacity: '12', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', price: '₹80' },
    { name: 'Minibus', capacity: '20', image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80', price: '₹100' }
  ]

  return (
    <>
      {/* Premium Animated Divine Background */}
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-50">
        {/* Divine Aura Glow */}
        <motion.div 
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-500/20 rounded-full blur-[120px]" 
        />
        
        {/* Animated God Image */}
        <motion.div
          animate={{
            scale: [1.05, 1.15, 1.05],
            y: [0, -15, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-[url('/tirupati-god.png')] bg-cover bg-top bg-no-repeat opacity-[0.25] mix-blend-multiply"
        />
        
        {/* Premium Frosted Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-slate-50/95 backdrop-blur-[3px]" />
      </div>

      {/* Hero Section with Tabs */}
      <section className="relative py-12 md:py-16">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-orange-100/80 backdrop-blur-md text-orange-700 hover:bg-orange-200 border border-orange-200">
                <MapPin className="w-3 h-3 mr-1" />
                Serving Tirupati & Surrounding Areas
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-sm">
                Your Trusted Travel Partner in{' '}
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Tirupati
                </span>
              </h2>
              <p className="text-lg text-slate-700 font-medium max-w-2xl mx-auto drop-shadow-sm">
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
            <Card className="shadow-2xl border border-white/40 bg-white/70 backdrop-blur-xl">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="flex flex-wrap w-full h-auto p-1 bg-white/50 backdrop-blur-md justify-start sm:justify-center border-b border-white/40 rounded-t-xl">
                  <TabsTrigger value="book" className="flex-1 min-w-[120px] data-[state=active]:bg-white data-[state=active]:shadow-sm py-3">
                    <Car className="w-4 h-4 mr-2" />
                    Quick Book
                  </TabsTrigger>
                  <TabsTrigger value="advanced" className="flex-1 min-w-[120px] data-[state=active]:bg-white data-[state=active]:shadow-sm py-3">
                    <Settings className="w-4 h-4 mr-2" />
                    Advanced
                  </TabsTrigger>
                  <TabsTrigger value="tracking" className="flex-1 min-w-[120px] data-[state=active]:bg-white data-[state=active]:shadow-sm py-3">
                    <Navigation className="w-4 h-4 mr-2" />
                    Track Ride
                  </TabsTrigger>
                  <TabsTrigger value="history" className="flex-1 min-w-[120px] data-[state=active]:bg-white data-[state=active]:shadow-sm py-3">
                    <History className="w-4 h-4 mr-2" />
                    History
                  </TabsTrigger>
                  <TabsTrigger value="compare" className="flex-1 min-w-[120px] data-[state=active]:bg-white data-[state=active]:shadow-sm py-3">
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
      <section className="relative py-16 bg-white/60 backdrop-blur-lg border-y border-white/40 z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Advanced Features</h3>
            <p className="text-slate-700 font-medium max-w-2xl mx-auto">
              Experience the next level of ride booking with our advanced features
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {advancedFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-md hover:shadow-xl transition-all hover:-translate-y-1 border border-white/60 hover:border-orange-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white mb-4 shadow-md">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base font-medium text-slate-600">{feature.desc}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="relative py-16 bg-orange-50/40 backdrop-blur-lg z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Service Areas</h3>
            <p className="text-slate-700 font-medium max-w-2xl mx-auto">
              We cover all major locations in and around Tirupati for your convenience
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Badge variant="outline" className="w-full bg-white/60 backdrop-blur-md justify-center py-3 text-sm border-2 border-white hover:border-orange-500 hover:text-orange-600 hover:bg-white cursor-pointer transition-all shadow-sm">
                  <MapPin className="w-3 h-3 mr-2" />
                  {area}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-16 bg-white/60 backdrop-blur-lg border-y border-white/40 z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Why Choose G7 Travels?</h3>
            <p className="text-slate-700 font-medium max-w-2xl mx-auto">
              We're committed to providing you with the best travel experience in Tirupati
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-md hover:shadow-xl transition-shadow border border-white/60 hover:border-orange-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white mb-4 shadow-md">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base font-medium text-slate-600">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Fleet */}
      <section className="relative py-16 bg-orange-50/40 backdrop-blur-lg z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Vehicle Fleet</h3>
            <p className="text-slate-700 font-medium max-w-2xl mx-auto">
              Choose from our wide range of well-maintained vehicles at ₹20/km
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {vehicleTypes.map((vehicle, index) => (
              <motion.div
                key={vehicle.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="text-center bg-white/80 backdrop-blur-md hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden border border-white/60">
                  <CardHeader className="pb-3">
                    <div className="mb-2 rounded-lg overflow-hidden bg-slate-100">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardTitle className="text-lg">{vehicle.name}</CardTitle>
                    <div className="flex items-center justify-center gap-1 text-sm text-slate-600 font-medium">
                      <Users className="w-3 h-3" />
                      {vehicle.capacity} Seats
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-orange-600">
                      {vehicle.price}
                      <span className="text-sm text-slate-500 font-normal">/km</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Code Banner */}
      <section className="relative py-12 bg-gradient-to-r from-orange-600/90 to-red-600/90 backdrop-blur-lg text-white border-y border-white/20 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">🎉 Special Offers Available!</h3>
              <p className="opacity-90">Use promo codes to get discounts on your rides</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <Badge variant="secondary" className="px-4 py-2 text-sm bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border-0">WELCOME10 - 10% OFF</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border-0">FLAT50 - ₹50 OFF</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border-0">TIRUPATI20 - 20% OFF</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-lg text-white z-10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Ready to Experience the Future of Travel?</h3>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Book now with advanced features like ride scheduling, multiple stops, real-time tracking, and more!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
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
                className="bg-white/10 backdrop-blur-md text-white border border-white/30 hover:bg-white/20 hover:text-white shadow-xl h-16 px-10 text-lg rounded-full font-semibold w-full sm:w-auto"
                onClick={() => {
                  setActiveTab('advanced')
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <Settings className="w-6 h-6 mr-3" />
                Advanced Booking
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
