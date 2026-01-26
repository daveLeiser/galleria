import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { FeaturedExhibition } from "@/components/home/FeaturedExhibition";
import { OpeningHours } from "@/components/home/OpeningHours";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <FeaturedExhibition />
      <OpeningHours />
      <ContactCTA />
    </>
  );
}
