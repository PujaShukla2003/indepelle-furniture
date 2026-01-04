"use client";

import Link from "next/link";

const livingCategories = [
  {
    title: "Organisers",
    slug: "organisers",
    image:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1STwre.img?w=768&h=768&m=6",
  },
  {
    title: "Trays",
    slug: "trays",
    image:
      "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?q=80&w=1200",
  },
  {
    title: "Coasters",
    slug: "coasters",
    image:
      "https://www.unknownbrewing.com/wp-content/uploads/2024/05/DIY-Wooden-Coasters.jpeg",
  },
  {
    title: "Tissue Boxes",
    slug: "tissue-boxes",
    image:
      "https://m.media-amazon.com/images/I/81lmMKSCoqL._AC_SL1500_.jpg",
  },
  {
    title: "Storage",
    slug: "storage",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1200",
  },
  {
    title: "Baskets",
    slug: "baskets",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200",
  },
];

export default function LivingPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      {/* HEADER */}
      <div className="mb-12">
        <h1 className="text-4xl font-serif mb-4">Home & Living</h1>
        <p className="text-gray-600 max-w-2xl">
          Effortless organization for your everyday living needs.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {livingCategories.map((item) => (
          <Link
            key={item.slug}
            href={`/living/${item.slug}`}
            className="group relative overflow-hidden rounded-2xl"
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.title}
              className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/30 flex items-end">
              <h2 className="text-white text-3xl font-serif p-6">
                {item.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
