import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import Script from "next/script"; // Next.js ka Script component import karein

export const metadata = {
  title: "Indepelle Furniture | Buy Furniture Online",
  description: "Buy premium furniture like sofa, bed, dining table online at best price.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Razorpay Script: Iske bina Checkout page par payment popup nahi khulega */}
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="antialiased">
        <CartProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}