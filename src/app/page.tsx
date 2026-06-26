import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { OpeningHours } from "@/components/home/OpeningHours";
import { StoreLocationMap } from "@/components/home/StoreLocationMap";
import { ContactCTA } from "@/components/home/ContactCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bilderrahmen & Einrahmungen in Merzligen | Galleria Flury",
  description: "Willkommen in der Galleria Flury in Merzligen (nähe Biel, Lyss, Aarberg). Ihr Experte für Kunstrahmen, Passepartouts und Restaurationen. Besuchen Sie uns!",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <OpeningHours />
      <StoreLocationMap />
      <ContactCTA />
    </>
  );
}
