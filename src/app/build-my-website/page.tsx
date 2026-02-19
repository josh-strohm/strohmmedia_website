"use client";

import { Sparkles, ArrowRight, Globe, Zap, Shield, Target, Smartphone, Layers } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/magnetic-button";
import Link from "next/link";
import Image from "next/image";

const benefits = [
    {
        icon: Globe,
        title: "Search-Engine Ready",
        description: "We build with a focus on SEO fundamentals, helping your business get discovered by the right audience naturally.",
        color: "from-orange-500 to-red-500",
    },
    {
        icon: Zap,
        title: "Optimized for Speed",
        description: "Fast load times aren't just for show—they're essential for keeping potential clients engaged with your brand.",
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: Shield,
        title: "Unique to Your Brand",
        description: "We avoid templates to ensure your digital presence is as professional and distinct as the services you provide.",
        color: "from-violet-500 to-purple-500",
    },
    {
        icon: Target,
        title: "Built to Convert",
        description: "Every design choice is intentional, focused on guiding your visitors toward meaningful interactions with your business.",
        color: "from-emerald-500 to-teal-500",
    },
    {
        icon: Smartphone,
        title: "Flexible on All Devices",
        description: "Whether on a desktop or a phone, we ensure your clients have a seamless and premium experience with your brand.",
        color: "from-pink-500 to-rose-500",
    },
    {
        icon: Layers,
        title: "Connected Ecosystem",
        description: "We help link your website directly to your existing CRM or automation tools to streamline your growth.",
        color: "from-amber-500 to-orange-500",
    },
];

export default function BuildMyWebsitePage() {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const benefitsRef = useRef<HTMLElement>(null);
    const formRef = useRef<HTMLElement>(null);
    const isBenefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (iframeRef.current) {
            iframeRef.current.setAttribute("data-layout", '{"id":"INLINE"}');
        }
    }, []);

    return (
        <main className="relative min-h-screen">
            {/* Minimal Landing Page Header */}
            <header className="absolute top-0 left-0 right-0 z-50 py-6">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="relative h-[120px] w-[480px] overflow-hidden">
                                <Image
                                    src="/Strohm_Media_Logo-no-bg.jpeg"
                                    alt="Strohm Media"
                                    width={480}
                                    height={120}
                                    className="h-full w-full object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Hero Section */}
            <section className="relative min-h-[90vh] overflow-hidden pt-32 pb-20">
                <div className="absolute inset-0 -z-10 hero-mesh" />

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

                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm"
                    >
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span className="text-primary font-medium">Bespoke Web Development Partner</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mx-auto mb-6 max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
                    >
                        Custom Websites <br />
                        <span className="text-gradient">Built for Growth</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl"
                    >
                        We partner with ambitious brands to design and build custom web experiences that turn your visitors into customers through intentional, high-converting design.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                    >
                        <MagneticButton>
                            <Button
                                size="lg"
                                className="shimmer group h-14 bg-gradient-to-r from-primary to-accent px-8 text-lg font-semibold"
                                onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Start Your Project
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </MagneticButton>
                    </motion.div>

                    {/* Hero Screenshot */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mt-16 relative mx-auto max-w-5xl"
                    >
                        <div className="glass rounded-2xl p-2 md:p-4 glow">
                            <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-2xl">
                                <Image
                                    src="/landing-page-hero.png"
                                    alt="Custom Website Platform Preview"
                                    width={1200}
                                    height={675}
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
                            </div>
                        </div>

                        {/* Decorative glow behind the image */}
                        <div className="absolute -inset-4 -z-10 bg-primary/20 blur-3xl opacity-20" />
                    </motion.div>
                </div>
            </section>

            {/* Benefits Bento Grid */}
            <section ref={benefitsRef} className="relative py-24 md:py-32">
                <div className="container mx-auto px-6">
                    <div className="mx-auto mb-20 max-w-3xl text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
                            className="mb-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
                        >
                            The Advantage of <span className="text-gradient">Custom Build</span>
                        </motion.h2>
                        <p className="text-lg text-muted-foreground">
                            A custom-built website isn&apos;t just about aesthetics—it&apos;s about creating a tool that works as hard as you do.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.1 }}
                                className="glass group overflow-hidden rounded-3xl p-8 transition-all hover:border-primary/50"
                            >
                                <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${benefit.color} glow`}>
                                    <benefit.icon className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="mb-3 text-xl font-bold">{benefit.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section ref={formRef} className="relative py-24 md:py-32 bg-card/30">
                <div className="absolute inset-0 -z-10 mesh-gradient opacity-30" />
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-4xl">
                        <div className="grid gap-12 lg:grid-cols-2 items-center">
                            <div>
                                <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
                                    Let&apos;s Build Your <br />
                                    <span className="text-gradient">Digital Foundation</span>
                                </h2>
                                <p className="mb-8 text-lg text-muted-foreground">
                                    Ready to grow your business together? Tell us a bit about your project, and we&apos;ll schedule a call to see how we can help.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        "Custom design that fits your unique brand",
                                        "Connects easily with your other marketing tools",
                                        "Hands-on support and regular site updates",
                                        "Built to handle as many customers as you need"
                                    ].map((item) => (
                                        <div key={item} className="flex items-center gap-3">
                                            <div className="h-2 w-2 rounded-full bg-primary" />
                                            <span className="font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="glass rounded-3xl p-1"
                            >
                                <div className="rounded-2xl bg-white overflow-hidden shadow-2xl" style={{ minHeight: "800px" }}>
                                    <iframe
                                        ref={iframeRef}
                                        src="https://links.strohmmedia.com/widget/form/lPCQzoNkG20Wyj6BvVPA"
                                        style={{ width: "100%", height: "100%", border: "none", minHeight: "800px" }}
                                        id="inline-lPCQzoNkG20Wyj6BvVPA"
                                        data-trigger-type="alwaysShow"
                                        data-trigger-value=""
                                        data-activation-type="alwaysActivated"
                                        data-activation-value=""
                                        data-deactivation-type="neverDeactivate"
                                        data-deactivation-value=""
                                        data-form-name="Build My Website Form"
                                        data-height="738"
                                        data-layout-iframe-id="inline-lPCQzoNkG20Wyj6BvVPA"
                                        data-form-id="lPCQzoNkG20Wyj6BvVPA"
                                        title="Build My Website Form"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <script src="https://links.strohmmedia.com/js/form_embed.js" defer />
        </main>
    );
}
