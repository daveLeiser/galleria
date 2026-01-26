import { getExhibitions } from "@/data/exhibitions";
import { AusstellungenClient } from "@/components/ausstellungen/AusstellungenClient";

export default function Ausstellungen() {
    const exhibitions = getExhibitions();
    return <AusstellungenClient exhibitions={exhibitions} />;
}
