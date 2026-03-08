"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Exhibition } from "@/data/exhibitions";
import { Calendar, ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

export function ExhibitionDetail({ exhibition }: { exhibition: Exhibition }) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    // Build the full list of lightbox-navigable images (gallery only)
    const galleryImages = exhibition.gallery ?? [];

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setTimeout(() => setLightboxIndex(null), 300);
    };

    const showPrev = useCallback(() => {
        setLightboxIndex((i) => (i === null ? 0 : (i - 1 + galleryImages.length) % galleryImages.length));
    }, [galleryImages.length]);

    const showNext = useCallback(() => {
        setLightboxIndex((i) => (i === null ? 0 : (i + 1) % galleryImages.length));
    }, [galleryImages.length]);

    useEffect(() => {
        if (!lightboxOpen) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") showPrev();
            else if (e.key === "ArrowRight") showNext();
            else if (e.key === "Escape") closeLightbox();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [lightboxOpen, showPrev, showNext]);

    const currentImage = lightboxIndex !== null ? galleryImages[lightboxIndex] : null;

    const imageUrl = exhibition.image || "/images/exhibition.png";

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
                    >
                        {/* Back button */}
                        <Link
                            href="/ausstellungen"
                            className="inline-flex items-center gap-2 text-warm-gray hover:text-gold transition-colors mb-8"
                            style={{ fontFamily: "var(--font-josefin)" }}
                        >
                            <ArrowLeft size={16} />
                            Zurück zu allen Ausstellungen
                        </Link>

                        {/* Date */}
                        <div className="flex items-center gap-2 text-gold mb-4">
                            <Calendar size={16} />
                            <span
                                className="text-sm tracking-wide"
                                style={{ fontFamily: "var(--font-josefin)" }}
                            >
                                {exhibition.dateFrom} – {exhibition.dateTo}
                            </span>
                        </div>

                        {/* Title */}
                        <h1
                            className="text-charcoal mb-6"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            {exhibition.title}
                        </h1>
                        <div className="ornament mb-8" />

                        {/* Description */}
                        <p
                            className="text-warm-gray text-lg max-w-3xl"
                            style={{
                                fontFamily: "var(--font-cormorant)",
                                fontSize: "1.25rem",
                                lineHeight: 1.8,
                            }}
                        >
                            {exhibition.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Cover Image */}
            <section className="section bg-paper">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-[16/9] max-w-5xl mx-auto overflow-hidden group"
                    >
                        <Image
                            src={imageUrl}
                            alt={exhibition.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </motion.div>
                </div>
            </section>

            {/* Long Description */}
            {exhibition.longDescription && (
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
                            <p
                                className="text-warm-gray-light"
                                style={{
                                    fontFamily: "var(--font-cormorant)",
                                    fontSize: "1.25rem",
                                    lineHeight: 1.8,
                                }}
                            >
                                {exhibition.longDescription}
                            </p>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Gallery */}
            {exhibition.gallery && exhibition.gallery.length > 0 && (
                <section className="section bg-paper">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-12"
                        >
                            <h2
                                className="text-charcoal mb-4"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                Galerie
                            </h2>
                            <div className="ornament mx-auto" />
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {exhibition.gallery.map((image, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    className="relative aspect-square overflow-hidden cursor-pointer group"
                                    onClick={() => openLightbox(index)}
                                >
                                    <Image
                                        src={image}
                                        alt={`${exhibition.title} - Bild ${index + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxOpen && currentImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                        onClick={closeLightbox}
                    >
                        {/* Close */}
                        <button
                            className="absolute top-4 right-4 text-white hover:text-gold transition-colors z-10"
                            onClick={closeLightbox}
                        >
                            <X size={32} />
                        </button>

                        {/* Prev */}
                        {galleryImages.length > 1 && (
                            <button
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors z-10 bg-black/40 rounded-full p-2"
                                onClick={(e) => { e.stopPropagation(); showPrev(); }}
                                aria-label="Vorheriges Bild"
                            >
                                <ChevronLeft size={40} />
                            </button>
                        )}

                        {/* Next */}
                        {galleryImages.length > 1 && (
                            <button
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors z-10 bg-black/40 rounded-full p-2"
                                onClick={(e) => { e.stopPropagation(); showNext(); }}
                                aria-label="Nächstes Bild"
                            >
                                <ChevronRight size={40} />
                            </button>
                        )}

                        {/* Image */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={lightboxIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.25 }}
                                className="relative max-w-7xl max-h-[90vh] w-full h-full"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Image
                                    src={currentImage}
                                    alt={`Bild ${(lightboxIndex ?? 0) + 1} von ${galleryImages.length}`}
                                    fill
                                    className="object-contain"
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Counter */}
                        {galleryImages.length > 1 && (
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm" style={{ fontFamily: "var(--font-josefin)" }}>
                                {(lightboxIndex ?? 0) + 1} / {galleryImages.length}
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
