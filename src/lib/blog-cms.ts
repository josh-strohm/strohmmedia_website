import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'blog');

export interface BlogPostCMS {
    slug: string;
    title: string;
    date: string;
    featuredImage?: string;
    body: string;
    excerpt?: string;
    category?: string;
    author?: string;
    readTime?: string;
    tags?: string[];
    featured?: boolean;
}

export function getAllPosts() {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith('.md'))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, '');
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data, content } = matter(fileContents);

            return {
                slug,
                body: content,
                title: data.title || (slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')) || 'Untitled Post',
                date: data.date ? (data.date instanceof Date ? data.date.toISOString() : String(data.date)) : new Date().toISOString(),
                featuredImage: data.featuredImage || '',
                excerpt: data.excerpt || (content.slice(0, 160) + '...'),
                category: data.category || 'AI Trends',
                author: data.author || 'Strohm Media',
                readTime: data.readTime || '5 min read',
                tags: data.tags || [],
                featured: data.featured || false,
            } as BlogPostCMS;
        });

    return allPostsData.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
}

export function getPostBySlug(slug: string) {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug,
        body: content,
        title: data.title || (slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')) || 'Untitled Post',
        date: data.date ? (data.date instanceof Date ? data.date.toISOString() : String(data.date)) : new Date().toISOString(),
        featuredImage: data.featuredImage || '',
        excerpt: data.excerpt || (content.slice(0, 160) + '...'),
        category: data.category || 'AI Trends',
        author: data.author || 'Strohm Media',
        readTime: data.readTime || '5 min read',
        tags: data.tags || [],
        featured: data.featured || false,
    } as BlogPostCMS;
}
