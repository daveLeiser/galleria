"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactCTA } from "@/components/home/ContactCTA";
import {
    Paintbrush,
    Sparkles,
    Wrench,
    Award,
} from "lucide-react";



const atelierServices = [
    {
        icon: Sparkles,
        title: "Kunstrahmen aller Arten",
        description:
            "In unserem Atelier fertigen wir Kunstrahmen aller Stilrichtungen – vom opulenten Barockrahmen über klassische Goldrahmen bis hin zu modernen Schattenfugenrahmen. Jeder Rahmen wird mit Liebe zum Detail und handwerklicher Präzision hergestellt.",
    },
    {
        icon: Paintbrush,
        title: "Einrahmen nach Kundenwunsch",
        description:
            "Bringen Sie uns Ihre Schätze – ob Familienfotos, Zertifikate, Textilien oder wertvolle Kunstwerke. Wir beraten Sie individuell und fertigen die perfekte Rahmenlösung nach Ihren Wünschen und passend zu Ihrem Interieur.",
    },
    {
        icon: Wrench,
        title: "Restauration von Bildern",
        description:
            "Mit Fachkenntnis und Sorgfalt restaurieren wir beschädigte Rahmen und Bilder. Unsere Expertise umfasst die Reparatur alter Rahmen, die Reinigung von Vergoldungen und die fachgerechte Konservierung wertvoller Stücke.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1] as const,
        },
    },
};

function ServiceCard({
    icon: Icon,
    title,
    description,
}: {
    icon: typeof Sparkles;
    title: string;
    description: string;
}) {
    return (
        <motion.div
            variants={itemVariants}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group relative bg-white p-8 border border-light hover:border-gold/30 transition-all duration-500 hover:shadow-xl"
        >
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Icon */}
            <div className="w-16 h-16 mb-6 bg-paper flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-500">
                <Icon
                    size={32}
                    className="text-gold group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            {/* Content */}
            <h3
                className="text-xl mb-4 text-charcoal group-hover:text-gold transition-colors duration-300"
                style={{ fontFamily: "var(--font-playfair)" }}
            >
                {title}
            </h3>
            <p
                className="text-warm-gray leading-relaxed"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.05rem" }}
            >
                {description}
            </p>
        </motion.div>
    );
}

export default function Dienstleistungen() {
    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-cream to-cream-dark relative overflow-hidden">
                <div className="absolute inset-0 pattern-dots opacity-30" />
                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <span
                            className="text-nav text-gold mb-4 block tracking-[0.3em]"
                            style={{ fontSize: "0.75rem" }}
                        >
                            Unser Angebot
                        </span>
                        <h1
                            className="text-charcoal mb-6"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Dienstleistungen
                        </h1>
                        <div className="ornament mx-auto mb-6" />
                        <p
                            className="text-warm-gray"
                            style={{
                                fontFamily: "var(--font-cormorant)",
                                fontSize: "1.25rem",
                                lineHeight: 1.8,
                            }}
                        >
                            Von der Auswahl des perfekten Kunstwerks bis zur massgeschneiderten
                            Rahmung – wir begleiten Sie mit Expertise und Leidenschaft auf dem
                            Weg zu Ihrer idealen Lösung.
                        </p>
                    </motion.div>
                </div>
            </section>



            {/* Im Eigenen Atelier Section */}
            <section className="section relative overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/uploads/Atelier.jpg')",
                        backgroundPosition: "center 40%"
                    }}
                />

                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-paper/40" />

                {/* Subtle gradient overlays */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cream-dark/60 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-paper/80 to-transparent" />

                {/* Decorative elements */}
                <div className="absolute top-12 left-12 w-32 h-32 border-l border-t border-gold/20 hidden lg:block" />
                <div className="absolute bottom-12 right-12 w-32 h-32 border-r border-b border-gold/20 hidden lg:block" />

                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-12 md:mb-16 text-center"
                    >
                        <span className="text-nav text-sm mb-4 block text-gold">
                            Handwerk
                        </span>
                        <h2
                            className="text-charcoal"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Im eigenen Atelier hergestellt
                        </h2>
                        <div className="ornament mx-auto" />
                        <p
                            className="max-w-2xl mx-auto mt-4 text-charcoal font-semibold"
                            style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.125rem" }}
                        >
                            Tradition trifft Präzision – unsere Handwerkskunst in Perfektion.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
                    >
                        {atelierServices.map((service) => (
                            <ServiceCard key={service.title} {...service} />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Quality Promise */}
            <section className="section bg-charcoal relative overflow-hidden">
                <div className="absolute inset-0 grain-overlay opacity-5" />
                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <Award size={48} className="text-gold mx-auto mb-6" />
                        <h2
                            className="text-cream mb-6"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Unser Qualitätsversprechen
                        </h2>
                        <div className="ornament mx-auto opacity-60 mb-6" />
                        <p
                            className="text-warm-gray-light mb-8"
                            style={{
                                fontFamily: "var(--font-cormorant)",
                                fontSize: "1.25rem",
                                lineHeight: 1.8,
                            }}
                        >
                            Jedes Werk, das unser Atelier verlässt, unterliegt strengen
                            Qualitätskontrollen. Sollte wider Erwarten ein Produkt nicht Ihren
                            Erwartungen entsprechen, tauschen wir es selbstverständlich
                            anstandslos aus. Ihr Vertrauen ist unser höchstes Gut.
                        </p>
                        <div className="flex flex-wrap justify-center gap-8 text-cream">
                            <div className="text-center">
                                <div
                                    className="text-3xl text-gold mb-2"
                                    style={{ fontFamily: "var(--font-playfair)" }}
                                >
                                    30+
                                </div>
                                <div
                                    className="text-sm text-warm-gray-light"
                                    style={{ fontFamily: "var(--font-josefin)" }}
                                >
                                    Jahre Erfahrung
                                </div>
                            </div>
                            <div className="text-center">
                                <div
                                    className="text-3xl text-gold mb-2"
                                    style={{ fontFamily: "var(--font-playfair)" }}
                                >
                                    1000+
                                </div>
                                <div
                                    className="text-sm text-warm-gray-light"
                                    style={{ fontFamily: "var(--font-josefin)" }}
                                >
                                    Zufriedene Kunden
                                </div>
                            </div>
                            <div className="text-center">
                                <div
                                    className="text-3xl text-gold mb-2"
                                    style={{ fontFamily: "var(--font-playfair)" }}
                                >
                                    100%
                                </div>
                                <div
                                    className="text-sm text-warm-gray-light"
                                    style={{ fontFamily: "var(--font-josefin)" }}
                                >
                                    Handarbeit
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <ContactCTA />
        </>
    );
}
