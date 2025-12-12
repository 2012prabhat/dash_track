"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (data.success) window.location.href = "/dashboard";
  }

  async function handleGoogleLogin() {
    /* 1. Load Google Script */
    const google = window.google;

    google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      callback: async (response) => {
        const res = await fetch("/api/auth/google", {
          method: "POST",
          body: JSON.stringify({ credential: response.credential }),
        });
        const data = await res.json();
        if (data.success) window.location.href = "/dashboard";
      },
    });

    google.accounts.id.prompt();
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className=" p-10 rounded-xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center">Login</h1>

        {/* Google Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border py-3 rounded-xl mt-6"
        >
          <FcGoogle size={24} />
          Sign in with Google
        </button>

        <form onSubmit={handleLogin} className="mt-8 flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-xl"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-3 rounded-xl"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="bg-blue-600 text-white py-3 rounded-xl">
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
