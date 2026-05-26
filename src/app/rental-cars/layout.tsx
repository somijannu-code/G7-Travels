import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Rental in Tirupati with Driver & Self-Drive Cabs | G7 Travels",
  description: "Rent a car in Tirupati with driver or choose flexible self-drive options. Clean Swift Dzire, Innova, Ertiga & Tempo Travellers starting from ₹14/km. 24/7 service.",
  keywords: [
    "car rental in Tirupati",
    "rent a car in Tirupati with driver",
    "self drive car Tirupati",
    "Tirupati car hire",
    "Swift Dzire rental Tirupati",
    "Innova Crysta rent Tirupati",
    "tempo traveller rent in Tirupati"
  ],
};

export default function RentalCarsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
