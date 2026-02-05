import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { MouseGlow } from "@/components/mouse-glow";
import { ChatWidget } from "@/components/chat-widget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Strohm Media | AI-Driven Marketing Automation",
  description: "Scale your influence with AI-driven precision. Strohm Media bridges the gap between emerging AI technologies and business growth. We automate the mundane so you can dominate the market.",
  keywords: ["AI Marketing", "Marketing Automation", "Digital Strategy", "Performance Marketing", "AI Automation", "Business Growth"],
  authors: [{ name: "Strohm Media" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://strohmmedia.com",
    siteName: "Strohm Media",
    title: "Strohm Media | AI-Driven Marketing Automation",
    description: "Scale your influence with AI-driven precision. We automate the mundane so you can dominate the market.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strohm Media | AI-Driven Marketing Automation",
    description: "Scale your influence with AI-driven precision. We automate the mundane so you can dominate the market.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/Strohm_Media_Logo.jpeg",
    apple: "/Strohm_Media_Logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Strohm Media",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "description": "AI-driven marketing automation platform that bridges the gap between emerging AI technologies and business growth.",
              "offers": {
                "@type": "Offer",
                "category": "Marketing Automation"
              },
              "provider": {
                "@type": "Organization",
                "name": "Strohm Media",
                "description": "AI-first marketing automation agency"
              }
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <MouseGlow />
        <Navigation />
        <main className="relative min-h-screen">
          {children}
        </main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
