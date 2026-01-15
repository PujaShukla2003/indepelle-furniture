"use client";

import Image from "next/image";
import { useCart } from "../context/CartContext"; // Path check kar lein
import { useRouter } from "next/navigation";

export default function ProductCard({ product, meta }) {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleBuyNow = () => {
    addToCart(product);
    router.push("/cart");
  };

  return (
    <div className="group border rounded-2xl overflow-hidden hover:shadow-xl transition bg-white flex flex-col">
      {/* IMAGE SECTION */}
      <div className="relative overflow-hidden bg-gray-100 h-72">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {meta.rating >= 4.7 && (
          <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded shadow-md">
            Best Seller
          </span>
        )}
      </div>

      {/* DETAILS SECTION */}
      <div className="p-5 flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
        
        <div className="flex items-center gap-2 mt-1">
          <span className="text-yellow-500 text-sm">⭐ {meta.rating}</span>
          <span className="text-gray-400 text-sm">({meta.reviews} reviews)</span>
        </div>

        <p className="text-2xl font-bold mt-2 text-black">₹{product.price.toLocaleString()}</p>

        {/* ACTION BUTTONS */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          <button
            onClick={() => {
              addToCart(product);
              alert(`${product.title} added to cart!`);
            }}
            className="py-2.5 border-2 border-black rounded-xl text-[10px] font-bold uppercase hover:bg-black hover:text-white transition-all duration-300"
          >
            Add to Cart
          </button>
          <button
            onClick={handleBuyNow}
            className="py-2.5 bg-black text-white rounded-xl text-[10px] font-bold uppercase hover:bg-gray-800 transition-all duration-300"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}