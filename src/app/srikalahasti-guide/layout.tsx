import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Srikalahasti Shiva Temple: Rahu Ketu Pooja Timings & Cabs | G7 Travels',
  description: 'Ultimate guide to visiting the ancient Srikalahasti Shiva Temple. Get Rahu Ketu Pooja timings, ticket rates, dress code rules, and book premium roundtrip cabs from Tirupati.',
  keywords: [
    'Srikalahasti Temple guide',
    'Rahu Ketu Pooja timings',
    'Srikalahasti Rahu Ketu Pooja ticket cost',
    'Srikalahasti dress code rules',
    'Tirupati to Kalahasti taxi fare',
    'Srikalahasti pooja during Rahukaal',
    'G7 Travels Srikalahasti cab package'
  ],
  alternates: {
    canonical: 'https://g7travels.in/srikalahasti-guide'
  }
}

export default function SrikalahastiGuideLayout({
  children
}: {
  children: React.ReactNode
}) {
  const kalahastiSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What is the significance of Rahu Ketu Sarpa Dosha Pooja at Srikalahasti?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Srikalahasti Temple is globally renowned as a Rahu-Ketu parihara sthalam. Performing the Rahu Ketu Sarpa Dosha Pooja here nullifies the ill effects of astrological planetary positions. It is highly recommended to perform it during Rahukaal hours.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What are the ticket prices and booking procedures for the Pooja?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Pooja ticket rates range from ₹500, ₹750, ₹1,500, to ₹2,500. All tickets include the pooja samagri (materials) and can be purchased directly at the temple counters offline on arrival. No prior online booking is mandatory.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is there a strict dress code at Srikalahasti Temple?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, traditional Indian attire is strictly enforced for pilgrims performing the pooja. Men must wear dhoti/kurta-pyjamas, and women must wear sarees, half-sarees, or salwar-kameez with a dupatta. Western clothing like jeans, t-shirts, and shorts is strictly prohibited.'
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(kalahastiSchema) }}
      />
      {children}
    </>
  )
}
