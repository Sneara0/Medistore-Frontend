"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiShoppingCart, FiUser, FiMenu, FiX } from 'react-icons/fi';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'customer' | 'seller' | 'admin';
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch('/api/auth/me')
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(() => setUser(null));
  }, []);

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold hover:text-gray-300 transition-colors">
          MediStore 💊
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-semibold">
          <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
          <Link href="/shop" className="hover:text-gray-300 transition-colors">Shop</Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>

         <input
  type="text"
  placeholder="Search medicines..."
  className="px-3 py-1 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
/>
          {user ? (
            <>
              {user.role === 'customer' && <Link href="/orders" className="hover:text-gray-300 transition-colors">My Orders</Link>}
              {user.role === 'seller' && <Link href="/seller/dashboard" className="hover:text-gray-300 transition-colors">Dashboard</Link>}
              {user.role === 'admin' && <Link href="/admin/dashboard" className="hover:text-gray-300 transition-colors">Admin</Link>}
              <Link href="/profile" className="flex items-center hover:text-gray-300 transition-colors">
                <FiUser className="mr-1" /> Profile
              </Link>
            </>
          ) : (
            <>
              <Link href="/login" className="hover:text-gray-300 transition-colors">Login</Link>
              <Link href="/register" className="hover:text-gray-300 transition-colors">Register</Link>
            </>
          )}

          <Link href="/cart" className="relative flex items-center hover:text-gray-300 transition-colors">
            <FiShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1 text-xs">3</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-900 w-full px-4 py-4 flex flex-col items-center space-y-4 font-semibold transition-all duration-300">
          <Link href="/" className="w-full text-center py-2 rounded hover:bg-gray-800 transition-colors">Home</Link>
          <Link href="/shop" className="w-full text-center py-2 rounded hover:bg-gray-800 transition-colors">Shop</Link>
          <Link href="/about" className="w-full text-center py-2 rounded hover:bg-gray-800 transition-colors">About</Link>
          <Link href="/contact" className="w-full text-center py-2 rounded hover:bg-gray-800 transition-colors">Contact</Link>

          {user ? (
            <>
              {user.role === 'customer' && <Link href="/orders" className="w-full text-center py-2 rounded hover:bg-gray-800 transition-colors">My Orders</Link>}
              {user.role === 'seller' && <Link href="/seller/dashboard" className="w-full text-center py-2 rounded hover:bg-gray-800 transition-colors">Dashboard</Link>}
              {user.role === 'admin' && <Link href="/admin/dashboard" className="w-full text-center py-2 rounded hover:bg-gray-800 transition-colors">Admin</Link>}
              <Link href="/profile" className="w-full text-center py-2 rounded hover:bg-gray-800 transition-colors flex justify-center items-center">
                <FiUser className="mr-1" /> Profile
              </Link>
            </>
          ) : (
            <>
              <Link href="/login" className="w-full text-center py-2 rounded hover:bg-gray-800 transition-colors">Login</Link>
              <Link href="/register" className="w-full text-center py-2 rounded hover:bg-gray-800 transition-colors">Register</Link>
            </>
          )}

          <Link href="/cart" className="relative flex justify-center w-full py-2 rounded hover:bg-gray-800 transition-colors">
            Cart
            <span className="absolute -top-2 -right-4 bg-red-500 text-white rounded-full px-1 text-xs">3</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;