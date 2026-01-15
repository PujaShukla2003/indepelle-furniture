import fs from "fs";
import path from "path";
import ProductCard from "../../components/ProductCard"; // Path verify karein

export const metadata = {
  title: "Sofa Chairs | Indepelle Furniture",
  description: "Premium sofa chairs for modern living spaces",
};

// 🔹 Dummy price + rating + reviews generator
function getProductMeta(index) {
  const prices = [15999, 18999, 21999, 24999, 28999];
  const ratings = [4.3, 4.4, 4.5, 4.6, 4.8];
  const reviews = [38, 64, 92, 121, 158];

  return {
    price: prices[index % prices.length],
    rating: ratings[index % ratings.length],
    reviews: reviews[index % reviews.length],
  };
}

export default function SofaChairsPage() {
  const dirPath = path.join(
    process.cwd(),
    "public/images/furnitures/sofa-chairs"
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
      <h1 className="text-4xl font-serif mb-12">Sofa Chairs</h1>

      {images.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-xl">
            No sofa chairs found in the gallery.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {images.map((img, i) => {
            const meta = getProductMeta(i);

            // 🔹 Data formatting for Cart functionality
            const product = {
              id: `sofa-chair-${i}`,
              title: "Premium Sofa Chair",
              price: meta.price,
              image: `/images/furnitures/sofa-chairs/${img}`,
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