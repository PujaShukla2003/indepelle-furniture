"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { heroSlides } from "../data/heroSlides";

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[active];

  return (
    <section className="relative overflow-hidden">

      {/* 🔥 IMAGE COLOR BASED BACKGROUND */}
      <div
        className="absolute inset-0 scale-110 blur-3xl opacity-60"
        style={{
          backgroundImage: `url(${slide.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* ✅ SMART OVERLAY (TEXT READABLE + COLOR VISIBLE) */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/45 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="font-serif font-semibold text-gray-900 text-4xl sm:text-5xl lg:text-6xl leading-tight">
            {slide.title}
          </h1>

          <p className="mt-6 text-base sm:text-lg text-gray-700 max-w-xl leading-relaxed">
            {slide.description}
          </p>

          <div className="mt-10 flex items-center gap-5">
            <Link
              href={slide.link}
              className="bg-gray-900 text-white px-7 py-3.5 rounded-full text-sm sm:text-base hover:bg-gray-800 transition shadow-lg"
            >
              Explore Collection →
            </Link>

            <Link
              href="/contact"
              className="text-gray-900 font-medium underline underline-offset-4"
            >
              Custom Orders
            </Link>
          </div>

          {/* FEATURES */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
            <div>
              <p className="font-semibold text-gray-900">Premium Quality</p>
              <p className="text-gray-600">Handcrafted finish</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Custom Design</p>
              <p className="text-gray-600">Made to order</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Pan India</p>
              <p className="text-gray-600">Delivery support</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Trusted Brand</p>
              <p className="text-gray-600">Industry expertise</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <Link
          href={slide.link}
          className="relative h-[320px] sm:h-[420px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl bg-white"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </Link>
      </div>

      {/* DOTS */}
      <div className="relative flex justify-center gap-3 pb-8">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2.5 rounded-full transition-all ${
              active === i ? "w-6 bg-gray-900" : "w-2.5 bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
