"use client";
import { useState } from "react";
import Link from "next/link";
import { ExternalLink, ArrowRight, Layers, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const projects = [
    {
        id: 1,
        title: "DreamFitness",
        description:
            "Modern fitness coaching platform with personalized training plans, merchandise store, and client portal.",
        category: "Web Development",
        image: "./portfolio_projects/DreamFitness/dreamfitness-forlife.com_hero.png",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        link: "https://dreamfitness-forlife.com/",
        featured: true,
        color: "from-emerald-500/20 to-cyan-500/20",
    },
    {
        id: 2,
        title: "GreenEarth E-commerce",
        description:
            "Sustainable products marketplace with carbon footprint tracking and eco-friendly shopping experience.",
        category: "E-commerce",
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=500&fit=crop",
        technologies: ["Shopify", "React", "Node.js", "Stripe"],
        link: "#",
        featured: true,
        color: "from-green-500/20 to-emerald-500/20",
    },
    {
        id: 3,
        title: "Wellness Studio",
        description:
            "Calming, elegant website for a yoga and wellness studio with integrated booking system.",
        category: "Web Design",
        image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=500&fit=crop",
        technologies: ["WordPress", "Custom Theme", "Booking System"],
        link: "#",
        featured: false,
        color: "from-purple-500/20 to-pink-500/20",
    },
    {
        id: 4,
        title: "FinanceApp Dashboard",
        description:
            "Comprehensive financial analytics dashboard for small business owners with real-time insights.",
        category: "Web Application",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
        technologies: ["React", "D3.js", "Express.js", "PostgreSQL"],
        link: "#",
        featured: true,
        color: "from-blue-500/20 to-indigo-500/20",
    },
    {
        id: 5,
        title: "Restaurant Chain",
        description:
            "Multi-location restaurant website with online ordering, reservations, and menu management.",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop",
        technologies: ["Next.js", "Sanity CMS", "Stripe", "Google Maps API"],
        link: "#",
        featured: false,
        color: "from-orange-500/20 to-red-500/20",
    },
    {
        id: 6,
        title: "Real Estate Platform",
        description:
            "Property listing platform with advanced search filters, virtual tours, and agent portal.",
        category: "Web Application",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
        technologies: ["React", "MongoDB", "Express.js", "Cloudinary"],
        link: "#",
        featured: false,
        color: "from-cyan-500/20 to-blue-500/20",
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
            : projects.filter((project) => project.category === selectedCategory);

    const featuredProjects = projects.filter((project) => project.featured);

    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative">
                <div className="container relative">
                    <div className="mx-auto max-w-3xl text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="badge badge-primary mb-6"
                        >
                            <Layers className="w-3.5 h-3.5" />
                            Our Work
                        </motion.span>
                        
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground"
                        >
                            Projects That{" "}
                            <span className="gradient-text">Make an Impact</span>
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
                        >
                            Discover how we've helped businesses transform their digital 
                            presence with stunning, high-performing websites.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
                <section className="section-spacing">
                    <div className="container">
                        <div className="flex items-center justify-between mb-12">
                            <div>
                                <span className="badge badge-primary mb-3">
                                    <Sparkles className="w-3.5 h-3.5" />
                                    Featured
                                </span>
                                <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-foreground">
                                    Highlighted Projects
                                </h2>
                            </div>
                        </div>

                        <div className="grid gap-8 lg:grid-cols-2">
                            {featuredProjects.slice(0, 2).map((project, index) => (
                                <motion.article
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group glass-card overflow-hidden hover-card"
                                >
                                    {/* Image */}
                                    <div className="relative h-64 overflow-hidden">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50`} />
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                                        
                                        {/* Category badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="badge badge-primary">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-4 line-clamp-2">
                                            {project.description}
                                        </p>
                                        
                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-1 text-xs rounded-md bg-white/5 text-muted-foreground"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Link */}
                                        {project.link !== "#" && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                                            >
                                                View Live Site
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* All Projects */}
                <section className="section-spacing border-y border-white/5">
                    <div className="container">
                        <div className="mx-auto max-w-2xl text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-foreground mb-6">
                                All Projects
                            </h2>

                            {/* Category Filter */}
                            <div className="flex flex-wrap justify-center gap-2">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                                            selectedCategory === category
                                                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                                                : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground"
                                        }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Projects Grid */}
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <AnimatePresence mode="wait">
                                {filteredProjects.map((project, index) => (
                                    <motion.article
                                        key={project.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        className="group glass-card overflow-hidden hover-card"
                                    >
                                        {/* Image */}
                                        <div className="relative h-48 overflow-hidden">
                                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30`} />
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                                        </div>

                                        {/* Content */}
                                        <div className="p-5">
                                            <span className="text-xs text-primary font-medium mb-2 block">
                                                {project.category}
                                            </span>
                                            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                                {project.description}
                                            </p>
                                            
                                            {/* Technologies */}
                                            <div className="flex flex-wrap gap-1.5 mb-4">
                                                {project.technologies.slice(0, 3).map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2 py-0.5 text-xs rounded bg-white/5 text-muted-foreground"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Link */}
                                            {project.link !== "#" && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                                                >
                                                    View Project
                                                    <ExternalLink className="w-3.5 h-3.5" />
                                                </a>
                                            )}
                                        </div>
                                    </motion.article>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-spacing">
                    <div className="container">
                        <div className="mx-auto max-w-4xl">
                            <div className="relative glass-card p-8 md:p-12 overflow-hidden">
                                <div className="relative text-center">
                                    <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground mb-4">
                                        Let's Build Something{" "}
                                        <span className="gradient-text">Amazing Together</span>
                                    </h2>
                                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                                        Ready to transform your business with a stunning website? 
                                        Get in touch for a free consultation and quote.
                                    </p>
                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                        <Link
                                            href="/contact"
                                            className="group btn btn-primary h-12 px-8 text-base"
                                        >
                                            Start Your Project
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                        <Link
                                            href="/services"
                                            className="btn btn-outline h-12 px-8 text-base"
                                        >
                                            View Services
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    );
}
