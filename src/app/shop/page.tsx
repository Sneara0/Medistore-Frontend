"use client";

import { useState, useEffect } from "react";
import MedicineCard from "../components/MedicineCard";  // ✅ correct path
import SearchFilter from "../components/SearchFilter";  // ✅ correct path

interface Medicine {
  id: string;
  name: string;
  price: number;
  image?: string;
}

const ShopPage = () => {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/medicines")
      .then(res => res.json())
      .then(data => {
        setMedicines(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredMedicines = medicines.filter(med =>
    med.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Shop Medicines</h1>

      <SearchFilter search={search} setSearch={setSearch} />

      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {filteredMedicines.length > 0 ? (
            filteredMedicines.map(med => <MedicineCard key={med.id} medicine={med} />)
          ) : (
            <p className="text-center col-span-full text-gray-600">No medicines found.</p>
          )}
        </div>
      )}
    </div>
  )
}

export default ShopPage;
