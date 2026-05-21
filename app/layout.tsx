import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant-var",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans-var",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maison — Fashion & Lifestyle",
  description: "Curated fashion and lifestyle pieces for the modern wardrobe. New season collections available now.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body
        className="bg-white text-[#111] antialiased overflow-x-hidden"
        style={{ fontFamily: "var(--font-dm-sans-var), sans-serif" }}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
