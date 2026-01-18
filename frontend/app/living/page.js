import fs from "fs";
import path from "path";
import ProductCard from "@/app/components/ProductCard";


export default function RugsPage() {
  const folderPath = path.join(process.cwd(), "public/images/decor/rugs");
  
  let images = [];
  if (fs.existsSync(folderPath)) {
    images = fs.readdirSync(folderPath).filter((img) => /\.(jpg|jpeg|png|webp|avif)$/i.test(img));
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif mb-12">Living Room Rugs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {images.length === 0 ? (
          <p className="text-gray-500">No images found in /public/images/decor/rugs</p>
        ) : (
          images.map((img, i) => (
            <ProductCard 
              key={i} 
              product={{
                id: `rug-${i}`,
                title: "Premium Luxury Rug",
                price: 7999 + (i * 1000),
                image: `/images/decor/rugs/${img}`,
              }} 
              meta={{ rating: 4.5, reviews: 25 + i }} 
            />
          ))
        )}
      </div>
    </section>
  );
}