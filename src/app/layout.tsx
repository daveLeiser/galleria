import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Josefin_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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
  title: "Galleria Flury | Kunst, Bilder & Rahmen in Biel/Bienne",
  description: "Ihr Spezialist für Bilderrahmen nach Mass, Kunstrahmen und Einrahmen von Bildern. Besuchen Sie unser Atelier in Biel/Bienne für hochwertige Rahmenkunst und persönliche Beratung.",
  keywords: ["Bilderrahmen", "Kunstrahmen", "Einrahmen", "Biel", "Bienne", "Atelier", "Kunst", "Galerie"],
  authors: [{ name: "Galleria Flury" }],
  openGraph: {
    title: "Galleria Flury | Kunst, Bilder & Rahmen",
    description: "Ihr Spezialist für Bilderrahmen nach Mass und Kunstrahmen in Biel/Bienne",
    locale: "de_CH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </head>
      <body
        className={`${playfair.variable} ${cormorant.variable} ${josefin.variable}`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
