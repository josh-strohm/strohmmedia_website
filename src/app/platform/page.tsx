"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
    Bot,
    Zap,
    LineChart,
    Target,
    Layers,
    Shield,
    ArrowRight,
    Check,
    Sparkles,
    BarChart3,
    MessageSquare,
    Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/magnetic-button";

const solutions = [
    {
        id: "automation",
        icon: Bot,
        title: "AI Automation",
        description:
            "Deploy intelligent workflows that learn, adapt, and execute marketing tasks autonomously—24/7 without intervention.",
        features: [
            "Smart content generation",
            "Automated campaign management",
            "Predictive lead scoring",
            "Dynamic personalization",
        ],
        color: "from-accent to-cyan-500",
        gradient: "from-accent/20 to-cyan-500/10",
    },
    {
        id: "strategy",
        icon: Target,
        title: "Digital Strategy",
        description:
            "Data-driven strategic planning that aligns AI capabilities with your business objectives for measurable growth.",
        features: [
            "AI readiness assessment",
            "Technology stack optimization",
            "Growth roadmap development",
            "Competitive intelligence",
        ],
        color: "from-accent to-cyan-500",
        gradient: "from-accent/20 to-cyan-500/10",
    },
    {
        id: "performance",
        icon: LineChart,
        title: "Performance Marketing",
        description:
            "AI-optimized advertising that maximizes ROAS through real-time bidding, creative optimization, and audience targeting.",
        features: [
            "Multi-channel optimization",
            "AI creative testing",
            "Attribution modeling",
            "Budget allocation AI",
        ],
        color: "from-accent to-cyan-500",
        gradient: "from-accent/20 to-cyan-500/10",
    },
];

const capabilities = [
    {
        icon: Layers,
        title: "Unified Platform",
        description: "All your marketing operations in one intelligent ecosystem.",
    },
    {
        icon: BarChart3,
        title: "Real-time Analytics",
        description: "Actionable insights that update as your campaigns perform.",
    },
    {
        icon: MessageSquare,
        title: "AI Copywriting",
        description: "Generate high-converting copy tailored to your brand voice.",
    },
    {
        icon: Mail,
        title: "Smart Nurturing",
        description: "Automated email sequences that adapt to user behavior.",
    },
    {
        icon: Shield,
        title: "Enterprise Security",
        description: "SOC 2 compliant with end-to-end encryption.",
    },
    {
        icon: Zap,
        title: "Instant Deployment",
        description: "Go live in days, not months with our rapid onboarding.",
    },
];

