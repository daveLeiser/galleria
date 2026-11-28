"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

interface MaskedRevealProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

/**
 * Slides editorial headlines cleanly upward from an invisible baseline mask
 * (Quiet Luxury typography reveal matching the 3D Hero's pacing).
 */
export function MaskedReveal({ children, delay = 0, className = "" }: MaskedRevealProps) {
    return (
        <div className={`overflow-hidden ${className}`}>
            <motion.div
                initial={{ y: "100%", opacity: 0.01 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, delay, ease: LUXURY_EASE }}
            >
                {children}
            </motion.div>
        </div>
    );
}

interface GoldHairlineProps {
    className?: string;
    origin?: "left" | "center";
    delay?: number;
}

/**
 * Architectural gold hairline that gracefully draws itself as the section enters view.
 */
export function GoldHairline({
    className = "",
    origin = "left",
    delay = 0.15,
}: GoldHairlineProps) {
    return (
        <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.05, delay, ease: LUXURY_EASE }}
            style={{ transformOrigin: origin }}
            className={`h-[1px] bg-gradient-to-r ${
                origin === "center"
                    ? "from-transparent via-gold/70 to-transparent"
                    : "from-gold/70 via-gold/30 to-transparent"
            } ${className}`}
        />
    );
}
