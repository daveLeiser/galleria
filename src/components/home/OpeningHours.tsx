"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { businessInfo } from "@/config/businessInfo";

export function OpeningHours() {
    // Use state to avoid hydration mismatch with date-based rendering
    const [dayIndex, setDayIndex] = useState<number | null>(null);

    useEffect(() => {
        const today = new Date().getDay();
        setDayIndex(today === 0 ? 6 : today - 1); // Convert to our array index (0 = Monday)
    }, []);


    return (
        <section className="section bg-charcoal relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 grain-overlay opacity-5" />
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-gold/10 to-transparent blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-burgundy/10 to-transparent blur-3xl" />

            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span
                            className="text-nav text-gold-light mb-4 block tracking-[0.3em]"
                            style={{ fontSize: "0.75rem" }}
                        >
                            Besuchen Sie uns
                        </span>
                        <h2
                            className="text-cream mb-6"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Öffnungszeiten & Standort
                        </h2>
                        <div className="ornament opacity-60 mb-8" />

                        <p
                            className="text-cream mb-8 leading-relaxed"
                            style={{
                                fontFamily: "var(--font-cormorant)",
                                fontSize: "1.125rem",
                            }}
                        >
                            Wir freuen uns auf Ihren Besuch in unserem Atelier in Biel/Bienne.
                            Gerne beraten wir Sie persönlich und helfen Ihnen, die perfekte
                            Rahmenlösung für Ihre Kunstwerke zu finden.
                        </p>

                        {/* Contact info */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-gold/20 rounded-sm flex items-center justify-center">
                                    <MapPin size={18} className="text-gold" />
                                </div>
                                <div>
                                    <p
                                        className="text-cream"
                                        style={{ fontFamily: "var(--font-cormorant)" }}
                                    >
                                        {businessInfo.address.fullAddress}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-gold/20 rounded-sm flex items-center justify-center">
                                    <Phone size={18} className="text-gold" />
                                </div>
                                <div>
                                    <a
                                        href={businessInfo.contact.phoneHref}
                                        className="text-cream hover:text-gold-light transition-colors"
                                        style={{ fontFamily: "var(--font-cormorant)" }}
                                    >
                                        {businessInfo.contact.phoneDisplay}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Opening Hours Table */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative"
                    >
                        {/* Decorative frame */}
                        <div className="absolute -inset-4 border border-gold/20" />
                        <div className="absolute -inset-1 bg-charcoal-light" />

                        <div className="relative bg-gradient-to-br from-charcoal-light to-charcoal p-8">
                            {/* Header */}
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-warm-gray/20">
                                <Clock size={24} className="text-gold" />
                                <h3
                                    className="text-cream text-xl"
                                    style={{ fontFamily: "var(--font-playfair)" }}
                                >
                                    Öffnungszeiten
                                </h3>
                            </div>

                            {/* Hours list */}
                            <div className="space-y-4">
                                {businessInfo.openingHours.map((item, index) => (
                                    <motion.div
                                        key={item.day}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                                        className={`flex justify-between items-center py-2 px-3 rounded-sm transition-colors ${index === dayIndex
                                            ? "bg-gold/10 border-l-2 border-gold"
                                            : "hover:bg-white/5"
                                            }`}
                                    >
                                        <span
                                            className={`${index === dayIndex ? "text-gold font-medium" : "text-cream"
                                                }`}
                                            style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.125rem" }}
                                        >
                                            {item.day}
                                            {index === dayIndex && (
                                                <span className="ml-2 text-xs text-gold-light">(Heute)</span>
                                            )}
                                        </span>
                                        <span
                                            className={`${item.closed
                                                ? "text-cream-dark"
                                                : index === dayIndex
                                                    ? "text-gold-light"
                                                    : "text-cream"
                                                }`}
                                            style={{
                                                fontFamily: "var(--font-cormorant)",
                                                fontSize: "1.125rem",
                                            }}
                                        >
                                            {item.hours}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
