"use client";

import { useRef, useSyncExternalStore } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { businessInfo } from "@/config/businessInfo";
import { MaskedReveal, GoldHairline } from "@/components/ui/EditorialMotion";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;
const WEEKDAYS_DE = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
];

const emptySubscribe = () => () => {};
const getClientWeekday = () => WEEKDAYS_DE[new Date().getDay()];
const getServerWeekday = () => null;

export function OpeningHours() {
    const sectionRef = useRef<HTMLElement>(null);
    const todayName = useSyncExternalStore(
        emptySubscribe,
        getClientWeekday,
        getServerWeekday
    );

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Subtle parallax depth on the vaulted stone atelier backdrop
    const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

    const todayEntry = todayName
        ? businessInfo.openingHours.find((h) => h.day === todayName)
        : null;

    return (
        <section
            ref={sectionRef}
            id="oeffnungszeiten"
            className="relative bg-charcoal py-24 md:py-32 overflow-hidden"
        >
            {/* Subtle Parallax Background Photo – Real Vaulted Atelier */}
            <motion.div
                style={{
                    y: bgY,
                    backgroundImage: "url('/images/uploads/atelier3.jpeg')",
                    backgroundPosition: "center 35%",
                }}
                className="absolute -inset-y-16 inset-x-0 bg-cover bg-center scale-105 opacity-35"
            />

            {/* Architectural Deep Charcoal Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-br from-charcoal/90 via-charcoal/80 to-charcoal/92" />

            {/* Fine Top & Bottom Gold Hairlines */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Left Column: Editorial Intro & Direct Atelier Coordinates */}
                    <div className="lg:col-span-5">
                        <motion.span
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.7, ease: LUXURY_EASE }}
                            className="text-nav text-gold-light mb-4 block tracking-[0.3em]"
                            style={{ fontSize: "0.75rem" }}
                        >
                            Besuchen Sie uns
                        </motion.span>

                        <MaskedReveal>
                            <h2
                                className="text-cream mb-5"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                Öffnungszeiten &amp; Atelier
                            </h2>
                        </MaskedReveal>

                        <GoldHairline className="w-24 mb-7" />

                        <motion.p
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.8, delay: 0.15, ease: LUXURY_EASE }}
                            className="text-cream mb-10 leading-relaxed"
                            style={{
                                fontFamily: "var(--font-cormorant)",
                                fontSize: "clamp(1.125rem, 1.7vw, 1.25rem)",
                                color: "rgba(250, 248, 245, 0.92)",
                            }}
                        >
                            Wir freuen uns auf Ihren Besuch in unserem Atelier in Merzligen.
                            Bringen Sie Ihr Kunstwerk gerne mit – wir beraten Sie persönlich
                            und wählen gemeinsam das passende Profil.
                        </motion.p>

                        {/* Minimalist Direct Contact Details */}
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.8, delay: 0.25, ease: LUXURY_EASE }}
                            className="space-y-5 pt-6 border-t border-gold/20"
                        >
                            <div className="flex items-start gap-4">
                                <MapPin size={18} className="text-gold-light shrink-0 mt-1" />
                                <div>
                                    <span
                                        className="block text-[0.68rem] uppercase tracking-[0.22em] text-gold-light/80 mb-0.5"
                                        style={{ fontFamily: "var(--font-josefin)" }}
                                    >
                                        Adresse
                                    </span>
                                    <p
                                        className="text-cream text-lg"
                                        style={{ fontFamily: "var(--font-cormorant)" }}
                                    >
                                        {businessInfo.address.fullAddress}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Phone size={18} className="text-gold-light shrink-0 mt-1" />
                                <div>
                                    <span
                                        className="block text-[0.68rem] uppercase tracking-[0.22em] text-gold-light/80 mb-0.5"
                                        style={{ fontFamily: "var(--font-josefin)" }}
                                    >
                                        Telefon
                                    </span>
                                    <a
                                        href={businessInfo.contact.phoneHref}
                                        className="text-cream hover:text-gold-light transition-colors text-lg"
                                        style={{ fontFamily: "var(--font-cormorant)" }}
                                    >
                                        {businessInfo.contact.phoneDisplay}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Reduced Architectural Hairline Schedule */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.85, delay: 0.15, ease: LUXURY_EASE }}
                        className="lg:col-span-7 lg:pl-6"
                    >
                        <div className="bg-charcoal/55 backdrop-blur-md border border-gold/25 p-6 sm:p-10">
                            {/* Schedule Header with Subtle Live Status */}
                            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-2 border-b border-gold/25">
                                <h3
                                    className="text-cream text-xl sm:text-2xl"
                                    style={{ fontFamily: "var(--font-playfair)" }}
                                >
                                    Atelier-Zeiten
                                </h3>

                                {todayEntry && (
                                    <div className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-cream/85" style={{ fontFamily: "var(--font-josefin)" }}>
                                        <span
                                            className={`w-2 h-2 rounded-full ${
                                                todayEntry.closed
                                                    ? "bg-warm-gray-light"
                                                    : "bg-gold-light shadow-[0_0_8px_rgba(212,175,55,0.7)]"
                                            }`}
                                        />
                                        <span>
                                            Heute: {todayEntry.closed ? "Geschlossen" : todayEntry.hours}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Clean Swiss Hairline Rows */}
                            <div className="divide-y divide-gold/15">
                                {businessInfo.openingHours.map((item, idx) => {
                                    const isToday = item.day === todayName;
                                    return (
                                        <motion.div
                                            key={item.day}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                delay: 0.15 + idx * 0.04,
                                                duration: 0.5,
                                                ease: LUXURY_EASE,
                                            }}
                                            className={`flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3.5 transition-colors ${
                                                isToday
                                                    ? "pl-3.5 border-l-2 border-gold bg-gold/[0.06] pr-2"
                                                    : "px-1"
                                            }`}
                                        >
                                            <span
                                                className={`text-base sm:text-lg ${
                                                    isToday
                                                        ? "text-gold-light font-medium"
                                                        : "text-cream/90"
                                                }`}
                                                style={{ fontFamily: "var(--font-cormorant)" }}
                                            >
                                                {item.day}
                                                {isToday && (
                                                    <span
                                                        className="ml-2.5 text-[0.65rem] uppercase tracking-[0.2em] text-gold-light/90"
                                                        style={{ fontFamily: "var(--font-josefin)" }}
                                                    >
                                                        Heute
                                                    </span>
                                                )}
                                            </span>
                                            <span
                                                className={`text-base sm:text-lg tabular-nums ${
                                                    item.closed
                                                        ? "text-warm-gray-light italic"
                                                        : isToday
                                                            ? "text-gold-light"
                                                            : "text-cream"
                                                }`}
                                                style={{ fontFamily: "var(--font-cormorant)" }}
                                            >
                                                {item.hours}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
