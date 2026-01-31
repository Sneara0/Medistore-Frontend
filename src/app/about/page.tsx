import Image from "next/image";
import { FaHeartbeat, FaHandsHelping, FaShieldAlt } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-6 lg:px-20 space-y-24">

        {/* Hero Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-extrabold mb-4 text-blue-800">
              About MediStore 💊
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              MediStore is your trusted online pharmacy, making medicines accessible to everyone. We provide a seamless and secure experience for customers, sellers, and admins alike.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our platform ensures transparency, reliability, and convenience at every step—from browsing medicines to tracking orders.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="/images/medistore-about.png"
              alt="About MediStore"
              width={450}
              height={350}
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition">
            <h2 className="text-3xl font-bold text-blue-700 mb-4 flex items-center gap-3">
              <FaHeartbeat className="text-red-500" /> Our Mission
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              To empower people to manage their health easily by providing quick access to medicines, clear information, and exceptional customer service.
            </p>
          </div>
          <div className="bg-green-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition">
            <h2 className="text-3xl font-bold text-green-700 mb-4 flex items-center gap-3">
              <FaShieldAlt className="text-green-500" /> Our Vision
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              To become the most trusted online medicine platform, bridging the gap between healthcare providers and customers nationwide.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div>
          <h2 className="text-4xl font-extrabold mb-12 text-center text-purple-700">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple-50 p-8 rounded-2xl shadow hover:shadow-2xl hover:scale-105 transform transition text-center">
              <FaShieldAlt className="text-purple-600 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-purple-700">Trust</h3>
              <p className="text-gray-700">Quality products and transparent service for all users.</p>
            </div>
            <div className="bg-yellow-50 p-8 rounded-2xl shadow hover:shadow-2xl hover:scale-105 transform transition text-center">
              <FaHandsHelping className="text-yellow-500 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-yellow-600">Support</h3>
              <p className="text-gray-700">Our team is always ready to assist customers and sellers promptly.</p>
            </div>
            <div className="bg-pink-50 p-8 rounded-2xl shadow hover:shadow-2xl hover:scale-105 transform transition text-center">
              <FaHeartbeat className="text-red-400 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-pink-600">Care</h3>
              <p className="text-gray-700">We care for your health and aim to make medicines accessible and convenient.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
