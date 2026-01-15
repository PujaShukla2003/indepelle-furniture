"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();

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

  const openRazorpay = () => {
    if (
      !form.name ||
      !form.phone ||
      !form.address ||
      !form.city ||
      !form.pincode
    ) {
      alert("Please fill all required fields");
      return;
    }

    const options = {
      key: "rzp_test_XXXXXXXXXXXXXXXX", // 👈 Razorpay TEST KEY
      amount: cartTotal() * 100, // paise
      currency: "INR",
      name: "Indepelle Furniture",
      description: "Furniture & Interior Order",
      image: "/logo.webp",

      handler: function (response) {
        alert("Payment Successful 🎉");
        console.log(response);

        clearCart();
        window.location.href = "/";
      },

      prefill: {
        name: form.name,
        email: form.email,
        contact: form.phone,
      },

      notes: {
        address: form.address,
      },

      theme: {
        color: "#000000",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  if (cart.length === 0) {
    return (
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-semibold">
          No items to checkout
        </h1>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif font-semibold mb-10">
        Checkout
      </h1>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* FORM */}
        <div className="lg:col-span-2 border rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-6">
            Delivery Details
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input name="name" placeholder="Full Name" className="border px-4 py-3 rounded" onChange={handleChange} />
            <input name="phone" placeholder="Phone Number" className="border px-4 py-3 rounded" onChange={handleChange} />
            <input name="email" placeholder="Email" className="border px-4 py-3 rounded md:col-span-2" onChange={handleChange} />
            <textarea name="address" placeholder="Address" rows={3} className="border px-4 py-3 rounded md:col-span-2" onChange={handleChange} />
            <input name="city" placeholder="City" className="border px-4 py-3 rounded" onChange={handleChange} />
            <input name="pincode" placeholder="Pincode" className="border px-4 py-3 rounded" onChange={handleChange} />
          </div>
        </div>

        {/* SUMMARY */}
        <div className="border rounded-2xl p-6 h-fit">
          <h3 className="text-xl font-semibold mb-4">
            Order Summary
          </h3>

          {cart.map((item) => (
            <div key={item.id} className="flex justify-between text-sm mb-2">
              <span>{item.name} × {item.qty}</span>
              <span>₹{(item.price * item.qty).toLocaleString()}</span>
            </div>
          ))}

          <hr className="my-4" />

          <div className="flex justify-between font-semibold mb-6">
            <span>Total</span>
            <span>₹{cartTotal().toLocaleString()}</span>
          </div>

          <button
            onClick={openRazorpay}
            className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition"
          >
            Pay ₹{cartTotal().toLocaleString()}
          </button>
        </div>
      </div>
    </section>
  );
}
