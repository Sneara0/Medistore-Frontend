"use client";
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { FiShoppingCart, FiUser, FiMenu, FiX, FiSearch, FiLayout, FiLogOut } from 'react-icons/fi';
import gsap from 'gsap';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'customer' | 'seller' | 'admin';
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [mounted, setMounted] = useState(false); // Hydration fix এর জন্য
  const navRef = useRef(null);

  useEffect(() => {
    setMounted(true); // কম্পোনেন্ট মাউন্ট হওয়ার পর এটি true হবে

    fetch('/api/auth/me')
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(() => setUser(null));

    if (navRef.current) {
      gsap.fromTo(navRef.current, 
        { y: -100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
      );
    }
  }, []);

  // ড্রপডাউন এবং মোবাইল লিঙ্কের ক্লাসগুলো ভেরিয়েবলে রাখা (Hydration safe)
  const dropdownItemClass = "flex items-center px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 hover:text-emerald-400 transition-all duration-200 w-full text-left cursor-pointer";
  const mobileLinkClass = "text-lg font-medium text-gray-200 py-2 hover:text-emerald-400 transition-all";

  // মাউন্ট হওয়ার আগে কিছু রেন্ডার করবে না jate server/client HTML mismatch না হয়
  if (!mounted) return null;

  return (
    <nav 
      ref={navRef} 
      className="bg-gray-900/95 backdrop-blur-md text-white shadow-lg fixed w-full z-50 border-b border-gray-800"
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center h-16">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold hover:text-emerald-400 transition-all flex items-center gap-2">
          <span className="bg-emerald-600 p-1 rounded-lg">Medi</span>Store 💊
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-medium">
          <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
          <Link href="/shop" className="hover:text-emerald-400 transition-colors">Shop</Link>
          <Link href="/about" className="hover:text-emerald-400 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link>

          {/* Search Box */}
          <div className="relative group">
            <input
              type="text"
              placeholder="Search medicines..."
              className="bg-gray-800 border border-gray-700 px-4 py-1.5 pl-10 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all w-48 group-hover:w-64"
            />
            <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
          </div>

          {/* User Section */}
          {user ? (
            <div className="relative">
              <button 
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-full transition-all border border-gray-700"
              >
                <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-xs">
                  {user.name?.charAt(0) || 'U'}
                </div>
                <span className="text-sm">Account</span>
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-3 w-56 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl py-2 overflow-hidden">
                  <div className="px-4 py-2 border-b border-gray-800 mb-1">
                    <p className="text-sm font-bold truncate">{user.name}</p>
                    <p className="text-xs text-gray-400 truncate">{user.email}</p>
                  </div>
                  
                  {user.role === 'customer' && <Link href="/orders" className={dropdownItemClass}><FiLayout className="mr-2"/> My Orders</Link>}
                  {user.role === 'seller' && <Link href="/seller/dashboard" className={dropdownItemClass}><FiLayout className="mr-2"/> Seller Dashboard</Link>}
                  {user.role === 'admin' && <Link href="/admin/dashboard" className={dropdownItemClass}><FiLayout className="mr-2"/> Admin Panel</Link>}
                  
                  <Link href="/profile" className={dropdownItemClass}>
                    <FiUser className="mr-2" /> Profile Settings
                  </Link>
                  <button className={`${dropdownItemClass} text-red-400 border-t border-gray-800 mt-1`}>
                    <FiLogOut className="mr-2" /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link href="/login" className="hover:text-emerald-400 transition-colors">Login</Link>
              <Link href="/register" className="bg-emerald-600 hover:bg-emerald-700 px-4 py-1.5 rounded-full transition-all">
                Register
              </Link>
            </div>
          )}

          {/* Cart Section */}
          <Link href="/cart" className="relative p-2 bg-gray-800 rounded-full hover:bg-emerald-600 transition-all">
            <FiShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-[10px] font-bold border-2 border-gray-900">
              3
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl p-2 hover:bg-gray-800 rounded-lg transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 w-full px-6 py-6 flex flex-col space-y-4">
          <Link href="/" onClick={() => setOpen(false)} className={mobileLinkClass}>Home</Link>
          <Link href="/shop" onClick={() => setOpen(false)} className={mobileLinkClass}>Shop</Link>
          <Link href="/about" onClick={() => setOpen(false)} className={mobileLinkClass}>About</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className={mobileLinkClass}>Contact</Link>
          <hr className="border-gray-800" />
          {user ? (
            <>
              <Link href="/profile" onClick={() => setOpen(false)} className={mobileLinkClass}>Profile</Link>
              <button className="text-left mobileLinkClass text-red-400">Logout</button>
            </>
          ) : (
            <div className="flex flex-col space-y-3 pt-2">
              <Link href="/login" className="text-center py-2 border border-gray-700 rounded-lg">Login</Link>
              <Link href="/register" className="text-center py-2 bg-emerald-600 rounded-lg">Register</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;