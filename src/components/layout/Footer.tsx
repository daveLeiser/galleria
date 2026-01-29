import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { businessInfo } from "@/config/businessInfo";

const quickLinks = [
    { href: "/dienstleistungen", label: "Dienstleistungen" },
    { href: "/ausstellungen", label: "Ausstellungen" },
    { href: "/erfolgsstories", label: "Erfolgsstories" },
    { href: "/ueber-uns", label: "Über Uns" },
];

const services = [
    "Bilderrahmen nach Mass",
    "Kunstrahmen",
    "Einrahmen von Bildern",
    "Restauration",
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-charcoal text-cream">
            {/* Main Footer */}
            <div className="container pt-24 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="inline-block mb-6">
                            <span
                                className="text-2xl tracking-wide"
                                style={{ fontFamily: "var(--font-playfair)", fontWeight: 500 }}
                            >
                                <span className="text-gold-light">Galleria</span>{" "}
                                <span className="text-cream">Flury</span>
                            </span>
                        </Link>
                        <p
                            className="text-warm-gray-light leading-relaxed mb-6"
                            style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                            {businessInfo.description}
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4
                            className="text-cream mb-6 text-lg"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Kontakt
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-gold shrink-0 mt-1" />
                                <span
                                    className="text-warm-gray-light"
                                    style={{ fontFamily: "var(--font-cormorant)" }}
                                >
                                    {businessInfo.address.street}
                                    <br />
                                    {businessInfo.address.postalCode} {businessInfo.address.city}
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-gold shrink-0" />
                                <a
                                    href={businessInfo.contact.phoneHref}
                                    className="text-warm-gray-light hover:text-gold-light transition-colors"
                                    style={{ fontFamily: "var(--font-cormorant)" }}
                                >
                                    {businessInfo.contact.phoneDisplay}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-gold shrink-0" />
                                <a
                                    href={businessInfo.contact.emailHref}
                                    className="text-warm-gray-light hover:text-gold-light transition-colors"
                                    style={{ fontFamily: "var(--font-cormorant)" }}
                                >
                                    {businessInfo.contact.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-warm-gray/20">
                <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p
                        className="text-warm-gray text-sm"
                        style={{ fontFamily: "var(--font-josefin)" }}
                    >
                        © {currentYear} Galleria Flury. Alle Rechte vorbehalten.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <Link
                            href="/impressum"
                            className="text-warm-gray hover:text-gold-light transition-colors"
                            style={{ fontFamily: "var(--font-josefin)" }}
                        >
                            Impressum
                        </Link>
                        <Link
                            href="/datenschutz"
                            className="text-warm-gray hover:text-gold-light transition-colors"
                            style={{ fontFamily: "var(--font-josefin)" }}
                        >
                            Datenschutz
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
