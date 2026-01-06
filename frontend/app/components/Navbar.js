"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const menu = [
  {
    title: "Furniture",
    slug: "/furniture",
    items: ["sofas", "chairs", "tables", "beds", "dining"],
  },
  {
    title: "Living",
    slug: "/living",
    items: ["organisers", "trays", "clocks", "storage"],
  },
  {
    title: "Home Office",
    slug: "/home-office",
    items: [
      "desk-caddies",
      "tissue-boxes",
      "pen-holders",
      "mouse-pads",
      "waste-bins",
    ],
  },
  {
    title: "Travel",
    slug: "/travel",
    items: [
      "wallets",
      "laptop-bags",
      "tote-bags",
      "duffle-bags",
      "travel-kits",
    ],
  },
  {
    title: "Bar",
    slug: "/bar",
    items: ["bar-trolley", "bar-cabinets", "bar-stools", "bar-counter"],
  },
  {
    title: "Gifting",
    slug: "/gifting",
    items: ["gift-sets", "corporate-gifts", "festive-gifts"],
  },
];

export default function Navbar() {
  const [openDesktop, setOpenDesktop] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobile, setOpenMobile] = useState(null);

  // ✅ MOBILE MENU CLOSE HELPER (ADDED, NOTHING REMOVED)
  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenMobile(null);
  };

  return (
    <>
      {/* ================= LOGO BAR ================= */}
      <div className="w-full bg-black">
        <Link href="/" className="block w-full">
          <Image
            src="/logo.webp"
            alt="Indepelle Logo"
            width={1920}
            height={120}
            priority
            className="w-full h-[120px] object-contain"
          />
        </Link>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-[64px] flex items-center justify-between">

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex gap-8 text-[15px] font-bold text-black h-full items-center">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/interiors">Interiors</Link></li>

            {menu.map((m) => (
              <li
                key={m.title}
                className="relative h-full flex items-center"
                onMouseEnter={() => setOpenDesktop(m.title)}
                onMouseLeave={() => setOpenDesktop(null)}
              >
                <Link href={m.slug}>{m.title}</Link>

                {/* DROPDOWN */}
                <div
                  className={`absolute top-full left-0 mt-3 w-56 bg-white border shadow-xl rounded transition-all
                  ${
                    openDesktop === m.title
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible translate-y-2"
                  }`}
                >
                  <div className="py-3">
                    <Link
                      href={m.slug}
                      className="block px-5 py-2 font-semibold hover:bg-gray-100"
                    >
                      View All
                    </Link>

                    {m.items.map((item) => (
                      <Link
                        key={item}
                        href={`${m.slug}/${item}`}
                        className="block px-5 py-2 text-sm capitalize hover:bg-gray-100"
                      >
                        {item.replace(/-/g, " ")}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            ))}

            <li><Link href="/collaborations">Collaborations</Link></li>
          </ul>

          {/* AUTH */}
          <div className="hidden lg:flex gap-6 items-center text-sm font-bold">
            <Link href="/login">Login</Link>
            <Link
              href="/signup"
              className="border border-black px-5 py-2 rounded hover:bg-black hover:text-white transition"
            >
              Sign Up
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t px-4 py-4 font-bold">
            <Link href="/" className="block py-2">Home</Link>
            <Link href="/interiors" className="block py-2">Interiors</Link>

            {menu.map((m) => (
              <div key={m.title}>
                <button
                  className="w-full text-left py-2 flex justify-between"
                  onClick={() =>
                    setOpenMobile(openMobile === m.title ? null : m.title)
                  }
                >
                  {m.title}
                  <span>{openMobile === m.title ? "−" : "+"}</span>
                </button>

                {openMobile === m.title && (
                  <div className="pl-4 pb-2 text-sm font-normal">
                    <Link href={m.slug} className="block py-1 font-semibold">
                      View All
                    </Link>
                    {m.items.map((item) => (
                      <Link
                        key={item}
                        href={`${m.slug}/${item}`}
                        className="block py-1 capitalize"
                      >
                        {item.replace(/-/g, " ")}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link href="/collaborations" className="block py-2">
              Collaborations
            </Link>

            <div className="mt-4 flex gap-4">
              <Link href="/login">Login</Link>
              <Link
                href="/signup"
                className="border border-black px-4 py-2 rounded"
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
