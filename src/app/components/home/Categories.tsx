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
    <section className="py-16">
      <div className="container mx-auto px-4">
        
        <h2 className="text-3xl font-semibold text-center mb-10">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <div
              key={cat}
              className="border rounded-lg p-6 text-center hover:shadow cursor-pointer"
            >
              <p className="font-medium">{cat}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}