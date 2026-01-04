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
    items: [
      "bar-trolley",
      "bar-cabinets",
      "bar-stools",
      "bar-counter",
    ],
  },
  {
    title: "Gifting",
    slug: "/gifting",
    items: ["gift-sets", "corporate-gifts", "festive-gifts"],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(null);

  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Indepelle
        </Link>

        {/* MENU */}
        <ul className="flex gap-10 text-[15px] font-medium h-full items-center">

          {/* HOME */}
          <li className="h-full flex items-center">
            <Link
              href="/"
              className="relative py-2 hover:text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
            >
              Home
            </Link>
          </li>

          {menu.map((m) => (
            <li
              key={m.title}
              className="relative h-full flex items-center"
              onMouseEnter={() => setOpen(m.title)}
              onMouseLeave={() => setOpen(null)}
            >
              {/* MAIN LINK */}
              <Link
                href={m.slug}
                className="relative py-2 hover:text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
              >
                {m.title}
              </Link>

              {/* DROPDOWN */}
              <div
                className={`absolute top-full left-0 mt-4 w-56 bg-white border shadow-lg rounded transition-all duration-200
                ${open === m.title ? "opacity-100 visible" : "opacity-0 invisible"}`}
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

          {/* COLLABORATIONS */}
          <li className="h-full flex items-center">
            <Link
              href="/collaborations"
              className="relative py-2 hover:text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
            >
              Collaborations
            </Link>
          </li>
        </ul>

        {/* AUTH */}
        <div className="flex gap-5 items-center text-sm">
          <Link href="/login" className="hover:text-black">
            Login
          </Link>

          <Link
            href="/signup"
            className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
