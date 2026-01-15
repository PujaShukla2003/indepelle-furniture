import fs from "fs";
import path from "path";
import ProductCard from "../../components/ProductCard"; // Path verify karein

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

  // ✅ Automatically fetch all images from the folder
  let images = [];
  if (fs.existsSync(dirPath)) {
    images = fs.readdirSync(dirPath).filter((img) =>
      /\.(jpg|jpeg|png|webp|avif)$/i.test(img)
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif mb-12">Living Furniture</h1>

      {images.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-xl">
            No living furniture found in the gallery.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {images.map((img, i) => {
            const meta = getProductMeta(i);

            // 🔹 Data formatting for Cart
            const product = {
              id: `living-${i}`,
              title: "Premium Living Furniture",
              price: meta.price,
              image: `/images/furnitures/living/${img}`,
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