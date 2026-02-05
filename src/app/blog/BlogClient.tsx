"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import {
    ArrowRight,
    Calendar,
    Clock,
    TrendingUp,
    Lightbulb,
    Zap,
    BarChart,
    FileText,
    type LucideIcon,
} from "lucide-react";

import { BlogPostType, categoryIcons, categoryGradients } from "@/types/blog";



export function BlogClient({ cmsPosts }: { cmsPosts: BlogPostType[] }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const featuredPosts = cmsPosts.filter((post) => post.featured);
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");
        try {
            const response = await fetch("https://n8n.srv945929.hstgr.cloud/webhook/23033d1c-5af1-4e8f-bbcd-820b90b9afaf", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) throw new Error();
            setStatus("success");
            setEmail("");
        } catch (err) {
            setStatus("error");
        }
    };

    const regularPosts = cmsPosts.filter((post) => !post.featured);

    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-16">
                <div className="absolute inset-0 -z-10 hero-mesh" />

                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-primary"
                        >
                            Strohm Media Influence
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
                        >
                            Insights for the{" "}
                            <span className="text-gradient">AI-Driven Marketer</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-muted-foreground md:text-xl"
                        >
                            Actionable strategies, industry insights, and thought leadership
                            on the future of marketing automation.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Featured Posts */}
            <section ref={ref} className="relative py-12">
                <div className="container mx-auto px-6">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold">Featured</h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {featuredPosts.map((post, index) => (
                            <motion.article
                                key={post.slug}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link href={`/blog/${post.slug}`}>
                                    <div
                                        className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${categoryGradients[post.category] || "from-blue-500/20 to-cyan-500/10"} p-8 transition-all hover:scale-[1.02]`}
                                    >
                                        {/* Grid pattern */}
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                backgroundImage: `
                          linear-gradient(to right, oklch(1 0 0 / 0.03) 1px, transparent 1px),
                          linear-gradient(to bottom, oklch(1 0 0 / 0.03) 1px, transparent 1px)
                        `,
                                                backgroundSize: "30px 30px",
                                            }}
                                        />

                                        <div className="relative">
                                            {post.featuredImage && (
                                                <div className="mb-6 aspect-video overflow-hidden rounded-2xl border border-white/10">
                                                    <img
                                                        src={post.featuredImage}
                                                        alt={post.title}
                                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                </div>
                                            )}
                                            <div className="mb-4 flex items-center gap-3">
                                                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur-sm">
                                                    {(() => {
                                                        const Icon = categoryIcons[post.category] || FileText;
                                                        return <Icon className="h-3.5 w-3.5" />;
                                                    })()}
                                                    {post.category}
                                                </span>
                                                <span className="text-sm text-muted-foreground">
                                                    {post.date}
                                                </span>
                                            </div>

                                            <h3 className="mb-4 text-2xl font-bold transition-colors group-hover:text-primary md:text-3xl">
                                                {post.title}
                                            </h3>

                                            <p className="mb-6 text-muted-foreground">
                                                {post.excerpt}
                                            </p>

                                            <div className="flex items-center justify-between">
                                                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                                                    <Clock className="h-4 w-4" />
                                                    {post.readTime}
                                                </span>
                                                <span className="inline-flex items-center gap-1 font-medium text-primary transition-transform group-hover:translate-x-1">
                                                    Read More
                                                    <ArrowRight className="h-4 w-4" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Posts */}
            <section className="relative py-12 pb-24">
                <div className="container mx-auto px-6">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold">All Articles</h2>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {regularPosts.map((post, index) => (
                            <BlogCard key={post.slug} post={post} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="relative py-24">
                <div className="container mx-auto px-6">
                    <div className="glass relative overflow-hidden rounded-3xl p-12 text-center">
                        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
                        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

                        <div className="relative">
                            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                                Stay Ahead of the Curve
                            </h2>
                            <p className="mx-auto mb-8 max-w-lg text-muted-foreground">
                                Get weekly insights on AI marketing, automation strategies, and
                                industry trends delivered straight to your inbox.
                            </p>

                            {status === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="rounded-xl bg-primary/10 p-6 border border-primary/20"
                                >
                                    <p className="font-semibold text-primary">Subscription Initialized!</p>
                                    <p className="text-sm text-muted-foreground mt-1">Check your inbox for the Intelligence Layer welcoming briefing.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubscribe} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        required
                                        className="flex-1 rounded-xl border border-border bg-background/50 px-4 py-3 backdrop-blur-sm transition-colors focus:border-primary focus:outline-none"
                                    />
                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="shimmer rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 font-semibold transition-transform hover:scale-105 disabled:opacity-50"
                                    >
                                        {status === "loading" ? "Processing..." : "Subscribe"}
                                    </button>
                                </form>
                            )}
                            {status === "error" && (
                                <p className="mt-4 text-sm text-red-500">Initialization failed. Please try again later.</p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function BlogCard({
    post,
    index,
}: {
    post: BlogPostType;
    index: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.article
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Link href={`/blog/${post.slug}`}>
                <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card">
                    <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />

                    <div className="relative">
                        {post.featuredImage && (
                            <div className="mb-4 aspect-video overflow-hidden rounded-xl border border-border/50">
                                <img
                                    src={post.featuredImage}
                                    alt={post.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        )}
                        <div className="mb-4 flex items-center gap-3">
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/50 px-2.5 py-0.5 text-xs">
                                {(() => {
                                    const Icon = categoryIcons[post.category] || FileText;
                                    return <Icon className="h-3 w-3" />;
                                })()}
                                {post.category}
                            </span>
                        </div>

                        <h3 className="mb-3 font-semibold transition-colors group-hover:text-primary">
                            {post.title}
                        </h3>

                        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                            {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                                <Calendar className="h-3.5 w-3.5" />
                                {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock className="h-3.5 w-3.5" />
                                {post.readTime}
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.article>
    );
}
