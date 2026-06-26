import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über Uns | Galleria Flury | Region Biel/Seeland",
  description: "Ein familiengeführtes Unternehmen mit Tradition und Leidenschaft für Kunst. Wir sind Ihr Berater für Bilder und Rahmen in Merzligen nahe Lyss und Aarberg.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
