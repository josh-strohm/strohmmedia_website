"use client";

import { motion } from "framer-motion";

const services = [
    "Unified Inbox",
    "Forms & Funnels",
    "Website",
    "Social Media",
    "Email & SMS Marketing",
    "Review Management",
    "AI Chatbots",
    "Workflow Automations",
];

export function SocialProofTicker() {
    return (
        <section className="relative overflow-hidden border-y border-border/30 bg-card/30 py-8 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <p className="mb-6 text-center text-sm text-muted-foreground">
                    Comprehensive Growth Solutions
                </p>
            </div>

            {/* Ticker */}
            <div className="relative flex overflow-hidden">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
                <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />

                <motion.div
                    className="flex gap-16 pr-16"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30, // Slower duration for readability
                            ease: "linear",
                        },
                    }}
                >
                    {[...services, ...services].map((service, index) => (
                        <div
                            key={`${service}-${index}`}
                            className="flex items-center whitespace-nowrap text-2xl font-bold text-muted-foreground/50 transition-colors hover:text-muted-foreground"
                        >
                            {service}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

