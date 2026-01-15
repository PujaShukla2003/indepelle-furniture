import fs from "fs";
import path from "path";
import ProductCard from "../../components/ProductCard"; // Path ensure karein

export const metadata = {
  title: "Living Room Interiors | Indepelle",
  description: "Luxury and modern living room interior designs by Indepelle",
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
  const dirPath = path.join(process.cwd(), "public/images/interiors/living");

  // ✅ Folder safety check
  let images = [];
  if (fs.existsSync(dirPath)) {
    images = fs
      .readdirSync(dirPath)
      .filter((img) => /\.(jpg|jpeg|png|webp|avif)$/i.test(img));
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif mb-12">Living Room Interior Designs</h1>

      {images.length === 0 ? (
        <div className="text-center py-20 border-2 border-dashed rounded-2xl">
          <p className="text-gray-500 text-xl">
            No living room designs found in /public/images/interiors/living
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {images.map((img, i) => {
            const meta = getLivingMeta(i);

            // 🔹 Product data format for Cart
            const product = {
              id: `living-design-${i}`,
              title: "Luxury Living Room Design",
              price: meta.price,
              image: `/images/interiors/living/${img}`,
            };

            return (
              <ProductCard 
                key={i} 
                product={product} 
                meta={meta} 
              />
            );
          })}
        </div>
      )}
    </section>
  );
}