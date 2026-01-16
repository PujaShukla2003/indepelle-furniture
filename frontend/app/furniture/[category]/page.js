"use client";

import React from "react";
import { useCart } from "../../../context/CartContext";
import { useRouter } from "next/navigation";

export default function FurnitureCategoryPage({ params }) {
  const { category } = params;
  const { addToCart } = useCart();
  const router = useRouter();


  // Ye data structure aapke image paths ke hisaab se hai
  const items = [
    { id: `${category}-1`, title: `Premium ${category}`, price: 15999, rating: "4.4 (64 reviews)", img: "photo-1.avif" },
    { id: `${category}-2`, title: `Luxury ${category}`, price: 24999, rating: "4.5 (92 reviews)", img: "photo-2.avif" },
    { id: `${category}-3`, title: `Modern ${category}`, price: 32999, rating: "4.6 (118 reviews)", img: "photo-3.avif" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif capitalize mb-10">{category.replace('-', ' ')} Collection</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {items.map((item) => (
          <div key={item.id} className="rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-md transition">
            {/* Image Section */}
            <div className="h-72 overflow-hidden bg-gray-100">
              <img 
                src={`/images/furnitures/${category}/${item.img}`} 
                alt={item.title}
                className="w-full h-full object-cover"
                onError={(e) => e.target.src = 'https://via.placeholder.com/400x300?text=No+Image'}
              />
            </div>

            {/* Details Section */}
            <div className="p-5">
              <h3 className="font-bold text-lg capitalize">{item.title}</h3>
              <p className="text-yellow-500 text-sm">★ {item.rating}</p>
              <p className="text-xl font-bold mt-1 text-black">₹{item.price.toLocaleString()}</p>
              
              {/* ACTION BUTTONS JO HAR PAGE PAR DIKHENGE */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <button 
                  onClick={() => {
                    addToCart({ 
                        id: item.id, 
                        name: item.title, 
                        price: item.price, 
                        image: `/images/furnitures/${category}/${item.img}` 
                    });
                    alert(`${item.title} Cart mein add ho gaya!`);
                  }}
                  className="py-2 border border-black rounded-lg text-[10px] font-bold uppercase hover:bg-gray-100 transition"
                >
                  Add to Cart
                </button>
                <button 
                  onClick={() => {
                    addToCart({ 
                        id: item.id, 
                        name: item.title, 
                        price: item.price, 
                        image: `/images/furnitures/${category}/${item.img}` 
                    });
                    router.push("/cart");
                  }}
                  className="py-2 bg-black text-white rounded-lg text-[10px] font-bold uppercase hover:bg-gray-800 transition"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}