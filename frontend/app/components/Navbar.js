"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center">

        {/* LEFT : LOGO */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-bold">
            Indepelle
          </Link>
        </div>

        {/* CENTER : MAIN NAV LINKS */}
        <div className="flex-1 flex justify-center">
          <ul className="flex gap-8 text-[15px] font-medium">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/furniture/sofas">Sofas</Link></li>
            <li><Link href="/furniture/living">Living</Link></li>
            <li><Link href="/furniture/bedroom">Bedroom</Link></li>
            <li><Link href="/furniture/dining">Dining</Link></li>
            <li><Link href="/furniture/storage">Storage</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* RIGHT : AUTH LINKS */}
        <div className="flex-shrink-0 flex gap-4 items-center">
          {!user ? (
            <>
              <Link
                href="/login"
                className="px-4 py-2 rounded hover:bg-gray-100"
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="px-4 py-2 rounded bg-black text-white hover:bg-gray-800"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <Link
              href="/dashboard"
              className="px-4 py-2 rounded bg-black text-white hover:bg-gray-800"
            >
              Dashboard
            </Link>
          )}
        </div>

      </div>
    </nav>
  );
}
