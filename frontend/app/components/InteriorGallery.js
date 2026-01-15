"use client";
import Image from "next/image";
import { interiors } from "../data/furniture";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

export default function InteriorGallery({ title, limit }) {
  const items = limit ? interiors.slice(0, limit) : interiors;
  const { addToCart } = useCart();
  const router = useRouter();

  const handleBuyNow = (item) => {
    addToCart(item);
    router.push("/cart"); // Direct cart par le jao
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-10">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div key={item.id} className="rounded-xl overflow-hidden shadow-lg border bg-white">
            <div className="relative h-72 w-full">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-xl font-bold mt-1">₹{item.price.toLocaleString()}</p>
              
              <div className="flex items-center gap-1 my-2 text-sm">
                <span className="text-yellow-500">★ ★ ★ ★ ★</span>
                <span className="text-gray-500">({item.rating})</span>
              </div>

              {/* ACTION BUTTONS */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <button
                  onClick={() => addToCart(item)}
                  className="bg-gray-100 py-2 rounded-lg font-medium hover:bg-gray-200 transition"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleBuyNow(item)}
                  className="bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition"
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