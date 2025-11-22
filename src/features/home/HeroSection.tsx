"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function HeroSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div
            ref={ref}
            className="relative h-[90vh] w-full overflow-hidden bg-primary flex items-center justify-center"
        >
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/60 to-primary z-10" />
                {/* High quality jungle image */}
                <div
                    className="w-full h-full bg-cover bg-center opacity-80"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=2076&auto=format&fit=crop')" }}
                />
            </motion.div>

            <motion.div
                style={{ y: textY }}
                className="relative z-20 text-center px-6 max-w-5xl mx-auto"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-8 tracking-tight leading-tight drop-shadow-lg">
                        Discover the <br />
                        <span className="text-accent">Wild World</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md"
                >
                    Journey into the heart of the jungle. Explore diverse primate species,
                    uncover their hidden habitats, and join the mission to protect them.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Button size="lg" className="rounded-full text-lg font-bold px-8 shadow-xl shadow-primary/20" asChild>
                        <Link href="/species">Start Exploring</Link>
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full text-lg font-bold px-8 border-white text-white hover:bg-white/10 hover:text-white" asChild>
                        <Link href="/map">View Global Map</Link>
                    </Button>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white/50 rounded-full" />
                </div>
            </motion.div>
        </div>
    );
}
