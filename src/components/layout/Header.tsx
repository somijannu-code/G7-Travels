'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Bell, LogIn, Menu, X, ShieldAlert } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [showFraudStrip, setShowFraudStrip] = useState(false)

  useEffect(() => {
    const isDismissed = sessionStorage.getItem('g7_fraud_strip_dismissed')
    if (!isDismissed) {
      setShowFraudStrip(true)
    }
  }, [])

  const handleDismissStrip = () => {
    sessionStorage.setItem('g7_fraud_strip_dismissed', 'true')
    setShowFraudStrip(false)
  }

  const notifications = [
    { id: 1, title: 'New promo available!', message: 'Use WELCOME10 for 10% off', time: '2 min ago', unread: true },
    { id: 2, title: 'Ride completed', message: 'Your ride to Tirumala was completed', time: '1 hour ago', unread: true },
    { id: 3, title: 'Wallet recharged', message: '₹500 added to your wallet', time: '3 hours ago', unread: false }
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      
      {/* Dismissible Fraud Warning Banner */}
      <AnimatePresence>
        {showFraudStrip && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-gradient-to-r from-orange-600 via-orange-500 to-red-600 text-white text-xs font-semibold border-b border-orange-500/20"
          >
            <div className="container mx-auto px-4 py-2.5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 flex-grow justify-center text-center">
                <ShieldAlert className="h-4 w-4 text-orange-100 animate-pulse flex-shrink-0" />
                <span className="leading-relaxed">
                  <strong>Fraud Alert:</strong> Beware of fake online agents selling fake Tirumala Darshan tickets using G7 Travels' branding. We only provide authorized private transport services. Verify before making any payment.
                </span>
              </div>
              <button 
                onClick={handleDismissStrip}
                className="text-white hover:text-orange-200 transition-colors p-1 rounded-full hover:bg-white/10 flex-shrink-0"
                aria-label="Dismiss fraud alert"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
          
          {/* Guides Dropdown */}
          <div className="relative group">
            <button className="text-sm font-medium text-foreground/80 hover:text-orange-600 transition-colors flex items-center gap-1 py-2">
              Tirupati Guides
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180 text-muted-foreground group-hover:text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-0 w-64 bg-white border border-slate-200/80 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-1.5 flex flex-col gap-0.5">
                <Link href="/darshan-guide" className="px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-orange-500/10 hover:text-orange-600 rounded-lg transition-all">
                  Tirumala Darshan & Temple Guide
                </Link>
                <Link href="/tirupati-places" className="px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-orange-500/10 hover:text-orange-600 rounded-lg transition-all">
                  Tourist Places & Sightseeing
                </Link>
                <Link href="/travel-guide" className="px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-orange-500/10 hover:text-orange-600 rounded-lg transition-all">
                  Stay Areas & Local Transit Tips
                </Link>
                <Link href="/footpath-guide" className="px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-orange-500/10 hover:text-orange-600 rounded-lg transition-all border-t border-slate-100 mt-0.5 pt-2">
                  Tirumala Footpath Walking Guide
                </Link>
                <Link href="/talakona-guide" className="px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-orange-500/10 hover:text-orange-600 rounded-lg transition-all">
                  Talakona Waterfalls Ecotourism
                </Link>
                <Link href="/srikalahasti-guide" className="px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-orange-500/10 hover:text-orange-600 rounded-lg transition-all">
                  Srikalahasti Rahu-Ketu Pooja
                </Link>
                <Link href="/temple-combo-guide" className="px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-orange-500/10 hover:text-orange-600 rounded-lg transition-all">
                  Kanipakam & Vellore Combo Tour
                </Link>
                <Link href="/local-temples-guide" className="px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-orange-500/10 hover:text-orange-600 rounded-lg transition-all border-t border-slate-100 mt-0.5 pt-2">
                  Tirupati Local Temples Tour
                </Link>
                <Link href="/chandragiri-guide" className="px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-orange-500/10 hover:text-orange-600 rounded-lg transition-all">
                  Chandragiri Fort Heritage
                </Link>
              </div>
            </div>
          </div>

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
              <div className="h-px bg-slate-100 my-1" />
              <div className="pl-2 flex flex-col gap-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Local Travel Guides</span>
                <Link href="/darshan-guide" className="text-sm font-semibold py-1 text-slate-700 hover:text-orange-600" onClick={() => setMobileMenuOpen(false)}>Tirumala Darshan Guide</Link>
                <Link href="/tirupati-places" className="text-sm font-semibold py-1 text-slate-700 hover:text-orange-600" onClick={() => setMobileMenuOpen(false)}>Tourist Places Guide</Link>
                <Link href="/travel-guide" className="text-sm font-semibold py-1 text-slate-700 hover:text-orange-600" onClick={() => setMobileMenuOpen(false)}>Stay & Transit Guide</Link>
                <Link href="/footpath-guide" className="text-xs font-semibold py-1 text-slate-500 hover:text-orange-600 pl-2 border-l border-slate-100" onClick={() => setMobileMenuOpen(false)}>• Tirumala Footpath Guide</Link>
                <Link href="/talakona-guide" className="text-xs font-semibold py-1 text-slate-500 hover:text-orange-600 pl-2 border-l border-slate-100" onClick={() => setMobileMenuOpen(false)}>• Talakona Ecotourism</Link>
                <Link href="/srikalahasti-guide" className="text-xs font-semibold py-1 text-slate-500 hover:text-orange-600 pl-2 border-l border-slate-100" onClick={() => setMobileMenuOpen(false)}>• Srikalahasti Pooja Guide</Link>
                <Link href="/temple-combo-guide" className="text-xs font-semibold py-1 text-slate-500 hover:text-orange-600 pl-2 border-l border-slate-100" onClick={() => setMobileMenuOpen(false)}>• Kanipakam & Vellore Combo</Link>
                <Link href="/local-temples-guide" className="text-xs font-semibold py-1 text-slate-500 hover:text-orange-600 pl-2 border-l border-slate-100" onClick={() => setMobileMenuOpen(false)}>• Local Temples Tour</Link>
                <Link href="/chandragiri-guide" className="text-xs font-semibold py-1 text-slate-500 hover:text-orange-600 pl-2 border-l border-slate-100" onClick={() => setMobileMenuOpen(false)}>• Chandragiri Fort Heritage</Link>
              </div>
              <div className="h-px bg-slate-100 my-1" />
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
