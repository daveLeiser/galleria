"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    href?: string;
    onClick?: () => void;
    className?: string;
    icon?: boolean;
}

export function Button({
    children,
    variant = "primary",
    size = "md",
    href,
    onClick,
    className = "",
    icon = false,
}: ButtonProps) {
    const sizeClasses = {
        sm: "py-2 px-4 text-xs",
        md: "py-3 px-6",
        lg: "py-4 px-8",
    };

    const baseClass = `btn btn-${variant} ${sizeClasses[size]} ${className}`;

    const content = (
        <>
            {children}
            {icon && <ArrowRight size={16} className="ml-2" />}
        </>
    );

    const MotionComponent = motion.button;
    const MotionLink = motion(Link);

    if (href) {
        return (
            <MotionLink
                href={href}
                className={baseClass}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                {content}
            </MotionLink>
        );
    }

    return (
        <MotionComponent
            className={baseClass}
            onClick={onClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            {content}
        </MotionComponent>
    );
}
