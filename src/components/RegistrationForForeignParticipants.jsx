import React, { useEffect } from "react";

const RegistrationForForeignParticipants = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <section className="bg-gradient-to-b from-indigo-50 to-white pt-10 flex items-center justify-center px-6 py-20 md:px-12 font-sans">
                <div className="bg-white shadow-2xl rounded-3xl p-10 md:p-16 max-w-4xl space-y-8">
                    <h1 className="text-4xl md:text-4xl font-bold text-indigo-800 mb-4 text-center">
                        Registration for Foreign Participants
                    </h1>

                    {/* <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                        <p className="text-red-700 text-lg font-medium text-center">
                            The registration for foreign participants has been closed.
                        </p>
                    </div> */}

                    <div className="space-y-8">
                        {/* Instructions */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-4">
                                Instructions
                            </h2>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-indigo-600 mr-2">•</span>
                                    Visit the registration fees page for details
                                </li>
                                <li className="flex items-start">
                                    <span className="text-indigo-600 mr-2">•</span>
                                    Fee to be remitted to the following bank account
                                </li>
                                <li className="flex items-start">
                                    <span className="text-indigo-600 mr-2">•</span>
                                    The payment reference number has to be filled in the registration form. A confirmation will be sent to the registered mail id on successful payment of fees.
                                </li>
                                <li className="flex items-start">
                                    <span className="text-indigo-600 mr-2">•</span>
                                    On successful registration, a QR code will be sent to the mail id provided during registration. The QR code will be scanned at the registration desk on the day of the conference.
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



                        {/* Terms and Conditions */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-4">
                                Terms and Conditions
                            </h2>
                            <ul className="space-y-2 text-gray-700">
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
                                    For all payment related issues, kindly contact your bank.
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

export default RegistrationForForeignParticipants;