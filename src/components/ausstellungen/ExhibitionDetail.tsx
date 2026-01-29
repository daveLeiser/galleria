"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Exhibition } from "@/data/exhibitions";
import { Calendar, ArrowLeft, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function ExhibitionDetail({ exhibition }: { exhibition: Exhibition }) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImage, setLightboxImage] = useState("");

    const openLightbox = (imageSrc: string) => {
        setLightboxImage(imageSrc);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setTimeout(() => setLightboxImage(""), 300);
    };

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
                        className="relative aspect-[16/9] max-w-5xl mx-auto overflow-hidden cursor-pointer group"
                        onClick={() => openLightbox(imageUrl)}
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
                                    onClick={() => openLightbox(image)}
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
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                        onClick={closeLightbox}
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-gold transition-colors"
                            onClick={closeLightbox}
                        >
                            <X size={32} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            className="relative max-w-7xl max-h-[90vh] w-full h-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={lightboxImage}
                                alt="Lightbox image"
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
