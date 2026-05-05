"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaMapMarkerAlt, FaRegClock, FaTag } from "react-icons/fa";

// ১. স্ট্যাটিক ডাটা (পরবর্তীতে Prisma/PostgreSQL থেকে আসবে)
const products = [
  {
    id: "1",
    title: "Napa Extend",
    desc: "Long-lasting relief from fever and chronic pain. Suitable for adults.",
    price: "$15.50",
    date: "Exp: 10/2026",
    rating: 4.9,
    location: "Dhaka, BD",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Ace Plus",
    desc: "Fast-acting formula for headache and muscle pain management.",
    price: "$10.00",
    date: "Exp: 08/2026",
    rating: 4.7,
    location: "Chittagong, BD",
    image: "https://images.unsplash.com/photo-1576091160550-2173dad99978?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Seclo 20mg",
    desc: "Effective treatment for acidity and gastric problems.",
    price: "$18.00",
    date: "Exp: 12/2026",
    rating: 4.8,
    location: "Sylhet, BD",
    image: "https://images.unsplash.com/photo-1471864190281-ad5f9f81ce4c?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Fexo 120",
    desc: "Non-drowsy antihistamine for quick allergy relief.",
    price: "$12.20",
    date: "Exp: 05/2027",
    rating: 4.6,
    location: "Rajshahi, BD",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=500&auto=format&fit=crop",
  },
];

const ProductListing = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ডাটা লোড হওয়ার সিমুলেশন (২ সেকেন্ড)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-[#05070a] relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-emerald-500 font-bold tracking-[0.3em] uppercase text-xs mb-2">
            Explore Pharmacy
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-white italic">
            Featured <span className="text-gray-700">Medicines.</span>
          </h3>
        </div>

        {/* Grid Container (Desktop: 4 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {loading
            ? Array(4).fill(0).map((_, idx) => <SkeletonCard key={idx} />)
            : products.map((product) => <ProductCard key={product.id} product={product} />)
          }
        </div>
      </div>
    </section>
  );
};

// --- ২. ইন্ডিভিজুয়াল কার্ড কম্পোনেন্ট ---
const ProductCard = ({ product }: { product: any }) => (
  <div className="flex flex-col h-full bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-emerald-500/40 transition-all duration-500 group">
    {/* Image wrapper */}
    <div className="relative h-60 w-full overflow-hidden">
      <div className="absolute inset-0 bg-emerald-500/5 group-hover:bg-transparent z-10 transition-all" />
      <Image 
        src={product.image} 
        alt={product.title} 
        fill 
        className="object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
        <span className="text-emerald-400 text-xs font-bold">{product.price}</span>
      </div>
    </div>

    {/* Details wrapper */}
    <div className="p-8 flex flex-col flex-grow">
      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
        {product.title}
      </h4>
      <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
        {product.desc}
      </p>

      {/* Meta Info Section */}
      <div className="space-y-3 pt-6 border-t border-white/5 mt-auto">
        <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-gray-500 font-bold">
          <span className="flex items-center gap-2"><FaRegClock className="text-emerald-500" /> {product.date}</span>
          <span className="flex items-center gap-1"><FaStar className="text-yellow-500" /> {product.rating}</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-500 font-bold">
          <FaMapMarkerAlt className="text-emerald-500" /> {product.location}
        </div>
      </div>

      {/* Action Button */}
      <Link 
        href={`/product/${product.id}`}
        className="mt-6 w-full py-4 text-center bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-xs uppercase tracking-widest hover:bg-emerald-600 hover:border-emerald-600 transition-all duration-300"
      >
        View Details
      </Link>
    </div>
  </div>
);

// --- ৩. স্কেলিটন লোডার কম্পোনেন্ট ---
const SkeletonCard = () => (
  <div className="flex flex-col h-full bg-white/5 border border-white/5 rounded-[2.5rem] p-8 animate-pulse">
    <div className="h-44 bg-white/10 rounded-3xl mb-6 w-full" />
    <div className="h-6 bg-white/10 rounded-lg w-3/4 mb-4" />
    <div className="h-4 bg-white/10 rounded-lg w-full mb-2" />
    <div className="h-4 bg-white/10 rounded-lg w-2/3 mb-10" />
    <div className="mt-auto flex flex-col gap-4">
      <div className="h-2 bg-white/10 rounded w-full" />
      <div className="h-14 bg-white/10 rounded-2xl w-full" />
    </div>
  </div>
);

export default ProductListing;