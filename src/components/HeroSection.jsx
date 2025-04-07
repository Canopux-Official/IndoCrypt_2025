import React from 'react';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="w-full bg-gradient-to-br from-white via-blue-50 to-purple-50 py-24 px-4 md:px-12"
    >
      <div className="max-w-7xl mx-auto text-center space-y-16">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Welcome to <span className="text-blue-600">IndoCrypt 2025</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Join <span className="font-semibold text-gray-900">leading cryptographers and researchers</span> for India's premier international conference on cryptology, hosted at <span className="text-blue-700 font-semibold">IIIT Bhubaneswar</span>.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-blue-100 max-w-4xl mx-auto text-left space-y-6">
          <h3 className="text-3xl font-bold text-blue-700">📅 Important Dates</h3>
          <ul className="space-y-3 text-gray-800 text-base md:text-lg font-medium">
            <li><strong>Paper Submission Deadline:</strong> <span className="text-gray-600">July 15, 2025</span></li>
            <li><strong>Notification of Acceptance:</strong> <span className="text-gray-600">September 10, 2025</span></li>
            <li><strong>Camera-ready Submission:</strong> <span className="text-gray-600">October 1, 2025</span></li>
            <li><strong>Conference Dates:</strong> <span className="text-gray-600">December 8–12, 2025</span></li>
          </ul>
        </div>

        <div className="space-y-10">
          <h3 className="text-3xl font-bold text-purple-700">🚀 Upcoming Programs</h3>
          <div className="grid md:grid-cols-3 gap-8 text-gray-800 text-base md:text-lg">
            <div className="bg-white border border-purple-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
              <h4 className="font-bold text-xl text-purple-600 mb-2">Pre-Conference Workshops</h4>
              <p className="text-gray-700">Hands-on sessions on Post-Quantum Cryptography and Blockchain Security.</p>
            </div>
            <div className="bg-white border border-purple-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
              <h4 className="font-bold text-xl text-purple-600 mb-2">Keynote Sessions</h4>
              <p className="text-gray-700">Talks from internationally renowned experts in cryptology and cybersecurity.</p>
            </div>
            <div className="bg-white border border-purple-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition">
              <h4 className="font-bold text-xl text-purple-600 mb-2">Student Hackathon</h4>
              <p className="text-gray-700">Collaborate, code, and compete in cryptography-themed challenges.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
