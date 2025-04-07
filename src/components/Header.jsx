import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../assets/logo.png";
import Marquee from 'react-fast-marquee';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Workshops', href: '#workshops' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="w-full fixed top-0 left-0 bg-gradient-to-r from-blue-100 via-white to-purple-100 z-50 font-sans">
      <div className="bg-blue/60 backdrop-blur-lg shadow-md border-b">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-8 px-6 md:px-12 gap-4">
          <div className="flex items-center gap-4">
            <img src={logo} alt="IndoCrypt Logo" className="w-20 h-20 object-contain drop-shadow-lg" />
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight leading-tight text-gray-900">
                IndoCrypt <span className="text-indigo-600">2025</span>
              </h1>
              <p className="text-sm text-gray-700">
                International Conference on Cryptology in India
              </p>
            </div>
          </div>

          <div className="text-center md:text-right space-y-1">
            <p className="text-lg font-semibold text-gray-800">🗓️ December 8-12, 2025</p>
            <p className="text-md text-gray-600">📍 IIIT Bhubaneswar, Odisha, India</p>
          </div>
        </div>
      </div>

      <Marquee gradient={false} speed={50} className="bg-blue-500 text-white py-2 text-sm font-medium shadow-inner animate-pulse">
        🎉 Early Bird Registration ends May 30! &nbsp;&nbsp;&nbsp; 📢 Call for Papers open now! &nbsp;&nbsp;&nbsp; 🎓 Keynote by Dr. Alice Cryptman!
      </Marquee>

      <div className="bg-white/70 backdrop-blur-md border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between py-1">
          <nav className="hidden md:flex gap-6 text-gray-800 text-sm font-semibold">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 transition duration-200 hover:text-indigo-700 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 p-2 rounded-full hover:bg-gray-100 transition"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 py-4 bg-white border-t border-gray-200 animate-slideInDown rounded-b-xl shadow-lg">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-base font-medium text-gray-800 hover:text-indigo-600 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
