import Link from "next/link";
import { products } from "../../data/products";

export default function DiningPage() {
  const dining = products.filter(p => p.category === "dining");

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Dining</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {dining.map(product => (
          <div key={product.id} className="border rounded-xl overflow-hidden shadow">
            <img src={product.images[0]} className="h-60 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{product.name}</h3>
              <p>₹{product.price.toLocaleString()}</p>
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
