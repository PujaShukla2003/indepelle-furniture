"use client";

import Link from "next/link";

const barCategories = [
  {
    title: "Bar Cabinets",
    slug: "bar-cabinets",
    image:
      "https://ayrcabinet.b-cdn.net/wp-content/uploads/Custom-Bar-Cabinets-Product-Spotlight--2048x2048.jpg",
  },
  {
    title: "Bar Accessories",
    slug: "bar-accessories",
    image:
      "https://biyopos.com/wp-content/uploads/2024/11/well-stocked-bar-supplies.png",
  },
  {
    title: "Portable Bars",
    slug: "portable-bars",
    image:
      "https://images.unsplash.com/photo-1587223962930-cb7f31384c19",
  },
  {
    title: "Bar Counter",
    slug: "bar-counter",
    image:
      "https://assets.zeezest.com/blogs/PROD_Banner_1648444775718.jpg",
  },
  {
    title: "Bar Trolley",
    slug: "bar-trolley",
    image:
      "https://m.media-amazon.com/images/I/81Bm4JgU-nL._AC_SL1500_.jpg",
  },
  {
    title: "Bar Stools",
    slug: "bar-stools",
    image:
      "https://i.pinimg.com/originals/14/ea/2e/14ea2e9d3b3681a9738a2d68c3dbe7ff.jpg",
  },
];

export default function BarPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* HEADER */}
      <h1 className="text-4xl font-serif mb-2">Bar</h1>
      <p className="text-gray-600 mb-10">
        Premium bar furniture and accessories for a perfect home bar setup.
      </p>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {barCategories.map((item) => (
          <Link
            key={item.slug}
            href={`/bar/${item.slug}`}
            className="group relative overflow-hidden rounded-2xl h-72"
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/35 flex items-end p-6">
              <h3 className="text-white text-2xl font-serif">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
