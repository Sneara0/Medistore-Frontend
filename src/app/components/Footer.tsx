import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-600 via-green-500 to-teal-600 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">MediStore</h3>
          <p className="text-sm text-gray-100">
            Your trusted online pharmacy. Get medicines delivered safely and quickly to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Quick Links</h3>
          <div className="flex flex-col space-y-2 text-gray-100">
            <Link href="/" className="hover:text-yellow-300 transition-colors">Home</Link>
            <Link href="/shop" className="hover:text-yellow-300 transition-colors">Shop</Link>
            <Link href="/about" className="hover:text-yellow-300 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-yellow-300 transition-colors">Contact</Link>
          </div>
        </div>

        {/* Social & Contact */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Follow Us</h3>
          <div className="flex space-x-4 text-gray-100">
            <Link href="#" className="hover:text-yellow-300 transition-colors"><FaFacebookF /></Link>
            <Link href="#" className="hover:text-yellow-300 transition-colors"><FaTwitter /></Link>
            <Link href="#" className="hover:text-yellow-300 transition-colors"><FaInstagram /></Link>
            <Link href="#" className="hover:text-yellow-300 transition-colors"><FaLinkedinIn /></Link>
          </div>
          <p className="text-sm text-gray-100 mt-2">
            &copy; {new Date().getFullYear()} MediStore. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
