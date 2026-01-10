import Link from "next/link";

export const metadata = {
  title: "Contact & Support | Indepelle Furniture & Interiors",
  description:
    "Contact Indepelle for furniture enquiries, interior consultations or customer complaints. Premium furniture & interior support across India.",
};

export default function ContactPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">

      {/* ===== HERO ===== */}
      <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
        Contact & Support
      </h1>

      <p className="text-gray-700 text-lg mb-12 max-w-2xl">
        Have a question, need assistance, or want to raise a complaint?
        <strong> Indepelle</strong> is here to support you with prompt and
        professional service.
      </p>

      <div className="grid md:grid-cols-2 gap-12 mb-16">

        {/* ===== CONTACT INFO ===== */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Get in Touch
          </h3>

          <p className="text-gray-600 mb-6">
            For furniture enquiries, interior design consultations,
            after-sales support or complaints, reach out to us anytime.
          </p>

          <ul className="space-y-3 text-gray-700 mb-6">
            <li>📍 New Delhi, India</li>
            <li>📞 +91 9717004488</li>
            <li>✉️ support@indepelle.com</li>
            <li className="text-red-600">
              ⚠️ complaints@indepelle.com
            </li>
          </ul>

          <p className="text-sm text-gray-500 mb-6">
            Complaints are reviewed within <strong>24–48 working hours</strong>.
          </p>

          {/* QUICK CTA */}
          <div className="flex gap-4 flex-wrap">
            <a
              href="tel:+919717004488"
              className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919717004488"
              target="_blank"
              className="border border-black px-5 py-2 rounded-full hover:bg-black hover:text-white transition"
            >
              WhatsApp Support
            </a>

            <Link
              href="/about"
              className="px-5 py-2 border rounded-full hover:bg-gray-100 transition"
            >
              About Indepelle
            </Link>
          </div>
        </div>

        {/* ===== FORM ===== */}
        <form className="border rounded-2xl p-6 space-y-4">
          <input
            placeholder="Your Name"
            className="w-full border px-4 py-3 rounded"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border px-4 py-3 rounded"
            required
          />

          {/* TYPE SELECT */}
          <select className="w-full border px-4 py-3 rounded">
            <option>General Enquiry</option>
            <option>Complaint / After Sales Support</option>
            <option>Custom Furniture</option>
            <option>Interior Design Consultation</option>
          </select>

          <textarea
            placeholder="Please describe your enquiry or complaint in detail"
            rows={4}
            className="w-full border px-4 py-3 rounded"
          />

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Submit Request
          </button>
        </form>
      </div>

      {/* ===== SUPPORT PROMISE ===== */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {[
          "Dedicated customer support team",
          "Fast complaint resolution",
          "Transparent communication",
        ].map((text, i) => (
          <div
            key={i}
            className="p-6 border rounded-2xl text-gray-700"
          >
            {text}
          </div>
        ))}
      </div>

      {/* ===== GOOGLE MAP ===== */}
      <div className="rounded-2xl overflow-hidden border mb-16">
        <iframe
          title="Indepelle Location"
          src="https://www.google.com/maps?q=New%20Delhi&output=embed"
          className="w-full h-80"
          loading="lazy"
        />
      </div>

      {/* ===== SEO CONTENT ===== */}
      <p className="text-gray-700 leading-relaxed text-lg">
        Indepelle is committed to premium furniture, interior design excellence
        and reliable customer support. From enquiries to after-sales service,
        our team ensures a smooth and trustworthy experience for every client.
      </p>
    </section>
  );
}
