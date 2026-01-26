"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/HeroBackground.png"
                    alt="Galleria Flury Atelier"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cream/90 via-cream/80 to-paper/85" />
            </div>

            {/* Decorative pattern */}
            <div className="absolute inset-0 pattern-dots opacity-20" />

            {/* Decorative golden corners */}
            <div className="absolute top-8 left-8 w-32 h-32 border-l-2 border-t-2 border-gold opacity-40 hidden lg:block" />
            <div className="absolute top-8 right-8 w-32 h-32 border-r-2 border-t-2 border-gold opacity-40 hidden lg:block" />
            <div className="absolute bottom-8 left-8 w-32 h-32 border-l-2 border-b-2 border-gold opacity-40 hidden lg:block" />
            <div className="absolute bottom-8 right-8 w-32 h-32 border-r-2 border-b-2 border-gold opacity-40 hidden lg:block" />

            {/* Floating decorative elements */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-gold/5 to-transparent blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-burgundy/5 to-transparent blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Content */}
            <div className="relative z-10 container text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Subtitle */}
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-nav text-gold mb-6 block tracking-[0.3em]"
                        style={{ fontSize: "0.875rem" }}
                    >
                        Atelier für Kunst & Rahmen
                    </motion.span>

                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="mb-6"
                        style={{ fontFamily: "var(--font-playfair)" }}
                    >
                        <span className="block text-charcoal">Meisterhafte</span>
                        <span className="block text-gradient-gold">Rahmenkunst</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-warm-gray max-w-2xl mx-auto mb-10"
                        style={{
                            fontFamily: "var(--font-cormorant)",
                            fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
                            lineHeight: 1.8,
                        }}
                    >
                        Seit Generationen verbinden wir Tradition mit Innovation.
                        Entdecken Sie exquisite Bilderrahmen, einzigartige Kunstwerke
                        und massgeschneiderte Lösungen für Ihre wertvollsten Stücke.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                    >
                        <Link href="/dienstleistungen" className="btn btn-primary group">
                            Unsere Leistungen
                            <ArrowRight
                                size={16}
                                className="ml-2 group-hover:translate-x-1 transition-transform"
                            />
                        </Link>
                        <Link href="#kontakt" className="btn btn-outline">
                            Beratung anfragen
                        </Link>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="mt-8"
                    >
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="flex flex-col items-center gap-2 text-warm-gray"
                        >
                            <span
                                className="text-nav text-xs tracking-widest"
                                style={{ fontFamily: "var(--font-josefin)" }}
                            >
                                Entdecken
                            </span>
                            <ChevronDown size={20} />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
        </section>
    );
}
