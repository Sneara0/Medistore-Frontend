"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight, FiCheckCircle, FiPlay, FiPlus } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ১. টেক্সট মাস্কিং ও রিভিল এনিমেশন
      gsap.from(".reveal-text", {
        y: 120,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
      });

      // ২. ইমেজের জন্য থ্রি-ডি ফিল (Tilt effect logic)
      gsap.from(imageRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
        delay: 0.5
      });

      // ৩. ব্যাকগ্রাউন্ডের ব্লার সার্কেলগুলোর মুভমেন্ট
      gsap.to(".blob", {
        x: "random(-50, 50)",
        y: "random(-50, 50)",
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[75vh] min-h-[650px] flex items-center bg-[#05070a] overflow-hidden text-white"
    >
      {/* Background Blobs - আরও প্রিমিয়াম লুকের জন্য */}
      <div className="blob absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-emerald-500/20 blur-[120px] rounded-full"></div>
      <div className="blob absolute bottom-[-10%] right-[0%] w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <div className="space-y-8">
          <div className="reveal-text flex items-center gap-3 bg-white/5 border border-white/10 w-fit px-4 py-2 rounded-full backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Available 24/7 Worldwide</span>
          </div>

          <h1 className="reveal-text text-6xl md:text-8xl font-black leading-[0.95] tracking-tighter">
            Smart Care <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
              Smart Life.
            </span>
          </h1>

          <p className="reveal-text text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed font-light">
            Revolutionizing how you access healthcare. Order verified medicines 
            with a single tap and get them delivered in <span className="text-white font-medium">record time.</span>
          </p>

          <div className="reveal-text flex flex-wrap gap-6 items-center">
            <Link
              href="/shop"
              className="group relative px-10 py-5 bg-emerald-500 text-black font-black rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                GET STARTED <FiArrowRight className="text-xl group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>

            <button className="flex items-center gap-3 font-bold group">
              <span className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <FiPlay fill="currentColor" />
              </span>
              HOW IT WORKS
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="reveal-text grid grid-cols-3 gap-8 pt-10 border-t border-white/10">
             <div>
                <h3 className="text-2xl font-bold">10k+</h3>
                <p className="text-gray-500 text-sm">Active Users</p>
             </div>
             <div>
                <h3 className="text-2xl font-bold">500+</h3>
                <p className="text-gray-500 text-sm">Pharmacies</p>
             </div>
             <div>
                <h3 className="text-2xl font-bold">4.9/5</h3>
                <p className="text-gray-500 text-sm">Rating</p>
             </div>
          </div>
        </div>

        {/* Right Content - Advanced Visuals */}
        <div className="relative hidden lg:block" ref={imageRef}>
          <div className="relative z-10 w-[500px] h-[550px] rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl group">
             <img
                src="https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=800"
                alt="Medicine Delivery"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-transparent"></div>
          </div>

          {/* Floating Glass Card */}
          <div className="absolute -bottom-10 -left-10 p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl z-20 animate-bounce-slow">
             <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-black">
                   <FiCheckCircle size={24} />
                </div>
                <div>
                   <p className="font-bold text-white">Quality Checked</p>
                   <p className="text-xs text-gray-400">Lab Tested Medicines</p>
                </div>
             </div>
             <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#05070a] bg-gray-800 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-[#05070a] bg-emerald-500 flex items-center justify-center text-black text-xs font-bold">
                   <FiPlus />
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Modern Scroll Down Indicator */}
      <div className="absolute bottom-10 right-12 flex flex-col items-center gap-4">
          <span className="[writing-mode:vertical-lr] text-[10px] tracking-[0.3em] font-bold text-gray-500">SCROLL TO EXPLORE</span>
          <div className="w-px h-20 bg-gradient-to-b from-emerald-500 to-transparent"></div>
      </div>
    </section>
  );
}