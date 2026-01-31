"use client";
import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Future: Backend API call
      alert(`Thank you ${name}, your message has been sent!`);
      setName(""); setEmail(""); setMessage("");
    } catch {
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50 py-16">
      <div className="container mx-auto px-6 lg:px-20 space-y-24">

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-blue-800 mb-4">
            Get in Touch with Us
          </h1>
          <p className="text-gray-700 text-lg">
            Have questions or need assistance? Reach out and we’ll get back to you promptly!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-10">
            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105">
              <div className="bg-blue-100 p-4 rounded-full">
                <FaMapMarkerAlt className="text-blue-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-700">Address</h3>
                <p className="text-gray-700">123 MediStore St, Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105">
              <div className="bg-green-100 p-4 rounded-full">
                <FaPhoneAlt className="text-green-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-700">Phone</h3>
                <p className="text-gray-700">+880 123 456 789</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105">
              <div className="bg-red-100 p-4 rounded-full">
                <FaEnvelope className="text-red-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-600">Email</h3>
                <p className="text-gray-700">support@medistore.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-white to-blue-50 p-10 rounded-3xl shadow-2xl space-y-6"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              required
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              rows={6}
              required
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transform transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
