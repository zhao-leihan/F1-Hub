"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    const navLinks = [
        { label: "Drivers", href: "#drivers" },
        { label: "Teams", href: "#constructors" },
        { label: "Schedule", href: "#schedule" },
    ];

    const teams = [
        { name: "McLaren", id: "mclaren" },
        { name: "Ferrari", id: "ferrari" },
        { name: "Red Bull", id: "red_bull" },
        { name: "Mercedes", id: "mercedes" },
        { name: "Aston Martin", id: "aston_martin" },
        { name: "Zytherion", id: "zytherion" },
    ];

    return (
        <footer className="relative bg-[#020202] border-t border-white/5 overflow-hidden">
            {/* Background racing stripe decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e10600] to-transparent opacity-60" />
                <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-[#e10600]/20 via-transparent to-transparent" />
                <div
                    className="absolute inset-0 opacity-[0.02] bg-cover bg-center grayscale"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541348263662-e068f62d10b8?q=80&w=2670&auto=format&fit=crop')" }}
                />
            </div>

            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">

                    {/* Brand column */}
                    <div className="flex flex-col gap-6">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/3/33/F1.svg"
                            alt="F1 Logo"
                            className="w-16 brightness-0 invert opacity-80"
                        />
                        <p className="text-gray-500 text-sm leading-relaxed font-light max-w-xs">
                            A fan-made cinematic F1 experience. All data sourced from public APIs.
                            Not affiliated with FIA or Formula One World Championship Limited.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-white transition-colors duration-200">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-white transition-colors duration-200">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-white transition-colors duration-200">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Navigate column */}
                    <div>
                        <h4 className="text-xs uppercase tracking-[0.3em] text-[#e10600] font-semibold mb-6">Navigate</h4>
                        <ul className="flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm uppercase tracking-widest font-light"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Teams column */}
                    <div>
                        <h4 className="text-xs uppercase tracking-[0.3em] text-[#e10600] font-semibold mb-6">Teams</h4>
                        <ul className="flex flex-col gap-3">
                            {teams.map((team) => (
                                <li key={team.id}>
                                    <Link
                                        href={`/team/${team.id}`}
                                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm uppercase tracking-widest font-light"
                                    >
                                        {team.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Copyright */}
                    <p className="text-gray-600 text-xs uppercase tracking-[0.2em]">
                        © 2026 F1 Cinematic Hub. All rights reserved.
                    </p>

                    {/* Made by */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                    >
                        <div className="w-8 h-px bg-[#e10600]" />
                        <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
                            Crafted by{" "}
                            <span className="text-white font-bold tracking-widest">Rayhan</span>
                        </p>
                        <div className="w-8 h-px bg-[#e10600]" />
                    </motion.div>

                    {/* Season tag */}
                    <p className="text-gray-600 text-xs uppercase tracking-[0.2em]">
                        F1 Season 2026
                    </p>
                </div>
            </div>
        </footer>
    );
}
