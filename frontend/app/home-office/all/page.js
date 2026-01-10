import fs from "fs";
import path from "path";
import Image from "next/image";

export const metadata = {
  title: "Home Office Designs | Indepelle",
  description:
    "Premium home office furniture and interior designs by Indepelle",
};

/* 🔹 Price / rating generator */
function getHomeOfficeMeta(index) {
  const prices = [65000, 85000, 115000, 145000, 185000];
  const ratings = [4.4, 4.5, 4.6, 4.7, 4.8];
  const reviews = [34, 58, 81, 119, 164];

  return {
    price: prices[index % prices.length],
    rating: ratings[index % ratings.length],
    reviews: reviews[index % reviews.length],
  };
}

export default function HomeOfficeAllPage() {
  const folderPath = path.join(
    process.cwd(),
    "public/images/home-office"
  );

  // ✅ Safety check
  if (!fs.existsSync(folderPath)) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-semibold">
          No Home Office Designs Found
        </h1>
      </section>
    );
  }

  const images = fs
    .readdirSync(folderPath)
    .filter((file) =>
      /\.(jpg|jpeg|png|webp|avif)$/i.test(file)
    );

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif mb-12">
        Home Office Designs
      </h1>

      {images.length === 0 ? (
        <p className="text-gray-500">
          No home office images available
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {images.map((img, i) => {
            const meta = getHomeOfficeMeta(i);

            return (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden border hover:shadow-xl transition"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden bg-gray-100">
                  <Image
                    src={`/images/home-office/${img}`}
                    alt="Home Office Design"
                    width={600}
                    height={400}
                    className="object-cover w-full h-72 transition duration-500 group-hover:scale-105"
                    priority={i < 2}
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
                    Modern Home Office Setup
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
