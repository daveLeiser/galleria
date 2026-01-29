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
    gallery?: string[];
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

        // Sort exhibitions by end date (newest first)
        exhibitions.sort((a: Exhibition, b: Exhibition) => {
            // Parse dates in DD.MM.YYYY format
            const parseDate = (dateStr: string) => {
                const [day, month, year] = dateStr.split('.').map(Number);
                return new Date(year, month - 1, day);
            };

            const dateA = parseDate(a.dateTo);
            const dateB = parseDate(b.dateTo);

            // Sort descending (newest first)
            return dateB.getTime() - dateA.getTime();
        });

        return exhibitions;
    }

    // Client-side: return empty array (will be populated by server component)
    return [];
}
