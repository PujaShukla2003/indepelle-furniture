"use client";

import Image from "next/image";
import { interiors } from "../data/interiors";

export default function InteriorGallery({ title, limit }) {
  const items = limit ? interiors.slice(0, limit) : interiors;

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-10">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-xl overflow-hidden shadow hover:scale-[1.03] transition bg-white"
          >
            {/* IMAGE */}
            <div className="relative h-72 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">
                {item.title}
              </h3>

              {/* PRICE */}
              <p className="text-lg font-bold text-black">
                ₹{item.price.toLocaleString()}
              </p>

              {/* RATING */}
              <div className="flex items-center gap-1 mt-1 text-sm">
                <span className="text-yellow-500">★ ★ ★ ★ ★</span>
                <span className="text-gray-500">
                  ({item.rating})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
