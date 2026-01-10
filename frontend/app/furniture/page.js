import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Sofas", slug: "sofas", image: "/images/furnitures/sofas/premium_photo-1683141435678-2a8de9e6790a.avif" },
  { name: "Chairs", slug: "chairs", image: "/images/furnitures/chairs/premium_photo-1705169538590-d1a4cecf7bd8.avif" },
  { name: "Beds", slug: "beds", image: "/images/furnitures/beds/photo-1680503146476-abb8c752e1f4.avif" },
  { name: "Dining Set", slug: "dining-set", image: "/images/furnitures/dining-set/photo-1740009209655-60e30235baae.avif" },
  { name: "Bar Stools", slug: "bar-stools", image: "/images/furnitures/bar-stools/photo-1720694924759-2a2daaa98987.avif" },
  { name: "Couches", slug: "couches", image: "/images/furnitures/couches/premium_photo-1661847617667-d98f3c976773.avif" },
  { name: "Home Theatre Seating", slug: "home-theatre-seating", image: "/images/furnitures/home-theatre-seating/premium_photo-1661962302410-36d3325cf9ce.avif" },
  { name: "Sofa Chairs", slug: "sofa-chairs", image: "/images/furnitures/sofa-chairs/premium_photo-1683141512435-4e4e8fba4c34.avif" },
  { name: "Storage", slug: "storage", image: "/images/furnitures/storage/photo-1677413613795-abf33246150f.avif" },
];

export default function FurniturePage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif mb-12">All Furniture</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/furniture/${cat.slug}`}
            className="rounded-2xl overflow-hidden border hover:shadow-xl transition"
          >
            <Image
              src={cat.image}
              alt={cat.name}
              width={600}
              height={400}
              className="object-cover w-full h-72"
            />
            <div className="p-4 font-semibold text-lg">{cat.name}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
