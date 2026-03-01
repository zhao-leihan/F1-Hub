"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Flag } from "lucide-react";

type Race = {
    round: string;
    raceName: string;
    Circuit: {
        circuitName: string;
        Location: {
            locality: string;
            country: string;
        };
    };
    date: string;
    time: string;
    Sprint?: {
        date: string;
    };
};

export default function Schedule() {
    const [races, setRaces] = useState<Race[]>([]);
    const [loading, setLoading] = useState(true);
    const [nextRaceIdx, setNextRaceIdx] = useState(0);

    useEffect(() => {
        async function fetchSchedule() {
            try {
                const res = await fetch("https://api.jolpi.ca/ergast/f1/2026.json");
                const data = await res.json();
                const racesData: Race[] = data.MRData.RaceTable.Races;
                setRaces(racesData);

                // Find the next upcoming race
                const now = new Date();
                const nextIdx = racesData.findIndex((race) => new Date(`${race.date}T${race.time || '00:00:00Z'}`) > now);
                setNextRaceIdx(nextIdx !== -1 ? nextIdx : racesData.length - 1); // Default to last if all passed
            } catch (error) {
                console.error("Failed to fetch schedule", error);
            } finally {
                setLoading(false);
            }
        }
        fetchSchedule();
    }, []);

    if (loading) return null;

    return (
        <section id="schedule" className="py-32 bg-[#050505] relative bg-noise">
            <div className="container mx-auto px-4 z-20 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <div className="flex justify-center items-center gap-4 mb-4">
                        <Calendar className="w-10 h-10 text-[--color-f1-red]" />
                        <h2 className="text-6xl md:text-8xl font-racing italic uppercase tracking-widest text-white drop-shadow-xl">
                            2026 <span className="text-[--color-f1-red]">Calendar</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 font-light text-xl max-w-2xl mx-auto uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[--color-f1-red] animate-pulse-slow" /> LIVE SYNCHRONIZATION
                    </p>
                </motion.div>

                {/* Timeline Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {races.map((race, idx) => {
                        const isNext = idx === nextRaceIdx;
                        const isPast = idx < nextRaceIdx;
                        const eventDate = new Date(race.date).toLocaleDateString("en-US", { month: "short", day: "numeric" });

                        return (
                            <motion.div
                                key={race.round}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (idx % 4) * 0.05, duration: 0.4 }}
                                className={`relative p-6 rounded-2xl border transition-all duration-300 glass-panel
                  ${isNext ? 'border-[--color-f1-red] shadow-[0_0_30px_rgba(225,6,0,0.2)] bg-[#1a0505]' : 'border-white/5 hover:border-white/20'}
                  ${isPast ? 'opacity-50 grayscale hover:grayscale-0' : ''}
                `}
                            >
                                {/* Next Race Indicator */}
                                {isNext && (
                                    <div className="absolute -top-3 left-6 bg-[--color-f1-red] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm shadow-md flex items-center gap-2">
                                        <Flag className="w-3 h-3" /> UPCOMING
                                    </div>
                                )}

                                {/* Round Number Background */}
                                <div className="absolute top-2 right-4 text-6xl font-racing italic text-white/5 pointer-events-none">
                                    R{race.round}
                                </div>

                                <div className="mb-6 mt-2 relative z-10">
                                    <p className={`text-sm tracking-widest uppercase font-bold mb-1 ${isNext ? 'text-[--color-f1-red]' : 'text-gray-500'}`}>
                                        {eventDate}
                                        {race.Sprint && ' • SPRINT'}
                                    </p>
                                    <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-2 leading-tight">
                                        {race.raceName}
                                    </h3>
                                    <div className="flex items-start gap-2 text-gray-400 text-sm mt-4">
                                        <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-white/40" />
                                        <div>
                                            <p className="font-semibold text-gray-300">{race.Circuit.circuitName}</p>
                                            <p>{race.Circuit.Location.locality}, {race.Circuit.Location.country}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom line accent */}
                                <div className={`absolute bottom-0 left-0 right-0 h-1 transition-colors
                  ${isNext ? 'bg-[--color-f1-red]' : 'bg-white/5'}
                `} />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
