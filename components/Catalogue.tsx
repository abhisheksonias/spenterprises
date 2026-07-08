"use client";

import Image from "next/image";
import Link from "next/link";
import { productCategories } from "@/lib/catalogue";
import Reveal from "./Reveal";

export default function Catalogue() {
  return (
    <section
      id="catalogue"
      className="relative scroll-mt-8 border-t border-hairline px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 sm:mb-14 lg:mb-16 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <Reveal className="max-w-2xl">
            <p className="mb-3 font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-brown-muted sm:text-xs">
              Our Catalogue
            </p>
            <h2 className="mb-4 font-serif text-3xl font-medium tracking-tight text-brown sm:text-5xl md:text-6xl">
              Product Categories
            </h2>
            <p className="max-w-xl font-sans text-sm leading-relaxed text-brown-muted sm:text-[15px]">
              From hand-finished woven labels to precision heat transfer prints
              — every product is crafted to make your brand unforgettable.
              Rates vary according to quantity.
            </p>
          </Reveal>
          <Reveal delay={150} className="hidden lg:mb-3 lg:block">
            <span className="block h-px w-28 bg-brown/40 xl:w-40" />
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {productCategories.map((category, index) => (
            <Reveal
              key={category.id}
              as="article"
              delay={Math.min(index * 100, 300)}
              className="group flex min-w-0 flex-col overflow-hidden"
            >
              <Link
                href={`/catalogue?category=${category.slug}`}
                className="relative aspect-[4/3] overflow-hidden bg-brown/5"
              >
                <Image
                  src={category.image}
                  alt={category.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </Link>
              <div className="flex flex-1 flex-col bg-[#ead7d1] px-5 py-5 sm:px-6 sm:py-6">
                <p className="mb-2 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-gold sm:text-[11px]">
                  {category.variants}
                </p>
                <h3 className="mb-3 font-serif text-2xl font-medium text-brown sm:text-[1.65rem]">
                  {category.title}
                </h3>
                <p className="mb-6 flex-1 font-sans text-[12px] leading-relaxed text-brown-muted sm:text-[13px]">
                  {category.features}
                </p>
                <Link
                  href={`/catalogue?category=${category.slug}`}
                  className="inline-flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-gold transition-opacity hover:opacity-70 sm:text-xs"
                >
                  Explore
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
