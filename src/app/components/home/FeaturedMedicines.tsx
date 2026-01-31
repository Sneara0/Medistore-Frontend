// app/components/home/FeaturedMedicines.tsx
export default function FeaturedMedicines() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">

        <h2 className="text-3xl font-semibold text-center mb-10">
          Featured Medicines
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white p-6 rounded-lg shadow"
            >
              <div className="h-40 bg-gray-100 mb-4 rounded" />

              <h3 className="font-semibold">Paracetamol 500mg</h3>
              <p className="text-sm text-gray-500">Square Pharmaceuticals</p>

              <p className="mt-2 font-bold text-green-600">৳ 30</p>

              <button className="mt-4 w-full bg-green-600 text-white py-2 rounded">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
