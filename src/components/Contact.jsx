import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <div style={{ width: "100vw" }} className='relative pt-15 pb-20 px-4 md:px-12 bg-gradient-to-br from-white to-blue-50 min-h-screen'>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
            >
                {/* Contact Form */}
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 w-full">
                    <h2 className="text-2xl font-bold text-indigo-700 mb-4">Send a Message</h2>
                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-700 mb-1">Message</label>
                            <textarea
                                rows="5"
                                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                placeholder="Your message..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition-all"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Info */}
                <div className="bg-indigo-50 p-8 rounded-2xl shadow-xl border border-indigo-100 flex flex-col justify-center w-full">
                    <h3 className="text-3xl font-extrabold text-indigo-800 mb-6 border-b-2 border-indigo-200 pb-2">Our Location</h3>

                    <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-indigo-500 mb-6">
                        <div className="flex items-start gap-4">
                            <MapPin className="text-indigo-600" size={28} />
                            <div>
                                <p className="text-gray-800 text-base font-medium leading-relaxed">
                                    IIIT Bhubaneswar<br />
                                    Gothapatna, PO: Malipada<br />
                                    Bhubaneswar, Odisha 751003<br />
                                    <span className="text-gray-600 font-normal">India</span>
                                </p>
                                <a
                                    href="https://maps.google.com/?q=IIIT+Bhubaneswar"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 inline-block text-indigo-600 font-semibold text-sm underline hover:text-indigo-800 transition"
                                >
                                    View on Google Maps
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                        <Mail className="text-indigo-600" size={24} />
                        <p className="text-gray-800 text-base font-medium">xxxxxxxxxxxxx@org</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <Phone className="text-indigo-600" size={24} />
                        <p className="text-gray-800 text-base font-medium">xxxxxxxxxxx</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
