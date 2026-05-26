import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact G7 Travels | 24/7 Tirupati Cab Booking & Support",
  description: "Contact G7 Travels for taxi booking in Tirupati and Tirumala. Call +91 98661 43321 or chat with us for local sightseeing, outstation packages, and immediate support.",
  keywords: [
    "contact G7 Travels",
    "Tirupati cab booking number",
    "Tirupati taxi phone number",
    "G7 Travels WhatsApp number",
    "book cab in Tirupati online",
    "24/7 taxi support Tirupati"
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
