export const categoryFilters = [
  "All",
  "Hang Tags",
  "Woven Labels",
  "Printed Labels",
  "Heat Transfer",
  "Stickers",
  "Printables",
  "Other",
] as const;

export type CategoryFilter = (typeof categoryFilters)[number];

export type ProductCategory = {
  id: string;
  slug: string;
  variants: string;
  title: string;
  features: string;
  image: string;
  imageAlt: string;
  filter: Exclude<CategoryFilter, "All">;
};

export type CatalogueItem = {
  id: string;
  category: Exclude<CategoryFilter, "All">;
  meta: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const productCategories: ProductCategory[] = [
  {
    id: "hang-tags",
    slug: "hang-tags",
    filter: "Hang Tags",
    variants: "8 Variants",
    title: "Hang Tags",
    features: "Daily Use · Multi Piece · Embossed · Foiling · PVC",
    image:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Craftsperson finishing hang tags on production equipment",
  },
  {
    id: "woven-labels",
    slug: "woven-labels",
    filter: "Woven Labels",
    variants: "4 Variants",
    title: "Woven Labels",
    features: "Daily Use · High Density · Washcare · Patches",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Premium wristwatch detailing representing woven finish",
  },
  {
    id: "printed-labels",
    slug: "printed-labels",
    filter: "Printed Labels",
    variants: "4 Variants",
    title: "Printed Labels",
    features: "B&W · Multicolor · Cotton · Designer Ribbons",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Warehouse shelves stocked with packaged goods",
  },
  {
    id: "heat-transfer",
    slug: "heat-transfer",
    filter: "Heat Transfer",
    variants: "4 Variants",
    title: "Heat Transfer",
    features: "Paper Base · Plastic Base · High Density · DTF",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Graphic print design on apparel",
  },
];

export const catalogueItems: CatalogueItem[] = [
  {
    id: "daily-hang-tags",
    category: "Hang Tags",
    meta: "Budget Friendly · Regular Use",
    title: "Daily Use Hang Tags",
    description:
      "Crisp, clean tags perfect for everyday garment branding. Budget-friendly without compromising on finish.",
    image:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Production machinery creating hang tags",
  },
  {
    id: "multi-piece-sets",
    category: "Hang Tags",
    meta: "2pc Set · Premium Pairing",
    title: "Multi Piece Sets",
    description:
      "Two-piece or more coordinated sets for a layered brand story.",
    image:
      "https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Red and black gift bags arranged together",
  },
  {
    id: "special-effects-tags",
    category: "Hang Tags",
    meta: "Velvet Touch · Grainy Texture · UV Finish",
    title: "Special Effects Tags",
    description:
      "Elevate your product packaging with velvet-soft, grainy, or gloss UV finishes that demand attention.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Organized warehouse with yellow shelving",
  },
  {
    id: "embossed-tags",
    category: "Hang Tags",
    meta: "Raised Detail · Premium Feel",
    title: "Embossed Hang Tags",
    description:
      "Tactile embossed finishes that add depth and a distinctive first impression at retail.",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Printed and embossed paper tags",
  },
  {
    id: "foiling-tags",
    category: "Hang Tags",
    meta: "Foil Stamp · Luxury Accent",
    title: "Foiling Tags",
    description:
      "Metallic foil accents for labels and hang tags that signal premium quality instantly.",
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Foiled branding collateral",
  },
  {
    id: "pvc-tags",
    category: "Hang Tags",
    meta: "Durable · Weather Ready",
    title: "PVC Hang Tags",
    description:
      "Strong PVC tags built for long wear and clean branding in demanding retail conditions.",
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Retail packaging with durable tags",
  },
  {
    id: "woven-main",
    category: "Woven Labels",
    meta: "Damask · Soft Edge",
    title: "Classic Woven Labels",
    description:
      "Fine-detail woven labels with clean edges for enduring brand identity inside every garment.",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Stacked garments with woven care labels",
  },
  {
    id: "high-density-woven",
    category: "Woven Labels",
    meta: "High Density · Sharp Detail",
    title: "High Density Woven",
    description:
      "Dense weave construction for logos and type that stay crisp through repeated washing.",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Detailed premium accessory finish",
  },
  {
    id: "washcare-woven",
    category: "Woven Labels",
    meta: "Care Icons · Clear Legibility",
    title: "Washcare Labels",
    description:
      "Readable woven care labels that keep instructions clear for the life of the garment.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Retail garments with care labeling",
  },
  {
    id: "woven-patches",
    category: "Woven Labels",
    meta: "Badge Style · Statement Detail",
    title: "Woven Patches",
    description:
      "Statement woven patches for sleeves, densims, and outerwear that need bold branding.",
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Textiles arranged for finishing work",
  },
  {
    id: "printed-care",
    category: "Printed Labels",
    meta: "Care Labels · High Clarity",
    title: "Printed Care Labels",
    description:
      "Sharp printed care and content labels that stay readable wash after wash.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Retail garments displayed in a store",
  },
  {
    id: "multicolor-printed",
    category: "Printed Labels",
    meta: "Full Color · Brand Match",
    title: "Multicolor Printed Labels",
    description:
      "Color-accurate printed labels for brands that need richer visual identity at the neckline.",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Printed paper collateral on a desk",
  },
  {
    id: "cotton-printed",
    category: "Printed Labels",
    meta: "Soft Hand · Natural Feel",
    title: "Cotton Printed Labels",
    description:
      "Soft cotton printed labels designed for comfort-focused apparel collections.",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Apparel stack with soft label details",
  },
  {
    id: "designer-ribbons",
    category: "Printed Labels",
    meta: "Ribbon Print · Gift Ready",
    title: "Designer Ribbons",
    description:
      "Custom printed ribbons for packaging, hang cards, and elevated unboxing moments.",
    image:
      "https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Gift packaging with ribbon accents",
  },
  {
    id: "heat-transfer",
    category: "Heat Transfer",
    meta: "Soft Hand · Durable Bond",
    title: "Heat Transfer Marks",
    description:
      "Seamless heat transfer branding with a soft hand feel for modern apparel lines.",
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Textiles arranged for finishing work",
  },
  {
    id: "paper-base-transfer",
    category: "Heat Transfer",
    meta: "Paper Base · Clean Release",
    title: "Paper Base Transfer",
    description:
      "Reliable paper-based transfers for crisp logos and concise brand marks.",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Graphic apparel print detail",
  },
  {
    id: "plastic-base-transfer",
    category: "Heat Transfer",
    meta: "Plastic Base · Strong Hold",
    title: "Plastic Base Transfer",
    description:
      "Durable plastic-base transfers suited for activewear and higher-wear garments.",
    image:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Industrial finishing of branded goods",
  },
  {
    id: "dtf-transfer",
    category: "Heat Transfer",
    meta: "DTF · Full Color Detail",
    title: "DTF Heat Transfer",
    description:
      "Direct-to-film transfers with rich color and fine detail for expressive graphics.",
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Color print samples for transfer branding",
  },
  {
    id: "sticker-pack",
    category: "Stickers",
    meta: "Die-Cut · Brand Kits",
    title: "Custom Stickers",
    description:
      "Die-cut stickers and seal labels that finish packaging with a polished brand cue.",
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Flat lay of branded stickers and print",
  },
  {
    id: "printables",
    category: "Printables",
    meta: "Cards · Inserts · Wrappers",
    title: "Printable Collateral",
    description:
      "Hang cards, inserts, and wrappers printed to match your packaging story.",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Printed paper collateral on a desk",
  },
  {
    id: "other-packaging",
    category: "Other",
    meta: "Custom · Made to Spec",
    title: "Specialty Packaging",
    description:
      "Bespoke packaging and branding pieces developed around your product and process.",
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Packaged products ready for retail",
  },
];

export function slugToCategory(slug?: string | null): CategoryFilter {
  if (!slug || slug === "all") return "All";
  const match = productCategories.find((category) => category.slug === slug);
  return match?.filter ?? "All";
}

export function categoryToSlug(category: CategoryFilter): string {
  if (category === "All") return "all";
  const match = productCategories.find((item) => item.filter === category);
  return match?.slug ?? category.toLowerCase().replace(/\s+/g, "-");
}
