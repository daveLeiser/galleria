"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedHamburger } from "../ui/AnimatedHamburger";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/dienstleistungen", label: "Dienstleistungen" },
    { href: "/ausstellungen", label: "Ausstellungen" },
    { href: "/erfolgsstories", label: "Erfolgsstories" },
    { href: "/ueber-uns", label: "Über Uns" },
    { href: "/#oeffnungszeiten", label: "Öffnungszeiten" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        const isHashLink = href.startsWith("/#") || href.startsWith("#");
        if (isHashLink) {
            const id = href.split("#")[1];
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <div className={`sticky top-0 z-50`}>
            {/* Main Header */}
            <header
                className={`transition-all duration-500 ${isScrolled
                    ? "bg-cream/95 backdrop-blur-md shadow-md py-3"
                    : "bg-transparent py-6"
                    }`}
            >
                <div className="container flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="group">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col"
                        >
                            <span
                                className="text-2xl md:text-3xl tracking-wide"
                                style={{ fontFamily: "var(--font-playfair)", fontWeight: 500 }}
                            >
                                <span className="text-gradient-gold">Galleria</span>{" "}
                                <span className="text-charcoal">Flury</span>
                            </span>
                            <span
                                className="text-xs tracking-[0.3em] text-warm-gray uppercase mt-1 whitespace-nowrap"
                                style={{ fontFamily: "var(--font-josefin)" }}
                            >
                                Kunst • Bilder • Rahmen
                            </span>
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <Link
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="text-nav gold-underline text-charcoal hover:text-gold transition-colors whitespace-nowrap"
                                >
                                    {link.label}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                        >
                            <Link 
                                href="#kontakt" 
                                className="btn btn-primary"
                                onClick={(e) => handleNavClick(e, "#kontakt")}
                            >
                                Kontakt
                            </Link>
                        </motion.div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <AnimatedHamburger
                        isOpen={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden hover:opacity-80 transition-opacity"
                    />
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-cream border-b border-light overflow-hidden"
                    >
                        <nav className="container py-6 flex flex-col gap-4">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-nav text-lg text-charcoal hover:text-gold transition-colors block py-2"
                                        onClick={(e) => {
                                            setIsMobileMenuOpen(false);
                                            handleNavClick(e, link.href);
                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="pt-4 pb-2"
                            >
                                <Link
                                    href="#kontakt"
                                    className="btn btn-primary w-full"
                                    onClick={(e) => {
                                        setIsMobileMenuOpen(false);
                                        handleNavClick(e, "#kontakt");
                                    }}
                                >
                                    Kontakt
                                </Link>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
