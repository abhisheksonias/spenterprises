import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import { absoluteUrl, siteConfig } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Branding & Packaging Solutions`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Manufacturing",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Branding & Packaging Solutions`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Branding & Packaging Solutions`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/spe.png", type: "image/png" }],
    shortcut: ["/spe.png"],
    apple: [{ url: "/spe.png", type: "image/png" }],
  },
  other: {
    "geo.region": "IN-PB",
    "geo.placename": "Ludhiana",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteConfig.url,
  logo: absoluteUrl("/spe.png"),
  description: siteConfig.description,
  foundingDate: String(siteConfig.foundedYear),
  email: siteConfig.email,
  telephone: siteConfig.phone,
  sameAs: [siteConfig.instagram],
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "sales",
      email: siteConfig.email,
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Punjabi"],
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
  },
  inLanguage: "en-IN",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  image: absoluteUrl("/opengraph-image"),
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  foundingDate: String(siteConfig.foundedYear),
  description: siteConfig.description,
  sameAs: [siteConfig.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col bg-cream text-brown`}>
        <JsonLd data={[organizationSchema, websiteSchema, localBusinessSchema]} />
        {children}
      </body>
    </html>
  );
}
