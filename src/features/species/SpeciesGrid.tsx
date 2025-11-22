"use client";

import { useState } from "react";
import { SpeciesCard } from "./SpeciesCard";
import { FilterBar } from "../shared/FilterBar";
import { speciesData } from "@/lib/data";
import { motion } from "framer-motion";

export function SpeciesGrid() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredSpecies = speciesData.filter((species) => {
        const matchesSearch = species.common_name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = activeFilter === "All" || species.status === activeFilter;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="container mx-auto px-6 py-12">
            <div className="mb-12 text-center">
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-4">
                    Species Explorer
                </h1>
                <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                    Discover the diverse world of primates. Filter by conservation status or search for your favorite species.
                </p>
            </div>

            <FilterBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
            />

            {filteredSpecies.length === 0 ? (
                <div className="text-center py-20">
                    <p className="text-text-secondary text-xl">No species found matching your criteria.</p>
                    <button
                        onClick={() => { setSearchQuery(""); setActiveFilter("All"); }}
                        className="mt-4 text-primary font-bold hover:underline"
                    >
                        Clear filters
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredSpecies.map((species, index) => (
                        <motion.div
                            key={species.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                            <SpeciesCard species={species} />
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
}
