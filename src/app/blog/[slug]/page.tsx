import { getPostBySlug, getAllPosts } from "@/lib/blog-cms";
import PostClient from "./PostClient";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return { title: "Post Not Found" };

    return {
        title: `${post.title} | Strohm Media`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const cmsPost = getPostBySlug(slug);

    if (!cmsPost) {
        notFound();
    }

    return <PostClient cmsPost={cmsPost} />;
}
