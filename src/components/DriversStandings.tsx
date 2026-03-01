"use client";

import { motion } from "framer-motion";
import { getTeamStyle } from "@/lib/teams";

const grid2026 = [
    { id: "verstappen", num: "3", first: "Max", last: "Verstappen", team: "red_bull" },
    { id: "hadjar", num: "17", first: "Isack", last: "Hadjar", team: "red_bull" },
    { id: "norris", num: "1", first: "Lando", last: "Norris", team: "mclaren" },
    { id: "piastri", num: "81", first: "Oscar", last: "Piastri", team: "mclaren" },
    { id: "leclerc", num: "16", first: "Charles", last: "Leclerc", team: "ferrari" },
    { id: "hamilton", num: "44", first: "Lewis", last: "Hamilton", team: "ferrari" },
    { id: "russell", num: "63", first: "George", last: "Russell", team: "mercedes" },
    { id: "antonelli", num: "12", first: "Kimi", last: "Antonelli", team: "mercedes" },
    { id: "alonso", num: "14", first: "Fernando", last: "Alonso", team: "aston_martin" },
    { id: "stroll", num: "18", first: "Lance", last: "Stroll", team: "aston_martin" },
    { id: "gasly", num: "10", first: "Pierre", last: "Gasly", team: "alpine" },
    { id: "colapinto", num: "43", first: "Franco", last: "Colapinto", team: "alpine" },
    { id: "sainz", num: "55", first: "Carlos", last: "Sainz", team: "williams" },
    { id: "albon", num: "23", first: "Alex", last: "Albon", team: "williams" },
    { id: "lawson", num: "30", first: "Liam", last: "Lawson", team: "rb" },
    { id: "lindblad", num: "35", first: "Arvid", last: "Lindblad", team: "rb" },
    { id: "hulkenberg", num: "27", first: "Nico", last: "Hülkenberg", team: "audi" },
    { id: "bortoleto", num: "85", first: "Gabriel", last: "Bortoleto", team: "audi" },
    { id: "ocon", num: "31", first: "Esteban", last: "Ocon", team: "haas" },
    { id: "bearman", num: "87", first: "Oliver", last: "Bearman", team: "haas" },
    { id: "perez", num: "11", first: "Sergio", last: "Pérez", team: "cadillac" },
    { id: "bottas", num: "77", first: "Valtteri", last: "Bottas", team: "cadillac" },
    { id: "zhao", num: "28", first: "Zhao", last: "Han", team: "zytherion" },
    { id: "gracia", num: "27", first: "Gracia", last: "Angelina", team: "zytherion" },
];

export default function DriversStandings() {
    return (
        <section id="drivers" className="py-32 bg-[#020202] relative bg-noise scanlines min-h-screen">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-10" />

            <div className="container mx-auto px-4 z-20 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-5xl md:text-8xl font-racing italic uppercase tracking-widest text-white drop-shadow-2xl">
                        2026 Drivers <span className="text-[--color-f1-red]">Grid</span>
                    </h2>
                    <p className="text-gray-400 mt-6 font-light text-lg md:text-xl max-w-2xl mx-auto uppercase tracking-[0.2em]">
                        12 Teams. 24 Drivers. A new era of Formula 1.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {grid2026.map((driver, idx) => {
                        const theme = getTeamStyle(driver.team);
                        const driverData = theme.drivers.find(d => d.num === driver.num);

                        return (
                            <motion.div
                                key={`${driver.id}-${idx}`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (idx % 3) * 0.1, duration: 0.6, ease: "easeOut" }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group relative h-[360px] md:h-[400px] rounded-2xl overflow-hidden glass-panel cursor-pointer border-l-4"
                                style={{ borderLeftColor: theme.color }}
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-30 group-hover:opacity-60 mix-blend-luminosity group-hover:mix-blend-normal"
                                    style={{ backgroundImage: `url(${theme.image})` }}
                                />

                                {/* Team Gradients */}
                                <div
                                    className="absolute inset-0 opacity-80 transition-opacity duration-500"
                                    style={{ background: `linear-gradient(to top, #000 20%, transparent 80%, ${theme.color}40 100%)` }}
                                />

                                {/* Driver Portrait */}
                                {driverData?.img && (
                                    <div className="absolute -bottom-2 -right-4 w-[110%] h-[110%] z-0 pointer-events-none transition-all duration-700 group-hover:scale-[1.05] group-hover:-translate-x-4">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={driverData.img}
                                            alt={driver.last}
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-full object-contain object-bottom drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                                        />
                                    </div>
                                )}

                                {/* Card Header: Number Watermark */}
                                <div className="absolute top-4 right-6 md:top-8 md:right-8 z-20">
                                    <span
                                        className="text-6xl md:text-8xl font-racing italic transition-all duration-500 opacity-20 group-hover:opacity-60"
                                        style={{ color: "transparent", WebkitTextStroke: `1px ${theme.accent}` }}
                                    >
                                        {driver.num}
                                    </span>
                                </div>

                                {/* Content Overlay */}
                                <div className="relative h-full z-10 p-6 md:p-8 flex flex-col justify-end pointer-events-none">
                                    {/* Bottom gradient overlay for text legibility */}
                                    <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent -z-10" />

                                    <div className="flex flex-col gap-1 mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="text-xs md:text-lg font-light text-white/50 tracking-wider leading-none">{driver.first}</p>
                                        <h3 className="text-xl min-[360px]:text-2xl min-[400px]:text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-[0.9] break-words max-w-[90%]">
                                            {driver.last}
                                        </h3>
                                    </div>

                                    <div className="flex items-center gap-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        <div className="w-6 md:w-10 h-1" style={{ backgroundColor: theme.accent }} />
                                        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-gray-300">
                                            {theme.name}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
