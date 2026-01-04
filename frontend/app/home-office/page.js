"use client";

import Link from "next/link";

const homeOfficeCategories = [
  {
    title: "Desk Caddies",
    slug: "desk-caddies",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
  },
  {
    title: "A4 Trays",
    slug: "a4-trays",
    image:
      "https://m.media-amazon.com/images/I/61nSihnRiOL._AC_SL1266_.jpg",
  },
  {
    title: "Tissue Boxes",
    slug: "tissue-boxes",
    image:
      "https://i5.walmartimages.com/asr/00a90c17-9843-4aff-9434-97ac51fc9fe9.35e866d0b4d87a5e83a5162384833ebe.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
  },
  {
    title: "Mouse Pads",
    slug: "mouse-pads",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
  },
  {
    title: "Blotters",
    slug: "blotters",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
  },
  {
    title: "Pen Holders",
    slug: "pen-holders",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
  },
];

export default function HomeOfficePage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      <h1 className="text-5xl font-serif mb-3">Home Office</h1>
      <p className="text-gray-600 mb-12">
        Thoughtfully designed essentials for productive workspaces.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {homeOfficeCategories.map((item) => (
          <Link
            key={item.slug}
            href={`/home-office/${item.slug}`}
            className="group relative overflow-hidden rounded-2xl h-[260px]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition"
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
