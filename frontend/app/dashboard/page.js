"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      router.push("/login");
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    router.push("/");
  };

  if (!user) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-4">
        Dashboard
      </h1>

      <p className="text-gray-600 mb-6">
        Welcome, <b>{user.email}</b>
      </p>

      <button
        onClick={logout}
        className="bg-black text-white px-6 py-3 rounded"
      >
        Logout
      </button>
    </section>
  );
}
