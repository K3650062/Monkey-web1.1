"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { speciesData } from "@/lib/data";
import Image from "next/image";

type Card = {
    id: string;
    type: "image" | "name";
    content: string;
    speciesId: string;
    isFlipped: boolean;
    isMatched: boolean;
};

export function MatchGame() {
    const [cards, setCards] = useState<Card[]>([]);
    const [flippedCards, setFlippedCards] = useState<string[]>([]);
    const [score, setScore] = useState(0);
    const [isWon, setIsWon] = useState(false);

    useEffect(() => {
        startNewGame();
    }, []);

    const startNewGame = () => {
        // Select 4 random species
        const selectedSpecies = [...speciesData].sort(() => 0.5 - Math.random()).slice(0, 4);

        const gameCards: Card[] = [];
        selectedSpecies.forEach(s => {
            gameCards.push({
                id: `${s.id}-image`,
                type: "image",
                content: s.image,
                speciesId: s.id,
                isFlipped: false,
                isMatched: false
            });
            gameCards.push({
                id: `${s.id}-name`,
                type: "name",
                content: s.common_name,
                speciesId: s.id,
                isFlipped: false,
                isMatched: false
            });
        });

        setCards(gameCards.sort(() => 0.5 - Math.random()));
        setFlippedCards([]);
        setScore(0);
        setIsWon(false);
    };

    const handleCardClick = (id: string) => {
        if (flippedCards.length === 2) return;

        const clickedCard = cards.find(c => c.id === id);
        if (!clickedCard || clickedCard.isMatched || clickedCard.isFlipped) return;

        const newCards = cards.map(c => c.id === id ? { ...c, isFlipped: true } : c);
        setCards(newCards);

        const newFlipped = [...flippedCards, id];
        setFlippedCards(newFlipped);

        if (newFlipped.length === 2) {
            const card1 = newCards.find(c => c.id === newFlipped[0]);
            const card2 = newCards.find(c => c.id === newFlipped[1]);

            if (card1 && card2 && card1.speciesId === card2.speciesId) {
                // Match
                setTimeout(() => {
                    setCards(prev => prev.map(c =>
                        c.id === card1.id || c.id === card2.id
                            ? { ...c, isMatched: true, isFlipped: false }
                            : c
                    ));
                    setFlippedCards([]);
                    setScore(prev => prev + 1);
                    if (score + 1 === 4) setIsWon(true);
                }, 1000);
            } else {
                // No match
                setTimeout(() => {
                    setCards(prev => prev.map(c =>
                        c.id === card1?.id || c.id === card2?.id
                            ? { ...c, isFlipped: false }
                            : c
                    ));
                    setFlippedCards([]);
                }, 1000);
            }
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-heading font-bold text-jungle-900">Memory Match</h2>
                <button
                    onClick={startNewGame}
                    className="px-4 py-2 bg-monkey-orange text-white rounded-full font-bold hover:bg-monkey-gold transition-colors"
                >
                    Restart Game
                </button>
            </div>

            {isWon ? (
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12 bg-white rounded-3xl shadow-xl border border-monkey-gold"
                >
                    <h3 className="text-4xl font-bold text-monkey-gold mb-4">Jungle Master!</h3>
                    <p className="text-xl text-jungle-800 mb-6">You matched all the monkeys!</p>
                    <button
                        onClick={startNewGame}
                        className="px-8 py-4 bg-jungle-600 text-white rounded-full font-bold text-lg hover:bg-jungle-700"
                    >
                        Play Again
                    </button>
                </motion.div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {cards.map((card) => (
                        <motion.div
                            key={card.id}
                            layout
                            onClick={() => handleCardClick(card.id)}
                            className={`aspect-square cursor-pointer perspective-1000 relative`}
                        >
                            <motion.div
                                className={`w-full h-full transition-all duration-500 transform-style-3d ${card.isFlipped || card.isMatched ? "rotate-y-180" : ""
                                    }`}
                                style={{ transformStyle: "preserve-3d" }}
                                animate={{ rotateY: card.isFlipped || card.isMatched ? 180 : 0 }}
                            >
                                {/* Front (Hidden) */}
                                <div
                                    className="absolute inset-0 w-full h-full bg-jungle-800 rounded-xl flex items-center justify-center backface-hidden"
                                    style={{ backfaceVisibility: "hidden" }}
                                >
                                    <span className="text-4xl">🌴</span>
                                </div>

                                {/* Back (Revealed) */}
                                <div
                                    className={`absolute inset-0 w-full h-full bg-white rounded-xl border-4 ${card.isMatched ? "border-green-500" : "border-monkey-gold"
                                        } flex items-center justify-center backface-hidden overflow-hidden`}
                                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                                >
                                    {card.type === "image" ? (
                                        <Image src={card.content} alt="Monkey" fill className="object-cover" />
                                    ) : (
                                        <span className="text-center font-bold text-jungle-900 p-2 text-sm md:text-base">
                                            {card.content}
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
}
