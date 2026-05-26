import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact"; // Added import

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "G7 Travels | Best Car Rental & Taxi Service in Tirupati",
  description: "Book the best taxi service and car rental in Tirupati with G7 Travels. Safe, reliable local & outstation cabs, Tirupati airport transfers, and customized Tirumala temple tour packages at budget-friendly rates with expert drivers.",
  keywords: [
    "Tirupati taxi service", 
    "car rental Tirupati", 
    "best taxi service in Tirupati", 
    "Tirumala darshan travel package", 
    "Tirupati airport taxi", 
    "Renigunta airport cab", 
    "Tirupati outstation cabs", 
    "car rent in Tirupati with driver", 
    "Tirupati local cabs", 
    "Tirupati to Tirumala car rental", 
    "G7 Travels",
    "Tirupati tour packages"
  ],
  authors: [{ name: "G7 Travels" }],
  icons: {
    icon: "/g7travels.png",
  },
  openGraph: {
    title: "G7 Travels | Best Car Rental & Taxi Service in Tirupati",
    description: "Book safe and secure rides, rental cars, outstation cabs, and customized Tirumala pilgrimage packages in Tirupati with G7 Travels.",
    url: "https://g7travels.in", 
    siteName: "G7 Travels",
    type: "website",
    images: [
      {
        url: "https://g7travels.in/g7travels.png",
        width: 800,
        height: 800,
        alt: "G7 Travels Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "G7 Travels | Best Car Rental & Taxi Service in Tirupati",
    description: "Book safe and secure rides, rental cars, outstation cabs, and customized Tirumala pilgrimage packages in Tirupati with G7 Travels.",
    images: ["https://g7travels.in/g7travels.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "name": "G7 Travels",
  "image": "https://g7travels.in/g7travels.png",
  "@id": "https://g7travels.in/#taxiservice",
  "url": "https://g7travels.in",
  "telephone": "+919866143321",
  "priceRange": "INR",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Tirumala Road",
    "addressLocality": "Tirupati",
    "addressRegion": "Andhra Pradesh",
    "postalCode": "517501",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 13.6288,
    "longitude": 79.4192
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Tirupati"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Tirumala"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Renigunta"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Srikalahasti"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Chandragiri"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-foreground bg-slate-50`}
      >
        <div className="min-h-screen flex flex-col relative z-0">
          <Header />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </div>
        
        {/* Global Floating Components */}
        <FloatingContact />
        <Toaster />
      </body>
    </html>
  );
}
