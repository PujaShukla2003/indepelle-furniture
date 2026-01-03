import Link from "next/link";

const categories = [
  {
    title: "Sofas",
    slug: "sofas",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7", // sofa showroom
  },
  {
    title: "Bedroom",
    slug: "bedroom",
    image:
      "https://images.unsplash.com/photo-1505693314120-0d443867891c", // bedroom bed
  },
  {
    title: "Dining",
    slug: "dining",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", // dining table
  },
  {
    title: "Storage",
    slug: "storage",
    image:
      "https://www.zeysey.com/storage/image/blog/01KA16ZZN8K2CPTACP0SR5DV95.jpg", // cabinets / storage
  },
];

export default function CategoryGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8">
        Shop by Category
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/furniture/${cat.slug}`}
            className="group block"
          >
            <div className="overflow-hidden rounded-lg bg-gray-100">
              <img
                src={cat.image}
                alt={cat.title}
                className="h-56 w-full object-cover group-hover:scale-105 transition"
                loading="lazy"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-center">
              {cat.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
