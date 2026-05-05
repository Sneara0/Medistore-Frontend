"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiShield, FiTruck, FiClock, FiCheckCircle } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bento-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "expo.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-[#05070a] relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-0 left-0 w-full overflow-hidden opacity-[0.02] pointer-events-none select-none">
        <h1 className="text-[20vw] font-black leading-none -translate-y-1/2">RELIABLE</h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-emerald-500 font-bold tracking-[0.3em] uppercase text-sm mb-4">Why MediStore</h2>
          <h3 className="text-5xl md:text-7xl font-black text-white leading-tight">
            We’re redefining <br /> 
            <span className="text-gray-600">digital healthcare.</span>
          </h3>
        </div>

        {/* Bento Grid Design */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto">
          
          {/* Main Large Card */}
          <div className="bento-item md:col-span-7 bg-gradient-to-br from-emerald-600 to-emerald-900 rounded-[3rem] p-10 md:p-16 flex flex-col justify-between group overflow-hidden relative">
            <div className="relative z-10">
              <FiShield className="text-5xl text-emerald-200 mb-8" />
              <h4 className="text-4xl font-bold text-white mb-4">100% Genuine <br /> Medicines Only</h4>
              <p className="text-emerald-100/70 text-lg max-w-sm leading-relaxed">
                Every single product goes through a multi-stage quality check in our certified labs before reaching you.
              </p>
            </div>
            {/* Visual Decoration */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
          </div>

          {/* Small Top Card */}
          <div className="bento-item md:col-span-5 bg-white/5 border border-white/10 rounded-[3rem] p-10 hover:border-emerald-500/50 transition-all duration-500 flex flex-col justify-center">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6">
              <FiTruck className="text-3xl text-emerald-500" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-3">Lightning Fast Delivery</h4>
            <p className="text-gray-500 leading-relaxed">Express shipping that gets your essentials home in under 24 hours.</p>
          </div>

          {/* Bottom Left Card */}
          <div className="bento-item md:col-span-5 bg-white/5 border border-white/10 rounded-[3rem] p-10 hover:border-emerald-500/50 transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
               <FiClock className="text-3xl text-blue-400" />
               <span className="text-blue-400 font-bold tracking-widest text-xs uppercase">Always Open</span>
            </div>
            <h4 className="text-2xl font-bold text-white mb-3">24/7 Support</h4>
            <p className="text-gray-500 leading-relaxed">Professional pharmacists are just a click away to guide your health journey.</p>
          </div>

          {/* Bottom Right Card (Highlight) */}
          <div className="bento-item md:col-span-7 bg-[#0a0f1d] border border-emerald-500/20 rounded-[3rem] p-10 md:p-16 flex items-center gap-10 overflow-hidden group">
            <div className="flex-1">
              <h4 className="text-3xl font-bold text-white mb-4">Safe & Encrypted</h4>
              <p className="text-gray-500 mb-6">Your prescriptions and data are protected with bank-grade encryption.</p>
              <div className="flex gap-2">
                {[1, 2, 3].map(i => (
                  <FiCheckCircle key={i} className="text-emerald-500 text-xl" />
                ))}
              </div>
            </div>
            <div className="hidden lg:block w-40 h-40 bg-emerald-500/10 rounded-full border border-emerald-500/20 animate-pulse"></div>
          </div>

        </div>
      </div>
    </section>
  );
}