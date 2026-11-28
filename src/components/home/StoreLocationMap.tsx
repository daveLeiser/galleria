"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import { businessInfo } from "@/config/businessInfo";
import { MaskedReveal, GoldHairline } from "@/components/ui/EditorialMotion";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

export function StoreLocationMap() {
    const address = `${businessInfo.address.fullAddress}, Switzerland`;
    const GOOGLE_MAPS_URL =
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(address);
    const MAPS_EMBED_URL =
        "https://maps.google.com/maps?q=" +
        encodeURIComponent(address) +
        "&t=&z=16&ie=UTF8&iwloc=&output=embed";

    return (
        <section className="relative bg-cream py-24 md:py-32 overflow-hidden">
            <div className="container relative z-10">
                {/* Editorial Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.7, ease: LUXURY_EASE }}
                            className="text-nav text-gold mb-4 block tracking-[0.3em]"
                            style={{ fontSize: "0.75rem" }}
                        >
                            Unser Standort
                        </motion.span>
                        <MaskedReveal>
                            <h2
                                className="text-charcoal"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                So finden Sie uns
                            </h2>
                        </MaskedReveal>
                        <GoldHairline className="w-24 mt-5" />
                    </div>

                    <motion.a
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2, ease: LUXURY_EASE }}
                        href={GOOGLE_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-charcoal hover:text-gold transition-colors self-start md:self-auto"
                    >
                        <MapPin size={16} className="text-gold shrink-0" />
                        <span
                            className="text-base sm:text-lg"
                            style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                            {businessInfo.address.fullAddress}
                        </span>
                        <ArrowUpRight
                            size={16}
                            className="text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        />
                    </motion.a>
                </div>

                {/* Two-Column Passepartout-Mounted Presentation */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                    {/* Left: Real Entrance Photo */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.85, ease: LUXURY_EASE }}
                        className="lg:col-span-5 flex flex-col"
                    >
                        <div className="bg-paper p-3.5 sm:p-5 border border-gold/25 shadow-[0_14px_40px_rgba(44,44,44,0.06)] flex-1 flex flex-col">
                            <div className="relative aspect-[4/3] lg:aspect-auto lg:flex-1 lg:min-h-[380px] overflow-hidden group ring-1 ring-charcoal/10">
                                <Image
                                    src="/images/uploads/Eingang.jpeg"
                                    alt="Eingang zur Galleria Flury – Atelier mit Kunstwerken"
                                    fill
                                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                                    sizes="(max-width: 1024px) 92vw, 40vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/45 via-transparent to-transparent" />
                            </div>
                            <div className="flex items-center justify-between pt-3.5 px-1">
                                <p
                                    className="text-warm-gray italic text-sm sm:text-base"
                                    style={{ fontFamily: "var(--font-cormorant)" }}
                                >
                                    Der Eingang — Galerie &amp; Atelier
                                </p>
                                <span
                                    className="text-[0.68rem] uppercase tracking-[0.2em] text-gold"
                                    style={{ fontFamily: "var(--font-josefin)" }}
                                >
                                    Merzligen
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Warm Editorial-Toned Google Map (clears to full color on hover/focus) */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.85, delay: 0.12, ease: LUXURY_EASE }}
                        className="lg:col-span-7 flex flex-col"
                    >
                        <div className="bg-paper p-3.5 sm:p-5 border border-gold/25 shadow-[0_14px_40px_rgba(44,44,44,0.06)] flex-1 flex flex-col">
                            <div className="relative h-[320px] sm:h-[400px] lg:flex-1 lg:min-h-[380px] overflow-hidden ring-1 ring-charcoal/10 group">
                                <iframe
                                    title="Galleria Flury Standort"
                                    src={MAPS_EMBED_URL}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, display: "block" }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full transition-all duration-700 ease-out [filter:grayscale(80%)_sepia(18%)_contrast(94%)_brightness(102%)] group-hover:[filter:none] focus:[filter:none]"
                                />
                            </div>
                            <div className="flex flex-wrap items-center justify-between gap-2 pt-3.5 px-1">
                                <span
                                    className="text-warm-gray text-sm sm:text-base"
                                    style={{ fontFamily: "var(--font-cormorant)" }}
                                >
                                    Nahe Biel/Bienne, Lyss &amp; Aarberg — Parkplätze direkt vor Ort
                                </span>
                                <a
                                    href={GOOGLE_MAPS_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-gold hover:text-gold-dark transition-colors text-xs uppercase tracking-[0.2em]"
                                    style={{ fontFamily: "var(--font-josefin)" }}
                                >
                                    Route planen
                                    <ArrowUpRight size={14} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
