import { Metadata } from "next";
import { PricingSection } from "@/components/sections/pricing-section";
import { CTASection } from "@/components/sections/cta-section";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
    title: "Pricing | Strohm Media Intelligence Suite",
    description: "Transparent, scalable pricing for AI automation and marketing infrastructure. Invest in the future of your business operations.",
};

export default function PricingPage() {
    return (
        <div className="pt-20">
            {/* Minimal Header for Pricing Page */}
            <section className="relative overflow-hidden pt-20 pb-10">
                <div className="container mx-auto px-6 text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
                        <Sparkles className="h-4 w-4" />
                        <span>Investment Plans</span>
                    </div>
                    <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
                        Pricing for the <span className="text-gradient">AI-First Agency</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Select the infrastructure that scales with your ambition. No hidden fees, just pure automated performance.
                    </p>
                </div>
            </section>

            <PricingSection />
            <CTASection />
        </div>
    );
}
