import React from "react";
import { Medicine } from "../types/medicine";

interface Props {
  medicine: Medicine;
  addToCart?: (medicine: Medicine) => void; // ✅ addToCart optional
}

const MedicineCard: React.FC<Props> = ({ medicine, addToCart }) => {
  return (
    <div className="border rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-4 bg-white">
      {/* Image */}
      <img
        src={medicine.image || "/placeholder.png"}
        alt={medicine.name}
        className="w-full h-40 object-cover rounded mb-4"
      />

      {/* Name */}
      <h2 className="font-bold text-lg mb-1 text-gray-800">{medicine.name}</h2>

      {/* Price */}
      <p className="text-green-600 font-semibold mb-1">${medicine.price}</p>

      {/* Category */}
      <p className="text-gray-500 text-sm">{medicine.category}</p>

      {/* Add to Cart Button */}
      {addToCart && (
        <button
          onClick={() => addToCart(medicine)}
          className="mt-3 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default MedicineCard;
