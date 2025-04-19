// import { motion } from 'framer-motion';
// import background from "../assets/background.png";
// import { useNavigate } from 'react-router-dom';

// const HeroSection = () => {

//   const navigate=useNavigate()
//   const handleRegister = () => {
//     navigate("/register-page")
//   }

//   const handleSchedule = () => {
//     navigate("/schedule")
//   }

//   return (
//     <div
//       className="relative w-screen bg-cover bg-center mt-3"
//       style={{
//         backgroundImage: `url(${background})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         height: "60vh"
//       }}
//     >
//       <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>

//       <motion.div
//         className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">
//           Indocrypt 2025
//         </h1>
//         <p className="text-lg md:text-2xl mb-4 max-w-3xl">
//           India's Premier Conference on Cryptography & Information Security
//         </p>

//         <div className="text-sm md:text-lg font-medium mb-8 flex flex-wrap justify-center gap-4">
//           <span className="text-cyan-300 drop-shadow-md animate-pulse">📍 IIIT Bhubaneswar</span>
//           <span className="text-white">•</span>
//           <span className="text-yellow-300 drop-shadow-md">📅 December 14 - 17, 2025</span>
//         </div>

//         <div className="flex gap-4">
//           <button onClick={handleRegister} className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-2xl shadow-lg transition duration-300">
//             Register Now
//           </button>
//           <button onClick={handleSchedule} className="px-6 py-3 border border-white rounded-2xl hover:bg-white hover:text-black transition duration-300">
//             View Schedule
//           </button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default HeroSection;


import { motion } from 'framer-motion';
import background from "../assets/background.png"; // Existing hero overlay
import bg4 from '../assets/Places of Interest/konarkChakra.jpg'; // can be same if duplicate
import bg1 from '../assets/Places of Interest/puri temple 2.jpeg';
import bg2 from '../assets/Places of Interest/Lingaraj 1.jpg';
import bg3 from '../assets/Places of Interest/konark 1.jpg'; // can be same if duplicate
import bg5 from '../assets/Places of Interest/khandagiri.jpg'; // can be same if duplicate
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register-page");
  };

  const handleSchedule = () => {
    navigate("/schedule");
  };

  // Create array with images duplicated for seamless loop
  const imageArray = [bg1, bg2, bg3, bg4, bg5];
  const allImages = [...imageArray, ...imageArray]; // Duplicate the image set

  return (
    <div className="relative w-screen h-[60vh] overflow-hidden mt-3">
      {/* Scrolling Background */}
      <motion.div
        className="absolute top-0 left-0 flex w-[200%] h-full"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear"
        }}
      >
        {allImages.map((img, index) => (
          <div
            key={index}
            className="h-full"
            style={{
              width: `${100 / allImages.length}%`, // Adjust width based on total images
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        ))}
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>

      {/* Hero Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">
          Indocrypt 2025
        </h1>
        <p className="text-lg md:text-2xl mb-4 max-w-3xl">
          India's Premier Conference on Cryptography & Information Security
        </p>

        <div className="text-sm md:text-lg font-medium mb-8 flex flex-wrap justify-center gap-4">
          <span className="text-cyan-300 drop-shadow-md animate-pulse">📍 IIIT Bhubaneswar</span>
          <span className="text-white">•</span>
          <span className="text-yellow-300 drop-shadow-md">📅 December 14 - 17, 2025</span>
        </div>

        <div className="flex gap-4">
          <button onClick={handleRegister} className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-2xl shadow-lg transition duration-300">
            Register Now
          </button>
          <button onClick={handleSchedule} className="px-6 py-3 border border-white rounded-2xl hover:bg-white hover:text-black transition duration-300">
            View Schedule
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;

