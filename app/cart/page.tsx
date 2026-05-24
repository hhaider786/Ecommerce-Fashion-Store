import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { CartView } from "./CartView";

export const metadata: Metadata = {
  title: "Your Bag",
  description: "Review the pieces in your bag.",
  robots: { index: false, follow: false },
};

export default function CartPage() {
  return (
    <>
      <Navigation />
      <CartDrawer />
      <main id="main" className="pt-28 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="section-label mb-2">Shopping bag</p>
          <h1
            className="text-4xl md:text-5xl font-light text-[#111] mb-10"
            style={{ fontFamily: "var(--font-cormorant-var), Georgia, serif" }}
          >
            Your Bag
          </h1>
          <CartView />
        </div>
      </main>
      <Footer />
    </>
  );
}