export default function PlatformPage() {
    const heroRef = useRef(null);
    const heroInView = useInView(heroRef, { once: true });

    return (
        <>
            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative min-h-[70vh] overflow-hidden pt-32 pb-20"
            >
                {/* Background */}
                <div className="absolute inset-0 -z-10 hero-mesh" />
                <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl" />

                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-4xl text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={heroInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5 }}
                            className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm"
                        >
                            <Sparkles className="h-4 w-4 text-accent" />
                            <span className="text-accent">The Platform</span>
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={heroInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
                        >
                            Your AI-Powered{" "}
                            <span className="text-gradient">Marketing Engine</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={heroInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl"
                        >
                            Three integrated solutions designed to transform how you attract,
                            engage, and convert customers at scale.
                        </motion.p>
                    </div>

                    {/* Screenshot Showcase */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 40 }}
                        animate={heroInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="relative mx-auto max-w-5xl"
                    >
                        {/* Glow effect behind the image */}
                        <div className="absolute -inset-4 z-0 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 opacity-50 blur-3xl" />

                        <div className="glass relative z-10 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                            {/* Browser Header Decor */}
                            <div className="flex items-center gap-2 border-b border-white/5 bg-white/5 px-4 py-3">
                                <div className="flex gap-1.5">
                                    <div className="h-3 w-3 rounded-full bg-red-500/50" />
                                    <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                                    <div className="h-3 w-3 rounded-full bg-green-500/50" />
                                </div>
                                <div className="mx-auto h-5 w-1/3 rounded-lg bg-white/5" />
                            </div>

                            <img
                                src="/platform-screenshot.png"
                                alt="Strohm Media Platform Interface"
                                className="h-auto w-full object-cover"
                            />
                        </div>

                        {/* Floating Micro-elements for depth */}
                        <div className="absolute -left-8 -top-8 -z-10 h-32 w-32 animate-pulse rounded-full bg-primary/20 blur-2xl" />
                        <div className="absolute -bottom-8 -right-8 -z-10 h-32 w-32 animate-pulse rounded-full bg-accent/20 blur-2xl" />
                    </motion.div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="relative py-24">
                <div className="container mx-auto px-6">
                    <div className="space-y-24">
                        {solutions.map((solution, index) => (
                            <SolutionCard
                                key={solution.id}
                                solution={solution}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Capabilities Bento Grid */}
            <section className="relative py-24 md:py-32">
                <div className="absolute inset-0 -z-10 mesh-gradient" />

                <div className="container mx-auto px-6">
                    <div className="mx-auto mb-16 max-w-3xl text-center">
                        <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-primary">
                            Capabilities
                        </span>
                        <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                            Built for{" "}
                            <span className="text-gradient">Modern Marketing</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Every feature designed with one goal: to help you scale faster
                            with less effort.
                        </p>
                    </div>

                    <CapabilitiesGrid capabilities={capabilities} />
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-24">
                <div className="container mx-auto px-6">
                    <div className="glass relative overflow-hidden rounded-3xl p-12 text-center md:p-20">
                        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
                        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

                        <div className="relative">
                            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                                Ready to see it in action?
                            </h2>
                            <p className="mx-auto mb-10 max-w-xl text-muted-foreground">
                                Get a personalized demo of our platform and discover how AI
                                automation can transform your marketing.
                            </p>
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function SolutionCard({
    solution,
    index,
}: {
    solution: (typeof solutions)[0];
    index: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const isEven = index % 2 === 0;

    return (
        <motion.div
            ref={ref}
            id={solution.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className={`flex flex-col items-center gap-12 lg:flex-row ${isEven ? "" : "lg:flex-row-reverse"
                }`}
        >
            {/* Content */}
            <div className="flex-1">
                <div
                    className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${solution.color}`}
                >
                    <solution.icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                    {solution.title}
                </h3>

                <p className="mb-8 text-lg text-muted-foreground">
                    {solution.description}
                </p>

                <ul className="mb-8 space-y-3">
                    {solution.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                            <div
                                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${solution.color}`}
                            >
                                <Check className="h-4 w-4 text-white" />
                            </div>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                <MagneticButton>
                    <Link href="/contact">
                        <Button variant="outline" className="group">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </MagneticButton>
            </div>

            {/* Visual */}
            <div className="flex-1">
                <div
                    className={`relative aspect-square max-w-lg overflow-hidden rounded-3xl bg-gradient-to-br ${solution.gradient} p-8`}
                >
                    {/* Abstract pattern */}
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `
                linear-gradient(to right, oklch(1 0 0 / 0.03) 1px, transparent 1px),
                linear-gradient(to bottom, oklch(1 0 0 / 0.03) 1px, transparent 1px)
              `,
                            backgroundSize: "30px 30px",
                        }}
                    />

                    {/* Large icon */}
                    <div className="relative flex h-full items-center justify-center">
                        <div
                            className={`rounded-3xl bg-gradient-to-br ${solution.color} p-12 shadow-2xl`}
                        >
                            <solution.icon className="h-24 w-24 text-white" />
                        </div>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute left-8 top-8 h-16 w-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm" />
                    <div className="absolute bottom-12 right-8 h-12 w-32 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm" />
                </div>
            </div>
        </motion.div>
    );
}

function CapabilitiesGrid({
    capabilities: capabilitiesList,
}: {
    capabilities: typeof capabilities;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div
            ref={ref}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
            {capabilitiesList.map((capability, index) => (
                <motion.div
                    key={capability.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card"
                >
                    <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />

                    <div className="relative">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/10">
                            <capability.icon className="h-6 w-6 text-accent" />
                        </div>
                        <h4 className="mb-2 font-semibold">{capability.title}</h4>
                        <p className="text-sm text-muted-foreground">
                            {capability.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
