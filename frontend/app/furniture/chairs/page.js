import fs from "fs";
import path from "path";
import ProductCard from "../../components/ProductCard"; // Ensure karein path sahi ho

export const metadata = {
  title: "Chairs | Indepelle Furniture",
  description: "Premium chairs collection by Indepelle Furniture",
};

// 🔹 Dummy price + rating generator
function getProductMeta(index) {
  const prices = [8999, 10999, 12999, 14999, 17999];
  const ratings = [4.2, 4.4, 4.5, 4.7, 4.8];
  const reviews = [34, 56, 78, 102, 145];

  return {
    price: prices[index % prices.length],
    rating: ratings[index % ratings.length],
    reviews: reviews[index % reviews.length],
  };
}

export default function ChairsPage() {
  const dirPath = path.join(process.cwd(), "public/images/furnitures/chairs");

  // ✅ Folder se saari images read karna (Server Side)
  let images = [];
  if (fs.existsSync(dirPath)) {
    images = fs.readdirSync(dirPath).filter((img) =>
      /\.(jpg|jpeg|png|webp|avif)$/i.test(img)
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif mb-12">Chairs Collection</h1>

      {images.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500">No chairs available in the gallery.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {images.map((img, i) => {
            const meta = getProductMeta(i);

            // 🔹 Product data object jo hum ProductCard ko denge
            const product = {
              id: `chair-${i}`,
              title: "Premium Lounge Chair",
              price: meta.price,
              image: `/images/furnitures/chairs/${img}`, // Sahi path
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