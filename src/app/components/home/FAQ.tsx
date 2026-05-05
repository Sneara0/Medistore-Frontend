export default function FAQ() {
  const faqs = [
    { q: "How to upload prescription?", a: "Go to your dashboard and click upload." },
    { q: "Is delivery free?", a: "Free delivery on orders over $50." },
    { q: "Do you sell antibiotics?", a: "Yes, with a valid prescription." }
  ];

  return (
    <section className="py-24 bg-[#05070a]">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl font-black text-center mb-12">General FAQ</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all cursor-pointer">
              <h4 className="font-bold">{f.q}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}