import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vijayawada to Tirupati Taxi Service: Rates, Highway Routes & Tips | G7 Travels',
  description: 'Book flat-rate Vijayawada to Tirupati outstation cabs starting at ₹9,000 one-way. AC Sedans, Ertiga, and Innova Crysta with expert highway drivers and 24/7 client support.',
  keywords: [
    'Vijayawada to Tirupati taxi service',
    'Vijayawada to Tirupati car rental',
    'Vijayawada to Tirupati outstation cab',
    'Vijayawada to Tirupati taxi fare',
    'Vijayawada to Tirupati roundtrip taxi',
    'G7 Travels Vijayawada outstation'
  ],
  alternates: {
    canonical: 'https://g7travels.in/vijayawada-to-tirupati-taxi'
  }
}

export default function VijayawadaToTirupatiTaxiLayout({
  children
}: {
  children: React.ReactNode
}) {
  const vijayawadaSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What is the travel distance and duration from Vijayawada to Tirupati?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The distance between Vijayawada and Tirupati is approximately 380 km. Travel time is around 6 to 7 hours via the scenic Chennai-Kolkata Highway (NH 16) through Ongole and Nellore, then turning towards Naidupeta and Tirupati.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What are the taxi fares from Vijayawada to Tirupati?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The direct one-way outstation cab fare from Vijayawada to Tirupati starts at flat ₹9,000 for a comfortable Sedan (Swift Dzire/Toyota Etios) including tolls. SUV Ertiga starts at ₹12,000 one-way, and Luxury Innova Crysta starts at ₹14,000 one-way. Roundtrips start at ₹16,000.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Do your cabs operate round-the-clock?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, G7 Travels provides 24/7 outstation taxi services. You can schedule your pickup from Vijayawada at any hour of the day or night to reach your slotted darshan timings on time.'
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vijayawadaSchema) }}
      />
      {children}
    </>
  )
}
