import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cab & Taxi Services in Tirupati | G7 Travels",
  description: "Explore our range of travel services in Tirupati, including on-demand rides, local temple sightseeing, airport transfers, railway station pick-drop, and outstation trips.",
  keywords: [
    "Tirupati taxi service",
    "cab services in Tirupati",
    "Tirupati local cabs",
    "APSRTC bus stand cab drop",
    "Tirupati railway station taxi",
    "G7 Travels services list"
  ],
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
