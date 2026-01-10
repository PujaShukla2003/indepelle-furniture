import fs from "fs";
import path from "path";
import Image from "next/image";

export const metadata = {
  title: "Living Furniture | Indepelle Furniture",
  description: "Premium living room furniture by Indepelle Furniture",
};

// 🔹 Dummy price + rating + reviews generator
function getProductMeta(index) {
  const prices = [19999, 23999, 27999, 31999, 35999];
  const ratings = [4.3, 4.4, 4.5, 4.6, 4.8];
  const reviews = [46, 72, 98, 134, 176];

  return {
    price: prices[index % prices.length],
    rating: ratings[index % ratings.length],
    reviews: reviews[index % reviews.length],
  };
}

export default function LivingFurniturePage() {
  const dirPath = path.join(
    process.cwd(),
    "public/images/furnitures/living"
  );

  // ✅ SAFETY CHECK
  if (!fs.existsSync(dirPath)) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-semibold">
          No Living Furniture Found
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
        Living Furniture
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
                  src={`/images/furnitures/living/${img}`}
                  alt="Living Furniture"
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
                  Premium Living Furniture
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
          No living furniture available
        </p>
      )}
    </section>
  );
}
