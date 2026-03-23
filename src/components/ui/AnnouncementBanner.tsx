"use client";

import { useState } from "react";
import { businessInfo } from "@/config/businessInfo";
import { motion, AnimatePresence } from "framer-motion";

export function AnnouncementBanner() {
    const [isVisible, setIsVisible] = useState(true);
    
    // We cast this as any or explicitly check because we added it manually to the object
    const announcement = (businessInfo as any).announcement;
    const active = announcement?.active;
    const message = announcement?.message;

    if (!active || !message) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-charcoal text-cream-dark text-center py-2.5 px-4 relative flex items-center justify-center font-sans tracking-widest uppercase text-xs sm:text-sm z-[60] overflow-hidden"
                >
                    <p className="mr-8 text-cream-dark leading-snug">{message}</p>
                    <button 
                        onClick={() => setIsVisible(false)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-warm-gray-light hover:text-gold transition-colors p-1"
                        aria-label="Schließen"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
