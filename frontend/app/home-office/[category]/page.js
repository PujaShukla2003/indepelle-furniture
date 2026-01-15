import fs from "fs";
import path from "path";
import ProductCard from "../../components/ProductCard"; // Path check kar lein (shyad ek level aur upar ho)

// 🔹 Price aur Rating helper
function getProductMeta(index) {
  const prices = [12999, 15499, 18999, 22999, 25999];
  const ratings = [4.4, 4.5, 4.6, 4.7, 4.8];
  const reviews = [28, 45, 67, 89, 112];

  return {
    price: prices[index % prices.length],
    rating: ratings[index % ratings.length],
    reviews: reviews[index % reviews.length],
  };
}

export default function HomeOfficeCategoryPage({ params }) {
  const { category } = params;

  const folderPath = path.join(
    process.cwd(),
    "public/images/home-office",
    category
  );

  // Safety check: Agar folder nahi mila
  if (!fs.existsSync(folderPath)) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-semibold">Category not found</h1>
      </div>
    );
  }

  // Folder se images read karna
  const images = fs
    .readdirSync(folderPath)
    .filter((file) => /\.(jpg|jpeg|png|webp|avif)$/i.test(file));

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif capitalize mb-10 text-center md:text-left">
        {category.replaceAll("-", " ")}
      </h1>

      {images.length === 0 ? (
        <p className="text-center text-gray-500">No products available in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((img, i) => {
            const meta = getProductMeta(i);

            // Product Data for Cart
            const product = {
              id: `office-${category}-${i}`,
              title: `${category.replaceAll("-", " ")} Item`,
              price: meta.price,
              image: `/images/home-office/${category}/${img}`,
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