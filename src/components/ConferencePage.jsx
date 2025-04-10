import { motion } from 'framer-motion';

const ConferencePage = () => {
  return (
    <div className="font-sans">

      {/* About the Conference Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-300 to-indigo-100 text-gray-800 text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-semibold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Indocrypt 2025
        </motion.h2>
        <p className="text-base sm:text-lg max-w-4xl mx-auto mb-12 opacity-80">
          Indocrypt 2025 is India’s premier cryptography and information security conference, where world-renowned experts converge to discuss the latest trends, breakthroughs, and challenges in cryptography. 
          Join us for a deep dive into cryptographic advancements that are shaping the future.
        </p>
        <div className="flex justify-center gap-6">
          <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-full shadow-md transform transition duration-300 hover:scale-105">
            Learn More
          </button>
          <button className="px-8 py-3 border border-indigo-600 hover:bg-indigo-600 hover:text-white text-indigo-600 text-lg font-semibold rounded-full shadow-md transform transition duration-300 hover:scale-105">
            Register Now
          </button>
        </div>
      </section>

      {/* Keynote Speakers Section */}
      <section className="py-20 bg-white text-gray-800 text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-semibold mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Meet Our Keynote Speakers
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Speaker 1 */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 hover:shadow-xl">
            <img src="https://randomuser.me/api/portraits/men/10.jpg" alt="Speaker 1" className="rounded-full w-32 h-32 mx-auto mb-4 border-4 border-indigo-300" />
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="opacity-70 mb-4">Professor of Cryptography, MIT</p>
            <p className="text-sm">John will discuss quantum cryptography's role in securing data against future computing threats.</p>
          </div>
          {/* Speaker 2 */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 hover:shadow-xl">
            <img src="https://randomuser.me/api/portraits/women/14.jpg" alt="Speaker 2" className="rounded-full w-32 h-32 mx-auto mb-4 border-4 border-indigo-300" />
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="opacity-70 mb-4">Head of Cybersecurity, Stanford University</p>
            <p className="text-sm">Jane will explore the intersection of blockchain and cryptography in decentralized systems.</p>
          </div>
          {/* Speaker 3 */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 hover:shadow-xl">
            <img src="https://randomuser.me/api/portraits/men/25.jpg" alt="Speaker 3" className="rounded-full w-32 h-32 mx-auto mb-4 border-4 border-indigo-300" />
            <h3 className="text-xl font-semibold mb-2">Chris Brown</h3>
            <p className="opacity-70 mb-4">Professor of Advanced Cryptography, University of Oxford</p>
            <p className="text-sm">Chris will discuss how machine learning impacts modern cryptographic algorithms.</p>
          </div>
        </div>
      </section>

      {/* Conference Schedule Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-indigo-100 text-gray-800 text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-semibold mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Conference Schedule
        </motion.h2>
        <div className="flex justify-center gap-12">
          {/* Morning Schedule */}
          <div className="w-1/3 text-left bg-white text-black rounded-lg shadow-xl p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-4">Morning Session</h3>
            <ul className="space-y-4">
              <li>9:00 AM - Opening Keynote: Cryptography and Future Threats</li>
              <li>10:30 AM - Blockchain & Cryptography: Securing Digital Assets</li>
              <li>12:00 PM - Networking & Coffee Break</li>
            </ul>
          </div>
          {/* Afternoon Schedule */}
          <div className="w-1/3 text-left bg-white text-black rounded-lg shadow-xl p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-4">Afternoon Session</h3>
            <ul className="space-y-4">
              <li>1:00 PM - Advanced Cryptography in Real-World Applications</li>
              <li>3:00 PM - AI & Cryptography: Evolving Security Models</li>
              <li>4:30 PM - Closing Remarks & Networking</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Topics Covered Section */}
      <section className="py-20 bg-white text-gray-800 text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-semibold mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Topics Covered
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Topics */}
          <div className="bg-indigo-50 p-8 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Cryptography Fundamentals</h3>
            <p>Learn the foundational principles and algorithms that power cryptographic systems.</p>
          </div>
          <div className="bg-indigo-50 p-8 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Blockchain Security</h3>
            <p>How cryptography secures blockchain networks and digital assets.</p>
          </div>
          <div className="bg-indigo-50 p-8 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Quantum Cryptography</h3>
            <p>The impact of quantum computing on current encryption techniques and future prospects.</p>
          </div>
          <div className="bg-indigo-50 p-8 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">AI in Cryptography</h3>
            <p>How artificial intelligence is shaping the future of cryptographic algorithms and security.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-indigo-500 text-center text-white">
        <motion.h2
          className="text-4xl sm:text-5xl font-semibold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Join Us at Indocrypt 2025
        </motion.h2>
        <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto opacity-80">
          Don’t miss your chance to be a part of the most exciting cryptography event in India. Register now for a chance to meet leading experts and learn the future of cryptography.
        </p>
        <a
          href="/register"
          className="px-8 py-4 bg-white text-indigo-600 rounded-full shadow-xl text-xl font-semibold transform transition duration-300 hover:scale-105"
        >
          Register Now
        </a>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 bg-gray-900 text-center text-white">
        <motion.h2
          className="text-4xl sm:text-5xl font-semibold mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Sponsors
        </motion.h2>
        <div className="flex justify-center gap-12">
          <img src="https://via.placeholder.com/150x50?text=Company+1" alt="Sponsor 1" className="h-16 opacity-80 hover:opacity-100 transform transition duration-300" />
          <img src="https://via.placeholder.com/150x50?text=Company+2" alt="Sponsor 2" className="h-16 opacity-80 hover:opacity-100 transform transition duration-300" />
          <img src="https://via.placeholder.com/150x50?text=Company+3" alt="Sponsor 3" className="h-16 opacity-80 hover:opacity-100 transform transition duration-300" />
        </div>
      </section>

    </div>
  );
};

export default ConferencePage;
