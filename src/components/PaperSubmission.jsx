import React, { useState } from 'react';

const PaperSubmission = () => {
  const [formData, setFormData] = useState({
    title: '',
    abstract: '',
    keywords: '',
    authorName: '',
    authorEmail: '',
    authorAffiliation: '',
    file: null,
    supportingMaterial: null,
    termsAccepted: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Handle submission logic here
  };

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
          <p className="mt-4 text-gray-600 text-md">
            Download templates: {' '}
            <a href="/latex-template" className="text-blue-600 underline hover:text-blue-800">LaTeX</a> or {' '}
            <a href="/word-template" className="text-blue-600 underline hover:text-blue-800">Word</a>.
          </p>
        </section>

        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { id: 'title', label: 'Paper Title', type: 'text', required: true },
            { id: 'abstract', label: 'Abstract', type: 'textarea', required: true },
            { id: 'keywords', label: 'Keywords', type: 'text', required: true },
            { id: 'authorName', label: 'Author Name (optional)', type: 'text' },
            { id: 'authorEmail', label: 'Author Email', type: 'email', required: true },
            { id: 'authorAffiliation', label: 'Author Affiliation', type: 'text', required: true },
          ].map(({ id, label, type, required }) => (
            <div key={id}>
              <label htmlFor={id} className="block text-md font-medium text-gray-800 mb-1">
                {label} {required && <span className="text-red-500">*</span>}
              </label>
              {type === 'textarea' ? (
                <textarea
                  id={id}
                  rows="4"
                  className="w-full p-4 text-md border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  value={formData[id]}
                  onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
                  required={required}
                ></textarea>
              ) : (
                <input
                  type={type}
                  id={id}
                  className="w-full p-4 text-md border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  value={formData[id]}
                  onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
                  required={required}
                />
              )}
            </div>
          ))}

          <div>
            <label className="block text-md font-medium text-gray-800 mb-1" htmlFor="file">
              Upload Paper (PDF) <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              id="file"
              accept=".pdf"
              onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-md font-medium text-gray-800 mb-1" htmlFor="supportingMaterial">
              Additional Supporting Material (Optional)
            </label>
            <input
              type="file"
              id="supportingMaterial"
              onChange={(e) => setFormData({ ...formData, supportingMaterial: e.target.files[0] })}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="termsAccepted"
              checked={formData.termsAccepted}
              onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
              required
              className="h-5 w-5 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="termsAccepted" className="text-md text-gray-600">
              I accept the{' '}
              <a href="/terms-and-conditions" className="text-blue-600 hover:underline">
                Terms and Conditions
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-md text-lg font-semibold hover:opacity-90 transition"
          >
            🚀 Submit Paper
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaperSubmission;
