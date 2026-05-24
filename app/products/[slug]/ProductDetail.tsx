"use client";

import { useState } from "react";
import { Heart, ShoppingBag, Minus, Plus } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [size, setSize] = useState(product.sizes[0]);
  const [color, setColor] = useState(product.colors[0]);
  const [qty, setQty] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);

  const handleAdd = () => {
    addItem(
      {
        id: product.id,
        slug: product.slug,
        name: product.name,
        price: product.price,
        image: product.image,
        size,
        color,
      },
      qty
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#111] mb-2">Colour — <span className="text-[#666] capitalize">{color}</span></p>
        <div className="flex gap-2" role="radiogroup" aria-label="Colour">
          {product.colors.map((c) => (
            <button
              type="button"
              key={c}
              role="radio"
              aria-checked={color === c}
              aria-label={c}
              onClick={() => setColor(c)}
              className={`px-3 py-1.5 text-xs tracking-wider border transition-colors capitalize ${
                color === c ? "border-[#111] bg-[#111] text-white" : "border-[#ddd] text-[#555] hover:border-[#111]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#111]">Size</p>
          <button type="button" className="text-[0.65rem] tracking-wider uppercase text-[#666] underline hover:text-[#111]">
            Size guide
          </button>
        </div>
        <div className="grid grid-cols-5 gap-2" role="radiogroup" aria-label="Size">
          {product.sizes.map((s) => (
            <button
              type="button"
              key={s}
              role="radio"
              aria-checked={size === s}
              onClick={() => setSize(s)}
              className={`py-2.5 text-xs tracking-wider border transition-colors ${
                size === s ? "border-[#111] bg-[#111] text-white" : "border-[#ddd] text-[#555] hover:border-[#111]"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center border border-[#e0e0e0]" role="group" aria-label="Quantity">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
            className="px-3 py-2.5 text-[#555] hover:text-[#111]"
          >
            <Minus size={12} aria-hidden />
          </button>
          <span className="px-4 text-sm text-[#111] border-x border-[#e0e0e0]" aria-live="polite">{qty}</span>
          <button
            type="button"
            onClick={() => setQty((q) => q + 1)}
            aria-label="Increase quantity"
            className="px-3 py-2.5 text-[#555] hover:text-[#111]"
          >
            <Plus size={12} aria-hidden />
          </button>
        </div>
        <button
          type="button"
          onClick={handleAdd}
          className="flex-1 bg-[#111] text-white py-3.5 text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#333] transition-colors flex items-center justify-center gap-2"
        >
          <ShoppingBag size={14} aria-hidden />
          Add to bag
        </button>
        <button
          type="button"
          onClick={() => setWishlisted((w) => !w)}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={wishlisted}
          className="border border-[#e0e0e0] p-3.5 hover:border-[#111] transition-colors"
        >
          <Heart size={16} fill={wishlisted ? "#111" : "none"} className="text-[#111]" aria-hidden />
        </button>
      </div>
    </div>
  );
}
