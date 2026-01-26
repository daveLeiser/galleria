export interface Story {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    testimonial?: string;
    clientName?: string;
    images?: string[];
}

export function getStories(): Story[] {
    // Server-side only: read from filesystem
    if (typeof window === 'undefined') {
        const fs = require('fs');
        const path = require('path');

        const storiesDirectory = path.join(process.cwd(), 'content', 'stories');
        const fileNames = fs.readdirSync(storiesDirectory);

        const stories = fileNames
            .filter((fileName: string) => fileName.endsWith('.json'))
            .map((fileName: string) => {
                const filePath = path.join(storiesDirectory, fileName);
                const fileContents = fs.readFileSync(filePath, 'utf8');
                return JSON.parse(fileContents) as Story;
            });

        return stories;
    }

    // Client-side: return empty array (will be populated by server component)
    return [];
}
