/**
 * Central configuration for all business information.
 * Update this file to change business details across the entire website.
 */

type OpeningHoursDay = {
    day: string;
    hours: string;
    closed?: boolean;
};

export const businessInfo = {
    name: {
        full: "Galleria Flury",
        first: "Galleria",
        last: "Flury",
    },
    contact: {
        phone: "+41 32 381 10 50",
        phoneDisplay: "+41 32 381 10 50",
        phoneHref: "tel:+41323811050",
        email: "galleria.flury@bluewin.ch",
        emailHref: "mailto:galleria.flury@bluewin.ch",
    },
    address: {
        street: "St. Niklausstrasse 22",
        postalCode: "3274",
        city: "Merzligen",
        fullAddress: "St. Niklausstrasse 22, 3274 Merzligen",
    },
    openingHours: [
        // Herbstferien 11.10. - 26.10.: alle Tage geschlossen. Ab 27.10. wieder reguläre Öffnungszeiten (unten auskommentiert).
        { day: "Montag", hours: "Geschlossen", closed: true },
        { day: "Dienstag", hours: "Ferien - Geschlossen", closed: true },
        { day: "Mittwoch", hours: "Geschlossen", closed: true },
        { day: "Donnerstag", hours: "Ferien - Geschlossen", closed: true },
        { day: "Freitag", hours: "Ferien - Geschlossen", closed: true },
        { day: "Samstag", hours: "Ferien - Geschlossen", closed: true },
        { day: "Sonntag", hours: "Geschlossen", closed: true },
        // Reguläre Öffnungszeiten:
        //{ day: "Montag", hours: "Geschlossen", closed: true },
        //{ day: "Dienstag", hours: "Geschlossen", closed: true },
        //{ day: "Dienstag", hours: "09:30 - 12:00 / 14:00 - 18:00", closed: false },
        //{ day: "Mittwoch", hours: "Geschlossen", closed: true },
        //{ day: "Donnerstag", hours: "09:30 - 12:00 / 14:00 - 18:00", closed: false },
        //{ day: "Freitag", hours: "14:00 - 18:00", closed: false },
        //{ day: "Freitag", hours: "Geschlossen", closed: true },
        //{ day: "Samstag", hours: "09:30 - 13:00", closed: false },
        //{ day: "Sonntag", hours: "Geschlossen", closed: true },
    ] as OpeningHoursDay[],
    social: {
        facebook: "#",
        instagram: "#",
    },
    announcement: {
        active: true,
        message: "Wir sind in den Ferien: Vom Sonntag, 11. Oktober bis und mit Montag, 26. Oktober bleibt die Galleria geschlossen. Ab Dienstag, 27. Oktober sind wir gerne wieder für Sie da.",
        // message: "Wir begrüssen Sie gerne an unserer neuen Adresse an der St. Niklausstrasse 22 in 3274 Merzligen. Wir freuen uns auf Ihren Besuch.",
    },
    description: "Ihr Berater für Kunst, Bilder und Rahmen. Ein familiengeführtes Unternehmen mit Tradition und Leidenschaft für Qualität.",
};
