export interface Exhibition {
    id: string;
    title: string;
    dateFrom: string;
    dateTo: string;
    description: string;
    longDescription?: string;
    featured?: boolean;
    past?: boolean;
    image?: string;
}

export function getExhibitions(): Exhibition[] {
    // Server-side only: read from filesystem
    if (typeof window === 'undefined') {
        const fs = require('fs');
        const path = require('path');

        const exhibitionsDirectory = path.join(process.cwd(), 'content', 'exhibitions');
        const fileNames = fs.readdirSync(exhibitionsDirectory);

        const exhibitions = fileNames
            .filter((fileName: string) => fileName.endsWith('.json'))
            .map((fileName: string) => {
                const filePath = path.join(exhibitionsDirectory, fileName);
                const fileContents = fs.readFileSync(filePath, 'utf8');
                return JSON.parse(fileContents) as Exhibition;
            });

        return exhibitions;
    }

    // Client-side: return empty array (will be populated by server component)
    return [];
}
