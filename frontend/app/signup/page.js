"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "user",
      JSON.stringify({ email })
    );

    router.push("/dashboard");
  };

  return (
    <section className="max-w-md mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Create Account
      </h1>

      <form onSubmit={handleSignup} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full border px-4 py-3 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          className="w-full border px-4 py-3 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-black text-white py-3 rounded">
          Sign Up
        </button>
      </form>
    </section>
  );
}
