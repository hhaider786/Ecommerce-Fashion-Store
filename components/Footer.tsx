import Link from "next/link";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "Women", href: "/category/women" },
      { label: "Men", href: "/category/men" },
      { label: "Accessories", href: "/category/accessories" },
      { label: "New In", href: "/?badge=New#products" },
      { label: "Sale", href: "/category/sale" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & Returns", href: "/#" },
      { label: "Size Guide", href: "/#" },
      { label: "Contact Us", href: "/#" },
      { label: "FAQ", href: "/#" },
      { label: "Track Order", href: "/#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Maison", href: "/#" },
      { label: "Sustainability", href: "/#" },
      { label: "Press", href: "/#" },
      { label: "Careers", href: "/#" },
      { label: "Stores", href: "/#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#f0f0f0]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <p className="text-2xl tracking-[0.12em] text-[#111] mb-3" style={{ fontFamily: "var(--font-cormorant-var), Georgia, serif" }}>
            MAISON
          </p>
          <p className="text-[#666] text-sm leading-relaxed">
            Curated fashion for the modern wardrobe. Quality, elegance, and sustainability — since 2018.
          </p>
        </div>
        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="text-[0.65rem] tracking-[0.2em] uppercase text-[#111] font-medium mb-4">{col.title}</h3>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[#666] text-sm hover:text-[#111] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-[#f0f0f0]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[#888] text-xs">© {new Date().getFullYear()} Maison. All rights reserved.</p>
          <ul className="flex gap-5">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <li key={item}>
                <Link href="/#" className="text-[#888] text-xs hover:text-[#111] transition-colors">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
