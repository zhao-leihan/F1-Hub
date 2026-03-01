"use client";

import dynamic from "next/dynamic";

// Lazy-load heavy below-the-fold sections for mobile perf.
// ssr:false means these don't block initial page HTML.
const DriversStandings = dynamic(() => import("@/components/DriversStandings"), { ssr: false });
const ConstructorsStandings = dynamic(() => import("@/components/ConstructorsStandings"), { ssr: false });
const Schedule = dynamic(() => import("@/components/Schedule"), { ssr: false });
const StatsSection = dynamic(() => import("@/components/StatsSection"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function LazyContent() {
    return (
        <>
            <DriversStandings />
            <ConstructorsStandings />
            <Schedule />
            <StatsSection />
            <Footer />
        </>
    );
}
