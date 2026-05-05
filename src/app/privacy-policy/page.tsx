"use client";
import React from 'react';
import Link from 'next/link';
import { FaShieldAlt, FaLock, FaUserSecret, FaRegFileAlt } from 'react-icons/fa';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#05070a] text-white selection:bg-emerald-500/30">
      
      {/* --- Decorative Background --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto py-24 px-6">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-20 animate-dashboard">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-[10px] font-black uppercase tracking-[0.4em] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full">
            <FaShieldAlt className="text-xs" /> Privacy Framework
          </div>
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-6">
            Privacy <span className="text-gray-700 not-italic uppercase font-extrabold">Policy.</span>
          </h1>
          <p className="text-gray-500 font-medium text-sm">Last Updated: May 2026 • Version 2.0.4</p>
        </div>

        {/* --- Policy Content with Glassmorphism --- */}
        <div className="space-y-8 animate-dashboard" style={{ animationDelay: '0.2s' }}>
          
          {/* Card 1: Information Collection */}
          <div className="glass-card p-10 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 text-xl group-hover:scale-110 transition-transform">
                <FaUserSecret />
              </div>
              <h2 className="text-xl font-black uppercase italic tracking-tight text-white">Information Collection</h2>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              MediStore-এ আপনার অ্যাকাউন্ট তৈরি করার সময় আমরা আপনার নাম, ইমেইল, কন্টাক্ট নম্বর এবং ডেলিভারি এড্রেস সংগ্রহ করি। আপনার স্বাস্থ্যগত নিরাপত্তা এবং সঠিক ওষুধ ডেলিভারি নিশ্চিত করতেই এই তথ্যগুলো প্রয়োজন।
            </p>
          </div>

          {/* Card 2: Data Protection */}
          <div className="glass-card p-10 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 text-xl group-hover:scale-110 transition-transform">
                <FaLock />
              </div>
              <h2 className="text-xl font-black uppercase italic tracking-tight text-white">Data Protection & Encryption</h2>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              আমরা আপনার ব্যক্তিগত তথ্য সুরক্ষিত রাখতে **SSL Encryption** এবং **AES-256-bit** সিকিউরিটি প্রোটোকল ব্যবহার করি। আপনার পেমেন্ট ইনফরমেশন (Stripe/Card) সরাসরি আমাদের গেটওয়ে পার্টনারদের দ্বারা প্রসেস হয়, যা সম্পূর্ণ এনক্রিপ্টেড।
            </p>
          </div>

          {/* Card 3: Use of Data */}
          <div className="glass-card p-10 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500 text-xl group-hover:scale-110 transition-transform">
                <FaRegFileAlt />
              </div>
              <h2 className="text-xl font-black uppercase italic tracking-tight text-white">How We Use Your Data</h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[13px] text-gray-500 font-bold uppercase tracking-tight">
              <li className="flex items-center gap-2"> <span className="text-emerald-500">→</span> Order Processing</li>
              <li className="flex items-center gap-2"> <span className="text-emerald-500">→</span> Fast Delivery Logistics</li>
              <li className="flex items-center gap-2"> <span className="text-emerald-500">→</span> Account Security</li>
              <li className="flex items-center gap-2"> <span className="text-emerald-500">→</span> Personalized Support</li>
            </ul>
          </div>

          {/* Card 4: Third Party Disclosure */}
          <div className="glass-card p-10 border-dashed border-white/5">
            <h3 className="text-white font-black uppercase text-xs tracking-widest mb-4">Third-Party Disclosure</h3>
            <p className="text-gray-500 text-sm leading-relaxed italic">
              "আমরা কখনই আপনার তথ্য কোনো তৃতীয় পক্ষের কাছে বিক্রি করি না। শুধুমাত্র ডেলিভারি পার্টনার এবং সরকারি আইনি প্রয়োজনে তথ্য শেয়ার করা হতে পারে।"
            </p>
          </div>

        </div>

        {/* --- Contact & Back to Home --- */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 text-xs font-medium mb-8">
            Privacy সংক্রান্ত কোনো প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন: <span className="text-emerald-500">support@medistore.com</span>
          </p>
          <Link 
            href="/" 
            className="neon-button inline-flex items-center gap-3"
          >
            Return to Store
          </Link>
        </div>

      </div>
    </div>
  );
}