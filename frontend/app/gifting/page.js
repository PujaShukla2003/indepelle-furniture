"use client";

import Link from "next/link";

const giftingCategories = [
  {
    title: "Poker Trunks",
    slug: "poker-trunks",
    image:
      "https://images.unsplash.com/photo-1603052875302-d376b7c0638a",
  },
  {
    title: "Jewelry Boxes",
    slug: "jewelry-boxes",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
  },
  {
    title: "Glass Trunks",
    slug: "glass-trunks",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    title: "Gift Sets",
    slug: "gift-sets",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48",
  },
  {
    title: "Corporate Gifts",
    slug: "corporate-gifts",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  },
  {
    title: "Festive Gifts",
    slug: "festive-gifts",
    image:
      "https://images.unsplash.com/photo-1512909006721-3d6018887383",
  },
];

export default function GiftingPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-serif mb-4">Gifting</h1>
      <p className="text-gray-600 mb-12">
        Thoughtful gifts designed to leave a lasting impression.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {giftingCategories.map((item) => (
          <Link
            key={item.slug}
            href={`/gifting/${item.slug}`}
            className="group relative rounded-xl overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/30 flex items-end p-6">
              <h3 className="text-white text-3xl font-serif">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
