"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaPaperPlane } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans overflow-x-hidden">
      
      {/* --- Premium Hero Section --- */}
      <section className="relative h-[60vh] flex items-center justify-center bg-[#022c22] text-white py-20 px-6 overflow-hidden">
        {/* Decorative Background Blur */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-green-600 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black uppercase tracking-[0.4em] bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-full">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight italic">
            How Can We <br />
            <span className="text-emerald-400 font-extrabold not-italic uppercase">Help You?</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium">
            Our dedicated team is here to ensure your healthcare journey is seamless. Reach out for any inquiries or support.
          </p>
        </div>
      </section>

      {/* --- Contact Grid Section --- */}
      <section className="max-w-7xl mx-auto py-24 px-6 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* 1. Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 hover:border-emerald-500/30 transition-all duration-500 group">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-xl mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                <FaMapMarkerAlt />
              </div>
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Location</h3>
              <p className="text-lg font-bold text-emerald-950">123 MediStore Street, Dhaka, Bangladesh</p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 hover:border-emerald-500/30 transition-all duration-500 group">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-xl mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                <FaPhoneAlt />
              </div>
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Support Line</h3>
              <p className="text-lg font-bold text-emerald-950">+880 1832-346270</p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 hover:border-emerald-500/30 transition-all duration-500 group">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-xl mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                <FaEnvelope />
              </div>
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Official Email</h3>
              <p className="text-lg font-bold text-emerald-950">support@medistore.com</p>
            </div>
          </div>

          {/* 2. Interactive Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-[3rem] shadow-2xl p-8 md:p-16 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="mb-10">
              <h2 className="text-3xl font-black text-emerald-950 uppercase italic tracking-tighter mb-2">Send a Message</h2>
              <p className="text-gray-500 text-sm font-medium">We usually respond within 2-4 business hours.</p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl text-sm outline-none focus:border-emerald-500 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl text-sm outline-none focus:border-emerald-500 transition-all" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Your Message</label>
                <textarea rows={5} placeholder="How can we help?" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-3xl text-sm outline-none focus:border-emerald-500 transition-all resize-none"></textarea>
              </div>
              <button className="md:col-span-2 group w-full bg-emerald-600 text-white font-black uppercase text-[12px] tracking-[0.2em] py-5 rounded-2xl hover:bg-emerald-500 transition-all duration-300 shadow-xl shadow-emerald-600/20 flex items-center justify-center gap-3">
                Send Inquiry <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- Call to Action --- */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-emerald-950 rounded-[4rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 italic uppercase tracking-tighter">
            Quality Medicines, <br />
            <span className="text-emerald-400">Delivered Safely.</span>
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto text-sm leading-relaxed">
            Join thousands of happy customers who trust MediStore for their monthly healthcare needs.
          </p>
          <Link
            href="/shop"
            className="inline-block px-12 py-5 bg-white text-emerald-950 font-black uppercase text-[12px] tracking-[0.2em] rounded-2xl hover:bg-emerald-400 hover:text-white transition-all duration-500 shadow-xl"
          >
            Go to Shop <FaArrowRight className="inline-block ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}