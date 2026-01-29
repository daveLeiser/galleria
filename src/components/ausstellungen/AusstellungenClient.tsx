"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Exhibition } from "@/data/exhibitions";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function ExhibitionCard({
    exhibition,
    index,
    featured = false,
}: {
    exhibition: Exhibition;
    index: number;
    featured?: boolean;
}) {
    const imageUrl = exhibition.image || "/images/exhibition.png"; // Fallback to default

    return (
        <Link href={`/ausstellungen/${exhibition.id}`}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className={`group relative bg-white border border-light hover:border-gold/30 transition-all duration-500 hover:shadow-xl overflow-hidden cursor-pointer ${featured ? "lg:col-span-2" : ""
                    }`}
            >
                {/* Image */}
                <div
                    className={`relative ${featured ? "h-64 lg:h-80" : "h-48"}`}
                >
                    <Image
                        src={imageUrl}
                        alt={exhibition.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Featured badge */}
                    {featured && (
                        <div className="absolute top-4 left-4 bg-gold text-white px-3 py-1 text-xs tracking-wider uppercase z-10" style={{ fontFamily: "var(--font-josefin)" }}>
                            Aktuell
                        </div>
                    )}

                    {/* Past badge */}
                    {exhibition.past && (
                        <div className="absolute top-4 left-4 bg-warm-gray text-white px-3 py-1 text-xs tracking-wider uppercase z-10" style={{ fontFamily: "var(--font-josefin)" }}>
                            Vergangen
                        </div>
                    )}

                    {/* Golden frame overlay */}
                    <div className="absolute inset-3 border border-gold/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className={`p-6 ${featured ? "lg:p-8" : ""}`}>
                    {/* Date */}
                    <div className="flex items-center gap-2 text-gold mb-3">
                        <Calendar size={14} />
                        <span
                            className="text-xs tracking-wide"
                            style={{ fontFamily: "var(--font-josefin)" }}
                        >
                            {exhibition.dateFrom} – {exhibition.dateTo}
                        </span>
                    </div>

                    {/* Title */}
                    <h3
                        className={`text-charcoal mb-3 group-hover:text-gold transition-colors duration-300 ${featured ? "text-2xl" : "text-lg"
                            }`}
                        style={{ fontFamily: "var(--font-playfair)" }}
                    >
                        {exhibition.title}
                    </h3>

                    {/* Description */}
                    <p
                        className="text-warm-gray leading-relaxed mb-4"
                        style={{
                            fontFamily: "var(--font-cormorant)",
                            fontSize: featured ? "1.1rem" : "1rem",
                        }}
                    >
                        {exhibition.description}
                    </p>

                    {/* Long description for featured */}
                    {featured && exhibition.longDescription && (
                        <p
                            className="text-warm-gray leading-relaxed mb-4 hidden lg:block"
                            style={{
                                fontFamily: "var(--font-cormorant)",
                                fontSize: "1rem",
                            }}
                        >
                            {exhibition.longDescription}
                        </p>
                    )}

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-gold group-hover:gap-3 transition-all duration-300" style={{ fontFamily: "var(--font-josefin)", fontSize: "0.8rem" }}>
                        <span className="tracking-wider uppercase">Mehr erfahren</span>
                        <ArrowRight size={14} />
                    </div>
                </div>

                {/* Corner decorations on hover */}
                <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
        </Link>
    );
}

export function AusstellungenClient({ exhibitions }: { exhibitions: Exhibition[] }) {
    const pastExhibitions = exhibitions.filter((e) => e.past);

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
                            Kunst erleben
                        </span>
                        <h1
                            className="text-charcoal mb-6"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Ausstellungen
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
                            Ein Rückblick auf unsere vergangenen Ausstellungen – lassen Sie sich
                            von Kunst, Kreativität und meisterhafter Rahmenkunst inspirieren.
                        </p>
                    </motion.div>
                </div>
            </section>



            {/* Past Exhibitions */}
            {pastExhibitions.length > 0 && (
                <section className="section bg-charcoal relative overflow-hidden">
                    <div className="absolute inset-0 grain-overlay opacity-5" />
                    <div className="container relative z-10">
                        <SectionHeader
                            subtitle="Rückblick"
                            title="Vergangene Ausstellungen"
                            description="Ein Blick zurück auf unsere bisherigen Veranstaltungen."
                            light={true}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {pastExhibitions.map((exhibition, index) => (
                                <ExhibitionCard
                                    key={exhibition.id}
                                    exhibition={exhibition}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}



            <ContactCTA />
        </>
    );
}
