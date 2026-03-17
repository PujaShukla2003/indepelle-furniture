import fs from "fs";
import path from "path";
import ProductCard from "../../components/ProductCard"; // Path ensure karein

export const metadata = {
  title: "Bedroom Interiors | Indepelle",
  description: "Luxury and modern bedroom interior designs by Indepelle",
};

/* 🔹 Price / rating generator */
function getBedroomMeta(index) {
  // Aapki range: 1.50L se 2.50L tak (Screenshot values included)
  const prices = [229000, 219000, 150000, 185000, 235000, 195000, 249000];
  const ratings = [4.5, 4.6, 4.7, 4.8, 4.9];
  const reviews = [48, 72, 96, 131, 182];

  // Dynamic titles for variety
  const bedTypes = ["Chesterfield", "Stanford", "Indepelle Luxury", "Royal"];
  const colors = ["Cognac", "Red", "Green", "Tan", "Black"];

  return {
    price: prices[index % prices.length],
    rating: ratings[index % ratings.length],
    reviews: reviews[index % reviews.length],
    title: `${bedTypes[index % bedTypes.length]} Leather King Bed ${colors[index % colors.length]}`
  };
}

export default function BedroomPage() {
  const folderPath = path.join(process.cwd(), "public/images/interiors/bedroom");

  // ✅ Folder safety check
  let images = [];
  if (fs.existsSync(folderPath)) {
    images = fs
      .readdirSync(folderPath)
      .filter((file) => /\.(jpg|jpeg|png|webp|avif)$/i.test(file));
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-white">
      <h1 className="text-4xl font-serif font-semibold mb-12 text-gray-900">
  Bedroom Interior Designs
</h1>

      {images.length === 0 ? (
        <div className="text-center py-20 border-2 border-dashed rounded-xl">
          <p className="text-gray-500 text-xl">No bedroom designs found in /public/images/interiors/bedroom</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {images.map((img, i) => {
            const meta = getBedroomMeta(i);

            // 🔹 Data format for the ProductCard
            const product = {
              id: `bedroom-design-${i}`,
              title: meta.title, // Ab title automatic badlega
              price: meta.price,
              image: `/images/interiors/bedroom/${img}`, 
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