"use client";
import { useState, useEffect } from "react";
import { Medicine } from "../types/medicine";
import Link from "next/link";

const CartPage = () => {
  const [cart, setCart] = useState<Medicine[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const removeFromCart = (id: string) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <Link href="/shop" className="text-blue-600 hover:underline">Go to Shop</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cart.map(item => (
          <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded-xl shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gray-100 flex items-center justify-center rounded-lg">
                {item.image ? <img src={item.image} alt={item.name} className="h-full w-full object-cover rounded-lg"/> : "Image"}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-blue-600 font-bold">{item.price} BDT</p>
              </div>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 text-right">
        <p className="text-xl font-bold mb-4">Total: {totalPrice} BDT</p>
        <Link href="/checkout" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
