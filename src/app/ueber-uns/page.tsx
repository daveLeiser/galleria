"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactCTA } from "@/components/home/ContactCTA";
import Image from "next/image";
import {
    Heart,
    Award,
    Target,
    Scale,
    Users,
    Sparkles,
} from "lucide-react";

const values = [
    {
        icon: Heart,
        title: "Ihr Berater für Kunst, Bilder und Rahmen",
        description:
            "Als kundenorientiertes Familienunternehmen bringen wir nicht nur jahrzehntelange Erfahrung mit, sondern auch eine Fülle persönlicher Ideen und kreativer Lösungen. Wir hören zu, verstehen Ihre Wünsche und setzen sie mit Leidenschaft um.",
    },
    {
        icon: Award,
        title: "Qualität und Kundenzufriedenheit",
        description:
            "Jedes unserer Produkte durchläuft eine sorgfältige Qualitätskontrolle – von der Materialauswahl bis zur finalen Verarbeitung. Sollte wider Erwarten ein Produkt nicht Ihren Erwartungen entsprechen, wird es selbstverständlich anstandslos ersetzt. Ihre Zufriedenheit ist unser Antrieb.",
    },
    {
        icon: Target,
        title: "Das Richtige für Sie",
        description:
            "Durch unsere langjährigen Beziehungen zum regionalen Kunsthandwerk und zum internationalen Gewerbe bieten wir Ihnen in Biel/Bienne das vielseitigste und reichhaltigste Angebot der Branche. Bei uns finden Sie garantiert das Richtige – oder wir fertigen es speziell für Sie an.",
    },
    {
        icon: Scale,
        title: "Faires Preis-Leistungs-Verhältnis",
        description:
            "Hochwertige Handwerkskunst zu fairen Preisen – das ist unser Versprechen. Wir glauben, dass exzellente Qualität erschwinglich sein sollte. Zudem sind spätere Serviceleistungen für uns eine Selbstverständlichkeit.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1] as const,
        },
    },
};

