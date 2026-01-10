import fs from "fs";
import path from "path";

export default function FurnitureCategoryPage({ params }) {
  const { category } = params;

  const folderPath = path.join(
    process.cwd(),
    "public/images/furniture",
    category
  );

  if (!fs.existsSync(folderPath)) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-semibold">
          Furniture category not found
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
        {category.replace(/-/g, " ")}
      </h1>

      {images.length === 0 ? (
        <p className="text-gray-500">No images found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden border hover:shadow-xl transition"
            >
              <img
                src={`/images/furniture/${category}/${img}`}
                alt={category}
                className="w-full h-64 object-cover hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
