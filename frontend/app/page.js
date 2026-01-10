import Hero from "./components/Hero";
import CategoryGrid from "./components/CategoryGrid";
import EditorialGrid from "./components/EditorialGrid";
import InteriorGallery from "./components/InteriorGallery";

import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Indepelle Furniture | Buy Furniture Online",
  description:
    "Buy premium furniture like sofa, bed, dining table online at best price.",
};

/* ================= HELPER FUNCTION ================= */
function getImages(folder, limit = 3) {
  const dirPath = path.join(process.cwd(), "public", folder);

  if (!fs.existsSync(dirPath)) return [];

  return fs
    .readdirSync(dirPath)
    .filter((img) =>
      /\.(jpg|jpeg|png|webp|avif)$/i.test(img)
    )
    .slice(0, limit)
    .map((img) => `/${folder}/${img}`);
}

export default function Home() {
  /* ===== IMAGES AUTO LOAD FROM FOLDERS ===== */
  const interiors = getImages("images/interiors/bedroom");
  const furniture = getImages("images/furnitures/sofas");
  const living = getImages("images/decor/carpets");
  const homeOffice = getImages("images/home-office");

  return (
    <main className="space-y-24">

      {/* ================= HERO SECTION ================= */}
      <Hero />

      {/* ================= CATEGORY GRID ================= */}
      <CategoryGrid />

      {/* ================= INTERIOR GALLERY (OLD – KEEP) ================= */}
      <InteriorGallery
        title="Our Interior Designs"
        limit={6}
      />

      {/* ================= NEW : INTERIORS PREVIEW ================= */}
      <Section
        title="Interior Designs"
        link="/interiors"
        images={interiors}
      />

      {/* ================= NEW : FURNITURE PREVIEW ================= */}
      <Section
        title="Furniture"
        link="/furniture"
        images={furniture}
      />

      {/* ================= NEW : LIVING DECOR PREVIEW ================= */}
      <Section
        title="Living Decor"
        link="/living"
        images={living}
      />

      {/* ================= NEW : HOME OFFICE PREVIEW ================= */}
      <Section
        title="Home Office"
        link="/home-office"
        images={homeOffice}
      />

      {/* ================= EDITORIAL / BLOG ================= */}
      <EditorialGrid />

    </main>
  );
}

/* ================= REUSABLE SECTION COMPONENT ================= */
function Section({ title, link, images }) {
  if (images.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-serif">{title}</h2>
        <Link
          href={link}
          className="text-sm underline hover:text-gray-600"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((img, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden border hover:shadow-xl transition"
          >
            <Image
              src={img}
              alt={title}
              width={600}
              height={400}
              className="w-full h-72 object-cover hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
