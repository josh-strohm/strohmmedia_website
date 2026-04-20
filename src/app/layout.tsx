import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { MouseGlow } from "@/components/mouse-glow";

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

const baseUrl = "https://strohmmedia.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Strohm Media | AI-Driven Marketing Automation",
  description:
    "Scale your influence with AI-driven precision. Strohm Media bridges the gap between emerging AI technologies and business growth. We automate the mundane so you can dominate the market.",
  keywords: [
    "AI Marketing",
    "Marketing Automation",
    "Digital Strategy",
    "Performance Marketing",
    "AI Automation",
    "Business Growth",
  ],
  authors: [{ name: "Strohm Media" }],
  creator: "Strohm Media",
  publisher: "Strohm Media",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Strohm Media",
    title: "Strohm Media | AI-Driven Marketing Automation",
    description:
      "Scale your influence with AI-driven precision. We automate the mundane so you can dominate the market.",
    images: [
      {
        url: `${baseUrl}/Strohm_Media_Logo.jpg`,
        width: 1200,
        height: 630,
        alt: "Strohm Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strohm Media | AI-Driven Marketing Automation",
    description:
      "Scale your influence with AI-driven precision. We automate the mundane so you can dominate the market.",
    images: [`${baseUrl}/Strohm_Media_Logo.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      en: baseUrl,
    },
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
              "@type": "Organization",
              name: "Strohm Media",
              url: baseUrl,
              logo: `${baseUrl}/Strohm_Media_Logo.jpg`,
              description:
                "AI-driven marketing automation platform that bridges the gap between emerging AI technologies and business growth.",
              foundingDate: "2023",
              founder: {
                "@type": "Person",
                name: "Josh Strohm",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "hi@joshstrohm.com",
                contactType: "customer service",
              },
              sameAs: [
                "https://www.linkedin.com/company/103876213",
                "https://www.x.com/strohmmedia",
                "https://www.facebook.com/strohmmedia",
                "https://www.instagram.com/strohmmedia",
                "https://www.youtube.com/@strohmmedia",
              ],
              serviceType: [
                "Marketing Automation",
                "AI Consulting",
                "Digital Strategy",
                "Web Development",
              ],
              areaServed: "Worldwide",
              priceRange: "$$$",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Strohm Media",
              url: baseUrl,
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `${baseUrl}/search?q={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <MouseGlow />
        {children}
      </body>
    </html>
  );
}