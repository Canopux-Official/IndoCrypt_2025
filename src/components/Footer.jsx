import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/canopux_logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Logo & Description */}
        <div>
          <h2 className="text-3xl font-bold text-indigo-400 mb-4">
            IndoCrypt 2025
          </h2>
          <p className="text-base text-gray-300 leading-relaxed">
            Premier international conference on cryptography and information
            security held in India — fostering innovation, research, and
            collaboration globally.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold text-indigo-300 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-base text-gray-300">
            <li>
              <Link to="/about" className="hover:text-white transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/schedule"
                className="hover:text-white transition-colors"
              >
                Schedule
              </Link>
            </li>
            <li>
              <Link
                to="/speakers"
                className="hover:text-white transition-colors"
              >
                Speakers
              </Link>
            </li>
            <li>
              <Link
                to="/register-page"
                className="hover:text-white transition-colors"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-indigo-300 mb-4">
            Contact Us
          </h3>
          <ul className="space-y-3 text-base text-gray-300">
            <li>
              Email:{" "}
              <a
                href="mailto:contact@indocrypt2025.org"
                className="hover:text-white transition-colors"
              >
                xxxxxxxxxxxxxx
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                href="tel:+911234567890"
                className="hover:text-white transition-colors"
              >
                xxxxxxxxxxxxx
              </a>
            </li>
            <li>Location: IIIT Bhubaneswar, Odisha, India</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-indigo-300 mb-4">
            Connect With Us
          </h3>
          {/* <div className="flex gap-4 mt-2 text-2xl">
            <a href="#" className="hover:text-indigo-400 transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
          </div> */}
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="mt-16 border-t border-slate-600 pt-6 text-center text-sm text-gray-400">
        &copy; IndoCrypt 2025. All rights reserved.
        <div className="mt-4 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-green-500 to-blue-400 animate-pulse tracking-wide leading-relaxed">
          Maintained with ❤️ By 
          <a
            href="https://canopux.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <img
              src={logo}
              alt="Canopus Logo"
              className="inline-block w-25  h-auto ml-2 transition-transform duration-300 transform group-hover:scale-110"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
