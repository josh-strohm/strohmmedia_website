"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import {
    ArrowLeft,
    Calendar,
    Clock,
    User,
    Tag,
    Share2,
    Twitter,
    Linkedin,
    Link as LinkIcon,
    ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import { BlogPostCMS } from "@/lib/blog-cms";



export default function BlogPostPage({ cmsPost }: { cmsPost: BlogPostCMS }) {
    const [post] = useState<BlogPostCMS | null>(cmsPost || null);
    const [copied, setCopied] = useState(false);

    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const shareOnTwitter = () => {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent(post?.title || "");
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, "_blank");
    };

    const shareOnLinkedIn = () => {
        const url = encodeURIComponent(window.location.href);
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank");
    };



    if (!post) {
        return (
            <section className="relative min-h-screen pt-32 pb-20">
                <div className="absolute inset-0 -z-10 hero-mesh" />
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="mb-4 text-4xl font-bold">Post Not Found</h1>
                        <p className="mb-8 text-muted-foreground">
                            The blog post you&apos;re looking for doesn&apos;t exist or has been removed.
                        </p>
                        <Link href="/blog">
                            <Button className="bg-gradient-to-r from-primary to-accent">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Blog
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <article className="relative min-h-screen pt-32 pb-20">
            <div className="absolute inset-0 -z-10 hero-mesh" />

            <div className="container mx-auto px-6">
                <div className="mx-auto max-w-3xl">
                    {/* Breadcrumb */}
                    <motion.nav
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 flex items-center gap-2 text-sm text-muted-foreground"
                    >
                        <Link href="/" className="hover:text-foreground">Home</Link>
                        <ChevronRight className="h-4 w-4" />
                        <Link href="/blog" className="hover:text-foreground">Blog</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-foreground">{post.category}</span>
                    </motion.nav>

                    {/* Header */}
                    <motion.header
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mb-12"
                    >
                        <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                            {post.category}
                        </span>

                        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                            {post.title}
                        </h1>

                        <p className="mb-6 text-lg text-muted-foreground">
                            {post.excerpt}
                        </p>

                        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                            <span className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                {post.author}
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                {new Date(post.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric'
                                })}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                {post.readTime}
                            </span>
                        </div>
                    </motion.header>

                    {/* Featured Image */}
                    {post.featuredImage && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mb-12 overflow-hidden rounded-2xl"
                        >
                            <img
                                src={post.featuredImage}
                                alt={post.title}
                                className="h-auto w-full object-cover"
                            />
                        </motion.div>
                    )}

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="prose prose-invert prose-lg max-w-none text-foreground/90"
                    >
                        <ReactMarkdown
                            rehypePlugins={[rehypeRaw]}
                            components={{
                                h2: ({ ...props }) => <h2 className="mt-12 mb-6 text-3xl font-bold text-foreground" {...props} />,
                                h3: ({ ...props }) => <h3 className="mt-8 mb-4 text-xl font-semibold text-foreground" {...props} />,
                                p: ({ ...props }) => <p className="mb-6 text-foreground/80 leading-relaxed" {...props} />,
                                li: ({ ...props }) => <li className="ml-6 list-disc text-foreground/80" {...props} />,
                                strong: ({ ...props }) => <strong className="font-semibold text-foreground" {...props} />,
                                img: ({ ...props }) => <img className="my-12 rounded-2xl border border-white/10" {...props} />,
                            }}
                        >
                            {post.body}
                        </ReactMarkdown>
                    </motion.div>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mt-12 flex flex-wrap items-center gap-2"
                        >
                            <Tag className="h-4 w-4 text-muted-foreground" />
                            {post.tags.map((tag: string) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-border bg-card/50 px-3 py-1 text-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </motion.div>
                    )}

                    {/* Share */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-12 flex items-center gap-4 border-t border-border pt-8"
                    >
                        <span className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Share2 className="h-4 w-4" />
                            Share this article:
                        </span>
                        <button
                            onClick={shareOnTwitter}
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/50 transition-all hover:border-primary hover:bg-primary/10"
                        >
                            <Twitter className="h-4 w-4" />
                        </button>
                        <button
                            onClick={shareOnLinkedIn}
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/50 transition-all hover:border-primary hover:bg-primary/10"
                        >
                            <Linkedin className="h-4 w-4" />
                        </button>
                        <button
                            onClick={copyLink}
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/50 transition-all hover:border-primary hover:bg-primary/10"
                        >
                            <LinkIcon className="h-4 w-4" />
                        </button>
                        {copied && (
                            <span className="text-sm text-green-500">Link copied!</span>
                        )}
                    </motion.div>

                    {/* Back to Blog */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-12"
                    >
                        <Link href="/blog">
                            <Button variant="outline" className="group">
                                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                                Back to Blog
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </article>
    );
}
