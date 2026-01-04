"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#faf7f2] py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* TEXT */}
        <div className="mb-10 sm:mb-14">
          <h1
            className="
              font-serif font-semibold text-gray-900
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              leading-tight
            "
          >
            Contemporary Masterpieces
          </h1>

          <p
            className="
              mt-4 sm:mt-6
              text-base sm:text-lg
              text-gray-600
              max-w-2xl
              leading-relaxed
            "
          >
            Infuse your living and working spaces with warmth and character,
            highlighting natural textures and sturdy designs.
          </p>

          <Link
            href="/products"
            className="
              inline-block
              mt-6 sm:mt-8
              text-sm sm:text-base
              font-medium
              text-gray-900
              hover:underline
            "
          >
            View all products →
          </Link>
        </div>

        {/* HERO IMAGES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="h-[260px] sm:h-[360px] lg:h-[480px] rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
              alt="Luxury Living Room"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[260px] sm:h-[360px] lg:h-[480px] rounded-xl overflow-hidden">
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
