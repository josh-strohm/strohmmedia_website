"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calculator, TrendingUp, Clock, DollarSign } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MagneticButton } from "@/components/magnetic-button";

export function ROICalculator() {
    const [hoursSpent, setHoursSpent] = useState([20]);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Calculations
    const hoursSaved = Math.round(hoursSpent[0] * 0.87); // 87% time reduction
    const weeklySavings = Math.round(hoursSaved * 75); // $75/hour average
    const monthlySavings = weeklySavings * 4;
    const yearlyROI = Math.round((monthlySavings * 12) / 1000);

    return (
        <section ref={ref} id="roi-calculator" className="relative py-24 md:py-32">
            <div className="container mx-auto px-6">
                <div className="mx-auto max-w-4xl">
                    {/* Section Header */}
                    <div className="mb-12 text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5 }}
                            className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-primary"
                        >
                            ROI Calculator
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="mb-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
                        >
                            See Your{" "}
                            <span className="text-gradient">Potential Savings</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg text-muted-foreground"
                        >
                            Calculate how much time and money you could save with AI-powered
                            marketing automation.
                        </motion.p>
                    </div>

                    {/* Calculator Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="glass relative overflow-hidden rounded-3xl p-8 md:p-12"
                    >
                        {/* Background gradient */}
                        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl" />
                        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-gradient-to-tr from-accent/20 to-transparent blur-3xl" />

                        <div className="relative grid gap-12 lg:grid-cols-2">
                            {/* Input Section */}
                            <div>
                                <div className="mb-8 flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                                        <Calculator className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Weekly Marketing Hours</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Hours spent on manual tasks
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <div className="mb-8 flex items-end justify-between">
                                        <span className="text-6xl font-bold text-gradient">
                                            {hoursSpent[0]}
                                        </span>
                                        <span className="text-lg text-muted-foreground">
                                            hours/week
                                        </span>
                                    </div>

                                    <Slider
                                        value={hoursSpent}
                                        onValueChange={setHoursSpent}
                                        min={5}
                                        max={60}
                                        step={1}
                                        className="[&_[role=slider]]:h-6 [&_[role=slider]]:w-6 [&_[role=slider]]:border-2 [&_[role=slider]]:border-primary [&_[role=slider]]:bg-background [&_[role=slider]]:shadow-lg"
                                    />

                                    <div className="mt-2 flex justify-between text-sm text-muted-foreground">
                                        <span>5 hrs</span>
                                        <span>60 hrs</span>
                                    </div>
                                </div>
                            </div>

                            {/* Results Section */}
                            <div className="space-y-4">
                                <h3 className="mb-6 text-lg font-semibold">
                                    Your Potential Results
                                </h3>

                                <div className="grid gap-4">
                                    {/* Hours Saved */}
                                    <div className="flex items-center gap-4 rounded-xl border border-border/50 bg-card/50 p-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20">
                                            <Clock className="h-5 w-5 text-blue-400" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-muted-foreground">
                                                Hours Saved Weekly
                                            </p>
                                            <p className="text-2xl font-bold">{hoursSaved}</p>
                                        </div>
                                    </div>

                                    {/* Weekly Savings */}
                                    <div className="flex items-center gap-4 rounded-xl border border-border/50 bg-card/50 p-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/20">
                                            <DollarSign className="h-5 w-5 text-green-400" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-muted-foreground">
                                                Monthly Savings
                                            </p>
                                            <p className="text-2xl font-bold">
                                                ${monthlySavings.toLocaleString()}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Yearly ROI */}
                                    <div className="flex items-center gap-4 rounded-xl border border-primary/30 bg-primary/10 p-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                                            <TrendingUp className="h-5 w-5 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-muted-foreground">
                                                Yearly ROI Potential
                                            </p>
                                            <p className="text-gradient text-2xl font-bold">
                                                ${yearlyROI}K+
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="pt-4">
                                    <MagneticButton className="w-full">
                                        <Link href="/contact" className="block">
                                            <Button
                                                size="lg"
                                                className="shimmer w-full bg-gradient-to-r from-primary to-accent font-semibold"
                                            >
                                                Get Your Custom ROI Analysis
                                            </Button>
                                        </Link>
                                    </MagneticButton>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
