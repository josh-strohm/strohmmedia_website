import { Metadata } from "next";
import dynamic from "next/dynamic";

// Lazy load the ChatWidget to improve initial page load time
const ChatWidget = dynamic(
  () => import("@/components/chat-widget").then((mod) => mod.ChatWidget),
  {
    loading: () => null,
    ssr: false,
  }
);

export const metadata: Metadata = {
    title: "Custom Website Development | Strohm Media",
    description: "Build a high-performance, conversion-optimized custom website that turns visitors into customers. Bespoke digital assets engineered for growth.",
};

export default function BuildMyWebsiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
            <ChatWidget />
        </>
    );
}