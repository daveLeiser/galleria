"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Story } from "@/data/stories";
import { Quote, ArrowRight } from "lucide-react";
import Image from "next/image";

function StoryCard({ story, index }: { story: Story; index: number }) {
    const isEven = index % 2 === 0;
    const images = story.images || ["/images/success-story.png"]; // Fallback to default
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index !== 0 ? "mt-16 lg:mt-24" : ""
                }`}
        >
            {/* Image Gallery */}
            <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className={`relative ${isEven ? "" : "lg:order-2"}`}
            >
                <div className="relative h-64 lg:h-80 overflow-hidden group">
                    <Image
                        src={images[currentImageIndex]}
                        alt={`${story.title} - Bild ${currentImageIndex + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Decorative frame */}
                    <div className="absolute inset-4 border border-gold/30 group-hover:border-gold/50 transition-colors duration-500" />

                    {/* Navigation arrows - only show if multiple images */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-charcoal/80 hover:bg-charcoal text-cream p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
                                aria-label="Vorheriges Bild"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-charcoal/80 hover:bg-charcoal text-cream p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
                                aria-label="Nächstes Bild"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>
                        </>
                    )}
                </div>

                {/* Image counter dots - only show if multiple images */}
                {images.length > 1 && (
                    <div className="flex justify-center gap-2 mt-4">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentImageIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex
                                    ? "bg-gold w-6"
                                    : "bg-warm-gray/30 hover:bg-warm-gray/50"
                                    }`}
                                aria-label={`Bild ${idx + 1} anzeigen`}
                            />
                        ))}
                    </div>
                )}

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-gold" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-gold" />
            </motion.div>

            {/* Content */}
            <div className={isEven ? "" : "lg:order-1"}>
                {/* Subtitle */}
                <span
                    className="text-nav text-gold mb-3 block tracking-[0.2em]"
                    style={{ fontSize: "0.7rem" }}
                >
                    {story.subtitle}
                </span>

                {/* Title */}
                <h3
                    className="text-2xl lg:text-3xl text-charcoal mb-5"
                    style={{ fontFamily: "var(--font-playfair)" }}
                >
                    {story.title}
                </h3>

                {/* Description */}
                <p
                    className="text-warm-gray leading-relaxed mb-6"
                    style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem" }}
                >
                    {story.description}
                </p>

                {/* Testimonial */}
                {story.testimonial && (
                    <div className="bg-paper p-6 border-l-2 border-gold mb-6">
                        <Quote size={24} className="text-gold mb-3 opacity-60" />
                        <p
                            className="text-charcoal italic leading-relaxed mb-3"
                            style={{
                                fontFamily: "var(--font-cormorant)",
                                fontSize: "1.05rem",
                            }}
                        >
                            &ldquo;{story.testimonial}&rdquo;
                        </p>
                        {story.clientName && (
                            <p
                                className="text-warm-gray text-sm"
                                style={{ fontFamily: "var(--font-josefin)" }}
                            >
                                — {story.clientName}
                            </p>
                        )}
                    </div>
                )}
            </div>
        </motion.article>
    );
}

export function ErfolgsstoriesClient({ stories }: { stories: Story[] }) {
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
                            Unsere Arbeit
                        </span>
                        <h1
                            className="text-charcoal mb-6"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Erfolgsstories
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
                            Entdecken Sie ausgewählte Projekte, die wir mit Stolz für unsere
                            Kunden realisiert haben. Jede Geschichte ist ein Zeugnis unserer
                            Leidenschaft für Qualität und Perfektion.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stories Grid */}
            <section className="section bg-cream">
                <div className="container">
                    {stories.map((story, index) => (
                        <StoryCard key={story.id} story={story} index={index} />
                    ))}
                </div>
            </section>

            {/* CTA Section */}
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
                        <h2
                            className="text-cream mb-6"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Schreiben Sie Ihre eigene Erfolgsgeschichte
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
                            Ob kleines Familienfoto oder grosse Kunstsammlung – wir freuen uns
                            darauf, auch Ihr Projekt zu einem Erfolg zu machen.
                        </p>
                        <a href="#kontakt" className="btn btn-primary group inline-flex items-center">
                            Projekt besprechen
                            <ArrowRight
                                size={16}
                                className="ml-2 group-hover:translate-x-1 transition-transform"
                            />
                        </a>
                    </motion.div>
                </div>
            </section>

            <ContactCTA />
        </>
    );
}
