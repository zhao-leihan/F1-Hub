"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { getTeamStyle } from "@/lib/teams";
import { Shield } from "lucide-react";
import Link from "next/link";

const teams2026 = [
    { id: "mclaren", name: "McLaren", nat: "British" },
    { id: "ferrari", name: "Ferrari", nat: "Italian" },
    { id: "red_bull", name: "Red Bull", nat: "Austrian" },
    { id: "mercedes", name: "Mercedes", nat: "German" },
    { id: "aston_martin", name: "Aston Martin", nat: "British" },
    { id: "alpine", name: "Alpine F1 Team", nat: "French" },
    { id: "haas", name: "Haas F1 Team", nat: "American" },
    { id: "rb", name: "RB F1 Team", nat: "Italian" },
    { id: "williams", name: "Williams", nat: "British" },
    { id: "audi", name: "Audi F1 Team", nat: "German" },
    { id: "cadillac", name: "Cadillac", nat: "American" },
    { id: "zytherion", name: "Zytherion F1", nat: "Indonesian" }
];

export default function ConstructorsStandings() {
    // Parallax effect for the background
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <section id="constructors" className="py-32 bg-[#020202] relative overflow-hidden scanlines">
            {/* Background decoration */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1541348263662-e068f62d10b8?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-fixed bg-center grayscale mix-blend-screen pointer-events-none"
            />

            {/* Deep shadow overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-[#020202] z-10 pointer-events-none" />

            <div className="container mx-auto px-4 z-20 relative">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8"
                >
                    <div>
                        <h2 className="text-3xl md:text-8xl font-racing italic uppercase tracking-widest text-white drop-shadow-xl">
                            Constructors
                        </h2>
                        <p className="text-[--color-f1-red] mt-4 font-bold tracking-[0.3em] uppercase text-sm md:text-lg">
                            The 2026 Grid List
                        </p>
                    </div>
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="hidden md:block"
                    >
                        <Shield className="w-16 h-16 text-[--color-f1-red] drop-shadow-[0_0_15px_rgba(225,6,0,0.8)]" />
                    </motion.div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {teams2026.map((team, idx) => {
                        const theme = getTeamStyle(team.id);

                        return (
                            <Link href={`/team/${team.id}`} key={team.id}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.98, y: 30 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05, duration: 0.5, ease: "easeOut" }}
                                    className="group relative glass-panel overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer h-40"
                                >
                                    {/* Background Image Setup */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 opacity-20 group-hover:opacity-40 group-hover:scale-110 mix-blend-luminosity"
                                        style={{ backgroundImage: `url(${theme.image})` }}
                                    />

                                    <div className="relative z-10 flex items-center justify-between p-6 md:p-8 h-full">
                                        <div className="flex items-center gap-6">
                                            <div
                                                className="w-2 h-16 rounded-full"
                                                style={{ backgroundColor: theme.color, boxShadow: `0 0 10px ${theme.accent}` }}
                                            />
                                            <div>
                                                <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter text-white group-hover:text-gray-100 drop-shadow-md">
                                                    {team.name}
                                                </h3>
                                                <div className="flex items-center gap-3 mt-2">
                                                    <div className="w-3 h-3 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" style={{ backgroundColor: theme.accent }} />
                                                    <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold">
                                                        {team.nat}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Team Logo */}
                                        <div className="h-12 md:h-16 w-24 md:w-32 opacity-30 group-hover:opacity-100 transition-all duration-500 flex justify-end">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={theme.logo}
                                                alt={team.name}
                                                className="max-h-full w-auto object-contain filter brightness-0 invert"
                                            />
                                        </div>
                                    </div>

                                    {/* Accent Border Bottom */}
                                    <div
                                        className="absolute bottom-0 left-0 w-full h-1 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100"
                                        style={{ backgroundColor: theme.color, boxShadow: `0 0 20px ${theme.color}` }}
                                    />
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
