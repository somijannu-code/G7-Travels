import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Talakona Waterfalls Ecotourism & Trekking Guide | G7 Travels',
  description: 'Explore Talakona Waterfalls, the highest waterfall in Andhra Pradesh. Plan your ecotourism trip, find trekking trails, forest log cabins, canopy rope walks, and book direct roundtrip cabs from Tirupati.',
  keywords: [
    'Talakona Waterfalls guide',
    'Talakona ecotourism Tirupati',
    'highest waterfall in Andhra Pradesh',
    'Talakona trekking trails',
    'Talakona forest log cabin booking',
    'Tirupati to Talakona taxi fare',
    'Talakona canopy rope walk timings',
    'G7 Travels Talakona cab package'
  ],
  alternates: {
    canonical: 'https://g7travels.in/talakona-guide'
  }
}

export default function TalakonaGuideLayout({
  children
}: {
  children: React.ReactNode
}) {
  const talakonaSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'How far is Talakona Waterfalls from Tirupati and what is the best way to reach?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Talakona Waterfalls is located approximately 58 km from Tirupati. The most comfortable and efficient way to reach is by booking a private roundtrip cab with G7 Travels, which takes about 1.5 to 2 hours of scenic drive through the Nerabailu forest area.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What are the main ecotourism attractions at Talakona?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The key attractions at Talakona include the 270-foot waterfall (highest in AP), the thrilling Canopy Rope Walk, peaceful forest trekking trails, the ancient Siddheswara Swamy Temple, and biodiversity parks managed by the forest department.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is forest accommodation available at Talakona?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, the Andhra Pradesh Forest Department offers eco-friendly log huts, suites, and dormitory stays at the base of the Talakona hills. Advanced booking is recommended as slots are limited.'
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(talakonaSchema) }}
      />
      {children}
    </>
  )
}
