import { MatchGame } from "@/features/games/MatchGame";
import { ArrowLeft } from "lucide-react";
import { QuizGame } from "@/features/learn/QuizGame";
import { Card, CardContent } from "@/components/ui/Card";
import { BookOpen, BrainCircuit, GraduationCap } from "lucide-react";

export default function LearnPage() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6">
                        Learn & Play
                    </h1>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Discover fascinating facts about primates and test your knowledge with our interactive quiz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <Card className="border-none shadow-md bg-primary/5">
                        <CardContent className="p-8 text-center">
                            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                                <BookOpen size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-2">Read</h3>
                            <p className="text-text-secondary">Explore detailed profiles of various monkey species.</p>
                        </CardContent>
                    </Card>
                    <Card className="border-none shadow-md bg-secondary/5">
                        <CardContent className="p-8 text-center">
                            <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                                <BrainCircuit size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-2">Think</h3>
                            <p className="text-text-secondary">Understand the complex social structures and behaviors.</p>
                        </CardContent>
                    </Card>
                    <Card className="border-none shadow-md bg-accent/10">
                        <CardContent className="p-8 text-center">
                            <div className="w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                <GraduationCap size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-2">Master</h3>
                            <p className="text-text-secondary">Become a primate expert by acing our quizzes.</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="max-w-4xl mx-auto">
                    <QuizGame />
                </div>
            </div>
        </main>
    );
}
