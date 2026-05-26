import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tirupati Travel Guide: Stay Areas, Packing Tips & Local Transit | G7 Travels',
  description: 'Complete Tirupati travel guide. Discover the best areas to stay in Tirupati near the railway station or RTC bus stand, local transport rules, and packing advisories.',
  keywords: [
    'where to stay in Tirupati',
    'best budget hotels in Tirupati',
    'Tirupati to Tirumala distance',
    'APSRTC free buses Tirupati',
    'Tirupati packing tips',
    'Tirupati railway station cabs',
    'Tirupati tourist stay zone',
    'G7 Travels travel guide'
  ],
  alternates: {
    canonical: 'https://g7travels.com/travel-guide'
  }
}

export default function TirupatiTravelGuideLayout({
  children
}: {
  children: React.ReactNode
}) {
  const guideSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Which is the best area to stay in Tirupati for temple pilgrims?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The best areas to stay in Tirupati are near the Tirupati Central Railway Station or the RTC Bus Stand (Srinivasam Complex / Vishnu Nivasam zones) as they offer quick transit, budget-friendly and premium hotel options, and easy access to both public buses and private car rentals. Staying on the Alipiri Bypass road is also highly recommended for peace and scenic hill views.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is the distance and travel time from Tirupati to Tirumala hilltop by road?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The distance between Tirupati and Tirumala hilltop is approximately 22 km. Travel time by road is around 45 to 60 minutes via the well-maintained ghat road. Private taxis, RTC buses, and free pilgrim transport are available 24/7, subject to toll-gate verification schedules.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Are there free local transport systems available for pilgrims in Tirumala?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, TTD operates free local shuttle buses named "Dharmaratham" that constantly run throughout the Tirumala hilltop. These buses link all major cottages, guest houses, locker centers, tonsure halls (Kalyana Katta), and the main temple entrance for free.'
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guideSchema) }}
      />
      {children}
    </>
  )
}
