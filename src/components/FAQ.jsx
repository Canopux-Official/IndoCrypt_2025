import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { div } from "framer-motion/client";

const faqs = [
    {
        question: "Question 1",
        answer:
            "To Be Updated",
    },
    {
        question: "Question 2",
        answer:
            "To Be Updated",
    },
    {
        question: "Question 3",
        answer:
            "To Be Updated",
    },
    {
        question: "Question 4",
        answer:
            "To Be Updated",
    },
    {
        question: "Question 5",
        answer:
            "To Be Updated",
    },
    {
        question: "Question 6",
        answer:
            "To Be Updated",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <div style={{ width: "100vw" }} className='relative pt-20 px-2 md:px-12 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen'>
            <section className="w-full min-h-screen pb-20 px-6 font-sans">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
                        Frequently Asked <span className="text-indigo-600">Questions</span>
                    </h2>
                    <p className="text-center text-gray-600 mb-12">
                        Find answers to some of the common questions about Indocrypt 2025.
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
