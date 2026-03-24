"use client";

import { motion } from "framer-motion";
import { Sparkles, Calendar } from "lucide-react";

export default function BookingPage() {
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
                            Select a time that works best for you and let&apos;s discuss how we can transform your business.
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

                            {/* Google Calendar Appointment Scheduling */}
                            <iframe
                                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ25F2oblKxh3C1mJNDUoiugL0QZQITgGdVZawhkNuqHdrIYiD0a0euuHv_cS0izBqcQXQlpFgqS?gv=true"
                                style={{ border: 0, width: "100%", minHeight: "600px" }}
                                width="100%"
                                height="600"
                                frameBorder={0}
                                title="Book an Appointment"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
