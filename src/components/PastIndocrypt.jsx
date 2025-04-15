const pastConferences = [
    {
        year: "2024",
        location: "City Name (TBD)",
        dates: "dates",
        theme: "Theme of IndoCrypt 2024",
    },
    {
        year: "2023",
        location: "City Name (TBD)",
        dates: "Dates",
        theme: "Theme of IndoCrypt 2023",
    },
    {
        year: "2022",
        location: "City Name (TBD)",
        dates: "Dates",
        theme: "Theme of IndoCrypt 2022",
    },
    {
        year: "2021",
        location: "City Name (TBD)",
        dates: "Dates",
        theme: "Theme of IndoCrypt 2021",
    },
];

export default function PastIndocrypt() {
    return (
        <section className="bg-gradient-to-b from-indigo-50 to-white min-h-screen px-6 py-12 md:px-20 font-sans">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4">Past IndoCrypt Conferences</h1>
            </div>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {pastConferences.map((conf, idx) => (
                    <div
                        key={idx}
                        className="bg-white shadow-md rounded-2xl p-6 border-t-4 border-indigo-600 hover:shadow-xl transition duration-300"
                    >
                        <h2 className="text-2xl font-bold text-indigo-700 mb-2">IndoCrypt {conf.year}</h2>
                        <p className="text-sm text-gray-600 mb-2"><span className="font-medium">Location:</span> {conf.location}</p>
                        <p className="text-sm text-gray-600 mb-2"><span className="font-medium">Dates:</span> {conf.dates}</p>
                        <p className="text-sm text-gray-600"><span className="font-medium">Theme:</span> {conf.theme}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
