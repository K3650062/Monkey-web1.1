"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

const MapViewer = dynamic(() => import("@/features/map/MapViewer"), {
    ssr: false,
});

export default function MapPage() {
    return (
        <main className="h-screen w-full relative pt-20 bg-background flex flex-col">
            <div className="absolute top-24 left-6 z-10">
                <Button variant="secondary" size="sm" className="shadow-lg" asChild>
                    <Link href="/" className="flex items-center gap-2">
                        <ArrowLeft size={16} /> Back Home
                    </Link>
                </Button>
            </div>

            <div className="container mx-auto px-6 py-4 flex-shrink-0">
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                    Global Habitats
                </h1>
                <p className="text-text-secondary">Explore the jungles where these amazing primates live.</p>
            </div>

            <div className="flex-grow w-full relative border-t border-primary/10">
                <MapViewer />
            </div>
        </main>
    );
}
