"use client";

import { motion } from "framer-motion";
import { Sparkles, Brain } from "lucide-react";
import Script from "next/script";

export default function AIAssessmentPage() {
    return (
        <>
            <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
            
            <section className="relative min-h-screen overflow-hidden pt-32 pb-20">
                <div className="absolute inset-0 -z-10 hero-mesh" />
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-2xl text-center mb-12">
                        <motion.span 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm"
                        >
                            <Sparkles className="h-4 w-4 text-primary" />
                            <span className="text-primary">Free AI Readiness Check</span>
                        </motion.span>
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ delay: 0.1 }} 
                            className="mb-6 text-4xl font-bold md:text-5xl"
                        >
                            AI Efficiency <span className="text-gradient">Assessment</span>
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 30 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ delay: 0.2 }} 
                            className="text-lg text-muted-foreground"
                        >
                            Evaluate your current capabilities and discover opportunities for AI-driven improvements in your workflows.
                        </motion.p>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 40 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ delay: 0.3 }} 
                        className="mx-auto max-w-4xl"
                    >
                        <div className="glass rounded-3xl p-4 md:p-8 min-h-[600px] relative overflow-hidden">
                            <div className="flex items-center justify-center gap-3 mb-8">
                                <Brain className="h-6 w-6 text-primary" />
                                <h2 className="text-2xl font-semibold">Start Your Assessment</h2>
                            </div>

                            {/* Tally Form Embed */}
                            <iframe
                                data-tally-src="https://tally.so/r/Med68Y?transparentBackground=1"
                                width="100%"
                                height="800"
                                frameBorder="0"
                                marginHeight={0}
                                marginWidth={0}
                                title="AI Efficiency Assessment"
                                className="bg-transparent border-0"
                            />
                            
                            {/* Watermark Mask for Tally */}
                            <div className="absolute bottom-0 right-0 z-[100] flex h-16 w-[180px] items-center justify-center bg-black/80 backdrop-blur-sm pointer-events-none rounded-tl-xl border-l border-t border-border/50">
                                <div className="text-[10px] font-semibold uppercase tracking-[2px] text-primary/60">
                                    AI Efficiency
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
