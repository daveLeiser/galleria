"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { MaskedReveal, GoldHairline } from "@/components/ui/EditorialMotion";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

const services = [
    {
        num: "01",
        tag: "Massanfertigung",
        title: "Bilderrahmen nach Mass",
        description:
            "Individuell gefertigte Rahmen aus erlesenen Hölzern, Blattgold und feinen Profilen – millimetergenau abgestimmt auf Ihr Kunstwerk und Ihren Raum.",
        image: "/images/uploads/Atelier2.jpg",
        imageAlt: "Präziser 45°-Passepartout-Zuschnitt im Atelier Galleria Flury",
        caption: "Handgefertigter Zuschnitt im Atelier Merzligen",
    },
    {
        num: "02",
        tag: "Konservierung",
        title: "Einrahmen & Restauration",
        description:
            "Museumsreife Einrahmungen mit entspiegeltem UV-Schutzglas, säurefreien Passepartouts sowie einfühlsame Restauration wertvoller Gemälde und Grafiken.",
        image: "/images/uploads/Atelier.jpg",
        imageAlt: "Konservatorisches Arbeiten mit Baumwollhandschuhen im Rahmenatelier",
        caption: "Archivgerechte Verarbeitung & Bildpflege",
    },
    {
        num: "03",
        tag: "Kollektion",
        title: "Kunstrahmen aller Arten",
        description:
            "Vom klassischen, vergoldeten Barock- und Galerierahmen bis zum puristischen Schattenfugenrahmen für zeitgenössische Leinwände.",
        image: "/images/image-2.jpg",
        imageAlt: "Modern gerahmte Kunstwerke in einem hellen Schweizer Architekturraum",
        caption: "Zeitgemässe Rahmungen für moderne Räume",
    },
];

