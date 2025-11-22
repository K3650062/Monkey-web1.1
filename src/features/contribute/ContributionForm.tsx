"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { CheckCircle, Send } from "lucide-react";

export function ContributionForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setSubmitted(true);
        }, 1000);
    };

    if (submitted) {
        return (
            <Card className="max-w-xl mx-auto border-none shadow-xl">
                <CardContent className="p-12 text-center">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-primary mb-2">Thank You!</h3>
                    <p className="text-text-secondary mb-8">
                        Your sighting has been submitted to our database. Our team will review it shortly.
                    </p>
                    <Button onClick={() => setSubmitted(false)} variant="outline">
                        Submit Another Sighting
                    </Button>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="max-w-xl mx-auto border-none shadow-xl">
            <CardHeader className="bg-primary text-white p-8">
                <CardTitle className="text-2xl font-heading">Report a Sighting</CardTitle>
                <CardDescription className="text-white/70">
                    Help us track primate populations by sharing your observations.
                </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="species" className="text-sm font-medium text-primary">Species Name</label>
                        <input
                            id="species"
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            placeholder="e.g. Capuchin Monkey"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="date" className="text-sm font-medium text-primary">Date Seen</label>
                            <input
                                id="date"
                                type="date"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="location" className="text-sm font-medium text-primary">Location</label>
                            <input
                                id="location"
                                type="text"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                placeholder="e.g. Costa Rica"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="notes" className="text-sm font-medium text-primary">Notes</label>
                        <textarea
                            id="notes"
                            rows={4}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                            placeholder="Describe behavior, number of individuals, etc."
                        />
                    </div>

                    <Button type="submit" className="w-full gap-2" size="lg">
                        <Send size={18} /> Submit Report
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
