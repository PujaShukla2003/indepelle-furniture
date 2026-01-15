import Hero from "./components/Hero";
import CategoryGrid from "./components/CategoryGrid";
import EditorialGrid from "./components/EditorialGrid";
import InteriorGallery from "./components/FurnitureGallery";
// ✅ ProductCard ko import karein
import ProductCard from "./components/ProductCard"; 

import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Indepelle Furniture | Buy Furniture Online",
  description: "Buy premium furniture like sofa, bed, dining table online at best price.",
};

/* ================= HELPER FUNCTIONS ================= */

function getAllImagesFromFolder(parentFolder) {
  const fullPath = path.join(process.cwd(), "public", parentFolder);
  let allImages = [];
  if (!fs.existsSync(fullPath)) return [];
  const items = fs.readdirSync(fullPath);

  items.forEach((item) => {
    const itemPath = path.join(fullPath, item);
    if (fs.statSync(itemPath).isDirectory()) {
      const subImages = fs.readdirSync(itemPath)
        .filter((img) => /\.(jpg|jpeg|png|webp|avif)$/i.test(img))
        .map((img) => ({
          path: `/${parentFolder}/${item}/${img}`,
          category: item
        }));
      allImages = [...allImages, ...subImages];
    }
  });
  return allImages;
}

// Price aur Rating generate karne ke liye
function getProductMeta(index) {
  const prices = [12999, 24500, 8999, 45000, 15700];
  return {
    price: prices[index % prices.length],
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 100) + 10
  };
}

export default function Home() {
  const interiors = getAllImagesFromFolder("images/interiors");
  const furniture = getAllImagesFromFolder("images/furnitures");
  const living = getAllImagesFromFolder("images/decor");

  return (
    <main className="space-y-24 bg-gray-50/50">
      <Hero />
      <CategoryGrid />

      <Section title="Interior Designs" link="/interiors" items={interiors} />
      <Section title="Premium Furniture" link="/furniture" items={furniture} />
      <Section title="Living & Decor" link="/living" items={living} />

      <EditorialGrid />
    </main>
  );
}

/* ================= UPDATED SECTION COMPONENT ================= */
function Section({ title, link, items }) {
  if (items.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-end mb-10 border-b pb-6">
        <div>
          <h2 className="text-4xl font-serif mb-2">{title}</h2>
          <p className="text-gray-500">Explore our exclusive {title.toLowerCase()} collection</p>
        </div>
        <Link href={link} className="text-black font-medium underline underline-offset-4 hover:text-gray-600">
          View All {items.length} Items
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.map((item, i) => {
          const meta = getProductMeta(i);
          
          // ProductCard ke liye data structure taiyar karein
          const productData = {
            id: `home-${title}-${i}`,
            title: `Premium ${item.category || "Item"}`,
            price: meta.price,
            image: item.path, // String format for cart compatibility
          };

          const productMeta = {
            rating: meta.rating,
            reviews: meta.reviews
          };

          return (
            <ProductCard 
              key={i} 
              product={productData} 
              meta={productMeta} 
            />
          );
        })}
      </div>
    </section>
  );
}