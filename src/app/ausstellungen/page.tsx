import { getExhibitions } from "@/data/exhibitions";
import { AusstellungenClient } from "@/components/ausstellungen/AusstellungenClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ausstellungen & Galerie | Galleria Flury | Region Seeland",
  description: "Aktuelle und kommende Kunstausstellungen in der Galleria Flury in Merzligen. Entdecken Sie lokale und internationale Künstler nahe Lyss und Aarberg.",
};

export default function Ausstellungen() {
    const exhibitions = getExhibitions();
    return <AusstellungenClient exhibitions={exhibitions} />;
}
