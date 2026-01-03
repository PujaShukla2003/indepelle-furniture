export default function AboutPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">About Indepelle</h1>

      <p className="text-gray-700 leading-relaxed mb-6">
        Indepelle Furniture is dedicated to bringing premium-quality furniture
        that blends comfort, durability, and modern design. Our collections are
        carefully crafted to elevate your living spaces.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        From luxurious sofas to elegant bedroom and dining furniture, we focus
        on quality materials, expert craftsmanship, and timeless style.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Premium Quality</h3>
          <p className="text-gray-600">
            High-grade materials and expert finishing.
          </p>
        </div>

        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Modern Design</h3>
          <p className="text-gray-600">
            Furniture that fits today’s lifestyle.
          </p>
        </div>

        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Trusted Brand</h3>
          <p className="text-gray-600">
            Loved by customers across India.
          </p>
        </div>
      </div>
    </section>
  );
}
