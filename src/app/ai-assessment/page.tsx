"use client";

import Script from "next/script";

export default function AIAssessmentPage() {
    return (
        <>
            <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
            
            <div className="fixed inset-0 overflow-hidden bg-black">
                <iframe
                    data-tally-src="https://tally.so/r/Med68Y?transparentBackground=1"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title="AI Efficiency Assessment"
                    className="absolute inset-0 h-full w-full border-0"
                />
            </div>

            <style jsx global>{`
                html, body { 
                    margin: 0; 
                    height: 100%; 
                    overflow: hidden !important; 
                    background: black;
                }
            `}</style>
        </>
    );
}
