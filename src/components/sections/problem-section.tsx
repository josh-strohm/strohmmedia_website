"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
    Clock,
    TrendingDown,
    Users,
    AlertTriangle,
    ArrowRight,
} from "lucide-react";

const problems = [
    {
        icon: Clock,
        title: "Wasted Hours",
        description:
            "Marketing teams spend 40+ hours weekly on repetitive tasks that could be automated.",
        stat: "40hrs/week",
    },
    {
        icon: TrendingDown,
        title: "Inconsistent Results",
        description:
            "Manual processes lead to errors, missed opportunities, and unpredictable outcomes.",
        stat: "60% variance",
    },
    {
        icon: Users,
        title: "Scaling Bottlenecks",
        description:
            "Growing businesses can't scale marketing without proportionally scaling headcount.",
        stat: "3:1 ratio",
    },
    {
        icon: AlertTriangle,
        title: "Data Silos",
        description:
            "Disconnected tools mean insights are lost and decisions are made in the dark.",
        stat: "7+ tools",
    },
];

export function ProblemSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="relative py-24 md:py-32">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-primary"
                    >
                        The Problem
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
                    >
                        Marketing is{" "}
                        <span className="text-gradient-accent">Broken</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-muted-foreground"
                    >
                        Traditional marketing operations are drowning in manual work,
                        disconnected tools, and inconsistent execution. Sound familiar?
                    </motion.p>
                </div>

                {/* Problem Cards - Bento Grid */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={problem.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-destructive/50 hover:bg-card"
                        >
                            {/* Glow effect on hover */}
                            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-destructive/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />

                            <div className="relative">
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-destructive/30 bg-destructive/10">
                                    <problem.icon className="h-6 w-6 text-destructive" />
                                </div>
                                <div className="mb-2 font-mono text-sm text-destructive">
                                    {problem.stat}
                                </div>
                                <h3 className="mb-2 text-lg font-semibold">{problem.title}</h3>
                                <p className="text-sm text-muted-foreground">
                                    {problem.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Transition to solution */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="inline-flex items-center gap-2 text-lg text-muted-foreground">
                        There&apos;s a better way
                        <ArrowRight className="h-5 w-5 animate-pulse text-primary" />
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
