import fs from "fs";
import path from "path";
import ProductCard from "../../components/ProductCard"; // Path sahi se check kar lein

export const metadata = {
  title: "Storage Furniture | Indepelle Furniture",
  description:
    "Premium storage furniture including wardrobes, cabinets and drawers by Indepelle Furniture",
};

// 🔹 Dummy price + rating + reviews generator
function getProductMeta(index) {
  const prices = [18999, 22999, 26999, 31999, 37999];
  const ratings = [4.3, 4.4, 4.5, 4.6, 4.8];
  const reviews = [52, 79, 103, 141, 186];

  return {
    price: prices[index % prices.length],
    rating: ratings[index % ratings.length],
    reviews: reviews[index % reviews.length],
  };
}

export default function StoragePage() {
  const dirPath = path.join(process.cwd(), "public/images/furnitures/storage");

  // ✅ Automatically fetch all images from the folder
  let images = [];
  if (fs.existsSync(dirPath)) {
    images = fs.readdirSync(dirPath).filter((img) =>
      /\.(jpg|jpeg|png|webp|avif)$/i.test(img)
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif mb-12">Storage Furniture</h1>

      {images.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-xl">
            No storage products found in the gallery.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {images.map((img, i) => {
            const meta = getProductMeta(i);

            // 🔹 Product object structure jo CartContext ke liye ready hai
            const product = {
              id: `storage-${i}`,
              title: "Premium Storage Unit",
              price: meta.price,
              image: `/images/furnitures/storage/${img}`,
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