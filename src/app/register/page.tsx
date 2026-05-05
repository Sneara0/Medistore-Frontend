"use client";

import { useState } from "react";
import { registerUser } from "@/lib/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaUser, FaEnvelope, FaLock, FaUserTag, FaArrowRight } from "react-icons/fa";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"CUSTOMER" | "SELLER">("CUSTOMER");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // ✅ Logic remains exactly same
      const res = await registerUser({ name, email, password, role });

      if (res.success) {
        alert("Registration successful!");
        router.push("/login"); 
      } else {
        setError(res.message || "Registration failed");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#05070a] flex items-center justify-center px-4 relative overflow-hidden font-sans">
      
      {/* --- Ambient Background Elements --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]"></div>

      <div className="relative z-10 w-full max-w-md animate-dashboard">
        
        {/* Logo / Branding Placeholder */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-black italic tracking-tighter text-white uppercase">
            Join <span className="text-emerald-500 not-italic uppercase font-extrabold">MediStore.</span>
          </h2>
          <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] mt-2">Start your healthcare journey</p>
        </div>

        <div className="glass-card p-8 md:p-10 border-white/5 bg-white/[0.02]">
          
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs font-bold text-center animate-pulse">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Full Name Input */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-2">Full Name</label>
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 text-sm" />
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded-2xl text-sm text-white outline-none focus:border-emerald-500/50 transition-all placeholder:text-gray-700 font-medium"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-2">Email Address</label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 text-sm" />
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded-2xl text-sm text-white outline-none focus:border-emerald-500/50 transition-all placeholder:text-gray-700 font-medium"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-2">Secure Password</label>
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 text-sm" />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded-2xl text-sm text-white outline-none focus:border-emerald-500/50 transition-all placeholder:text-gray-700 font-medium"
                />
              </div>
            </div>

            {/* Role Selection */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-2">Select Role</label>
              <div className="relative">
                <FaUserTag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 text-sm" />
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value as "CUSTOMER" | "SELLER")}
                  className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded-2xl text-sm text-white outline-none focus:border-emerald-500/50 transition-all appearance-none cursor-pointer font-medium"
                >
                  <option value="CUSTOMER" className="bg-[#0a0a0a]">Register as Customer</option>
                  <option value="SELLER" className="bg-[#0a0a0a]">Register as Seller</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full bg-emerald-600 text-white font-black uppercase text-[12px] tracking-[0.2em] py-5 rounded-2xl hover:bg-emerald-500 transition-all duration-300 shadow-xl shadow-emerald-600/10 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                {loading ? "Processing..." : `Create ${role} Account`}
                {!loading && <FaArrowRight className="group-hover:translate-x-1 transition-transform" />}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </form>

          {/* Footer Link */}
          <p className="text-xs mt-8 text-center text-gray-500 font-bold uppercase tracking-widest">
            Already a member?{" "}
            <Link href="/login" className="text-emerald-500 hover:text-emerald-400 transition-colors ml-1">
              Login here
            </Link>
          </p>
        </div>

        <p className="text-[9px] text-gray-700 text-center mt-10 font-black uppercase tracking-[0.5em]">
          MediStore Secure Infrastructure © 2026
        </p>
      </div>
    </div>
  );
}