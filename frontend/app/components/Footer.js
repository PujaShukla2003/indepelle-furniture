import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-20 border-t">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Indepelle</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Premium furniture crafted for modern living.  
            Discover comfort, style, and durability — all in one place.
          </p>
        </div>

        {/* SHOP */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link href="/furniture/sofas">Sofas</Link></li>
            <li><Link href="/furniture/living">Living</Link></li>
            <li><Link href="/furniture/bedroom">Bedroom</Link></li>
            <li><Link href="/furniture/dining">Dining</Link></li>
            <li><Link href="/furniture/storage">Storage</Link></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>📍 Delhi, India</li>
            <li>📞 +91 98765 43210</li>
            <li>✉ support@indepelle.com</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Indepelle Furniture. All rights reserved.
      </div>
    </footer>
  );
}
