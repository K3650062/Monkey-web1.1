"use client";

import { motion } from "framer-motion";
import { Lightbulb, Leaf, Globe, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

const facts = [
    {
        icon: Lightbulb,
        title: "Intelligence",
        description: "Some monkeys can use tools, solve complex puzzles, and even understand basic math concepts.",
        color: "text-accent",
        bg: "bg-accent/10",
    },
    {
        icon: Leaf,
        title: "Ecosystem Engineers",
        description: "Monkeys play a crucial role in dispersing seeds, helping to regenerate and maintain healthy rainforests.",
        color: "text-secondary",
        bg: "bg-secondary/10",
    },
    {
        icon: Globe,
        title: "Global Citizens",
        description: "Primates are found on every continent except Antarctica, adapting to diverse environments from snow to sand.",
        color: "text-primary",
        bg: "bg-primary/10",
    },
    {
        icon: Users,
        title: "Social Structures",
        description: "Most monkeys live in complex social groups with intricate hierarchies, friendships, and communication systems.",
        color: "text-orange-500",
        bg: "bg-orange-500/10",
    },
];

export function DidYouKnow() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Educational Insights</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
                        Did You Know?
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Monkeys are more than just playful creatures. They are intelligent, social, and vital to our planet's health.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {facts.map((fact, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full hover:shadow-lg transition-all duration-300 border-none shadow-md">
                                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                                    <div className={`w-16 h-16 rounded-full ${fact.bg} ${fact.color} flex items-center justify-center mb-6`}>
                                        <fact.icon size={32} />
                                    </div>
                                    <h3 className="text-xl font-heading font-bold text-primary mb-3">
                                        {fact.title}
                                    </h3>
                                    <p className="text-text-secondary leading-relaxed">
                                        {fact.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
