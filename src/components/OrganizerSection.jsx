import React from "react";
import "../css/organizer.css";

const OrganizerSection = () => {
  return (
    <section className="bg-gradient-to-br from-white via-slate-50 to-slate-100 py-16 px-4 md:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="inline-block bg-blue-100 text-blue-800 text-xs md:text-sm font-semibold px-4 py-1 rounded-full tracking-wider uppercase mb-4 shadow-sm">
          Organizer
        </h2>

        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Proudly Organized by
        </h3>

        <div className="relative w-64 h-40 mx-auto flex items-center justify-center organizer-box-wrapper">
          <div className="rotating-lines-container">
            <div className="line top-line"></div>
            <div className="line right-line"></div>
            <div className="line bottom-line"></div>
            <div className="line left-line"></div>
          </div>
          <div className="bg-white px-6 py-4 rounded-xl shadow-lg z-10 border border-blue-100">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/b/b2/IIIT_Bhubaneswar_Logo.png"
              alt="IIIT Bhubaneswar Logo"
              className="w-40 mx-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>

        <p className="text-xl text-gray-700 font-medium mt-6 max-w-md mx-auto">
          International Institute of Information Technology, Bhubaneswar
        </p>
      </div>
    </section>
  );
};

export default OrganizerSection;
