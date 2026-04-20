import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Efficiency Assessment | Strohm Media",
    description: "Evaluate your current capabilities and discover opportunities for AI-driven improvements in your workflows.",
    viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
};

export default function AIAssessmentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="fixed inset-0 z-[9999] bg-black">
            {children}
        </div>
    );
}
