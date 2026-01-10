import Link from "next/link";
import Image from "next/image";

const categories = [
  { name: "Carpets", slug: "carpets", image: "/images/decor/carpets/photo-1570569441276-ff551cba7331.avif" },
  { name: "Rugs", slug: "rugs", image: "/images/decor/premium_photo-1739350940126-a3fcee922e32.avif" },
];

export default function LivingPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif mb-12">
        Living Decor
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/living/${cat.slug}`}
            className="group rounded-2xl overflow-hidden border hover:shadow-xl transition"
          >
            <Image
              src={cat.image}
              alt={cat.name}
              width={800}
              height={500}
              className="w-full h-72 object-cover group-hover:scale-105 transition"
            />
            <div className="p-6 text-center text-2xl font-medium">
              {cat.name}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
