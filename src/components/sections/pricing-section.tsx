"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Sparkles, Zap, Bot, Shield, Cpu, MessageSquare, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MagneticButton } from "@/components/magnetic-button";

const infrastructurePricing = [
    {
        name: "Starter",
        price: "$97",
        description: "Perfect for solo entrepreneurs getting started with automation.",
        features: [
            "CRM & Pipeline Management",
            "Unlimited Contacts",
            "Funnels & Landing Pages",
            "Email Marketing",
            "Mobile App Access"
        ],
        highlight: false,
        color: "accent",
        icon: Shield
    },
    {
        name: "Professional",
        price: "$297",
        description: "The complete toolkit for scaling businesses.",
        features: [
            "Everything in Starter",
            "Workflows & Automation",
            "Reputation Management",
            "Appointment Scheduling",
            "Advanced Analytics",
            "Social Media Planner"
        ],
        highlight: true,
        color: "primary",
        icon: Zap
    },
    {
        name: "Elite",
        price: "$497",
        description: "Full-scale solution for high-volume operations.",
        features: [
            "Everything in Professional",
            "Multi-Location Management",
            "Priority Support",
            "White-labeled Client Portal",
            "API Access",
            "Custom Integration Setup"
        ],
        highlight: false,
        color: "accent",
        icon: Shield
    }
];

const intelligencePricing = [
    {
        name: "AI Chatbots",
        description: "Intelligent, custom-trained agents for 24/7 engagement and lead qualification.",
        features: [
            "Proprietary Knowledge Base Training",
            "Multi-channel Deployment (Web, SMS, Social)",
            "Automated Lead Qualification",
            "Seamless Human Handoff",
            "Advanced Sentiment Analysis"
        ],
        highlight: false,
        icon: MessageSquare,
        isCustom: true
    },
    {
        name: "AI Workflows",
        description: "Autonomous backend operations that eliminate manual bottlenecks and scale productivity.",
        features: [
            "Cross-Platform App Integration",
            "Autonomous Lead Routing",
            "Automated Data Transformation",
            "Complex Conditional Logic",
            "24/7 Process Monitoring"
        ],
        highlight: true,
        icon: Zap,
        isCustom: true
    },
    {
        name: "Custom Intelligence",
        description: "End-to-end autonomous business infrastructure tailored to your unique scaling needs.",
        features: [
            "Full-Scale Automation Auditing",
            "Custom LLM Fine-tuning",
            "Omni-channel Business Logic",
            "Dedicated Automation Architect",
            "Priority SLA & Support"
        ],
        highlight: false,
        icon: Sparkles,
        isCustom: true
    }
];

const PricingCard = ({ item, index, category }: { item: any, index: number, category: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex"
        >
            <Card className={`relative flex w-full flex-col overflow-hidden border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 ${item.highlight ? "glow-border ring-1 ring-primary/50" : ""}`}>
                {item.highlight && (
                    <div className="absolute top-0 right-0 p-4">
                        <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold">
                            Most Popular
                        </Badge>
                    </div>
                )}
                <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                        {item.icon && <item.icon className={`h-5 w-5 ${item.highlight ? "text-primary" : "text-muted-foreground"}`} />}
                        <CardTitle className="text-xl font-bold">{item.name}</CardTitle>
                    </div>
                    {item.isCustom ? (
                        <div className="mb-2">
                            <span className="text-2xl font-bold tracking-tight text-gradient">Contact for Pricing</span>
                        </div>
                    ) : (
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-bold tracking-tight text-gradient">{item.price}</span>
                            <span className="text-sm font-medium text-muted-foreground">/mo</span>
                        </div>
                    )}
                    <CardDescription className="mt-2 line-clamp-2">{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                    <ul className="space-y-3">
                        {item.features.map((feature: string) => (
                            <li key={feature} className="flex items-start gap-2 text-sm text-foreground/80">
                                <Check className="h-4 w-4 shrink-0 text-accent mt-0.5" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
                <CardFooter>
                    <MagneticButton className="w-full">
                        {item.isCustom ? (
                            <Button asChild className={`w-full font-semibold ${item.highlight ? "bg-gradient-to-r from-primary to-accent" : ""}`} variant={item.highlight ? "default" : "outline"}>
                                <Link href="/contact">Inquire Now</Link>
                            </Button>
                        ) : (
                            <Button className={`w-full font-semibold ${item.highlight ? "bg-gradient-to-r from-primary to-accent" : ""}`} variant={item.highlight ? "default" : "outline"}>
                                Get Started
                            </Button>
                        )}
                    </MagneticButton>
                </CardFooter>
            </Card>
        </motion.div>
    );
};

export function PricingSection() {
    return (
        <section className="relative overflow-hidden pt-20 pb-32">
            {/* Background elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl" />
            </div>

            <div className="container mx-auto px-6">
                <div className="mx-auto max-w-3xl text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gradient mb-4 text-4xl font-bold tracking-tight sm:text-5xl"
                    >
                        Invest in Exponential Growth
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground"
                    >
                        Choose the right level of intelligence for your business. From core infrastructure to fully autonomous operations.
                    </motion.p>
                </div>

                {/* Section 1: Growth Infrastructure */}
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20">
                            <Shield className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">Growth Infrastructure</h3>
                            <p className="text-muted-foreground">The unified ecosystem for your business growth.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {infrastructurePricing.map((item, index) => (
                            <PricingCard key={item.name} item={item} index={index} category="infrastructure" />
                        ))}
                    </div>
                </div>

                {/* Section 2: AI Intelligence Layer */}
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                            <Bot className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">AI Intelligence Layer</h3>
                            <p className="text-muted-foreground">Advanced automation and custom-trained AI workforce.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {intelligencePricing.map((item, index) => (
                            <PricingCard key={item.name} item={item} index={index} category="intelligence" />
                        ))}
                    </div>
                </div>

                {/* Strategic Roadmap Section */}
                <div className="mt-32">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold mb-4">The Scaling Roadmap</h3>
                        <p className="text-muted-foreground mx-auto max-w-2xl">
                            Our systematic approach to transitioning your business from manual operations to an autonomous growth engine.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {[
                            {
                                step: "01",
                                title: "Intelligence Audit",
                                description: "We map your current workflows to identify high-impact automation opportunities and manual bottlenecks.",
                                icon: Cpu
                            },
                            {
                                step: "02",
                                title: "Ecosystem Deployment",
                                description: "We build your unified command center and train custom AI agents specifically for your business logic.",
                                icon: Workflow
                            },
                            {
                                step: "03",
                                title: "Autonomous Scale",
                                description: "Continuous optimization and fine-tuning ensures your systems evolve as your business dominates the market.",
                                icon: Sparkles
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
                            >
                                <div className="absolute -top-4 -left-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/25">
                                    {item.step}
                                </div>
                                <item.icon className="h-8 w-8 text-primary mb-6" />
                                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-strong rounded-3xl p-12 text-center border border-primary/20"
                    >
                        <h3 className="text-3xl font-bold mb-4">Ready to Reclaim Your Time?</h3>
                        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                            Move beyond the mundane. Join the elite businesses operating with AI-driven precision and focus strictly on revenue.
                        </p>
                        <MagneticButton>
                            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent shimmer px-12 font-bold text-lg h-14">
                                <Link href="/contact">Initialize Your Strategy Session</Link>
                            </Button>
                        </MagneticButton>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
