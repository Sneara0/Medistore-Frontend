// app/components/home/FeaturedMedicines.tsx
export default function FeaturedMedicines() {
  const medicines = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      company: "Square Pharmaceuticals",
      price: 30,
      image: "/images/paracetamol.jpg",
    },
    {
      id: 2,
      name: "Vitamin C 1000mg",
      company: "Beximco Pharma",
      price: 120,
      image: "/images/vitamin-c.jpg",
    },
    {
      id: 3,
      name: "Ibuprofen 400mg",
      company: "Renata Limited",
      price: 50,
      image: "/images/ibuprofen.jpg",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-24 overflow-hidden">
      {/* Floating colorful shapes */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-pink-200 rounded-full opacity-30 animate-spin-slow"></div>
      <div className="absolute -bottom-28 -right-32 w-96 h-96 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-1/3 -right-24 w-64 h-64 bg-purple-300 rounded-full opacity-25 animate-spin-slow"></div>

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
              {/* Floating mini bubbles like Hero */}
              <div className="absolute -top-4 -left-4 w-6 h-6 bg-green-200 rounded-full opacity-50 animate-bounce-slow"></div>
              <div className="absolute -bottom-6 -right-6 w-10 h-10 bg-blue-200 rounded-full opacity-40 animate-bounce-slow"></div>
              <div className="absolute top-10 -right-6 w-4 h-4 bg-purple-200 rounded-full opacity-60 animate-bounce-slow"></div>

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

              <button className="mt-5 w-full py-3 rounded-xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transform transition-all duration-300">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
