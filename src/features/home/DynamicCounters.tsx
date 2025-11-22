"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ from, to, label }: { from: number; to: number; label: string }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const [count, setCount] = useState(from);

    useEffect(() => {
        if (inView) {
            const controls = animate(from, to, {
                duration: 2,
                ease: "easeOut",
                onUpdate(value) {
                    setCount(Math.round(value));
                },
            });
            return () => controls.stop();
        }
    }, [inView, from, to]);

    return (
        <div ref={ref} className="text-center p-8 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors group">
            <div className="text-5xl md:text-6xl font-heading font-bold text-monkey-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                {count}+
            </div>
            <div className="text-jungle-200 font-medium uppercase tracking-wider text-sm">{label}</div>
        </div>
    );
}

export function DynamicCounters() {
    return (
        <section className="py-24 bg-jungle-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-monkey-orange rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-jungle-500 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    <Counter from={0} to={260} label="Monkey Species" />
                    <Counter from={0} to={15} label="Jungle Regions" />
                    <Counter from={0} to={500} label="Sightings" />
                    <Counter from={0} to={1000} label="Conservation Actions" />
                </div>
            </div>
        </section>
    );
}
