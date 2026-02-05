import { HeroSection } from "@/components/sections/hero-section";
import { SocialProofTicker } from "@/components/sections/social-proof-ticker";
import { ProblemSection } from "@/components/sections/problem-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ROICalculator } from "@/components/sections/roi-calculator";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofTicker />
      <ProblemSection />
      <ProcessSection />
      <ROICalculator />
      <CTASection />
    </>
  );
}
