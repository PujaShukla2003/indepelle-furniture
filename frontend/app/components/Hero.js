"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#faf7f2] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* TEXT */}
        <div className="mb-14">
          <h1 className="text-5xl md:text-6xl font-serif font-semibold text-gray-900">
            Contemporary Masterpieces
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl leading-relaxed">
            Infuse your living and working spaces with warmth and character,
            highlighting natural textures and sturdy designs.
          </p>

          <Link
            href="/products"
            className="inline-block mt-8 text-base font-medium text-gray-900 hover:underline"
          >
            View all products →
          </Link>
        </div>

        {/* HERO IMAGES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="h-[480px] rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
              alt="Luxury Living Room"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[480px] rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1505693314120-0d443867891c"
              alt="Luxury Bedroom"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
