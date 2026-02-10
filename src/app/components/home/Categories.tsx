// app/components/home/Categories.tsx
const categories = [
  "Pain Relief",
  "Diabetes",
  "Heart Care",
  "Skin Care",
  "Vitamins",
  "Baby Care",
];

export default function Categories() {
  return (
    <section className="py-16 bg-green-100">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-green-900">
          Shop by Category
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <div
              key={cat}
              className="bg-green-200 rounded-xl p-6 flex items-center justify-center shadow-md hover:shadow-xl transition transform hover:-translate-y-1 hover:bg-green-300 cursor-pointer"
            >
              <p className="font-semibold text-green-900 text-center text-lg">
                {cat}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
