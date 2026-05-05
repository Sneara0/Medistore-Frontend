"use client";
import React from "react";
import Link from "next/link";
import { FaTruck, FaMedkit, FaHeadset, FaArrowRight } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans overflow-x-hidden">
      
      {/* --- Modern Hero Section --- */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-[#022c22] text-white py-20 px-6 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-500 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-600 rounded-full blur-[150px] animate-bounce duration-1000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-black uppercase tracking-[0.3em] bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-full">
            Since 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight italic">
            Your Health, <br />
            <span className="text-emerald-400 font-extrabold not-italic uppercase">Our Priority.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            MediStore is a next-generation online pharmacy, merging technology with healthcare to deliver excellence at your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="group px-10 py-4 bg-emerald-500 text-white font-black uppercase text-[12px] tracking-widest rounded-2xl hover:bg-emerald-400 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Start Shopping <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- Stats Section (New) --- */}
      <div className="max-w-6xl mx-auto -mt-16 px-6 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Products", val: "10k+" },
            { label: "Customers", val: "50k+" },
            { label: "Cities", val: "20+" },
            { label: "Reviews", val: "4.9/5" },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 text-center">
              <h3 className="text-3xl font-black text-emerald-900">{stat.val}</h3>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- Mission & Vision (Sleek Design) --- */}
      <section className="max-w-7xl mx-auto py-32 px-6 space-y-32">
        {/* Mission */}
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <div className="w-12 h-1 bg-emerald-500 mb-4"></div>
            <h2 className="text-4xl font-black text-emerald-950 uppercase italic">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-loose">
              To bridge the gap between quality healthcare and accessibility. We leverage high-end logistics to ensure that no prescription goes unfilled and no patient goes ignored. 
            </p>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li className="flex items-center gap-3"> <span className="text-emerald-500">✔</span> 100% Certified Medications</li>
              <li className="flex items-center gap-3"> <span className="text-emerald-500">✔</span> Real-time Temperature Tracking</li>
            </ul>
          </div>
          <div className="flex-1 relative group">
            <div className="absolute inset-0 bg-emerald-500 rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
            <img 
              src="/assets/mission.jpg" 
              alt="Mission" 
              className="relative rounded-[3rem] shadow-2xl h-[450px] w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        {/* Vision */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="flex-1 space-y-6">
            <div className="w-12 h-1 bg-emerald-500 mb-4"></div>
            <h2 className="text-4xl font-black text-emerald-950 uppercase italic">Our Vision</h2>
            <p className="text-gray-600 text-lg leading-loose">
              Setting the global standard for digital healthcare. We envision a world where managing your health is as simple as a single tap, backed by the world's most trusted pharmacists.
            </p>
          </div>
          <div className="flex-1 relative group">
            <div className="absolute inset-0 bg-emerald-900 rounded-[3rem] -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
            <img 
              src="/assets/vision.jpg" 
              alt="Vision" 
              className="relative rounded-[3rem] shadow-2xl h-[450px] w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* --- Why Choose Us (Icon Cards) --- */}
      <section className="bg-emerald-50 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.4em] mb-4">Core Values</h2>
            <h3 className="text-4xl font-black text-emerald-950 uppercase italic">Why MediStore?</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FaMedkit />, title: "Certified Care", desc: "Sourced directly from global pharmaceutical leaders.", color: "bg-emerald-500" },
              { icon: <FaTruck />, title: "Instant Logistics", desc: "Hyper-local delivery network for emergency needs.", color: "bg-blue-600" },
              { icon: <FaHeadset />, title: "24/7 Expert Support", desc: "Talk to real pharmacists anytime, anywhere.", color: "bg-purple-600" },
            ].map((box, i) => (
              <div key={i} className="bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-emerald-100/50 group">
                <div className={`${box.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  {box.icon}
                </div>
                <h4 className="text-xl font-black text-emerald-950 mb-4 uppercase">{box.title}</h4>
                <p className="text-gray-500 leading-relaxed text-sm">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Call to Action (Minimalist) --- */}
      <section className="py-40 px-6">
        <div className="max-w-5xl mx-auto bg-emerald-950 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 italic uppercase tracking-tighter">
            Take Control of <span className="text-emerald-400">Your Health</span> Today.
          </h2>
          <Link
            href="/shop"
            className="inline-block px-12 py-5 bg-white text-emerald-950 font-black uppercase text-[12px] tracking-[0.2em] rounded-2xl hover:bg-emerald-400 hover:text-white transition-all duration-500 shadow-xl"
          >
            Explore Medicines
          </Link>
        </div>
      </section>
    </div>
  );
}