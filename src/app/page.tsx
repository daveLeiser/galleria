import { Hero } from "@/components/home/Hero";
import { Hero3D } from "@/components/home/Hero3D";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { AtelierManifest } from "@/components/home/AtelierManifest";
import { OpeningHours } from "@/components/home/OpeningHours";
import { StoreLocationMap } from "@/components/home/StoreLocationMap";
import { ContactCTA } from "@/components/home/ContactCTA";
import type { Metadata } from "next";

// Experiment-Schalter: Auf `false` setzen, um sofort zur ursprünglichen Hero Section zurückzukehren
const USE_3D_HERO = true;

export const metadata: Metadata = {
  title: "Bilderrahmen & Einrahmungen in Merzligen | Galleria Flury",
  description: "Willkommen in der Galleria Flury in Merzligen (nähe Biel, Lyss, Aarberg). Ihr Experte für Kunstrahmen, Passepartouts und Restaurationen. Besuchen Sie uns!",
};

export default function Home() {
  return (
    <>
      {USE_3D_HERO ? <Hero3D /> : <Hero />}
      <ServicesPreview />
      <AtelierManifest />
      <OpeningHours />
      <StoreLocationMap />
      <ContactCTA />
    </>
  );
}
