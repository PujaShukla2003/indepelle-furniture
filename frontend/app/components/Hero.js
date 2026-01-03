export default function Hero() {
  return (
    <section className="bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Premium Furniture <br /> For Modern Homes
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Sofas, Beds, Dining Tables & more at best prices.
          </p>
          <button className="mt-6 px-8 py-3 bg-black text-white rounded hover:bg-gray-800">
            Shop Now
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1615874959474-d609969a20ed"
            alt="Furniture"
            className="rounded-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
