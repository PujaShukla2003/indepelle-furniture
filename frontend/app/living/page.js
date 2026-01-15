import Link from "next/link";
import Image from "next/image";

const categories = [
  { 
    name: "Carpets", 
    slug: "carpets", 
    image: "/images/decor/carpets/photo-1570569441276-ff551cba7331.avif",
    desc: "Elegant full-room coverage designs"
  },
  { 
    name: "Rugs", 
    slug: "rugs", 
    image: "/images/decor/premium_photo-1739350940126-a3fcee922e32.avif",
    desc: "Modern accent pieces for your floor"
  },
];

export default function LivingDecorPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 min-h-screen">
      <div className="mb-12">
        <h1 className="text-4xl font-serif">Living Decor</h1>
        <p className="text-gray-500 mt-2">Choose a category to explore our premium collection.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            // ✅ Link updated to match your folder structure (/decor/carpets etc.)
            href={`/decor/${cat.slug}`}
            className="group rounded-3xl overflow-hidden border bg-white hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative h-80 overflow-hidden">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
            </div>
            
            <div className="p-8 flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-serif">{cat.name}</h2>
                <p className="text-gray-500 mt-1">{cat.desc}</p>
              </div>
              <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                <span className="text-xl">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}