import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hyderabad to Tirupati Taxi Service: Fares, Routes & Travel Time | G7 Travels',
  description: 'Book premium Hyderabad to Tirupati cabs at competitive fixed rates starting at ₹12,000 one-way. Professional drivers, well-maintained sedans & SUVs, 24/7 service, and customized pilgrim sightseeing.',
  keywords: [
    'Hyderabad to Tirupati taxi service',
    'Hyderabad to Tirupati car rental',
    'Hyderabad to Tirupati outstation cab',
    'Hyderabad to Tirupati taxi fare',
    'Hyderabad to Tirupati roundtrip taxi',
    'G7 Travels Hyderabad outstation'
  ],
  alternates: {
    canonical: 'https://g7travels.in/hyderabad-to-tirupati-taxi'
  }
}

export default function HyderabadToTirupatiTaxiLayout({
  children
}: {
  children: React.ReactNode
}) {
  const hyderabadSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What is the travel distance and duration from Hyderabad to Tirupati?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The distance between Hyderabad and Tirupati is approximately 560 km. Travel time is around 8 to 10 hours via the scenic and well-maintained NH 44 (Hyderabad-Kurnool-Nandyal-Kadapa-Tirupati route) or via the Nagarjuna Sagar route.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What are the outstation cab fares from Hyderabad to Tirupati?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The direct one-way outstation cab fare from Hyderabad to Tirupati starts at flat ₹12,000 for a comfortable Sedan (Swift Dzire/Toyota Etios) including highway tolls. SUV (Ertiga) starts at ₹16,000 one-way, and Luxury Innova Crysta starts at ₹19,000 one-way. Roundtrip packages start at ₹22,000.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Do you offer customized sightseeing stops on the way?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, G7 Travels provides complete flexibility. On your outstation trip from Hyderabad, you can add custom pilgrimage or tourist stops like Ahobilam, Mahanandi, Yaganti, or Kadapa Devuni Kadapa on the way.'
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hyderabadSchema) }}
      />
      {children}
    </>
  )
}
