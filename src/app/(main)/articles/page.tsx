import { getAllPosts } from "@/lib/blog-cms";
import { ArticlesClient } from "./ArticlesClient";
import { BlogPostType } from "@/types/blog";

export default function ArticlesPage() {
    const cmsPostsRaw = getAllPosts();

    const formattedCmsPosts: BlogPostType[] = cmsPostsRaw.map((post) => ({
        id: post.slug,
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt || '',
        category: post.category || 'AI Trends',
        readTime: post.readTime || '5 min read',
        date: new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }),
        featured: post.featured || false,
        featuredImage: post.featuredImage,
    }));

    return <ArticlesClient cmsPosts={formattedCmsPosts} />;
}
