"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ThankYouPage() {
    return (
        <section className="relative min-h-screen overflow-hidden flex items-center justify-center pt-20 pb-20">
            <div className="absolute inset-0 -z-10 hero-mesh" />
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/25">
                        <Check className="h-12 w-12 text-white" />
                    </div>

                    <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                        Submission <span className="text-gradient">Received</span>
                    </h1>

                    <p className="mb-8 text-lg text-muted-foreground">
                        Thank you for contacting us. We have received your message and a member of our team will be in touch with you shortly.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mb-12 relative aspect-video w-full max-w-2xl mx-auto overflow-hidden rounded-2xl glass border border-primary/20 shadow-2xl shadow-primary/10"
                    >
                        <video
                            className="w-full h-full object-cover"
                            controls
                            autoPlay
                            playsInline
                        >
                            <source src="/Thank_You_from_Strohm_Media.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </motion.div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent shimmer w-full sm:w-auto">
                            <Link href="/">
                                Back to Home <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
