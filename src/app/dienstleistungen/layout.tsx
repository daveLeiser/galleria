import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dienstleistungen | Einrahmen & Restauration | Galleria Flury",
  description: "Wir bieten professionelle Kunstrahmungen, Einrahmungen nach Kundenwunsch und Restauration von Bildern in unserem eigenen Atelier in Merzligen (Region Seeland).",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
