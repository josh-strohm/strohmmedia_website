"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, ArrowLeft, Check, Mail, Send, Building, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

const steps = [
    { id: 1, title: "Contact Info", icon: User },
    { id: 2, title: "Business Info", icon: Building },
    { id: 3, title: "Project Details", icon: MessageSquare },
];

export default function ContactPage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        businessName: "",
        businessWebsite: "",
        message: "",
        consent: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    // const [isSubmitted, setIsSubmitted] = useState(false); // Removed as we redirect now
    const [error, setError] = useState<string | null>(null);

    const updateFormData = (field: string, value: any) => setFormData((prev) => ({ ...prev, [field]: value }));
    const nextStep = () => {
        // Simple validation before moving next
        if (currentStep === 1 && (!formData.fullName || !formData.email)) {
            setError("Name and Email are required");
            return;
        }
        if (currentStep === 2 && !formData.businessName) {
            setError("Business Name is required");
            return;
        }
        setError(null);
        currentStep < 3 && setCurrentStep(currentStep + 1);
    }
    const prevStep = () => currentStep > 1 && setCurrentStep(currentStep - 1);

    const handleSubmit = async () => {
        if (!formData.consent) {
            setError("Please accept the terms to proceed");
            return;
        }

        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch("https://n8n.srv945929.hstgr.cloud/webhook/ce03dfb3-d36a-4557-8967-c5d85780decf", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to submit form. Please try again.");
            }

            // Redirect to thank you page
            router.push("/submission-success-verified-transmission-9x2k");
        } catch (err) {
            console.error("Submission error:", err);
            setError(err instanceof Error ? err.message : "Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <section className="relative min-h-screen overflow-hidden pt-32 pb-20">
                <div className="absolute inset-0 -z-10 hero-mesh" />
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-2xl text-center mb-12">
                        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm">
                            <Sparkles className="h-4 w-4 text-primary" />
                            <span className="text-primary">Strohm Interface</span>
                        </motion.span>
                        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-6 text-4xl font-bold md:text-5xl">
                            Initialize <span className="text-gradient">Growth Sequence</span>
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground">
                            Configure your parameters and deploy our AI intelligence layer to your business.
                        </motion.p>
                    </div>

                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mx-auto max-w-xl">
                        <div className="glass rounded-3xl p-8 md:p-12">
                            <>
                                {/* Progress */}
                                <div className="mb-8 flex items-center justify-between">
                                    {steps.map((step, index) => (
                                        <div key={step.id} className="flex items-center">
                                            <div className={`flex h-10 w-10 items-center justify-center rounded-full transition-all ${currentStep >= step.id ? "bg-gradient-to-r from-primary to-accent text-white" : "border border-border bg-card"}`}>
                                                {currentStep > step.id ? <Check className="h-5 w-5" /> : <step.icon className="h-5 w-5" />}
                                            </div>
                                            {index < steps.length - 1 && <div className={`mx-2 h-0.5 w-12 transition-all md:w-20 ${currentStep > step.id ? "bg-gradient-to-r from-primary to-accent" : "bg-border"}`} />}
                                        </div>
                                    ))}
                                </div>

                                <AnimatePresence mode="wait">
                                    {currentStep === 1 && (
                                        <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                                            <h2 className="text-xl font-semibold">Contact Parameters</h2>
                                            <div className="space-y-2">
                                                <Label htmlFor="fullName">Full Name *</Label>
                                                <Input id="fullName" value={formData.fullName} onChange={(e) => updateFormData("fullName", e.target.value)} placeholder="John Smith" className="bg-background/50" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email *</Label>
                                                <Input id="email" type="email" value={formData.email} onChange={(e) => updateFormData("email", e.target.value)} placeholder="jsmith@company.com" className="bg-background/50" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="phone">Phone Number</Label>
                                                <Input id="phone" type="tel" value={formData.phone} onChange={(e) => updateFormData("phone", e.target.value)} placeholder="8146606879" className="bg-background/50" />
                                            </div>
                                        </motion.div>
                                    )}

                                    {currentStep === 2 && (
                                        <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                                            <h2 className="text-xl font-semibold">Business Intelligence</h2>
                                            <div className="space-y-2">
                                                <Label htmlFor="businessName">Business Name *</Label>
                                                <Input id="businessName" value={formData.businessName} onChange={(e) => updateFormData("businessName", e.target.value)} placeholder="Strohm Media" className="bg-background/50" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="businessWebsite">Business Website</Label>
                                                <Input id="businessWebsite" value={formData.businessWebsite} onChange={(e) => updateFormData("businessWebsite", e.target.value)} placeholder="strohmmedia.ai" className="bg-background/50" />
                                            </div>
                                        </motion.div>
                                    )}

                                    {currentStep === 3 && (
                                        <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                                            <h2 className="text-xl font-semibold">Growth Objectives</h2>
                                            <div className="space-y-2">
                                                <Label htmlFor="message">How can we help? *</Label>
                                                <textarea
                                                    id="message"
                                                    value={formData.message}
                                                    onChange={(e) => updateFormData("message", e.target.value)}
                                                    placeholder="Tell us about your objectives..."
                                                    rows={4}
                                                    className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none"
                                                />
                                            </div>
                                            <div className="pt-4">
                                                <button
                                                    onClick={() => updateFormData("consent", !formData.consent)}
                                                    className="flex w-full items-center justify-between group"
                                                >
                                                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">I consent to receiving growth updates and strategy calls.</span>
                                                    <div className={`h-6 w-11 shrink-0 rounded-full transition-colors ml-4 ${formData.consent ? "bg-primary" : "bg-border"}`}>
                                                        <div className={`h-5 w-5 translate-y-0.5 rounded-full bg-white shadow transition-transform ${formData.consent ? "translate-x-5" : "translate-x-0.5"}`} />
                                                    </div>
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {error && (
                                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-sm text-red-500 text-center">{error}</motion.p>
                                )}

                                <div className="mt-8 flex justify-between">
                                    {currentStep > 1 ? (
                                        <Button variant="outline" onClick={prevStep} disabled={isSubmitting}><ArrowLeft className="mr-2 h-4 w-4" />Back</Button>
                                    ) : <div />}
                                    {currentStep < 3 ? (
                                        <Button onClick={nextStep} className="bg-gradient-to-r from-primary to-accent">Next<ArrowRight className="ml-2 h-4 w-4" /></Button>
                                    ) : (
                                        <Button onClick={handleSubmit} disabled={isSubmitting} className="shimmer bg-gradient-to-r from-primary to-accent">
                                            {isSubmitting ? (
                                                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                            ) : (
                                                <Send className="mr-2 h-4 w-4" />
                                            )}
                                            {isSubmitting ? "Processing..." : "Submit Sequence"}
                                        </Button>
                                    )}
                                </div>
                            </>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
