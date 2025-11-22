import Image from "next/image";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Users, Heart, Globe } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-12">
            <div className="container mx-auto px-6">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6">
                        About Jungles & Monkeys
                    </h1>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                        We are dedicated to educating the world about the fascinating lives of primates and the urgent need to protect their habitats.
                    </p>
                </div>

                {/* Mission Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1540573133985-87b6da6dce60?q=80&w=2670&auto=format&fit=crop"
                            alt="Rainforest Canopy"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-8 left-8 text-white">
                            <h3 className="text-2xl font-bold mb-2">Protecting Habitats</h3>
                            <p className="text-white/80">Preserving the lungs of our planet.</p>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-heading font-bold text-primary">Our Mission</h2>
                        <p className="text-lg text-text-secondary">
                            Our mission is to inspire a global community of wildlife enthusiasts to take action in primate conservation. Through education, research, and community engagement, we aim to secure a future where monkeys and humans thrive together.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            <div className="flex items-start gap-3">
                                <div className="bg-secondary/10 p-2 rounded-lg text-secondary">
                                    <Heart size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">Conservation</h4>
                                    <p className="text-sm text-text-secondary">Supporting vital projects worldwide.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-accent/10 p-2 rounded-lg text-accent">
                                    <Globe size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">Education</h4>
                                    <p className="text-sm text-text-secondary">Spreading awareness and knowledge.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-heading font-bold text-primary mb-4">Meet the Team</h2>
                        <p className="text-text-secondary">Passionate individuals working behind the scenes.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Dr. Jane Doe", role: "Primatologist", image: "https://randomuser.me/api/portraits/women/44.jpg" },
                            { name: "John Smith", role: "Conservationist", image: "https://randomuser.me/api/portraits/men/32.jpg" },
                            { name: "Sarah Lee", role: "Educator", image: "https://randomuser.me/api/portraits/women/68.jpg" },
                        ].map((member) => (
                            <Card key={member.name} className="border-none shadow-md hover:shadow-xl transition-all">
                                <CardContent className="p-6 text-center">
                                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-background shadow-sm">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            width={96}
                                            height={96}
                                            className="object-cover"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                                    <p className="text-secondary font-medium">{member.role}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-primary rounded-3xl p-12 text-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Join Our Cause</h2>
                        <p className="text-white/80 text-lg mb-8">
                            Whether you donate, volunteer, or simply spread the word, your support makes a difference.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="accent" size="lg" asChild>
                                <Link href="/contribute">Get Involved</Link>
                            </Button>
                            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary" asChild>
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
