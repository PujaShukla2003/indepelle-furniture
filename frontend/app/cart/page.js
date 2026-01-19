"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQty, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-semibold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-6">
          Looks like you haven’t added anything yet.
        </p>
        <Link
          href="/"
          className="inline-block bg-black text-white px-6 py-3 rounded-full"
        >
          Continue Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif font-semibold mb-10">
        Shopping Cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* LEFT: CART ITEMS */}
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 border rounded-2xl p-4 items-center bg-white shadow-sm"
            >
              {/* ✅ IMAGE FIX: Alt property added to prevent build failure */}
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image
                  src={item.image || "/images/placeholder.webp"} 
                  alt={item.name || "Product Image"} // Fixed: Alt property added
                  fill
                  className="rounded-xl object-cover"
                />
              </div>

              {/* INFO */}
              <div className="flex-1 px-2">
                <h3 className="font-semibold text-lg">{item.name || item.title}</h3>
                <p className="text-gray-600">
                  ₹{item.price?.toLocaleString()}
                </p>

                {/* QTY CONTROLS */}
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))}
                      className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition"
                    >
                      −
                    </button>
                    <span className="w-10 text-center font-medium">{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* REMOVE BUTTON */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-full transition"
                title="Remove Item"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT: SUMMARY */}
        <div className="border rounded-2xl p-6 h-fit bg-gray-50 sticky top-24">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

          <div className="space-y-3 border-b pb-4">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal ({cart.length} items)</span>
              <span>₹{cartTotal().toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span className="text-green-600 font-medium">FREE</span>
            </div>
          </div>

          <div className="flex justify-between py-4">
            <span className="text-lg font-bold">Total Amount</span>
            <span className="text-lg font-bold text-black">₹{cartTotal().toLocaleString()}</span>
          </div>

          <Link
            href="/checkout"
            className="block text-center mt-6 bg-black text-white py-4 rounded-full font-semibold hover:bg-gray-800 transition shadow-lg"
          >
            Proceed to Checkout
          </Link>
          
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <p className="text-xs text-gray-500 italic">
              Secure Checkout via WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}