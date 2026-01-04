"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { products } from "../../data/products";

/* ================= CATEGORY HERO DATA ================= */
const categoryHero = {
  sofas: {
    title: "Luxury Sofas",
    desc: "Sink into comfort with our premium handcrafted sofas.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
  },
  living: {
    title: "Living Room Furniture",
    desc: "Design a living space that reflects warmth and elegance.",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
  },
  bedroom: {
    title: "Bedroom Collection",
    desc: "Calm, cozy and timeless bedroom furniture.",
    image:
      "https://images.unsplash.com/photo-1505693314120-0d443867891c",
  },
  dining: {
    title: "Dining Furniture",
    desc: "Where conversations meet fine craftsmanship.",
    image:
      "https://images.unsplash.com/photo-1615873968403-89e068629265",
  },
  storage: {
    title: "Storage Solutions",
    desc: "Beautiful storage designed for modern homes.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
};

export default function CategoryPage() {
  const { category } = useParams();

  const filteredProducts = products.filter(
    (p) => p.category === category
  );

  const hero = categoryHero[category];

  // ❌ Invalid category
  if (!hero || !filteredProducts.length) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-serif mb-4 capitalize">
          {category}
        </h1>
        <p className="text-gray-600 mb-8">
          No products found in this category.
        </p>

        <Link
          href="/products"
          className="bg-black text-white px-8 py-3 rounded"
        >
          View All Products
        </Link>
      </section>
    );
  }

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#faf7f2] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* TEXT */}
          <div>
            <h1 className="text-5xl font-serif font-semibold mb-6">
              {hero.title}
            </h1>

            <p className="text-lg text-gray-600 max-w-xl">
              {hero.desc}
            </p>

            <Link
              href="/products"
              className="inline-block mt-8 text-base font-medium hover:underline"
            >
              View all products →
            </Link>
          </div>

          {/* IMAGE */}
          <div className="h-[480px] rounded-xl overflow-hidden">
            <img
              src={hero.image}
              alt={hero.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= PRODUCT GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group"
            >
              <div className="overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-medium">
                  {product.name}
                </h3>
                <p className="text-gray-600">
                  ₹{product.price.toLocaleString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
