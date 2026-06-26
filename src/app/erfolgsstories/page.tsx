import { getStories } from "@/data/stories";
import { ErfolgsstoriesClient } from "@/components/erfolgsstories/ErfolgsstoriesClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Erfolgsstories & Referenzen | Galleria Flury",
  description: "Entdecken Sie unsere erfolgreich umgesetzten Projekte und zufriedenen Kunden. Massgeschneiderte Rahmen für Kunstwerke, Spiegel und mehr.",
};

export default function Erfolgsstories() {
    const stories = getStories();
    return <ErfolgsstoriesClient stories={stories} />;
}
