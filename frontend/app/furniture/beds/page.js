import Link from "next/link";
import { products } from "../../data/products";

export default function BedsPage() {
  const beds = products.filter(
    (p) => p.category === "beds"
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">
        Bedroom
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {beds.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="h-60 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold">
                {product.name}
              </h3>

              <p className="mt-1 text-gray-600">
                ₹{product.price.toLocaleString()}
              </p>

              <Link href={`/product/${product.id}`}>
                <button className="mt-4 w-full bg-black text-white py-2 rounded">
                  View Product
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
