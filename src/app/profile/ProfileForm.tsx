"use client";

import { useEffect, useState } from "react";
import { getProfile, updateProfile } from "@/lib/auth";
import { useAuth } from "@/context/AuthContext";

export default function ProfileForm() {
  const { token } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Fetch profile on mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getProfile(token!);
        setName(res.data.name);
        setEmail(res.data.email);
      } catch (err: any) {
        setMessage(err.message || "Failed to load profile");
      }
    };
    fetchProfile();
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const res = await updateProfile(token!, { name, email, password: password || undefined });
      setMessage(res.message);
      setPassword(""); // clear password
    } catch (err: any) {
      setMessage(err.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">My Profile</h2>
      {message && <p className="text-center text-green-600 mb-4">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="password"
          placeholder="New Password (leave blank to keep)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700 shadow-md transition"
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
}
