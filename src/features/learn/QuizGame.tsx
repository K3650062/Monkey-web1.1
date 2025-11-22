"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { CheckCircle, XCircle, RefreshCw } from "lucide-react";

const questions = [
    {
        question: "Which monkey is known for its large, bulbous nose?",
        options: ["Mandrill", "Proboscis Monkey", "Howler Monkey", "Spider Monkey"],
        answer: "Proboscis Monkey",
    },
    {
        question: "What is the smallest monkey species?",
        options: ["Pygmy Marmoset", "Squirrel Monkey", "Tamarin", "Capuchin"],
        answer: "Pygmy Marmoset",
    },
    {
        question: "Which monkey has a prehensile tail?",
        options: ["Baboon", "Macaque", "Spider Monkey", "Gorilla"],
        answer: "Spider Monkey",
    },
];

export function QuizGame() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const handleAnswerOptionClick = (option: string) => {
        setSelectedOption(option);
        const correct = option === questions[currentQuestion].answer;
        setIsCorrect(correct);

        if (correct) {
            setScore(score + 1);
        }

        setTimeout(() => {
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
                setSelectedOption(null);
                setIsCorrect(null);
            } else {
                setShowScore(true);
            }
        }, 1500);
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
        setSelectedOption(null);
        setIsCorrect(null);
    };

    return (
        <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl border-none overflow-hidden">
                <CardHeader className="bg-primary text-white p-8 text-center">
                    <CardTitle className="text-3xl font-heading">Jungle Trivia</CardTitle>
                    <p className="text-white/70 mt-2">Test your primate knowledge!</p>
                </CardHeader>

                <CardContent className="p-8">
                    {showScore ? (
                        <div className="text-center py-8">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="mb-6"
                            >
                                <div className="text-6xl mb-4">🏆</div>
                                <h2 className="text-3xl font-bold text-primary mb-2">Quiz Complete!</h2>
                                <p className="text-xl text-text-secondary">
                                    You scored <span className="font-bold text-accent text-2xl">{score}</span> out of {questions.length}
                                </p>
                            </motion.div>
                            <Button onClick={resetQuiz} size="lg" className="gap-2">
                                <RefreshCw size={18} /> Play Again
                            </Button>
                        </div>
                    ) : (
                        <>
                            <div className="flex justify-between items-center mb-8 text-sm font-medium text-text-secondary">
                                <span>Question {currentQuestion + 1}/{questions.length}</span>
                                <span>Score: {score}</span>
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-primary mb-8 text-center leading-relaxed">
                                {questions[currentQuestion].question}
                            </h3>

                            <div className="grid grid-cols-1 gap-4">
                                {questions[currentQuestion].options.map((option) => {
                                    const isSelected = selectedOption === option;
                                    const isAnswerCorrect = isSelected && isCorrect;
                                    const isAnswerWrong = isSelected && !isCorrect;

                                    let buttonClass = "h-auto py-4 text-lg justify-between group hover:border-primary/50 hover:bg-primary/5";
                                    if (isAnswerCorrect) buttonClass = "h-auto py-4 text-lg justify-between bg-green-100 border-green-500 text-green-800 hover:bg-green-200";
                                    if (isAnswerWrong) buttonClass = "h-auto py-4 text-lg justify-between bg-red-100 border-red-500 text-red-800 hover:bg-red-200";

                                    return (
                                        <Button
                                            key={option}
                                            variant="outline"
                                            className={buttonClass}
                                            onClick={() => !selectedOption && handleAnswerOptionClick(option)}
                                            disabled={!!selectedOption}
                                        >
                                            {option}
                                            {isAnswerCorrect && <CheckCircle className="text-green-600" size={20} />}
                                            {isAnswerWrong && <XCircle className="text-red-600" size={20} />}
                                        </Button>
                                    );
                                })}
                            </div>
                        </>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
