import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kanipakam Temple Guide: Vinayaka Darshan, Timings & Cabs | G7 Travels',
  description: 'Plan the perfect pilgrimage to Kanipakam Varasiddhi Vinayaka Temple near Tirupati. Explore pooja timings, historical context, darshan queue guidelines, and book convenient roundtrip cabs.',
  keywords: [
    'Kanipakam temple guide',
    'Kanipakam Vinayaka temple timings',
    'Tirupati to Kanipakam distance',
    'Kanipakam temple ticket price',
    'Varasiddhi Vinayaka temple pooja',
    'Tirupati to Kanipakam taxi fare',
    'G7 Travels Kanipakam packages'
  ],
  alternates: {
    canonical: 'https://g7travels.in/kanipakam-guide'
  }
}

export default function KanipakamGuideLayout({
  children
}: {
  children: React.ReactNode
}) {
  const kanipakamSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What is the significance of the Kanipakam Varasiddhi Vinayaka Temple?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The temple is famous for its self-manifested (Swayambhu) idol of Lord Ganesha in a well. Astrological beliefs and historical legends dictate that the idol continues to grow in size over the centuries, which is proved by the silver armor (kavacham) which has to be remade periodically.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What are the darshan timings and entry fees at Kanipakam?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The temple is open daily from 04:00 AM to 09:30 PM. Sarvadarshanam (free entry) wait times average 1 to 2 hours. Special Entry Darshan (SED) tickets are priced at ₹100 and ₹150 for direct access with shorter queues.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How far is Kanipakam from Tirupati town and what is the taxi fare?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Kanipakam is located approximately 72 km from Tirupati city center. A roundtrip private taxi with G7 Travels starts at flat ₹2,200 for a comfortable A/C Sedan Dzire, including toll and driver allowances.'
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(kanipakamSchema) }}
      />
      {children}
    </>
  )
}
