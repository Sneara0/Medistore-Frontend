"use client";
import { FiShield, FiTruck, FiCreditCard, FiHeadphones } from "react-icons/fi";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FiShield />,
      title: "Verified Sellers",
      desc: "Only licensed pharmacies allowed.",
      delay: "0s",
      color: "rgba(16, 185, 129, 0.2)", // Emerald
    },
    {
      icon: <FiTruck />,
      title: "Fast Delivery",
      desc: "Quick & safe delivery nationwide.",
      delay: "1.5s",
      color: "rgba(59, 130, 246, 0.2)", // Blue
    },
    {
      icon: <FiCreditCard />,
      title: "Secure Payment",
      desc: "Cash on Delivery supported.",
      delay: "0.8s",
      color: "rgba(168, 85, 247, 0.2)", // Purple
    },
    {
      icon: <FiHeadphones />,
      title: "24/7 Support",
      desc: "We are here whenever you need.",
      delay: "2.2s",
      color: "rgba(249, 115, 22, 0.2)", // Orange
    },
  ];

  return (
    <section className="py-32 bg-[#05070a] relative overflow-hidden">
      {/* Antigravity Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-emerald-500 rounded-full animate-ping opacity-20"></div>
        <div className="absolute bottom-1/4 right-10 w-3 h-3 bg-blue-500 rounded-full animate-bounce opacity-20"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-purple-500 rounded-full animate-pulse opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-emerald-500 font-bold tracking-[0.5em] uppercase text-xs mb-4">The MediStore Standard</h2>
          <h3 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter">
            Antigravity <span className="text-gray-700">Health.</span>
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              style={{ 
                animation: `floating 6s ease-in-out infinite`,
                animationDelay: f.delay 
              }}
              className="group relative p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-700 hover:bg-white/[0.08] hover:border-emerald-500/50 hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.3)]"
            >
              {/* Animated Icon Glow */}
              <div 
                className="w-20 h-20 rounded-[2rem] bg-black/40 border border-white/10 flex items-center justify-center text-4xl text-white mb-8 relative z-10 group-hover:scale-125 group-hover:rotate-[360deg] transition-all duration-1000 shadow-2xl"
                style={{ boxShadow: `inset 0 0 20px ${f.color}` }}
              >
                {f.icon}
              </div>

              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                {f.title}
              </h4>
              <p className="text-gray-500 leading-relaxed text-sm">
                {f.desc}
              </p>

              {/* Orbital Ring Animation */}
              <div className="absolute top-10 right-10 w-12 h-12 border border-white/5 rounded-full group-hover:border-emerald-500/50 group-hover:scale-[2.5] transition-all duration-1000"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Custom Animation Keyframes */}
      <style jsx global>{`
        @keyframes floating {
          0% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(1deg); }
          66% { transform: translateY(10px) rotate(-1deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
      `}</style>
    </section>
  );
}