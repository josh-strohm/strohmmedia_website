"use client";

import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function ContactPage() {
    useEffect(() => {
        // Load the Less Annoying CRM embed script
        const script = document.createElement("script");
        script.src = "https://embed.lessannoyingcrm.com/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <>
            <section className="relative min-h-screen overflow-hidden pt-32 pb-20">
                <div className="absolute inset-0 -z-10 hero-mesh" />
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-2xl text-center mb-12">
                        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm">
                            <Sparkles className="h-4 w-4 text-primary" />
                            <span className="text-primary">Free Consultation</span>
                        </motion.span>
                        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-6 text-4xl font-bold md:text-5xl">
                            Let&apos;s <span className="text-gradient">Work Together</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground">
                            Tell us about your business and we&apos;ll show you exactly how our AI-powered solutions can help you grow.
                        </motion.p>
                    </div>

                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mx-auto max-w-xl">
                        <div className="glass rounded-3xl p-8 md:p-12">
                            <p className="text-center text-muted-foreground mb-6 text-sm">
                                Fill out the form below and a member of our team will be in touch within one business day.
                            </p>
                            {/* Less Annoying CRM Form Embed */}
                            <blockquote
                                className="lacrm-embed"
                                data-embed-height="650"
                                data-embed-show-header="false"
                            >
                                <a href="https://forms.lessannoyingcrm.com/view/4091407883495370210234441381371">
                                    Get Your Free Consultation
                                </a>
                            </blockquote>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
