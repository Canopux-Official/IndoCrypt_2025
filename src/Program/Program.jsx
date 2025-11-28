

import { useState } from "react";
import { Clock, CalendarDays, Users, Coffee, Award, Briefcase, Download, ChevronRight } from "lucide-react";
import { programData } from "../assets/ProgramDetails/ProgramData";
 

const getSessionColor = (type) => {
    switch (type) {
        case 'tutorial':
        case 'invited':
            return 'blue';
        case 'technical':
            return 'slate';
        case 'break':
            return 'neutral';
        case 'ceremony':
            return 'indigo';
        case 'industry':
            return 'teal';
        case 'meeting':
            return 'amber';
        case 'social':
            return 'violet';
        default:
            return 'neutral';
    }
};

const getSessionIcon = (type, color) => {
    const iconClass = "w-5 h-5";
    const iconColor = 'text-slate-700';

    switch (type) {
        case 'invited':
        case 'tutorial':
            return <Users className={`${iconClass} ${iconColor}`} />;
        case 'break':
            return <Coffee className={`${iconClass} ${iconColor}`} />;
        case 'ceremony':
            return <Award className={`${iconClass} ${iconColor}`} />;
        case 'industry':
            return <Briefcase className={`${iconClass} ${iconColor}`} />;
        default:
            return <Clock className={`${iconClass} ${iconColor}`} />;
    }
};

const getColorClasses = (color) => {
    const colorMap = {
        neutral: {
            accent: 'bg-slate-100',
            border: 'border-l-slate-400',
            text: 'text-slate-700',
            badge: 'bg-slate-100 text-slate-700 border border-slate-300'
        },
        blue: {
            accent: 'bg-blue-50',
            border: 'border-l-blue-600',
            text: 'text-blue-700',
            badge: 'bg-blue-50 text-blue-700 border border-blue-300'
        },
        slate: {
            accent: 'bg-slate-50',
            border: 'border-l-slate-600',
            text: 'text-slate-700',
            badge: 'bg-slate-50 text-slate-700 border border-slate-300'
        },
        indigo: {
            accent: 'bg-indigo-50',
            border: 'border-l-indigo-600',
            text: 'text-indigo-700',
            badge: 'bg-indigo-50 text-indigo-700 border border-indigo-300'
        },
        teal: {
            accent: 'bg-teal-50',
            border: 'border-l-teal-600',
            text: 'text-teal-700',
            badge: 'bg-teal-50 text-teal-700 border border-teal-300'
        },
        amber: {
            accent: 'bg-amber-50',
            border: 'border-l-amber-600',
            text: 'text-amber-700',
            badge: 'bg-amber-50 text-amber-700 border border-amber-300'
        },
        violet: {
            accent: 'bg-violet-50',
            border: 'border-l-violet-600',
            text: 'text-violet-700',
            badge: 'bg-violet-50 text-violet-700 border border-violet-300'
        }
    };
    return colorMap[color] || colorMap.neutral;
};

export default function Program() {
    const [selectedDay, setSelectedDay] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);


    const handleDayChange = (index) => {
        if (index !== selectedDay) {
            setIsAnimating(true);
            setTimeout(() => {
                setSelectedDay(index);
                setIsAnimating(false);
            }, 250);
        }
    };

    const downloadPDF = () => {
        alert('Please update the PDF URL in the downloadPDF function');
    };

    const currentDay = programData[selectedDay];

    return (
        <div className="min-h-screen bg-white">
            {/* Professional Header with Subtle Accent */}
            <div className=" border-b-4 border-blue-600">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-indigo-800 mb-3 tracking-tight">
                                Conference Program
                            </h1>
                            <div className="flex items-center gap-3 text-black">
                                <span className="text-xl font-semibold">Indocrypt 2025</span>
                                <span className="text-slate-400">|</span>
                                <span className="text-lg">December 14-17, 2025</span>
                            </div>
                        </div>
                        <a
                            href="/assets/IndoCrypt_2025_Schedule.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white text-slate-900 px-5 py-3 rounded-md font-semibold hover:bg-slate-50 transition-colors duration-200 border border-slate-200 shadow-sm"
                        >
                            <Download className="w-5 h-5" />
                            View Document
                        </a>
                    </div>
                </div>
            </div>

            {/* Clean Date Navigation */}
            <div className="bg-slate-50 border-b border-slate-200 sticky top-0 z-20 shadow-sm">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex overflow-x-auto gap-1 py-4">
                        {programData.map((day, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleDayChange(idx)}
                                className={`flex-shrink-0 px-6 py-3 rounded-md font-medium transition-all duration-200 ${selectedDay === idx
                                        ? 'bg-blue-600 text-white shadow-md'
                                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                                    }`}
                            >
                                <div className="text-center">
                                    <div className="font-bold text-sm">
                                        {day.date}
                                    </div>
                                    <div className={`text-xs mt-0.5 ${selectedDay === idx ? 'text-slate-300' : 'text-slate-500'}`}>
                                        {day.subtitle}
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sessions Content */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className={`transition-opacity duration-250 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                    {/* Day Header */}
                    <div className="mb-8 pb-6 border-b-2 border-slate-200">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-green-600 rounded-lg">
                                <CalendarDays className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900">{currentDay.date}</h2>
                                <p className="text-lg text-slate-600 mt-1">{currentDay.subtitle}</p>
                            </div>
                        </div>
                    </div>

                    {/* Sessions List */}
                    <div className="space-y-4">
                        {currentDay.sessions.map((session, i) => {
                            const sessionColor = getSessionColor(session.type);
                            const colors = getColorClasses(sessionColor);

                            return (
                                <div
                                    key={i}
                                    className={`bg-white rounded-lg border border-slate-200 ${colors.border} border-l-4 hover:shadow-md transition-shadow duration-200`}
                                >
                                    <div className="p-6">
                                        <div className="flex flex-col lg:flex-row gap-6">
                                            {/* Time Section */}
                                            <div className="flex lg:flex-col items-start gap-4 lg:w-48 flex-shrink-0">
                                                <div className={`p-3 ${colors.accent} rounded-lg`}>
                                                    {getSessionIcon(session.type, sessionColor)}
                                                </div>
                                                <div className="flex items-center gap-2 text-slate-600">
                                                    <Clock className="w-4 h-4" />
                                                    <span className="font-semibold text-sm">{session.time}</span>
                                                </div>
                                            </div>

                                            {/* Content Section */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                                                    <h3 className="text-xl font-bold text-slate-900 leading-tight">
                                                        {session.title}
                                                    </h3>
                                                    <span className={`flex-shrink-0 px-3 py-1 rounded-md text-xs font-semibold ${colors.badge}`}>
                                                        {session.type.charAt(0).toUpperCase() + session.type.slice(1)}
                                                    </span>
                                                </div>
                                                <p className="text-slate-600 leading-relaxed mb-4">
                                                    {session.description}
                                                </p>
                                                {session.speaker && (
                                                    <div className="flex items-start gap-3 pt-4 border-t border-slate-100">
                                                        <Users className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                                                        <div>
                                                            <p className="text-xs text-slate-500 font-medium mb-0.5">Speaker</p>
                                                            <p className="text-sm font-semibold text-slate-900">{session.speaker}</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Footer Note */}
                <div className="mt-12 bg-slate-50 rounded-lg border border-slate-200 p-6">
                    <div className="flex items-start gap-3">
                        <ChevronRight className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-slate-700 leading-relaxed">
                            <strong className="font-semibold text-slate-900">Note:</strong> Each technical paper presentation is 25 minutes followed by a 5-minute Q&A session.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}