import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ScheduleCard from "../components/ScheduleCard";
import Countdown from "../Home/Countdown";
const scheduleData = [
  {
    day: "Day",
    sessions: [
      {
        time: "time",
        topic: "Topics",
        speaker: "Speaker",
        venue: "Venue",
      },
      {
        time: "time",
        topic: "Topics",
        speaker: "Speaker",
        venue: "Venue",
      },
    ],
  },
  {
    day: "Day",
    sessions: [
      {
        time: "time",
        topic: "Topics",
        speaker: "Speaker",
        venue: "Venue",
      },
      {
        time: "time",
        topic: "Topics",
        speaker: "Speaker",
        venue: "Venue",
      },
    ],
  },
];

const Schedule = () => {
  // Scroll to top when component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <div className="w-full pt-20 bg-gradient-to-b from-[#f0f4ff] to-[#ffffff] pt-10s px-6">
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
            <Countdown eventDate="December 14, 2025 00:00:00" />
          </div>

          <div className="mb-11">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Frequently Asked Questions
            </h3>
            <div className="accordion space-y-4">
              <div className="accordion-item">
                <h4 className="accordion-header text-lg font-medium text-indigo-700">
                  Question 1
                </h4>
                <p className="accordion-body text-sm text-gray-600">
                  To Be Updated
                </p>
              </div>
              <div className="accordion-item">
                <h4 className="accordion-header text-lg font-medium text-indigo-700">
                  Question 2
                </h4>
                <p className="accordion-body text-sm text-gray-600">
                  To Be Updated
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
    </>
  );
};

export default Schedule;
