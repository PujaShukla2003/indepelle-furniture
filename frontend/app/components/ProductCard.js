import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group border rounded-2xl overflow-hidden hover:shadow-xl transition"
    >
      {/* IMAGE */}
      <div className="relative bg-gray-100 overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* BEST SELLER */}
        {product.rating >= 4.7 && (
          <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded">
            Best Seller
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">
          {product.name}
        </h3>

        {/* RATING */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-yellow-500 text-sm">
            ⭐ {product.rating}
          </span>
          <span className="text-gray-500 text-sm">
            ({product.reviews} reviews)
          </span>
        </div>

        {/* PRICE */}
        <p className="text-lg font-bold mt-2">
          ₹{product.price.toLocaleString()}
        </p>
      </div>
    </Link>
  );
}
