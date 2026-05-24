"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main id="main" className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-white">
      <p className="text-[0.65rem] tracking-[0.3em] uppercase text-red-500 mb-4">Something went wrong</p>
      <h1
        className="text-5xl md:text-7xl font-light text-[#111] mb-6"
        style={{ fontFamily: "var(--font-cormorant-var), Georgia, serif" }}
      >
        We hit a snag.
      </h1>
      <p className="text-[#666] max-w-md mb-10">
        An unexpected error occurred. Try again, or head back to the homepage.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={reset}
          className="px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-medium bg-[#111] text-white hover:bg-[#333] transition-colors"
        >
          Try again
        </button>
        <Link
          href="/"
          className="px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-medium border border-[#111] text-[#111] hover:bg-[#111] hover:text-white transition-colors"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
