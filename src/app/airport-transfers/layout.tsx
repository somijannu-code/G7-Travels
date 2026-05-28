import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tirupati Airport Taxi (Renigunta) | Airport Cab Booking | G7 Travels",
  description: "Book safe, secure, and on-time airport taxi transfers between Renigunta Airport (TIR) and Tirupati City or Tirumala. Dedicated airport pickup & drop services.",
  keywords: [
    "Tirupati airport taxi",
    "Renigunta airport cab booking",
    "airport pick drop Tirupati",
    "Tirumala to Renigunta airport taxi",
    "Tirupati airport transfer taxi price",
    "Renigunta to Tirumala cab"
  ],
  alternates: {
    canonical: 'https://g7travels.in/airport-transfers'
  }
};

export default function AirportTransfersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const airportSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What is the taxi fare from Renigunta Airport to Tirupati city?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The direct one-way airport transfer taxi fare between Renigunta Airport (TIR) and Tirupati City with G7 Travels starts at flat ₹800 for a comfortable air-conditioned Sedan (Swift Dzire/Toyota Etios).'
        }
      },
      {
        '@type': 'Question',
        'name': 'What is the taxi fare from Renigunta Airport to Tirumala hilltop?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'The direct one-way airport cab fare between Renigunta Airport (TIR) and Tirumala hilltop is flat ₹1,800. This is an all-inclusive rate covering all hill route driver expertise, but excludes the optional TTD Alipiri toll entry gate fees.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Do you track flights for delayed airport pick-ups?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, G7 Travels tracks all flight arrivals at Renigunta Airport in real-time. If your flight is delayed, our chauffeur is automatically notified and will be waiting in the arrival lounge exactly when you land.'
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(airportSchema) }}
      />
      {children}
    </>
  )
}
