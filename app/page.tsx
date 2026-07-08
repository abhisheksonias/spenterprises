import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Catalogue from "@/components/Catalogue";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Branding & Packaging Solutions Since 2002",
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | Branding & Packaging Solutions`,
    description: siteConfig.description,
    url: absoluteUrl("/"),
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does S.P. Enterprises manufacture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "S.P. Enterprises manufactures branding and packaging solutions including hang tags, woven labels, printed labels, heat transfer marks, stickers, printables, and custom packaging for fashion and textile brands.",
      },
    },
    {
      "@type": "Question",
      name: "Where is S.P. Enterprises located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "S.P. Enterprises is based in Ludhiana, Punjab, India at B-32/2, Banda Bahadur Nagar, Street No 8, Bahadurke Road, Ludhiana 141008.",
      },
    },
    {
      "@type": "Question",
      name: "When was S.P. Enterprises established?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "S.P. Enterprises was established in 2002 and has provided branding solutions for over two decades.",
      },
    },
    {
      "@type": "Question",
      name: "How can I request pricing or a catalogue?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can submit an inquiry through the Contact Us form on the website, email lucrative.spe@gmail.com, or call +91-70095-21005. The team typically responds within 24 hours.",
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="relative flex-1">
      <JsonLd data={faqSchema} />
      <Header />
      <Hero />
      <Catalogue />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
