"use client";

import { useEffect, useState } from "react";
import { getProfile, updateProfile } from "@/lib/auth";
import { useAuth } from "@/context/AuthContext";

export default function ProfileForm() {
  const { token, loading: authLoading } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ১. নিশ্চিত করা যে কম্পোনেন্টটি ব্রাউজারে মাউন্ট হয়েছে
  useEffect(() => {
    setMounted(true);
  }, []);

  // ২. ডাটা ফেচ করা
  useEffect(() => {
    if (mounted && token) {
      const fetchProfile = async () => {
        try {
          const res = await getProfile(token);
          setName(res.data.name);
          setEmail(res.data.email);
        } catch (err: any) {
          setMessage("Failed to load profile");
        }
      };
      fetchProfile();
    }
  }, [token, mounted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;
    setLoading(true);
    setMessage("");
    try {
      const res = await updateProfile(token, { name, email, password: password || undefined });
      setMessage(res.message);
      setPassword("");
    } catch (err: any) {
      setMessage("Update failed");
    } finally {
      setLoading(false);
    }
  };

  // মাউন্ট না হওয়া পর্যন্ত কিছুই রেন্ডার করবেন না (Hydration mismatch fix)
  if (!mounted || authLoading) return <p className="text-center p-10">Loading...</p>;

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md border mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">My Profile</h2>
      {message && (
        <p className={`text-center mb-4 ${message.includes("fail") ? "text-red-500" : "text-green-600"}`}>
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          required
        />
        <input
          type="password"
          placeholder="New Password (leave blank to keep)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-400 transition"
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
}