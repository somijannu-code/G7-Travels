import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outstation Cabs from Tirupati | Chennai, Bangalore, Hyderabad | G7 Travels",
  description: "Affordable outstation cab booking from Tirupati to Chennai, Bangalore, Hyderabad & Vellore. Fixed transparent pricing, one-way and round trips with verified drivers.",
  keywords: [
    "outstation cab Tirupati",
    "Tirupati to Chennai taxi",
    "Tirupati to Bangalore cab",
    "Tirupati to Hyderabad cab",
    "Tirupati one way taxi drop",
    "Tirupati to Vellore golden temple taxi",
    "best outstation cabs Tirupati"
  ],
};

export default function OutstationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
