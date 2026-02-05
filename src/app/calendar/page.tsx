"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Calendar } from "lucide-react";

export default function BookingPage() {
    useEffect(() => {
        // Load the form embed script
        const script = document.createElement("script");
        script.src = "https://links.strohmmedia.com/js/form_embed.js";
        script.type = "text/javascript";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup script on unmount
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
                    <div className="mx-auto max-w-4xl text-center mb-12">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm"
                        >
                            <Sparkles className="h-4 w-4 text-primary" />
                            <span className="text-primary">Schedule Your Session</span>
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="mb-6 text-4xl font-bold md:text-5xl"
                        >
                            Book Your <span className="text-gradient">Consultation</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-muted-foreground"
                        >
                            Select a time that works best for you and let's discuss how we can transform your business.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mx-auto max-w-4xl"
                    >
                        <div className="glass rounded-3xl p-8 md:p-12">
                            <div className="flex items-center justify-center gap-3 mb-8">
                                <Calendar className="h-6 w-6 text-primary" />
                                <h2 className="text-2xl font-semibold">Choose Your Time Slot</h2>
                            </div>

                            {/* Embedded Calendar Scheduler */}
                            <div className="calendar-embed-container">
                                <iframe
                                    src="https://links.strohmmedia.com/widget/booking/alSsKBFLEHV6NVAtfDew"
                                    style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }}
                                    scrolling="no"
                                    id="alSsKBFLEHV6NVAtfDew_1770266136523"
                                    title="Booking Calendar"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
