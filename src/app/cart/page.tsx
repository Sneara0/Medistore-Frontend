"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { apiRequest } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const { token } = useAuth();
  const router = useRouter();

  const [shippingAddress, setShippingAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0)
    return (
      <div className="text-center mt-32">
        <p className="text-gray-500 text-lg mb-4">Your cart is empty 🛒</p>
        <a href="/shop" className="text-blue-600 hover:underline">
          Go to Shop
        </a>
      </div>
    );

  const handleCheckout = async () => {
    if (!shippingAddress) return setError("Please provide shipping address");
    setLoading(true);
    setError("");

    try {
      await apiRequest("/orders/checkout", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: JSON.stringify({ shippingAddress }),
      });
      alert("Order placed successfully ✅");
      clearCart();
      router.push("/orders");
    } catch (err: any) {
      setError(err.message || "Failed to place order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart 🛒</h1>
      {error && <p className="text-red-500 mb-2">{error}</p>}

      <div className="flex flex-col gap-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-2xl shadow-sm"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-32 h-32 object-cover rounded-xl"
            />
            <div className="flex-1">
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-gray-500">৳ {item.price}</p>
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() =>
                    updateQuantity(item.id, Math.max(1, item.quantity - 1))
                  }
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <p className="font-bold text-lg">৳ {item.price * item.quantity}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <div className="flex flex-col gap-4 bg-white p-6 rounded-2xl shadow-md">
          <input
            type="text"
            placeholder="Shipping Address"
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
          <p className="text-2xl font-bold text-right">Total: ৳ {total}</p>

          <div className="flex gap-4 justify-end">
            <button
              onClick={clearCart}
              className="px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
            >
              Clear Cart
            </button>
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
            >
              {loading ? "Placing Order..." : "Place Order (Cash on Delivery)"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
