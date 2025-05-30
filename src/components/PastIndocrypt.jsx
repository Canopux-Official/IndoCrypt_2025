const pastConferences = [
    {
        year: "2024",
        location: "Chennai, India",
        dates: "December 18 - 21 2024",
        visit: "https://setsindia.in/indocrypt2024/indocrypt",
    },
    {
        year: "2023",
        location: "BITS Pilani GOA, India",
        dates: "December 10 - 13 2023",
        visit: "https://crsind.in/indocrypt2023/",
    },
    {
        year: "2022",
        location: "Bose Institute, EN 80, Sector V, Salt Lake. Kolkata, India",
        dates: "December 11 - 14 2022",
        visit: "https://www.tcgcrest.org/indocrypt-2022/",
    },
    {
        year: "2021",
        location: "The LNM Institute of Information Technology , Jaipur, India",
        dates: "December 13 - 15 2021",
        visit: "https://indocrypt2021.lnmiit.ac.in/",
    },
];

export default function PastIndocrypt() {
    return (
        <section className="bg-gradient-to-b from-indigo-50 to-white min-h-screen px-6 py-12 md:px-20 font-sans">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4">Past Indocrypt Conferences</h1>
            </div>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {pastConferences.map((conf, idx) => (
                    <div
                        key={idx}
                        className="bg-white shadow-md rounded-2xl p-6 border-t-4 border-indigo-600 hover:shadow-xl transition duration-300"
                    >
                        <h2 className="text-2xl font-bold text-indigo-700 mb-2">Indocrypt {conf.year}</h2>
                        <p className="text-sm text-gray-600 mb-2"><span className="font-medium">Location:</span> {conf.location}</p>
                        <p className="text-sm text-gray-600 mb-2"><span className="font-medium">Dates:</span> {conf.dates}</p>
                        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-2xl shadow-lg transition duration-300">
                            <a href={conf.visit} className="text-sm text-white"><span className="font-medium">Visit For More Details</span></a>
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
