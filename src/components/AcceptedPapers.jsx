import React from "react";
import { FaFilePdf } from "react-icons/fa";

const AcceptedPapers = () => {
  const papers = [
    {
      title: "Indocrypt 2025 Accepted Papers List",
      description:
        "The official list of papers accepted for presentation at IndoCrypt 2025, including titles, authors, and affiliations.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 text-center bg-gradient-to-r from-indigo-700 via-indigo-600 to-blue-600">
        {/* Decorative background shapes */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-[60%] h-[60%] bg-blue-500 rounded-full opacity-10 blur-2xl"></div>

        <h1 className="relative text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight z-10">
          📢 Accepted Papers – IndoCrypt 2025
        </h1>
        <p className="relative text-lg md:text-xl text-indigo-100 z-10 max-w-3xl mx-auto">
          Celebrating excellence in cryptography research. Explore the
          officially accepted papers for IndoCrypt 2025.
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-3">
            Congratulations to All Authors
          </h2>
          <p className="text-gray-600">
            The IndoCrypt 2025 organizing committee is pleased to share the
            complete list of accepted papers. We look forward to your valuable
            presentations during the conference.
          </p>
        </div>

        {/* Paper Card */}
        {papers.map((paper, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border border-indigo-100 p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="bg-red-100 p-4 rounded-full">
                <FaFilePdf className="text-red-600 text-3xl" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-800">
                  {paper.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {paper.description}
                </p>
              </div>
            </div>

            <a
              href="/assets/list_of_accepted_indocrypt_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg shadow-md font-semibold hover:bg-indigo-700 transition duration-300"
            >
              View Document
            </a>
          </div>
        ))}

        {/* Note */}
        <p className="text-center text-sm text-gray-500 mt-8">
          The accepted papers document includes paper titles, author details,
          and affiliations.
        </p>
      </section>
    </div>
  );
};

export default AcceptedPapers;
