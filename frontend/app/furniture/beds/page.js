import fs from "fs";
import path from "path";
import ProductCard from "../../components/ProductCard"; // Path verify karein

export const metadata = {
  title: "Beds | Indepelle Furniture",
  description: "Premium bedroom beds by Indepelle Furniture",
};

// 🔹 helper (dummy price & rating)
function getProductMeta(index) {
  const prices = [28999, 32999, 35999, 39999, 45999];
  const ratings = [4.3, 4.5, 4.6, 4.7, 4.8];
  const reviews = [54, 76, 98, 124, 167];

  return {
    price: prices[index % prices.length],
    rating: ratings[index % ratings.length],
    reviews: reviews[index % reviews.length],
  };
}

export default function BedsPage() {
  const folderPath = path.join(process.cwd(), "public/images/furnitures/beds");

  // Folder check aur images read karna
  let images = [];
  if (fs.existsSync(folderPath)) {
    images = fs.readdirSync(folderPath).filter((file) =>
      /\.(jpg|jpeg|png|webp|avif)$/i.test(file)
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif mb-12">Bedroom Furniture</h1>

      {images.length === 0 ? (
        <div className="text-center py-20">
          <h1 className="text-3xl font-semibold">No Beds Found</h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {images.map((img, i) => {
            const meta = getProductMeta(i);
            
            // Product object jo Cart mein jayega
            const product = {
              id: `bed-${i}`,
              title: "Luxury Bedroom Bed",
              price: meta.price,
              image: `/images/furnitures/beds/${img}`,
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