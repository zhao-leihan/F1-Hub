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
    { id: "lindblad", num: "35", first: "Arvid", last: "Lindblad", team: "rb" }, // Assuming number
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
        <section id="drivers" className="py-32 bg-[#020202] relative bg-noise scanlines">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-10" />

            <div className="container mx-auto px-4 z-20 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-6xl md:text-8xl font-racing italic uppercase tracking-widest text-white drop-shadow-2xl">
                        2026 Drivers <span className="text-[--color-f1-red]">Grid</span>
                    </h2>
                    <p className="text-gray-400 mt-6 font-light text-xl max-w-2xl mx-auto uppercase tracking-[0.2em]">
                        12 Teams. 24 Drivers. A new era of Formula 1.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {grid2026.map((driver, idx) => {
                        const theme = getTeamStyle(driver.team);
                        const driverData = theme.drivers.find(d => d.num === driver.num);

                        return (
                            <motion.div
                                key={driver.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (idx % 3) * 0.1, duration: 0.6, ease: "easeOut" }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group relative h-[360px] rounded-2xl overflow-hidden glass-panel cursor-pointer"
                            >
                                {/* Background Image Setup */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-30 group-hover:opacity-60 mix-blend-luminosity group-hover:mix-blend-normal"
                                    style={{ backgroundImage: `url(${theme.image})` }}
                                />

                                {/* Team gradient overlays */}
                                <div
                                    className="absolute inset-0 opacity-80 transition-opacity duration-500"
                                    style={{ background: `linear-gradient(to top, #000 20%, transparent 80%, ${theme.color}40 100%)` }}
                                />

                                {/* Glow on hover */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ mixBlendMode: 'overlay', boxShadow: `inset 0 0 100px ${theme.color}` }}
                                />

                                {/* Driver Face Image */}
                                {driverData?.img && (
                                    <div className="absolute -bottom-2 -right-4 w-[110%] h-[110%] z-0 pointer-events-none transition-all duration-700 group-hover:scale-[1.08] group-hover:-translate-x-4">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={driverData.img} alt={driver.last} loading="lazy" decoding="async" className="w-full h-full object-contain object-bottom drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] filter contrast-125" />
                                    </div>
                                )}

                                {/* Content Container */}
                                <div className="relative h-full z-10 p-8 flex flex-col justify-between pointer-events-none">
                                    <div className="flex justify-end items-start absolute inset-x-8 top-8 z-20">
                                        <span
                                            className="text-7xl font-racing italic text-white/30 group-hover:text-white/80 transition-all duration-500 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]"
                                            style={{ color: "transparent", WebkitTextStroke: `1.5px ${theme.accent}` }}
                                        >
                                            {driver.num}
                                        </span>
                                    </div>

                                    {/* Bottom gradient specifically to make text pop against the driver image */}
                                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/70 to-transparent -z-10" />

                                    {/* Bottom Row: Name & Team */}
                                    <div className="relative mt-auto">
                                        <div className="flex items-baseline gap-2 mb-2 transform group-hover:translate-x-2 transition-transform duration-300">
                                            <h3 className="text-3xl font-light text-gray-200 drop-shadow-[0_4px_4px_rgba(0,0,0,1)]">{driver.first}</h3>
                                            <h3 className="text-5xl font-bold text-white uppercase tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,1)]" style={{ WebkitTextStroke: '0.5px rgba(0,0,0,0.5)' }}>
                                                {driver.last}
                                            </h3>
                                        </div>

                                        <div className="flex items-center gap-4 transform group-hover:translate-x-2 transition-transform duration-300 delay-75">
                                            <div className="w-8 h-1" style={{ backgroundColor: theme.accent }} />
                                            <p className="text-sm uppercase tracking-[0.2em] font-medium text-gray-300">
                                                {theme.name}
                                            </p>
                                        </div>

                                        {/* Driver Number Watermark inside card */}
                                        <div
                                            className="absolute right-0 bottom-0 text-[10rem] leading-none font-racing italic opacity-5 group-hover:opacity-20 transition-opacity duration-500 translate-y-10 translate-x-4 mix-blend-plus-lighter"
                                            style={{ color: theme.accent }}
                                        >
                                            {driver.num}
                                        </div>
                                    </div>
                                </div>

                                {/* Left Colored Accent Bar */}
                                <div
                                    className="absolute left-0 top-0 bottom-0 w-2 transition-all duration-300 group-hover:w-3 glass-panel"
                                    style={{ backgroundColor: theme.color, borderRight: `1px solid ${theme.accent}` }}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
