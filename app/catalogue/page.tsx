import type { Metadata } from "next";
import Header from "@/components/Header";
import FullCatalogue from "@/components/FullCatalogue";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { listPublishedCategories } from "@/lib/queries/categories";
import { listPublishedProducts } from "@/lib/queries/products";
import { absoluteUrl, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Full Catalogue",
  description:
    "Browse the S.P. Enterprises catalogue — hang tags, woven labels, printed labels, heat transfer, stickers, and custom branding solutions.",
  alternates: {
    canonical: "/catalogue",
  },
  openGraph: {
    title: `Full Catalogue | ${siteConfig.name}`,
    description:
      "Explore hang tags, woven labels, printed labels, heat transfer, and more branding solutions from S.P. Enterprises.",
    url: absoluteUrl("/catalogue"),
  },
};

export const dynamic = "force-dynamic";

type CataloguePageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function CataloguePage({
  searchParams,
}: CataloguePageProps) {
  const params = await searchParams;

  let categories: Awaited<ReturnType<typeof listPublishedCategories>> = [];
  let products: Awaited<ReturnType<typeof listPublishedProducts>> = [];

  try {
    [categories, products] = await Promise.all([
      listPublishedCategories(),
      listPublishedProducts(),
    ]);
  } catch (error) {
    console.error("Failed to load catalogue", error);
  }

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Full Catalogue | ${siteConfig.name}`,
    description:
      "Explore hang tags, woven labels, printed labels, heat transfer, and more branding solutions from S.P. Enterprises.",
    url: absoluteUrl("/catalogue"),
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    hasPart: products.slice(0, 24).map((product) => ({
      "@type": "Product",
      name: product.title,
      description: product.description,
      image: product.image_url || undefined,
      brand: {
        "@type": "Brand",
        name: siteConfig.name,
      },
      category: product.category_title,
    })),
  };

  return (
    <main className="relative flex min-h-full flex-1 flex-col bg-cream">
      <JsonLd data={collectionSchema} />
      <Header variant="solid" />
      <FullCatalogue
        categories={categories.map((category) => ({
          id: category.id,
          title: category.title,
          slug: category.slug,
        }))}
        products={products.map((product) => ({
          id: product.id,
          title: product.title,
          meta: product.meta,
          description: product.description,
          image_url: product.image_url,
          image_alt: product.image_alt,
          category_slug: product.category_slug,
          category_title: product.category_title,
        }))}
        initialCategory={params.category}
      />
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
}
