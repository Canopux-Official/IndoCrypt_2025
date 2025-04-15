import React, { useEffect } from "react";
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Building, Award, BookOpen } from 'lucide-react';
import IIITBhubaneswarLogo from "../assets/IIIT-Bhubaneswar.webp";
// import ConferenceBanner from "../assets/images/conference-banner.jpg";
import CryptoImage from "../assets/crypto-illustration.jpg";
import TeamworkImage from "../assets/teamwork.jpg";
import { useNavigate } from 'react-router-dom';

const About = () => {


  const navigate=useNavigate()
  const handleRegister = () => {
    navigate("/register-page")
  }

  const handleSubmitPaper=()=>{
    navigate("/paper-submission")
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const objectives = [
    {
      title: "Research Excellence",
      description: "Foster cutting-edge research in cryptography and promote collaboration between academia and industry.",
      icon: <BookOpen className="text-purple-600" size={28} />
    },
    {
      title: "Knowledge Exchange",
      description: "Create a platform for researchers and practitioners to exchange ideas, methodologies, and findings.",
      icon: <Users className="text-purple-600" size={28} />
    },
    {
      title: "Innovation Spotlight",
      description: "Showcase innovative solutions and breakthroughs in post-quantum cryptography and security frameworks.",
      icon: <Award className="text-purple-600" size={28} />
    },
    {
      title: "Capacity Building",
      description: "Support early career researchers and students by providing exposure to leading experts and latest developments.",
      icon: <Building className="text-purple-600" size={28} />
    }
  ];

  const pastEditions = [
    { year: "2023", location: "IIT Kharagpur", theme: "Emerging Cryptographic Paradigms" },
    { year: "2022", location: "IIT Roorkee", theme: "Post-Quantum Cryptography" },
    { year: "2021", location: "Virtual Conference", theme: "Cryptography in the Post-Covid Era" },
    { year: "2020", location: "IIT Jodhpur", theme: "Cryptographic Implementations" },
    { year: "2019", location: "IIT Hyderabad", theme: "Lightweight Cryptography" }
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-100 to-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          {/* <img
            src={ConferenceBanner}
            alt="Background Pattern"
            className="w-full h-full object-cover"
          /> */}
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">About IndoCrypt 2025</h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              India's Premier International Conference on Cryptography and Information Security
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-8 mt-10">
            <div className="flex items-center">
              <Calendar className="text-purple-600 mr-3" size={24} />
              <span className="text-xl text-gray-700">14 - 17 December, 2025</span>
            </div>
            <div className="flex items-center">
              <MapPin className="text-purple-600 mr-3" size={24} />
              <span className="text-xl text-gray-700">IIIT Bhubaneswar, Odisha</span>
            </div>
            <div className="flex items-center">
              <Users className="text-purple-600 mr-3" size={24} />
              <span className="text-xl text-gray-700">To Be Updated</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Conference */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">The Conference</h2>
              <div className="h-1 w-24 bg-purple-600 mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                IndoCrypt is India's flagship annual international conference on cryptology that brings together researchers, practitioners, and students from around the world. Since its inception, IndoCrypt has been at the forefront of cryptographic research, showcasing groundbreaking work in both theoretical and applied cryptography.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The 2025 edition, hosted by IIIT Bhubaneswar, will focus on the emerging challenges and opportunities in post-quantum cryptography, secure multi-party computation, and cryptographic protocol analysis. The conference will feature keynote talks, technical presentations, poster sessions, and workshops conducted by experts from leading research institutions and industry.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                IndoCrypt 2025 aims to foster collaboration between academia and industry, providing a platform for researchers to present their latest findings and for practitioners to share real-world implementation challenges and solutions.
              </p>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={CryptoImage}
                  alt="Cryptography Illustration"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Host Institution */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Hosted By IIIT Bhubaneswar</h2>
              <div className="h-1 w-24 bg-purple-600 mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The International Institute of Information Technology Bhubaneswar (IIIT Bhubaneswar) is proud to host IndoCrypt 2025. Established in 2006, IIIT Bhubaneswar has emerged as a center of excellence in information technology education and research in eastern India.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The institute's Center for Security, Theory and Algorithmic Research (CSTAR) has been actively contributing to cryptography research, with special focus on lightweight cryptography, post-quantum cryptographic constructions, and secure implementations of cryptographic primitives.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                IIIT Bhubaneswar's vibrant campus, situated amidst the serene environment of Gothapatna, provides an ideal setting for academic discourse and collaboration that IndoCrypt aims to foster.
              </p>
            </motion.div>

            <motion.div
              className="lg:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="max-w-md bg-white rounded-2xl overflow-hidden shadow-xl p-8">
                <img
                  src={IIITBhubaneswarLogo}
                  alt="IIIT Bhubaneswar Logo"
                  className="w-64 h-auto mx-auto mb-6"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">IIIT Bhubaneswar</h3>
                  <p className="text-gray-600">Gothapatna, Bhubaneswar</p>
                  <p className="text-gray-600">Odisha, India</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conference Objectives */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Conference Objectives</h2>
            <div className="h-1 w-24 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              IndoCrypt 2025 aims to create a vibrant ecosystem for cryptographic research and innovation in India and beyond.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* {objectives.map((objective, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={fadeIn}
              >
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {objective.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{objective.title}</h3>
                <p className="text-gray-600 text-center">{objective.description}</p>
              </motion.div>
            ))} */}

            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={fadeIn}
              >
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {objective.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">To Be Updated</h3>
                <p className="text-gray-600 text-center">To Be Updated</p>
              </motion.div>
            ))}

          </motion.div>
        </div>
      </section>

      {/* Past Editions */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Past Editions</h2>
            <div className="h-1 w-24 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              IndoCrypt has a rich history of bringing together the global cryptography community at prestigious institutions across India.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl shadow-md overflow-hidden">
              <thead className="bg-purple-600 text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Year</th>
                  <th className="py-4 px-6 text-left">Host Institution</th>
                  <th className="py-4 px-6 text-left">Conference Theme</th>
                </tr>
              </thead>
              <tbody>
                {/* {pastEditions.map((edition, index) => (
                  <motion.tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-purple-50"}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <td className="py-4 px-6 border-b border-gray-200">{edition.year}</td>
                    <td className="py-4 px-6 border-b border-gray-200">{edition.location}</td>
                    <td className="py-4 px-6 border-b border-gray-200">{edition.theme}</td>
                  </motion.tr>
                ))} */}

                {pastEditions.map((edition, index) => (
                  <motion.tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-purple-50"}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <td className="py-4 px-6 border-b border-gray-200">To Be Updated</td>
                    <td className="py-4 px-6 border-b border-gray-200">To Be Updated</td>
                    <td className="py-4 px-6 border-b border-gray-200">To Be Updated</td>
                  </motion.tr>
                ))}

              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-800 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div
              className="lg:w-3/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us at IndoCrypt 2025</h2>
              <p className="text-lg opacity-90 mb-8 leading-relaxed">
                Be part of India's premier cryptography conference and connect with leading researchers, industry experts, and fellow enthusiasts. Experience thought-provoking discussions, cutting-edge research presentations, and valuable networking opportunities.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={handleRegister} className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-md hover:bg-purple-100 transition-colors duration-300">
                  Register Now
                </button>
                <button onClick={handleSubmitPaper} className="px-6 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-purple-700 transition-colors duration-300">
                  Submit Paper
                </button>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-2/5"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={TeamworkImage}
                alt="Collaboration"
                className="w-full rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default About;