"use client";

import { useEffect, useState } from "react";
import { getAllMedicines } from "@/lib/medicine";
import { getAllCategories } from "@/lib/category";

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

  // Filter by category or search
  useEffect(() => {
    let temp = medicines;

    if (selectedCategory) {
      temp = temp.filter((m) => m.category === selectedCategory);
    }
    if (search) {
      temp = temp.filter((m) => m.name.toLowerCase().includes(search.toLowerCase()));
    }

    setFiltered(temp);
  }, [selectedCategory, search, medicines]);

  if (loading) return <p className="text-center mt-20">Loading medicines...</p>;
  if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Shop Medicines</h1>

      {/* Filter & Search */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <select
          className="p-2 border rounded"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.name}>{cat.name}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search medicine..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded w-full sm:w-64"
        />
      </div>

      {/* Medicines Grid */}
      {filtered.length === 0 ? (
        <p className="text-center mt-20 text-gray-500">No medicines found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filtered.map((med) => (
            <div key={med.id} className="bg-white border rounded-xl shadow-md hover:shadow-xl transition p-4 flex flex-col justify-between">
              <div>
                <img src={med.image} alt={med.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                {med.category && <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-2">{med.category}</span>}
                <h3 className="text-lg font-semibold text-gray-800">{med.name}</h3>
                <p className="text-gray-500 text-sm">{med.company}</p>
                <p className={`mt-1 font-semibold ${med.stock > 0 ? "text-blue-600" : "text-red-500"}`}>
                  {med.stock > 0 ? `৳ ${med.price}` : "Out of Stock"}
                </p>
              </div>
              <button
                disabled={med.stock === 0}
                className={`mt-4 w-full px-3 py-2 rounded-lg text-white transition ${med.stock > 0 ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"}`}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
