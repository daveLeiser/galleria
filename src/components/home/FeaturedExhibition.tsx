"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Sample featured exhibition
const featuredExhibition = {
    title: "Schweizer Meister der Moderne",
    dateFrom: "15. Januar 2025",
    dateTo: "28. Februar 2025",
    description:
        "Eine exklusive Ausstellung zeitgenössischer Schweizer Künstler mit Fokus auf abstrakte Expressionen und innovative Rahmenkonzepte. Erleben Sie die Verschmelzung von traditioneller Handwerkskunst und modernem Ausdruck.",
    image: "/images/exhibition.png",
};

export function FeaturedExhibition() {
    return (
        <section className="section bg-cream-dark relative overflow-hidden">
            {/* Decorative corner elements */}
            <div className="absolute top-12 left-12 w-24 h-24 border-l border-t border-gold/30 hidden lg:block" />
            <div className="absolute bottom-12 right-12 w-24 h-24 border-r border-b border-gold/30 hidden lg:block" />

            <div className="container">
                <SectionHeader
                    subtitle="Aktuell"
                    title="Unsere Ausstellung"
                    description="Entdecken Sie unsere aktuellen Ausstellungen und lassen Sie sich von Kunst und Rahmenkunst inspirieren."
                />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white shadow-lg overflow-hidden">
                        {/* Image side */}
                        <div className="relative h-64 lg:h-auto min-h-[300px] lg:min-h-[400px]">
                            <Image
                                src={featuredExhibition.image}
                                alt={featuredExhibition.title}
                                fill
                                className="object-cover"
                            />
                            {/* Golden frame overlay */}
                            <div className="absolute inset-4 border border-gold/30 pointer-events-none" />
                        </div>

                        {/* Content side */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            {/* Date badge */}
                            <div className="flex items-center gap-2 text-gold mb-4">
                                <Calendar size={16} />
                                <span
                                    className="text-sm tracking-wide"
                                    style={{ fontFamily: "var(--font-josefin)" }}
                                >
                                    {featuredExhibition.dateFrom} – {featuredExhibition.dateTo}
                                </span>
                            </div>

                            {/* Title */}
                            <h3
                                className="text-2xl lg:text-3xl text-charcoal mb-4"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                {featuredExhibition.title}
                            </h3>

                            {/* Description */}
                            <p
                                className="text-warm-gray leading-relaxed mb-6"
                                style={{
                                    fontFamily: "var(--font-cormorant)",
                                    fontSize: "1.1rem",
                                }}
                            >
                                {featuredExhibition.description}
                            </p>

                            {/* CTA */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/ausstellungen"
                                    className="btn btn-primary group"
                                >
                                    Mehr erfahren
                                    <ArrowRight
                                        size={16}
                                        className="ml-2 group-hover:translate-x-1 transition-transform"
                                    />
                                </Link>
                                <Link
                                    href="/ausstellungen"
                                    className="btn btn-ghost"
                                >
                                    Alle Ausstellungen
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
