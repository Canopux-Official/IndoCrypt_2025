import { useState } from 'react';
import { Menu, X } from 'lucide-react';

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
    <header className="w-full fixed top-0 left-0 z-50">
      <div className="w-full bg-gradient-to-r from-blue-100 via-white to-purple-100 text-gray-900 py-6 px-4 md:px-12 shadow-sm border-b">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="IndoCrypt Logo" className="w-14 h-14" />
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                IndoCrypt <span className="text-blue-600">2025</span>
              </h1>
              <p className="text-sm md:text-base text-gray-600">
                International Conference on Cryptology in India
              </p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-lg font-semibold">🗓️ December 8–12, 2025</p>
            <p className="text-md text-gray-700">📍 IIIT Bhubaneswar, Odisha, India</p>
          </div>
        </div>
      </div>

      <div className="w-full bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between py-3">
          <nav className="hidden md:flex gap-8 text-gray-800 text-sm font-medium">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="hover:text-blue-600 transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden px-4 pb-4 bg-white">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-sm text-gray-800 hover:text-blue-600"
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
