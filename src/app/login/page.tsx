"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("user", JSON.stringify(data));
        alert("Login successful!");
        if (data.role === "admin") router.push("/admin");
        else if (data.role === "seller") router.push("/seller/dashboard");
        else router.push("/");
      } else {
        alert(data.message || "Login failed!");
      }
    } catch {
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 px-4">
      <form
        onSubmit={handleLogin}
        className="relative w-full max-w-md bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-10 rounded-3xl shadow-2xl transition-transform transform hover:scale-105 overflow-hidden"
      >
        {/* Decorative Circles */}
        <div className="absolute -top-16 -right-16 w-36 h-36 bg-gradient-to-tr from-pink-400 to-yellow-400 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-gradient-to-tr from-blue-400 to-indigo-400 rounded-full opacity-30 animate-pulse"></div>

        {/* Form Title */}
        <h1 className="text-3xl font-extrabold mb-10 text-center text-gray-900">
          Login
        </h1>

        {/* Email Input */}
        <div className="relative mb-6">
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="peer w-full p-4 rounded-lg bg-gradient-to-r from-blue-100 via-white to-purple-100 border border-indigo-300 placeholder-transparent text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            placeholder="Email"
            required
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-4 text-gray-500 text-sm transition-all 
                       peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
                       peer-focus:top-0 peer-focus:text-blue-500 peer-focus:text-sm"
          >
            Email
          </label>
        </div>

        {/* Password Input */}
        <div className="relative mb-6">
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="peer w-full p-4 rounded-lg bg-gradient-to-r from-purple-100 via-white to-pink-100 border border-purple-300 placeholder-transparent text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm"
            placeholder="Password"
            required
          />
          <label
            htmlFor="password"
            className="absolute left-4 top-4 text-gray-500 text-sm transition-all 
                       peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
                       peer-focus:top-0 peer-focus:text-pink-500 peer-focus:text-sm"
          >
            Password
          </label>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-semibold text-lg hover:scale-105 hover:brightness-110 transition disabled:opacity-50 shadow-lg"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Register Link */}
        <p className="mt-6 text-center text-gray-700">
          Don't have an account?{" "}
          <a href="/register" className="text-indigo-600 font-semibold hover:underline">
            Register
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
