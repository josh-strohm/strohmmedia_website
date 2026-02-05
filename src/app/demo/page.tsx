"use client";

import { motion } from "framer-motion";
import { Sparkles, Play, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DemoPage() {
    return (
        <>
            <section className="relative min-h-screen overflow-hidden pt-32 pb-20">
                <div className="absolute inset-0 -z-10 hero-mesh" />
                <div className="container mx-auto px-6">
                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <Link href="/">
                            <Button variant="outline" className="group">
                                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                                Back to Home
                            </Button>
                        </Link>
                    </motion.div>

                    <div className="mx-auto max-w-6xl text-center mb-12">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm"
                        >
                            <Play className="h-4 w-4 text-primary" />
                            <span className="text-primary">Platform Demonstration</span>
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="mb-6 text-4xl font-bold md:text-5xl"
                        >
                            See <span className="text-gradient">Strohm Media</span> in Action
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-muted-foreground"
                        >
                            Watch how our AI-powered platform transforms your marketing automation workflow.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mx-auto max-w-6xl"
                    >
                        <div className="glass rounded-3xl p-4 md:p-8">
                            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
                                <video
                                    controls
                                    className="h-full w-full"
                                    preload="metadata"
                                    poster="/video-poster.jpg"
                                >
                                    <source src="/Strohm Media Platform Demo.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>

                        {/* CTA Section Below Video */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mt-12 text-center"
                        >
                            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                                Ready to Transform Your Business?
                            </h2>
                            <p className="mb-8 text-lg text-muted-foreground">
                                Schedule a consultation to see how we can customize this platform for your needs.
                            </p>
                            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <Link href="/calendar">
                                    <Button
                                        size="lg"
                                        className="shimmer bg-gradient-to-r from-primary to-accent px-8 text-lg font-semibold"
                                    >
                                        Book a Call
                                    </Button>
                                </Link>
                                <Link href="/contact">
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="border-border/50 bg-card/30 px-8 text-lg backdrop-blur-sm"
                                    >
                                        Get Started
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
