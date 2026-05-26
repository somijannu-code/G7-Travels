'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Bell, LogIn, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)

  const notifications = [
    { id: 1, title: 'New promo available!', message: 'Use WELCOME10 for 10% off', time: '2 min ago', unread: true },
    { id: 2, title: 'Ride completed', message: 'Your ride to Tirumala was completed', time: '1 hour ago', unread: true },
    { id: 3, title: 'Wallet recharged', message: '₹500 added to your wallet', time: '3 hours ago', unread: false }
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Wrapped Logo and Title in a Link */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <img 
            src="/g7travels.png" 
            alt="G7 Travels Logo" 
            className="w-18 h-18 object-contain" 
          />
          <div>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent block">
              G7 Travels
            </span>
            <p className="text-xs text-muted-foreground hidden sm:block">Tirupati's Trusted Travel Partner</p>
          </div>
        </Link>

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

        {/* Right Side Actions (Mobile & Desktop) */}
        <div className="flex items-center gap-1 md:gap-3">
          
          {/* Notifications (Hidden on Mobile to save space) */}
          <div className="hidden md:block relative">
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

          {/* Login Button (Visible on both Mobile and Desktop) */}
          <Link href="/auth/login">
            <Button variant="ghost" size="sm" className="px-2 md:px-3">
              <LogIn className="w-4 h-4 mr-1 md:mr-2" />
              <span>Login</span>
            </Button>
          </Link>

          {/* Sign Up Button (Hidden on Mobile to save space) */}
          <Link href="/auth/register" className="hidden md:block">
            <Button size="sm" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white">
              Sign Up
            </Button>
          </Link>

          {/* Mobile Menu Button (Hidden on Desktop) */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden ml-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t bg-white overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              <Link href="/" className="text-sm font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link href="/book-ride" className="text-sm font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Book Ride</Link>
              <Link href="/rental-cars" className="text-sm font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Rental Cars</Link>
              <Link href="/services" className="text-sm font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              <Link href="/about" className="text-sm font-medium py-2" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
              <div className="h-px bg-border my-2" />
              <Link href="/auth/register" onClick={() => setMobileMenuOpen(false)}>
                <Button size="sm" className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white">
                  Create an Account
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
