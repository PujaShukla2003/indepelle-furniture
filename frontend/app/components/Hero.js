"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { heroSlides } from "../data/heroSlides";

export default function Hero() {
  const [active, setActive] = useState(0);

  // 🎨 Har slide ke liye alag pastel background colors
  const bgColors = [
    "bg-sky-100",    // Sky Blue
    "bg-pink-100",   // Light Pink
    "bg-green-100",  // Light Green
    "bg-orange-100", // Soft Orange
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`relative h-screen min-h-[750px] flex items-center overflow-hidden transition-colors duration-1000 ${bgColors[active % bgColors.length]}`}>
      
      {/* 🔥 ANIMATED IMAGE LAYER */}
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            active === i ? "opacity-100 z-0" : "opacity-0 z-[-1]"
          }`}
        >
          {/* Background Image with Ken Burns Effect */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[7000ms] ease-out ${
              active === i ? "scale-110" : "scale-100"
            }`}
            style={{ 
                backgroundImage: `url(${slide.image})`,
                filter: "brightness(1.1) opacity(0.2)" // Background image ko soft rakha hai taaki color dikhe
            }}
          />
          
          {/* Glassy Overlay */}
          <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-8 animate-fade-in">
          <div>
            <span className="text-gray-600 uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
              Indepelle Luxury Living
            </span>
            <h1 className="font-serif font-semibold text-gray-900 text-5xl sm:text-6xl lg:text-7xl leading-tight transition-all duration-500">
              {heroSlides[active].title}
            </h1>
          </div>

          <p className="text-gray-700 text-lg sm:text-xl max-w-xl leading-relaxed font-medium">
            {heroSlides[active].description}
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href={heroSlides[active].link}
              className="bg-gray-900 text-white px-10 py-4 rounded-full text-sm sm:text-base font-bold hover:bg-black transition-all duration-300 shadow-xl hover:scale-105"
            >
              Explore Collection →
            </Link>

            <Link
              href="/contact"
              className="text-gray-900 font-bold border-b-2 border-gray-900/20 hover:border-gray-900 pb-1 transition-all"
            >
              Custom Orders
            </Link>
          </div>

          {/* FEATURES */}
          <div className="pt-10 grid grid-cols-2 gap-y-8 gap-x-4 text-sm border-t border-gray-900/10">
            <div className="flex gap-4 items-center">
               <div className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center font-serif text-gray-900 font-bold shadow-sm">01</div>
              <div>
                <p className="font-bold text-gray-900 uppercase tracking-widest">Premium Quality</p>
                <p className="text-gray-600">Handcrafted leather</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
               <div className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center font-serif text-gray-900 font-bold shadow-sm">02</div>
              <div>
                <p className="font-bold text-gray-900 uppercase tracking-widest">Custom Design</p>
                <p className="text-gray-600">Tailored for you</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE - FLOATING WITH DYNAMIC GLOW */}
        <div className="relative hidden lg:block group">
          {/* Glow effect matching the current background */}
          <div className="absolute -inset-10 bg-white/30 rounded-full blur-3xl opacity-50 transition-all duration-1000" />
          
          <div className="relative h-[620px] w-full rounded-[40px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.15)] border-[12px] border-white/80">
            <img
              src={heroSlides[active].image}
              alt={heroSlides[active].title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>
        </div>
      </div>

      {/* DOTS / INDICATORS */}
      <div className="absolute bottom-12 left-10 z-20 flex items-center gap-4">
         <span className="text-xs font-bold text-gray-500">0{active + 1}</span>
         <div className="flex gap-2">
            {heroSlides.map((_, i) => (
            <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 transition-all duration-500 rounded-full ${
                active === i ? "w-12 bg-gray-900" : "w-4 bg-gray-900/20 hover:bg-gray-900/40"
                }`}
            />
            ))}
         </div>
         <span className="text-xs font-bold text-gray-500">0{heroSlides.length}</span>
      </div>
    </section>
  );
}