export default function UeberUns() {
    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-cream to-cream-dark relative overflow-hidden">
                <div className="absolute inset-0 pattern-dots opacity-30" />
                {/* Decorative corners */}
                <div className="absolute top-8 left-8 w-24 h-24 border-l border-t border-gold/30 hidden lg:block" />
                <div className="absolute top-8 right-8 w-24 h-24 border-r border-t border-gold/30 hidden lg:block" />

                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <span
                            className="text-nav text-gold mb-4 block tracking-[0.3em]"
                            style={{ fontSize: "0.75rem" }}
                        >
                            Lernen Sie uns kennen
                        </span>
                        <h1
                            className="text-charcoal mb-6"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Über Uns
                        </h1>
                        <div className="ornament mx-auto mb-6" />
                        <p
                            className="text-warm-gray"
                            style={{
                                fontFamily: "var(--font-cormorant)",
                                fontSize: "1.25rem",
                                lineHeight: 1.8,
                            }}
                        >
                            Ein Familienunternehmen mit Tradition, Leidenschaft und dem
                            unerschütterlichen Anspruch, Ihnen das Beste zu bieten.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="section bg-cream">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Workshop Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="relative"
                        >
                            <div className="relative h-80 lg:h-[450px] overflow-hidden">
                                <Image
                                    src="/images/workshop.png"
                                    alt="Unser Atelier"
                                    fill
                                    className="object-cover"
                                />
                                {/* Decorative frame */}
                                <div className="absolute inset-6 border border-gold/40" />
                            </div>

                            {/* Corner accents */}
                            <div className="absolute -top-3 -left-3 w-12 h-12 border-l-2 border-t-2 border-gold" />
                            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-r-2 border-b-2 border-gold" />
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span
                                className="text-nav text-gold mb-4 block tracking-[0.2em]"
                                style={{ fontSize: "0.7rem" }}
                            >
                                Unsere Geschichte
                            </span>
                            <h2
                                className="text-charcoal mb-6"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                Tradition trifft Moderne
                            </h2>
                            <div className="ornament mb-6" />
                            <div className="space-y-4">
                                <p
                                    className="text-warm-gray leading-relaxed"
                                    style={{
                                        fontFamily: "var(--font-cormorant)",
                                        fontSize: "1.125rem",
                                    }}
                                >
                                    Seit Generationen widmen wir uns der Kunst des Rahmens. Was als
                                    kleine Werkstatt begann, ist heute ein renommiertes Atelier, das
                                    Tradition und Innovation vereint.
                                </p>
                                <p
                                    className="text-warm-gray leading-relaxed"
                                    style={{
                                        fontFamily: "var(--font-cormorant)",
                                        fontSize: "1.125rem",
                                    }}
                                >
                                    Unser Handwerk wurde von Generation zu Generation weitergegeben,
                                    verfeinert und an die Anforderungen der modernen Kunst angepasst.
                                    Dabei haben wir nie vergessen, was uns antreibt: die Liebe zum
                                    Detail und die Freude daran, Kunst in Szene zu setzen.
                                </p>
                                <p
                                    className="text-warm-gray leading-relaxed"
                                    style={{
                                        fontFamily: "var(--font-cormorant)",
                                        fontSize: "1.125rem",
                                    }}
                                >
                                    In unserem Atelier in Biel/Bienne verbinden wir traditionelle
                                    Handwerkstechniken mit modernem Design. Jeder Rahmen, der unsere
                                    Werkstatt verlässt, trägt die Handschrift unserer Leidenschaft.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section bg-paper relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-cream to-transparent opacity-30" />

                <div className="container relative z-10">
                    <SectionHeader
                        subtitle="Unsere Werte"
                        title="Wofür wir stehen"
                        description="Diese Grundsätze leiten unser Handeln seit Generationen."
                    />

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                variants={itemVariants}
                                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                                className="group bg-white p-8 lg:p-10 border border-light hover:border-gold/30 transition-all duration-500 hover:shadow-xl relative"
                            >
                                {/* Corner decorations */}
                                <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Icon */}
                                <div className="w-14 h-14 mb-6 bg-paper flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-500">
                                    <value.icon
                                        size={28}
                                        className="text-gold group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content */}
                                <h3
                                    className="text-xl mb-4 text-charcoal group-hover:text-gold transition-colors duration-300"
                                    style={{ fontFamily: "var(--font-playfair)" }}
                                >
                                    {value.title}
                                </h3>
                                <p
                                    className="text-warm-gray leading-relaxed"
                                    style={{
                                        fontFamily: "var(--font-cormorant)",
                                        fontSize: "1.05rem",
                                    }}
                                >
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Welcome Message */}
            <section className="section bg-charcoal relative overflow-hidden">
                <div className="absolute inset-0 grain-overlay opacity-5" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gold/10 to-transparent blur-3xl" />

                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <Sparkles size={40} className="text-gold mx-auto mb-6" />
                        <h2
                            className="text-cream mb-6"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Wir freuen uns auf Sie
                        </h2>
                        <div className="ornament mx-auto opacity-60 mb-8" />
                        <p
                            className="text-warm-gray-light mb-4"
                            style={{
                                fontFamily: "var(--font-cormorant)",
                                fontSize: "1.375rem",
                                lineHeight: 1.8,
                                fontStyle: "italic",
                            }}
                        >
                            &ldquo;Es würde uns freuen, Sie persönlich kennen zu lernen und Sie
                            schon bald zu der zufriedenen Galleria-Kundschaft zählen zu dürfen.&rdquo;
                        </p>
                        <p
                            className="text-gold-light"
                            style={{
                                fontFamily: "var(--font-playfair)",
                                fontSize: "1.125rem",
                            }}
                        >
                            — Familie Flury
                        </p>
                    </motion.div>
                </div>
            </section>

            <ContactCTA />
        </>
    );
}
