"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const [isOrdered, setIsOrdered] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWhatsAppCheckout = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.address || !form.city || !form.pincode) {
      alert("Please fill all required delivery details");
      return;
    }

    // Fixed: item.name use karein taaki "undefined" na aaye
    const itemDetails = cart
      .map((item) => `• ${item.name || "Product"} (x${item.qty}) - ₹${(item.price * item.qty).toLocaleString()}`)
      .join("%0A");

    const total = cartTotal().toLocaleString();

    const message = `*📦 NEW ORDER - INDEPELLE*%0A%0A` +
      `*Customer Details:*%0A` +
      `👤 Name: ${form.name}%0A` +
      `📞 Phone: ${form.phone}%0A` +
      `📍 Address: ${form.address}, ${form.city} - ${form.pincode}%0A%0A` +
      `*Order Summary:*%0A${itemDetails}%0A%0A` +
      `*Total Amount: ₹${total}*%0A%0A` +
      `I want to confirm this order. Please share payment QR code.`;

    const clientNumber = "919717004488"; 
    window.open(`https://wa.me/${clientNumber}?text=${message}`, "_blank");

    setTimeout(() => {
      clearCart();
      setIsOrdered(true);
    }, 1000);
  };

  if (isOrdered) {
    return (
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="bg-green-50 p-10 rounded-3xl border border-green-100 shadow-sm">
          <h1 className="text-3xl font-bold text-green-900 mb-2">Order Request Sent!</h1>
          <p className="text-gray-600 mb-8">
            Humne aapka order WhatsApp par receive kar liya hai. Hum aapse jald hi contact karenge.
          </p>
          <Link href="/" className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800">
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif font-semibold mb-10">Checkout</h1>

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          {/* FORM */}
          <div className="border rounded-3xl p-8 bg-white shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Delivery Details</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <input name="name" placeholder="Full Name *" className="border px-4 py-3 rounded-xl outline-none" onChange={handleChange} required />
              <input name="phone" placeholder="WhatsApp Number *" className="border px-4 py-3 rounded-xl outline-none" onChange={handleChange} required />
              <textarea name="address" placeholder="Complete Address *" rows={3} className="border px-4 py-3 rounded-xl outline-none md:col-span-2" onChange={handleChange} required />
              <input name="city" placeholder="City *" className="border px-4 py-3 rounded-xl outline-none" onChange={handleChange} required />
              <input name="pincode" placeholder="Pincode *" className="border px-4 py-3 rounded-xl outline-none" onChange={handleChange} required />
            </div>
          </div>

          {/* NEW: BANK DETAILS SECTION (Direct Payment) */}
          <div className="border rounded-3xl p-8 bg-gray-900 text-white shadow-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              💳 Payment Information
            </h2>
            <p className="text-gray-400 text-sm mb-6 italic">Aap direct bank transfer bhi kar sakte hain (Screenshot WhatsApp par bhej dein):</p>
            
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-2 border-l-2 border-green-500 pl-4">
                <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">Bank Account</p>
                <p><strong>Bank:</strong> HDFC Bank</p>
                <p><strong>A/c Name:</strong> Indepelle Furniture</p>
                <p><strong>A/c No:</strong> 502000XXXXXXX</p>
                <p><strong>IFSC:</strong> HDFC000XXXX</p>
              </div>
              <div className="space-y-2 border-l-2 border-blue-500 pl-4">
                <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">UPI ID</p>
                <p className="text-lg font-mono">indepelle@upi</p>
                <p className="text-xs text-gray-500 mt-2">GPay / PhonePe / Paytm accepted</p>
              </div>
            </div>
          </div>
        </div>

        {/* SUMMARY */}
        <div className="border rounded-3xl p-8 h-fit bg-gray-50 sticky top-20">
          <h3 className="text-xl font-semibold mb-6">Order Summary</h3>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between text-sm mb-3">
              <span>{item.name} (x{item.qty})</span>
              <span className="font-semibold">₹{(item.price * item.qty).toLocaleString()}</span>
            </div>
          ))}
          <hr className="my-6" />
          <div className="flex justify-between text-xl font-bold mb-8 text-black">
            <span>Total</span>
            <span>₹{cartTotal().toLocaleString()}</span>
          </div>
          <button
            onClick={handleWhatsAppCheckout}
            className="w-full bg-green-600 text-white py-4 rounded-full font-bold hover:bg-green-700 transition shadow-lg"
          >
            Confirm & Send on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}