"use client";

import { useEffect, useState } from "react";
import { getAllMedicines } from "@/lib/medicine";
import { getAllCategories } from "@/lib/category";
import Link from "next/link";

type Medicine = {
  id: string;
  name: string;
  company: string;
  category?: string;
  price: number;
  stock: number;
  image: string;
};

type Category = { id: string; name: string };

export default function ShopPage() {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [filtered, setFiltered] = useState<Medicine[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch medicines & categories
  useEffect(() => {
    const fetchData = async () => {
      try {
        const medData = await getAllMedicines();
        const catData = await getAllCategories();

        setMedicines(medData.data);
        setFiltered(medData.data);
        setCategories(catData.data);
      } catch (err: any) {
        setError(err.message || "Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter logic
  useEffect(() => {
    let temp = medicines;

    if (selectedCategory) {
      temp = temp.filter((m) => m.category === selectedCategory);
    }

    if (search) {
      temp = temp.filter((m) =>
        m.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(temp);
  }, [selectedCategory, search, medicines]);

  if (loading)
    return (
      <p className="text-center mt-32 text-lg text-gray-500 animate-pulse">
        Loading medicines...
      </p>
    );

  if (error)
    return (
      <p className="text-center mt-32 text-lg text-red-500 font-semibold">
        {error}
      </p>
    );

  return (
    // ✅ Navbar fixed/sticky থাকলে pt-20 দিতে হবে
    <div className="min-h-screen bg-gray-50 pt-20">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-14 text-center text-white rounded-b-3xl shadow-md">
        <h1 className="text-4xl font-extrabold tracking-tight">
          MediStore Shop 💊
        </h1>
        <p className="mt-2 text-lg text-blue-100">
          Browse medicines, filter categories & order easily
        </p>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        
        {/* Filter Section */}
        <div className="bg-white shadow-md rounded-2xl p-5 flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-10">
          
          {/* Category Filter */}
          <select
            className="w-full md:w-64 border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">🌿 All Categories</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>

          {/* Search Input */}
          <input
            type="text"
            placeholder="🔍 Search medicines..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-80 border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Medicines Grid */}
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 text-lg mt-20">
            ❌ No medicines found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filtered.map((med) => (
              <div
                key={med.id}
                className="bg-white rounded-2xl shadow-sm border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Image */}
                <img
                  src={med.image}
                  alt={med.name}
                  className="w-full h-52 object-cover"
                />

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                  {/* Category Badge */}
                  {med.category && (
                    <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full w-fit mb-2">
                      {med.category}
                    </span>
                  )}

                  <h3 className="text-lg font-bold text-gray-800">
                    {med.name}
                  </h3>

                  <p className="text-sm text-gray-500 mb-3">
                    {med.company}
                  </p>

                  {/* Price + Stock */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-extrabold text-blue-600">
                      ৳ {med.price}
                    </span>

                    {med.stock > 0 ? (
                      <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                        In Stock
                      </span>
                    ) : (
                      <span className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full">
                        Out of Stock
                      </span>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="mt-auto flex gap-2">
                    <Link
                      href={`/shop/${med.id}`}
                      className="w-1/2 text-center border border-blue-500 text-blue-600 py-2 rounded-xl hover:bg-blue-50 transition"
                    >
                      Details
                    </Link>

                    <button
                      disabled={med.stock === 0}
                      className={`w-1/2 py-2 rounded-xl text-white font-semibold transition ${
                        med.stock > 0
                          ? "bg-blue-600 hover:bg-blue-700"
                          : "bg-gray-400 cursor-not-allowed"
                      }`}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
