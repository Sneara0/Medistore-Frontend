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
    // Fetch current logged-in user
    fetch('/api/auth/me')
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(() => setUser(null)); // error হলে null set হবে
  }, []);

  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center relative">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold">MediStore 💊</Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        <Link href="/" className="hover:text-gray-200">Home</Link>
        <Link href="/shop" className="hover:text-gray-200">Shop</Link>
        <Link href="/about" className="hover:text-gray-200">About</Link>
        <Link href="/contact" className="hover:text-gray-200">Contact</Link>

        <input
          type="text"
          placeholder="Search medicines..."
          className="px-3 py-1 rounded text-black"
        />

        {user ? (
          <>
            {user.role === 'customer' && <Link href="/orders">My Orders</Link>}
            {user.role === 'seller' && <Link href="/seller/dashboard">Dashboard</Link>}
            {user.role === 'admin' && <Link href="/admin/dashboard">Admin</Link>}
            <Link href="/profile" className="flex items-center">
              <FiUser className="mr-1" /> Profile
            </Link>
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </>
        )}

        <Link href="/cart" className="relative flex items-center">
          <FiShoppingCart size={20} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1 text-xs">3</span>
        </Link>
      </div>

      {/* Mobile Menu */}
      <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open ? <FiX /> : <FiMenu />}
      </button>

      {open && (
        <div className="absolute top-16 left-0 w-full bg-blue-500 flex flex-col items-center md:hidden space-y-4 p-4 z-50">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>

          {user ? (
            <>
              {user.role === 'customer' && <Link href="/orders">My Orders</Link>}
              {user.role === 'seller' && <Link href="/seller/dashboard">Dashboard</Link>}
              {user.role === 'admin' && <Link href="/admin/dashboard">Admin</Link>}
              <Link href="/profile">Profile</Link>
            </>
          ) : (
            <>
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
            </>
          )}

          <Link href="/cart" className="relative flex items-center">
            Cart
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1 text-xs">3</span>
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar;
