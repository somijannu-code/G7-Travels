import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chandragiri Fort Heritage Guide: Timings, Palace History & Cabs | G7 Travels',
  description: 'Explore Chandragiri Fort, the historical 11th-century palace of the Vijayanagara Empire near Tirupati. Find Raja & Rani Mahal details, Sound & Light show timings, ticket rates, and book easy roundtrip cabs.',
  keywords: [
    'Chandragiri Fort guide',
    'Chandragiri Fort timings',
    'Raja Mahal and Rani Mahal Chandragiri',
    'Chandragiri sound and light show ticket price',
    'Vijayanagara Empire palace Tirupati',
    'Tirupati to Chandragiri Fort distance',
    'Chandragiri Fort taxi fare',
    'G7 Travels Chandragiri packages'
  ],
  alternates: {
    canonical: 'https://g7travels.in/chandragiri-guide'
  }
}

export default function ChandragiriGuideLayout({
  children
}: {
  children: React.ReactNode
}) {
  const chandragiriSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What is the history of Chandragiri Fort near Tirupati?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Chandragiri Fort was built in the 11th century by the Yadava Naidus and later rose to prominence under the Vijayanagara Empire in the 14th century. It served as the empire\'s fourth capital when Vijayanagara (Hampi) fell to the Deccan sultanates.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What are the showtimes and languages for the Chandragiri Sound and Light Show?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The spectacular Sound & Light Show is held daily in the fort lawns. First show (Telugu) starts at 06:30 PM to 07:15 PM, and the second show (English) is held from 07:30 PM to 08:15 PM. Timing shifts slightly during winters.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How far is Chandragiri Fort from Tirupati town and how can I travel?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Chandragiri Fort is located 15 km from Tirupati town center. The most convenient travel method is by hiring a G7 Travels private roundtrip taxi, which covers the drive in 25 to 30 minutes, allowing you to comfortably attend the evening laser light show and return safely.'
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(chandragiriSchema) }}
      />
      {children}
    </>
  )
}
