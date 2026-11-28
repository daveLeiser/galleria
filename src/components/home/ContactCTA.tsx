"use client";

import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { businessInfo } from "@/config/businessInfo";
import { MaskedReveal, GoldHairline } from "@/components/ui/EditorialMotion";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

const quickLinks = [
    { href: "/dienstleistungen", label: "Dienstleistungen" },
    { href: "/ausstellungen", label: "Ausstellungen" },
    { href: "/erfolgsstories", label: "Erfolgsstories" },
    { href: "/ueber-uns", label: "Über Uns" },
];

export function ContactCTA() {
    return (
        <section
            id="kontakt"
            className="relative bg-paper py-24 md:py-32 overflow-hidden border-t border-gold/15"
        >
            {/* Subtle paper dot texture */}
            <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" />

            <div className="container relative z-10">
                {/* Styled like a Fine Letterpress Swiss Gallery Invitation Card */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.9, ease: LUXURY_EASE }}
                    className="relative max-w-4xl mx-auto bg-cream border border-gold/30 p-3 sm:p-4 shadow-[0_24px_70px_rgba(44,44,44,0.07)]"
                >
                    {/* Fine Inner Double Hairline Frame */}
                    <div className="relative border border-gold/20 px-6 py-12 sm:px-12 sm:py-16 md:px-16 md:py-20 text-center">
                        {/* Delicate Gold Corner Accents */}
                        <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-gold/60" />
                        <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-gold/60" />
                        <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-gold/60" />
                        <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-gold/60" />

                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: LUXURY_EASE }}
                            className="text-nav text-gold mb-4 block tracking-[0.3em]"
                            style={{ fontSize: "0.75rem" }}
                        >
                            Persönliche Beratung
                        </motion.span>

                        <MaskedReveal>
                            <h2
                                className="text-charcoal mb-5"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                Lassen Sie uns Ihr Werk gemeinsam rahmen
                            </h2>
                        </MaskedReveal>

                        <GoldHairline origin="center" className="w-28 mx-auto mb-7" />

                        <motion.p
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15, duration: 0.8, ease: LUXURY_EASE }}
                            className="text-warm-gray mb-10 max-w-2xl mx-auto leading-relaxed"
                            style={{
                                fontFamily: "var(--font-cormorant)",
                                fontSize: "clamp(1.125rem, 1.8vw, 1.3125rem)",
                            }}
                        >
                            Ob massgefertigter Kunstrahmen, fachgerechte Restauration oder ein
                            unverbindliches Gespräch bei uns im Atelier – wir nehmen uns gerne
                            Zeit für Ihr Anliegen.
                        </motion.p>

                        {/* Primary Contact Actions */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.25, duration: 0.7, ease: LUXURY_EASE }}
                            className="flex flex-col sm:flex-row gap-3.5 justify-center items-center mb-10"
                        >
                            <a
                                href={businessInfo.contact.phoneHref}
                                className="btn btn-primary group w-full sm:w-auto"
                            >
                                <Phone size={16} />
                                {businessInfo.contact.phoneDisplay}
                            </a>
                            <a
                                href={businessInfo.contact.emailHref}
                                className="btn btn-outline group w-full sm:w-auto"
                            >
                                <Mail size={16} />
                                E-Mail schreiben
                            </a>
                        </motion.div>

                        {/* Quiet Secondary Navigation */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.35, duration: 0.7 }}
                            className="pt-8 border-t border-gold/20 flex flex-wrap justify-center gap-x-7 gap-y-3"
                        >
                            {quickLinks.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-warm-gray hover:text-gold transition-colors inline-flex items-center gap-1.5 group text-xs uppercase tracking-[0.2em]"
                                    style={{ fontFamily: "var(--font-josefin)" }}
                                >
                                    {item.label}
                                    <ArrowRight
                                        size={13}
                                        className="text-gold/70 group-hover:translate-x-1 transition-transform"
                                    />
                                </Link>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
