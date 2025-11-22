"use client";

import { motion } from "framer-motion";
import { SpeciesCard } from "@/features/species/SpeciesCard";
import { speciesData } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function FeaturedSpecies() {
    // Select 4 random species for the featured section
    const featured = speciesData.slice(0, 4);

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Meet the Locals</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
                            Featured Species
                        </h2>
                        <p className="text-text-secondary text-lg">
                            Get to know some of the most fascinating primates from around the world.
                            From the tiny Pygmy Marmoset to the colorful Mandrill.
                        </p>
                    </div>
                    <Button variant="outline" size="lg" className="hidden md:inline-flex" asChild>
                        <Link href="/species">View All Species</Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featured.map((species, index) => (
                        <motion.div
                            key={species.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <SpeciesCard species={species} />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Button variant="outline" size="lg" className="w-full" asChild>
                        <Link href="/species">View All Species</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
