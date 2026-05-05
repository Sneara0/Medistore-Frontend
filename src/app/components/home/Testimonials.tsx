export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0a0f1d]">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-5xl font-black">Trusted by <br /><span className="text-emerald-500">Thousands.</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-gray-300 text-lg mb-8 italic">"The service is incredibly fast. I got my insulin within 6 hours. Highly recommended!"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20" />
                <div>
                  <h4 className="font-bold">Hasan Ali</h4>
                  <p className="text-gray-500 text-xs">Verified Patient</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}