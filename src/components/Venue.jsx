import React from "react";
import { MapPin } from "lucide-react";
import { div } from "framer-motion/client";
import bannerIIIT from '../assets/IIIT-Bhubaneswar.webp';

const Venue = () => {
    return (
        <div className="w-full bg-gray-50 text-gray-800 pt-80">
            {/* Banner */}
            <div className="relative h-[50vh] w-full">
                <img style={{opacity: "0.65"}}
                    src={bannerIIIT}
                    alt="IIIT Bhubaneswar"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-opacity-70 flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl text-black font-bold">Venue</h1>
                </div>
            </div>

            {/* Content Container */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Venue Description */}
                <section>
                    <h2 className="text-3xl font-semibold mb-4">IIIT Bhubaneswar</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        The IndoCrypt 2025 conference will take place at the Indian Institute of Information Technology (IIIT) Bhubaneswar, a prestigious academic institution located in the heart of Odisha’s capital. Known for its peaceful, green campus and strong focus on research and innovation, IIIT Bhubaneswar is an ideal setting for academic collaboration and cutting-edge discussion in the field of cryptography.
                    </p>
                </section>

                {/* Image Gallery */}
                <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"].map((img, i) => (
                        <img
                            key={i}
                            src={`/images/venue/${img}`}
                            alt={`IIIT Bhubaneswar ${i + 1}`}
                            className="rounded-2xl w-full h-60 object-cover shadow-md"
                        />
                    ))}
                </section>

                {/* Address & Map */}
                <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    {/* Address Box */}
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                            <MapPin className="text-red-500" />
                            Address
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            Indian Institute of Information Technology Bhubaneswar, <br />
                            Gothapatna, PO: Malipada, Bhubaneswar – 751003, <br />
                            Odisha, India
                        </p>
                        <a
                            href="https://goo.gl/maps/q9aQatD4jyz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline mt-3 inline-block"
                        >
                            View on Google Maps
                        </a>
                    </div>

                    {/* Map Embed */}
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3812.6286744739455!2d85.70846451521234!3d20.24221348642312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190912f96a7c7f%3A0x5be4967b1e38c3b7!2sIIIT%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1619180452729!5m2!1sen!2sin"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                        ></iframe>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Venue;
