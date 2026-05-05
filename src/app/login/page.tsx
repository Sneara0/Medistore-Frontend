"use client";

import { useState } from "react";
import { loginUser } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { FaGoogle, FaFacebook, FaEnvelope, FaLock, FaUserShield, FaUserLock, FaUser } from "react-icons/fa";

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
      const res = await loginUser({ email, password });

      if (res.success) {
        login(res.token, res.data);
        
        // রোল অনুযায়ী ডাইনামিক রিডাইরেক্ট
        const role = res.data.role;
        if (role === "SUPER_ADMIN") router.push("/dashboard/super-admin");
        else if (role === "ADMIN") router.push("/dashboard/admin");
        else if (role === "CUSTOMER") router.push("/shop");
        else if (role === "SELLER") router.push("/seller/dashboard");
      } else {
        setError(res.message || "Login failed");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || "Login failed. Try again");
    } finally {
      setLoading(false);
    }
  };

  // ✅ ডেমো লগইন ফাংশন (৩টি রোলের জন্য আপডেট করা হয়েছে)
  const handleDemoLogin = (role: "SUPER_ADMIN" | "ADMIN" | "USER") => {
    const credentials = {
      SUPER_ADMIN: { e: "superadmin@medi.com", p: "superadmin29@" },
      ADMIN: { e: "snearaparvin.cse1@gmail.com", p: "snera29@" },
      USER: { e: "user@gmail.com", p: "user29@" }
    };
    setEmail(credentials[role].e);
    setPassword(credentials[role].p);
    setError("");
  };

  return (
    <div className="min-h-screen bg-[#05070a] flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-md">
        
        <div className="text-center mb-10">
          <h2 className="text-emerald-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-3">
            Secure Access
          </h2>
          <h1 className="text-4xl font-black text-white italic tracking-tighter">
            Login <span className="text-gray-700">Account.</span>
          </h1>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl backdrop-blur-sm">
          
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-xs font-bold text-center uppercase tracking-widest">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Email Address</label>
              <div className="relative group">
                <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-emerald-500 transition-colors" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-black/40 border border-white/5 py-4 pl-14 pr-6 rounded-2xl text-white outline-none focus:border-emerald-500/50 transition-all text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Password</label>
              <div className="relative group">
                <FaLock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-emerald-500 transition-colors" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-black/40 border border-white/5 py-4 pl-14 pr-6 rounded-2xl text-white outline-none focus:border-emerald-500/50 transition-all text-sm"
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black uppercase tracking-widest text-xs rounded-2xl transition-all duration-300 shadow-lg shadow-emerald-900/20"
            >
              {loading ? "Authenticating..." : "Sign In"}
            </button>
          </form>

          {/* ✅ ৩টি ডেমো বাটন সেকশন */}
          <div className="mt-8">
            <p className="text-[9px] font-black text-gray-600 uppercase text-center tracking-[0.3em] mb-4">Quick Demo Access</p>
            <div className="grid grid-cols-3 gap-2">
              <button 
                onClick={() => handleDemoLogin("SUPER_ADMIN")}
                className="py-3 bg-white/5 border border-dashed border-white/10 text-gray-400 font-bold uppercase tracking-widest text-[8px] rounded-xl hover:bg-emerald-500/10 hover:text-emerald-500 transition-all flex flex-col items-center gap-2"
              >
                <FaUserLock className="text-emerald-500 text-lg" /> Super Admin
              </button>
              <button 
                onClick={() => handleDemoLogin("ADMIN")}
                className="py-3 bg-white/5 border border-dashed border-white/10 text-gray-400 font-bold uppercase tracking-widest text-[8px] rounded-xl hover:bg-blue-500/10 hover:text-blue-500 transition-all flex flex-col items-center gap-2"
              >
                <FaUserShield className="text-blue-500 text-lg" /> Admin
              </button>
              <button 
                onClick={() => handleDemoLogin("USER")}
                className="py-3 bg-white/5 border border-dashed border-white/10 text-gray-400 font-bold uppercase tracking-widest text-[8px] rounded-xl hover:bg-purple-500/10 hover:text-purple-500 transition-all flex flex-col items-center gap-2"
              >
                <FaUser className="text-purple-500 text-lg" /> User
              </button>
            </div>
          </div>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-white/5"></span></div>
            <div className="relative flex justify-center text-[10px] uppercase font-black tracking-widest text-gray-600">
              <span className="bg-[#0b0e14] px-4">Social Login</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-4 bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-white/10 transition-all group">
              <FaGoogle className="text-red-500 group-hover:scale-110 transition-transform" /> 
              <span className="text-[10px] font-black uppercase tracking-widest">Google</span>
            </button>
            <button className="flex items-center justify-center gap-3 py-4 bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-white/10 transition-all group">
              <FaFacebook className="text-blue-500 group-hover:scale-110 transition-transform" /> 
              <span className="text-[10px] font-black uppercase tracking-widest">Facebook</span>
            </button>
          </div>

          <p className="text-center mt-10 text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">
            New Here? 
            <Link href="/register" className="text-emerald-500 ml-2 hover:underline">Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}