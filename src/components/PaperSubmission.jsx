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
        <div className="mt-6 inline-block bg-yellow-100 text-yellow-800 text-md font-semibold px-6 py-2 rounded-full shadow-sm">
          📅 Paper Submission Deadline: <span className="font-bold">September 1, 2025</span>
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
          {/* <p className="mt-4 text-gray-600 text-md">
            Download templates: {' '}
            <a href="/latex-template" className="text-blue-600 underline hover:text-blue-800">LaTeX</a> or {' '}
            <a href="/word-template" className="text-blue-600 underline hover:text-blue-800">Word</a>.
            <a className="text-lg text-gray-700 font-medium mt-6">
              Updated Soon.
            </a>
          </p> */}
        </section>

        <section className="text-center">
          <div className="flex justify-center items-center gap-2 mt-6">
            <p className="text-lg text-gray-700 font-medium">
              🛠️ The paper submission portal is now live!
            </p>
            <span className="w-3 h-3 bg-green-600 rounded-full animate-pulse inline-block"></span>
          </div>
          <p className="text-md text-gray-500 mt-2">
            Please ensure your paper follows the guidelines provided above before submitting. Use the official EasyChair portal below.
          </p>
          <div className="mt-6">
            <a
              href="https://easychair.org/conferences/?conf=indocrypt2025"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-indigo-100 text-indigo-800 font-semibold rounded-md hover:bg-indigo-200 transition"
            >
              📤 Click to Submit your paper on EasyChair
            </a>
          </div>
        </section>


      </div>
    </div>
  );
};

export default PaperSubmission;
