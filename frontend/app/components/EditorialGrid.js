import Link from "next/link";

export default function EditorialGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* LEFT IMAGE - LIVING */}
        <Link href="/furniture/sofas" className="group relative block overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1615874959474-d609969a20ed"
            alt="Living Furniture"
            className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Dark Gradient Overlay for Better Text Visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-8">
            <div className="text-white">
              <h3 className="text-3xl font-serif font-semibold">Living Spaces</h3>
              <p className="mt-2 text-gray-200">Explore contemporary living furniture</p>
              <span className="inline-block mt-4 text-sm font-bold uppercase tracking-widest border-b border-white pb-1 group-hover:pr-4 transition-all">
                Shop Collection →
              </span>
            </div>
          </div>
        </Link>

        {/* RIGHT IMAGE - BEDROOM */}
        <Link href="/furniture/beds" className="group relative block overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1505693314120-0d443867891c"
            alt="Bedroom Furniture"
            className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-8">
            <div className="text-white">
              <h3 className="text-3xl font-serif font-semibold">Bedroom Collection</h3>
              <p className="mt-2 text-gray-200">Warm, calm & timeless designs</p>
              <span className="inline-block mt-4 text-sm font-bold uppercase tracking-widest border-b border-white pb-1 group-hover:pr-4 transition-all">
                Shop Collection →
              </span>
            </div>
          </div>
        </Link>

      </div>
    </section>
  );
}