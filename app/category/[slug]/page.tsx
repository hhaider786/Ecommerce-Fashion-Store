import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { products, categories } from "@/data/products";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { ImageWithBlur } from "@/lib/motion/ImageWithBlur";
import { Tilt3D } from "@/lib/motion/Tilt3D";
import { buildMetadata } from "@/lib/seo/buildMetadata";

const SITE_URL = "https://maison.example.com";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return { title: "Category not found" };
  return buildMetadata({
    title: `${cat.name} — ${cat.tagline}`,
    description: `Shop our ${cat.name.toLowerCase()} edit. ${cat.tagline}.`,
    siteName: "Maison",
    url: `${SITE_URL}/category/${cat.slug}`,
    ogImage: cat.image,
  });
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) notFound();

  const items =
    cat.slug === "sale"
      ? products.filter((p) => p.badge === "Sale" || p.originalPrice)
      : products.filter((p) => p.category.toLowerCase() === cat.slug);

  return (
    <>
      <Navigation />
      <CartDrawer />
      <main id="main" className="pt-24 pb-20">
        <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
          <ImageWithBlur src={cat.image} alt="" fill priority sizes="100vw" className="object-cover" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111]/70 via-[#111]/20 to-[#111]/30" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <p className="text-[0.65rem] tracking-[0.3em] uppercase text-white/80 mb-3">{cat.tagline}</p>
            <h1
              className="text-5xl md:text-7xl font-light text-white"
              style={{ fontFamily: "var(--font-cormorant-var), Georgia, serif" }}
            >
              {cat.name}
            </h1>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-16">
          <p className="text-[#666] mb-8 text-sm">{items.length} {items.length === 1 ? "piece" : "pieces"}</p>

          {items.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-[#666]" style={{ fontFamily: "var(--font-cormorant-var), Georgia, serif" }}>
                Nothing here just yet.
              </p>
              <Link href="/" className="inline-block mt-4 text-xs tracking-wider underline text-[#111]">
                Browse all
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
              {items.map((p) => (
                <Link key={p.id} href={`/products/${p.slug}`} className="group block">
                  <Tilt3D max={5} className="relative aspect-[3/4] bg-[#f5f5f5] overflow-hidden mb-3">
                    <ImageWithBlur
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Tilt3D>
                  <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#666] mb-0.5">{p.category}</p>
                  <h2 className="text-sm text-[#111] mb-1" style={{ fontFamily: "var(--font-cormorant-var), Georgia, serif", fontSize: "1.05rem" }}>{p.name}</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-[#111]">£{p.price}</span>
                    {p.originalPrice && <span className="text-sm text-[#888] line-through">£{p.originalPrice}</span>}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
