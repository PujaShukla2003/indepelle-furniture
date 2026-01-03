"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    const fakeUser = {
      name: "Puja",
      email: "puja@gmail.com",
      role: "admin",
    };

    localStorage.setItem("user", JSON.stringify(fakeUser));
    router.push("/dashboard");
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <button
        onClick={handleLogin}
        className="px-6 py-3 bg-black text-white rounded"
      >
        Login
      </button>
    </div>
  );
}
