import fs from "fs";
import path from "path";
import Image from "next/image";

export const metadata = {
  title: "Dining Set | Indepelle Furniture",
  description: "Premium dining sets by Indepelle Furniture",
};

// 🔹 Dummy price + rating + reviews (same pattern everywhere)
function getProductMeta(index) {
  const prices = [28999, 32999, 37999, 42999, 48999];
  const ratings = [4.4, 4.5, 4.6, 4.7, 4.8];
  const reviews = [56, 82, 119, 147, 198];

  return {
    price: prices[index % prices.length],
    rating: ratings[index % ratings.length],
    reviews: reviews[index % reviews.length],
  };
}

export default function DiningSetPage() {
  const dirPath = path.join(
    process.cwd(),
    "public/images/furnitures/dining-set"
  );

  // ✅ SAFETY CHECK
  if (!fs.existsSync(dirPath)) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-semibold">
          No Dining Sets Found
        </h1>
      </section>
    );
  }

  const images = fs
    .readdirSync(dirPath)
    .filter((img) =>
      /\.(jpg|jpeg|png|webp|avif)$/i.test(img)
    );

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif mb-12">
        Dining Sets
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {images.map((img, i) => {
          const meta = getProductMeta(i);

          return (
            <div
              key={i}
              className="group border rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden bg-gray-100">
                <Image
                  src={`/images/furnitures/dining-set/${img}`}
                  alt="Premium Dining Set"
                  width={600}
                  height={400}
                  className="w-full h-72 object-cover transition duration-500 group-hover:scale-105"
                />

                {/* BEST SELLER */}
                {meta.rating >= 4.7 && (
                  <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded">
                    Best Seller
                  </span>
                )}
              </div>

              {/* DETAILS */}
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  Luxury Dining Set
                </h3>

                {/* RATING */}
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-yellow-500 text-sm">
                    ⭐ {meta.rating}
                  </span>
                  <span className="text-gray-500 text-sm">
                    ({meta.reviews} reviews)
                  </span>
                </div>

                {/* PRICE */}
                <p className="text-lg font-bold mt-2">
                  ₹{meta.price.toLocaleString()}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* EMPTY STATE */}
      {images.length === 0 && (
        <p className="text-center text-gray-500 mt-16">
          No dining sets available
        </p>
      )}
    </section>
  );
}
