
import { useState } from "react";
import visa from '../assets/visa-Details.pdf'

const faqs = [
    {
        question: "Do I need a visa to attend IndoCrypt 2025 in India?",
        answer: "Yes, most international participants require a visa. We recommend applying for a Conference Visa or Tourist Visa depending on your country’s eligibility.",
    },
    {
        question: "What documents are needed for the visa?",
        answer: "Passport, invitation letter from IndoCrypt 2025, proof of accommodation, return tickets, and passport-sized photographs.",
    },
    {
        question: "How long does it take to process the visa?",
        answer: "Typically between 3–10 working days. We recommend applying at least one month in advance.",
    },
];

export default function VisaPage() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="bg-gradient-to-b from-indigo-50 to-white min-h-screen px-6 py-12 md:px-20 font-sans">
            <div className="text-center mb-10">
                <h1 className="text-5xl font-bold text-indigo-800 mb-4">Visa Information</h1>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 md:p-10 max-w-4xl mx-auto space-y-8 text-[1.1rem] leading-relaxed text-gray-700">
                <div>
                    <h2 className="text-3xl font-semibold text-indigo-700 mb-3">Conference Visa vs Tourist Visa</h2>
                    <p>
                        If you’re visiting India to attend a conference, you need to obtain a <strong>Conference Visa</strong> instead of a Tourist Visa.
                        A Conference Visa is usually valid for 6 months from the time of issue and also permits tourism.
                    </p>
                </div>

                <div>
                    <h2 className="text-3xl font-semibold text-indigo-700 mb-3">Eligibility for a Conference Visa</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>The sole objective of the visit is to attend a conference/seminar/workshop in India.</li>
                        <li>The applicant holds a valid passport and re-entry permit (if required by their country’s law).</li>
                        <li>The applicant is not a persona-non-grata to the Government of India.</li>
                        <li>The applicant is not considered undesirable and is not on any warning or restrictive list.</li>
                        <li>The applicant has assured financial standing (return ticket and sufficient funds are considered adequate proof).</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-3xl font-semibold text-indigo-700 mb-3">More Information</h2>
                    <p>
                        For official Indian visa information, visit:&nbsp;
                        <a href="https://indianvisaonline.gov.in/" className="text-indigo-600 underline" target="_blank" rel="noopener noreferrer">
                            https://indianvisaonline.gov.in/
                        </a>
                    </p>
                    <p>
                        For questions about combining tourism with a conference visit and related FAQs, please check the relevant section on Tourist Visas.
                    </p>
                    <p>
                        You can also access the official downloadable visa document&nbsp;
                        <a
                            href={visa}
                            download
                            className="text-indigo-600 underline"
                        >
                            here
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
