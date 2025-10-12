import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AcceptedPapersPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 1500); // Delay popup
    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl border border-indigo-100 max-w-md w-full p-6 text-center animate-fadeIn">
        <h2 className="text-2xl font-bold text-indigo-700 mb-3">
          📢 Accepted Papers Published!
        </h2>
        <p className="text-gray-600 mb-6">
          We’re delighted to announce that the list of accepted papers for
          IndoCrypt 2025 is now available.
        </p>
        <div className="flex justify-center gap-3">
          <Link
            to="/accepted-papers"
            className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
            onClick={() => setShowPopup(false)}
          >
            View Papers
          </Link>
          <button
            onClick={() => setShowPopup(false)}
            className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcceptedPapersPopup;
