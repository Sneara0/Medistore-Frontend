export default function Newsletter() {
  return (
    <section className="py-10 px-6 bg-[#05070a]">
      <div className="container mx-auto rounded-[3rem] p-12 md:p-24 bg-emerald-600 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <h2 className="text-4xl md:text-6xl font-black text-black mb-6">Stay Healthy.</h2>
        <p className="text-emerald-950 mb-10 max-w-lg mx-auto font-medium">Subscribe for weekly health tips and exclusive medicine discounts.</p>
        <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
          <input type="email" placeholder="Email Address" className="flex-1 px-8 py-4 rounded-2xl bg-black/10 border border-black/10 placeholder:text-emerald-900 outline-none focus:bg-white/20 transition-all" />
          <button className="px-8 py-4 bg-black text-white rounded-2xl font-black hover:scale-105 transition-all">JOIN NOW</button>
        </div>
      </div>
    </section>
  );
}