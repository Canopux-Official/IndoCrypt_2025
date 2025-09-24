import React, { useEffect } from "react";

const RegisterPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
      
    return (
        <div>
            <section className="bg-gradient-to-b from-indigo-50 to-white pt-10 flex items-center justify-center px-6 py-20 md:px-12 font-sans">
                <div className="bg-white shadow-2xl rounded-3xl p-10 md:p-16 max-w-4xl text-center space-y-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4">
                        INDOCRYPT 2025 Registration
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        We're excited to welcome you to Indocrypt 2025!
                        Registration will open soon. Please check back later or follow us for updates.
                    </p>

                    {/* Registration Fee Details */}
                    <div className="mt-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-6">
                            Registration Fee Details
                        </h2>
                        
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300 bg-white">
                                <thead>
                                    <tr className="bg-indigo-100">
                                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-indigo-800">
                                            Category
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-indigo-800">
                                            Students
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-indigo-800">
                                            Academia
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-indigo-800">
                                            Govt Organizations
                                        </th>
                                        <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-indigo-800">
                                            Industry
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">
                                            Indian
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">
                                            INR 2000
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">
                                            INR 5000
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">
                                            INR 8000
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">
                                            INR 10000
                                        </td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">
                                            Foreigner
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">
                                            USD 450
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">
                                            USD 700
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">
                                            USD 850
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">
                                            USD 850
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* <div className="mt-10">
                        <span className="text-base md:text-lg text-gray-600">
                            Registration Link:
                        </span>
                        <div className="mt-3">
                            <a
                                href="#"
                                className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium text-lg rounded-full shadow hover:bg-indigo-700 transition duration-300 cursor-not-allowed opacity-60"
                                onClick={(e) => e.preventDefault()}
                            >
                                Link will be updated soon
                            </a>
                        </div>
                    </div>

                    <p className="text-sm text-gray-500 mt-8">
                        If you have any questions, feel free to contact us at&nbsp;
                        <a href="mailto:registration@indocrypt2025.org" className="text-indigo-600 underline">
                            registration@indocrypt2025.org
                        </a>
                    </p> */}
                </div>
            </section>
        </div>
    )
}

export default RegisterPage