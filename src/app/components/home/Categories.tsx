"use client";
import { FiActivity, FiHeart, FiDroplet, FiSun, FiSmile, FiShield } from "react-icons/fi";

const categories = [
  { name: "Pain Relief", icon: <FiDroplet />, delay: "0s", color: "rgba(239, 68, 68, 0.2)" },
  { name: "Diabetes", icon: <FiActivity />, delay: "1.2s", color: "rgba(16, 185, 129, 0.2)" },
  { name: "Heart Care", icon: <FiHeart />, delay: "0.5s", color: "rgba(236, 72, 153, 0.2)" },
  { name: "Skin Care", icon: <FiShield />, delay: "1.8s", color: "rgba(59, 130, 246, 0.2)" },
  { name: "Vitamins", icon: <FiSun />, delay: "0.9s", color: "rgba(245, 158, 11, 0.2)" },
  { name: "Baby Care", icon: <FiSmile />, delay: "2.5s", color: "rgba(168, 85, 247, 0.2)" },
];

export default function Categories() {
  return (
    <section className="py-24 bg-[#05070a] relative overflow-hidden">
      {/* Background Neon Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-emerald-500 font-bold tracking-[0.4em] uppercase text-xs mb-4">Discovery</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white italic">
            Shop by <span className="text-gray-600">Category.</span>
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              style={{ 
                animation: `antigravity 5s ease-in-out infinite`,
                animationDelay: cat.delay 
              }}
              className="group relative bg-white/5 border border-white/10 rounded-[2.5rem] p-8 flex flex-col items-center justify-center transition-all duration-700 hover:bg-white/[0.08] hover:border-emerald-500/50 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)] cursor-pointer"
            >
              <div 
                className="w-16 h-16 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center text-3xl text-white mb-6 transition-all duration-1000 group-hover:scale-125 group-hover:rotate-[360deg]"
                style={{ boxShadow: `inset 0 0 15px ${cat.color}` }}
              >
                {cat.icon}
              </div>

              <p className="font-bold text-gray-400 text-center text-sm tracking-wide group-hover:text-white transition-colors">
                {cat.name}
              </p>

              <div className="absolute inset-0 rounded-[2.5rem] border border-white/0 group-hover:border-emerald-500/20 group-hover:scale-110 transition-all duration-1000"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Inline Animation Keyframes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes antigravity {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.02); }
        }
      `}} />
    </section>
  );
}