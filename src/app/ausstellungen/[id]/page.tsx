import { getExhibitions } from "@/data/exhibitions";
import { ExhibitionDetail } from "@/components/ausstellungen/ExhibitionDetail";
import { notFound } from "next/navigation";

export default async function ExhibitionPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const exhibitions = getExhibitions();
    const exhibition = exhibitions.find((e) => e.id === id);

    if (!exhibition) {
        notFound();
    }

    return <ExhibitionDetail exhibition={exhibition} />;
}

// Generate static params for all exhibitions
export async function generateStaticParams() {
    const exhibitions = getExhibitions();
    return exhibitions.map((exhibition) => ({
        id: exhibition.id,
    }));
}
