"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Active Customers", value: "15k+" },
  { label: "Verified Pharmacies", value: "450+" },
  { label: "Medicines Available", value: "8k+" },
  { label: "Delivery Cities", value: "120+" },
];

export default function Statistics() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-card", {
        scrollTrigger: {
          trigger: root.current,
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="py-20 bg-[#0a0f1d] border-y border-white/5">
      <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card text-center group">
            <h2 className="text-4xl md:text-6xl font-black text-white group-hover:text-emerald-400 transition-colors duration-500">
              {stat.value}
            </h2>
            <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mt-2 font-bold">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}