import fs from "fs";
import path from "path";
import Image from "next/image";

export const metadata = {
  title: "Bar Stools | Indepelle Furniture",
  description:
    "Premium bar stools with modern and luxury designs by Indepelle Furniture",
};

// 🔹 Price / rating / reviews auto generator
function getProductMeta(index) {
  const prices = [9999, 12999, 15999, 18999, 22999];
  const ratings = [4.3, 4.4, 4.5, 4.6, 4.8];
  const reviews = [41, 68, 92, 117, 164];

  return {
    price: prices[index % prices.length],
    rating: ratings[index % ratings.length],
    reviews: reviews[index % reviews.length],
  };
}

export default function BarStoolsPage() {
  const dirPath = path.join(
    process.cwd(),
    "public/images/furnitures/bar-stools"
  );

  // ✅ Safety check
  if (!fs.existsSync(dirPath)) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-semibold">
          No Bar Stools Found
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
        Bar Stools
      </h1>

      {images.length === 0 ? (
        <p className="text-gray-500">
          No bar stools available
        </p>
      ) : (
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
                    src={`/images/furnitures/bar-stools/${img}`}
                    alt="Bar Stool Furniture"
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
                    Premium Bar Stool
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
      )}
    </section>
  );
}
