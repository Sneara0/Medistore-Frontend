"use client";

import { useEffect, useState } from "react";
import { getAllMedicines, Medicine } from "@/lib/medicine";
import Link from "next/link";
import Image from "next/image";
import { FaStar, FaRegClock, FaSearch, FaFilter, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ShopPage() {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [filteredMedicines, setFilteredMedicines] = useState<Medicine[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // --- Filtering & Sorting State ---
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(500); // Default max price
  const [sortBy, setSortBy] = useState("default");

  // --- Pagination State ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await getAllMedicines();
        let data: Medicine[] = [];
        
        if (Array.isArray(response)) {
          data = response;
        } else if (response && typeof response === 'object' && Array.isArray((response as any).data)) {
          data = (response as any).data;
        }
        
        setMedicines(data);
        setFilteredMedicines(data);
      } catch (err: any) {
        setError(err.message || "Failed to load medicines");
      } finally {
        setTimeout(() => setLoading(false), 800);
      }
    };
    fetchMedicines();
  }, []);

  // --- Filter & Sort Logic ---
  useEffect(() => {
    let result = [...medicines];

    // 1. Search Logic
    if (searchTerm) {
      result = result.filter((m) =>
        m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.company.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // 2. Category Filter (Field 1)
    if (selectedCategory !== "All") {
      result = result.filter((m) => m.category?.name === selectedCategory);
    }

    // 3. Price Filter (Field 2)
    result = result.filter((m) => m.price <= priceRange);

    // 4. Sorting Logic
    if (sortBy === "price-low") result.sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") result.sort((a, b) => b.price - a.price);
    if (sortBy === "name") result.sort((a, b) => a.name.localeCompare(b.name));

    setFilteredMedicines(result);
    setCurrentPage(1); // Reset to page 1 on filter change
  }, [searchTerm, selectedCategory, priceRange, sortBy, medicines]);

  // --- Pagination Calculation ---
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredMedicines.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredMedicines.length / itemsPerPage);

  // Get Unique Categories
  const categories = ["All", ...Array.from(new Set(medicines.map((m) => m.category?.name).filter(Boolean)))];

  if (error) return (
    <div className="min-h-screen bg-[#05070a] flex items-center justify-center">
      <div className="text-center">
        <p className="text-red-500 font-bold text-xl mb-4">{error}</p>
        <button onClick={() => window.location.reload()} className="text-emerald-500 underline uppercase tracking-widest text-sm">Retry Loading</button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#05070a] pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="w-full md:w-2/3">
            <h2 className="text-emerald-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-3">MediStore Pharmacy</h2>
            <h1 className="text-5xl md:text-6xl font-black text-white italic tracking-tighter mb-8">
              Explore <span className="text-gray-700">Collection.</span>
            </h1>
            
            {/* Search Bar */}
            <div className="relative group max-w-xl">
              <FaSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-emerald-500 transition-colors" />
              <input 
                type="text"
                placeholder="Search by medicine or brand..."
                className="w-full bg-white/5 border border-white/10 py-5 pl-16 pr-6 rounded-2xl text-white outline-none focus:border-emerald-500/50 transition-all italic text-sm"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="flex gap-4 w-full md:w-auto">
             <select 
               onChange={(e) => setSortBy(e.target.value)}
               className="bg-white/5 border border-white/10 p-4 rounded-xl text-white text-[10px] font-black uppercase tracking-widest outline-none cursor-pointer hover:border-emerald-500/50 transition-all"
             >
               <option value="default" className="bg-[#05070a]">Sort By</option>
               <option value="price-low" className="bg-[#05070a]">Price: Low to High</option>
               <option value="price-high" className="bg-[#05070a]">Price: High to Low</option>
               <option value="name" className="bg-[#05070a]">Name: A-Z</option>
             </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-64 space-y-12">
            <div>
              <h4 className="text-white font-black uppercase text-[10px] tracking-[0.3em] mb-6 flex items-center gap-2">
                <FaFilter className="text-emerald-500" /> Category
              </h4>
              <div className="flex flex-wrap lg:flex-col gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat!)}
                    className={`text-left px-5 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                      selectedCategory === cat ? "bg-emerald-500 text-white" : "bg-white/5 text-gray-500 hover:bg-white/10"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-black uppercase text-[10px] tracking-[0.3em] mb-6">Price Range: ৳{priceRange}</h4>
              <input 
                type="range" min="0" max="1000" step="10"
                value={priceRange}
                onChange={(e) => setPriceRange(parseInt(e.target.value))}
                className="w-full accent-emerald-500 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between mt-2 text-[10px] font-bold text-gray-600">
                <span>৳0</span>
                <span>৳1000</span>
              </div>
            </div>
          </aside>

          {/* Main Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {loading ? (
                Array(6).fill(0).map((_, idx) => <SkeletonCard key={idx} />)
              ) : currentItems.length > 0 ? (
                currentItems.map((med) => (
                  <ProductCard key={med.id} product={med} />
                ))
              ) : (
                <div className="col-span-full text-center py-20 border border-dashed border-white/10 rounded-[2.5rem]">
                  <p className="text-gray-500 italic uppercase tracking-widest text-[10px] font-bold">
                    No results match your filters.
                  </p>
                </div>
              )}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-6 mt-20">
                <button 
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(prev => prev - 1)}
                  className="p-5 rounded-2xl bg-white/5 text-white disabled:opacity-20 hover:bg-emerald-600 transition-all border border-white/10"
                >
                  <FaChevronLeft />
                </button>
                <span className="text-white font-black italic text-sm tracking-tighter">
                  Page <span className="text-emerald-500">{currentPage}</span> / {totalPages}
                </span>
                <button 
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(prev => prev + 1)}
                  className="p-5 rounded-2xl bg-white/5 text-white disabled:opacity-20 hover:bg-emerald-600 transition-all border border-white/10"
                >
                  <FaChevronRight />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Product Card & Skeleton Card Components are same as before ---
const ProductCard = ({ product }: { product: Medicine }) => (
  <div className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-emerald-500/40 transition-all duration-500 shadow-2xl">
    <div className="relative h-64 w-full overflow-hidden bg-black/40">
      <Image 
        src={product.image || "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=500&q=80"} 
        alt={product.name} 
        fill 
        className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
      />
      <div className="absolute top-5 right-5 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 z-10">
        <span className="text-emerald-400 text-sm font-bold">৳ {product.price}</span>
      </div>
    </div>

    <div className="p-8 flex flex-col flex-grow">
      <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors line-clamp-1">
        {product.name}
      </h4>
      <p className="text-gray-600 text-[10px] font-black uppercase tracking-widest mb-4">
        {product.company}
      </p>
      
      <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2 italic">
        {product.description || "Trusted healthcare solution for your daily wellness."}
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
        
        <div className={`text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-lg border w-fit ${
          product.stock > 0 
          ? "text-emerald-500 border-emerald-500/20 bg-emerald-500/5" 
          : "text-red-500 border-red-500/20 bg-red-500/5"
        }`}>
          {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </div>
      </div>

      <Link 
        href={`/shop/${product.id}`}
        className="mt-8 block w-full py-4 text-center bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-xs uppercase tracking-widest hover:bg-emerald-600 hover:border-emerald-600 transition-all duration-300"
      >
        View Details
      </Link>
    </div>
  </div>
);

const SkeletonCard = () => (
  <div className="flex flex-col h-full bg-white/5 border border-white/5 rounded-[2.5rem] p-8 animate-pulse shadow-2xl">
    <div className="h-52 bg-white/10 rounded-3xl mb-6 w-full" />
    <div className="h-7 bg-white/10 rounded-lg w-3/4 mb-4" />
    <div className="h-4 bg-white/10 rounded-lg w-full mb-6" />
    <div className="mt-auto pt-6 border-t border-white/5 space-y-4">
      <div className="flex justify-between">
        <div className="h-3 bg-white/5 rounded w-1/3" />
        <div className="h-3 bg-white/5 rounded w-1/4" />
      </div>
      <div className="h-14 bg-white/10 rounded-2xl w-full" />
    </div>
  </div>
);