"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/magnetic-button";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/platform", label: "Platform" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Influence" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${isScrolled ? "glass-strong py-3" : "py-5"
                    }`}
            >
                <div className="container mx-auto flex items-center justify-between px-6">
                    {/* Logo */}
                    <Link href="/" className="group flex items-center">
                        <div className="relative h-[90px] w-[360px] overflow-hidden">
                            <Image
                                src="/Strohm_Media_Logo-no-bg.jpeg"
                                alt="Strohm Media"
                                width={360}
                                height={90}
                                className="h-full w-full object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-1 lg:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-primary to-accent transition-all duration-300 hover:w-full group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <MagneticButton>
                            <Link href="/calendar">
                                <Button className="shimmer bg-gradient-to-r from-primary to-accent font-semibold">
                                    Book a Call
                                </Button>
                            </Link>
                        </MagneticButton>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-border lg:hidden"
                        aria-label="Toggle menu"
                    >
                        <AnimatePresence mode="wait">
                            {isOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X className="h-5 w-5" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu className="h-5 w-5" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden"
                    >
                        <motion.nav
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            className="flex h-full flex-col items-center justify-center gap-8"
                        >
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ delay: 0.1 + index * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-3xl font-bold tracking-tight transition-colors hover:text-primary"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="mt-8"
                            >
                                <Link href="/calendar" onClick={() => setIsOpen(false)}>
                                    <Button
                                        size="lg"
                                        className="bg-gradient-to-r from-primary to-accent px-8 font-semibold"
                                    >
                                        Book a Call
                                    </Button>
                                </Link>
                            </motion.div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
