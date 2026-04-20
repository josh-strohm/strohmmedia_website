import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Efficiency Assessment | Strohm Media",
    description: "Take our AI Efficiency Assessment to evaluate your current capabilities and discover opportunities for AI-driven improvements in your workflows.",
    openGraph: {
        title: "AI Efficiency Assessment | Strohm Media",
        description: "Evaluate your AI readiness and discover automation opportunities.",
        images: ["/Strohm_Media_Logo.jpeg"],
    },
};

export default function AIAssessmentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
