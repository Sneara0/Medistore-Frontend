// app/components/home/FeaturedMedicines.tsx
export default function FeaturedMedicines() {
  const medicines = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      company: "Square Pharmaceuticals",
      price: 30,
      image: "/images/paracetamol.jpg", // public/images folder-এ image রাখো
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
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Featured Medicines
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {medicines.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="h-40 w-full object-contain mb-4 rounded"
              />

              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.company}</p>

              <p className="mt-2 font-bold text-green-600">৳ {item.price}</p>

              <button className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
