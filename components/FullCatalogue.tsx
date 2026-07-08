"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  catalogueItems,
  categoryFilters,
  categoryToSlug,
  slugToCategory,
  type CategoryFilter,
} from "@/lib/catalogue";
import Reveal from "./Reveal";

type FullCatalogueProps = {
  initialCategory?: string;
};

export default function FullCatalogue({
  initialCategory = "all",
}: FullCatalogueProps) {
  const [active, setActive] = useState<CategoryFilter>(
    slugToCategory(initialCategory),
  );

  useEffect(() => {
    setActive(slugToCategory(initialCategory));
  }, [initialCategory]);

  const filtered = useMemo(() => {
    if (active === "All") return catalogueItems;
    return catalogueItems.filter((item) => item.category === active);
  }, [active]);

  function selectCategory(category: CategoryFilter) {
    setActive(category);
    const slug = categoryToSlug(category);
    const url = slug === "all" ? "/catalogue" : `/catalogue?category=${slug}`;
    window.history.replaceState(null, "", url);
  }

  return (
    <section className="relative px-4 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-32 lg:px-12 lg:pb-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-8 sm:mb-12">
          <Link
            href="/#catalogue"
            className="mb-6 inline-flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-brown-muted transition-opacity hover:opacity-70"
          >
            <span aria-hidden="true">←</span>
            Back to Categories
          </Link>
          <p className="mb-3 font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-brown-muted sm:text-xs">
            The Collection
          </p>
          <h1 className="font-serif text-3xl font-medium tracking-tight text-brown sm:text-5xl md:text-6xl">
            Full Catalogue
          </h1>
        </Reveal>

        <Reveal delay={120} className="-mx-4 mb-10 sm:mx-0 sm:mb-14">
          <div className="flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden">
            {categoryFilters.map((category) => {
              const isActive = active === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => selectCategory(category)}
                  className={`shrink-0 border px-3.5 py-2.5 font-sans text-[10px] font-medium uppercase tracking-[0.16em] transition-colors sm:px-4 sm:text-xs sm:tracking-[0.18em] ${
                    isActive
                      ? "border-brown bg-brown text-cream"
                      : "border-brown/40 bg-transparent text-brown hover:border-brown"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
          {filtered.map((item, index) => (
            <Reveal
              key={item.id}
              as="article"
              delay={Math.min(index * 80, 320)}
              className="group flex min-w-0 flex-col"
            >
              <div className="relative mb-5 aspect-[4/3] overflow-hidden bg-brown/5">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <p className="mb-2 font-sans text-[10px] font-medium uppercase leading-relaxed tracking-[0.16em] text-brown-muted sm:text-[11px] sm:tracking-[0.2em]">
                {item.meta}
              </p>
              <h2 className="mb-3 font-serif text-xl font-medium text-brown sm:text-[1.65rem]">
                {item.title}
              </h2>
              <p className="mb-5 flex-1 font-sans text-sm leading-relaxed text-brown-muted sm:text-[15px]">
                {item.description}
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-brown transition-opacity hover:opacity-70 sm:text-xs"
              >
                Quick Inquiry
                <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-16 text-center font-sans text-sm text-brown-muted">
            No items in this category yet.{" "}
            <Link href="/#contact" className="underline underline-offset-2">
              Inquire for custom options
            </Link>
            .
          </p>
        )}
      </div>
    </section>
  );
}
