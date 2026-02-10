"use client"; // ✅ must for useState/useCart

import { useCart } from "@/context/CartContext";

export default function FeaturedMedicines() {
  const { addToCart } = useCart();

  const medicines = [
    {
      id: "1",
      name: "Paracetamol 500mg",
      company: "Square Pharmaceuticals",
      price: 30,
      image: "/images/paracetamol.jpg",
    },
    {
      id: "2",
      name: "Vitamin C 1000mg",
      company: "Beximco Pharma",
      price: 120,
      image: "/images/vitamin-c.jpg",
    },
    {
      id: "3",
      name: "Ibuprofen 400mg",
      company: "Renata Limited",
      price: 50,
      image: "/images/ibuprofen.jpg",
    },
  ];

  return (
    <section className="relative bg-green-50 py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-16">
          Featured Medicines
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {medicines.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 relative overflow-hidden"
            >
              {/* Medicine Image */}
              <div className="h-48 flex items-center justify-center mb-4 relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full object-contain rounded-xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="font-semibold text-lg md:text-xl text-gray-800 mb-1">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.company}</p>

              <p className="mt-3 font-bold text-green-600 text-lg">৳ {item.price}</p>

              <button
                onClick={() =>
                  addToCart({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: 1,
                    image: item.image,
                  })
                }
                className="mt-5 w-full py-3 rounded-xl bg-green-600 text-white font-semibold shadow-lg hover:scale-105 transform transition-all duration-300"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
