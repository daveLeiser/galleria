"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MaskedReveal, GoldHairline } from "@/components/ui/EditorialMotion";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

const pillars = [
    { label: "Familientradition", value: "Über Generationen" },
    { label: "Auswahl", value: "Über 1’000 Profile" },
    { label: "Qualität", value: "Museumsstandard" },
];

export function AtelierManifest() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Subtle opposing gallery parallax for desktop imagery
    const primaryY = useTransform(scrollYProgress, [0, 1], [28, -28]);
    const secondaryY = useTransform(scrollYProgress, [0, 1], [-22, 32]);

    return (
        <section
            ref={sectionRef}
            className="relative bg-paper py-24 md:py-32 overflow-hidden border-t border-gold/15"
        >
            {/* Quiet subtle paper texture */}
            <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" />

            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left: Editorial Atelier Imagery with Subtle Parallax */}
                    <div className="lg:col-span-6 order-2 lg:order-1">
                        <div className="relative max-w-xl mx-auto lg:mx-0">
                            {/* Primary Passepartout-Framed Workshop Photo */}
                            <motion.div
                                style={{ y: primaryY }}
                                className="relative bg-cream p-3.5 sm:p-5 border border-gold/25 shadow-[0_18px_50px_rgba(44,44,44,0.09)] lg:w-[86%]"
                            >
                                <div className="relative aspect-[4/3.6] w-full overflow-hidden ring-1 ring-charcoal/10">
                                    <Image
                                        src="/images/fontation-4.jpg"
                                        alt="Grossformatige Kunstwerke im historischen Atelier- und Ausstellungsraum"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 92vw, 42vw"
                                    />
                                </div>
                            </motion.div>

                            {/* Secondary Staggered Detail Frame (Desktop floating overlap, Mobile clean inset below) */}
                            <motion.div
                                style={{ y: secondaryY }}
                                className="hidden sm:block lg:absolute lg:-bottom-8 lg:right-0 lg:w-[54%] mt-6 lg:mt-0 bg-cream p-3 border border-gold/30 shadow-[0_16px_45px_rgba(44,44,44,0.12)]"
                            >
                                <div className="relative aspect-[16/10] w-full overflow-hidden ring-1 ring-charcoal/10">
                                    <Image
                                        src="/images/privatkunde-1.jpg"
                                        alt="Kuratierte Bilderwand mit massgefertigten Goldrahmen"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 60vw, 24vw"
                                    />
                                </div>
                                <p
                                    className="text-warm-gray italic text-xs pt-2.5 px-0.5"
                                    style={{ fontFamily: "var(--font-cormorant)", fontSize: "0.9rem" }}
                                >
                                    Privatsammlung – harmonisch gerahmt
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right: Editorial Philosophy & Curated Links */}
                    <div className="lg:col-span-6 order-1 lg:order-2">
                        <motion.span
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.7, ease: LUXURY_EASE }}
                            className="text-nav text-gold mb-4 block tracking-[0.3em]"
                            style={{ fontSize: "0.75rem" }}
                        >
                            Philosophie &amp; Atelier
                        </motion.span>

                        <MaskedReveal>
                            <h2
                                className="text-charcoal mb-6 !leading-[1.22]"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                «Ein guter Rahmen drängt sich nicht auf – er gibt dem Kunstwerk Raum zum Atmen.»
                            </h2>
                        </MaskedReveal>

                        <GoldHairline className="w-24 mb-7" />

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.8, delay: 0.15, ease: LUXURY_EASE }}
                            className="text-warm-gray leading-relaxed mb-9"
                            style={{
                                fontFamily: "var(--font-cormorant)",
                                fontSize: "clamp(1.125rem, 1.7vw, 1.28rem)",
                            }}
                        >
                            In unserem familiengeführten Atelier in Merzligen nehmen wir uns Zeit
                            für jedes einzelne Werk. Ob kostbares Familienerbstück, zeitgenössische
                            Grafik oder Museumsauftrag – wir verbinden traditionelles
                            Vergolderhandwerk mit konservatorischer Präzision.
                        </motion.p>

                        {/* Three Quiet Architectural Key Facts */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-y border-gold/20 mb-9">
                            {pillars.map((pillar, idx) => (
                                <motion.div
                                    key={pillar.label}
                                    initial={{ opacity: 0, y: 14 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-40px" }}
                                    transition={{
                                        duration: 0.65,
                                        delay: 0.15 + idx * 0.08,
                                        ease: LUXURY_EASE,
                                    }}
                                >
                                    <span
                                        className="block text-[0.68rem] uppercase tracking-[0.22em] text-gold mb-1"
                                        style={{ fontFamily: "var(--font-josefin)" }}
                                    >
                                        {pillar.label}
                                    </span>
                                    <span
                                        className="block text-charcoal text-lg"
                                        style={{ fontFamily: "var(--font-playfair)" }}
                                    >
                                        {pillar.value}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Refined Navigation Links to Stories & Exhibitions */}
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.25, ease: LUXURY_EASE }}
                            className="flex flex-wrap items-center gap-x-8 gap-y-4"
                        >
                            <Link
                                href="/erfolgsstories"
                                className="btn btn-ghost group inline-flex items-center"
                            >
                                Ausgewählte Projekte
                                <ArrowRight
                                    size={16}
                                    className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300"
                                />
                            </Link>
                            <Link
                                href="/ausstellungen"
                                className="btn btn-ghost group inline-flex items-center !text-charcoal hover:!text-gold"
                            >
                                Ausstellungen entdecken
                                <ArrowRight
                                    size={16}
                                    className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300"
                                />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
