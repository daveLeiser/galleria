"use client";

import { motion } from "framer-motion";
import { Send, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { businessInfo } from "@/config/businessInfo";

export function ContactCTA() {
    return (
        <section id="kontakt" className="section bg-paper relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 pattern-lines opacity-20" />

            {/* Golden accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

            <div className="container relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span
                            className="text-nav text-gold mb-4 block tracking-[0.3em]"
                            style={{ fontSize: "0.75rem" }}
                        >
                            Haben Sie Fragen?
                        </span>
                        <h2
                            className="text-charcoal mb-6"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Wir sind für Sie da
                        </h2>
                        <div className="ornament mx-auto mb-8" />
                        <p
                            className="text-warm-gray mb-10 max-w-2xl mx-auto"
                            style={{
                                fontFamily: "var(--font-cormorant)",
                                fontSize: "1.25rem",
                                lineHeight: 1.8,
                            }}
                        >
                            Ob Sie eine Beratung für die perfekte Rahmung wünschen, Fragen zu
                            unseren Dienstleistungen haben oder einfach unser Atelier besuchen
                            möchten – wir freuen uns auf Ihre Kontaktaufnahme.
                        </p>
                    </motion.div>

                    {/* Contact options */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                    >
                        <a
                            href={businessInfo.contact.phoneHref}
                            className="btn btn-primary group"
                        >
                            <Phone size={18} />
                            Jetzt anrufen
                        </a>
                        <a
                            href={businessInfo.contact.emailHref}
                            className="btn btn-outline group"
                        >
                            <Send size={18} />
                            E-Mail senden
                        </a>
                    </motion.div>

                    {/* Quick links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="flex flex-wrap justify-center gap-8"
                    >
                        <Link
                            href="/dienstleistungen"
                            className="text-warm-gray hover:text-gold transition-colors flex items-center gap-2 group"
                            style={{ fontFamily: "var(--font-josefin)", fontSize: "0.875rem" }}
                        >
                            Dienstleistungen
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/ausstellungen"
                            className="text-warm-gray hover:text-gold transition-colors flex items-center gap-2 group"
                            style={{ fontFamily: "var(--font-josefin)", fontSize: "0.875rem" }}
                        >
                            Aktuelle Ausstellungen
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/ueber-uns"
                            className="text-warm-gray hover:text-gold transition-colors flex items-center gap-2 group"
                            style={{ fontFamily: "var(--font-josefin)", fontSize: "0.875rem" }}
                        >
                            Über Uns
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Bottom decorative element */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-16">
                <div className="w-full h-full border-l border-r border-b border-gold/30" />
            </div>
        </section>
    );
}
