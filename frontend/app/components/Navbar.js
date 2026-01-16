"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "../context/CartContext";

/* ================= MENU DATA ================= */
const menu = [
  {
    title: "Interiors",
    slug: "/interiors",
    items: [
      { name: "Bedroom", link: "/interiors/bedroom" },
      { name: "Living", link: "/interiors/living" },
      { name: "Office", link: "/interiors/office" },
    ],
  },
  {
    title: "Furniture",
    slug: "/furniture",
    items: [
      { name: "Sofas", link: "/furniture/sofas" },
      { name: "Chairs", link: "/furniture/chairs" },
      { name: "Beds", link: "/furniture/beds" },
      { name: "Dining Set", link: "/furniture/dining-set" },
      { name: "Bar Stools", link: "/furniture/bar-stools" },
      { name: "Couches", link: "/furniture/couches" },
      { name: "Home Theatre Seating", link: "/furniture/home-theatre-seating" },
      { name: "Sofa Chairs", link: "/furniture/sofa-chairs" },
      { name: "Storage", link: "/furniture/storage" },
    ],
  },
  {
    title: "Living",
    slug: "/living",
    items: [
      { name: "Carpets", link: "/living/carpets" },
      { name: "Rugs", link: "/living/rugs" },
    ],
  },
  {
    title: "Home Office",
    slug: "/home-office",
    items: [{ name: "Office Furniture", link: "/interiors/office" }],
  },
];

export default function Navbar() {
  const [openDesktop, setOpenDesktop] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobile, setOpenMobile] = useState(null);

  /* CART DATA */
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + (item.qty || 0), 0);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenMobile(null);
  };

  return (
    <>
      {/* LOGO BAR */}
      <div className="bg-black flex justify-center py-4">
        <Link href="/" onClick={closeMobileMenu}>
          <Image src="/logo.webp" alt="Indepelle" width={240} height={70} priority />
        </Link>
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 h-[64px] flex items-center justify-between">

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-8 text-[15px] font-semibold flex-1 justify-center">
            <NavLink name="Home" link="/" />

            {menu.map((m) => (
              <li
                key={m.title}
                className="relative"
                onMouseEnter={() => setOpenDesktop(m.title)}
                onMouseLeave={() => setOpenDesktop(null)}
              >
                <Link
                  href={m.slug}
                  className="flex items-center gap-1 py-2 uppercase tracking-wide"
                >
                  {m.title} <span className="text-[10px]">▼</span>
                </Link>

                {/* DROPDOWN */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full w-64 rounded-b-xl border bg-white shadow-xl transition-all duration-300
                  ${
                    openDesktop === m.title
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible translate-y-2 pointer-events-none"
                  }`}
                >
                  <Link
                    href={m.slug}
                    className="block px-5 py-3 font-bold border-b hover:bg-gray-50 text-sm"
                  >
                    View All {m.title}
                  </Link>

                  {m.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.link}
                      className="block px-5 py-2.5 text-sm hover:bg-gray-50 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </li>
            ))}

            <NavLink name="About" link="/about" />
            <NavLink name="Contact" link="/contact" />
          </ul>

          {/* RIGHT SIDE */}
          <div className="flex gap-6 text-sm font-semibold items-center">
            <div className="hidden lg:flex items-center gap-5">
              <Link href="/login">Login</Link>
              <Link
                href="/signup"
                className="px-5 py-2 rounded-full border border-black hover:bg-black hover:text-white transition-all"
              >
                Sign Up
              </Link>
            </div>

            {/* CART ICON */}
            <Link href="/cart" className="relative p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>

              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* MOBILE BUTTON */}
            <button
              className="lg:hidden text-2xl"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t px-6 py-6 space-y-4 font-semibold shadow-2xl absolute w-full left-0">
            <MobileLink name="Home" link="/" onClick={closeMobileMenu} />
            <MobileLink name="About" link="/about" onClick={closeMobileMenu} />

            {menu.map((m) => (
              <div key={m.title} className="border-b pb-2">
                <button
                  className="w-full flex justify-between py-2 text-lg"
                  onClick={() =>
                    setOpenMobile(openMobile === m.title ? null : m.title)
                  }
                >
                  {m.title}
                  <span>{openMobile === m.title ? "−" : "+"}</span>
                </button>

                {openMobile === m.title && (
                  <div className="pl-4 py-2 space-y-3">
                    <Link
                      href={m.slug}
                      onClick={closeMobileMenu}
                      className="block font-bold underline"
                    >
                      View All
                    </Link>

                    {m.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.link}
                        onClick={closeMobileMenu}
                        className="block"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 flex flex-col gap-4">
              <Link href="/login" onClick={closeMobileMenu}>
                Login
              </Link>
              <Link
                href="/signup"
                onClick={closeMobileMenu}
                className="bg-black text-white py-3 rounded-xl text-center"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

/* ================= HELPERS ================= */

function NavLink({ name, link }) {
  return (
    <li className="relative group">
      <Link href={link} className="py-2 inline-block uppercase tracking-wider">
        {name}
      </Link>
      <span className="absolute left-0 bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
    </li>
  );
}

function MobileLink({ name, link, onClick }) {
  return (
    <Link href={link} onClick={onClick} className="block py-3 border-b text-lg">
      {name}
    </Link>
  );
}
