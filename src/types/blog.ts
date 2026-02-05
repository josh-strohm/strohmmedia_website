import {
    Lightbulb,
    TrendingUp,
    Zap,
    BarChart,
    FileText,
    type LucideIcon,
} from "lucide-react";

export interface BlogPostType {
    id: number | string;
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    date: string;
    featured: boolean;
    featuredImage?: string;
}

export const categoryIcons: Record<string, LucideIcon> = {
    "AI Trends": Lightbulb,
    "Strategy": TrendingUp,
    "AI Tools": Zap,
    "Analytics": BarChart,
    "Workflows": Lightbulb,
    "Case Studies": FileText,
    "Industry News": TrendingUp,
    "Tutorials": Zap,
};

export const categoryGradients: Record<string, string> = {
    "AI Trends": "from-blue-500/20 to-cyan-500/10",
    "Strategy": "from-orange-500/20 to-red-500/10",
    "AI Tools": "from-blue-500/20 to-cyan-500/10",
    "Analytics": "from-orange-500/20 to-red-500/10",
    "Workflows": "from-blue-500/20 to-cyan-500/10",
    "Case Studies": "from-orange-500/20 to-red-500/10",
    "Industry News": "from-blue-500/20 to-cyan-500/10",
    "Tutorials": "from-orange-500/20 to-red-500/10",
};
