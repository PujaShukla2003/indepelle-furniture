"use client";

import Image from "next/image";
import { interiors } from "../data/furniture";
import { useCart } from "../context/CartContext"; // Cart functions use karne ke liye
import { useRouter } from "next/navigation"; // Buy now ke baad redirect karne ke liye

export default function InteriorGallery({ title, limit }) {
  const items = limit ? interiors.slice(0, limit) : interiors;
  const { addToCart } = useCart();
  const router = useRouter();

  const handleBuyNow = (item) => {
    addToCart(item);
    router.push("/cart"); // Direct cart page par bhej dega
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-10">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100 flex flex-col"
          >
            {/* IMAGE */}
            <div className="relative h-72 w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5 flex-grow">
              <h3 className="font-semibold text-lg mb-1 text-gray-800">
                {item.title}
              </h3>

              {/* PRICE */}
              <p className="text-xl font-bold text-black">
                ₹{item.price.toLocaleString()}
              </p>

              {/* RATING */}
              <div className="flex items-center gap-1 mt-1 text-sm mb-4">
                <span className="text-yellow-500">★ ★ ★ ★ ★</span>
                <span className="text-gray-500">({item.rating})</span>
              </div>

              {/* ACTION BUTTONS - Jo aapne maange the */}
              <div className="grid grid-cols-2 gap-3 mt-auto">
                <button
                  onClick={() => {
                    addToCart(item);
                    alert(`${item.title} cart mein add ho gaya!`);
                  }}
                  className="py-2.5 px-4 border border-black rounded-lg text-xs font-bold uppercase hover:bg-gray-100 transition-colors"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleBuyNow(item)}
                  className="py-2.5 px-4 bg-black text-white rounded-lg text-xs font-bold uppercase hover:bg-gray-800 transition-colors"
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