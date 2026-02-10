"use client";

import { useEffect, useState } from "react";
import { getAllMedicines, Medicine } from "@/lib/medicine";
import Link from "next/link";

export default function ShopPage() {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const data = await getAllMedicines();
        setMedicines(data);
      } catch (err: any) {
        setError(err.message || "Failed to load medicines");
      } finally {
        setLoading(false);
      }
    };

    fetchMedicines();
  }, []);

  if (loading)
    return <p className="text-center mt-32 animate-pulse text-lg text-gray-500">Loading medicines...</p>;

  if (error)
    return <p className="text-center mt-32 text-red-500 font-semibold">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {medicines.map((med) => (
          <Link
            key={med.id}
            href={`/shop/${med.id}`}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <img src={med.image} alt={med.name} className="w-full h-40 object-cover rounded-lg mb-3" />
            <h2 className="font-bold text-lg text-gray-800">{med.name}</h2>
            <p className="text-gray-500">{med.company}</p>
            <p className="text-green-600 font-semibold mt-1">৳ {med.price}</p>
            <p className={`mt-1 font-medium ${med.stock > 0 ? "text-green-600" : "text-red-500"}`}>
              {med.stock > 0 ? "In Stock" : "Out of Stock"}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
