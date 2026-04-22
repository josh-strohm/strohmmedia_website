"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/magnetic-button";

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Initialize mesh animation with GSAP if available
        const initMeshAnimation = async () => {
            try {
                const { gsap } = await import("gsap");
                const meshElements = document.querySelectorAll(".mesh-orb");

                meshElements.forEach((el, i) => {
                    gsap.to(el, {
                        x: `random(-50, 50)`,
                        y: `random(-50, 50)`,
                        duration: 8 + i * 2,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                    });
                });
            } catch (e) {
                // GSAP not available, use CSS animations instead
            }
        };

        initMeshAnimation();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen overflow-hidden pt-32 pb-20"
        >
            {/* Animated mesh background */}
            <div className="absolute inset-0 -z-10">
                <div className="mesh-orb absolute left-[10%] top-[20%] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl" />
                <div className="mesh-orb absolute right-[15%] top-[10%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-accent/15 to-transparent blur-3xl" />
                <div className="mesh-orb absolute bottom-[10%] left-[30%] h-[400px] w-[400px] rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl" />
            </div>

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    backgroundImage: `
            linear-gradient(to right, oklch(0.3 0.02 180 / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, oklch(0.3 0.02 180 / 0.1) 1px, transparent 1px)
          `,
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="container mx-auto px-6">
                <div className="mx-auto max-w-5xl text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm"
                    >
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span className="text-primary">AI-Powered Marketing Automation</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
                    >
                        Scale Your Influence with{" "}
                        <span className="text-gradient">AI-Driven Precision</span>
                    </motion.h1>

                    {/* Sub-headline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mx-auto mb-10 max-w-3xl text-lg text-muted-foreground sm:text-xl md:text-2xl"
                    >
                        Strohm Media bridges the gap between emerging AI technologies and
                        business growth. We automate the mundane so you can{" "}
                        <span className="font-semibold text-foreground">
                            dominate the market
                        </span>
                        .
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                    >
                        <MagneticButton>
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    className="shimmer group h-14 bg-gradient-to-r from-primary to-accent px-8 text-lg font-semibold"
                                >
                                    Start Automating
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </MagneticButton>
                        <MagneticButton>
                            <Link href="/demo">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="group h-14 border-border/50 bg-card/30 px-8 text-lg backdrop-blur-sm"
                                >
                                    <Play className="mr-2 h-5 w-5" />
                                    Watch Demo
                                </Button>
                            </Link>
                        </MagneticButton>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4"
                    >
                        {[
                            { value: "10x", label: "Faster Campaigns" },
                            { value: "87%", label: "Time Saved" },
                            { value: "3.5x", label: "ROI Increase" },
                            { value: "24/7", label: "AI Operations" },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-gradient text-3xl font-bold md:text-4xl">
                                    {stat.value}
                                </div>
                                <div className="mt-1 text-sm text-muted-foreground">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>
    );
}
