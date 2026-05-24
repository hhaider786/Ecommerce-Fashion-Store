import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ProductGrid from "@/components/ProductGrid";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function Home() {
  return (
    <>
      <Navigation />
      <CartDrawer />
      <main id="main">
        <Hero />
        <Categories />
        <ProductGrid />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
