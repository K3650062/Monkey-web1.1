"use client";

import Image from "next/image";
import Link from "next/link";
import { Species } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Leaf, Info, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";

export function SpeciesDetail({ species }: { species: Species }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Critically Endangered': return 'bg-red-100 text-red-800 border-red-200';
      case 'Endangered': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Vulnerable': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-green-100 text-green-800 border-green-200';
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Banner */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={species.image}
          alt={species.common_name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute top-24 left-0 w-full px-6">
          <Button variant="secondary" size="sm" className="backdrop-blur-md bg-white/20 hover:bg-white/30 text-white border-none" asChild>
            <Link href="/species" className="flex items-center gap-2">
              <ArrowLeft size={16} /> Back to Species
            </Link>
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 w-full px-6 pb-12 container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4 backdrop-blur-md bg-white/90 text-primary shadow-sm`}>
              {species.status}
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary mb-2 drop-shadow-sm">
              {species.common_name}
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary italic font-light">
              {species.scientific_name}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-heading font-bold text-primary mb-4 flex items-center gap-2">
                  <Info className="text-accent" /> Overview
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed">
                  {species.fun_fact} {/* Using fun_fact as description for now */}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-bold text-primary mb-3 flex items-center gap-2">
                    <Leaf className="text-secondary" /> Habitat & Diet
                  </h3>
                  <p className="text-text-secondary">
                    Primarily found in {species.range}. They thrive in dense rainforest canopies and feed on a variety of fruits, seeds, and insects.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-bold text-primary mb-3 flex items-center gap-2">
                    <AlertTriangle className="text-orange-500" /> Conservation
                  </h3>
                  <p className="text-text-secondary">
                    Currently listed as {species.status}. Major threats include habitat loss due to deforestation and illegal pet trade.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-primary text-white border-none">
              <CardContent className="p-8">
                <h3 className="text-xl font-heading font-bold mb-6 border-b border-white/20 pb-4">
                  Quick Facts
                </h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center">
                    <span className="text-white/70">Range</span>
                    <span className="font-medium text-right">{species.range}</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-white/70">Lifespan</span>
                    <span className="font-medium">15-20 Years</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-white/70">Weight</span>
                    <span className="font-medium">5-10 kg</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-white/70">Diet</span>
                    <span className="font-medium">Omnivore</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="bg-accent/10 rounded-2xl p-6 border border-accent/20">
              <h3 className="text-lg font-bold text-primary mb-2">Have you seen one?</h3>
              <p className="text-sm text-text-secondary mb-4">
                Contribute to our research by reporting your sighting.
              </p>
              <Button className="w-full font-bold" asChild>
                <Link href="/contribute">Submit Sighting</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
