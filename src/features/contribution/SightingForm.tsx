"use client";

import { useState } from "react";
import { speciesData } from "@/lib/data";

export function SightingForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setTimeout(() => {
            setSubmitted(true);
        }, 1000);
    };

    if (submitted) {
        return (
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-green-200 text-center max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">✅</span>
                </div>
                <h2 className="text-2xl font-heading font-bold text-jungle-900 mb-2">Sighting Submitted!</h2>
                <p className="text-jungle-700 mb-6">Thank you for contributing to our database. Your sighting is pending review.</p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 bg-jungle-600 text-white rounded-full font-bold hover:bg-jungle-700 transition-colors"
                >
                    Submit Another
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-xl border border-jungle-100 max-w-2xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-jungle-900 mb-6">Report a Sighting</h2>

            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-bold text-jungle-700 mb-2">Species</label>
                    <select className="w-full p-3 rounded-xl bg-jungle-50 border-none focus:ring-2 focus:ring-monkey-gold/50 outline-none">
                        <option value="">Select a species...</option>
                        {speciesData.map(s => (
                            <option key={s.id} value={s.id}>{s.common_name}</option>
                        ))}
                        <option value="unknown">Unknown / Other</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-jungle-700 mb-2">Date</label>
                        <input type="date" className="w-full p-3 rounded-xl bg-jungle-50 border-none focus:ring-2 focus:ring-monkey-gold/50 outline-none" required />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-jungle-700 mb-2">Location</label>
                        <input type="text" placeholder="e.g. Amazon, Brazil" className="w-full p-3 rounded-xl bg-jungle-50 border-none focus:ring-2 focus:ring-monkey-gold/50 outline-none" required />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-jungle-700 mb-2">Photo URL (Optional)</label>
                    <input type="url" placeholder="https://..." className="w-full p-3 rounded-xl bg-jungle-50 border-none focus:ring-2 focus:ring-monkey-gold/50 outline-none" />
                </div>

                <div>
                    <label className="block text-sm font-bold text-jungle-700 mb-2">Notes</label>
                    <textarea rows={4} className="w-full p-3 rounded-xl bg-jungle-50 border-none focus:ring-2 focus:ring-monkey-gold/50 outline-none" placeholder="Describe behavior, troop size, etc."></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-monkey-orange text-white font-bold rounded-xl hover:bg-monkey-gold transition-colors shadow-lg hover:shadow-monkey-orange/20">
                    Submit Sighting
                </button>
            </div>
        </form>
    );
}
