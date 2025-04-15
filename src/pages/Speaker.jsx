import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Calendar, MapPin, X } from 'lucide-react';
import LucaDeFeo from "../assets/speaker/LucaDeFeo.jpg";
import LuccaHirschi from "../assets/speaker/LuccaHirschi.jpg";
import VincentRijmen from "../assets/speaker/VincentRijmen.png";

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
                  <div className="md:w-1/3 flex-shrink-0">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name} 
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-bold text-purple-700 mb-2">{speaker.title}</h4>
                    <p className="text-gray-600 text-lg mb-4">{speaker.bio}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-purple-700 mb-3">Abstract</h4>
                  <p className="text-gray-800 text-lg leading-relaxed">
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

  const speakers = [
    {
      id: 1,
      name: "Speaker",
      title: "SQIsign: past, present and future",
      abstract: "5 years ago, while everyone was raving about the compactness of SIKE's public keys and ciphertexts, the isogeny community was facing a conundrum: why isn't there any compact isogeny-based signature? The solution came from a technique that was originally devised to attack SIKE: thanks to the KLPT algorithm, it became possible for the first time to \"rerandomize\" isogeny walks, provided knowledge of endomorphism rings, which could then be used as cryptographic trapdoors. As our understanding of the connections between elliptic curves and their endomorphism rings expanded, new cryptographic discoveries kept coming. Among them, the celebrated equivalence between the supersingular isogeny path problem and the endomorphism ring problem. Some feared the devastating attacks on SIKE would spell the end of isogeny-based cryptography. Instead, the technique of higher-dimensional embeddings they introduced has generated a remarkable stream of research, using the new tools to construct and improve all sorts of schemes. As we celebrate SQIsign advancing to the 2nd round of the on-ramp NIST call for signatures today, higher-dimensional embeddings have entered SQIsign in various declinations (SQIsignHD, SQIsign2D, etc.), revolutionizing performance and proof techniques for isogeny-based signatures and heralding a new era for SQIsign.",
      bio: "Luca De Feo is a researcher at IBM Research Europe working on quantum-safe cryptography. He graduated from École Polytechnique in 2010 with a thesis on isogeny computations; He has been computing them ever since.",
      image: LucaDeFeo
    },
    {
      id: 2,
      name: "Speaker",
      title: "Logic-Based Verification of Cryptographic Protocols",
      abstract: "Today's information society crucially relies on cryptographic protocols. These protocols leverage cryptographic primitives to ensure confidentiality, integrity, or other security goals. Any attack in these protocols can have dramatic consequences, amplified by their ubiquity and our dependence on them for example in finance, business, and communication. And yet, critical and widely used cryptographic protocols have repeatedly been found to contain flaws in both their design and their implementation, opening the way for serious attacks (such as onTLS in web browsing, EMV in credit card transactions, 5G in mobilenetworks, WPA2 in WiFi, and e-voting systems). A widespread class of these vulnerabilities is logical attacks, which exploit flawed protocol logic. This keynote will examine two logic-based methods to preclude logical attacks from protocol designs and implementations. First, we will discuss automated formal verification methods based on Dolev-Yao (DY) models, which formally define and excel at finding such flaws on abstract specifications. This approach has evolved over 40 years and yielded significant results, which we will highlight. Nevertheless, these methods alone cannot secure protocol implementations, as bugs may introduce implementation-level logical attacks. We will present a recent research avenue that aims to integrate formal DY models with fuzz testing techniques to capture logical attacks in cryptographic protocol implementations.",
      bio: "Lucca Hirschi is a researcher at Inria (France) specializing in formal methods for security. His work focuses on analyzing and strengthening cryptographic protocols used in real-world systems.",
      image: LuccaHirschi
    },
    {
      id: 3,
      name: "Speaker",
      title: "Challenges in Symmetric-Key Cryptography",
      abstract: "Almost 25 years ago, the block cipher Rijndael was selected to become the Advanced Encryption Standard (AES). This concluded two research lines that were of great importance in the 1990's: the security evaluation of the DES and the design of a replacement mainstream blockcipher. Since then the community has identified a number of new challenges. Symmetric-key primitives are used in a wide range of new applications: zero-knowledge proofs, fully homomorphic encryption schemes, quantum-secure signature schemes, etc.In this talk we will give an overview of challenges in symmetric-keycryptography and the progress that has been made on them. We will also present our own selection of most important research topics in symmetric-key cryptography for the future.",
      bio: "Vincent Rijmen graduated in 1993 as electronics engineer from the KU Leuven (Belgium) and finished his doctoral dissertation on the design and analysis of block ciphers in 1997.",
      image: VincentRijmen
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-100 to-white py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">IndoCrypt 2025 Speakers</h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Join us for illuminating talks from experts in cryptography, security, and quantum-resistant algorithms.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-8 mt-10">
            <div className="flex items-center">
              <Calendar className="text-purple-600 mr-3" size={24} />
              <span className="text-xl text-gray-700">To be Updated</span>
            </div>
            <div className="flex items-center">
              <MapPin className="text-purple-600 mr-3" size={24} />
              <span className="text-xl text-gray-700">To be Updated</span>
            </div>
            <div className="flex items-center">
              <Users className="text-purple-600 mr-3" size={24} />
              <span className="text-xl text-gray-700">To be Updated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Marquee */}
      <div className="py-6 bg-purple-100">
        <CustomMarquee speed={40}>
          <div className="flex whitespace-nowrap">
            <span className="text-xl text-purple-800 font-medium mx-10">Post-Quantum Cryptography</span>
            <span className="text-xl text-purple-800 font-medium mx-10">Isogeny-Based Signatures</span>
            <span className="text-xl text-purple-800 font-medium mx-10">Lattice-Based Cryptography</span>
            <span className="text-xl text-purple-800 font-medium mx-10">Zero-Knowledge Proofs</span>
            <span className="text-xl text-purple-800 font-medium mx-10">Cryptographic Standards</span>
            <span className="text-xl text-purple-800 font-medium mx-10">Quantum-Safe Implementations</span>
          </div>
        </CustomMarquee>
      </div>

      {/* Speakers List */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Featured Speakers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {speakers.map((speaker) => (
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-purple-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="flex justify-center pt-10 pb-6 bg-purple-100">
                  <div className="w-48 h-56 overflow-hidden rounded-lg shadow-md">
                    <img 
                      // src={speaker.image} 
                      alt={speaker.name} 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{speaker.name}</h3>
                  <div className="h-px w-20 bg-purple-500 mb-6"></div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-purple-700 text-lg mb-1">Title of the talk:</h4>
                    {/* <p className="text-gray-800 text-lg">{speaker.title}</p> */}
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-purple-700 text-lg mb-1">Brief Bio:</h4>
                    {/* <p className="text-gray-600 text-base">{speaker.bio}</p> */}
                  </div>
                </div>
                
                {/* Button container with proper positioning */}
                {/* <div className="px-8 pb-8 pt-2">
                  <button 
                    onClick={() => openModal(speaker)}
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-300 text-sm flex items-center"
                  >
                    View Abstract
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div> */}
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
  );
};

export default Speaker;