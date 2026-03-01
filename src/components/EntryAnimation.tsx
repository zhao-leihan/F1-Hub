"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ASSETS } from "@/lib/assets";

export default function EntryAnimation() {
    const [complete, setComplete] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setComplete(true), 2800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {!complete && (
                <motion.div
                    key="entry"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
                >
                    <div className="relative flex items-center justify-center w-48 h-48">

                        {/* Outer spinning ring */}
                        <motion.svg
                            className="absolute inset-0 w-full h-full"
                            viewBox="0 0 192 192"
                            fill="none"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
                        >
                            <circle
                                cx="96"
                                cy="96"
                                r="88"
                                stroke="url(#ringGrad)"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeDasharray="180 380"
                            />
                            <defs>
                                <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#e10600" />
                                    <stop offset="100%" stopColor="#e10600" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </motion.svg>

                        {/* Inner slower counter-spin subtle ring */}
                        <motion.svg
                            className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)]"
                            viewBox="0 0 176 176"
                            fill="none"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        >
                            <circle
                                cx="88"
                                cy="88"
                                r="82"
                                stroke="rgba(255,255,255,0.06)"
                                strokeWidth="1"
                                strokeDasharray="60 450"
                            />
                        </motion.svg>

                        {/* F1 Logo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative z-10 flex items-center justify-center"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={ASSETS.f1Logo}
                                alt="F1 Logo"
                                className="w-24 filter brightness-0 invert drop-shadow-[0_0_24px_rgba(225,6,0,0.8)]"
                            />
                        </motion.div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
