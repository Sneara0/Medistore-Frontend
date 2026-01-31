"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"customer" | "seller">("customer");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role })
      });
      const data = await res.json();
      if (res.ok) {
        alert("Registration successful! Please login.");
        router.push("/login");
      } else {
        alert(data.message || "Registration failed!");
      }
    } catch {
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 px-4">
      <form
        onSubmit={handleRegister}
        className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md transition-transform transform hover:scale-105"
      >
        <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-900">
          Create Account
        </h1>

        {/* Name Input */}
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 placeholder-gray-400 text-gray-900 transition"
          required
        />

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-500 placeholder-gray-400 text-gray-900 transition"
          required
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-pink-500 placeholder-gray-400 text-gray-900 transition"
          required
        />

        {/* Role Select */}
        <select
          value={role}
          onChange={e => setRole(e.target.value as "customer" | "seller")}
          className="w-full p-4 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-400 text-gray-900 transition"
        >
          <option value="customer">Customer</option>
          <option value="seller">Seller</option>
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-4 rounded-full hover:scale-105 hover:brightness-110 transition disabled:opacity-50 font-semibold"
        >
          {loading ? "Registering..." : "Register"}
        </button>

        {/* Login Link */}
        <p className="mt-6 text-center text-gray-700">
          Already have an account?{" "}
          <a href="/login" className="text-pink-600 font-semibold hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
