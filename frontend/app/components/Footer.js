"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black mt-24 border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <div className="mb-4">
            <Image
              src="/logo.webp"
              alt="Indepelle Logo"
              width={160}
              height={40}
              className="object-contain"
            />
          </div>

          <p className="text-[#F5C76A] text-sm leading-relaxed">
            Premium furniture and lifestyle products crafted for modern living.
            Designed with elegance, durability, and comfort in mind.
          </p>
        </div>

        {/* SHOP */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#F5C76A]">
            Shop
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/furniture" className="text-[#F5C76A] hover:text-[#FFD978] transition">Furniture</Link></li>
            <li><Link href="/living" className="text-[#F5C76A] hover:text-[#FFD978] transition">Living</Link></li>
            <li><Link href="/home-office" className="text-[#F5C76A] hover:text-[#FFD978] transition">Home Office</Link></li>
            <li><Link href="/travel" className="text-[#F5C76A] hover:text-[#FFD978] transition">Travel</Link></li>
            <li><Link href="/bar" className="text-[#F5C76A] hover:text-[#FFD978] transition">Bar</Link></li>
            <li><Link href="/gifting" className="text-[#F5C76A] hover:text-[#FFD978] transition">Gifting</Link></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#F5C76A]">
            Company
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="text-[#F5C76A] hover:text-[#FFD978] transition">About Us</Link></li>
            <li><Link href="/collaborations" className="text-[#F5C76A] hover:text-[#FFD978] transition">Collaborations</Link></li>
            <li><Link href="/contact" className="text-[#F5C76A] hover:text-[#FFD978] transition">Contact Us</Link></li>
            <li><Link href="/privacy-policy" className="text-[#F5C76A] hover:text-[#FFD978] transition">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-[#F5C76A] hover:text-[#FFD978] transition">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#F5C76A]">
            Contact
          </h3>
          <ul className="space-y-3 text-sm leading-relaxed text-[#F5C76A]">
            <li>
              📍 <strong>R.K. Dharna & Associates</strong><br />
              Plot No. 23, Sri Sai Park, Muksudabad<br />
              Opp. Nangli Sakrawati Industrial Area<br />
              Near Metro Pillar No. 75,<br />
              Najafgarh, New Delhi – 110043, India
            </li>

            <li>
              📞{" "}
              <a href="tel:9717004488" className="hover:text-[#FFD978] transition">
                9717004488
              </a>,{" "}
              <a href="tel:9811133581" className="hover:text-[#FFD978] transition">
                9811133581
              </a><br />
              <a href="tel:7042730304" className="hover:text-[#FFD978] transition">
                7042730304
              </a>,{" "}
              <a href="tel:9266588028" className="hover:text-[#FFD978] transition">
                9266588028
              </a>
            </li>

            <li>
              ✉{" "}
              <a href="mailto:rkdharna@gmail.com" className="hover:text-[#FFD978] transition">
                rkdharna@gmail.com
              </a><br />
              <a href="mailto:rkdharna1@gmail.com" className="hover:text-[#FFD978] transition">
                rkdharna1@gmail.com
              </a>
            </li>

            <li>
              🌐{" "}
              <a
                href="https://indepelle.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFD978] transition"
              >
                www.indepelle.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[#2a2a2a] py-4 text-center text-sm text-[#F5C76A]">
        © {new Date().getFullYear()} Indepelle Furniture. All rights reserved.
      </div>
    </footer>
  );
}
