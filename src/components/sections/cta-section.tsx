"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/magnetic-button";

export function CTASection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="relative py-24 md:py-32">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-background p-12 md:p-20"
                >
                    {/* Background elements */}
                    <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
                    <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

                    {/* Grid pattern */}
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `
                linear-gradient(to right, oklch(0.3 0.02 260 / 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, oklch(0.3 0.02 260 / 0.05) 1px, transparent 1px)
              `,
                            backgroundSize: "40px 40px",
                        }}
                    />

                    <div className="relative mx-auto max-w-3xl text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5 }}
                            className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent"
                        >
                            <Sparkles className="h-8 w-8 text-white" />
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="mb-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
                        >
                            Ready to Transform Your{" "}
                            <span className="text-gradient">Marketing?</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-10 text-lg text-muted-foreground md:text-xl"
                        >
                            Join the future of AI-driven marketing automation. Let&apos;s build your
                            growth engine together.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                        >
                            <MagneticButton>
                                <Link href="/contact">
                                    <Button
                                        size="lg"
                                        className="shimmer group h-14 bg-gradient-to-r from-primary to-accent px-8 text-lg font-semibold"
                                    >
                                        Schedule a Demo
                                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </Link>
                            </MagneticButton>
                            <MagneticButton>
                                <Link href="/platform">
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="h-14 border-border/50 bg-card/30 px-8 text-lg backdrop-blur-sm"
                                    >
                                        Explore Platform
                                    </Button>
                                </Link>
                            </MagneticButton>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
