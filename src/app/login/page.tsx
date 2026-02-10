"use client";

import { useState } from "react";
import { loginUser } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // ✅ Call login API
      const res = await loginUser({ email, password });

      if (res.success) {
        // Save token + user to context
        login(res.token, res.data);

        // Role-based redirect
        if (res.data.role === "CUSTOMER") router.push("/shop");
        else if (res.data.role === "SELLER") router.push("/seller/dashboard");
        else if (res.data.role === "ADMIN") router.push("/admin");
      } else {
        setError(res.message || "Login failed");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || "Login failed. Try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 via-green-600 to-green-700 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition-transform duration-500 hover:scale-105">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-green-700">Login</h2>

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700 hover:scale-105 transition-transform"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-sm mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-green-600 font-medium hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
