"use client";
import React from 'react';
import Link from 'next/link';
import { FaUndoAlt, FaCheckCircle, FaShippingFast, FaHeadset } from 'react-icons/fa';

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-[#05070a] text-white selection:bg-emerald-500/30 font-sans">
      
      {/* --- Visual Accents --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-15%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto py-24 px-6">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-24 animate-dashboard">
          <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black uppercase tracking-[0.4em] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full">
            Customer Assurance
          </span>
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-8 uppercase">
            Returns <span className="text-gray-800 not-italic font-extrabold">&</span> Refunds.
          </h1>
          <div className="h-1 w-24 bg-emerald-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-500 font-bold text-sm max-w-2xl mx-auto leading-relaxed uppercase tracking-wide">
            Our goal is your absolute satisfaction. If something isn't right, we’ll make it perfect.
          </p>
        </div>

        {/* --- Process Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-dashboard" style={{ animationDelay: '0.2s' }}>
          
          <div className="glass-card p-10 flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-[2rem] flex items-center justify-center text-emerald-500 text-2xl mb-6 group-hover:scale-110 transition-transform">
              <FaUndoAlt />
            </div>
            <h3 className="text-lg font-black uppercase italic mb-4">7-Day Window</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              Request a return within 7 days of delivery for eligible pharmaceutical products.
            </p>
          </div>

          <div className="glass-card p-10 flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-blue-500/10 rounded-[2rem] flex items-center justify-center text-blue-500 text-2xl mb-6 group-hover:scale-110 transition-transform">
              <FaCheckCircle />
            </div>
            <h3 className="text-lg font-black uppercase italic mb-4">Quality Check</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              Items must be unopened, with original seals intact, to ensure medical safety standards.
            </p>
          </div>

          <div className="glass-card p-10 flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-purple-500/10 rounded-[2rem] flex items-center justify-center text-purple-500 text-2xl mb-6 group-hover:scale-110 transition-transform">
              <FaShippingFast />
            </div>
            <h3 className="text-lg font-black uppercase italic mb-4">Fast Refund</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              Refunds are processed within 3-5 business days directly to your original payment method.
            </p>
          </div>

        </div>

        {/* --- Detailed Policy Section --- */}
        <div className="glass-card p-12 md:p-20 animate-dashboard" style={{ animationDelay: '0.4s' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h4 className="text-2xl font-black uppercase italic tracking-tight">Non-Returnable Items</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                To maintain the integrity of our supply chain, certain items cannot be returned:
              </p>
              <ul className="space-y-4 text-[11px] font-black uppercase tracking-widest text-gray-500">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> Refrigerated Medications
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> Opened Safety Seals
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> Prescription-only Drugs (unless damaged)
                </li>
              </ul>
            </div>
            
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-[2rem] flex flex-col justify-center items-center text-center">
              <FaHeadset className="text-4xl text-emerald-500 mb-6" />
              <h4 className="text-xl font-black uppercase italic mb-4">Need Help?</h4>
              <p className="text-gray-500 text-sm mb-8 font-medium">
                Our support team is available 24/7 to assist with your return process.
              </p>
              <Link href="/contact" className="neon-button w-full text-center">
                Start Return Request
              </Link>
            </div>
          </div>
        </div>

        {/* --- Back to Shop --- */}
        <div className="mt-20 text-center animate-dashboard" style={{ animationDelay: '0.6s' }}>
          <Link href="/shop" className="text-emerald-500 font-black uppercase text-[10px] tracking-[0.4em] hover:text-emerald-400 transition-all border-b border-emerald-500/20 pb-1">
            ← Continue Shopping
          </Link>
        </div>

      </div>
    </div>
  );
}