import { SightingForm } from "@/features/contribution/SightingForm";
import { ArrowLeft } from "lucide-react";
import { ContributionForm } from "@/features/contribute/ContributionForm";
import { Card, CardContent } from "@/components/ui/Card";
import { Camera, FileText, Users } from "lucide-react";
import Link from "next/link";

export default function ContributePage() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6">
                        Get Involved
                    </h1>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Your observations help scientists track and protect primate populations worldwide.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto">
                            <Camera size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-primary">1. Observe</h3>
                        <p className="text-text-secondary text-sm">Spot a monkey in the wild? Take a photo and note the location.</p>
                    </div>
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto">
                            <FileText size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-primary">2. Report</h3>
                        <p className="text-text-secondary text-sm">Fill out our simple form with details about your sighting.</p>
                    </div>
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto">
                            <Users size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-primary">3. Contribute</h3>
                        <p className="text-text-secondary text-sm">Your data becomes part of a global conservation database.</p>
                    </div>
                </div>

                <div className="max-w-2xl mx-auto">
                    <ContributionForm />
                </div>
            </div>
        </main>
    );
}
