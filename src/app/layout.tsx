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
  title: "G7 Travels | Tirupati's Trusted Travel Partner",
  description: "Your reliable travel partner for on-demand rides, car rentals, and pilgrimage packages in Tirupati and surrounding areas.",
  keywords: ["G7 Travels", "Tirupati taxi", "car rental Tirupati", "cab booking Tirupati", "Tirumala travel", "airport transfers Tirupati"],
  authors: [{ name: "G7 Travels" }],
  icons: {
    icon: "/g7travels.png",
  },
  openGraph: {
    title: "G7 Travels | Tirupati's Trusted Travel Partner",
    description: "Book safe and secure rides, rental cars, and outstation trips in Tirupati with G7 Travels.",
    url: "https://g7travels.in", 
    siteName: "G7 Travels",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "G7 Travels | Tirupati's Trusted Travel Partner",
    description: "Book safe and secure rides, rental cars, and outstation trips in Tirupati with G7 Travels.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
