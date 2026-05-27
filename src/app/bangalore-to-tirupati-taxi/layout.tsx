import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bangalore to Tirupati Taxi: Fares, Scenic Highways & TTD Guide | G7 Travels',
  description: 'Hire premium Bangalore to Tirupati cabs at flat rates starting at ₹8,000. Professional drivers, well-maintained sedans & SUVs (Ertiga/Innova), 24/7 service, and expert pilgrim guidelines.',
  keywords: [
    'Bangalore to Tirupati taxi service',
    'Bangalore to Tirupati car rental',
    'Bangalore to Tirumala cab fares',
    'Kempegowda airport to Tirupati taxi',
    'Bangalore to Tirupati roundtrip taxi',
    'G7 Travels outstation'
  ],
  alternates: {
    canonical: 'https://g7travels.in/bangalore-to-tirupati-taxi'
  }
}

export default function BangaloreToTirupatiTaxiLayout({
  children
}: {
  children: React.ReactNode
}) {
  const bangaloreSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What is the travel distance and duration from Bangalore to Tirupati?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The distance between Bangalore and Tirupati is approximately 250 km. Travel time is around 5 to 6 hours via the scenic Bangalore-Kolar-Mulbagal-Chittoor national highway (NH 75 & NH 69).'
        }
      },
      {
        '@type': 'Question',
        'name': 'What are the cab fares from Bangalore to Tirupati?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The direct one-way outstation cab fare from Bangalore to Tirupati starts at flat ₹8,000 for a comfortable Sedan (Swift Dzire/Toyota Etios) including highway tolls. Roundtrip packages start at ₹15,000.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Do you pick up from Kempegowda International Airport (BLR)?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, G7 Travels provides 24/7 direct pick-ups from Kempegowda International Airport (BLR) in Bangalore for a smooth, direct transit to Tirupati and Tirumala hilltop without city traffic.'
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bangaloreSchema) }}
      />
      {children}
    </>
  )
}
