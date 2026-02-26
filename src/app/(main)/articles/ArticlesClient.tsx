"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import {
    Calendar,
    Clock,
    FileText,
    LayoutGrid,
    List,
} from "lucide-react";

import { BlogPostType, categoryIcons } from "@/types/blog";

export function ArticlesClient({ cmsPosts }: { cmsPosts: BlogPostType[] }) {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true });
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

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
                            All{" "}
                            <span className="text-gradient">Articles</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-muted-foreground md:text-xl"
                        >
                            Browse our complete collection of insights and articles.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* All Posts with Toggle */}
            <section ref={containerRef} className="relative py-12 pb-24">
                <div className="container mx-auto px-6">
                    <div className="mb-8 flex items-center justify-between">
                        <h2 className="text-2xl font-bold">All Articles</h2>
                        
                        <div className="flex items-center gap-2 rounded-lg border border-border bg-background/50 p-1">
                            <button
                                onClick={() => setViewMode("grid")}
                                className={`flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                                    viewMode === "grid"
                                        ? "bg-primary text-primary-foreground"
                                        : "text-muted-foreground hover:text-foreground"
                                }`}
                            >
                                <LayoutGrid className="h-4 w-4" />
                                Grid
                            </button>
                            <button
                                onClick={() => setViewMode("list")}
                                className={`flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                                    viewMode === "list"
                                        ? "bg-primary text-primary-foreground"
                                        : "text-muted-foreground hover:text-foreground"
                                }`}
                            >
                                <List className="h-4 w-4" />
                                List
                            </button>
                        </div>
                    </div>

                    {viewMode === "grid" ? (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {cmsPosts.map((post, index) => (
                                <ArticleCard key={post.slug} post={post} index={index} />
                            ))}
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {cmsPosts.map((post, index) => (
                                <ArticleListItem key={post.slug} post={post} index={index} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

function ArticleCard({
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
                <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card">
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
                        <div className="mb-3 flex items-center gap-2">
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/50 px-2.5 py-0.5 text-xs">
                                {(() => {
                                    const Icon = categoryIcons[post.category] || FileText;
                                    return <Icon className="h-3 w-3" />;
                                })()}
                                {post.category}
                            </span>
                        </div>

                        <h3 className="mb-3 font-semibold transition-colors group-hover:text-primary line-clamp-2">
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

function ArticleListItem({
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
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.05 }}
        >
            <Link href={`/blog/${post.slug}`}>
                <div className="group flex flex-col gap-5 rounded-2xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card sm:flex-row">
                    {post.featuredImage && (
                        <div className="w-full shrink-0 sm:w-48">
                            <div className="aspect-video overflow-hidden rounded-xl border border-border/50">
                                <img
                                    src={post.featuredImage}
                                    alt={post.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    )}

                    <div className="flex flex-1 flex-col justify-center">
                        <div className="mb-3 flex items-center gap-2">
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/50 px-2.5 py-0.5 text-xs">
                                {(() => {
                                    const Icon = categoryIcons[post.category] || FileText;
                                    return <Icon className="h-3 w-3" />;
                                })()}
                                {post.category}
                            </span>
                        </div>

                        <h3 className="mb-2 font-semibold transition-colors group-hover:text-primary">
                            {post.title}
                        </h3>

                        <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
                            {post.excerpt}
                        </p>

                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
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
