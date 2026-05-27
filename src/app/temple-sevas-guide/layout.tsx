import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TTD Arjitha Sevas & Kalyanotsavam Booking Guide | G7 Travels',
  description: 'Complete guide to TTD Arjitha Sevas. Find out how to book Kalyanotsavam, Suprabhatam, Sahasra Deepalankara Seva, online Lucky Dip processes, and reporting rules.',
  keywords: [
    'TTD Arjitha Sevas booking guide',
    'Tirumala Kalyanotsavam ticket price',
    'Sahasra Deepalankara Seva reporting time',
    'TTD online lucky dip monthly release',
    'Suprabhatam seva reporting gate',
    'Tirupati early morning seva cab drop',
    'G7 Travels temple seva taxi service'
  ],
  alternates: {
    canonical: 'https://g7travels.in/temple-sevas-guide'
  }
}

export default function TempleSevasGuideLayout({
  children
}: {
  children: React.ReactNode
}) {
  const sevasSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What is the TTD Online Lucky Dip process for Arjitha Sevas?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'TTD releases highly limited daily seva tickets (like Suprabhatam, Tomala, Archana) via a monthly Online Lucky Dip on the official website. Pilgrims must register with Aadhaar details. If selected, they receive an SMS and must complete payment within 3 days.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How much do Kalyanotsavam tickets cost and what is included?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Kalyanotsavam (Celestial Marriage Seva) tickets cost ₹1,000 and allow entry for two people. It is the most popular seva, offering excellent proximity, and includes one main Laddu prasadam, one upper cloth, and one blouse piece.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is the dress code for pilgrims attending Arjitha Sevas?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'A strict traditional Indian dress code is enforced. Men must wear a white or light-colored dhoti with an upper cloth (Uttareeyam) or simple kurta-pyjama. Women must wear a saree or salwar-kameez with a traditional dupatta (chunni). Western wear is strictly banned.'
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sevasSchema) }}
      />
      {children}
    </>
  )
}
