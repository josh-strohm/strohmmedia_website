import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ChatWidget } from "@/components/chat-widget";

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
