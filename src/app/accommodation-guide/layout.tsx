import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tirumala Accommodation & Room Booking Guide | G7 Travels',
  description: 'Complete guide to booking rooms in Tirumala and Tirupati. Find CRO office offline room allocation tips, TTD online room booking guides, and private hotel recommendations near railway station.',
  keywords: [
    'Tirumala accommodation room booking',
    'CRO office Tirumala room booking',
    'TTD online lodging booking',
    'hotels in Tirupati near railway station',
    'CRO office timings offline room allocation',
    'best stay areas in Tirupati bus stand',
    'G7 Travels cottage pickup cab'
  ],
  alternates: {
    canonical: 'https://g7travels.in/accommodation-guide'
  }
}

export default function AccommodationGuideLayout({
  children
}: {
  children: React.ReactNode
}) {
  const accommodationSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'How do I obtain offline rooms in Tirumala on arrival?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Offline rooms can be booked on arrival in Tirumala at the Central Reception Office (CRO) counters located near the bus stand. The allotment is done 24/7 on a first-come, first-served basis. You must produce a valid Aadhaar card and your darshan ticket.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is the price range for TTD accommodations?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'TTD offers highly subsidized accommodations ranging from ₹50 (basic single room), ₹100 (standard non-AC room), to ₹500/₹1,000 (air-conditioned guest houses and suites) per day.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is it better to stay in Tirupati town or Tirumala hilltop?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'If you have early morning darshan or want a peaceful spiritual experience, staying in Tirumala hilltop is ideal. However, since hilltop rooms are highly limited, staying in Tirupati town (near railway station or bus stand) is recommended as there are numerous private hotels, and you can book a G7 Travels cab to climb up in just 45 minutes.'
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(accommodationSchema) }}
      />
      {children}
    </>
  )
}
