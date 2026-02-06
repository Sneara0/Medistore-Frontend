// app/components/home/WhyChooseUs.tsx
import { FiShield, FiTruck, FiCreditCard, FiHeadphones } from "react-icons/fi";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FiShield className="w-8 h-8 text-green-700 mx-auto mb-4" />,
      title: "Verified Sellers",
      desc: "Only licensed pharmacies allowed",
    },
    {
      icon: <FiTruck className="w-8 h-8 text-green-700 mx-auto mb-4" />,
      title: "Fast Delivery",
      desc: "Quick & safe delivery nationwide",
    },
    {
      icon: <FiCreditCard className="w-8 h-8 text-green-700 mx-auto mb-4" />,
      title: "Secure Payment",
      desc: "Cash on Delivery supported",
    },
    {
      icon: <FiHeadphones className="w-8 h-8 text-green-700 mx-auto mb-4" />,
      title: "24/7 Support",
      desc: "We are here whenever you need",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-green-100">
      <div className="container mx-auto px-4">

        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-green-900">
          Why Choose MediStore?
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-green-50 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
            >
              {feature.icon}
              <h3 className="font-semibold text-lg mb-2 text-green-800">{feature.title}</h3>
              <p className="text-green-700 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}