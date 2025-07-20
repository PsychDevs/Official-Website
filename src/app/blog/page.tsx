import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

const posts = [
    {
        id: 1,
        title: "10 Essential Elements Every Modern Website Needs in 2025",
        excerpt:
            "Discover the must-have features that separate successful websites from the competition.",
        date: "2025-01-15",
        author: "Sarah Chen",
        category: "Web Design",
        slug: "10-essential-elements-modern-website-2025",
        readTime: "8 min read",
    },
    {
        id: 2,
        title: "The Complete Guide to E-commerce Website Design",
        excerpt:
            "Everything you need to know to create an online store that converts visitors into customers.",
        date: "2025-01-10",
        author: "Michael Rodriguez",
        category: "E-commerce",
        slug: "complete-guide-ecommerce-website-design",
        readTime: "12 min read",
    },
    {
        id: 3,
        title: "How to Choose the Right Web Design Agency for Your Business",
        excerpt:
            "A comprehensive guide to finding the perfect web design partner for your project.",
        date: "2025-01-05",
        author: "Emma Thompson",
        category: "Business",
        slug: "how-to-choose-web-design-agency",
        readTime: "6 min read",
    },
    {
        id: 4,
        title: "The Psychology of Color in Web Design",
        excerpt:
            "Learn how color choices impact user behavior and conversion rates on your website.",
        date: "2024-12-28",
        author: "Sarah Chen",
        category: "Design Tips",
        slug: "psychology-of-color-web-design",
        readTime: "7 min read",
    },
    {
        id: 5,
        title: "Mobile-First Design: Why It Matters More Than Ever",
        excerpt:
            "Understanding the importance of mobile-first design and how to implement it effectively.",
        date: "2024-12-20",
        author: "Michael Rodriguez",
        category: "Mobile Design",
        slug: "mobile-first-design-matters",
        readTime: "5 min read",
    },
    {
        id: 6,
        title: "Website Loading Speed: The Ultimate Guide to Performance",
        excerpt:
            "Optimize your website for lightning-fast loading times and better search rankings.",
        date: "2024-12-15",
        author: "Emma Thompson",
        category: "Performance",
        slug: "website-loading-speed-guide",
        readTime: "10 min read",
    },
];

const categories = [
    "All Posts",
    "Web Design",
    "E-commerce",
    "Business",
    "Design Tips",
    "Mobile Design",
    "Performance",
];

export default function BlogPage() {
    return (
        <>
            {/* Header Section */}
            <section className="min-h-screen flex items-center justify-center">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                            Our Blog
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            Insights, tips, and trends from the world of web
                            design and development
                        </p>
                    </div>

                    {/* Categories */}
                    <div className="mx-auto mt-16 max-w-4xl">
                        <div className="flex flex-wrap justify-center gap-4">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className="px-4 py-2 rounded-full text-sm font-medium bg-muted text-muted-foreground hover:bg-muted/80 transition-colors"
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Post Section */}
            <section className="min-h-screen flex items-center justify-center">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:max-w-none">
                        <div className="flex flex-col lg:flex-row gap-12">
                            <div className="lg:w-2/3">
                                <div className="aspect-[16/9] w-full rounded-2xl bg-gray-100 overflow-hidden">
                                    <div className="h-full w-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                                        <span className="text-8xl font-bold text-primary/20">
                                            1
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 flex flex-col justify-center">
                                <div className="flex items-center gap-x-4 text-xs mb-4">
                                    <span className="relative z-10 rounded-full bg-primary/10 px-3 py-1.5 font-medium text-primary">
                                        {posts[0].category}
                                    </span>
                                    <span className="text-muted-foreground">
                                        {posts[0].readTime}
                                    </span>
                                </div>
                                <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
                                    <Link
                                        href={`/blog/${posts[0].slug}`}
                                        className="hover:text-primary transition-colors"
                                    >
                                        {posts[0].title}
                                    </Link>
                                </h2>
                                <p className="text-muted-foreground mb-6">
                                    {posts[0].excerpt}
                                </p>
                                <div className="flex items-center gap-x-4 text-sm text-muted-foreground mb-6">
                                    <div className="flex items-center gap-x-2">
                                        <User className="h-4 w-4" />
                                        {posts[0].author}
                                    </div>
                                    <div className="flex items-center gap-x-2">
                                        <Calendar className="h-4 w-4" />
                                        {new Date(
                                            posts[0].date
                                        ).toLocaleDateString()}
                                    </div>
                                </div>
                                <Link
                                    href={`/blog/${posts[0].slug}`}
                                    className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
                                >
                                    Read Full Article
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* All Posts Section */}
            <section className="min-h-screen flex items-center justify-center">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Latest Articles
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Stay updated with our latest insights and tips
                        </p>
                    </div>

                    {/* Blog Posts Grid */}
                    <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.slice(1).map((post) => (
                            <article
                                key={post.id}
                                className="flex flex-col items-start"
                            >
                                <div className="relative w-full">
                                    <div className="aspect-[16/9] w-full rounded-2xl bg-gray-100 overflow-hidden">
                                        <div className="h-full w-full bg-gradient-to-br from-primary/10 to-secondary/5 flex items-center justify-center">
                                            <span className="text-4xl font-bold text-primary/20">
                                                {post.id}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                </div>
                                <div className="max-w-xl">
                                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                                        <span className="relative z-10 rounded-full bg-primary/10 px-3 py-1.5 font-medium text-primary">
                                            {post.category}
                                        </span>
                                        <span className="text-muted-foreground">
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <div className="group relative">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-foreground group-hover:text-primary">
                                            <Link href={`/blog/${post.slug}`}>
                                                <span className="absolute inset-0" />
                                                {post.title}
                                            </Link>
                                        </h3>
                                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
                                            {post.excerpt}
                                        </p>
                                    </div>
                                    <div className="mt-6 flex items-center gap-x-4 text-xs text-muted-foreground">
                                        <div className="flex items-center gap-x-2">
                                            <User className="h-4 w-4" />
                                            {post.author}
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <Calendar className="h-4 w-4" />
                                            {new Date(
                                                post.date
                                            ).toLocaleDateString()}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="min-h-screen flex items-center justify-center">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="mt-6 text-lg text-muted-foreground">
                            Get expert insights and a custom strategy for your
                            website project.
                        </p>
                        <div className="mt-8">
                            <Link
                                href="/contact"
                                className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-white font-semibold hover:bg-primary/90 transition-colors"
                            >
                                Start Your Project
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
