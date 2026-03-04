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
        phone: "+41 32 323 12 23",
        phoneDisplay: "+41 32 323 12 23",
        phoneHref: "tel:+41323231223",
        email: "galleria.flury@bluewin.ch",
        emailHref: "mailto:galleria.flury@bluewin.ch",
    },
    address: {
        street: "Bendicht-Rechberger-Strasse 3",
        postalCode: "2502",
        city: "Biel",
        fullAddress: "Bendicht-Rechberger-Strasse 3, 2502 Biel",
    },
    openingHours: [
        { day: "Montag", hours: "Geschlossen", closed: true },
        { day: "Dienstag", hours: "09:30–12:00 / 14:30–18:00" },
        { day: "Mittwoch", hours: "09:30–12:00" },
        { day: "Donnerstag", hours: "09:30–12:00" },
        { day: "Freitag", hours: "09:30–12:00 / 14:30–18:00" },
        { day: "Samstag", hours: "09:30–16:00" },
        { day: "Sonntag", hours: "Geschlossen", closed: true },
    ] as OpeningHoursDay[],
    social: {
        facebook: "#",
        instagram: "#",
    },
    description: "Ihr Berater für Kunst, Bilder und Rahmen. Ein familiengeführtes Unternehmen mit Tradition und Leidenschaft für Qualität.",
};
