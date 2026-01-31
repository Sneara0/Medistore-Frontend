// app/components/home/Hero.tsx
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-green-50 py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Your Trusted <span className="text-green-600">Online Medicine</span> Shop
          </h1>

          <p className="mt-4 text-gray-600">
            Buy genuine medicines from verified pharmacies. Fast delivery & trusted service.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              href="/shop"
              className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
            >
              Shop Now
            </Link>

            <Link
              href="/register"
              className="border border-green-600 text-green-600 px-6 py-3 rounded"
            >
              Join as Seller
            </Link>
          </div>
        </div>

        <div className="hidden md:block">
          <img
            src="/hero-medicine.png"
            alt="Online Pharmacy"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
