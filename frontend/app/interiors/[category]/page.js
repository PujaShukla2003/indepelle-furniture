"use client";
import React, { use } from "react";
// Path verified
import { useRouter } from "next/navigation";
// ✅ Path fix: Relative path use karein agar @ alias kaam nahi kar raha
import ProductCard from "../../components/ProductCard"; 

export default function InteriorCategoryPage({ params }) {
  const { category } = use(params);
  const { addToCart } = useCart();
  const router = useRouter();

  const items = [
    { 
      id: `interior-${category}-1`, 
      title: "Luxury Design 1", 
      price: 165000, 
      img: "photo-1587985064135-0366536eab42.avif" 
    },
    { 
      id: `interior-${category}-2`, 
      title: "Luxury Design 2", 
      price: 195000, 
      img: "photo-1664711942326-2c3351e215e6.avif" 
    },
    { 
      id: `interior-${category}-3`, 
      title: "Luxury Design 3", 
      price: 235000, 
      img: "photo-1661919547532-d02db090744c.avif" 
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif capitalize mb-10 border-b pb-4">
        {category.replaceAll("-", " ")} Interior Designs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {items.map((item, i) => {
          const meta = {
            rating: 4.5 + (i * 0.1),
            reviews: 40 + (i * 12)
          };

          const product = {
            id: item.id,
            title: item.title,
            price: item.price,
            image: `/images/interiors/${category}/${item.img}`,
          };

          return (
            <ProductCard 
              key={item.id} 
              product={product} 
              meta={meta} 
            />
          );
        })}
      </div>
    </section>
  );
}