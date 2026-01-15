import Link from "next/link";

const collections = [
  {
    title: "Living Room",
    image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a",
    slug: "sofas", // Maine ise 'sofas' kar diya hai kyunki aapka furniture category wahi hai
  },
  {
    title: "Bedroom",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
    slug: "beds", 
  },
  {
    title: "Dining",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    slug: "dining-set",
  },
  {
    title: "Storage",
    image: "https://i5.walmartimages.com/asr/72f22363-db49-4be7-be2f-31114d29d3be.1e442c45d0eebde3b5a7a7f8d2c19807.jpeg",
    slug: "storage",
  },
];

export default function CollectionGrid() {
  return (
    <section id="collections" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-serif font-semibold mb-12">
          Shop by Collection
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {collections.map((item) => (
            <Link
              key={item.slug}
              href={`/furniture/${item.slug}`}
              className="group block relative overflow-hidden rounded-2xl"
            >
              <div className="overflow-hidden h-[420px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
              
              {/* Image ke upar halka sa black shade (Overlay) */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />

              {/* Text Center mein ya Bottom left mein */}
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-serif font-medium mb-2">
                  {item.title}
                </h3>
                <span className="text-sm font-semibold uppercase border-b-2 border-white pb-1 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Explore Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}