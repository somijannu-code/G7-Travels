import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tirumala Darshan Car Packages & Temple Tours | G7 Travels",
  description: "Book affordable Tirumala Darshan pilgrimage car packages from Tirupati Airport & Railway Station. Clean vehicles, expert local drivers, and transparent pricing.",
  keywords: [
    "Tirumala darshan car packages",
    "Tirupati to Tirumala travel",
    "Tirupati temple tour packages",
    "Kanipakam Srikalahasti tour package",
    "Tirupati local sightseeing cab",
    "Tirupati travel agency temple tour"
  ],
};

export default function PilgrimageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
