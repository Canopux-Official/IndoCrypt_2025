import React, { useEffect } from "react";

const CodeOfConduct = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
      
    return (
        <div>
            <section className="bg-gradient-to-b from-indigo-50 to-white pt-10 flex items-center justify-center px-6 py-20 md:px-12 font-sans">
                <div className="bg-white shadow-2xl rounded-3xl p-10 md:p-16 max-w-4xl space-y-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4 text-center">
                        Code of Conduct
                    </h1>
                    
                    <div className="space-y-8">
                        {/* Introduction */}
                        <div>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                The Indocrypt 2025 is committed to providing an inclusive, respectful, and harassment-free experience for all participants. We strive to ensure the dignity and well-being of every attendee.
                            </p>
                        </div>

                        {/* Prohibited Behavior */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-4">
                                Prohibited Behavior
                            </h2>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-indigo-600 mr-2">•</span>
                                    <div>
                                        <span className="font-semibold">Harassment or Discrimination:</span> Any form of harassment, discriminatory behavior, or conduct that undermines the dignity of others.
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-indigo-600 mr-2">•</span>
                                    <div>
                                        <span className="font-semibold">Smoking and Drinking:</span> Smoking and consumption of alcohol are strictly prohibited in all event venues and associated activities.
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Reporting and Response */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-4">
                                Reporting and Response
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                If you experience or witness harassment, discriminatory behavior, or violations of this code, we encourage you to:
                            </p>
                            <ol className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-indigo-600 mr-2 font-semibold">1.</span>
                                    <div>
                                        <span className="font-semibold">Report the incident:</span> Reach out to event organizers or designated representatives who are available to help.
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-indigo-600 mr-2 font-semibold">2.</span>
                                    <div>
                                        <span className="font-semibold">Intervene, if safe to do so:</span> If you witness unacceptable behavior, consider intervening in a way that supports those affected.
                                    </div>
                                </li>
                            </ol>
                        </div>

                        {/* Consequences of Violations */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-4">
                                Consequences of Violations
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Participants found violating this code may face sanctions or expulsion from the event, at the discretion of the General Chair. For serious incidents, further action may be taken, but only with the consent of the reporting party.
                            </p>
                            <p className="text-gray-700 leading-relaxed font-medium">
                                We are committed to fostering a safe, respectful, and professional environment for everyone at Indocrypt 2025.
                            </p>
                        </div>

                        {/* General Instructions */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-4">
                                General Instructions
                            </h2>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-indigo-600 mr-2">•</span>
                                    <div>
                                        <span className="font-semibold">Parking:</span> Please note that parking will not be available at the conference venue. Attendees are kindly advised to arrange parking in nearby areas at their own discretion.
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-indigo-600 mr-2">•</span>
                                    <div>
                                        As the conference is at the University, entry and exit will be permitted only to individuals wearing official conference identification tags.
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-indigo-600 mr-2">•</span>
                                    <div>
                                        All attendees are respectfully requested to adhere to the university guidelines while on the premises.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CodeOfConduct;