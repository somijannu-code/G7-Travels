import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tirupati Sightseeing Guide & Best Tourist Places to Visit | G7 Travels',
  description: 'Explore the best places to visit in Tirupati. Read our exhaustive local sightseeing guide covering Tirumala Temple, Srikalahasti, Kanipakam, Talakona Waterfalls, and Chandragiri Fort.',
  keywords: [
    'Tirupati local tourist places',
    'places to visit in Tirupati',
    'Talakona waterfalls cab',
    'Chandragiri Fort timings',
    'Tirupati sightseeing cab cost',
    'Srikalahasti temple pooja',
    'Kanipakam temple drop taxi',
    'Tirupati 1 day tour itinerary',
    'Tirupati travel guide'
  ],
  alternates: {
    canonical: 'https://g7travels.com/tirupati-places'
  }
}

export default function TirupatiPlacesLayout({
  children
}: {
  children: React.ReactNode
}) {
  const placesSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristInformationCenter',
    'name': 'G7 Travels Tirupati Tourism Helpdesk',
    'image': 'https://g7travels.in/g7travels.png',
    'url': 'https://g7travels.in/tirupati-places',
    'telephone': '+919866143321',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '123 Tirumala Road',
      'addressLocality': 'Tirupati',
      'addressRegion': 'Andhra Pradesh',
      'postalCode': '517501',
      'addressCountry': 'IN'
    },
    'description': 'Informational guide on top sightseeing attractions and spiritual temples in and around Tirupati, Andhra Pradesh. Includes route guides and car rental booking facilities.'
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placesSchema) }}
      />
      {children}
    </>
  )
}
