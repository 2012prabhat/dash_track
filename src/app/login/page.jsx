"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("prabhatTest@gmail.com");
  const [password, setPassword] = useState("prabhatTest");

  const handleLogin = () => {
    if (email === "prabhatTest@gmail.com" && password === "prabhatTest") {
      const userData = {
        userName: "Prabhat Kumar",
        email: "prabhatTest@gmail.com",
        accessToken: "demo_token_123", // dummy token
      };

      // Store details in localStorage
      localStorage.setItem("userDetails", JSON.stringify(userData));

      // Redirect to dashboard
      router.push("/dashboard");
    } else {
      alert("Invalid login details!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Welcome Back
        </h2>
        <p className="text-gray-300 text-center mb-8">
          Login to continue your dashboard
        </p>

        {/* Email Field */}
        <div className="mb-4">
          <label className="text-gray-300 text-sm mb-2 block">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="example@gmail.com"
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label className="text-gray-300 text-sm mb-2 block">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="••••••••"
          />
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg transition-all shadow-md"
        >
          Login
        </button>

        {/* Google Login */}
        <div className="text-center my-5 text-gray-300">or</div>

        <button className="w-full flex items-center justify-center gap-3 border border-white/30 hover:bg-white/10 text-white py-3 rounded-lg transition-all">
          <FcGoogle size={24} /> Sign in with Google
        </button>

        {/* Footer */}
        <p className="text-gray-400 text-center mt-6 text-sm">
          Don’t have an account?{" "}
          <Link href="/register" className="text-indigo-400 hover:underline">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
