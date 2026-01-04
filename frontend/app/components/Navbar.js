"use client";

import Link from "next/link";
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

  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Indepelle
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex gap-10 text-[15px] font-medium h-full items-center">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>

          {menu.map((m) => (
            <li
              key={m.title}
              className="relative"
              onMouseEnter={() => setOpenDesktop(m.title)}
              onMouseLeave={() => setOpenDesktop(null)}
            >
              <Link href={m.slug} className="hover:underline">
                {m.title}
              </Link>

              {/* DESKTOP DROPDOWN */}
              <div
                className={`absolute top-full left-0 mt-4 w-56 bg-white border shadow-lg rounded transition-all
                ${openDesktop === m.title ? "opacity-100 visible" : "opacity-0 invisible"}`}
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

          <li>
            <Link href="/collaborations" className="hover:underline">
              Collaborations
            </Link>
          </li>
        </ul>

        {/* DESKTOP AUTH */}
        <div className="hidden lg:flex gap-5 items-center text-sm">
          <Link href="/login">Login</Link>
          <Link
            href="/signup"
            className="bg-black text-white px-5 py-2 rounded"
          >
            Sign Up
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-white px-4 py-4">
          <Link href="/" className="block py-2 font-medium">
            Home
          </Link>

          {menu.map((m) => (
            <div key={m.title}>
              <button
                onClick={() =>
                  setOpenMobile(openMobile === m.title ? null : m.title)
                }
                className="w-full text-left py-2 font-medium flex justify-between"
              >
                {m.title}
                <span>{openMobile === m.title ? "−" : "+"}</span>
              </button>

              {openMobile === m.title && (
                <div className="pl-4 pb-2">
                  <Link
                    href={m.slug}
                    className="block py-1 text-sm font-semibold"
                  >
                    View All
                  </Link>

                  {m.items.map((item) => (
                    <Link
                      key={item}
                      href={`${m.slug}/${item}`}
                      className="block py-1 text-sm capitalize text-gray-600"
                    >
                      {item.replace(/-/g, " ")}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link href="/collaborations" className="block py-2 font-medium">
            Collaborations
          </Link>

          <div className="mt-4 flex gap-4">
            <Link href="/login">Login</Link>
            <Link
              href="/signup"
              className="bg-black text-white px-4 py-2 rounded"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
