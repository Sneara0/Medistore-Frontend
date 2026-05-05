import Image from "next/image";
import Link from "next/link";
import { FaStar, FaRegClock } from "react-icons/fa";
import { Medicine } from "@/lib/medicine";

export default function ProductCard({ product }: { product: Medicine }) {
  return (
    <div className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-emerald-500/40 transition-all duration-500 shadow-2xl">
      <div className="relative h-60 w-full overflow-hidden bg-black/40">
        <Image 
          src={product.image || "/placeholder-medicine.png"} 
          alt={product.name} 
          fill 
          className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute top-5 right-5 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
          <span className="text-emerald-400 text-sm font-bold">৳ {product.price}</span>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h4 className="text-2xl font-bold text-white mb-1 line-clamp-1 group-hover:text-emerald-400 transition-colors">
          {product.name}
        </h4>
        <p className="text-gray-600 text-[10px] font-black uppercase tracking-widest mb-4">
          {product.company}
        </p>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2 italic">
          {product.description || "High-quality healthcare solution."}
        </p>

        <div className="mt-auto pt-6 border-t border-white/5 space-y-4">
          <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-gray-500 font-bold">
            <span className="flex items-center gap-2">
              <FaRegClock className="text-emerald-500" /> Stock: {product.stock}
            </span>
            <span className="flex items-center gap-1">
              <FaStar className="text-yellow-500" /> 4.9
            </span>
          </div>
          
          <Link 
            href={`/shop/${product.id}`}
            className="block w-full py-4 text-center bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-xs uppercase tracking-widest hover:bg-emerald-600 hover:border-emerald-600 transition-all duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}