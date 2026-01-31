// app/components/home/WhyChooseUs.tsx
export default function WhyChooseUs() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">

        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Choose MediStore?
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="p-6 border rounded">
            <h3 className="font-semibold mb-2">Verified Sellers</h3>
            <p className="text-sm text-gray-600">
              Only licensed pharmacies allowed
            </p>
          </div>

          <div className="p-6 border rounded">
            <h3 className="font-semibold mb-2">Fast Delivery</h3>
            <p className="text-sm text-gray-600">
              Quick & safe delivery nationwide
            </p>
          </div>

          <div className="p-6 border rounded">
            <h3 className="font-semibold mb-2">Secure Payment</h3>
            <p className="text-sm text-gray-600">
              Cash on Delivery supported
            </p>
          </div>

          <div className="p-6 border rounded">
            <h3 className="font-semibold mb-2">24/7 Support</h3>
            <p className="text-sm text-gray-600">
              We are here whenever you need
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
