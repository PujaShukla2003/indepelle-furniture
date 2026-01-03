"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { products } from "../../data/products";

export default function ProductDetail() {
  const params = useParams();              // ✅ FIX
  const product = products.find(
    (p) => p.id === params.id
  );

  const [activeImage, setActiveImage] = useState(
    product?.images[0]
  );

  if (!product) {
    return (
      <div className="p-12 text-center text-xl">
        Product not found
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-14">

        {/* IMAGE GALLERY */}
        <div>
          <img
            src={activeImage}
            alt={product.name}
            className="rounded-xl w-full h-[420px] object-cover shadow-lg mb-4"
          />

          <div className="grid grid-cols-3 gap-4">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                onClick={() => setActiveImage(img)}
                className={`h-28 w-full object-cover rounded-lg cursor-pointer border 
                  ${
                    activeImage === img
                      ? "border-black"
                      : "border-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* PRODUCT DETAILS */}
        <div>
          <h1 className="text-3xl font-bold mb-2">
            {product.name}
          </h1>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-yellow-500 text-lg">
              ★★★★★
            </span>
            <span className="text-gray-600 text-sm">
              {product.rating} ({product.reviews} Reviews)
            </span>
          </div>

          <p className="text-3xl font-semibold mb-6">
            ₹{product.price.toLocaleString()}
          </p>

          <div className="bg-gray-100 p-4 rounded-lg mb-6 text-sm space-y-1">
            <p>✔ Free Delivery</p>
            <p>✔ Cash on Delivery Available</p>
            <p>✔ 7 Days Easy Replacement</p>
          </div>

          <p className="text-gray-700 mb-6">
            {product.description}
          </p>

          <ul className="list-disc pl-5 text-gray-700 mb-8 space-y-1">
            {product.highlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <div className="flex gap-4">
            <button className="px-8 py-3 bg-black text-white rounded-lg">
              Add to Cart
            </button>

            <button className="px-8 py-3 border rounded-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
