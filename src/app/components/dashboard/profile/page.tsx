"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function ProfilePage() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="p-10 max-w-5xl mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden">
        <div className="h-40 bg-gradient-to-r from-emerald-600 to-blue-600"></div>
        <div className="px-12 pb-12">
          <div className="relative -top-12 flex items-end gap-6">
            <div className="w-32 h-32 rounded-[2.5rem] bg-emerald-500 border-8 border-[#05070a] flex items-center justify-center text-4xl font-black text-white">
              {user?.name?.[0]}
            </div>
            <div className="mb-4">
              <h1 className="text-3xl font-black text-white italic">{user?.name}</h1>
              <p className="text-emerald-500 font-bold uppercase text-[10px] tracking-widest">{user?.role}</p>
            </div>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8 -mt-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-2">Full Name</label>
              <input 
                type="text" defaultValue={user?.name} disabled={!isEditing}
                className="w-full bg-black/40 border border-white/5 py-4 px-6 rounded-2xl text-white outline-none focus:border-emerald-500 transition-all disabled:opacity-50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-2">Email Address</label>
              <input 
                type="email" defaultValue={user?.email} disabled
                className="w-full bg-black/40 border border-white/5 py-4 px-6 rounded-2xl text-gray-500 cursor-not-allowed"
              />
            </div>
            
            <div className="md:col-span-2 flex gap-4 pt-6">
              {!isEditing ? (
                <button type="button" onClick={() => setIsEditing(true)} className="px-10 py-4 bg-white text-black font-black uppercase text-[10px] tracking-widest rounded-2xl hover:bg-emerald-500 hover:text-white transition-all">
                  Edit Profile
                </button>
              ) : (
                <>
                  <button type="submit" className="px-10 py-4 bg-emerald-600 text-white font-black uppercase text-[10px] tracking-widest rounded-2xl shadow-lg shadow-emerald-600/20">
                    Save Changes
                  </button>
                  <button type="button" onClick={() => setIsEditing(false)} className="px-10 py-4 bg-white/5 text-white font-black uppercase text-[10px] tracking-widest rounded-2xl border border-white/10">
                    Cancel
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}