import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";

export default function HomeOfficePage() {
  const dirPath = path.join(process.cwd(), "public/images/home-office");

  // ✅ Image fetch karne ka logic
  const images = fs.existsSync(dirPath)
    ? fs
        .readdirSync(dirPath)
        .filter((img) => /\.(jpg|jpeg|png|webp|avif)$/i.test(img))
    : [];

  const coverImage = images[0]; 

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h1 className="text-4xl font-serif">Home Office</h1>
          <p className="text-gray-500 mt-2">Professional setups for your personal space.</p>
        </div>
      </div>

      {/* MAIN CATEGORY CARD */}
      <Link
        href="/home-office/all"
        className="group block relative rounded-3xl overflow-hidden border bg-white hover:shadow-2xl transition-all duration-500"
      >
        <div className="relative h-[450px] w-full overflow-hidden bg-gray-100">
          {coverImage ? (
            <Image
              src={`/images/home-office/${coverImage}`}
              alt="Home Office Collection"
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              priority
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400 italic">
              No cover image found in /public/images/home-office/
            </div>
          )}
          
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="p-8 flex justify-between items-center bg-white border-t">
          <div>
            <h2 className="text-2xl font-semibold group-hover:text-amber-700 transition-colors">
              Explore Complete Collection
            </h2>
            <p className="text-gray-500">Desks, ergonomic chairs, and organizers</p>
          </div>
          
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black text-white group-hover:bg-amber-700 transition-all duration-300">
            <span className="text-xl">→</span>
          </div>
        </div>
      </Link>

      {/* AGAR AAPKO MULTIPLE CATEGORIES DIKHANI HON (Optional Note) */}
      {!coverImage && (
        <div className="mt-10 p-10 border-2 border-dashed border-gray-200 rounded-2xl text-center">
          <p className="text-gray-400">Add images to /public/images/home-office/ to see the cover card.</p>
        </div>
      )}
    </section>
  );
}