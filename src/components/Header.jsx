
import { useState, useEffect } from 'react';
import { Menu, X, Clock, ChevronDown } from 'lucide-react';
import logo from "../assets/logo.png";
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import { FaBullhorn } from 'react-icons/fa';
import { MdAppRegistration } from 'react-icons/md';
import { GiGraduateCap } from 'react-icons/gi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const conferenceDate = new Date('December 14, 2025 00:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      const diffTime = conferenceDate - now;

      if (diffTime > 0) {
        const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);
        setTimeRemaining({ days, hours, minutes, seconds });
      } else {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { name: 'Home', to: '/' },
    {
      name: 'Committees',
      children: [
        { name: 'Program Committe', to: '/program-committe' },
        { name: 'General Chairs', to: '/general-chairs' },
        { name: 'Organizing Committe', to: '/organizing-committe' },
        { name: 'Advisory Committe', to: '/advisory-committe' },
        // { name: 'Technical Committe', to: '/technical-committe' },
        { name: 'Finance and Advisory Committe', to: '/finance-committe' },
        { name: 'Publicity Chair', to: '/publicity-chair' },
        { name: 'Industry Chair', to: '/industry-chair' },
      ]
    },
    {
      name: 'Speakers', to: '/speakers'
    },
    {
      name: 'General',
      children: [,
        { name: 'Partners', to: '/partners' },
        { name: 'About', to: '/about' },
        { name: 'FAQ', to: '/faq' },
        { name: 'Contact', to: '/contact' },
      ]
    },
    {
      name: 'Program',
      children: [
        { name: 'Program', to: '/program' },
        { name: 'Past Indocrypt', to: '/past-indocrypt' },
      ]
    },
    {
      name: 'For Authors',
      children: [
        { name: 'Call for Papers', to: '/call-for-papers' },
        { name: 'Guidelines', to: '/guidelines' },
        { name: 'Paper Submission', to: '/paper-submission' },
        { name: 'Registration', to: '/registration' },
      ]
    },
    {
      name: 'Travel',
      children: [
        { name: 'Venue', to: '/venue' },
        { name: 'Accommodation', to: '/accommodation' },
        { name: 'Visa', to: '/visa' },
        { name: 'Places of Interest', to: '/places-of-interest' },
      ]
    },
  ];


  // this is for the announcements
  const announcements = [
    { icon: <FaBullhorn color='red' className="inline mr-1" />, text: "Call For Papers", link: "/call-for-papers" },
    { icon: <MdAppRegistration color='violet' className="inline mr-1" />, text: "Registration", link: "/registration" },
    { icon: <GiGraduateCap color='yellow' className="inline mr-1" />, text: "Paper Submission", link: "/paper-submission" },
  ];


  return (
    <header className="w-full font-sans">
      {/* Static Top Header */}
      <div className="bg-blue/60 backdrop-blur-lg shadow-md border-b">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-8 px-6 md:px-1 gap-4">
          <div className="flex items-center gap-4">
            <img src={logo} alt="IndoCrypt Logo" className="w-20 h-20 object-contain drop-shadow-lg" loading="lazy"/>
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight leading-tight text-gray-900">
                Indocrypt <span className="text-indigo-600">2025</span>
              </h1>
              {/* <p className="text-sm text-indigo-700 font-semibold mt-1 bg-indigo-50 px-2 py-1 rounded-md inline-block">
                Sponsored by ISEA-III Project under MeitY, Govt. of India
              </p> */}
              <p className="text-xl text-indigo-700 font-semibold mt-1 bg-indigo-50 px-2 py-1 rounded-md inline-block">
                Sponsored by ISEA-III Project under MeitY, Govt. of India
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end space-y-2 bg-gradient-to-r from-indigo-50 to-blue-50 p-3 rounded-lg shadow-sm border border-indigo-100">
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-indigo-600" />
              <p className="text-sm font-medium text-gray-700">
                {currentTime.toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: false
                })}
              </p>
            </div>
            <div className="flex gap-2 text-center">
              {['days', 'hours', 'minutes', 'seconds'].map((unit, i) => (
                <div key={i} className="bg-indigo-100 rounded px-2 py-1">
                  <span className="block text-lg font-bold text-indigo-700">{timeRemaining[unit]}</span>
                  <span className="text-xs text-indigo-600">{unit.toUpperCase()}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-600 text-center">IIIT Bhubaneswar, Odisha, India</p>
          </div>
        </div>
      </div>

      {/* Sticky Navbar Section - Only this part is sticky now */}
      <div className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-white/20 shadow-sm">
        <Marquee gradient={false} speed={50} className="bg-blue-500 text-white py-2 text-sm font-medium shadow-inner">
          {announcements.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="mx-6 hover:underline flex items-center"
            >
              {item.icon}
              {item.text}
            </a>
          ))}
        </Marquee>



        <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between py-2">
          <nav className="hidden md:flex gap-6 text-gray-800 text-sm font-semibold relative">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                <div
                  className="flex items-center gap-1 px-4 py-2 cursor-pointer hover:text-indigo-700 hover:bg-indigo-50 rounded-md transition duration-300 ease-in-out"
                >
                  {link.children ? (
                    <>
                      <span>{link.name}</span>
                      <ChevronDown size={14} />
                    </>
                  ) : (
                    <Link to={link.to} className="w-full h-full">{link.name}</Link>
                  )}
                </div>

                {link.children && (
                  <div className="absolute left-0 mt-1 hidden group-hover:block bg-white shadow-lg rounded-lg border border-gray-200 min-w-[200px] z-50 transition-all duration-300 ease-in-out">
                    {link.children.map((sublink, subIndex) => (
                      <Link
                        key={subIndex}
                        to={sublink.to}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition duration-200"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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


          {/* mobile version */}
        {menuOpen && (
          <div className="md:hidden px-6 py-4 bg-white border-t border-gray-200 animate-slideInDown rounded-b-xl shadow-lg">
            {navLinks.map((link, index) => (
              <div key={index} className="mb-2">
                {link.children ? (
                  <>
                    <div
                      onClick={() =>
                        setDropdownOpen(dropdownOpen === index ? null : index)
                      }
                      className="flex justify-between items-center py-2 cursor-pointer text-base font-medium text-gray-800 hover:text-indigo-600"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        size={18}
                        className={`transform transition-transform duration-300 ${dropdownOpen === index ? 'rotate-180' : ''
                          }`}
                      />
                    </div>
                    {dropdownOpen === index && (
                      <div className="ml-4">
                        {link.children.map((sublink, subIndex) => (
                          <Link
                            key={subIndex}
                            to={sublink.to}
                            onClick={() => setMenuOpen(false)}
                            className="block py-2 pl-2 text-sm text-gray-600 hover:text-indigo-600"
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 text-base font-medium text-gray-800 hover:text-indigo-600"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}


      </div>
    </header>

  );
};

export default Header;

