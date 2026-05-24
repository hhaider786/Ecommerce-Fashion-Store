import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-white">
      <p className="text-[0.65rem] tracking-[0.3em] uppercase text-[#888] mb-4">Error 404</p>
      <h1
        className="text-6xl md:text-8xl font-light text-[#111] mb-6"
        style={{ fontFamily: "var(--font-cormorant-var), Georgia, serif" }}
      >
        Page not found
      </h1>
      <p className="text-[#666] max-w-md mb-10">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved. Let&rsquo;s get you back to the collection.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-medium bg-[#111] text-white hover:bg-[#333] transition-colors"
        >
          Back to home
        </Link>
        <Link
          href="/#products"
          className="px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-medium border border-[#111] text-[#111] hover:bg-[#111] hover:text-white transition-colors"
        >
          Shop the edit
        </Link>
      </div>
    </main>
  );
}
