"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Map, Search, Heart, Gamepad2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "/species", label: "Species", icon: Search },
        { href: "/map", label: "Map", icon: Map },
        { href: "/learn", label: "Games", icon: Gamepad2 },
        { href: "/contribute", label: "Contribute", icon: Heart },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-primary/95 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-2xl font-heading font-bold text-white flex items-center gap-2 hover:opacity-90 transition-opacity">
                    <span className="text-3xl">🐵</span> Jungles<span className="text-accent">&</span>Monkeys
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-white/90 hover:text-accent font-medium transition-colors flex items-center gap-2 text-sm tracking-wide"
                        >
                            <link.icon size={16} />
                            {link.label}
                        </Link>
                    ))}
                    <Button variant="secondary" size="sm" asChild className="rounded-full font-bold">
                        <Link href="/about">About Us</Link>
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-primary border-t border-white/10 overflow-hidden shadow-xl"
                    >
                        <nav className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-white/90 hover:text-accent font-medium py-3 px-4 rounded-xl hover:bg-white/5 flex items-center gap-3 transition-colors"
                                >
                                    <link.icon size={20} />
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/about"
                                onClick={() => setIsOpen(false)}
                                className="text-white/90 hover:text-accent font-medium py-3 px-4 rounded-xl hover:bg-white/5 transition-colors"
                            >
                                About Us
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
