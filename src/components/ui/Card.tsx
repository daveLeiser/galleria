"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    variant?: "default" | "elevated" | "paper";
    className?: string;
    hover?: boolean;
    delay?: number;
}

export function Card({
    children,
    variant = "default",
    className = "",
    hover = true,
    delay = 0,
}: CardProps) {
    const variantClasses = {
        default: "card",
        elevated: "card-elevated",
        paper: "card-paper",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
            whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : undefined}
            className={`${variantClasses[variant]} p-6 md:p-8 ${className}`}
        >
            {children}
        </motion.div>
    );
}
