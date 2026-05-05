"use client";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, href: "https://facebook.com", color: "hover:bg-blue-600" },
    { icon: <FaTwitter />, href: "https://twitter.com", color: "hover:bg-sky-400" },
    { icon: <FaInstagram />, href: "https://instagram.com", color: "hover:bg-pink-600" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com", color: "hover:bg-blue-700" },
  ];

  return (
    <footer className="relative bg-[#05070a] border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Identity */}
          <div className="col-span-1 md:col-span-1 space-y-6">
            <h3 className="text-3xl font-black text-white italic tracking-tighter">
              Medi<span className="text-emerald-500">Store.</span>
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Redefining pharmacy with a touch of modern tech. Get your essentials delivered in a blink.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Platform</h4>
            <ul className="flex flex-col space-y-3">
              {["Home", "Shop", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-gray-500 hover:text-emerald-400 hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Support</h4>
            <ul className="flex flex-col space-y-3">
              {["Privacy Policy", "Terms of Service", "Returns", "FAQ"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(/ /g, "-")}`} 
                    className="text-gray-500 hover:text-emerald-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div className="space-y-8">
            <h4 className="text-white font-bold text-lg">Stay Connected</h4>
            <div className="flex space-x-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-gray-400 transition-all duration-500 hover:-translate-y-2 hover:scale-110 hover:text-white ${social.color} shadow-xl`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs tracking-widest uppercase">
            &copy; {new Date().getFullYear()} MediStore. Designed for the Future.
          </p>
          <div className="flex space-x-6 text-[10px] text-gray-700 font-bold uppercase tracking-[0.2em]">
            <span>System: Optimal</span>
            <span className="text-emerald-900/50 underline">Secure Encryption</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;