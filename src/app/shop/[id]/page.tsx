"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getAllMedicines, Medicine } from "@/lib/medicine";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaRegClock, FaChevronRight, FaBoxOpen } from "react-icons/fa";
import ProductCard from "@/app/components/ProductCard";


export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Medicine | null>(null);
  const [relatedItems, setRelatedItems] = useState<Medicine[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allData = await getAllMedicines();
        const current = allData.find((m) => m.id === id);
        
        if (current) {
          setProduct(current);
          // একই কোম্পানির অন্য মেডিসিনগুলো Related Items হিসেবে ফিল্টার করা
          const related = allData.filter((m) => m.company === current.company && m.id !== id);
          setRelatedItems(related.slice(0, 4));
        }
      } catch (err) {
        console.error("Error fetching details", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <div className="min-h-screen bg-[#05070a] animate-pulse" />;
  if (!product) return <div className="min-h-screen bg-[#05070a] text-white p-20">Product not found.</div>;

  return (
    <div className="min-h-screen bg-[#05070a] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-500 mb-12">
          <Link href="/shop" className="hover:text-emerald-500">Shop</Link>
          <FaChevronRight className="text-[8px]" />
          <span className="text-white font-bold">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* 1. Media Section */}
          <div className="space-y-4">
            <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden border border-white/10 bg-black/40">
              <Image 
                src={product.image || "/placeholder-medicine.png"} 
                alt={product.name} 
                fill 
                className="object-contain p-12"
              />
            </div>
            {/* Multiple Images Thumbnails (Static for UI) */}
            <div className="grid grid-cols-4 gap-4">
               {[1, 2, 3, 4].map((i) => (
                 <div key={i} className="h-24 bg-white/5 border border-white/10 rounded-2xl cursor-pointer hover:border-emerald-500/50 transition-all overflow-hidden relative">
                   <Image src={product.image || "/placeholder-medicine.png"} alt="thumb" fill className="object-cover opacity-50" />
                 </div>
               ))}
            </div>
          </div>

          {/* 2. Key Information Section */}
          <div className="flex flex-col">
            <h2 className="text-emerald-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-4">
              {product.company}
            </h2>
            <h1 className="text-5xl font-black text-white italic mb-6 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-6 mb-8">
               <div className="flex items-center gap-2 bg-yellow-500/10 text-yellow-500 px-4 py-1.5 rounded-full border border-yellow-500/20 text-xs font-bold">
                 <FaStar /> 4.9 (120 Reviews)
               </div>
               <div className="text-gray-500 text-xs uppercase tracking-widest font-bold">
                 SKU: MED-{product.id.slice(0, 5)}
               </div>
            </div>

            <div className="text-4xl font-bold text-white mb-10">
              ৳ {product.price}
              <span className="text-sm text-gray-500 ml-3 font-normal line-through">৳ {product.price + 5}</span>
            </div>

            {/* Specifications Section */}
            <div className="grid grid-cols-2 gap-4 mb-10">
               <div className="bg-white/5 p-5 rounded-3xl border border-white/5">
                 <FaRegClock className="text-emerald-500 mb-2" />
                 <p className="text-[10px] text-gray-500 uppercase font-black">Stock Status</p>
                 <p className="text-white font-bold">{product.stock > 0 ? "In Stock" : "Out of Stock"}</p>
               </div>
               <div className="bg-white/5 p-5 rounded-3xl border border-white/5">
                 <FaBoxOpen className="text-emerald-500 mb-2" />
                 <p className="text-[10px] text-gray-500 uppercase font-black">Available Qty</p>
                 <p className="text-white font-bold">{product.stock} Units</p>
               </div>
            </div>

            <button className="w-full py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-black uppercase tracking-widest rounded-2xl transition-all shadow-xl shadow-emerald-600/20">
              Add To Cart
            </button>
          </div>
        </div>

        {/* 3. Description & Overview Section */}
        <div className="border-t border-white/5 pt-20 mb-32">
          <h3 className="text-3xl font-black text-white italic mb-10 tracking-tighter">
            Description <span className="text-gray-700">& Overview.</span>
          </h3>
          <div className="max-w-3xl">
            <p className="text-gray-400 leading-relaxed text-lg italic mb-8">
              {product.description || "This product is formulated with high-quality ingredients to ensure maximum effectiveness. It has been tested for safety and compliance with international healthcare standards."}
            </p>
            <ul className="space-y-4 text-gray-500 text-sm">
               <li className="flex gap-4">
                 <span className="text-emerald-500 font-bold">01.</span> Fast-acting formula for immediate relief.
               </li>
               <li className="flex gap-4">
                 <span className="text-emerald-500 font-bold">02.</span> Approved by health authorities and dermatologists.
               </li>
               <li className="flex gap-4">
                 <span className="text-emerald-500 font-bold">03.</span> No harmful chemicals or synthetic additives.
               </li>
            </ul>
          </div>
        </div>

        {/* 4. Related Items Section */}
        {relatedItems.length > 0 && (
          <div className="border-t border-white/5 pt-20">
            <h3 className="text-3xl font-black text-white italic mb-12 tracking-tighter">
              Related <span className="text-gray-700">Items.</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedItems.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}