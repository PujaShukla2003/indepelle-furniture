import fs from "fs";
import path from "path";
import Image from "next/image";
import ProductCard from "../../components/ProductCard"; // @ alias use karein ya ../../../components/ProductCard

// 🔹 Price / rating generator specific to Decor
function getDecorMeta(index) {
  const prices = [1500, 2500, 4500, 7500, 12000];
  const ratings = [4.2, 4.4, 4.5, 4.7, 4.8];
  const reviews = [12, 28, 45, 67, 89];

  return {
    price: prices[index % prices.length],
    rating: ratings[index % ratings.length],
    reviews: reviews[index % reviews.length],
  };
}

export default function LivingCategoryPage({ params }) {
  // Next.js 15+ mein params ko await karna zaroori ho sakta hai
  const { category } = params;

  const folderPath = path.join(
    process.cwd(),
    "public/images/decor",
    category
  );

  // ✅ Safety check
  if (!fs.existsSync(folderPath)) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-semibold text-red-500">Category "{category}" Not Found</h1>
        <p className="text-gray-500 mt-2">Check folder: /public/images/decor/{category}</p>
      </div>
    );
  }

  const images = fs
    .readdirSync(folderPath)
    .filter((file) => /\.(jpg|jpeg|png|webp|avif)$/i.test(file));

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif capitalize mb-10 border-b pb-4">
        {category.replaceAll("-", " ")}
      </h1>

      {images.length === 0 ? (
        <div className="py-20 text-center border-2 border-dashed rounded-xl">
          <p className="text-gray-500">No images found in /public/images/decor/{category}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((img, i) => {
            const meta = getDecorMeta(i);
            const product = {
              id: `decor-${category}-${i}`,
              title: `Premium ${category.replace("-", " ")}`,
              price: meta.price,
              image: `/images/decor/${category}/${img}`,
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