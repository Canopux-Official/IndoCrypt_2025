import React, { useEffect } from "react";

const RegistrationForIndianStudents = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <section className="bg-gradient-to-b from-indigo-50 to-white pt-10 flex items-center justify-center px-6 py-20 md:px-12 font-sans">
                <div className="bg-white shadow-2xl rounded-3xl p-10 md:p-16 max-w-4xl space-y-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-4 text-center">
                        Registration for Indian Participants
                    </h1>

                    {/* <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                        <p className="text-red-700 text-lg font-medium text-center">
                            Registration closed. The QR code sent during registration will be scanned at the registration desk on the day of the conference.
                        </p>
                    </div> */}

                    <div className="space-y-8">
                        {/* Terms and Conditions */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-4">
                                Instructions
                            </h2>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-indigo-600 mr-2">•</span>
                                    Register for the conference using the provided registration link.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-indigo-600 mr-2">•</span>
                                    Fill out all required details carefully in the registration form.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-indigo-600 mr-2">•</span>
                                    Save the registration ticket for your future reference.
                                </li>
                            </ul>
                        </div>

                        {/* Account Details */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-4">
                                Register Now
                            </h2>
                            <div className="bg-gray-50 rounded-lg p-6 text-center border border-gray-200">
                                <a
                                    href="/register-page"
                                    className="text-indigo-600 font-semibold hover:text-indigo-800 underline"
                                >
                                    Click here for registration
                                </a>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-4">
                                Terms and Conditions
                            </h2>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-indigo-600 mr-2">•</span>
                                    All payments are conducted through Razorpay.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-indigo-600 mr-2">•</span>
                                    A 100% advance payment model for events and other registrations is adopted.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-indigo-600 mr-2">•</span>
                                    The registration charge is inclusive of all charges.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-indigo-600 mr-2">•</span>
                                    For all payment related issues, kindly contact your bank and/or payment gateway.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-indigo-600 mr-2">•</span>
                                    The conference registration fee includes the following: conference registration kit, participation in the technical program, lunch and coffee breaks, banquet dinner.
                                </li>
                            </ul>
                        </div>

                        {/* Privacy Policy */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-4">
                                Privacy Policy
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                While registering for an event, the participant grants the organizer the right to save and process his/her personal data such as name, title, telephone and email, and business/billing address. This information will be used for accounting and billing purposes, as well as for informing the participant about future events and activities. Information collected during registration will not be shared with any third-party.
                            </p>
                        </div>

                        {/* Refund Policy */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-4">
                                Refund Policy
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                All the payments towards registration are non-refundable. Registering for the conference implies compliance with the above terms and conditions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RegistrationForIndianStudents;