
// import { useState, useEffect } from 'react';
// import { Menu, X, Clock } from 'lucide-react';
// import logo from "../assets/logo.png";
// import Marquee from 'react-fast-marquee';
// import {Link} from 'react-router-dom'

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [timeRemaining, setTimeRemaining] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   });

//   // Conference start date: December 8, 2025
//   const conferenceDate = new Date('December 8, 2025 00:00:00');

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const now = new Date();
//       setCurrentTime(now);

//       // Calculate time remaining
//       const diffTime = conferenceDate - now;

//       if (diffTime > 0) {
//         const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

//         setTimeRemaining({ days, hours, minutes, seconds });
//       } else {
//         // Conference has started
//         setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//       }
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const navLinks = [
//     { name: 'Home', to: '/' },
//     { name: 'About', to: '/about' },
//     { name: 'Speakers', to: '/speakers' },
//     { name: 'Schedule', to: '/schedule' },
//     { name: 'Workshops', to: '/workshops' },
//     { name: 'Contact', to: '/contact' },
//   ];

//   return (
//     <header className="w-full fixed top-0 left-0 bg-gradient-to-r from-blue-100 via-white to-purple-100 z-50 font-sans">
//       <div className="bg-blue/60 backdrop-blur-lg shadow-md border-b">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-8 px-6 md:px-1 gap-4">
//           <div className="flex items-center gap-4">
//             <img src={logo} alt="IndoCrypt Logo" className="w-20 h-20 object-contain drop-shadow-lg" />
//             <div>
//               <h1 className="text-3xl font-extrabold tracking-tight leading-tight text-gray-900">
//                 IndoCrypt <span className="text-indigo-600">2025</span>
//               </h1>
//               <p className="text-sm text-gray-700">
//                 International Conference on Cryptology in India
//               </p>
//             </div>
//           </div>

//           {/* Countdown Timer replacing the location info */}
//           <div className="flex flex-col items-end space-y-2 bg-gradient-to-r from-indigo-50 to-blue-50 p-3 rounded-lg shadow-sm border border-indigo-100">
//             <div className="flex items-center gap-2">
//               <Clock size={18} className="text-indigo-600" />
//               <p className="text-sm font-medium text-gray-700">
//                 {currentTime.toLocaleTimeString('en-US', { 
//                   hour: '2-digit', 
//                   minute: '2-digit',
//                   hour12: false 
//                 })}
//               </p>
//             </div>

//             <div className="flex gap-2 text-center">
//               <div className="bg-indigo-100 rounded px-2 py-1">
//                 <span className="block text-lg font-bold text-indigo-700">{timeRemaining.days}</span>
//                 <span className="text-xs text-indigo-600">DAYS</span>
//               </div>
//               <div className="bg-indigo-100 rounded px-2 py-1">
//                 <span className="block text-lg font-bold text-indigo-700">{timeRemaining.hours}</span>
//                 <span className="text-xs text-indigo-600">HRS</span>
//               </div>
//               <div className="bg-indigo-100 rounded px-2 py-1">
//                 <span className="block text-lg font-bold text-indigo-700">{timeRemaining.minutes}</span>
//                 <span className="text-xs text-indigo-600">MIN</span>
//               </div>
//               <div className="bg-indigo-100 rounded px-2 py-1">
//                 <span className="block text-lg font-bold text-indigo-700">{timeRemaining.seconds}</span>
//                 <span className="text-xs text-indigo-600">SEC</span>
//               </div>
//             </div>

//             <p className="text-xs text-gray-600 text-center">IIIT Bhubaneswar, Odisha, India</p>
//           </div>
//         </div>
//       </div>

//       <Marquee gradient={false} speed={50} className="bg-blue-500 text-white py-2 text-sm font-medium shadow-inner">
//         <div className="zigzag-line"></div>
//         🎉 Early Bird Registration ends May 30! &nbsp;&nbsp;&nbsp; 📢 Call for Papers open now! &nbsp;&nbsp;&nbsp; 🎓 Keynote by Dr. Alice Cryptman!
//         <div className="zigzag-line"></div>
//       </Marquee>

//       <div className="bg-white/70 backdrop-blur-md border-b border-white/20 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-center py-1"> {/* Centering the nav links */}
//           <nav className="flex gap-6 text-gray-800 text-sm font-semibold">
//             {navLinks.map(link => (
//               <Link

//                 key={link.name}
//                 to={link.to}
//                 className="relative px-4 py-2 transition duration-200 hover:text-indigo-700 group"
//               >
//                 {link.name}
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
//               </Link>
//             ))}
//           </nav>

//           <div className="md:hidden">
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="text-gray-800 p-2 rounded-full hover:bg-gray-100 transition"
//             >
//               {menuOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>

//         {menuOpen && (
//           <div className="md:hidden px-6 py-4 bg-white border-t border-gray-200 animate-slideInDown rounded-b-xl shadow-lg">
//             {navLinks.map(link => (
//               <Link
//                 key={link.name}
//                 to={link.to}
//                 onClick={() => setMenuOpen(false)}
//                 className="block py-3 text-base font-medium text-gray-800 hover:text-indigo-600 transition-all cursor-pointer"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;


import { useState, useEffect } from 'react';
import { Menu, X, Clock, ChevronDown } from 'lucide-react';
import logo from "../assets/logo.png";
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

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

  const conferenceDate = new Date('December 8, 2025 00:00:00');

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
    { name: 'Committee', to: '/committee' },
    {
      name: 'Speakers', to: '/speakers'
    },
    {
      name: 'General',
      children: [
        { name: 'Sponsors', to: '/sponsors' },
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
        { name: 'Past IndoCrypt', to: '/past-indocrypt' },
      ]
    },
    {
      name: 'For Authors',
      children: [
        { name: 'Paper Submission', to: '/paper-submission' },
        { name: 'Call for Papers', to: '/call-for-papers' },
        { name: 'Registration', to: '/registration' },
        { name: 'Guidelines', to: '/guidelines' },
      ]
    },
    {
      name: 'Travel',
      children: [
        { name: 'Venue', to: '/venue' },
        { name: 'Accommodation', to: '/accommodation' },
        { name: 'Visa', to: '/visa' },
        { name: 'Travel Grant', to: '/travel-grant' },
        { name: 'Places of Interest', to: '/places-of-interest' },
        { name: 'Emergency Contact', to: '/emergency-contact' },
      ]
    },
  ];

  return (
    <header className="w-full fixed top-0 left-0 bg-gradient-to-r from-blue-100 via-white to-purple-100 z-50 font-sans">
      {/* Header Top */}
      <div className="bg-blue/60 backdrop-blur-lg shadow-md border-b">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-8 px-6 md:px-1 gap-4">
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

      {/* Marquee */}
      <Marquee gradient={false} speed={50} className="bg-blue-500 text-white py-2 text-sm font-medium shadow-inner">
        🎉 Early Bird Registration ends May 30! &nbsp;&nbsp;&nbsp; 📢 Call for Papers open now! &nbsp;&nbsp;&nbsp; 🎓 Keynote by Dr. Alice Cryptman!
      </Marquee>

      {/* NavBar */}
      <div className="bg-white/70 backdrop-blur-md border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-center py-2">
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

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 p-2 rounded-full hover:bg-gray-100 transition"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

