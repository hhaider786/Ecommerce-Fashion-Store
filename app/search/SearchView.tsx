"use client";

import { useMemo, useState, useDeferredValue } from "react";
import Link from "next/link";
import { Search as SearchIcon } from "lucide-react";
import { products } from "@/data/products";
import { ImageWithBlur } from "@/lib/motion/ImageWithBlur";

export function SearchView() {
  const [q, setQ] = useState("");
  const deferred = useDeferredValue(q);

  const results = useMemo(() => {
    const needle = deferred.trim().toLowerCase();
    if (!needle) return [];
    return products.filter((p) =>
      p.name.toLowerCase().includes(needle) ||
      p.category.toLowerCase().includes(needle) ||
      p.description.toLowerCase().includes(needle) ||
      p.colors.some((c) => c.includes(needle))
    );
  }, [deferred]);

  return (
    <>
      <div className="relative max-w-2xl mb-10">
        <SearchIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999]" aria-hidden />
        <label htmlFor="search-input" className="sr-only">Search the edit</label>
        <input
          id="search-input"
          type="search"
          autoFocus
          placeholder="Try “silk dress” or “cashmere”"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="w-full border border-[#e0e0e0] bg-white pl-11 pr-4 py-4 text-base focus:outline-none focus:border-[#111]"
        />
      </div>

      {deferred.trim() === "" ? (
        <div>
          <p className="section-label mb-4">Popular searches</p>
          <div className="flex flex-wrap gap-2">
            {["silk dress", "wool blazer", "linen", "leather tote", "cashmere", "men"].map((term) => (
              <button
                type="button"
                key={term}
                onClick={() => setQ(term)}
                className="px-4 py-2 text-xs tracking-wider border border-[#e0e0e0] hover:border-[#111] transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      ) : results.length === 0 ? (
        <p className="text-[#666]">No pieces match &ldquo;{deferred}&rdquo;.</p>
      ) : (
        <>
          <p className="text-[#666] mb-6 text-sm" aria-live="polite">
            {results.length} {results.length === 1 ? "result" : "results"}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
            {results.map((p) => (
              <Link key={p.id} href={`/products/${p.slug}`} className="group block">
                <div className="relative aspect-[3/4] bg-[#f5f5f5] overflow-hidden mb-3">
                  <ImageWithBlur
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h2 className="text-sm text-[#111]" style={{ fontFamily: "var(--font-cormorant-var), Georgia, serif", fontSize: "1.05rem" }}>{p.name}</h2>
                <p className="text-sm font-medium text-[#111]">£{p.price}</p>
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
}
