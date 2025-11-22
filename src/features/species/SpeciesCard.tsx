import Link from "next/link";
import Image from "next/image";
import { Species } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { MapPin, ArrowRight } from "lucide-react";

export function SpeciesCard({ species }: { species: Species }) {
    const getStatusVariant = (status: string) => {
        switch (status) {
            case 'Critically Endangered': return 'danger';
            case 'Endangered': return 'warning';
            case 'Vulnerable': return 'warning';
            default: return 'success';
        }
    };

    return (
        <Link href={`/species/${species.slug}`} className="group block h-full">
            <Card className="h-full overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className="relative h-64 w-full overflow-hidden">
                    <Image
                        src={species.image}
                        alt={species.common_name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                        <Badge variant={getStatusVariant(species.status)} className="shadow-sm backdrop-blur-sm bg-opacity-90">
                            {species.status}
                        </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardContent className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-heading font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                        {species.common_name}
                    </h3>
                    <p className="text-sm text-text-secondary italic mb-4">{species.scientific_name}</p>

                    <div className="mt-auto pt-4 border-t border-primary/5 flex items-center justify-between text-sm text-text-secondary">
                        <span className="flex items-center gap-1.5">
                            <MapPin size={14} className="text-accent" />
                            {species.range}
                        </span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary font-bold flex items-center gap-1">
                            Details <ArrowRight size={14} />
                        </span>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
