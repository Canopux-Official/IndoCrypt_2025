import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import drdo from '../assets/platinum_sponsors/drdo.png'
import exnetwork from '../assets/platinum_sponsors/exnetwork.png'
import nbhm from '../assets/platinum_sponsors/nbhm.png'
import odyssey from '../assets/platinum_sponsors/odyssey.png'
import thales from '../assets/platinum_sponsors/thales.png'
import elmack from '../assets/silver_sponsors/elmack.png'
import matrix from '../assets/silver_sponsors/matrix.png'
import ntro from '../assets/silver_sponsors/ntro.png'
import payatu from '../assets/silver_sponsors/payatu.png'
import prama from '../assets/silver_sponsors/prama.png'
import skillsda from '../assets/silver_sponsors/skillsda.png'
import tnscst from '../assets/silver_sponsors/tnscst.png'
import zoho from '../assets/silver_sponsors/zoho.png'
import bharat from '../assets/gold_sponsors/bharat.png'




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

      <section className="bg-gray-900 text-white">
        {/* Platinum Sponsors */}
        <div className="py-12 bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900">
          <h3 className="text-3xl sm:text-4xl font-semibold mb-6 text-center text-white">
            Platinum Sponsors
          </h3>
          <Marquee gradient={false} speed={50} className="py-2">
            <img src={drdo} alt="Platinum 1" className="h-32 w-auto mx-8 object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300" />
            <img src={exnetwork} alt="Platinum 2" className="h-32 w-auto mx-8 object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300" />
            <img src={nbhm} alt="Platinum 3" className="h-32 w-auto mx-8 object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300" />
            <img src={odyssey} alt="Platinum 4" className="h-32 w-auto mx-8 object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300" />
            <img src={thales} alt="Platinum 5" className="h-40 w-auto mx-8 object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300" />
          </Marquee>
        </div>

        {/* Gold Sponsors */}
        <div className="py-12 bg-gradient-to-r from-gray-900 via-yellow-800 to-gray-900">
          <h3 className="text-3xl sm:text-4xl font-semibold mb-6 text-center text-white">
            Gold Sponsors
          </h3>
          <img src={bharat} alt="Gold 1" className="h-32 m-auto text-center w-auto object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300" />
        </div>

        {/* Silver Sponsors */}
        <div className="py-12 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900">
          <h3 className="text-3xl sm:text-4xl font-semibold mb-6 text-center text-white">
            Silver Sponsors
          </h3>
          <Marquee gradient={false} speed={40} className="py-2">
            <div >
              <img src={elmack} alt="Silver 1" className="h-32 w-auto mx-8 object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300 " />
            </div>
            <div>
              <img src={matrix} alt="Silver 2" className="h-32 w-auto mx-8 object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300" />
            </div>
            <div>
              <img src={ntro} alt="Silver 3" className="h-32 w-auto mx-8 object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300" />
            </div>
            <div>
              <img src={payatu} alt="Silver 4" className="h-32 w-auto mx-8 object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300" />
            </div>
            <div>
              <img src={prama} alt="Silver 5" className="h-32 w-auto mx-8 object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300" />
            </div>
            <div>
              <img src={skillsda} alt="Silver 6" className="h-32 w-auto mx-8 object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300" />
            </div>
            <div>
              <img src={tnscst} alt="Silver 7" className="h-32 w-auto mx-8 object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300" />
            </div>
            <div>
              <img src={zoho} alt="Silver 8" className="h-32 w-auto mx-8 object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300" />
            </div>







          </Marquee>
        </div>
      </section>


    </div>
  );
};

export default ConferencePage;
