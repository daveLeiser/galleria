import { getStories } from "@/data/stories";
import { ErfolgsstoriesClient } from "@/components/erfolgsstories/ErfolgsstoriesClient";

export default function Erfolgsstories() {
    const stories = getStories();
    return <ErfolgsstoriesClient stories={stories} />;
}
