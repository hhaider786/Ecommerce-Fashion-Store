import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { SkipLink } from "@/lib/a11y/SkipLink";
import { LiveRegionProvider } from "@/lib/a11y/LiveRegion";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { JsonLd } from "@/lib/seo/JsonLd";
import { websiteSchema } from "@/lib/seo/schemas";

const SITE_URL = "https://maison.example.com";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant-var",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans-var",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = buildMetadata({
  title: "Maison — Fashion & Lifestyle",
  description:
    "Curated fashion and lifestyle pieces for the modern wardrobe. Tailored knitwear, fine silk, leather goods, and accessories — crafted in Europe.",
  siteName: "Maison",
  url: SITE_URL,
  ogImage: `${SITE_URL}/opengraph-image`,
  titleTemplate: "%s — Maison",
  keywords: ["fashion", "luxury", "knitwear", "silk dress", "leather tote", "cashmere", "minimalist", "menswear", "womenswear"],
  themeColor: "#ffffff",
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body
        className="bg-white text-[#111] antialiased overflow-x-clip"
        style={{ fontFamily: "var(--font-dm-sans-var), sans-serif" }}
      >
        <SkipLink />
        <LiveRegionProvider>
          <CartProvider>{children}</CartProvider>
        </LiveRegionProvider>
        <JsonLd
          data={websiteSchema({
            name: "Maison",
            url: SITE_URL,
            description: "Curated fashion and lifestyle pieces for the modern wardrobe.",
          })}
        />
      </body>
    </html>
  );
}
