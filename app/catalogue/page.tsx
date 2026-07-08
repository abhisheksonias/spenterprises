import type { Metadata } from "next";
import Header from "@/components/Header";
import FullCatalogue from "@/components/FullCatalogue";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Full Catalogue | S.P. Enterprises",
  description:
    "Explore hang tags, woven labels, printed labels, heat transfer, and more branding solutions from S.P. Enterprises.",
};

type CataloguePageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function CataloguePage({
  searchParams,
}: CataloguePageProps) {
  const params = await searchParams;

  return (
    <main className="relative flex min-h-full flex-1 flex-col bg-cream">
      <Header variant="solid" />
      <FullCatalogue initialCategory={params.category} />
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
}
