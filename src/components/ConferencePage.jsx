import { motion } from 'framer-motion';
import OrganizerSection from './OrganizerSection';
import { Link, useNavigate } from 'react-router-dom';
import SponsorsImage from './SponsorsImage';

const ConferencePage = () => {


  const navigate=useNavigate()
  const handleRegister = () => {
    navigate("/register-page")
  }

  const handleSchedule = () => {
    navigate("/schedule")
  }

  const handleLearnMore=()=>{
    navigate("/about")
  }

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
          <button onClick={handleLearnMore} className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-full shadow-md transform transition duration-300 hover:scale-105">
            Learn More
          </button>
          <button onClick={handleRegister} className="px-8 py-3 border border-indigo-600 hover:bg-indigo-600 hover:text-white text-indigo-600 text-lg font-semibold rounded-full shadow-md transform transition duration-300 hover:scale-105">
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
          Important Dates
        </motion.h2>
        <div className="flex justify-center gap-12">
          <div className="w-2/3 text-left bg-white text-black rounded-lg shadow-xl p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-4">All deadlines correspond to 23:59:59 anywhere on Earth (UTC-12).</h3>
            <ul className="space-y-4">
              <li> September 10, 2025 -Paper submission deadline</li>
              <li>October 10, 2025 - Notification to authors</li>
              <li>October 15, 2025 - Final manuscripts due </li>
              <li>December 14-17, 2025 - Dates of the conference </li>
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
          Topics to be Covered
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Topics */}
          <div className="bg-indigo-50 p-8 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">To be Updated</h3>
            {/* <p>Learn the foundational principles and algorithms that power cryptographic systems.</p> */}
          </div>
          <div className="bg-indigo-50 p-8 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">To be Updated</h3>
            {/* <p>How cryptography secures blockchain networks and digital assets.</p> */}
          </div>
          <div className="bg-indigo-50 p-8 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">To be Updated</h3>
            {/* <p>The impact of quantum computing on current encryption techniques and future prospects.</p> */}
          </div>
          <div className="bg-indigo-50 p-8 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">To be Updated</h3>
            {/* <p>How artificial intelligence is shaping the future of cryptographic algorithms and security.</p> */}
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
        <Link
          to="/register-page"
          className="px-8 py-4 bg-white text-indigo-600 rounded-full shadow-xl text-xl font-semibold transform transition duration-300 hover:scale-105"
        >
          Register Now
        </Link>
      </section>


      {/* organizer section */}
      <OrganizerSection />

      {/* Sponsors Section */}

      <SponsorsImage/>


    </div>
  );
};

export default ConferencePage;
