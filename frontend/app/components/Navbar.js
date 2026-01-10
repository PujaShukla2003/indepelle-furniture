"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

/* ================= MENU DATA ================= */

const menu = [
  {
    title: "Interiors",
    slug: "/interiors",
    items: [
      { name: "Bathroom", link: "/interiors/bathroom" },
      { name: "Bedroom", link: "/interiors/bedroom" },
      { name: "Kitchen", link: "/interiors/kitchen" },
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

/* ================= COMPONENT ================= */

export default function Navbar() {
  const [openDesktop, setOpenDesktop] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobile, setOpenMobile] = useState(null);

  return (
    <>
      {/* ===== LOGO BAR ===== */}
      <div className="bg-black flex justify-center py-4">
        <Link href="/">
          <Image
            src="/logo.webp"
            alt="Indepelle"
            width={240}
            height={70}
            priority
          />
        </Link>
      </div>

      {/* ===== NAVBAR ===== */}
      <nav className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 h-[64px] flex items-center">

          {/* CENTER MENU */}
          <ul className="hidden lg:flex mx-auto items-center gap-8 text-[15px] font-semibold">
            <NavLink name="Home" link="/" />

            {menu.map((m) => (
              <li
                key={m.title}
                className="relative"
                onMouseEnter={() => setOpenDesktop(m.title)}
                onMouseLeave={() => setOpenDesktop(null)}
              >
                <Link href={m.slug} className="flex items-center gap-1 py-2">
                  {m.title}
                  <span className="text-xs">▾</span>
                </Link>

                {/* DROPDOWN */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 w-64
                  rounded-xl border bg-white shadow-xl transition-all
                  ${
                    openDesktop === m.title
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible translate-y-2 pointer-events-none"
                  }`}
                >
                  <Link
                    href={m.slug}
                    className="block px-5 py-3 font-semibold hover:bg-gray-50"
                  >
                    View All
                  </Link>

                  {m.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.link}
                      className="block px-5 py-2 text-sm hover:bg-gray-50"
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

          {/* RIGHT AUTH */}
          <div className="hidden lg:flex gap-6 ml-auto text-sm font-semibold items-center">
            <Link href="/login">Login</Link>
            <Link
              href="/signup"
              className="px-6 py-2 rounded-full border border-black
                         hover:bg-black hover:text-white
                         transition-all duration-200"
            >
              Sign Up
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden ml-auto text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            ☰
          </button>
        </div>

        {/* ===== MOBILE MENU ===== */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t px-6 py-6 space-y-4 font-semibold">

            <MobileLink name="Home" link="/" />
            <MobileLink name="About" link="/about" />

            {menu.map((m) => (
              <div key={m.title}>
                <button
                  className="w-full flex justify-between py-2"
                  onClick={() =>
                    setOpenMobile(openMobile === m.title ? null : m.title)
                  }
                >
                  {m.title}
                  <span>{openMobile === m.title ? "−" : "+"}</span>
                </button>

                {openMobile === m.title && (
                  <div className="pl-4 space-y-2 text-sm">
                    <Link href={m.slug}>View All</Link>
                    {m.items.map((item) => (
                      <Link key={item.name} href={item.link}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <MobileLink name="Contact" link="/contact" />

            <div className="pt-4 flex gap-4">
              <Link href="/login">Login</Link>
              <Link href="/signup" className="border px-4 py-2 rounded-full">
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

/* ===== HELPERS ===== */

function NavLink({ name, link }) {
  return (
    <li className="relative group">
      <Link href={link}>{name}</Link>
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all group-hover:w-full" />
    </li>
  );
}

function MobileLink({ name, link }) {
  return (
    <Link href={link} className="block py-2">
      {name}
    </Link>
  );
}
