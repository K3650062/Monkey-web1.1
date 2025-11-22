import Image from "next/image";

import { HeroSection } from "@/features/home/HeroSection";
import { InfographicStats } from "@/features/home/InfographicStats";
import { FeaturedSpecies } from "@/features/home/FeaturedSpecies";
import { DidYouKnow } from "@/features/home/DidYouKnow";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <InfographicStats />
      <DidYouKnow />
      <FeaturedSpecies />
    </main>
  );
}
