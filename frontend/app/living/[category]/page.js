import fs from "fs";
import path from "path";
import Image from "next/image";

export default function LivingCategoryPage({ params }) {
  const { category } = params;

  // ✅ CORRECT FOLDER (decor)
  const folderPath = path.join(
    process.cwd(),
    "public/images/decor",
    category
  );

  if (!fs.existsSync(folderPath)) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-semibold">
          Category not found
        </h1>
      </div>
    );
  }

  const images = fs
    .readdirSync(folderPath)
    .filter((file) =>
      /\.(jpg|jpeg|png|webp|avif)$/i.test(file)
    );

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif capitalize mb-10">
        {category.replaceAll("-", " ")}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((img, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden border hover:shadow-xl transition"
          >
            <Image
              src={`/images/decor/${category}/${img}`}   // ✅ FIX
              alt={category}
              width={600}
              height={400}
              className="object-cover w-full h-72 hover:scale-105 transition"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
