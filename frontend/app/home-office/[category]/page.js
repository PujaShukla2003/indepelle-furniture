"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { products } from "../../data/products";

export default function HomeOfficeCategoryPage() {
  const { category } = useParams();

  const filteredProducts = products.filter(
    (p) => p.section === "home-office" && p.category === category
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      <h1 className="text-4xl font-serif mb-10 capitalize">{category}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <img
              src={product.images[0]}
              className="h-72 w-full object-cover rounded-xl"
            />
            <h3 className="mt-3">{product.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
