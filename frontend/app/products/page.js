"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { products } from "../data/products";

export default function ProductsPage() {
  // ================= STATES =================
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const maxProductPrice = Math.max(...products.map((p) => p.price));
  const [maxPrice, setMaxPrice] = useState(maxProductPrice);

  // ================= UNIQUE CATEGORIES =================
  const categories = useMemo(() => {
    return ["all", ...new Set(products.map((p) => p.category))];
  }, []);

  // ================= FILTER + SORT =================
  const filteredProducts = useMemo(() => {
    let data = [...products];

    if (selectedCategory !== "all") {
      data = data.filter((p) => p.category === selectedCategory);
    }

    data = data.filter((p) => p.price <= maxPrice);

    if (sortBy === "low-high") {
      data.sort((a, b) => a.price - b.price);
    }
    if (sortBy === "high-low") {
      data.sort((a, b) => b.price - a.price);
    }

    return data;
  }, [selectedCategory, sortBy, maxPrice]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-14">

      {/* ================= HERO ================= */}
      <div className="mb-12">
        <h1 className="text-5xl font-serif font-semibold mb-4">
          Contemporary Masterpieces
        </h1>

        <p className="text-gray-600 max-w-2xl">
          Infuse your living and working spaces with warmth and character,
          highlighting natural textures and sturdy designs.
        </p>
      </div>

      {/* ================= FILTER BAR ================= */}
      <div className="flex flex-wrap items-center gap-6 mb-10 border-b pb-6">

        {/* CATEGORY */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border px-4 py-2 rounded-md text-sm"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === "all" ? "All Products" : cat}
            </option>
          ))}
        </select>

        {/* PRICE */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600">Price:</span>
          <input
            type="range"
            min={0}
            max={maxProductPrice}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-40"
          />
          <span className="text-sm font-medium">
            ₹{maxPrice.toLocaleString()}
          </span>
        </div>

        {/* SORT */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border px-4 py-2 rounded-md text-sm ml-auto"
        >
          <option value="featured">Featured</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
      </div>

      {/* ================= PRODUCTS GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="group"
          >
            <div className="overflow-hidden rounded-xl bg-gray-100 relative">

              {product.rating >= 4.7 && (
                <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded">
                  Best Seller
                </span>
              )}

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

      {/* EMPTY STATE */}
      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-20">
          No products found.
        </p>
      )}
    </section>
  );
}
