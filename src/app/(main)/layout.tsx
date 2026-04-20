import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ChatWidgetWrapper } from "@/components/chat-widget-wrapper";

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
            <ChatWidgetWrapper />
            <Footer />
        </>
    );
}