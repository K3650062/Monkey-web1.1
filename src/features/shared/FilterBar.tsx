"use client";

import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface FilterBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    activeFilter: string;
    setActiveFilter: (filter: string) => void;
}

const filters = ["All", "Critically Endangered", "Endangered", "Vulnerable", "Least Concern"];

export function FilterBar({ searchQuery, setSearchQuery, activeFilter, setActiveFilter }: FilterBarProps) {
    return (
        <div className="flex flex-col md:flex-row gap-6 mb-10 items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-primary/5">
            <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={20} />
                <input
                    type="text"
                    placeholder="Search species..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-background border-none focus:ring-2 focus:ring-primary/20 transition-all text-primary placeholder:text-text-secondary/50"
                />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={cn(
                            "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                            activeFilter === filter
                                ? "bg-primary text-white shadow-md"
                                : "bg-background text-text-secondary hover:bg-primary/5 hover:text-primary"
                        )}
                    >
                        {filter}
                    </button>
                ))}
            </div>
        </div>
    );
}
