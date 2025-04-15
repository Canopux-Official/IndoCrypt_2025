import React from "react";
import { motion } from "framer-motion";
import ScheduleCard from "../components/ScheduleCard";
import Countdown from "../components/Countdown";

const scheduleData = [
  {
    day: "Day 1 - April 20, 2025",
    sessions: [
      {
        time: "10:00 AM - 11:00 AM",
        topic: "Quantum Cryptography: The Future of Secure Communication",
        speaker: "Dr. Alice Kumar",
        venue: "Main Hall A",
      },
      {
        time: "11:30 AM - 12:30 PM",
        topic: "Breaking RSA: A Theoretical Approach",
        speaker: "Prof. Bob Verma",
        venue: "Main Hall A",
      },
    ],
  },
  {
    day: "Day 2 - April 21, 2025",
    sessions: [
      {
        time: "09:30 AM - 10:30 AM",
        topic: "Blockchain and Cryptographic Hash Functions",
        speaker: "Ms. Carol Singh",
        venue: "Hall B",
      },
      {
        time: "11:00 AM - 12:00 PM",
        topic: "Post-Quantum Cryptography: Standards and Strategies",
        speaker: "Dr. David Mathew",
        venue: "Hall B",
      },
    ],
  },
];

const Schedule = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#f0f4ff] to-[#ffffff] pt-10s px-6">
      <motion.h1
        className="text-5xl font-bold text-center text-indigo-700 mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
      Conference Schedule
      </motion.h1>

      <div className="flex flex-col md:flex-row justify-between items-start">
        <motion.div
          className="flex-1 bg-gradient-to-b from-[#a3bffa] to-[#ffffff] p-8 rounded-xl shadow-md mb-8 md:mb-0 md:mr-8 flex flex-col justify-between"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Countdown to Event
            </h3>
            <Countdown eventDate="2025-04-20T10:00:00" />
          </div>

          <div className="mb-11">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Frequently Asked Questions
            </h3>
            <div className="accordion space-y-4">
              <div className="accordion-item">
                <h4 className="accordion-header text-lg font-medium text-indigo-700">
                  What is the main theme of the event?
                </h4>
                <p className="accordion-body text-sm text-gray-600">
                  The conference will focus on advanced topics in cryptography,
                  including quantum cryptography and post-quantum security
                  measures.
                </p>
              </div>
              <div className="accordion-item">
                <h4 className="accordion-header text-lg font-medium text-indigo-700">
                  Where is the event taking place?
                </h4>
                <p className="accordion-body text-sm text-gray-600">
                  The event will take place at the Grand Convention Center, Main
                  Hall and additional breakout rooms.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Past Event Highlights
            </h3>
            <div className="video-gallery relative">
              <a
                href="https://youtube.com/@canopux-team?feature=shared"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 w-full h-full"
              >
                <div className="w-full h-full bg-black opacity-50 flex justify-center items-center">
                  <span className="text-white text-2xl font-bold">
                    Watch Event Highlights
                  </span>
                </div>
              </a>
              <iframe
                width="100%"
                height="315"
                src="https://youtube.com/@canopux-team?feature=shared"
                title="Event Highlights"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {scheduleData.map((day, idx) => (
            <motion.div
              key={idx}
              className="mb-20 px-4 md:px-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                {day.day}
              </h2>

              <div className="relative before:absolute before:left-4 before:top-0 before:h-full before:w-1 before:bg-indigo-300">
                {day.sessions.map((session, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-12 mb-10"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                  >
                    <ScheduleCard {...session} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Schedule;
