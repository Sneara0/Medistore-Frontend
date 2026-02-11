"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getMedicineById, Medicine } from "@/lib/medicine";
import { useCart } from "@/context/CartContext";

export default function MedicineDetailPage() {
  const params = useParams();
  const { addToCart } = useCart();
  const [medicine, setMedicine] = useState<Medicine | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Safely get the medicine id
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  useEffect(() => {
    if (!id) {
      setError("Invalid medicine ID");
      setLoading(false);
      return;
    }

    const fetchMedicine = async () => {
      try {
        const data = await getMedicineById(id);
        setMedicine(data);
      } catch (err: any) {
        setError(err.message || "Failed to load medicine");
      } finally {
        setLoading(false);
      }
    };

    fetchMedicine();
  }, [id]);

  if (loading)
    return (
      <p className="text-center mt-32 animate-pulse text-lg text-gray-500">
        Loading medicine...
      </p>
    );

  if (error)
    return (
      <p className="text-center mt-32 text-red-500 font-semibold">{error}</p>
    );

  if (!medicine) return null;

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 bg-white rounded-2xl shadow-md p-6">
        <img
          src={medicine.image}
          alt={medicine.name}
          className="w-full md:w-1/2 h-80 object-cover rounded-xl"
        />
        <div className="flex flex-col flex-grow">
          {/* এখানে পরিবর্তন করা হয়েছে: category.name ব্যবহার করা হয়েছে */}
          {medicine.category && (
            <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full w-fit mb-2">
              {typeof medicine.category === "object" 
                ? medicine.category.name 
                : medicine.category}
            </span>
          )}
          
          <h1 className="text-3xl font-bold text-gray-800">{medicine.name}</h1>
          <p className="text-gray-500 mt-1">{medicine.company}</p>
          <p className="text-xl font-bold text-green-600 mt-4">
            ৳ {medicine.price}
          </p>
          <p
            className={`mt-2 font-semibold ${
              medicine.stock > 0 ? "text-green-600" : "text-red-500"
            }`}
          >
            {medicine.stock > 0 ? "In Stock" : "Out of Stock"}
          </p>
          <p className="mt-4 text-gray-700">{medicine.description}</p>
          <button
            disabled={medicine.stock === 0}
            onClick={() =>
              addToCart({
                id: medicine.id,
                name: medicine.name,
                price: medicine.price,
                quantity: 1,
                image: medicine.image,
              })
            }
            className={`mt-6 w-full py-3 rounded-xl text-white font-semibold transition ${
              medicine.stock > 0
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}