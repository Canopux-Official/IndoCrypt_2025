import React from 'react'

const RegisterPage = () => {
    return (
        <div>
            <section className="bg-gradient-to-b from-indigo-50 to-white pt-10 flex items-center justify-center px-6 py-20 md:px-12 font-sans">
                <div className="bg-white shadow-2xl rounded-3xl p-10 md:p-16 max-w-3xl text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4">
                        Registration for IndoCrypt 2025
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        We’re excited to welcome you to IndoCrypt 2025!
                        Registration will open soon. Please check back later or follow us for updates.
                    </p>

                    <div className="mt-8">
                        <span className="text-base md:text-lg text-gray-600">
                            Registration Link:
                        </span>
                        <div className="mt-2">
                            <a
                                href="#"
                                className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium text-lg rounded-full shadow hover:bg-indigo-700 transition duration-300 cursor-not-allowed opacity-60"
                                onClick={(e) => e.preventDefault()}
                            >
                                Link will be updated soon
                            </a>
                        </div>
                    </div>

                    <p className="text-sm text-gray-500 mt-6">
                        If you have any questions, feel free to contact us at&nbsp;
                        <a href="mailto:registration@indocrypt2025.org" className="text-indigo-600 underline">
                            xxxxxxxxxx@org
                        </a>
                    </p>
                </div>
            </section>
        </div>
    )
}

export default RegisterPage
