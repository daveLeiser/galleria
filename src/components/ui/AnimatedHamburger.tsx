"use client";

import { useState } from "react";

interface AnimatedHamburgerProps {
    isOpen: boolean;
    onClick: () => void;
    className?: string;
    strokeColor?: string;
    strokeWidth?: number;
    size?: number;
}

export function AnimatedHamburger({
    isOpen,
    onClick,
    className = "",
    strokeColor = "#2C2C2C", // charcoal
    strokeWidth = 3,
    size = 48
}: AnimatedHamburgerProps) {
    return (
        <label
            style={{
                cursor: "pointer",
                width: size,
                height: size,
            }}
            className={className}
        >
            <input
                type="checkbox"
                checked={isOpen}
                onChange={onClick}
                style={{ display: "none" }}
                aria-label="Toggle menu"
            />
            <svg
                viewBox="0 0 32 32"
                style={{
                    width: "100%",
                    height: "100%",
                    transform: isOpen ? "rotate(-45deg)" : "rotate(0deg)",
                    transition: "transform 600ms cubic-bezier(0.4, 0, 0.2, 1)",
                }}
            >
                <path
                    className="line line-top-bottom"
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                    fill="none"
                    stroke={isOpen ? "#C9A961" : strokeColor}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={strokeWidth}
                    strokeDasharray={isOpen ? "20 300" : "12 63"}
                    strokeDashoffset={isOpen ? -32.42 : 0}
                    style={{
                        transition:
                            "stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke 600ms cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                />
                <path
                    className="line"
                    d="M7 16 27 16"
                    fill="none"
                    stroke={isOpen ? "#C9A961" : strokeColor}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={strokeWidth}
                    style={{
                        transition:
                            "stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke 600ms cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                />
            </svg>
        </label>
    );
}
