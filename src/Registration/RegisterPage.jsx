

import React, { useEffect } from "react";

const RegisterPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen">
            <section className="bg-gradient-to-b from-indigo-50 to-white pt-6 md:pt-10 flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 md:px-12 font-sans">
                <div className="bg-white shadow-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 w-full max-w-4xl text-center space-y-6 sm:space-y-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-800 mb-2 sm:mb-4">
                        Indocrypt 2025 Registration
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed px-2">
                        We're excited to welcome you to Indocrypt 2025!
                        Registration is now open. Please complete your registration below.
                    </p>

                    {/* Registration Fee Details */}
                    <div className="mt-6 sm:mt-10">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-800 mb-4 sm:mb-6">
                            Registration Fee Details
                        </h2>

                        {/* Mobile-friendly table with horizontal scroll */}
                        <div className="overflow-x-auto -mx-2 sm:mx-0">
                            <div className="inline-block min-w-full align-middle">
                                <div className="overflow-hidden shadow-md rounded-lg border border-gray-200">
                                    <table className="min-w-full border-collapse bg-white text-sm sm:text-base">
                                        <thead>
                                            <tr className="bg-indigo-100">
                                                <th className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold text-indigo-800 whitespace-nowrap">
                                                    Category
                                                </th>
                                                <th className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-center font-semibold text-indigo-800 whitespace-nowrap">
                                                    Students
                                                </th>
                                                <th className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-center font-semibold text-indigo-800 whitespace-nowrap">
                                                    Academia
                                                </th>
                                                <th className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-center font-semibold text-indigo-800 whitespace-nowrap">
                                                    Govt Org.
                                                </th>
                                                <th className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-center font-semibold text-indigo-800 whitespace-nowrap">
                                                    Industry
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 font-medium text-gray-800 whitespace-nowrap">
                                                    Indian
                                                </td>
                                                <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-center text-gray-700 whitespace-nowrap">
                                                    ₹2000
                                                </td>
                                                <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-center text-gray-700 whitespace-nowrap">
                                                    ₹5000
                                                </td>
                                                <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-center text-gray-700 whitespace-nowrap">
                                                    ₹8000
                                                </td>
                                                <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-center text-gray-700 whitespace-nowrap">
                                                    ₹10000
                                                </td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 font-medium text-gray-800 whitespace-nowrap">
                                                    Foreigner
                                                </td>
                                                <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-center text-gray-700 whitespace-nowrap">
                                                    $450
                                                </td>
                                                <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-center text-gray-700 whitespace-nowrap">
                                                    $700
                                                </td>
                                                <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-center text-gray-700 whitespace-nowrap">
                                                    $850
                                                </td>
                                                <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-center text-gray-700 whitespace-nowrap">
                                                    $850
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        
                        {/* Hint text for mobile users */}
                        <p className="text-xs sm:text-sm text-gray-500 mt-2 md:hidden">
                            👉 Scroll horizontally to view all columns
                        </p>
                    </div>

                    {/* KonfHub Registration Widget */}
                    <div className="mt-8 sm:mt-12">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-800 mb-4 sm:mb-6">
                            Complete Your Registration
                        </h2>
                        <div className="w-full rounded-lg sm:rounded-xl overflow-hidden shadow-lg border border-gray-200">
                            <div className="relative" style={{ paddingBottom: "min(500px, 100vh - 200px)" }}>
                                <iframe
                                    src="https://konfhub.com/widget/indocrypt-2025?desc=false&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=1e1f24&ticketCl=1e1f24&btnColor=002E6E&fontFamily=Hind&borderRadius=10&widget_type=standard&tickets=62321%2C62322%2C62323%2C62324%2C62325%2C62326%2C62327%2C62328&ticketId=62321%7C0%3B62322%7C0%3B62323%7C0%3B62324%7C0%3B62325%7C0%3B62326%7C0%3B62327%7C0%3B62328%7C0"
                                    id="konfhub-widget"
                                    title="Register for Indocrypt 2025"
                                    className="absolute top-0 left-0 w-full h-full"
                                    style={{ border: "none", minHeight: "400px" }}
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RegisterPage;