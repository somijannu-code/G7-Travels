import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chennai to Tirupati Taxi Service: Fares, Route & TTD Guidelines | G7 Travels',
  description: 'Book reliable Chennai to Tirupati one-way and roundtrip cabs starting at ₹4,500. Professional drivers, 24/7 airport pick-ups, clean cars, and expert assistance with TTD darshan guidelines.',
  keywords: [
    'Chennai to Tirupati taxi service',
    'Chennai to Tirupati car rental',
    'Chennai airport to Tirupati taxi',
    'Chennai to Tirupati cab fares',
    'Chennai to Tirupati roundtrip taxi',
    'G7 Travels outstation taxi'
  ],
  alternates: {
    canonical: 'https://g7travels.in/chennai-to-tirupati-taxi'
  }
}

export default function ChennaiToTirupatiTaxiLayout({
  children
}: {
  children: React.ReactNode
}) {
  const chennaiSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What is the taxi fare from Chennai to Tirupati?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The direct one-way taxi fare from Chennai to Tirupati with G7 Travels starts at flat ₹4,500 for a comfortable air-conditioned Sedan (Swift Dzire/Toyota Etios) including toll fees. Roundtrip packages start at ₹8,000.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Do you provide direct pick-ups from Chennai International Airport (MAA)?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, G7 Travels provides 24/7 premium chauffeur-driven cab pick-ups directly from Chennai International Airport (MAA) arrival gates. We track your flight and guarantee a clean car waiting on time.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is the travel time and distance between Chennai and Tirupati?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The distance between Chennai and Tirupati is approximately 150 km. Travel time is around 3.5 to 4 hours via the scenic Thiruvallur-Tiruttani national highway or the Tada route depending on city traffic.'
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(chennaiSchema) }}
      />
      {children}
    </>
  )
}
