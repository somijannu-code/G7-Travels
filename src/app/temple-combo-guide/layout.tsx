import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tirupati Kanipakam & Vellore Golden Temple Tour Package | G7 Travels',
  description: 'Book highly rated 1 & 2 day outstation taxi combo tours from Tirupati to Kanipakam Varasiddhi Vinayaka Temple and Vellore Sripuram Golden Temple. Get pricing details and custom itineraries.',
  keywords: [
    'Kanipakam Vellore Golden Temple combo tour',
    'Tirupati to Vellore Golden Temple taxi',
    'Tirupati Kanipakam Vellore 1 day package',
    'Vellore Sripuram Golden Temple timings',
    'Kanipakam Vinayaka temple pooja cost',
    'Tirupati to Vellore outstation cab fare',
    'G7 Travels temple combo packages'
  ],
  alternates: {
    canonical: 'https://g7travels.in/temple-combo-guide'
  }
}

export default function TempleComboGuideLayout({
  children
}: {
  children: React.ReactNode
}) {
  const comboSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What is the standard route and duration for the Tirupati-Kanipakam-Vellore combo tour?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The standard route starts from Tirupati, drives to Kanipakam Varasiddhi Vinayaka Temple (70 km), continues to Vellore Sripuram Golden Temple (another 70 km), and returns to Tirupati. The 1-day itinerary takes around 12 to 14 hours total, covering a roundtrip distance of approximately 280 km.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is the significance of the Vellore Sripuram Golden Temple?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The Sripuram Golden Temple is dedicated to Goddess Sri Lakshmi Narayani. The entire temple structure is covered in over 1.5 tons of pure gold leaf, spread across an elaborate star-shaped pathway, and is surrounded by lush green scenic hills.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Do we need multi-state border permits for Vellore?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, because Vellore is located in Tamil Nadu, while Tirupati is in Andhra Pradesh. G7 Travels outstation taxi packages are completely inclusive of all multi-state border taxes, toll gates, and permit charges, ensuring you face no hidden costs at state border checks.'
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comboSchema) }}
      />
      {children}
    </>
  )
}
