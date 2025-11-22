import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-primary text-white/80 py-16 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-heading font-bold text-white mb-6 block">
                            Jungles<span className="text-accent">&</span>Monkeys
                        </Link>
                        <p className="max-w-sm text-sm leading-relaxed text-white/70">
                            Connecting people with primates through education, interactive maps, and conservation awareness. Join us in preserving these incredible species.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6 font-heading tracking-wide">Explore</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/species" className="hover:text-accent transition-colors">All Species</Link></li>
                            <li><Link href="/map" className="hover:text-accent transition-colors">Interactive Map</Link></li>
                            <li><Link href="/learn" className="hover:text-accent transition-colors">Games & Quizzes</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6 font-heading tracking-wide">Community</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/contribute" className="hover:text-accent transition-colors">Submit Sighting</Link></li>
                            <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Newsletter</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-center text-xs text-white/50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} Jungles & Monkeys. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
