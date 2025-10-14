import React from "react";

const AuthorRegistration = () => {
  return (
    <div className="py-10 bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-3xl w-full max-w-3xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          Author Registration
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          🛑 Author registration for Indocrypt 2025 is now closed.
        </p>
        <div className="inline-block px-6 py-3 bg-indigo-100 text-indigo-800 font-semibold rounded-md">
          📅 Registration link will reopen if additional slots become available.
        </div>
      </div>
    </div>
  );
};

export default AuthorRegistration;
