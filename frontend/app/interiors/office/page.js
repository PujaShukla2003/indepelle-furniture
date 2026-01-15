import fs from "fs";
import path from "path";
import ProductCard from "../../components/ProductCard"; // Path ensure karein

export const metadata = {
  title: "Office Interiors | Indepelle",
  description: "Premium office interior designs for modern and corporate workspaces by Indepelle",
};

/* 🔹 Price / rating generator */
function getOfficeMeta(index) {
  const prices = [175000, 215000, 255000, 310000, 380000];
  const ratings = [4.5, 4.6, 4.7, 4.8, 4.9];
  const reviews = [39, 64, 92, 128, 176];

  return {
    price: prices[index % prices.length],
    rating: ratings[index % ratings.length],
    reviews: reviews[index % reviews.length],
  };
}

export default function OfficePage() {
  const dirPath = path.join(process.cwd(), "public/images/interiors/office");

  // ✅ Safety check for folder
  let images = [];
  if (fs.existsSync(dirPath)) {
    images = fs
      .readdirSync(dirPath)
      .filter((img) => /\.(jpg|jpeg|png|webp|avif)$/i.test(img));
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif mb-12">Office Interior Designs</h1>

      {images.length === 0 ? (
        <div className="text-center py-20 border-2 border-dashed rounded-2xl">
          <p className="text-gray-500 text-xl">
            No office designs found in /public/images/interiors/office
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {images.map((img, i) => {
            const meta = getOfficeMeta(i);

            // 🔹 Data structure for the ProductCard and Cart sync
            const product = {
              id: `office-design-${i}`,
              title: "Corporate Office Interior",
              price: meta.price,
              image: `/images/interiors/office/${img}`,
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