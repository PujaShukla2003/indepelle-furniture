import Link from "next/link";

export default function EditorialGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* LEFT IMAGE */}
        <Link href="/furniture/living" className="group relative block">
          <img
            src="https://images.unsplash.com/photo-1615874959474-d609969a20ed"
            alt="Living Furniture"
            className="w-full h-[420px] object-cover rounded-xl"
          />

          <div className="absolute inset-0 bg-black/20 rounded-xl flex items-end p-6">
            <div className="text-white">
              <h3 className="text-2xl font-semibold">Living Spaces</h3>
              <p className="mt-1 text-sm">Explore contemporary living furniture</p>
            </div>
          </div>
        </Link>

        {/* RIGHT IMAGE */}
        <Link href="/furniture/bedroom" className="group relative block">
          <img
            src="https://images.unsplash.com/photo-1505693314120-0d443867891c"
            alt="Bedroom Furniture"
            className="w-full h-[420px] object-cover rounded-xl"
          />

          <div className="absolute inset-0 bg-black/20 rounded-xl flex items-end p-6">
            <div className="text-white">
              <h3 className="text-2xl font-semibold">Bedroom Collection</h3>
              <p className="mt-1 text-sm">Warm, calm & timeless designs</p>
            </div>
          </div>
        </Link>

      </div>
    </section>
  );
}
