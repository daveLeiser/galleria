"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { businessInfo } from "@/config/businessInfo";

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
        <section className="section bg-paper relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 pattern-lines opacity-10" />

            <div className="container relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-12"
                >
                    <span
                        className="text-nav text-gold mb-4 block tracking-[0.3em]"
                        style={{ fontSize: "0.75rem" }}
                    >
                        Unser Standort
                    </span>
                    <h2
                        className="text-charcoal mb-6"
                        style={{ fontFamily: "var(--font-playfair)" }}
                    >
                        So finden Sie uns
                    </h2>
                    <div className="ornament mx-auto" />
                </motion.div>

                {/* Two-column layout: image left, map right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-px max-w-6xl mx-auto" style={{ background: "rgba(184,134,11,0.2)" }}>

                    {/* Left: Eingang photo */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative overflow-hidden group"
                        style={{ minHeight: "420px" }}
                    >
                        <Image
                            src="/images/uploads/Eingang.jpeg"
                            alt="Eingang zur Galleria Flury – Atelier mit Kunstwerken"
                            fill
                            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        {/* Subtle bottom gradient for caption */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background: "linear-gradient(to top, rgba(44,44,44,0.6) 0%, rgba(44,44,44,0.1) 40%, transparent 100%)"
                            }}
                        />
                        {/* Caption */}
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                            <p
                                className="text-cream"
                                style={{
                                    fontFamily: "var(--font-cormorant)",
                                    fontSize: "1rem",
                                    fontStyle: "italic",
                                    letterSpacing: "0.02em",
                                }}
                            >
                                Der Eingang — Galerie & Atelier
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Google Maps embed */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative overflow-hidden"
                        style={{ minHeight: "420px" }}
                    >
                        <iframe
                            title="Galleria Flury Standort"
                            src={MAPS_EMBED_URL}
                            width="100%"
                            height="100%"
                            style={{ border: 0, display: "block", minHeight: "420px" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                        />
                    </motion.div>
                </div>

                {/* Open in Maps link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-center mt-6 flex flex-col items-center gap-1 max-w-6xl mx-auto"
                >
                    <a
                        href={GOOGLE_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors duration-200 italic"
                        style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.05rem" }}
                    >
                        <ExternalLink size={15} />
                        In Google Maps öffnen
                    </a>
                    <p
                        className="text-warm-gray"
                        style={{ fontFamily: "var(--font-cormorant)", fontSize: "0.9rem" }}
                    >
                        {businessInfo.address.fullAddress}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
