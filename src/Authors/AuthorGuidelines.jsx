import React from "react";

const AuthorGuidelines = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-10 px-4 md:px-16 font-sans">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl p-10 space-y-8 border border-gray-200">
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Author Guidelines
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Please read and follow these instructions carefully before submitting your paper.
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Submission Rules</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Papers must be <strong>original and unpublished</strong>.</li>
            <li>No simultaneous submission to other journals/conferences.</li>
            <li>Submissions may be checked for duplication with other conferences.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Formatting</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Use <strong>LaTeX2e</strong> with <strong>Springer LNCS format</strong>.</li>
            <li>Maintain default margins and fonts from the LNCS template.</li>
            <li>Maximum length: <strong>20 pages (excluding references)</strong>.</li>
            <li>Anonymous submission: <strong>Do not include author names, affiliations, or acknowledgements</strong>.</li>
            <li>Submit as a <strong>PDF</strong> file via <a href="https://easychair.org/" className="text-blue-600 hover:underline">EasyChair</a>.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Paper Structure</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Title</li>
            <li>Abstract</li>
            <li>Keywords</li>
            <li>Main Body</li>
            <li>Appendices (if any)</li>
            <li>References</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Additional Material</h2>
          <p className="text-gray-800">
            Authors may include supplementary material (proofs, code, data) either at the end of the submission (after references)
            or in a separate file. These materials:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-800 mt-2">
            <li>Must be clearly marked and optional to read</li>
            <li>Should support the claims of the main paper</li>
            <li>Will be reviewed at the discretion of reviewers</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Final Submission & Copyright</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>Accepted papers will be published in the <strong>Springer LNCS</strong> series.</li>
            <li>Final version must conform to LNCS requirements.</li>
            <li>Authors must sign the <strong>Springer LNCS Copyright Form</strong>.</li>
            <li>At least one author must <strong>present the paper at the conference</strong>.</li>
          </ul>
        </section>

        <footer className="text-center pt-6 border-t border-gray-300 text-sm text-gray-600">
          <p>
            For template and submission portal, visit the{" "}
            <a
              href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Springer LNCS Guidelines Page
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
};

export default AuthorGuidelines;
