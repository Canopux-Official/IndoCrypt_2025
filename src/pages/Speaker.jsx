

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Calendar, MapPin, X } from 'lucide-react';
import {KeynoteSpeakers}  from '../assets/SpeakersDetails/KyeNoteSpeaker';
import {tutorialSpeakers}   from '../assets/SpeakersDetails/TutorialSpeaker';

// Custom marquee implementation without external library
const CustomMarquee = ({ children, speed = 40 }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    // Create a clone of the content for seamless looping
    const content = contentRef.current;
    const clone = content.cloneNode(true);
    containerRef.current.appendChild(clone);

    let animationId;
    let position = 0;

    const animate = () => {
      if (!containerRef.current) return;

      position -= speed / 100;

      // Reset position when first content is out of view
      if (position <= -content.offsetWidth) {
        position = 0;
      }

      containerRef.current.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [speed]);

  return (
    <div className="overflow-hidden">
      <div ref={containerRef} className="inline-flex">
        <div ref={contentRef} className="flex">
          {children}
        </div>
      </div>
    </div>
  );
};

// Abstract Modal Component with a single scrollbar for the entire modal
const AbstractModal = ({ isOpen, onClose, speaker }) => {
  if (!speaker) return null;

  return (  
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] flex flex-col"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
              <h3 className="text-2xl font-bold text-gray-800">{speaker.name}</h3>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>

            <div className="overflow-y-auto flex-grow">
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <div className="md:w-1/3 flex-shrink-0 border-r-8">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full rounded-lg shadow-md"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-bold text-purple-700 mb-2">{speaker.title}</h4>
                    <p className="text-gray-600 text-sm mb-2">{speaker.desg}</p>
                    <p className="text-gray-600 text-sm mb-4">{speaker.college}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-purple-700 mb-3">Abstract</h4>
                  <p className="text-gray-800 text-base leading-relaxed whitespace-pre-line">
                    {speaker.abstract}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 bg-gray-50 flex justify-end sticky bottom-0">
              <button
                onClick={onClose}
                className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Speaker = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (speaker) => {
    setSelectedSpeaker(speaker);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-100 to-white py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">Indocrypt 2025 Speakers</h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Join us for illuminating talks from experts in cryptography, security, and quantum-resistant algorithms.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-8 mt-10">
            <div className="flex items-center">
              <Calendar className="text-green-600 mr-3" size={24} />
              <span className="text-xl text-gray-700">December 14 - 17, 2025</span>
            </div>
            <div className="flex items-center">
              <MapPin className="text-green-600 mr-3" size={24} />
              <span className="text-xl text-gray-700">IIIT Bhubaneswar</span>
            </div>
            <div className="flex items-center">
              <Users className="text-green-600 mr-3" size={24} />
              <span className="text-xl text-gray-700">To be Updated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers List */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Keynote Speakers</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {KeynoteSpeakers.map((speaker) => (
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-blue-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="flex justify-center pt-10 pb-6">
                  <div className="w-48 h-48 overflow-hidden rounded-full shadow-md">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      loading="lazy"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 rounded-full"
                    />
                  </div>
                </div>
                <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{speaker.name}</h3>
                  <p className="text-gray-800 text-lg">{speaker.desg}</p>
                  <div className="mt-3">
                    <h4 className="font-semibold text-black text-lg">Title of the talk:</h4>
                    <p className="text-gray-800 text-base">{speaker.title}</p>
                  </div>
                  <div className="mt-3">
                    <h4 className="font-semibold text-black text-lg">Affiliation:</h4>
                    <p className="text-gray-600 text-base">{speaker.college}</p>
                  </div>
                </div>

                {/* Button container with proper positioning */}
                <div className="px-8 pb-8 pt-2">
                  <button 
                    onClick={() => openModal(speaker)}
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-300 text-sm flex items-center cursor-pointer"
                  >
                    View Abstract
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorial Speakers */}
      <section className="py-5 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Tutorial Speakers</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {tutorialSpeakers.map((speaker) => (
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-blue-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="flex justify-center pt-10 pb-6">
                  <div className="w-48 h-48 overflow-hidden rounded-full shadow-md">
                    <img
                      src={speaker.image}
                      loading="lazy"
                      alt={speaker.name}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 rounded-full"
                    />
                  </div>
                </div>
                <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{speaker.name}</h3>
                  <p className="text-gray-800 text-lg">{speaker.desg}</p>
                  <div className="mt-3">
                    <h4 className="font-semibold text-black text-lg">Title of the talk:</h4>
                    <p className="text-gray-800 text-base">{speaker.title}</p>
                  </div>
                  <div className="mt-3">
                    <h4 className="font-semibold text-black text-lg">Affiliation:</h4>
                    <p className="text-gray-600 text-base">{speaker.college}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Abstract Modal */}
      <AbstractModal
        isOpen={isModalOpen}
        onClose={closeModal}
        speaker={selectedSpeaker}
      />
    </div>
    </>
  );
};

export default Speaker;