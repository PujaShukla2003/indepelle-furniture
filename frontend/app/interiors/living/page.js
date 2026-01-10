import fs from "fs";
import path from "path";
import Image from "next/image";

export const metadata = {
  title: "Living Room Interiors | Indepelle",
  description:
    "Luxury and modern living room interior designs by Indepelle",
};

/* 🔹 Price / rating generator */
function getLivingMeta(index) {
  const prices = [155000, 185000, 225000, 275000, 330000];
  const ratings = [4.5, 4.6, 4.7, 4.8, 4.9];
  const reviews = [46, 71, 98, 136, 189];

  return {
    price: prices[index % prices.length],
    rating: ratings[index % ratings.length],
    reviews: reviews[index % reviews.length],
  };
}

export default function LivingPage() {
  const dirPath = path.join(
    process.cwd(),
    "public/images/interiors/living"
  );

  // ✅ Safety check
  if (!fs.existsSync(dirPath)) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-semibold">
          No Living Room Designs Found
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
        Living Room Interior Designs
      </h1>

      {images.length === 0 ? (
        <p className="text-gray-500">
          No living room images available
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {images.map((img, i) => {
            const meta = getLivingMeta(i);

            return (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden border hover:shadow-xl transition"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden bg-gray-100">
                  <Image
                    src={`/images/interiors/living/${img}`}
                    alt="Living Room Interior"
                    width={600}
                    height={400}
                    className="w-full h-72 object-cover transition duration-500 group-hover:scale-105"
                    priority={i < 2}
                  />

                  {/* BEST SELLER */}
                  {meta.rating >= 4.8 && (
                    <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded">
                      Best Seller
                    </span>
                  )}
                </div>

                {/* DETAILS */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    Luxury Living Room Design
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
