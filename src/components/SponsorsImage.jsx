import React, { useState } from 'react';

const SponsorsImage = () => {
    return (
        <div>
            <section className="text-white">
                {/* Platinum Sponsors */}
                <div className="py-12 bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900">
                    <h3 className="text-3xl sm:text-4xl font-semibold mb-6 text-center text-white">
                        Platinum Sponsors
                    </h3>
                    <div className="py-2">
                        <p className="text-center text-lg text-gray-300 italic">
                            To be updated
                        </p>
                    </div>
                </div>

                {/* Gold Sponsors */}
                <div className="py-12 bg-gradient-to-r from-gray-900 via-yellow-800 to-gray-900">
                    <h3 className="text-3xl sm:text-4xl font-semibold mb-6 text-center text-white">
                        Gold Sponsors
                    </h3>
                    <p className="text-center text-lg text-gray-300 italic">
                        To be updated
                    </p>
                </div>

                {/* Silver Sponsors */}
                <div className="py-12 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900">
                    <h3 className="text-3xl sm:text-4xl font-semibold mb-6 text-center text-white">
                        Silver Sponsors
                    </h3>
                    <div className="py-2">
                        <p className="text-center text-lg text-gray-300 italic">
                            To be updated
                        </p>
                    </div>
                </div>

                {/* Sponsorship Information Tabs */}

            </section>
        </div>
    );
};

export default SponsorsImage;