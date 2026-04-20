"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function AIAssessmentPage() {
    useEffect(() => {
        // Tally embed script is handled by next/script
    }, []);

    return (
        <>
            <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
            
            <div className="relative min-h-screen w-full overflow-hidden bg-black pt-20">
                {/* Pure Black Dynamic Background */}
                <div className="absolute inset-0 z-0 animate-gradient-slow bg-[linear-gradient(-45deg,#000000,#050505,#0a0a0a,#000000)] bg-[length:400%_400%]" />

                {/* Ambient orbs */}
                <div className="absolute -left-[10%] -top-[10%] z-1 h-[60vw] w-[60vw] animate-float rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.4)_0%,rgba(79,70,229,0)_70%)] blur-[120px] opacity-30 pointer-events-none" />
                <div className="absolute -right-[10%] -bottom-[20%] z-1 h-[70vw] w-[70vw] animate-float-reverse rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.3)_0%,rgba(59,130,246,0)_70%)] blur-[120px] opacity-30 pointer-events-none" />

                {/* Watermark Mask */}
                <div className="absolute bottom-0 right-0 z-[100] flex h-20 w-[220px] items-center justify-center bg-black pointer-events-none">
                    <div className="ml-[10px] mt-[10px] text-[10px] font-semibold uppercase tracking-[2px] text-indigo-600/60">
                        AI Efficiency
                    </div>
                </div>

                {/* Tally Form Embed */}
                <div className="relative z-10 h-[calc(100vh-80px)] w-full">
                    <iframe
                        data-tally-src="https://tally.so/r/Med68Y?transparentBackground=1"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        marginHeight={0}
                        marginWidth={0}
                        title="AI Efficiency Assessment"
                        className="bg-transparent border-0"
                    />
                </div>
            </div>

            <style jsx global>{`
                @keyframes gradient-slow {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                @keyframes float {
                    0% { transform: translate(0, 0) scale(1); }
                    100% { transform: translate(40px, -60px) scale(1.05); }
                }
                .animate-gradient-slow {
                    animation: gradient-slow 20s ease infinite;
                }
                .animate-float {
                    animation: float 18s ease-in-out infinite alternate;
                }
                .animate-float-reverse {
                    animation: float 25s ease-in-out infinite alternate-reverse;
                }
            `}</style>
        </>
    );
}
