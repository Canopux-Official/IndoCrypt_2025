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
                        Registration is now open. Please complete your registration below.
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

                    {/* KonfHub Registration Widget */}
                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-6">
                            Complete Your Registration
                        </h2>
                        <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
                            <iframe
                                src="https://konfhub.com/widget/indocrypt-2025?desc=false&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=1e1f24&ticketCl=1e1f24&btnColor=002E6E&fontFamily=Hind&borderRadius=10&widget_type=standard&tickets=62321%2C62322%2C62323%2C62324%2C62325%2C62326%2C62327%2C62328&ticketId=62321%7C0%3B62322%7C0%3B62323%7C0%3B62324%7C0%3B62325%7C0%3B62326%7C0%3B62327%7C0%3B62328%7C0"
                                id="konfhub-widget"
                                title="Register for Indocrypt 2025"
                                width="100%"
                                height="500"
                                style={{ border: "none" }}
                            ></iframe>
                        </div>
                    </div>

                    <p className="text-base text-gray-600 mb-4">
                        This registration is for general participants and attendees.
                        For author registration, please visit the <a href="/registration" className="text-indigo-600 underline">Author Registration</a> page.
                    </p>

                    <p className="text-sm text-gray-500 mt-8">
                        For registration queries, contact us at&nbsp;
                        <a
                            href="mailto:registration@indocrypt2025.org"
                            className="text-indigo-600 underline"
                        >
                            Indocrypt2025@iiit-bh.ac.in
                        </a>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default RegisterPage;
