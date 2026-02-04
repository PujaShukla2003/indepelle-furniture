import fs from "fs";
import path from "path";
import ProductCard from "../../components/ProductCard"; // Ensure path is correct

export const metadata = {
  title: "Couches | Indepelle Furniture",
  description: "Premium couches collection by Indepelle Furniture",
};

// 🔹 Dummy price + rating generator
function getProductMeta(index) {
  const prices = [50999, 70999, 68999, 82999, 54999];
  const ratings = [4.3, 4.5, 4.6, 4.7, 4.8];
  const reviews = [42, 68, 95, 123, 164];

  return {
    price: prices[index % prices.length],
    rating: ratings[index % ratings.length],
    reviews: reviews[index % reviews.length],
  };
}

export default function CouchesPage() {
  const dirPath = path.join(process.cwd(), "public/images/furnitures/couches");

  // ✅ Folder se images read karna
  let images = [];
  if (fs.existsSync(dirPath)) {
    images = fs.readdirSync(dirPath).filter((img) =>
      /\.(jpg|jpeg|png|webp|avif)$/i.test(img)
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif mb-12">Couches Collection</h1>

      {images.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-xl">No couches available right now.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {images.map((img, i) => {
            const meta = getProductMeta(i);

            // 🔹 Product Object
            const product = {
              id: `couch-${i}`,
              title: "Luxury Fabric Couch",
              price: meta.price,
              image: `/images/furnitures/couches/${img}`,
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