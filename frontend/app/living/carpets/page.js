import fs from "fs";
import path from "path";
import ProductCard from "../../components/ProductCard";

export default function CarpetsPage() {
  const folderPath = path.join(process.cwd(), "public/images/decor/carpets");
  
  let images = [];
  if (fs.existsSync(folderPath)) {
    images = fs.readdirSync(folderPath).filter((img) => /\.(jpg|jpeg|png|webp|avif)$/i.test(img));
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif mb-12">Living Room Carpets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {images.map((img, i) => (
          <ProductCard 
            key={i} 
            product={{
              id: `carpet-${i}`,
              title: "Premium Handwoven Carpet",
              price: 8999 + (i * 1000),
              image: `/images/decor/carpets/${img}`,
            }} 
            meta={{ rating: 4.7, reviews: 30 + i }} 
          />
        ))}
      </div>
    </section>
  );
}