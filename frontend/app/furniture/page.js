"use client";

import Link from "next/link";
import { products } from "../data/products";
import { useState } from "react";

export default function FurniturePage() {
  const [sort, setSort] = useState("featured");

  let sortedProducts = [...products];

  if (sort === "price-low") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "price-high") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">All Furniture</h1>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border px-4 py-2 rounded"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {sortedProducts.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="group"
          >
            <div className="overflow-hidden rounded-xl bg-gray-100">
              <img
                src={product.images[0]}
                alt={product.name}
                className="h-72 w-full object-cover group-hover:scale-105 transition"
              />
            </div>

            <h3 className="mt-4 font-semibold">{product.name}</h3>
            <p className="text-gray-600">
              ₹{product.price.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
