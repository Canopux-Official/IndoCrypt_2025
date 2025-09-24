import React, { useState } from 'react'
import SponsorsImage from '../components/SponsorsImage'

const Sponsors = () => {

    const [activeTab, setActiveTab] = useState('sponsorship');

    const tabs = [
        { id: 'sponsorship', label: 'Sponsorship' },
        { id: 'benefits', label: 'Sponsorship Benefits' },
    ];
    return (
        <div>
            <section>
                <SponsorsImage />
            </section>
            <section>
                <div className="py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl sm:text-4xl font-semibold mb-12 text-center text-gray-800">
                            Sponsorship Information
                        </h2>

                        {/* Tab Navigation */}
                        <div className="flex justify-center mb-8">
                            <div className="bg-white rounded-lg p-1 flex space-x-1 shadow-lg border border-gray-200">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`px-6 py-3 rounded-lg transition-all duration-300 font-medium ${activeTab === tab.id
                                            ? 'bg-blue-600 text-white shadow-lg'
                                            : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Tab Content */}
                        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 min-h-96">
                            {activeTab === 'sponsorship' && (
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Sponsorship Overview</h3>

                                    <div className="text-gray-700 space-y-4 leading-relaxed">
                                        <p>
                                            IIIT Bhubaneswar, in collaboration with CRSI, is proud to host the <strong>26th edition of Indocrypt 2025</strong>,
                                            one of the most prestigious international conferences on cryptography. This flagship event will bring together
                                            leading cryptographers, industry experts, policymakers, professionals from strategic sectors, banking & finance,
                                            R&D labs, academia, and students on a single platform.
                                        </p>

                                        <p>
                                            The conference, scheduled from <strong>December 14–17, 2025, in Bhubaneswar</strong>, will cover cutting-edge areas including:
                                        </p>

                                        <ul className="space-y-2 text-gray-700 ml-4">
                                            <li className="flex items-start">
                                                <span className="text-blue-600 mr-3">•</span>
                                                New primitives in cryptography
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-blue-600 mr-3">•</span>
                                                Cryptanalysis and provable security
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-blue-600 mr-3">•</span>
                                                Cryptographic protocols
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-blue-600 mr-3">•</span>
                                                Blockchain and privacy-enhancing technologies
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-blue-600 mr-3">•</span>
                                                Network and IoT security
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-blue-600 mr-3">•</span>
                                                Embedded systems security
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-blue-600 mr-3">•</span>
                                                (Post)-quantum cryptography
                                            </li>
                                        </ul>

                                        <div className="bg-blue-50 rounded-lg p-6 mt-6 border border-blue-200">
                                            <h4 className="text-xl font-semibold text-gray-800 mb-3">Key Highlights and Takeaways:</h4>

                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <span className="text-blue-600 mr-3">•</span>
                                                    Unique opportunity to connect with leading researchers and experts from India and abroad.
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-blue-600 mr-3">•</span>
                                                    Fostering collaborations for innovation and next-generation cybersecurity product development.
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-blue-600 mr-3">•</span>
                                                    Expert and invited talks by eminent personalities in cryptography and cybersecurity.
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-blue-600 mr-3">•</span>
                                                    Exposure to recent advances and real-world applications in cryptography.
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-blue-600 mr-3">•</span>
                                                    Industry exhibitions showcasing products, solutions, and innovations, along with networking
                                                    opportunities with key stakeholders.
                                                </li>
                                            </ul>
                                        </div>

                                        <p className="text-lg text-blue-700 bg-blue-50 p-4 rounded-lg border border-blue-200">
                                            We invite you to support <strong>Indocrypt 2025</strong> and join us as a sponsor. This conference
                                            offers an excellent platform to showcase your products, solutions, and services to influential
                                            decision-makers from government, industry, and academia, while contributing to the growth of
                                            cybersecurity and cryptographic research in India and beyond.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'benefits' && (
                                <div className="space-y-6">
                                    {/* Table Header */}
                                    <div className="grid grid-cols-3 gap-6 pb-4 border-b-2 border-gray-300 text-center font-semibold text-lg text-gray-800">
                                        <div>Type</div>
                                        <div>Sponsorship (in INR)</div>
                                        <div>Complementary Benefits</div>
                                    </div>

                                    {/* Platinum Row */}
                                    <div className="grid grid-cols-3 gap-6 items-center py-6 border-b border-gray-200">
                                        <div className="text-center">
                                            <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-gradient-to-b from-gray-300 to-gray-500 flex items-center justify-center shadow-lg border-4 border-gray-400">
                                                <div className="text-white font-bold text-sm">Platinum</div>
                                            </div>
                                            <div className="text-blue-600 font-semibold">Platinum Plan</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-blue-600">Rs 5,00,000/-</div>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="flex items-center text-blue-600 text-sm">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                                2 Exhibition Stalls (s)
                                            </div>
                                            <div className="flex items-center text-blue-600 text-sm">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                                Speaker slot in specified session
                                            </div>
                                            <div className="flex items-center text-blue-600 text-sm">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                                5 registrations for the event
                                            </div>
                                            <div className="flex items-center text-blue-600 text-sm">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                                Logo on the conference website
                                            </div>
                                            <div className="flex items-center text-blue-600 text-sm">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                                Logo on event signage
                                            </div>
                                            <div className="flex items-center text-blue-600 text-sm">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                                Display of Company Pull-Up/Standee
                                            </div>
                                        </div>
                                    </div>

                                    {/* Gold Row */}
                                    <div className="grid grid-cols-3 gap-6 items-center py-6 border-b border-gray-200">
                                        <div className="text-center">
                                            <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-gradient-to-b from-yellow-300 to-yellow-600 flex items-center justify-center shadow-lg border-4 border-yellow-500">
                                                <div className="text-white font-bold text-sm">Gold</div>
                                            </div>
                                            <div className="text-blue-600 font-semibold">Gold Plan</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-blue-600">Rs 3,00,000/-</div>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="flex items-center text-blue-600 text-sm">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                                1 Exhibition Stall
                                            </div>
                                            <div className="flex items-center text-blue-600 text-sm">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                                Opportunity in panel discussion
                                            </div>
                                            <div className="flex items-center text-blue-600 text-sm">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                                3 registrations for the event
                                            </div>
                                            <div className="flex items-center text-blue-600 text-sm">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                                Logo on the conference website
                                            </div>
                                            <div className="flex items-center text-blue-600 text-sm">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                                Logo on event signage
                                            </div>
                                            <div className="flex items-center text-blue-600 text-sm">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                                Display of Company Pull-Up/Standee
                                            </div>
                                        </div>
                                    </div>

                                    {/* Silver Row */}
                                    <div className="grid grid-cols-3 gap-6 items-center py-6">
                                        <div className="text-center">
                                            <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-gradient-to-b from-gray-400 to-gray-600 flex items-center justify-center shadow-lg border-4 border-gray-500">
                                                <div className="text-white font-bold text-sm">Silver</div>
                                            </div>
                                            <div className="text-blue-600 font-semibold">Silver Plan</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-blue-600">Rs 2,00,000/-</div>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="flex items-center text-blue-600 text-sm">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                                1 Exhibition Stall
                                            </div>
                                            <div className="flex items-center text-blue-600 text-sm">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                                2 registrations for the event
                                            </div>
                                            <div className="flex items-center text-blue-600 text-sm">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                                Logo on the conference website
                                            </div>
                                            <div className="flex items-center text-blue-600 text-sm">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                                Logo on event signage
                                            </div>
                                            <div className="flex items-center text-blue-600 text-sm">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                                                Display of Company Pull-Up/Standee
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* {activeTab === 'payment' && (
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Payment Details</h3>
                                    <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-200">
                                        <p className="text-xl text-gray-600 italic">
                                            To be updated
                                        </p>
                                        <p className="text-sm text-gray-500 mt-2">
                                            Payment information will be available soon. Please check back later for detailed payment instructions.
                                        </p>
                                    </div>
                                </div>
                            )} */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sponsors
