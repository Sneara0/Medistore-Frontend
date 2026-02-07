"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!name || !address) {
      setError("Please fill all fields");
      return;
    }


    console.log("Order placed:", { name, address, items: cart });

    clearCart();
    router.push("/shop");
  };

  return (
    <div className="min-h-screen pt-20 px-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <textarea
          placeholder="Shipping Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full border px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
