import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tirumala Footpath Guide: Alipiri & Srivari Mettu Steps | G7 Travels',
  description: 'Ultimate guide to climbing Tirumala hills on foot. Find steps count, opening hours, free luggage transport details, and walking guidelines for Alipiri and Srivari Mettu pathways.',
  keywords: [
    'Tirumala footpath guide',
    'Alipiri steps count',
    'Srivari Mettu timings',
    'free luggage transfer Tirumala',
    'how to walk to Tirupati temple',
    'Tirupati footpath taxi drop',
    'Tirumala walking steps time',
    'G7 Travels walking guide'
  ],
  alternates: {
    canonical: 'https://g7travels.com/footpath-guide'
  }
}

export default function TirumalaFootpathLayout({
  children
}: {
  children: React.ReactNode
}) {
  const footpathSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What is the steps count and walking time for Alipiri Footpath?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The Alipiri Footpath consists of 3,550 steps and takes approximately 4 to 6 hours to climb on foot. It is open 24/7, features a fully covered roof, drinking water, and resting spots. Free luggage transport to the hilltop is provided by TTD at the starting counter.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is the steps count and walking time for Srivari Mettu Footpath?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The Srivari Mettu Footpath has 2,100 steps and takes approximately 2 to 3 hours to climb. It is the fastest walking route up but is only open from 6:00 AM to 6:00 PM daily. Free luggage transport is also available at the starting point.'
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(footpathSchema) }}
      />
      {children}
    </>
  )
}
