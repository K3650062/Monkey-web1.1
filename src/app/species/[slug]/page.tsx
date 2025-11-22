import { speciesData } from "@/lib/data";
import { SpeciesDetail } from "@/features/species/SpeciesDetail";
import { notFound } from "next/navigation";

// Generate static params for all species
export async function generateStaticParams() {
    return speciesData.map((species) => ({
        slug: species.slug,
    }));
}

export default async function SpeciesDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const species = speciesData.find((s) => s.slug === slug);

    if (!species) {
        notFound();
    }

    return <SpeciesDetail species={species} />;
}
