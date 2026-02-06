// app/components/home/Hero.tsx
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-green-100 to-blue-50 overflow-hidden py-28">
      {/* Colorful floating shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-200 rounded-full opacity-40 animate-spin-slow"></div>
      <div className="absolute -bottom-28 -right-32 w-80 h-80 bg-yellow-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-1/2 -right-24 w-64 h-64 bg-purple-300 rounded-full opacity-30 animate-spin-slow"></div>

      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Your Trusted{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-blue-500 to-purple-500">
              Online Medicine
            </span>{" "}
            Shop
          </h1>

          <p className="text-gray-700 text-lg md:text-xl">
            Buy genuine medicines from verified pharmacies. Fast delivery, reliable service, and hassle-free shopping at your fingertips.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link
              href="/shop"
              className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              Shop Now
            </Link>

            <Link
              href="/register"
              className="border-2 border-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-transparent bg-clip-text px-8 py-4 rounded-xl hover:scale-105 transform transition-all duration-300"
            >
              Join as Seller
            </Link>
          </div>

          <div className="mt-4 inline-block bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 text-green-900 px-4 py-1 rounded-full text-sm font-medium shadow">
            Trusted by 500+ happy customers
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center md:justify-end">
          <img
            src="/hero-medicine.png"
            alt="Online Pharmacy"
            className="w-full max-w-md rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />

          {/* Floating colorful pills */}
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-pink-400 rounded-full opacity-70 animate-bounce-slow"></div>
          <div className="absolute bottom-10 -right-10 w-16 h-16 bg-yellow-400 rounded-full opacity-60 animate-bounce-slow"></div>
          <div className="absolute top-20 right-16 w-10 h-10 bg-purple-400 rounded-full opacity-60 animate-bounce-slow"></div>
        </div>
      </div>

      {/* Optional SVG wave at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0 0h1200v120H0z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}
