"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Users, Target, Zap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/magnetic-button";

const values = [
    { icon: Zap, title: "Innovation First", description: "We embrace emerging technologies to solve marketing challenges in ways that weren't possible before." },
    { icon: Users, title: "Human + AI", description: "Technology amplifies human creativity—we believe in partnership, not replacement." },
    { icon: Target, title: "Results Driven", description: "Every strategy, every automation, every insight is focused on measurable business outcomes." },
    { icon: Heart, title: "Client Success", description: "Your growth is our growth. We're invested in building lasting partnerships, not transactions." },
];

const stats = [
    { value: "2019", label: "Founded" },
    { value: "50+", label: "Clients Served" },
    { value: "3.5x", label: "Avg. ROI Increase" },
    { value: "10M+", label: "Campaigns Automated" },
];

export default function AboutPage() {
    const heroRef = useRef(null);
    const heroInView = useInView(heroRef, { once: true });
    const storyRef = useRef(null);
    const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
    const valuesRef = useRef(null);
    const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

    return (
        <>
            <section ref={heroRef} className="relative min-h-[60vh] overflow-hidden pt-32 pb-20">
                <div className="absolute inset-0 -z-10 hero-mesh" />
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-4xl text-center">
                        <motion.span initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm">
                            <Sparkles className="h-4 w-4 text-primary" />
                            <span className="text-primary">About Us</span>
                        </motion.span>
                        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                            Intelligent AI Meets <span className="text-gradient">Integrated Marketing</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 30 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
                            We don&apos;t just provide tools; we deploy comprehensive marketing ecosystems that leverage artificial intelligence to manage your entire business growth.
                        </motion.p>
                    </div>
                </div>
            </section>

            <section className="relative border-y border-border/30 bg-card/30 py-12 backdrop-blur-sm">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        {stats.map((stat, index) => (
                            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }} className="text-center">
                                <div className="text-gradient text-3xl font-bold md:text-4xl">{stat.value}</div>
                                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section ref={storyRef} className="relative py-24 md:py-32">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={storyInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="mx-auto max-w-3xl">
                        <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-primary">Our Story</span>
                        <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Beyond One-Off <span className="text-gradient">Solutions</span></h2>
                        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                            <p>Strohm Media was founded with a singular realization: most businesses don&apos;t need more disconnected tools; they need a unified engine that runs autonomously.</p>
                            <p>We saw companies struggling with fragmented data and manual handoffs between CRM, marketing, and sales. We decided to bridge that gap by combining our proprietary AI workforce with a powerful, all-in-one marketing command center.</p>
                            <p>Today, we offer more than just automation. We provide a complete ecosystem where your funnels, communication, reputation, and lead nurturing are all handled in a single intelligent environment, supercharged by AI that learns and adapts to your specific market.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section ref={valuesRef} className="relative py-24 md:py-32">
                <div className="absolute inset-0 -z-10 mesh-gradient" />
                <div className="container mx-auto px-6">
                    <div className="mx-auto mb-16 max-w-3xl text-center">
                        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={valuesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-3xl font-bold tracking-tight md:text-4xl">
                            The Foundations of <span className="text-gradient">Our Approach</span>
                        </motion.h2>
                        <p className="mt-4 text-muted-foreground">Our methodology is built on bringing order to the chaos of modern digital growth.</p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {values.map((value, index) => (
                            <motion.div key={value.title} initial={{ opacity: 0, y: 30 }} animate={valuesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} className="group rounded-2xl border border-border/50 bg-card/50 p-6 transition-all hover:border-primary/50">
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                                    <value.icon className="h-6 w-6 text-white" />
                                </div>
                                <h4 className="mb-2 font-semibold">{value.title}</h4>
                                <p className="text-sm text-muted-foreground">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative py-24">
                <div className="container mx-auto px-6">
                    <div className="glass rounded-3xl p-12 text-center md:p-20">
                        <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Unify Your Growth?</h2>
                        <p className="mx-auto mb-10 max-w-xl text-muted-foreground">Let&apos;s discuss how our integrated platform and AI workforce can transform your business operations.</p>
                        <MagneticButton>
                            <Link href="/contact">
                                <Button size="lg" className="shimmer group h-14 bg-gradient-to-r from-primary to-accent px-8 text-lg font-semibold">
                                    Start Your Transformation
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </MagneticButton>
                    </div>
                </div>
            </section>
        </>
    );
}
