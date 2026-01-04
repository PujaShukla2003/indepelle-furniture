"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { products } from "../../data/products";

export default function LivingCategoryPage() {
  const { category } = useParams();

  const filteredProducts = products.filter(
    (p) => p.section === "living" && p.category === category
  );

  if (!filteredProducts.length) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-semibold capitalize mb-4">
          {category.replace("-", " ")}
        </h1>
        <p className="text-gray-600 mb-6">
          No products found in this category.
        </p>

        <Link
          href="/living"
          className="inline-block bg-black text-white px-6 py-3 rounded"
        >
          Back to Living
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      <h1 className="text-3xl font-serif mb-10 capitalize">
        {category.replace("-", " ")}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {filteredProducts.map((product) => (
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
    </section>
  );
}
