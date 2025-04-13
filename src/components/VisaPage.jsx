import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "Do I need a visa to attend IndoCrypt 2025 in India?",
        answer: "Yes, most international participants require a visa. We recommend applying for a conference visa or tourist visa depending on your country’s eligibility.",
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
                <h1 className="text-4xl font-bold text-indigo-800 mb-4">Visa Information</h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    All international participants are advised to check visa requirements well in advance.
                    Below are the general guidelines to help you apply for your visa to attend IndoCrypt 2025.
                </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 md:p-10 max-w-4xl mx-auto space-y-6">
                <div>
                    <h2 className="text-2xl font-semibold text-indigo-700 mb-2">General Guidelines</h2>
                    <p className="text-gray-700 text-sm">
                        International participants should apply for a Conference or Tourist Visa to India. We will provide official invitation letters upon request to assist your visa application.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-indigo-700 mb-2">Required Documents</h2>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                        <li>Valid passport (with at least 6 months validity)</li>
                        <li>Conference invitation letter</li>
                        <li>Passport-size photograph</li>
                        <li>Proof of accommodation (hotel booking)</li>
                        <li>Travel itinerary (flight details)</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-indigo-700 mb-2">Processing Time</h2>
                    <p className="text-gray-700 text-sm">
                        Visa processing usually takes 3 to 10 working days depending on your country of residence. Please apply well in advance.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-indigo-700 mb-2">Need Help?</h2>
                    <p className="text-gray-700 text-sm">
                        If you need an invitation letter or have any queries regarding the visa process, please contact us at: <a href="mailto:visa@indocrypt2025.org" className="text-indigo-600 underline">visa@indocrypt2025.org</a>
                    </p>
                </div>
            </div>
        </section>
    );
}
