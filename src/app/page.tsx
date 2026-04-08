'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Clock, Car, Shield, Star, Users, Zap, Headphones, Phone, Mail, Facebook, Twitter, Instagram, Youtube, Menu, X, LogIn, Wallet, History, Settings, Navigation, Bell, Gift, TrendingUp, Award, Flame } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { RideBookingWithMap } from '@/components/booking/RideBookingWithMap'
import { AdvancedRideBooking } from '@/components/booking/AdvancedRideBooking'
import { RideTracking } from '@/components/booking/RideTracking'
import { RideHistory } from '@/components/booking/RideHistory'
import { VehicleComparison } from '@/components/booking/VehicleComparison'

export default function G7TravelsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('book')
  const [showNotifications, setShowNotifications] = useState(false)

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
    'Tirupati City', 'Tirumala', 'Chandragiri', 'Sricity',
    'Renigunta Airport', 'Tirupati Railway Station', 'Bus Stands', 'Major Temples'
  ]

  const vehicleTypes = [
    { name: 'Hatchback', capacity: '4', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', price: '₹20' },
    { name: 'Sedan', capacity: '4', image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&q=80', price: '₹20' },
    { name: 'SUV', capacity: '6', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80', price: '₹20' },
    { name: 'Premium Sedan', capacity: '4', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80', price: '₹20' },
    { name: 'Tempo Traveller', capacity: '12', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80', price: '₹20' },
    { name: 'Minibus', capacity: '20', image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80', price: '₹20' }
  ]

  const notifications = [
    { id: 1, title: 'New promo available!', message: 'Use WELCOME10 for 10% off', time: '2 min ago', unread: true },
    { id: 2, title: 'Ride completed', message: 'Your ride to Tirumala was completed', time: '1 hour ago', unread: true },
    { id: 3, title: 'Wallet recharged', message: '₹500 added to your wallet', time: '3 hours ago', unread: false }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Added Logo Here */}
            <img 
              src="/g7travels.png" 
              alt="G7 Travels Logo" 
              className="w-20 h-20 object-contain" 
            />
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                G7 Travels
              </h1>
              <p className="text-xs text-muted-foreground">Tirupati's Trusted Travel Partner</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-foreground/80 hover:text-orange-600 transition-colors">
              Home
            </Link>
            <Link href="/book-ride" className="text-sm font-medium text-foreground/80 hover:text-orange-600 transition-colors">
              Book Ride
            </Link>
            <Link href="/rental-cars" className="text-sm font-medium text-foreground/80 hover:text-orange-600 transition-colors">
              Rental Cars
            </Link>
            <Link href="/services" className="text-sm font-medium text-foreground/80 hover:text-orange-600 transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground/80 hover:text-orange-600 transition-colors">
              About Us
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {/* Notifications */}
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <Bell className="h-5 w-5" />
                {notifications.filter(n => n.unread).length > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                )}
              </Button>
              <AnimatePresence>
                {showNotifications && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 top-12 w-80 bg-white border rounded-lg shadow-lg overflow-hidden z-50"
                  >
                    <div className="p-3 border-b bg-muted/50">
                      <h4 className="font-semibold text-sm">Notifications</h4>
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                      {notifications.map((notif) => (
                        <div
                          key={notif.id}
                          className={`p-3 border-b last:border-b-0 hover:bg-muted/50 cursor-pointer ${notif.unread ? 'bg-orange-50/50' : ''}`}
                        >
                          <p className="font-medium text-sm">{notif.title}</p>
                          <p className="text-xs text-muted-foreground mt-1">{notif.message}</p>
                          <p className="text-xs text-muted-foreground mt-1">{notif.time}</p>
                        </div>
                      ))}
                    </div>
                    <div className="p-2 border-t">
                      <Button variant="ghost" size="sm" className="w-full">
                        View All
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/auth/login">
              <Button variant="ghost" size="sm">
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button size="sm" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t bg-white"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
                <Link href="/" className="text-sm font-medium py-2">Home</Link>
                <Link href="/book-ride" className="text-sm font-medium py-2">Book Ride</Link>
                <Link href="/rental-cars" className="text-sm font-medium py-2">Rental Cars</Link>
                <Link href="/services" className="text-sm font-medium py-2">Services</Link>
                <Link href="/about" className="text-sm font-medium py-2">About Us</Link>
                <div className="h-px bg-border my-2" />
                <Link href="/auth/login">
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <LogIn className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                </Link>
                <Link href="/auth/register">
                  <Button size="sm" className="w-full bg-gradient-to-r from-orange-500 to-red-600">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section with Tabs */}
      <section className="relative overflow-hidden py-12 md:py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-white to-red-100" />
        <div className="container mx-auto px-4 relative">
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
            <Card className="shadow-2xl border-0 overflow-hidden">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 p-1 bg-muted/50 h-auto">
                  <TabsTrigger value="book" className="data-[state=active]:bg-white py-3">
                    <Car className="w-4 h-4 mr-2" />
                    Quick Book
                  </TabsTrigger>
                  <TabsTrigger value="advanced" className="data-[state=active]:bg-white py-3">
                    <Settings className="w-4 h-4 mr-2" />
                    Advanced
                  </TabsTrigger>
                  <TabsTrigger value="tracking" className="data-[state=active]:bg-white py-3">
                    <Navigation className="w-4 h-4 mr-2" />
                    Track Ride
                  </TabsTrigger>
                  <TabsTrigger value="history" className="data-[state=active]:bg-white py-3">
                    <History className="w-4 h-4 mr-2" />
                    History
                  </TabsTrigger>
                  <TabsTrigger value="compare" className="data-[state=active]:bg-white py-3">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Compare
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="book" className="p-6">
                  <RideBookingWithMap />
                </TabsContent>

                <TabsContent value="advanced" className="p-6">
                  <AdvancedRideBooking />
                </TabsContent>

                <TabsContent value="tracking" className="p-6">
                  <RideTracking />
                </TabsContent>

                <TabsContent value="history" className="p-6">
                  <RideHistory />
                </TabsContent>

                <TabsContent value="compare" className="p-6">
                  <VehicleComparison />
                </TabsContent>
              </Tabs>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Advanced Features Grid */}
      <section className="py-16 bg-white">
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
      <section className="py-16 bg-gradient-to-br from-slate-50 to-orange-50/50">
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
      <section className="py-16 bg-white">
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
      <section className="py-16 bg-gradient-to-br from-slate-50 to-orange-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Vehicle Fleet</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our wide range of well-maintained vehicles at ₹20/km
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
                      {vehicle.price}
                      <span className="text-sm text-muted-foreground font-normal">/km</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Code Banner */}
      <section className="py-12 bg-gradient-to-r from-orange-600 to-red-600 text-white">
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
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience the Future of Travel?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Book now with advanced features like ride scheduling, multiple stops, real-time tracking, and more!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-slate-900 hover:bg-orange-50"
              onClick={() => setActiveTab('book')}
            >
              <Car className="w-5 h-5 mr-2" />
              Quick Book
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10"
              onClick={() => setActiveTab('advanced')}
            >
              <Settings className="w-5 h-5 mr-2" />
              Advanced Booking
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                {/* Added Logo Here */}
                <img 
                  src="/g7travels.png" 
                  alt="G7 Travels Logo" 
                  className="w-30 h-30 object-contain rounded-xl bg-white" 
                />
                <div>
                  <h4 className="font-bold text-lg">G7 Travels</h4>
                  <p className="text-xs text-slate-400">Tirupati's Trusted Travel Partner</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                Your reliable travel partner for on-demand rides and car rentals in Tirupati and surrounding areas.
              </p>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white hover:bg-slate-800">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white hover:bg-slate-800">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white hover:bg-slate-800">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white hover:bg-slate-800">
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/book-ride" className="hover:text-orange-400 transition-colors">Book a Ride</Link></li>
                <li><Link href="/rental-cars" className="hover:text-orange-400 transition-colors">Rental Cars</Link></li>
                <li><Link href="/pilgrimage-packages" className="hover:text-orange-400 transition-colors">Pilgrimage Packages</Link></li>
                <li><Link href="/airport-transfers" className="hover:text-orange-400 transition-colors">Airport Transfers</Link></li>
                <li><Link href="/outstation" className="hover:text-orange-400 transition-colors">Outstation</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/help-center" className="hover:text-orange-400 transition-colors">Help Center</Link></li>
                <li><Link href="/safety" className="hover:text-orange-400 transition-colors">Safety</Link></li>
                <li><Link href="/faqs" className="hover:text-orange-400 transition-colors">FAQs</Link></li>
                <li><Link href="/contact" className="hover:text-orange-400 transition-colors">Contact Us</Link></li>
                <li><Link href="/partner-with-us" className="hover:text-orange-400 transition-colors">Partner with Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-white">24/7 Support</div>
                    <div>+91 98765 43210</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>support@g7travels.com</div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-white">Head Office</div>
                    <div>123 Tirumala Road, Tirupati, Andhra Pradesh - 517501</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © 2024 G7 Travels. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <Link href="/privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-orange-400 transition-colors">Terms of Service</Link>
              <Link href="/refund-policy" className="hover:text-orange-400 transition-colors">Refund Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
