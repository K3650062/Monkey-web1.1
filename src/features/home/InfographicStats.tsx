"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function StatItem({ from, to, label, suffix = "" }: { from: number; to: number; label: string; suffix?: string }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const [count, setCount] = useState(from);

    useEffect(() => {
        if (inView) {
            const controls = animate(from, to, {
                duration: 2.5,
                ease: "easeOut",
                onUpdate(value) {
                    setCount(Math.round(value));
                },
            });
            return () => controls.stop();
        }
    }, [inView, from, to]);

    return (
        <div ref={ref} className="text-center p-6">
            <div className="text-5xl md:text-6xl font-heading font-bold text-accent mb-2">
                {count}{suffix}
            </div>
            <div className="text-white/80 font-medium uppercase tracking-wider text-sm">{label}</div>
        </div>
    );
}

export function InfographicStats() {
    return (
        <section className="py-20 bg-primary relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
                    <StatItem from={0} to={260} label="Known Species" suffix="+" />
                    <StatItem from={0} to={15} label="Jungle Regions" />
                    <StatItem from={0} to={3} label="Continents" />
                    <StatItem from={0} to={100} label="Conservation Projects" suffix="%" />
                </div>
            </div>
        </section>
    );
}
