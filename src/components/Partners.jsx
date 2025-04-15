export default function Partners() {
    const partners = [
        {
            category: "Partners 1",
            partners: [
                { name: "To be updated", logo: "", description: "Information will be added soon." },
                { name: "To be updated", logo: "", description: "Information will be added soon." },
                { name: "To be updated", logo: "", description: "Information will be added soon." },
                { name: "To be updated", logo: "", description: "Information will be added soon." },
            ],
        },
        {
            category: "Partners 2",
            partners: [
                { name: "To be updated", logo: "", description: "Information will be added soon." },
                { name: "To be updated", logo: "", description: "Information will be added soon." },
            ],
        },
        {
            category: "Partners 3",
            partners: [
                { name: "To be updated", logo: "", description: "Information will be added soon." },
            ],
        },
    ];

    return (
        <section className="bg-gradient-to-b from-indigo-50 to-white min-h-screen px-6 py-12 md:px-20 font-sans">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4">Our Partners</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    We are grateful for the support of our partners. Details will be updated shortly.
                </p>
            </div>

            <div className="space-y-14 max-w-6xl mx-auto">
                {partners.map((section, index) => (
                    <div key={index}>
                        <h2 className="text-2xl md:text-3xl font-semibold text-indigo-700 mb-6 text-center">
                            {section.category}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
                            {section.partners.map((partner, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center border-t-4 border-indigo-600 max-w-sm mx-auto"
                                >
                                    <div className="w-24 h-24 mb-4 bg-gray-200 flex items-center justify-center rounded-full">
                                        <span className="text-sm text-gray-500">Logo</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-indigo-800 mb-1">
                                        {partner.name}
                                    </h3>
                                    <p className="text-sm text-gray-600">{partner.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
