import fs from "fs";
import path from "path";
import ProductCard from "../../components/ProductCard"; // Is path ko check kar lein

export const metadata = {
  title: "Sofas | Indepelle Furniture",
  description: "Premium sofas for modern living spaces by Indepelle Furniture",
};

// 🔹 Dummy price + rating + reviews generator
function getProductMeta(index) {
  const prices = [24999, 28999, 32999, 37999, 42999];
  const ratings = [4.4, 4.5, 4.6, 4.7, 4.8];
  const reviews = [64, 92, 118, 154, 198];

  return {
    price: prices[index % prices.length],
    rating: ratings[index % ratings.length],
    reviews: reviews[index % reviews.length],
  };
}

export default function SofasPage() {
  const dirPath = path.join(process.cwd(), "public/images/furnitures/sofas");

  // ✅ Folder se photos automatically read karna
  let images = [];
  if (fs.existsSync(dirPath)) {
    images = fs.readdirSync(dirPath).filter((img) =>
      /\.(jpg|jpeg|png|webp|avif)$/i.test(img)
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif mb-12">Sofas Collection</h1>

      {images.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-xl">No sofas found in the gallery.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {images.map((img, i) => {
            const meta = getProductMeta(i);

            // 🔹 Product object structure (Cart ke liye)
            const product = {
              id: `sofa-${i}`,
              title: "Luxury Fabric Sofa",
              price: meta.price,
              image: `/images/furnitures/sofas/${img}`,
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