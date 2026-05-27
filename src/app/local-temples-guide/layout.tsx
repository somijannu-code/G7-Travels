import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tirupati Local Temples Tour Guide: Tiruchanur, Govindaraja & Kapila Theertham | G7 Travels',
  description: 'Ultimate guide to visiting local temples in Tirupati. Find timings, pooja ticket rates, attire rules, and book direct local tourist cabs for Tiruchanur Padmavathi Temple, Govindaraja Swamy, Kapila Theertham, and Srinivasa Mangapuram.',
  keywords: [
    'Tirupati local temples tour guide',
    'Tiruchanur Padmavathi temple timings',
    'Govindaraja Swamy temple Tirupati',
    'Kapila Theertham waterfall temple',
    'Srinivasa Mangapuram kalyana venkateswara',
    'Tirupati local sightseeing cab fare',
    'Tirupati half day temple tour cab',
    'G7 Travels local temple packages'
  ],
  alternates: {
    canonical: 'https://g7travels.in/local-temples-guide'
  }
}

export default function LocalTemplesGuideLayout({
  children
}: {
  children: React.ReactNode
}) {
  const localTemplesSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Why is visiting Tiruchanur Padmavathi Ammavari Temple considered mandatory?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'According to Hindu traditions, a pilgrimage to Tirupati Balaji is considered complete only after visiting His consort Goddess Padmavathi Devi at Tiruchanur. Pilgrims traditionally visit here before or immediately after climbing Tirumala hills.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is the standard route and duration for a local temples cab tour in Tirupati?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'A standard Tirupati local temple tour covers Tiruchanur (Padmavathi Temple), Kapilatheertham (Shiva Temple & waterfall), Govindaraja Swamy Temple, and Srinivasa Mangapuram. A half-day tour takes about 4 to 5 hours, while a full-day tour takes 7 to 8 hours.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Are there entry ticket charges at local temples?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, while general darshan is free at all local temples, special entry quick darshan tickets (priced at ₹20 to ₹200 depending on the temple) are available directly at the offline counters to bypass lines.'
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localTemplesSchema) }}
      />
      {children}
    </>
  )
}
