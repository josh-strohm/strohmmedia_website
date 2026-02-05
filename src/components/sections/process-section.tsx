"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Scan, Cog, Zap, TrendingUp } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: Scan,
        title: "Analyze",
        description:
            "Our AI audits your current marketing stack, identifies bottlenecks, and maps out optimization opportunities.",
        color: "from-blue-500 to-cyan-500",
    },
    {
        number: "02",
        icon: Cog,
        title: "Automate",
        description:
            "We deploy custom automation workflows that eliminate repetitive tasks and connect your tools seamlessly.",
        color: "from-violet-500 to-purple-500",
    },
    {
        number: "03",
        icon: Zap,
        title: "Accelerate",
        description:
            "Launch AI-powered campaigns that adapt in real-time, optimizing performance 24/7 without manual intervention.",
        color: "from-orange-500 to-red-500",
    },
    {
        number: "04",
        icon: TrendingUp,
        title: "Amplify",
        description:
            "Scale your results with actionable insights and continuous improvement driven by machine learning.",
        color: "from-green-500 to-emerald-500",
    },
];

export function ProcessSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="relative py-24 md:py-32">
            {/* Background accent */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/5 to-accent/5 blur-3xl" />

            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="mx-auto mb-20 max-w-3xl text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-primary"
                    >
                        Our Process
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
                    >
                        From Chaos to{" "}
                        <span className="text-gradient">Clarity</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-muted-foreground"
                    >
                        A proven framework that transforms your marketing operations into a
                        lean, AI-powered growth engine.
                    </motion.p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Connector line */}
                    <div className="absolute left-[50%] top-0 hidden h-full w-px bg-gradient-to-b from-primary/50 via-accent/50 to-transparent lg:block" />

                    <div className="space-y-12 lg:space-y-0">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                className={`relative lg:flex lg:items-center lg:gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                    }`}
                            >
                                {/* Card */}
                                <div
                                    className={`lg:w-[calc(50%-2rem)] ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                                        }`}
                                >
                                    <div className="glass group relative overflow-hidden rounded-2xl p-6 transition-all hover:border-primary/50">
                                        {/* Gradient glow */}
                                        <div
                                            className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${step.color} opacity-10 blur-3xl transition-opacity group-hover:opacity-20`}
                                        />

                                        <div className="relative">
                                            <div
                                                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${step.color}`}
                                            >
                                                <step.icon className="h-6 w-6 text-white" />
                                            </div>
                                            <div className="mb-2 font-mono text-sm text-primary">
                                                Step {step.number}
                                            </div>
                                            <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                                            <p className="text-muted-foreground">{step.description}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Center dot */}
                                <div className="hidden h-4 w-4 shrink-0 rounded-full bg-gradient-to-br from-primary to-accent lg:block">
                                    <div className="absolute h-4 w-4 animate-ping rounded-full bg-primary/50" />
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
