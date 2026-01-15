"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

export default function ProductsPage() {
  const { addToCart } = useCart();
  const router = useRouter();

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const categories = useMemo(() => {
    return ["all", ...new Set(products.map((p) => p.category))];
  }, []);

  const filteredProducts = useMemo(() => {
    let data = [...products];
    if (selectedCategory !== "all") {
      data = data.filter((p) => p.category === selectedCategory);
    }
    if (sortBy === "low-high") data.sort((a, b) => a.price - b.price);
    if (sortBy === "high-low") data.sort((a, b) => b.price - a.price);
    return data;
  }, [selectedCategory, sortBy]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      <h1 className="text-4xl font-serif font-bold mb-10 text-center">Our Collection</h1>

      {/* FILTER BAR */}
      <div className="flex justify-between items-center mb-10 border-b pb-6">
        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2 rounded-lg text-sm bg-white"
        >
          {categories.map(cat => <option key={cat} value={cat} className="capitalize">{cat}</option>)}
        </select>

        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
          className="border p-2 rounded-lg text-sm bg-white"
        >
          <option value="featured">Featured</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group border rounded-2xl p-4 bg-white shadow-sm hover:shadow-xl transition-all duration-300">
            
            {/* Image Section */}
            <Link href={`/product/${product.id}`} className="block overflow-hidden rounded-xl h-72 relative">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              {product.rating >= 4.7 && (
                <span className="absolute top-3 left-3 bg-green-600 text-white text-[10px] px-2 py-1 rounded-full uppercase font-bold">
                  Top Rated
                </span>
              )}
            </Link>

            {/* Content Section */}
            <div className="mt-4">
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-xl font-semibold text-gray-900 mt-1">₹{product.price.toLocaleString()}</p>
            </div>

            {/* ACTION BUTTONS - Hamesha Visible Rehenge */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <button
                onClick={() => {
                  addToCart(product);
                  alert("Added to Cart!");
                }}
                className="py-3 text-xs font-bold uppercase border border-black rounded-xl hover:bg-gray-100 transition"
              >
                Add to Cart
              </button>
              
              <button
                onClick={() => {
                  addToCart(product);
                  router.push("/cart");
                }}
                className="py-3 text-xs font-bold uppercase bg-black text-white rounded-xl hover:bg-gray-800 transition"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}