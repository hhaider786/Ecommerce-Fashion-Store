import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { SearchView } from "./SearchView";

export const metadata: Metadata = {
  title: "Search",
  description: "Search the Maison edit.",
};

export default function SearchPage() {
  return (
    <>
      <Navigation />
      <CartDrawer />
      <main id="main" className="pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-2">Search</p>
          <h1
            className="text-4xl md:text-5xl font-light text-[#111] mb-8"
            style={{ fontFamily: "var(--font-cormorant-var), Georgia, serif" }}
          >
            What are you looking for?
          </h1>
          <SearchView />
        </div>
      </main>
      <Footer />
    </>
  );
}
