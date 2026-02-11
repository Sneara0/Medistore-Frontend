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

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (mounted && token) {
      getProfile(token).then(res => {
        setName(res.data.name);
        setEmail(res.data.email);
      }).catch(() => setMessage("Failed to load profile"));
    }
  }, [token, mounted]);

  if (!mounted || authLoading) return <p className="text-center p-10">Loading...</p>;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;
    setLoading(true);
    try {
      const res = await updateProfile(token, { name, email, password: password || undefined });
      setMessage(res.message);
      setPassword("");
    } catch (err: any) {
      setMessage(err.message || "Update failed");
    } finally { setLoading(false); }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md border mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Profile Settings</h2>
      {message && <p className="text-center text-sm mb-4 text-blue-600">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full p-3 border rounded-lg" placeholder="Name" required />
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-3 border rounded-lg" placeholder="Email" required />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-3 border rounded-lg" placeholder="New Password (optional)" />
        <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400">
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
}