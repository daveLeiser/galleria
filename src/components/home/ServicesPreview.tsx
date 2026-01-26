"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Frame, Palette, Paintbrush, Sparkles } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
    {
        icon: Frame,
        title: "Bilderrahmen nach Mass",
        description:
            "Individuelle Rahmen aus erlesenen Materialien, perfekt abgestimmt auf Ihr Kunstwerk und Ihren Raum.",
    },
    {
        icon: Palette,
        title: "Grafiken & Kunstwerke",
        description:
            "Ausgewählte Grafiken internationaler Kunstverläge und Werke bekannter Künstler.",
    },
    {
        icon: Paintbrush,
        title: "Einrahmen & Restauration",
        description:
            "Professionelles Einrahmen nach Ihren Wünschen und fachgerechte Restauration wertvoller Bilder.",
    },
    {
        icon: Sparkles,
        title: "Kunstrahmen aller Arten",
        description:
            "Vom klassischen Goldrahmen bis zum modernen Schattenfugenrahmen – in unserem Atelier gefertigt.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
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

export function ServicesPreview() {
    return (
        <section className="section bg-cream relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-paper to-transparent opacity-50" />

            <div className="container relative z-10">
                <SectionHeader
                    subtitle="Was wir bieten"
                    title="Unsere Dienstleistungen"
                    description="Entdecken Sie unser vielseitiges Angebot rund um Kunst, Bilder und Rahmen. Qualität und persönliche Beratung stehen bei uns an erster Stelle."
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            variants={itemVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="group bg-white p-8 border border-light hover:border-gold/30 transition-all duration-500 hover:shadow-lg relative"
                        >
                            {/* Corner accent */}
                            <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Icon */}
                            <div className="w-14 h-14 mb-6 flex items-center justify-center bg-paper rounded-sm group-hover:bg-gold/10 transition-colors duration-500">
                                <service.icon
                                    size={28}
                                    className="text-gold group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <h3
                                className="text-lg mb-3 text-charcoal group-hover:text-gold transition-colors duration-300"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                {service.title}
                            </h3>
                            <p
                                className="text-warm-gray text-sm leading-relaxed"
                                style={{ fontFamily: "var(--font-cormorant)" }}
                            >
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-center mt-12"
                >
                    <Link
                        href="/dienstleistungen"
                        className="btn btn-ghost group inline-flex items-center"
                    >
                        Alle Leistungen entdecken
                        <ArrowRight
                            size={16}
                            className="ml-2 group-hover:translate-x-1 transition-transform"
                        />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
