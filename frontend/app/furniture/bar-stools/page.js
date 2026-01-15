import fs from "fs";
import path from "path";
import ProductCard from "../../components/ProductCard"; // Component ka sahi path dein

// Meta generator logic
function getProductMeta(index) {
  const prices = [9999, 12999, 15999, 18999, 22999];
  const ratings = [4.3, 4.4, 4.5, 4.6, 4.8];
  const reviews = [41, 68, 92, 117, 164];

  return {
    price: prices[index % prices.length],
    rating: ratings[index % ratings.length],
    reviews: reviews[index % reviews.length],
  };
}

export default function BarStoolsPage() {
  const dirPath = path.join(process.cwd(), "public/images/furnitures/bar-stools");

  // Folder check aur images read karna
  let images = [];
  if (fs.existsSync(dirPath)) {
    images = fs.readdirSync(dirPath).filter((img) =>
      /\.(jpg|jpeg|png|webp|avif)$/i.test(img)
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif mb-12 text-center md:text-left">
        Bar Stools Collection
      </h1>

      {images.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500">No bar stools found in the directory.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {images.map((img, i) => {
            const meta = getProductMeta(i);
            const product = {
              id: `barstool-${i}`,
              title: `Premium Bar Stool ${i + 1}`,
              price: meta.price,
              image: `/images/furnitures/bar-stools/${img}`,
            };

            // ProductCard ek Client Component hai jo click handle karega
            return <ProductCard key={i} product={product} meta={meta} />;
          })}
        </div>
      )}
    </section>
  );
}