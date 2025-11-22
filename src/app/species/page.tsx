import { SpeciesGrid } from "@/features/species/SpeciesGrid";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SpeciesPage() {
    return (
        <main className="min-h-screen bg-jungle-50 py-12 px-4 md:px-8">
            <div className="container mx-auto">
                <div className="mb-8">
                    <Link href="/" className="flex items-center gap-2 text-jungle-600 hover:text-jungle-800 mb-4 font-bold text-sm inline-block">
                        <ArrowLeft size={16} /> Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-jungle-900 mb-4">Explore Monkeys</h1>
                    <p className="text-jungle-700 max-w-2xl text-lg">
                        Discover the incredible diversity of primates from around the world. Use the filters to find specific species.
                    </p>
                </div>
                <SpeciesGrid />
            </div>
        </main>
    );
}
