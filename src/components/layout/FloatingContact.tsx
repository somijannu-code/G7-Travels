'use client'

import { Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function FloatingContact() {
  const phoneNumber = '+919014878313'
  const whatsappUrl = `https://wa.me/919014878313?text=${encodeURIComponent("Hi G7 Travels, I would like to inquire about a ride.")}`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.9 }}
      >
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg hover:bg-slate-50 transition-colors shadow-black/20 overflow-hidden p-1 border-2 border-transparent hover:border-green-500"
          aria-label="Contact on WhatsApp"
        >
          <img 
            src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-whatsapp-icon-png-image_3584845.jpg" 
            alt="WhatsApp" 
            className="w-full h-full object-cover rounded-full"
          />
        </Link>
      </motion.div>

      {/* Phone Call Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.9 }}
      >
        <Link
          href={`tel:${phoneNumber}`}
          className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full shadow-lg hover:from-orange-600 hover:to-red-700 transition-colors shadow-black/20"
          aria-label="Call Us"
        >
          <Phone className="w-7 h-7" />
        </Link>
      </motion.div>
    </div>
  )
}
