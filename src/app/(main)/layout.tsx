import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import dynamic from "next/dynamic";

// Lazy load the ChatWidget to improve initial page load time
const ChatWidget = dynamic(
  () => import("@/components/chat-widget").then((mod) => mod.ChatWidget),
  {
    loading: () => null,
    ssr: false,
  }
);

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navigation />
            <main className="relative min-h-screen">
                {children}
            </main>
            <ChatWidget />
            <Footer />
        </>
    );
}