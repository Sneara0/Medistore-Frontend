import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-32 px-6 text-center overflow-hidden">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          About MediStore
        </h1>
        <p className="text-lg md:text-2xl mb-10 drop-shadow-md max-w-3xl mx-auto">
          We are your trusted online pharmacy, delivering quality medicines safely and efficiently to your doorstep.
        </p>
        <Link
          href="/shop"
          className="inline-block px-10 py-4 bg-white text-green-800 font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
        >
          Shop Now
        </Link>

        {/* Decorative Circles */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white opacity-10 rounded-full animate-pulse"></div>
      </section>

      {/* Mission & Vision Section */}
      <section className="max-w-6xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-green-800">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To make healthcare accessible to everyone by delivering trusted medicines quickly and reliably.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We ensure a seamless online shopping experience while maintaining safety and transparency.
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl shadow-xl hover:scale-105 transform transition duration-500">
          <img src="/assets/mission.jpg" alt="Our Mission" className="w-full h-80 object-cover"/>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-green-800">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To become the most trusted online pharmacy providing exceptional service and a wide range of medicines.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We empower customers to manage their health easily through a user-friendly platform and fast delivery.
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl shadow-xl hover:scale-105 transform transition duration-500">
          <img src="/assets/vision.jpg" alt="Our Vision" className="w-full h-80 object-cover"/>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-24 px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-green-800">Why Choose MediStore?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto text-center">

          {/* Trusted Quality */}
          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex flex-col items-center relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-100 rounded-full opacity-40 animate-pulse"></div>
            <div className="text-green-600 text-5xl mb-5 z-10">✅</div>
            <h3 className="text-2xl font-bold mb-4 text-[#004d40] z-10">Trusted Quality</h3>
            <p className="text-gray-700 z-10">All medicines come from certified and trusted pharmacies to ensure your safety.</p>
          </div>

          {/* Fast Delivery */}
          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex flex-col items-center relative overflow-hidden">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-green-100 rounded-full opacity-40 animate-pulse"></div>
            <div className="text-green-600 text-5xl mb-5 z-10">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-[#004d40] z-10">Fast Delivery</h3>
            <p className="text-gray-700 z-10">Get your medicines delivered quickly and safely, right at your doorstep.</p>
          </div>

          {/* 24/7 Support */}
          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex flex-col items-center relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-green-100 rounded-full opacity-40 animate-pulse"></div>
            <div className="text-green-600 text-5xl mb-5 z-10">📞</div>
            <h3 className="text-2xl font-bold mb-4 text-[#004d40] z-10">24/7 Support</h3>
            <p className="text-gray-700 z-10">Our customer support team is available around the clock for your queries.</p>
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-green-800">Ready to Start?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Explore our wide range of medicines and get them delivered safely at your doorstep.
        </p>
        <Link
          href="/shop"
          className="inline-block px-10 py-4 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
        >
          Shop Now
        </Link>
      </section>

    </div>
  );
}
