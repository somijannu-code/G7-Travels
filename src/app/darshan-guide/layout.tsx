import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tirumala Darshan Guide & TTD Ticket Booking Rules | G7 Travels',
  description: 'Official rules for booking Tirumala Darshan tickets. Read detailed guidelines for TTD ₹300 special entry tickets, free walk-in SSD tokens, NRI entry (Supadam), and senior citizen slots.',
  keywords: [
    'TTD 300 ticket booking',
    'Tirumala darshan rules',
    'free darshan Tirupati',
    'NRI darshan Supadam',
    'senior citizen darshan slots',
    'Tirupati temple guide',
    'Tirupati taxi package',
    'TTD official website booking',
    'Supadam NRI entry rules',
    'SSD tokens Tirupati'
  ],
  alternates: {
    canonical: 'https://g7travels.com/darshan-guide'
  }
}

export default function DarshanGuideLayout({
  children
}: {
  children: React.ReactNode
}) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'How do I book TTD Rs 300 Special Entry Darshan tickets online?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'TTD Special Entry Darshan (Rs 300) tickets can only be booked online through the official TTD website (ttdevasthanams.ap.gov.in). The slots are usually released 2 to 3 months in advance. Pilgrims must register using their mobile number and provide valid photo ID proofs (like Aadhaar, Passport, or Voter ID).'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can NRIs get direct walk-in darshan at Tirumala without prior booking?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, NRIs can avail of the walk-in darshan at the Supadam entrance in Tirumala. They must physically present their original passport, a valid Visa or OCI card, and an Indian immigration entry stamp showing arrival within the last 30 days. The ticket costs Rs 300 per person, payable at the Supadam counter.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Where are the offline free counter locations for Tirumala Slotted Sarva Darshan (SSD) tokens?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Free SSD tokens are issued daily at multiple offline counters in Tirupati: Srinivasam Complex (opposite RTC Bus Stand), Vishnu Nivasam (opposite Railway Station), and Bhadevi Complex (Alipiri). Tokens are limited and issued on a first-come, first-served basis, so it is recommended to visit early in the morning.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is the strict dress code enforced at Tirumala Temple?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'TTD enforces a strict traditional dress code. Men must wear a Dhoti (with upper cloth/Angavastram) or Kurta-Pyjama. Women must wear a Saree, Half-Saree, or a Churidar/Salwar Kameez with a Dupatta. Casual wear like jeans, t-shirts, shorts, and western outfits are strictly prohibited for entry.'
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
