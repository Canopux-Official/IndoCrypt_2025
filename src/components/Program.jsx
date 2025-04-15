import { Clock, MapPin, CalendarDays } from "lucide-react";

const programData = [
    {
        date: "Day 1",
        sessions: [
            {
                time: "Time",
                title: "Program 1",
                description: "Details will be updated soon.",
                location: "To be announced",
            },
            {
                time: "Time",
                title: "Program 2",
                description: "Details will be updated soon.",
                location: "To be announced",
            },
            {
                time: "Time",
                title: "Program 3",
                description: "Session details pending.",
                location: "To be confirmed",
            },
        ],
    },
    {
        date: "Day 2",
        sessions: [
            {
                time: "Time",
                title: "Program 4",
                description: "Description will be updated.",
                location: "To be updated",
            },
            {
                time: "time",
                title: "Program 5",
                description: "More details coming soon.",
                location: "To be announced",
            },
            {
                time: "Time",
                title: "Program 6",
                description: "To be updated.",
                location: "To be announced",
            },
        ],
    },
];

export default function Program() {
    return (
        <section className="bg-gradient-to-b from-indigo-50 to-white min-h-screen px-6 py-12 md:px-20 font-sans">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4">Program Schedule</h1>
            </div>

            <div className="max-w-4xl mx-auto space-y-16">
                {programData.map((day, idx) => (
                    <div key={idx}>
                        <div className="flex items-center mb-6">
                            <CalendarDays className="w-6 h-6 text-indigo-600 mr-2" />
                            <h2 className="text-2xl md:text-3xl font-semibold text-indigo-700">{day.date}</h2>
                        </div>

                        <div className="relative border-l-2 border-indigo-200 ml-4 space-y-10">
                            {day.sessions.map((session, i) => (
                                <div key={i} className="relative pl-8">
                                    <div className="absolute -left-4 top-1 w-3 h-3 rounded-full bg-indigo-600"></div>
                                    <h3 className="text-xl font-semibold text-indigo-700 mb-1">{session.title}</h3>
                                    <p className="text-gray-700 text-sm mb-3">{session.description}</p>
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 text-sm text-gray-600">
                                        <div className="flex items-center gap-2 mb-2 sm:mb-0">
                                            <Clock className="w-4 h-4 text-indigo-500" />
                                            <span>{session.time}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-indigo-500" />
                                            <span>{session.location}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
