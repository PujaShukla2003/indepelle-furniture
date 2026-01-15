"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const router = useRouter();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));
  const [activeImage, setActiveImage] = useState(product?.images[0]);

  // Sync image if product changes
  useEffect(() => {
    if (product) setActiveImage(product.images[0]);
  }, [product]);

  if (!product) {
    return <div className="p-12 text-center text-xl">Product not found</div>;
  }

  const handleBuyNow = () => {
    addToCart(product);
    router.push("/cart"); // Pehle cart dikhao taaki user quantity check kar sake
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-14">
        {/* IMAGE GALLERY */}
        <div>
          <img
            src={activeImage}
            alt={product.name}
            className="rounded-xl w-full h-[450px] object-cover shadow-lg mb-4"
          />
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setActiveImage(img)}
                className={`h-24 w-full object-cover rounded-lg cursor-pointer border-2 transition ${
                  activeImage === img ? "border-black scale-95" : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>

        {/* DETAILS */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-3xl text-gray-900 font-semibold mb-6">
            ₹{product.price.toLocaleString()}
          </p>

          <div className="mb-8">
            <h3 className="font-bold mb-2">Key Highlights:</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              {product.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => addToCart(product)}
              className="flex-1 bg-gray-100 text-black border-2 border-black py-4 rounded-xl font-bold hover:bg-black hover:text-white transition-all"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}