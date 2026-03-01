"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Flag, Zap, Trophy, Globe } from "lucide-react";

const stats = [
    { icon: Flag, label: "Grand Prix Races", value: "24", sub: "2026 Season" },
    { icon: Trophy, label: "Championships", value: "77", sub: "All-Time Titles Awarded" },
    { icon: Zap, label: "Top Speed", value: "378", sub: "km/h Record" },
    { icon: Globe, label: "Countries", value: "23", sub: "Hosting Races" },
];

const quotes = [
    { text: "To finish first, first you must finish.", author: "Derek Bell" },
    { text: "I don't know anything about the car, but I like going fast.", author: "Kimi Räikkönen" },
    { text: "If you no longer go for a gap, you are no longer a racing driver.", author: "Ayrton Senna" },
];

export default function StatsSection() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-32 bg-[#020202] relative overflow-hidden scanlines" ref={ref}>
            {/* Decorative red diagonal stripe in background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e10600]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e10600]/20 to-transparent" />
            </div>

            <div className="container mx-auto px-4">
                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-racing italic uppercase tracking-widest text-white drop-shadow-2xl">
                        By The <span className="text-[#e10600]">Numbers</span>
                    </h2>
                    <p className="text-gray-500 mt-4 uppercase tracking-[0.3em] text-sm">
                        The Scale of Formula 1
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="glass-panel p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center group hover:border-[#e10600]/30 transition-all duration-300"
                        >
                            <stat.icon className="w-8 h-8 text-[#e10600] mb-4 group-hover:scale-110 transition-transform" />
                            <span className="text-6xl font-racing italic text-white drop-shadow-lg mb-1">{stat.value}</span>
                            <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold">{stat.label}</span>
                            <span className="text-[10px] uppercase tracking-widest text-gray-600 mt-1">{stat.sub}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Quotes */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {quotes.map((q, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.6 + i * 0.15, duration: 0.6 }}
                            className="glass-panel p-6 rounded-2xl border border-white/5 relative"
                        >
                            <div className="absolute -top-3 left-6 text-5xl font-racing text-[#e10600]/30 leading-none">&ldquo;</div>
                            <p className="text-gray-300 text-sm leading-relaxed italic pt-4 font-light">{q.text}</p>
                            <p className="text-[#e10600] text-xs uppercase tracking-widest mt-4 font-bold">— {q.author}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
