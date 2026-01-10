import Link from "next/link";
import Image from "next/image";

const categories = [
  { title: "Bathroom", slug: "bathroom", cover: "/images/interiors/bathroom/premium_photo-1681487218607-b972081533e0.avif" },
  { title: "Bedroom", slug: "bedroom", cover: "/images/interiors/bedroom/photo-1587985064135-0366536eab42.avif" },
  { title: "Kitchen", slug: "kitchen", cover: "/images/interiors/kitchen/kitchen-1.webp" },
  { title: "Living", slug: "living", cover: "/images/interiors/living/photo-1664711942326-2c3351e215e6.avif" },
  { title: "Office", slug: "office", cover: "/images/interiors/office/premium_photo-1661919547532-d02db090744c.avif" },
];

export default function InteriorsPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif mb-12">Our Interior Designs</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {categories.map((item) => (
          <Link
            key={item.slug}
            href={`/interiors/${item.slug}`}
            className="group border rounded-2xl overflow-hidden"
          >
            <div className="h-72 relative">
              <Image
                src={item.cover}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition"
              />
            </div>

            <div className="p-4">
              <h2 className="text-xl font-semibold">{item.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
