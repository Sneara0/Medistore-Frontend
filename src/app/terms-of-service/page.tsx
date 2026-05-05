"use client";
import React from 'react';
import Link from 'next/link';
import { FaFileContract, FaGavel, FaHandshake, FaExclamationTriangle } from 'react-icons/fa';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#05070a] text-white selection:bg-emerald-500/30 font-sans">
      
      {/* --- Ambient Background --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto py-24 px-6">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-24 animate-dashboard">
          <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black uppercase tracking-[0.4em] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full">
            Legal Framework
          </span>
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-8 uppercase">
            Terms <span className="text-gray-800 not-italic font-extrabold">&</span> Service.
          </h1>
          <div className="h-1 w-24 bg-emerald-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 font-bold text-sm tracking-widest uppercase">Effective Date: May 05, 2026</p>
        </div>

        {/* --- Content Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-dashboard" style={{ animationDelay: '0.2s' }}>
          
          {/* Section 1: Agreement */}
          <div className="glass-card p-10 hover:bg-white/[0.04] transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 text-xl">
                <FaHandshake />
              </div>
              <h2 className="text-xl font-black uppercase italic tracking-tight">User Agreement</h2>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              By accessing MediStore, you agree to comply with our professional standards. Users must be at least 18 years of age to purchase prescription-grade medications.
            </p>
          </div>

          {/* Section 2: Intellectual Property */}
          <div className="glass-card p-10 hover:bg-white/[0.04] transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 text-xl">
                <FaFileContract />
              </div>
              <h2 className="text-xl font-black uppercase italic tracking-tight">Ownership</h2>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              All software, UI designs, and medical databases utilized on this platform are the exclusive intellectual property of MediStore and its developers.
            </p>
          </div>

          {/* Section 3: Limitations */}
          <div className="glass-card p-10 hover:bg-white/[0.04] transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-500 text-xl">
                <FaExclamationTriangle />
              </div>
              <h2 className="text-xl font-black uppercase italic tracking-tight">Liability</h2>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              MediStore acts as a digital pharmacy bridge. We are not liable for complications arising from misuse of medication without professional doctor consultation.
            </p>
          </div>

          {/* Section 4: Governing Law */}
          <div className="glass-card p-10 hover:bg-white/[0.04] transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500 text-xl">
                <FaGavel />
              </div>
              <h2 className="text-xl font-black uppercase italic tracking-tight">Jurisdiction</h2>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              These terms are governed by the laws of Bangladesh. Any disputes will be settled within the exclusive jurisdiction of the Dhaka courts.
            </p>
          </div>

        </div>

        {/* --- Full Width Disclaimer --- */}
        <div className="mt-8 glass-card p-12 text-center border-dashed border-emerald-500/20 animate-dashboard" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-emerald-400 font-black uppercase text-xs tracking-[0.3em] mb-6">Medical Disclaimer</h3>
          <p className="text-gray-500 text-sm max-w-3xl mx-auto leading-loose italic">
            "The information provided on MediStore is for educational purposes only. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition."
          </p>
        </div>

        {/* --- Footer Action --- */}
        <div className="mt-24 flex flex-col items-center gap-8">
          <div className="flex gap-4">
            <Link href="/" className="neon-button">
              Accept & Return
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black uppercase text-[10px] tracking-widest rounded-2xl hover:bg-white/10 transition-all">
              Contact Legal
            </Link>
          </div>
          <p className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em]">
            MediStore Operations © 2026 
          </p>
        </div>

      </div>
    </div>
  );
}