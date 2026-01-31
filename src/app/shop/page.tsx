"use client";
import { useEffect, useState } from "react";
import { Medicine } from "../types/medicine";
import MedicineCard from "../components/MedicineCard";


const ShopPage = () => {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [filteredMedicines, setFilteredMedicines] = useState<Medicine[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/api/medicines") // তোমার backend URL
      .then(res => res.json())
      .then((data: Medicine[]) => {
        setMedicines(data);
        setFilteredMedicines(data);
        const uniqueCategories = Array.from(new Set(data.map(m => m.category)));
        setCategories(["All", ...uniqueCategories]);
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === "All") setFilteredMedicines(medicines);
    else setFilteredMedicines(medicines.filter(m => m.category === cat));
  };

  const addToCart = (medicine: Medicine) => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    localStorage.setItem("cart", JSON.stringify([...existingCart, medicine]));
    alert(`${medicine.name} added to cart!`);
  };

  if (loading) return <p className="text-center py-20">Loading Medicines...</p>;

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Shop Medicines</h1>

      {/* Category Filter */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === cat ? "bg-blue-600 text-white" : "bg-white hover:bg-blue-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Medicines Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMedicines.map(m => (
          <MedicineCard key={m.id} medicine={m} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
