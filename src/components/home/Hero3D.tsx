"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { GalleryFrameScene } from "./GalleryFrameScene";

export function Hero3D() {
    const containerRef = useRef<HTMLDivElement>(null);
    // Zero-re-render ref linking CTA hover resonance directly to the 3D atelier lighting
    const ctaHoveredRef = useRef<boolean>(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Pillar 3: Cinematic Rack Focus — headline softly recedes into depth & blur
    // as the camera pulls focus onto the sculpting Blattgold frame & 4 layers
    const headlineOpacity = useTransform(scrollYProgress, [0, 0.10, 0.28], [1, 0.88, 0]);
    const headlineY = useTransform(scrollYProgress, [0, 0.28], [0, -22]);
    const headlineScale = useTransform(scrollYProgress, [0, 0.28], [1, 0.92]);
    const headlineBlurVal = useTransform(scrollYProgress, [0.02, 0.28], [0, 7]);
    const headlineFilter = useMotionTemplate`blur(${headlineBlurVal}px)`;
    const headlinePointerEvents = useTransform(scrollYProgress, (v) =>
        v > 0.18 ? "none" : "auto"
    );

    // Scroll indicator fades out immediately when scrolling starts
    const indicatorOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

    // Frame stays pinned in place and dissolves completely to 0 BEFORE unpinning,
    // while ServicesPreview scrolls cleanly up from below over the disappearing frame
    const canvasOpacity = useTransform(scrollYProgress, [0.54, 0.84], [1, 0]);
    const backdropOpacity = useTransform(scrollYProgress, [0.64, 0.92], [1, 0]);

    // Minimalist golden scroll progress line
    const progressScaleY = useTransform(scrollYProgress, [0, 0.85], [0, 1]);
    const progressLineOpacity = useTransform(scrollYProgress, [0.72, 0.88], [1, 0]);

    const handleCtaEnter = () => {
        ctaHoveredRef.current = true;
    };
    const handleCtaLeave = () => {
        ctaHoveredRef.current = false;
    };

    return (
        <section
            ref={containerRef}
            className="relative z-0 -mt-28 h-[235vh] mb-[-60vh]"
            aria-label="Galleria Flury – Meisterhafte Rahmenkunst"
        >
            {/* Sticky Pinned Gallery Stage */}
            <div className="sticky top-0 h-[100svh] w-full overflow-hidden flex items-center justify-center pt-10 sm:pt-12">
                {/* Warm Atelier Wall Backdrop with seamless top blend behind transparent Header */}
                <motion.div
                    style={{ opacity: backdropOpacity }}
                    className="absolute inset-0 pointer-events-none"
                >
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "radial-gradient(ellipse 80% 72% at 50% 48%, #FDFBF7 0%, #FAF8F5 52%, #EFE8DC 100%)",
                        }}
                    />
                    {/* Seamless top feather into body Cream (#FAF8F5) so zero seam ever appears behind Header */}
                    <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-cream via-cream/70 to-transparent" />

                    {/* Subtle museum paper dot pattern */}
                    <div className="absolute inset-0 pattern-dots opacity-20" />

                    {/* Subtle warm gallery light aura */}
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-gradient-to-br from-gold/8 to-transparent blur-3xl"
                        animate={{
                            scale: [1, 1.15, 1],
                            opacity: [0.35, 0.55, 0.35],
                        }}
                        transition={{
                            duration: 9,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-burgundy/5 to-transparent blur-3xl"
                        animate={{
                            scale: [1.15, 1, 1.15],
                            opacity: [0.2, 0.38, 0.2],
                        }}
                        transition={{
                            duration: 11,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </motion.div>

                {/* Interactive High-Definition 3D Blattgold Gallery Frame */}
                <motion.div
                    style={{ opacity: canvasOpacity }}
                    className="absolute inset-0 z-10 pointer-events-none"
                >
                    <GalleryFrameScene
                        sectionRef={containerRef}
                        ctaHoveredRef={ctaHoveredRef}
                    />
                </motion.div>

                {/* Phase 1: Centered Hero Typography inside the Open Museum Aperture with Rack Focus */}
                <motion.div
                    style={{
                        opacity: headlineOpacity,
                        y: headlineY,
                        scale: headlineScale,
                        filter: headlineFilter,
                        pointerEvents: headlinePointerEvents,
                    }}
                    className="relative z-20 w-full max-w-[300px] sm:max-w-2xl lg:max-w-3xl mx-auto text-center px-4 sm:px-6 will-change-transform"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Subtitle */}
                        <motion.span
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.22, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                            className="text-nav text-gold mb-2.5 sm:mb-5 block tracking-[0.2em] sm:tracking-[0.3em] text-[0.65rem] sm:text-[0.8125rem]"
                        >
                            Atelier für Kunst &amp; Rahmen
                        </motion.span>

                        {/* Main Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 22 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.38, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                            className="mb-3 sm:mb-5 !text-[2rem] sm:!text-[clamp(2.75rem,5.5vw,4.5rem)] !leading-[1.12] sm:!leading-[1.16]"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            <span className="block text-charcoal">Meisterhafte</span>
                            <span className="block text-gradient-gold">Rahmenkunst</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.56, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                            className="text-warm-gray max-w-[235px] sm:max-w-xl mx-auto mb-4 sm:mb-8 text-[0.9375rem] sm:text-[clamp(1.0625rem,1.8vw,1.3125rem)] leading-[1.52] sm:leading-[1.75]"
                            style={{
                                fontFamily: "var(--font-cormorant)",
                            }}
                        >
                            Seit Generationen verbinden wir Tradition mit Innovation.
                            Entdecken Sie exquisite Bilderrahmen, einzigartige Kunstwerke
                            und massgeschneiderte Lösungen für Ihre wertvollsten Stücke.
                        </motion.p>

                        {/* CTA Buttons (with Quiet Luxury Light Resonance on hover/focus) */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.74, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col sm:flex-row gap-2 sm:gap-3.5 justify-center items-center"
                        >
                            <Link
                                href="/dienstleistungen"
                                onMouseEnter={handleCtaEnter}
                                onMouseLeave={handleCtaLeave}
                                onFocus={handleCtaEnter}
                                onBlur={handleCtaLeave}
                                className="btn btn-primary group w-full sm:w-auto max-w-[235px] sm:max-w-none whitespace-nowrap !py-2.5 !px-5 sm:!py-4 sm:!px-10 !text-[0.72rem] sm:!text-[0.875rem]"
                            >
                                Unsere Leistungen
                                <ArrowRight
                                    size={15}
                                    className="ml-1.5 group-hover:translate-x-1 transition-transform"
                                />
                            </Link>
                            <Link
                                href="#kontakt"
                                onMouseEnter={handleCtaEnter}
                                onMouseLeave={handleCtaLeave}
                                onFocus={handleCtaEnter}
                                onBlur={handleCtaLeave}
                                className="btn btn-outline bg-cream/65 backdrop-blur-[2px] w-full sm:w-auto max-w-[235px] sm:max-w-none whitespace-nowrap !py-2.5 !px-5 sm:!py-4 sm:!px-10 !text-[0.72rem] sm:!text-[0.875rem]"
                            >
                                Beratung anfragen
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator (bottom center, fades cleanly on scroll start) */}
                <motion.div
                    style={{ opacity: indicatorOpacity }}
                    className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3, duration: 0.9 }}
                    >
                        <motion.div
                            animate={{ y: [0, 7, 0] }}
                            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                            className="flex flex-col items-center gap-1 text-warm-gray"
                        >
                            <span
                                className="text-nav text-[0.65rem] sm:text-[0.7rem] tracking-[0.28em]"
                                style={{ fontFamily: "var(--font-josefin)" }}
                            >
                                Entdecken
                            </span>
                            <ChevronDown size={17} className="text-gold" />
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Minimalist Vertical Gold Scroll Progress Indicator (Desktop) */}
                <motion.div
                    style={{ opacity: progressLineOpacity }}
                    className="hidden lg:flex flex-col items-center gap-2 absolute right-8 top-1/2 -translate-y-1/2 z-20 pointer-events-none"
                    aria-hidden="true"
                >
                    <div className="w-[1px] h-28 bg-gold/20 relative overflow-hidden">
                        <motion.div
                            style={{ scaleY: progressScaleY, transformOrigin: "top" }}
                            className="absolute inset-0 bg-gold"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
