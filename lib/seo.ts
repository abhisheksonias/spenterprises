export const siteConfig = {
  name: "S.P. Enterprises",
  shortName: "SPE",
  tagline: "Effective Packaging Signifies Quality Products",
  description:
    "S.P. Enterprises provides branding and packaging solutions since 2002 — hang tags, woven labels, printed labels, heat transfer, and custom packaging from Ludhiana, Punjab, India.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.spenterprises.com").replace(
    /\/$/,
    "",
  ),
  locale: "en_IN",
  email: "lucrative.spe@gmail.com",
  phone: "+91-70095-21005",
  phoneHref: "+917009521005",
  instagram: "https://instagram.com/spenterprises2002",
  instagramHandle: "@spenterprises2002",
  address: {
    street: "B-32/2, Banda Bahadur Nagar, Street No 8, Bahadurke Road",
    city: "Ludhiana",
    region: "Punjab",
    postalCode: "141008",
    country: "IN",
    countryName: "India",
  },
  foundedYear: 2002,
  keywords: [
    "S.P. Enterprises",
    "hang tags",
    "woven labels",
    "printed labels",
    "heat transfer labels",
    "garment branding",
    "packaging solutions",
    "Ludhiana labels manufacturer",
    "branding solutions India",
  ],
};

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized}`;
}
