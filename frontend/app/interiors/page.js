import Link from "next/link";
import Image from "next/image";

// 🔹 Categories with description for better UI
const categories = [
  { 
    title: "Bedroom", 
    slug: "bedroom", 
    desc: "Luxury and cozy personal spaces",
    cover: "/images/interiors/bedroom/photo-1587985064135-0366536eab42.avif" 
  },
  { 
    title: "Living", 
    slug: "living", 
    desc: "Modern designs for your family area",
    cover: "/images/interiors/living/photo-1664711942326-2c3351e215e6.avif" 
  },
  { 
    title: "Office", 
    slug: "office", 
    desc: "Professional and corporate workspace",
    cover: "/images/interiors/office/premium_photo-1661919547532-d02db090744c.avif" 
  },
];

export default function InteriorsPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 min-h-screen">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-serif">Interior Collections</h1>
        <p className="text-gray-500 mt-2">Discover curated designs for every corner of your home.</p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {categories.map((item) => (
          <Link
            key={item.slug}
            href={`/interiors/${item.slug}`}
            className="group block bg-white border rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500"
          >
            {/* Image Container */}
            <div className="h-80 relative overflow-hidden bg-gray-100">
              <Image
                src={item.cover}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            </div>

            {/* Content Section */}
            <div className="p-8 flex justify-between items-end">
              <div>
                <h2 className="text-2xl font-semibold mb-1">{item.title}</h2>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
              <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                <span className="text-lg">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}