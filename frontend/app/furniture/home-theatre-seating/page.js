import fs from "fs";
import path from "path";
import ProductCard from "../../components/ProductCard"; // Ensure path is correct

export const metadata = {
  title: "Home Theatre Seating | Indepelle Furniture",
  description: "Premium home theatre seating for luxury entertainment spaces",
};

// 🔹 Dummy price + rating + reviews generator
function getProductMeta(index) {
  const prices = [39999, 45999, 52999, 58999, 64999];
  const ratings = [4.4, 4.5, 4.6, 4.7, 4.8];
  const reviews = [48, 74, 106, 138, 182];

  return {
    price: prices[index % prices.length],
    rating: ratings[index % ratings.length],
    reviews: reviews[index % reviews.length],
  };
}

export default function HomeTheatreSeatingPage() {
  const dirPath = path.join(
    process.cwd(),
    "public/images/furnitures/home-theatre-seating"
  );

  // ✅ Automatically read all images from the folder
  let images = [];
  if (fs.existsSync(dirPath)) {
    images = fs.readdirSync(dirPath).filter((img) =>
      /\.(jpg|jpeg|png|webp|avif)$/i.test(img)
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif mb-12">Home Theatre Seating</h1>

      {images.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-xl">
            No home theatre seating found in the gallery.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {images.map((img, i) => {
            const meta = getProductMeta(i);

            // 🔹 Product object tailored for your CartContext
            const product = {
              id: `ht-seating-${i}`,
              title: "Luxury Recliner Seating",
              price: meta.price,
              image: `/images/furnitures/home-theatre-seating/${img}`,
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