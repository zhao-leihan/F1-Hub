"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black font-sans">
            {/* Dynamic Background with Parallax (desktop only) */}
            {isMobile ? (
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541348263662-e068f62d10b8?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center brightness-[0.3]" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(225,6,0,0.3)] via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-black/40 to-[#020202]/80" />
                </div>
            ) : (
                <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                    {/* Cinematic Racing Background */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541348263662-e068f62d10b8?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center brightness-[0.3]" />

                    {/* Red cinematic glowing overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(225,6,0,0.3)] via-transparent to-transparent mix-blend-overlay" />

                    {/* Noise overlay */}
                    <div className="absolute inset-0 bg-noise opacity-50 mix-blend-overlay" />

                    {/* Deep shadows */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-black/40 to-[#020202]/80" />
                </motion.div>
            )}

            <div className="relative z-10 w-full px-4 flex flex-col items-center justify-center text-center h-full">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: 3.5, ease: [0.16, 1, 0.3, 1] }} // After entry animation
                    className="space-y-6 flex flex-col items-center"
                >
                    {/* Top Label */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 3.8 }}
                        className="flex items-center gap-4 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10"
                    >
                        <div className="w-2 h-2 rounded-full bg-[--color-f1-red] animate-pulse" />
                        <span className="text-sm font-semibold tracking-[0.3em] uppercase text-white/90">
                            Live Telemetry Hub
                        </span>
                    </motion.div>

                    {/* Massive Typography */}
                    <div className="relative py-4">
                        <h1 className="text-[12vw] md:text-[8vw] font-racing tracking-tighter leading-none uppercase italic drop-shadow-2xl overflow-visible">
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 pb-2">Pinnacle</span> <br />
                            <span className="text-[--color-f1-red] drop-shadow-[0_0_30px_rgba(225,6,0,0.6)]">
                                Motorsport
                            </span>
                        </h1>

                        {/* Outline Text behind for depth */}
                        <h1 className="absolute top-4 left-0 text-[12vw] md:text-[8vw] font-racing text-transparent font-outline-2 tracking-tighter leading-none uppercase italic -z-10 blur-[2px] opacity-50 transform translate-x-3 translate-y-3">
                            Pinnacle <br />
                            Motorsport
                        </h1>
                    </div>


                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 4.5 }}
                        className="text-lg md:text-2xl text-gray-300 font-light max-w-3xl mx-auto tracking-wide"
                    >
                        Experience the thrill, the speed, and the drama of Formula 1.
                        All teams. All drivers. <span className="text-white font-bold">One destination.</span>
                    </motion.p>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold">Scroll to Grid</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-8 h-8 text-[--color-f1-red] drop-shadow-[0_0_10px_rgba(225,6,0,1)]" />
                </motion.div>
            </motion.div>
        </section>
    );
}
