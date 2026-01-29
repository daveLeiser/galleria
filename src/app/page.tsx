import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { OpeningHours } from "@/components/home/OpeningHours";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <OpeningHours />
      <ContactCTA />
    </>
  );
}
