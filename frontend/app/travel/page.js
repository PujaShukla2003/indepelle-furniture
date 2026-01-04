"use client";

import Link from "next/link";

const travelCategories = [
  {
    title: "Trolley Bags",
    slug: "trolley-bags",
    image:
      "https://m.media-amazon.com/images/I/61cPNkLGRiL._AC_.jpg",
  },
  {
    title: "Laptop Bags",
    slug: "laptop-bags",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
  },
  {
    title: "Tote Bags",
    slug: "tote-bags",
    image:
      "https://images.unsplash.com/photo-1593032465175-481ac7f401a0",
  },
  {
    title: "Sling Bags",
    slug: "sling-bags",
    image:
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3",
  },
  {
    title: "Duffle Bags",
    slug: "duffle-bags",
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c",
  },
  {
    title: "Belts",
    slug: "belts",
    image:
      "https://images.unsplash.com/photo-1618354691438-25bc04584c23",
  },
];

export default function TravelPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      <h1 className="text-5xl font-serif mb-4">Travel</h1>
      <p className="text-gray-600 mb-12">
        Premium travel essentials crafted for modern journeys.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {travelCategories.map((item) => (
          <Link
            key={item.slug}
            href={`/travel/${item.slug}`}
            className="relative group rounded-xl overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-80 w-full object-cover group-hover:scale-105 transition duration-500"
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
