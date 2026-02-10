import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* Hero Section */}
      <section className="bg-green-700 text-white py-32 px-6 text-center">
        <h1 className="text-2xl md:text-2xl font-extrabold mb-4 leading-tight">Contact Us</h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
          Have questions or need assistance? Reach out to us through any of the following channels.
        </p>
      </section>

      {/* Contact Details */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto md:flex md:items-start md:justify-between gap-12">

          {/* Left: Contact Info */}
          <div className="md:w-1/2 space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8">Contact Information</h2>

            <div className="flex items-start gap-4">
              <div className="text-green-600 text-3xl mt-1">📍</div>
              <div>
                <h3 className="font-semibold text-xl md:text-2xl mb-1">Address</h3>
                <p className="text-gray-700 text-base md:text-lg">123 MediStore Street, Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-green-600 text-3xl mt-1">📞</div>
              <div>
                <h3 className="font-semibold text-xl md:text-2xl mb-1">Phone</h3>
                <p className="text-gray-700 text-base md:text-lg">+880 1832346270</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="text-green-600 text-3xl mt-1">✉️</div>
              <div>
                <h3 className="font-semibold text-xl md:text-2xl mb-1">Email</h3>
                <p className="text-gray-700 text-base md:text-lg">support@medistore.com</p>
              </div>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="md:w-1/2 hidden md:block">
            <Image
              src="/assets/contact-illustration.png"
              alt="Contact Illustration"
              width={500}
              height={400}
              className="rounded-xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 text-center bg-green-100">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Ready to Explore?</h2>
        <p className="text-gray-700 mb-6 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Browse our medicines and get them delivered safely to your doorstep.
        </p>
        <a
          href="/shop"
          className="inline-block px-10 py-4 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
        >
          Shop Now
        </a>
      </section>

    </div>
  );
}
