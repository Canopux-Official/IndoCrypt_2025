import React from 'react';

const PaperSubmission = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
          INDOCRYPT 2025
        </h1>
        <p className="mt-4 text-xl text-gray-700">
          Submit your paper below following the guidelines provided.
        </p>
        <div className="mt-6 inline-block bg-gray-100 text-gray-700 text-md font-semibold px-6 py-2 rounded-full shadow-sm">
          📅 Paper Submission Portal Closed
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-blue-700">📘 Submission Guidelines</h2>
          <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2 text-md">
            <li>Submit original research papers only.</li>
            <li>Use the Springer LNCS format (LaTeX or Word).</li>
            <li>Maximum length: 20 pages (excluding references).</li>
            <li>Submissions must be anonymous.</li>
            <li>Submit through the EasyChair platform.</li>
            <li>Only PDF format is accepted.</li>
          </ul>
        </section>

        <section className="text-center">
          <div className="flex justify-center items-center gap-2 mt-6">
            <p className="text-lg text-gray-700 font-medium">
              ❌ The paper submission portal is now closed.
            </p>
            <span className="w-3 h-3 bg-red-600 rounded-full animate-pulse inline-block"></span>
          </div>
          <p className="text-md text-gray-500 mt-2">
            The submission window has ended. Please check back later for updates or future calls for papers.
          </p>
          <div className="mt-6">
            <button
              disabled
              className="inline-block px-6 py-3 bg-gray-200 text-gray-500 font-semibold rounded-md cursor-not-allowed"
            >
              📤 Paper Submission Closed
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PaperSubmission;
