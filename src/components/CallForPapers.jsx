import React from "react";

const CallForPapers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-6 md:p-10 font-sans">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate__animated animate__fadeIn">
            Indocrypt 2025
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 font-medium">
            International Conference on Cryptology in India – Call For Papers
          </p>
        </header>

        {/* Card Container */}
        <div className="backdrop-blur-sm bg-white/70 rounded-3xl shadow-xl p-8 md:p-10 space-y-16 border border-gray-200">

          {/* About the Conference */}
          <section>
            <h2 className="text-3xl font-extrabold text-blue-700 mb-4 hover:text-purple-700 transition duration-300">
              About the Conference
            </h2>
            <p className="text-gray-800 leading-relaxed text-justify">
              The International Conference on Cryptology in India (Indocrypt) is an annual cryptography conference organised by the Cryptology Research Society of India (CRSI) in association with an Indian institute or organisation. The conference seeks submissions from academia, industry, and government on all theoretical and practical aspects relevant to cryptology, network security, and related fields. This year conveys the 26th edition of the conference, which will be held in Bhubaneswar, India. Proceedings will be published by Springer in the LNCS series.
            </p>
          </section>

          {/* Topics */}
          <section>
            <h2 className="text-3xl font-extrabold text-blue-700 mb-4 hover:text-purple-700 transition duration-300">
              Topics of Interest
            </h2>
            <p className="text-gray-800 mb-4">
              Original papers on all technical aspects of cryptology are solicited for submission. Topics include but are not limited to:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700 text-sm">
              {[
                "Access Control", "Applied Cryptography", "Attacks & Malicious Code", "Authentication & Identification",
                "Blockchain Security and Privacy", "Cloud security and privacy", "Cryptographic Protocols",
                "Cryptanalysis", "Data and Computation Integrity", "Edge/Fog Computing Security and Privacy",
                "Embedded System Security", "Formal Methods for Security", "Lightweight Cryptography",
                "Machine Learning for Security", "Network Security", "Privacy-Enhancing Technologies",
                "Public Key Cryptography", "Post-quantum Cryptography", "Quantum Cryptography",
                "Secure Electronic Voting", "Security & Privacy", "Secure Distributed Computing",
                "Security in IoT", "Security and Privacy of ML & AI Systems", "Symmetric Key Cryptography",
                "Zero-Knowledge Proofs"
              ].map((topic, index) => (
                <div
                  key={index}
                  className="px-3 py-1 rounded-lg bg-blue-100 text-blue-900 hover:bg-blue-200 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  {topic}
                </div>
              ))}
            </div>
          </section>

          {/* Instructions for Authors */}
          <section>
            <h2 className="text-3xl font-extrabold text-blue-700 mb-4 hover:text-purple-700 transition duration-300">
              Instructions for Authors
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-800 leading-relaxed">
              <li>
                Papers must be <strong>original and unpublished</strong>, and must not duplicate work submitted or published elsewhere.
              </li>
              <li>
                Use <strong>LaTeX2e</strong> and follow the official <strong>Springer LNCS format</strong> with default margins and fonts.
              </li>
              <li>
                Submissions must be <strong>anonymous</strong>: omit author names, affiliations, and acknowledgments.
              </li>
              <li>
                Papers must be submitted in <strong>PDF format</strong> via <strong>EasyChair</strong>.
              </li>
              <li>
                The submission must include:
                <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                  <li>Title, abstract, and keywords</li>
                  <li>Main body with an introduction suitable for non-specialists</li>
                  <li>Appendices (if any), followed by references</li>
                </ul>
              </li>
              <li>
                Page limit: <strong>20 pages</strong> (including appendices but excluding references).
              </li>
              <li>
                Optional supporting material (e.g., proofs, source code) may be submitted after references or as a separate file.
              </li>
              <li>
                Supporting material will be read at the committee's discretion. Submissions must be self-contained.
              </li>
              <li>
                Proceedings will be published by <strong>Springer LNCS</strong>. Final versions must conform to Springer’s requirements.
              </li>
              <li>
                Authors must sign <strong>Springer’s copyright form</strong> upon acceptance.
              </li>
              <li>
                At least one author must register for and <strong>present the paper</strong> at the conference.
              </li>
            </ul>
          </section>

          {/* Important Dates */}
          <section>
            <h2 className="text-3xl font-extrabold text-blue-700 mb-4 hover:text-purple-700 transition duration-300">
              Important Dates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                <p className="font-semibold text-lg">📅 Paper Submission Deadline</p>
                <p>September 10, 2025</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                <p className="font-semibold text-lg">🔔 Notification to Authors</p>
                <p>October 10, 2025</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
                <p className="font-semibold text-lg">📝 Final Manuscript Due</p>
                <p>October 15, 2025</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
                <p className="font-semibold text-lg">📍 Conference Dates</p>
                <p>December 14 – 17, 2025</p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center pt-6 border-t border-gray-300 text-sm text-gray-600">
            <p>
              Visit the{" "}
              <a
                href="https://link.springer.com/conference/indocrypt"
                className="text-blue-600 hover:underline font-medium hover:text-purple-700 transition"
                target="_blank" rel="noopener noreferrer"
              >
                official Springer conference page
              </a>{" "}
              for submission guidelines and updates.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default CallForPapers;
