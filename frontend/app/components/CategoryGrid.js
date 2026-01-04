import Link from "next/link";

const collections = [
  {
    title: "Living Room",
    image:
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a",
    slug: "living",
  },
  {
    title: "Bedroom",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
    slug: "bedroom",
  },
  {
    title: "Dining",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    slug: "dining",
  },
  {
    title: "Storage",
    image:
      "https://i5.walmartimages.com/asr/72f22363-db49-4be7-be2f-31114d29d3be.1e442c45d0eebde3b5a7a7f8d2c19807.jpeg",
    slug: "storage",
  },
];

export default function CollectionGrid() {
  return (
    <section
      id="collections"
      className="bg-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-serif font-semibold mb-12">
          Furniture Collection
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {collections.map((item) => (
            <Link
              key={item.slug}
              href={`/furniture/${item.slug}`}
              className="group"
            >
              <div className="overflow-hidden rounded-xl h-[420px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <h3 className="mt-5 text-xl font-medium">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
