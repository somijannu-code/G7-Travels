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
};

export default function AirportTransfersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
