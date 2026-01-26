"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    description?: string;
    centered?: boolean;
    light?: boolean;
    children?: ReactNode;
}

export function SectionHeader({
    title,
    subtitle,
    description,
    centered = true,
    light = false,
}: SectionHeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}
        >
            {subtitle && (
                <span
                    className={`text-nav text-sm mb-4 block ${light ? "text-gold-light" : "text-gold"
                        }`}
                >
                    {subtitle}
                </span>
            )}
            <h2
                className={light ? "text-cream" : "text-charcoal"}
                style={{ fontFamily: "var(--font-playfair)" }}
            >
                {title}
            </h2>
            <div
                className={`ornament ${centered ? "mx-auto" : ""} ${light ? "opacity-60" : ""
                    }`}
            />
            {description && (
                <p
                    className={`max-w-2xl ${centered ? "mx-auto" : ""} mt-4 ${light ? "text-warm-gray-light" : "text-warm-gray"
                        }`}
                    style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.125rem" }}
                >
                    {description}
                </p>
            )}
        </motion.div>
    );
}
