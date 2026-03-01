"use client";

import { motion } from "framer-motion";
import { getTeamStyle } from "@/lib/teams";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, ExternalLink, Cpu, MapPin } from "lucide-react";
import { useEffect } from "react";

export default function TeamDetails() {
    const params = useParams();
    const router = useRouter();
    const teamId = params.id as string;
    const theme = getTeamStyle(teamId);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!theme.name || theme.name === teamId) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white">
                <h1 className="text-4xl font-racing">Team Not Found</h1>
                <button onClick={() => router.back()} className="ml-4 underline">Go Back</button>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#050505] text-white relative overflow-hidden bg-noise scanlines">
            {/* Background with Theme Image & Color */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.3 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 bg-cover bg-center mix-blend-luminosity z-0"
                style={{ backgroundImage: `url(${theme.image})` }}
            />

            {/* Heavy gradient overlays */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{ background: `linear-gradient(to bottom, #000 0%, ${theme.color}40 50%, #000 100%)` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-[#050505]/80 to-transparent z-0" />

            {/* Content wrapper */}
            <div className="container mx-auto px-4 py-8 relative z-10 min-h-screen flex flex-col justify-between">

                {/* Header / Nav */}
                <motion.nav
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center justify-between py-6"
                >
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-white text-gray-400 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" style={{ color: theme.accent }} />
                        Back to Grid
                    </button>

                    <div className="h-16 md:h-20 w-48 md:w-64 flex justify-end items-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={theme.logo} alt={`${theme.name} logo`} className="max-h-full w-auto object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] brightness-0 invert" />
                    </div>
                </motion.nav>

                {/* Main Content Area */}
                <div className="flex-grow flex flex-col justify-center py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Left: Lore & Info */}
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-1 rounded" style={{ backgroundColor: theme.color, boxShadow: `0 0 10px ${theme.accent}` }} />
                                <p className="text-xl uppercase tracking-[0.3em] font-light" style={{ color: theme.accent }}>2026 Entry</p>
                            </div>

                            <h1 className="text-6xl md:text-8xl font-racing italic uppercase tracking-tighter mb-8 drop-shadow-2xl">
                                {theme.name}
                            </h1>

                            <div className="glass-panel p-6 rounded-2xl border-white/10 mb-8 border-l-4" style={{ borderLeftColor: theme.color }}>
                                <p className="text-lg text-gray-300 leading-relaxed font-light">
                                    {theme.description}
                                </p>
                            </div>

                            {/* Specs */}
                            <div className="flex flex-wrap gap-6 mb-8">
                                <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-lg border border-white/10">
                                    <Cpu className="text-gray-400 w-5 h-5" />
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-gray-500">Power Unit</p>
                                        <p className="font-bold text-white tracking-wide">{theme.powerUnit}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-lg border border-white/10">
                                    <MapPin className="text-gray-400 w-5 h-5" />
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-gray-500">Headquarters</p>
                                        <p className="font-bold text-white tracking-wide">{theme.base}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Source Link */}
                            <a
                                href={theme.sourceUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold transition-all hover:opacity-80 pb-1 border-b-2"
                                style={{ color: theme.accent, borderBottomColor: theme.color }}
                            >
                                Source: {theme.sourceName} <ExternalLink className="w-4 h-4 mb-1" />
                            </a>
                        </motion.div>

                        {/* Right: Drivers */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="flex flex-col gap-6"
                        >
                            <h3 className="text-3xl font-racing italic uppercase tracking-widest text-white/50 mb-2">Driver Lineup</h3>
                            {theme.drivers.map((driver, idx) => (
                                <motion.div
                                    key={driver.num}
                                    whileHover={{ scale: 1.02 }}
                                    className="glass-panel rounded-2xl p-6 relative overflow-hidden group border border-white/10 cursor-pointer"
                                >
                                    {/* Subtle team glow on hover */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{ backgroundColor: theme.color }} />

                                    <div className="relative z-10 flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-6xl font-racing italic text-white/10 absolute -top-4 -right-4 transition-all duration-300 group-hover:text-white/20 group-hover:-translate-y-2">{driver.num}</span>
                                            <p className="text-2xl font-light text-gray-300">{driver.first}</p>
                                            <p className="text-5xl font-bold uppercase tracking-tighter" style={{ textShadow: `0 0 20px ${theme.color}80` }}>{driver.last}</p>
                                        </div>
                                        {/* Driver Image placeholder if needed, otherwise just cool typography */}
                                        {driver.img && (
                                            <div className="h-32 w-32 relative hidden md:block opacity-80 group-hover:opacity-100 transition-opacity">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img src={driver.img} alt={driver.last} className="absolute inset-0 w-full h-full object-cover object-top mask-image-b" />
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-4 w-12 h-1 rounded-full" style={{ backgroundColor: theme.accent }} />
                                </motion.div>
                            ))}
                        </motion.div>

                    </div>
                </div>

            </div>
        </main>
    );
}
