"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { heroSlides } from "../data/heroSlides";

export default function Hero() {
  const [active, setActive] = useState(0);

  const bgColors = [
    "bg-sky-100",
    "bg-pink-100",
    "bg-green-100",
    "bg-orange-100",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`relative min-h-[100vh] lg:h-screen flex items-center overflow-hidden transition-colors duration-1000 py-20 lg:py-0 ${bgColors[active % bgColors.length]}`}>
      
      {/* BACKGROUND LAYER */}
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            active === i ? "opacity-100 z-0" : "opacity-0 z-[-1]"
          }`}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[7000ms] ease-out ${
              active === i ? "scale-110" : "scale-100"
            }`}
            style={{ 
                backgroundImage: `url(${slide.image})`,
                filter: "brightness(1.05)" 
            }}
          />
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-6 lg:space-y-8 animate-fade-in order-2 lg:order-1">
          <div>
            <span className="text-gray-600 uppercase tracking-[0.3em] lg:tracking-[0.4em] text-[10px] lg:text-xs font-bold mb-4 block">
              Indepelle Luxury Living
            </span>
            <h1 className="font-serif font-semibold text-gray-900 text-4xl sm:text-6xl lg:text-7xl leading-tight transition-all duration-500">
              {heroSlides[active].title}
            </h1>
          </div>

          <p className="text-gray-700 text-base lg:text-xl max-w-xl leading-relaxed font-medium">
            {heroSlides[active].description}
          </p>

          <div className="flex flex-wrap items-center gap-4 lg:gap-6">
            <Link
              href={heroSlides[active].link}
              className="bg-gray-900 text-white px-8 lg:px-10 py-3 lg:py-4 rounded-full text-sm lg:text-base font-bold hover:bg-black transition-all duration-300 shadow-xl hover:scale-105"
            >
              Explore Collection →
            </Link>

            <Link
              href="/contact"
              className="text-gray-900 font-bold border-b-2 border-gray-900/20 hover:border-gray-900 pb-1 text-sm lg:text-base transition-all"
            >
              Custom Orders
            </Link>
          </div>

          {/* FEATURES - Responsive Grid */}
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm border-t border-gray-900/10">
            <div className="flex gap-4 items-center">
               <div className="w-10 h-10 shrink-0 rounded-full bg-white/50 flex items-center justify-center font-serif text-gray-900 font-bold shadow-sm">01</div>
              <div>
                <p className="font-bold text-gray-900 uppercase tracking-widest text-xs">Premium Quality</p>
                <p className="text-gray-600 text-xs">Handcrafted leather</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
               <div className="w-10 h-10 shrink-0 rounded-full bg-white/50 flex items-center justify-center font-serif text-gray-900 font-bold shadow-sm">02</div>
              <div>
                <p className="font-bold text-gray-900 uppercase tracking-widest text-xs">Custom Design</p>
                <p className="text-gray-600 text-xs">Tailored for you</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE - Now visible on mobile too */}
        <div className="relative group order-1 lg:order-2">
          <div className="absolute -inset-4 lg:-inset-10 bg-white/30 rounded-full blur-2xl lg:blur-3xl opacity-50 transition-all duration-1000" />
          
          <div className="relative h-[300px] sm:h-[450px] lg:h-[620px] w-full rounded-[24px] lg:rounded-[40px] overflow-hidden shadow-2xl border-[6px] lg:border-[12px] border-white/80">
            <img
              src={heroSlides[active].image}
              alt={heroSlides[active].title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>
        </div>
      </div>

      {/* INDICATORS - Adjusted for mobile */}
      <div className="absolute bottom-6 lg:bottom-12 left-6 lg:left-10 z-20 flex items-center gap-3 lg:gap-4">
         <span className="text-[10px] lg:text-xs font-bold text-gray-500">0{active + 1}</span>
         <div className="flex gap-1.5 lg:gap-2">
            {heroSlides.map((_, i) => (
            <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1 lg:h-1.5 transition-all duration-500 rounded-full ${
                active === i ? "w-8 lg:w-12 bg-gray-900" : "w-3 lg:w-4 bg-gray-900/20 hover:bg-gray-900/40"
                }`}
            />
            ))}
         </div>
         <span className="text-[10px] lg:text-xs font-bold text-gray-500">0{heroSlides.length}</span>
      </div>
    </section>
  );
}