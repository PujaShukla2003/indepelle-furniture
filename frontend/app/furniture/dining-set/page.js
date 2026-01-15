import fs from "fs";
import path from "path";
import ProductCard from "../../components/ProductCard"; // Path ensure karein sahi ho

export const metadata = {
  title: "Dining Set | Indepelle Furniture",
  description: "Premium dining sets by Indepelle Furniture",
};

// 🔹 Dummy price + rating + reviews generator
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
  const dirPath = path.join(process.cwd(), "public/images/furnitures/dining-set");

  // ✅ Folder se automatically saari images fetch karna
  let images = [];
  if (fs.existsSync(dirPath)) {
    images = fs.readdirSync(dirPath).filter((img) =>
      /\.(jpg|jpeg|png|webp|avif)$/i.test(img)
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif mb-12">Dining Sets</h1>

      {images.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-xl">No dining sets found in the directory.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {images.map((img, i) => {
            const meta = getProductMeta(i);

            // 🔹 Product data object jo hum ProductCard component ko pass karenge
            const product = {
              id: `dining-${i}`,
              title: "Luxury Dining Set",
              price: meta.price,
              image: `/images/furnitures/dining-set/${img}`,
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