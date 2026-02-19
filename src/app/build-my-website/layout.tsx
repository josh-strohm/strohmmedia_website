import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Custom Website Development | Strohm Media",
    description: "Build a high-performance, conversion-optimized custom website that turns visitors into customers. Bespoke digital assets engineered for growth.",
};

export default function BuildMyWebsiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
