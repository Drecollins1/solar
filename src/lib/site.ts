// Business details used across the site. Update these with the client's real info.
export const site = {
  name: "Solvera",
  fullName: "Solvera Energy",
  tagline: "Solar & inverter systems for homes and businesses ready to go off-grid.",
  description:
    "Solvera Energy designs and installs solar panels, inverters and battery systems that keep homes and businesses powered 24/7 — with or without the grid.",
  phone: "+234 800 000 0000",
  // Digits only, with country code — used for wa.me links.
  whatsapp: "2348000000000",
  whatsappMessage: "Hello Solvera, I'd like to talk about a solar/inverter installation.",
  email: "hello@solvera.energy",
  address: "12 Admiralty Way, Lekki Phase 1, Lagos, Nigeria",
  mapQuery: "Admiralty Way, Lekki Phase 1, Lagos",
  hours: "Mon – Sat, 8:00am – 6:00pm",
  socials: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    linkedin: "https://linkedin.com/",
    x: "https://x.com/",
  },
};

export function whatsappLink(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/#services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
] as const;
