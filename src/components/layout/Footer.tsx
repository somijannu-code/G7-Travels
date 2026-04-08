import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/g7travels.png" 
                alt="G7 Travels Logo" 
                className="w-16 h-16 object-contain rounded-xl bg-white p-1" 
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
                  <div>+91 90148 78313</div>
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
  )
}
