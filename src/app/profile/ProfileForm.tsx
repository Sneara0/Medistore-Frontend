"use client";

import { useEffect, useState } from "react";
// রিলেটিভ পাথ ব্যবহার করছি যাতে বিল্ডের সময় পাথ খুঁজে পেতে সমস্যা না হয়
import { getProfile, updateProfile } from "../../lib/auth";
import { useAuth } from "../../context/AuthContext";

export default function ProfileForm() {
  const { token, loading: authLoading } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ১. Hydration mismatch সমাধান করতে মাউন্ট চেক
  useEffect(() => {
    setMounted(true);
  }, []);

  // ২. ডাটা ফেচ করা
  useEffect(() => {
    if (mounted && token) {
      const fetchProfile = async () => {
        try {
          const res = await getProfile(token);
          if (res && res.data) {
            setName(res.data.name);
            setEmail(res.data.email);
          }
        } catch (err: any) {
          console.error("Profile load error:", err);
          // মেসেজ সেট করলে ইউজার বুঝতে পারবে
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
      const res = await updateProfile(token, { 
        name, 
        email, 
        password: password || undefined 
      });
      setMessage(res.message || "Profile updated successfully!");
      setPassword("");
    } catch (err: any) {
      setMessage(err.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  // মাউন্ট না হওয়া পর্যন্ত লোডিং দেখানো (সার্ভার এরর এড়াতে)
  if (!mounted || authLoading) {
    return (
      <div className="flex justify-center items-center p-10">
        <p className="animate-pulse text-gray-500">Loading form...</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md border mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">My Profile</h2>
      
      {message && (
        <div className={`p-3 rounded-lg mb-4 text-center text-sm ${
          message.toLowerCase().includes("fail") 
            ? "bg-red-100 text-red-600" 
            : "bg-green-100 text-green-600"
        }`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">New Password (optional)</label>
          <input
            type="password"
            placeholder="Leave blank to keep current"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-400 shadow-md transition-all active:scale-95"
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
}