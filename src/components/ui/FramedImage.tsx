"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface FramedImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    variant?: "gold" | "subtle" | "simple";
    className?: string;
    priority?: boolean;
}

export function FramedImage({
    src,
    alt,
    width = 600,
    height = 400,
    variant = "gold",
    className = "",
    priority = false,
}: FramedImageProps) {
    const frameClasses = {
        gold: "framed-image",
        subtle: "framed-image-subtle",
        simple: "overflow-hidden",
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02 }}
            className={`${frameClasses[variant]} ${className}`}
        >
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="w-full h-auto object-cover"
                priority={priority}
            />
        </motion.div>
    );
}
