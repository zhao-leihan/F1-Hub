"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgressBar() {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[3px] z-[200] origin-left"
            style={{
                scaleX: scrollYProgress,
                background: "linear-gradient(to right, #e10600, #ff5544)",
                boxShadow: "0 0 8px rgba(225, 6, 0, 0.8)"
            }}
        />
    );
}
