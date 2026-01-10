import fs from "fs";
import path from "path";
import Image from "next/image";

export const metadata = {
  title: "Carpets | Indepelle Living",
  description:
    "Premium living room carpets with elegant and modern designs",
};

/* 🔹 Price / rating auto generator */
function getCarpetMeta(index) {
  const prices = [6999, 8999, 10999, 13999, 16999];
  const ratings = [4.3, 4.4, 4.5, 4.6, 4.8];
  const reviews = [32, 54, 76, 98, 141];

  return {
    price: prices[index % prices.length],
    rating: ratings[index % ratings.length],
    reviews: reviews[index % reviews.length],
  };
}

export default function CarpetsPage() {
  const folderPath = path.join(
    process.cwd(),
    "public/images/decor/carpets"
  );

  // ✅ safety check
  if (!fs.existsSync(folderPath)) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-semibold">
          No Carpets Found
        </h1>
      </section>
    );
  }

  const images = fs
    .readdirSync(folderPath)
    .filter((img) =>
      /\.(jpg|jpeg|png|webp|avif)$/i.test(img)
    );

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif mb-12">
        Living Room Carpets
      </h1>

      {images.length === 0 ? (
        <p className="text-gray-500">
          No carpet images available
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {images.map((img, i) => {
            const meta = getCarpetMeta(i);

            return (
              <div
                key={i}
                className="group border rounded-2xl overflow-hidden hover:shadow-xl transition"
              >
                {/* IMAGE */}
                <div className="relative bg-gray-100 overflow-hidden">
                  <Image
                    src={`/images/decor/carpets/${img}`}
                    alt="Carpet"
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
                    Premium Carpet
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
