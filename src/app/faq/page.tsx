"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaChevronDown, FaQuestionCircle, FaSearch } from 'react-icons/fa';

const faqData = [
  {
    question: "How do I upload my prescription?",
    answer: "You can upload your prescription during the checkout process. Simply click the 'Upload Prescription' button and select a clear image or PDF of your valid medical document."
  },
  {
    question: "What is the estimated delivery time?",
    answer: "For locations within Dhaka, we offer same-day delivery if ordered before 2 PM. For outside Dhaka, delivery typically takes 2-3 business days."
  },
  {
    question: "Are the medicines authentic?",
    answer: "Absolutely. MediStore sources all medications directly from certified pharmaceutical manufacturers and authorized distributors to ensure 100% authenticity."
  },
  {
    question: "Can I return an order?",
    answer: "Yes, you can initiate a return within 7 days of delivery, provided the safety seals are intact. Please refer to our Returns & Refunds page for more details."
  }
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#05070a] text-white selection:bg-emerald-500/30 font-sans">
      
      {/* --- Ambient Background --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto py-24 px-6">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-20 animate-dashboard">
          <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black uppercase tracking-[0.4em] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full">
            Help Center
          </span>
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-8 uppercase">
            Common <span className="text-gray-800 not-italic font-extrabold">Queries.</span>
          </h1>
          
          {/* Search Bar Input */}
          <div className="relative max-w-xl mx-auto mt-12">
            <input 
              type="text" 
              placeholder="Search for answers..." 
              className="w-full bg-white/5 border border-white/10 p-5 pl-14 rounded-3xl text-sm outline-none focus:border-emerald-500 transition-all font-medium"
            />
            <FaSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* --- FAQ Accordion --- */}
        <div className="space-y-4 animate-dashboard" style={{ animationDelay: '0.2s' }}>
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`glass-card overflow-hidden transition-all duration-500 ${activeIndex === index ? 'border-emerald-500/30 bg-white/5' : 'hover:border-white/20'}`}
            >
              <button 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-8 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-4">
                  <FaQuestionCircle className={`text-xl transition-colors ${activeIndex === index ? 'text-emerald-500' : 'text-gray-600 group-hover:text-emerald-400'}`} />
                  <span className="text-sm md:text-lg font-black uppercase italic tracking-tight">{item.question}</span>
                </div>
                <FaChevronDown className={`transition-transform duration-500 ${activeIndex === index ? 'rotate-180 text-emerald-500' : 'text-gray-600'}`} />
              </button>
              
              <div className={`transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-8 pt-0 text-gray-400 text-sm leading-relaxed font-medium">
                  <div className="h-[1px] w-full bg-white/5 mb-6"></div>
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- CTA Section --- */}
        <div className="mt-24 glass-card p-12 text-center border-dashed border-emerald-500/20 animate-dashboard" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-white font-black uppercase text-xs tracking-[0.3em] mb-4">Still have questions?</h3>
          <p className="text-gray-500 text-sm mb-10 font-medium italic">Our medical support team is available 24/7 to assist you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="neon-button">
              Contact Support
            </Link>
            <Link href="mailto:support@medistore.com" className="px-10 py-4 bg-white/5 border border-white/10 text-white font-black uppercase text-[10px] tracking-widest rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center">
              Email Us
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}