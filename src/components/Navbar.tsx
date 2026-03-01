"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ASSETS } from "@/lib/assets";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: 2.5, duration: 0.8, ease: "easeOut" }} // Appears after new shorter entry animation
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#050505]/95 backdrop-blur-xl py-4 border-b border-white/10" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* F1 Logo -> Scrolls to hero */}
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={ASSETS.f1Logo}
                        alt="F1 Logo"
                        className="h-6 md:h-8 object-contain filter brightness-0 invert hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all"
                    />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center cursor-pointer">
                    <button onClick={() => scrollTo('drivers')} className="text-xs uppercase tracking-[0.2em] font-bold text-white/60 hover:text-white transition-colors">
                        2026 Drivers
                    </button>
                    <button onClick={() => scrollTo('constructors')} className="text-xs uppercase tracking-[0.2em] font-bold text-white/60 hover:text-white transition-colors">
                        2026 Teams
                    </button>
                    <button onClick={() => scrollTo('schedule')} className="text-xs uppercase tracking-[0.2em] font-bold text-[--color-f1-red] hover:text-red-400 drop-shadow-[0_0_10px_rgba(225,6,0,0.5)] transition-colors">
                        Live Schedule
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
