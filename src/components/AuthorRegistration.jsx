import React from "react";

const AuthorRegistration = () => {
  return (
    <div className=" py-10 bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-3xl w-full max-w-3xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          Author Registration
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          🛠️ The author registration portal will be available soon.
        </p>
        <p className="text-md text-gray-500 mb-8">
          Please check back later to complete your registration. The link will be updated on this page once the registration opens.
        </p>
        <div className="inline-block px-6 py-3 bg-indigo-100 text-indigo-800 font-semibold rounded-md">
          📄 Registration link coming soon!
        </div>
      </div>
    </div>
  );
};

export default AuthorRegistration;
