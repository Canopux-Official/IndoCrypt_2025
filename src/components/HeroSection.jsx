import { motion } from 'framer-motion';
import background from "../assets/background.png";

const HeroSection = () => {
  return (
    <div
      className="relative w-screen bg-cover bg-center mt-3"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: "60vh"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">
          Indocrypt 2025
        </h1>
        <p className="text-lg md:text-2xl mb-4 max-w-3xl">
          India’s Premier Conference on Cryptography & Information Security
        </p>
        
        <div className="text-sm md:text-lg font-medium mb-8 flex flex-wrap justify-center gap-4">
          <span className="text-cyan-300 drop-shadow-md animate-pulse">📍 IIIT Bhubaneswar</span>
          <span className="text-white">•</span>
          <span className="text-yellow-300 drop-shadow-md">📅 December 10 - 13, 2025</span>
        </div>

        <div className="flex gap-4">
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-2xl shadow-lg transition duration-300">
            Register Now
          </button>
          <button className="px-6 py-3 border border-white rounded-2xl hover:bg-white hover:text-black transition duration-300">
            View Schedule
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
