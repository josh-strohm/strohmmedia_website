import Link from "next/link";
import Image from "next/image";
import { Mail, Linkedin, Twitter, Facebook, Instagram, Youtube, ArrowRight } from "lucide-react";

const footerLinks = {
    platform: [
        { label: "AI Automation", href: "/platform#automation" },
        { label: "Digital Strategy", href: "/platform#strategy" },
        { label: "Performance Marketing", href: "/platform#performance" },
    ],
    resources: [
        { label: "Influence Blog", href: "/blog" },
        { label: "Case Studies", href: "/blog#case-studies" },
        { label: "ROI Calculator", href: "/#roi-calculator" },
    ],
    company: [
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy" },
    ],
};

export function Footer() {
    return (
        <footer className="relative border-t border-border/50 bg-background/50 backdrop-blur-xl">
            {/* Gradient top border */}
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="container mx-auto px-6 py-16">
                <div className="grid gap-12 lg:grid-cols-5">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="group inline-flex items-center">
                            <div className="relative h-[90px] w-[360px] overflow-hidden">
                                <Image
                                    src="/Strohm_Media_Logo-no-bg.jpeg"
                                    alt="Strohm Media"
                                    width={360}
                                    height={90}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                        </Link>
                        <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                            Bridging the gap between emerging AI technologies and business
                            growth. We automate the mundane so you can dominate the market.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-4">
                            <a
                                href="https://www.x.com/strohmmedia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/50 transition-all hover:border-primary hover:bg-primary/10"
                                title="X (Twitter)"
                            >
                                <Twitter className="h-4 w-4" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/103876213"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/50 transition-all hover:border-primary hover:bg-primary/10"
                                title="LinkedIn"
                            >
                                <Linkedin className="h-4 w-4" />
                            </a>
                            <a
                                href="https://www.facebook.com/strohmmedia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/50 transition-all hover:border-primary hover:bg-primary/10"
                                title="Facebook"
                            >
                                <Facebook className="h-4 w-4" />
                            </a>
                            <a
                                href="https://www.instagram.com/strohmmedia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/50 transition-all hover:border-primary hover:bg-primary/10"
                                title="Instagram"
                            >
                                <Instagram className="h-4 w-4" />
                            </a>
                            <a
                                href="https://www.youtube.com/@strohmmedia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/50 transition-all hover:border-primary hover:bg-primary/10"
                                title="YouTube"
                            >
                                <Youtube className="h-4 w-4" />
                            </a>
                            <a
                                href="mailto:hi@joshstrohm.com"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/50 transition-all hover:border-primary hover:bg-primary/10"
                                title="Email Us"
                            >
                                <Mail className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                            Platform
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.platform.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        {link.label}
                                        <ArrowRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                            Resources
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        {link.label}
                                        <ArrowRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        {link.label}
                                        <ArrowRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Strohm Media. All rights reserved.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Built with <span className="text-gradient font-medium">AI-driven precision</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
