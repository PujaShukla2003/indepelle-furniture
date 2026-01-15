import fs from "fs";
import path from "path";
// ✅ Path fix: Ek level aur peeche ja kar components dhoondein
import ProductCard from "../../components/ProductCard"; 

export const metadata = {
  title: "Home Office Designs | Indepelle",
  description: "Premium home office furniture and interior designs by Indepelle",
};

function getHomeOfficeMeta(index) {
  const prices = [65000, 85000, 115000, 145000, 185000];
  const ratings = [4.4, 4.5, 4.6, 4.7, 4.8];
  const reviews = [34, 58, 81, 119, 164];
  return {
    price: prices[index % prices.length],
    rating: ratings[index % ratings.length],
    reviews: reviews[index % reviews.length],
  };
}

export default function HomeOfficeAllPage() {
  const folderPath = path.join(process.cwd(), "public", "images", "home-office");

  let images = [];
  if (fs.existsSync(folderPath)) {
    images = fs
      .readdirSync(folderPath)
      .filter((file) => /\.(jpg|jpeg|png|webp|avif)$/i.test(file));
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif mb-12 text-center md:text-left">Home Office Designs</h1>

      {images.length === 0 ? (
        <div className="text-center py-20 border-2 border-dashed rounded-xl">
          <p className="text-gray-500 text-xl">No images found in /public/images/home-office</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {images.map((img, i) => {
            const meta = getHomeOfficeMeta(i);
            const product = {
              id: `office-all-${i}`,
              title: "Modern Home Office Setup",
              price: meta.price,
              image: `/images/home-office/${img}`, // ✅ Single image string
            };

            return <ProductCard key={i} product={product} meta={meta} />;
          })}
        </div>
      )}
    </section>
  );
}