export function ServicesPreview() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeService = services[activeIndex];

    return (
        <section className="relative z-10 bg-gradient-to-b from-transparent via-cream via-15% to-cream py-24 md:py-32 overflow-hidden">
            <div className="container">
                {/* Editorial Section Header */}
                <div className="max-w-3xl mb-14 md:mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.7, ease: LUXURY_EASE }}
                        className="text-nav text-gold mb-4 block tracking-[0.3em]"
                        style={{ fontSize: "0.75rem" }}
                    >
                        Was wir bieten
                    </motion.span>
                    <MaskedReveal>
                        <h2
                            className="text-charcoal mb-5"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Handwerkskunst für Ihre wertvollsten Werke
                        </h2>
                    </MaskedReveal>
                    <GoldHairline className="w-24 mb-6" />
                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.8, delay: 0.15, ease: LUXURY_EASE }}
                        className="text-warm-gray max-w-2xl leading-relaxed"
                        style={{
                            fontFamily: "var(--font-cormorant)",
                            fontSize: "clamp(1.125rem, 1.8vw, 1.3125rem)",
                        }}
                    >
                        Persönliche Beratung, meisterhafte Verarbeitung und ein feines Gespür
                        für Proportionen – jedes Stück verlässt unser Atelier als Unikat.
                    </motion.p>
                </div>

                {/* =================================================================== */}
                {/* DESKTOP: Interactive Editorial Split (Monumental List + Framed Art) */}
                {/* =================================================================== */}
                <div className="hidden lg:grid lg:grid-cols-12 gap-14 xl:gap-20 items-center">
                    {/* Left Column: Numbered Editorial Service List */}
                    <div className="lg:col-span-6">
                        <div className="border-t border-gold/25">
                            {services.map((service, idx) => {
                                const isActive = idx === activeIndex;
                                return (
                                    <motion.div
                                        key={service.num}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-40px" }}
                                        transition={{
                                            duration: 0.75,
                                            delay: idx * 0.1,
                                            ease: LUXURY_EASE,
                                        }}
                                        onMouseEnter={() => setActiveIndex(idx)}
                                        onClick={() => setActiveIndex(idx)}
                                        className={`group relative border-b border-gold/25 py-8 cursor-pointer transition-colors duration-500 ${
                                            isActive ? "opacity-100" : "opacity-65 hover:opacity-95"
                                        }`}
                                    >
                                        {/* Active left hairline accent */}
                                        <motion.div
                                            animate={{
                                                scaleY: isActive ? 1 : 0,
                                                opacity: isActive ? 1 : 0,
                                            }}
                                            transition={{ duration: 0.45, ease: LUXURY_EASE }}
                                            style={{ transformOrigin: "top" }}
                                            className="absolute left-0 top-6 bottom-6 w-[2px] bg-gold"
                                        />

                                        <div
                                            className={`transition-transform duration-500 ${
                                                isActive ? "translate-x-6" : "translate-x-0 group-hover:translate-x-2"
                                            }`}
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-4">
                                                    <span
                                                        className="text-gold text-xs tracking-[0.25em]"
                                                        style={{ fontFamily: "var(--font-josefin)" }}
                                                    >
                                                        {service.num}
                                                    </span>
                                                    <span
                                                        className="text-warm-gray-light text-[0.7rem] uppercase tracking-[0.22em]"
                                                        style={{ fontFamily: "var(--font-josefin)" }}
                                                    >
                                                        {service.tag}
                                                    </span>
                                                </div>
                                                <ArrowUpRight
                                                    size={18}
                                                    className={`transition-all duration-500 ${
                                                        isActive
                                                            ? "text-gold translate-x-0 opacity-100"
                                                            : "text-warm-gray-light -translate-x-1 opacity-0 group-hover:opacity-60"
                                                    }`}
                                                />
                                            </div>

                                            <h3
                                                className={`text-2xl xl:text-[1.75rem] mb-3 transition-colors duration-300 ${
                                                    isActive ? "text-charcoal" : "text-charcoal/80"
                                                }`}
                                                style={{ fontFamily: "var(--font-playfair)" }}
                                            >
                                                {service.title}
                                            </h3>

                                            <p
                                                className="text-warm-gray leading-relaxed pr-6"
                                                style={{
                                                    fontFamily: "var(--font-cormorant)",
                                                    fontSize: "1.125rem",
                                                }}
                                            >
                                                {service.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Understated Editorial CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.35, duration: 0.7, ease: LUXURY_EASE }}
                            className="mt-10"
                        >
                            <Link
                                href="/dienstleistungen"
                                className="btn btn-ghost group inline-flex items-center"
                            >
                                Alle Leistungen im Detail
                                <ArrowRight
                                    size={16}
                                    className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300"
                                />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Column: Passepartout-Mounted Cross-Fading Gallery Viewer */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.9, ease: LUXURY_EASE }}
                        className="lg:col-span-6"
                    >
                        <div className="relative bg-paper p-5 xl:p-7 border border-gold/25 shadow-[0_20px_60px_rgba(44,44,44,0.08)]">
                            {/* Subtle inner archival bevel line */}
                            <div className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal/5 ring-1 ring-charcoal/10">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeService.image}
                                        initial={{ opacity: 0, scale: 1.05 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.98 }}
                                        transition={{ duration: 0.65, ease: LUXURY_EASE }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={activeService.image}
                                            alt={activeService.imageAlt}
                                            fill
                                            className="object-cover"
                                            sizes="(min-width: 1024px) 46vw, 100vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/35 via-transparent to-transparent" />
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Museum Plaque Caption */}
                            <div className="flex items-center justify-between pt-4 px-1">
                                <span
                                    className="text-warm-gray italic text-base"
                                    style={{ fontFamily: "var(--font-cormorant)" }}
                                >
                                    {activeService.caption}
                                </span>
                                <span
                                    className="text-gold text-xs tracking-[0.25em]"
                                    style={{ fontFamily: "var(--font-josefin)" }}
                                >
                                    {activeService.num} / 03
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* =================================================================== */}
                {/* MOBILE & TABLET: Clean Editorial Vertical Cards with Framed Photos  */}
                {/* =================================================================== */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:hidden">
                    {services.map((service, idx) => (
                        <motion.article
                            key={service.num}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{
                                duration: 0.75,
                                delay: idx * 0.1,
                                ease: LUXURY_EASE,
                            }}
                            className="flex flex-col"
                        >
                            {/* Passepartout-Framed Authentic Photo */}
                            <div className="bg-paper p-3.5 border border-gold/25 shadow-sm mb-5">
                                <div className="relative aspect-[16/11] w-full overflow-hidden bg-charcoal/5 ring-1 ring-charcoal/10">
                                    <Image
                                        src={service.image}
                                        alt={service.imageAlt}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 92vw, 33vw"
                                    />
                                </div>
                            </div>

                            {/* Number & Tag */}
                            <div className="flex items-center gap-3 mb-2">
                                <span
                                    className="text-gold text-xs tracking-[0.24em]"
                                    style={{ fontFamily: "var(--font-josefin)" }}
                                >
                                    {service.num}
                                </span>
                                <span className="w-6 h-[1px] bg-gold/40" />
                                <span
                                    className="text-warm-gray-light text-[0.68rem] uppercase tracking-[0.2em]"
                                    style={{ fontFamily: "var(--font-josefin)" }}
                                >
                                    {service.tag}
                                </span>
                            </div>

                            <h3
                                className="text-xl text-charcoal mb-2.5"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                {service.title}
                            </h3>
                            <p
                                className="text-warm-gray leading-relaxed"
                                style={{
                                    fontFamily: "var(--font-cormorant)",
                                    fontSize: "1.0625rem",
                                }}
                            >
                                {service.description}
                            </p>
                        </motion.article>
                    ))}
                </div>

                {/* Mobile CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25, duration: 0.7, ease: LUXURY_EASE }}
                    className="mt-12 text-center lg:hidden"
                >
                    <Link
                        href="/dienstleistungen"
                        className="btn btn-ghost group inline-flex items-center"
                    >
                        Alle Leistungen im Detail
                        <ArrowRight
                            size={16}
                            className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300"
                        />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
