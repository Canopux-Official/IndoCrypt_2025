import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { div } from "framer-motion/client";

const faqs = [
    {
        question: "What is IndoCrypt 2025?",
        answer:
            "IndoCrypt 2025 is the International Conference on Cryptology in India, focused on the latest advancements in cryptographic research and applications.",
    },
    {
        question: "When and where will IndoCrypt 2025 be held?",
        answer:
            "IndoCrypt 2025 will take place from December 8–10, 2025, at IIIT Bhubaneswar, Odisha, India.",
    },
    {
        question: "Who should attend the conference?",
        answer:
            "Researchers, academicians, students, professionals, and anyone interested in cryptography, cybersecurity, and related fields are encouraged to attend.",
    },
    {
        question: "How can I submit a paper?",
        answer:
            "You can submit your paper through the 'Paper Submission' section on the official website. Ensure your submission follows the provided guidelines and deadlines.",
    },
    {
        question: "Are there travel grants for students?",
        answer:
            "Yes, limited travel grants are available for students. Please check the 'Travel Grant' section for eligibility and application process.",
    },
    {
        question: "Will I get a certificate of participation?",
        answer:
            "Yes, all registered participants will receive a certificate of participation after the conference.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <div style={{ width: "100vw" }} className='relative pt-90 pb-20 px-4 md:px-12 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen'>
            <section className="w-full min-h-screen pb-20 px-6 font-sans">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
                        Frequently Asked <span className="text-indigo-600">Questions</span>
                    </h2>
                    <p className="text-center text-gray-600 mb-12">
                        Find answers to some of the common questions about IndoCrypt 2025.
                    </p>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-indigo-100 rounded-2xl shadow-sm bg-white hover:shadow-md transition-all duration-300"
                            >
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
                                >
                                    <span className="text-base font-semibold text-gray-800">
                                        {faq.question}
                                    </span>
                                    {openIndex === index ? (
                                        <ChevronUp className="text-indigo-600" />
                                    ) : (
                                        <ChevronDown className="text-gray-500" />
                                    )}
                                </button>
                                {openIndex === index && (
                                    <div className="px-6 pb-6 text-gray-700 text-sm leading-relaxed transition-all">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
