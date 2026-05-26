import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About G7 Travels | Best Taxi & Travel Agency in Tirupati",
  description: "Learn why G7 Travels is Tirupati's most trusted travel agency. Dedicated to delivering top-tier rides, experienced local drivers, and seamless pilgrimage experiences.",
  keywords: [
    "about G7 Travels",
    "best travel agency in Tirupati",
    "best cab service provider Tirupati",
    "Tirupati taxi company history",
    "reliable tour operator Tirupati"
  ],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
