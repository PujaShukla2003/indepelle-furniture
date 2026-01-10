import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us | Indepelle Furniture & Interior Design Brand",
  description:
    "Indepelle is a premium furniture & interior design brand offering luxury sofas, beds, dining sets, home office furniture and modern interior solutions across India.",
};

export default function AboutPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      {/* ================= HERO ================= */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
            Crafting Premium Furniture & Interiors
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            <strong>Indepelle</strong> is a premium furniture and interior design
            brand focused on creating elegant, functional, and timeless spaces.
            Our collections are designed to elevate modern homes and workspaces.
          </p>

          {/* CTA */}
          <div className="flex gap-4">
            <Link
              href="/furniture"
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
            >
              Explore Furniture
            </Link>

            <Link
              href="/interiors"
              className="border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition"
            >
              Explore Interiors
            </Link>
          </div>
        </div>

        {/* HERO IMAGE (FROM YOUR FOLDER) */}
        <Image
          src="/images/furnitures/home-theatre-seating/photo-1653972233499-eaad56990299.avif"
          alt="Premium Sofa Furniture by Indepelle"
          width={600}
          height={500}
          className="rounded-3xl object-cover"
        />
      </div>

      {/* ================= WHAT WE DO ================= */}
      <h2 className="text-3xl font-serif font-semibold mb-10">
        What We Offer
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mb-20">

        {/* Furniture */}
        <div className="border rounded-2xl overflow-hidden hover:shadow-xl transition">
          <Image
            src="/images/interiors/bedroom/photo-1680503146476-abb8c752e1f4.avif"
            alt="Luxury Furniture Collection"
            width={400}
            height={300}
            className="h-56 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">
              Furniture Collections
            </h3>
            <p className="text-gray-600">
              Premium sofas, beds, dining sets, bar stools, storage units,
              home theatre seating and living furniture crafted with quality
              materials and modern design.
            </p>
          </div>
        </div>

        {/* Interiors */}
        <div className="border rounded-2xl overflow-hidden hover:shadow-xl transition">
          <Image
            src="/images/interiors/living/photo-1653972233499-eaad56990299.avif"
            alt="Modern Interior Design"
            width={400}
            height={300}
            className="h-56 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">
              Interior Design
            </h3>
            <p className="text-gray-600">
              Complete interior inspirations for living rooms, bedrooms,
              kitchens, bathrooms and office spaces that balance luxury
              and functionality.
            </p>
          </div>
        </div>

        {/* Home Office */}
        <div className="border rounded-2xl overflow-hidden hover:shadow-xl transition">
          <Image
            src="/images/home-office/premium_photo-1661919547532-d02db090744c.avif"
            alt="Home Office Furniture"
            width={400}
            height={300}
            className="h-56 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">
              Home Office Solutions
            </h3>
            <p className="text-gray-600">
              Ergonomic and stylish home office furniture designed to enhance
              productivity, comfort, and aesthetics.
            </p>
          </div>
        </div>
      </div>

      {/* ================= WHY CHOOSE US ================= */}
      <h2 className="text-3xl font-serif font-semibold mb-8">
        Why Choose Indepelle
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="p-6 border rounded-2xl">
          <h3 className="font-semibold text-lg mb-2">
            Premium Quality
          </h3>
          <p className="text-gray-600">
            High-grade materials, strong construction, and expert finishing
            ensure long-lasting durability.
          </p>
        </div>

        <div className="p-6 border rounded-2xl">
          <h3 className="font-semibold text-lg mb-2">
            Modern & Timeless Design
          </h3>
          <p className="text-gray-600">
            Designs that follow modern trends while staying timeless
            and versatile for years.
          </p>
        </div>

        <div className="p-6 border rounded-2xl">
          <h3 className="font-semibold text-lg mb-2">
            Trusted Brand
          </h3>
          <p className="text-gray-600">
            A growing furniture and interior brand trusted by customers
            across India.
          </p>
        </div>
      </div>

      {/* ================= SEO TEXT ================= */}
      <p className="text-gray-700 text-lg leading-relaxed">
        Indepelle delivers premium furniture and interior design solutions
        across India. From luxury sofas and beds to complete interiors
        and home office setups, we help you create spaces that are
        comfortable, elegant, and meaningful.
      </p>
    </section>
  );
}
