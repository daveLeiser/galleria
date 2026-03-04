"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const ADDRESS = "Bendicht-Rechberger-Strasse 3, 2502 Biel, Switzerland";
const GOOGLE_MAPS_URL =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(ADDRESS);
const MAPS_EMBED_URL =
    "https://maps.google.com/maps?q=" +
    encodeURIComponent(ADDRESS) +
    "&t=&z=16&ie=UTF8&iwloc=&output=embed";

export function StoreLocationMap() {
    return (
        <section className="section bg-paper relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 pattern-lines opacity-10" />

            <div className="container relative z-10">
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

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Map container with decorative frame */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-burgundy/20 blur-xl opacity-60" />
                        <div className="absolute -inset-2 border-2 border-gold/30" />

                        {/* Google Maps Embed (no API key needed) */}
                        <div className="relative overflow-hidden" style={{ height: "450px" }}>
                            <iframe
                                title="Galleria Flury Standort"
                                src={MAPS_EMBED_URL}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Open in Maps link */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="text-center mt-6 flex flex-col items-center gap-1"
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
                            Bendicht-Rechberger-Strasse 3, 2502 Biel
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
