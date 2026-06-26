import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Josefin_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnnouncementBanner } from "@/components/ui/AnnouncementBanner";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Galleria Flury | Kunst, Bilder & Rahmen in Merzligen (Region Biel/Seeland)",
  description: "Ihr Spezialist für Bilderrahmen nach Mass, Kunstrahmen und Einrahmen von Bildern. Besuchen Sie unser Atelier in Merzligen (nahe Lyss, Aarberg, Biel/Bienne) für hochwertige Rahmenkunst und persönliche Beratung.",
  keywords: [
    "Bilderrahmen", "Kunstrahmen", "Einrahmen", "Passepartout", "Einrahmungen", "Bilder restaurieren", 
    "Encadrement", "Cadres", "Encadrements sur mesure", "Restauration de tableaux",
    "Merzligen", "Biel", "Bienne", "Seeland", "Lyss", "Aarberg", "Atelier", "Kunst", "Galerie"
  ],
  authors: [{ name: "Galleria Flury" }],
  openGraph: {
    title: "Galleria Flury | Kunst, Bilder & Rahmen",
    description: "Ihr Spezialist für Bilderrahmen nach Mass und Kunstrahmen in Merzligen (Region Biel/Seeland)",
    locale: "de_CH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Galleria Flury",
    "image": "",
    "url": "https://galleriaflury.ch",
    "telephone": "+41 32 381 10 50",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "St. Niklausstrasse 22",
      "addressLocality": "Merzligen",
      "postalCode": "3274",
      "addressCountry": "CH"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Thursday"],
        "opens": "09:30",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "14:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:30",
        "closes": "13:00"
      }
    ]
  };

  return (
    <html lang="de">
      <head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${cormorant.variable} ${josefin.variable}`}
      >
        <AnnouncementBanner />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
