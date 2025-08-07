"use client";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "TechFlow SaaS Platform",
        description:
            "A modern SaaS dashboard for project management with real-time collaboration features.",
        category: "Web Development",
        image: "/portfolio/techflow.jpg",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
        link: "https://techflow-demo.com",
        featured: true,
    },
    {
        id: 2,
        title: "GreenEarth E-commerce",
        description:
            "Sustainable products e-commerce store with integrated carbon footprint tracking.",
        category: "E-commerce",
        image: "/portfolio/greenearth.jpg",
        technologies: ["Shopify", "React", "Node.js", "Stripe"],
        link: "https://greenearth-demo.com",
        featured: true,
    },
    {
        id: 3,
        title: "Wellness Studio Website",
        description:
            "Beautiful, calming website for a yoga and wellness studio with booking system.",
        category: "Web Design",
        image: "/portfolio/wellness.jpg",
        technologies: ["WordPress", "Custom Theme", "Booking System"],
        link: "https://wellness-demo.com",
        featured: false,
    },
    {
        id: 4,
        title: "FinanceApp Dashboard",
        description:
            "Comprehensive financial analytics dashboard for small business owners.",
        category: "Web Application",
        image: "/portfolio/financeapp.jpg",
        technologies: ["React", "D3.js", "Express.js", "PostgreSQL"],
        link: "https://financeapp-demo.com",
        featured: true,
    },
    {
        id: 5,
        title: "Restaurant Chain Website",
        description:
            "Multi-location restaurant website with online ordering and reservation system.",
        category: "Web Development",
        image: "/portfolio/restaurant.jpg",
        technologies: ["Next.js", "Sanity CMS", "Stripe", "Google Maps API"],
        link: "https://restaurant-demo.com",
        featured: false,
    },
    {
        id: 6,
        title: "Real Estate Platform",
        description:
            "Property listing platform with advanced search and virtual tour integration.",
        category: "Web Application",
        image: "/portfolio/realestate.jpg",
        technologies: ["React", "MongoDB", "Express.js", "Cloudinary"],
        featured: false,
    },
];

const categories = [
    "All",
    "Web Development",
    "E-commerce",
    "Web Design",
    "Web Application",
];

export default function PortfolioPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects =
        selectedCategory === "All"
            ? projects
            : projects.filter(
                  (project) => project.category === selectedCategory
              );

    const featuredProjects = projects.filter((project) => project.featured);

    return (
        <div className="flex flex-col">
            {/* Header Section - Fullscreen */}
            <section className="min-h-screen flex items-center justify-center">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                            Our Portfolio
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            Discover our latest projects and see how we've
                            helped businesses transform their digital presence
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section - Fullscreen */}
            <section className="min-h-screen flex items-center justify-center py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Featured Work
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                        {featuredProjects.map((project) => (
                            <article
                                key={project.id}
                                className="flex flex-col items-start"
                            >
                                <div className="relative w-full">
                                    <div className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]">
                                        <div className="h-full w-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                                            <span className="text-6xl font-bold text-primary/20">
                                                {project.id}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                </div>
                                <div className="max-w-xl">
                                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                                        <span className="relative z-10 rounded-full bg-primary/10 px-3 py-1.5 font-medium text-primary">
                                            {project.category}
                                        </span>
                                    </div>
                                    <div className="group relative">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-foreground group-hover:text-primary">
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span className="absolute inset-0" />
                                                {project.title}
                                            </a>
                                        </h3>
                                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
                                            {project.description}
                                        </p>
                                    </div>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="mt-4">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80"
                                        >
                                            View Project
                                            <ExternalLink className="ml-1 h-4 w-4" />
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Projects Section - Fullscreen */}
            <section className="min-h-screen flex items-center justify-center py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Category Filter */}
                    <div className="mx-auto max-w-3xl text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8">
                            All Projects
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() =>
                                        setSelectedCategory(category)
                                    }
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                        selectedCategory === category
                                            ? "bg-primary text-white"
                                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* All Projects Grid */}
                    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-8 gap-y-20 lg:grid-cols-3">
                        {filteredProjects.map((project) => (
                            <article
                                key={project.id}
                                className="flex flex-col items-start"
                            >
                                <div className="relative w-full">
                                    <div className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover">
                                        <div className="h-full w-full bg-gradient-to-br from-primary/10 to-secondary/5 rounded-2xl flex items-center justify-center">
                                            <span className="text-4xl font-bold text-primary/20">
                                                {project.id}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                </div>
                                <div className="max-w-xl">
                                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                                        <span className="relative z-10 rounded-full bg-primary/10 px-3 py-1.5 font-medium text-primary">
                                            {project.category}
                                        </span>
                                    </div>
                                    <div className="group relative">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-foreground group-hover:text-primary">
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span className="absolute inset-0" />
                                                {project.title}
                                            </a>
                                        </h3>
                                        <p className="mt-5 text-sm leading-6 text-muted-foreground">
                                            {project.description}
                                        </p>
                                    </div>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section - Fullscreen */}
            <section className="min-h-screen flex items-center justify-center">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                            Let's Build Something Amazing
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            Ready to transform your business with a stunning
                            website? Get in touch for a free consultation and
                            quote.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="/contact"
                                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                Start Your Project
                            </a>
                            <a
                                href="/services"
                                className="text-sm font-semibold leading-6 text-foreground hover:text-primary"
                            >
                                View Our Services{" "}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
