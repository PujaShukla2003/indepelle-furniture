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
    <nav className="bg-black border-b border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
          <Image
            src="/logo.webp"
            alt="Indepelle Logo"
            width={160}
            height={40}
            priority
            className="object-contain"
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex gap-10 text-[15px] font-medium h-full items-center text-[#F5C76A]">
          <li>
            <Link href="/" className="hover:text-[#FFD978]">
              Home
            </Link>
          </li>

          <li>
            <Link href="/interiors" className="hover:text-[#FFD978]">
              Interiors
            </Link>
          </li>

          {menu.map((m) => (
            <li
              key={m.title}
              className="relative h-full flex items-center"
              onMouseEnter={() => setOpenDesktop(m.title)}
              onMouseLeave={() => setOpenDesktop(null)}
            >
              <Link href={m.slug} className="hover:text-[#FFD978]">
                {m.title}
              </Link>

              {/* DESKTOP DROPDOWN */}
              <div
                className={`absolute top-full left-0 mt-4 w-56 bg-black border border-[#333] shadow-xl rounded transition-all
                ${
                  openDesktop === m.title
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-2"
                }`}
              >
                <div className="py-3">
                  <Link
                    href={m.slug}
                    className="block px-5 py-2 font-semibold text-[#F5C76A] hover:bg-[#111]"
                  >
                    View All
                  </Link>

                  {m.items.map((item) => (
                    <Link
                      key={item}
                      href={`${m.slug}/${item}`}
                      className="block px-5 py-2 text-sm capitalize text-[#F5C76A] hover:bg-[#111]"
                    >
                      {item.replace(/-/g, " ")}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
          ))}

          <li>
            <Link href="/collaborations" className="hover:text-[#FFD978]">
              Collaborations
            </Link>
          </li>
        </ul>

        {/* DESKTOP AUTH */}
        <div className="hidden lg:flex gap-6 items-center text-sm text-[#F5C76A]">
          <Link href="/login" className="hover:text-[#FFD978]">
            Login
          </Link>
          <Link
            href="/signup"
            className="border border-[#F5C76A] px-5 py-2 rounded hover:bg-[#F5C76A] hover:text-black transition"
          >
            Sign Up
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="lg:hidden text-2xl text-[#F5C76A]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-black border-t border-[#333] px-4 py-4 text-[#F5C76A]">

          <Link href="/" className="block py-2" onClick={closeMobileMenu}>
            Home
          </Link>

          <Link href="/interiors" className="block py-2" onClick={closeMobileMenu}>
            Interiors
          </Link>

          {menu.map((m) => (
            <div key={m.title}>
              <button
                onClick={() =>
                  setOpenMobile(openMobile === m.title ? null : m.title)
                }
                className="w-full text-left py-2 flex justify-between"
              >
                {m.title}
                <span>{openMobile === m.title ? "−" : "+"}</span>
              </button>

              {openMobile === m.title && (
                <div className="pl-4 pb-2 text-sm">
                  <Link
                    href={m.slug}
                    className="block py-1 font-semibold"
                    onClick={closeMobileMenu}
                  >
                    View All
                  </Link>

                  {m.items.map((item) => (
                    <Link
                      key={item}
                      href={`${m.slug}/${item}`}
                      className="block py-1 capitalize text-[#cfae63]"
                      onClick={closeMobileMenu}
                    >
                      {item.replace(/-/g, " ")}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="/collaborations"
            className="block py-2"
            onClick={closeMobileMenu}
          >
            Collaborations
          </Link>

          <div className="mt-4 flex gap-4">
            <Link href="/login" onClick={closeMobileMenu}>
              Login
            </Link>
            <Link
              href="/signup"
              className="border border-[#F5C76A] px-4 py-2 rounded"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
