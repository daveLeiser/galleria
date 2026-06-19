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
        { day: "Montag", hours: "Geschlossen", closed: true },
        //{ day: "Dienstag", hours: "Geschlossen", closed: true },
        { day: "Dienstag", hours: "09:30 - 12:00 / 14:00 - 18:00", closed: false },
        { day: "Mittwoch", hours: "Geschlossen", closed: true },
        { day: "Donnerstag", hours: "09:30 - 12:00 / 14:00 - 18:00", closed: false },
        { day: "Freitag", hours: "14:00 - 18:00", closed: false },
        { day: "Samstag", hours: "Geschlossen", closed: true },
        { day: "Sonntag", hours: "Geschlossen", closed: true },
    ] as OpeningHoursDay[],
    social: {
        facebook: "#",
        instagram: "#",
    },
    announcement: {
        active: true,
        message: "Bitte beachten Sie, dass unser Geschäft am Samstag, dem 20.06.2026, ausnahmsweise geschlossen bleibt. Wir danken für Ihr Verständnis.",
    },
    description: "Ihr Berater für Kunst, Bilder und Rahmen. Ein familiengeführtes Unternehmen mit Tradition und Leidenschaft für Qualität.",
};
