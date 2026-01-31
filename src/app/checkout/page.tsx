"use client";
import { Medicine } from "../types/medicine";
import { useState, useEffect } from "react";


const CheckoutPage = () => {
  const [cart, setCart] = useState<Medicine[]>([]);
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const handleOrder = async () => {
    if (!address) return alert("Please enter shipping address!");
    setLoading(true);

    try {
      await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cart, address })
      });
      alert("Order placed successfully!");
      localStorage.removeItem("cart");
      setCart([]);
      setAddress("");
    } catch {
      alert("Order failed. Try again!");
    } finally {
      setLoading(false);
    }
  };

  if(cart.length === 0) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12 max-w-xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Checkout</h1>

      <textarea
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter your shipping address..."
        className="w-full p-4 border rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={4}
      />

      <button
        onClick={handleOrder}
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition disabled:opacity-50"
      >
        {loading ? "Placing Order..." : "Place Order"}
      </button>
    </div>
  )
}

export default CheckoutPage;
