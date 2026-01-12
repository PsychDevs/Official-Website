"use client";
import Link from "next/link";
import {
    Check,
    Palette,
    Monitor,
    ShoppingCart,
    Zap,
    ArrowRight,
    Shield,
    Clock,
    Headphones,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
    {
        title: "Custom Web Design",
        description:
            "Unique, brand-focused website designs that capture your brand essence and convert visitors into customers.",
        icon: Palette,
        features: [
            "Custom UI/UX Design",
            "Brand Integration",
            "Mobile-First Approach",
            "Conversion Optimization",
        ],
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    },
    {
        title: "E-commerce Development",
        description:
            "Complete online stores with payment integration, inventory management, and customer analytics.",
        icon: ShoppingCart,
        features: [
            "Payment Integration",
            "Inventory Management",
            "Customer Analytics",
            "Mobile Commerce",
        ],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    },
    {
        title: "Responsive Development",
        description:
            "Fast, modern websites built with the latest technologies and optimized for all devices.",
        icon: Monitor,
        features: [
            "Modern Frameworks",
            "SEO Optimization",
            "Performance Tuning",
            "Cross-browser Support",
        ],
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop",
    },
    {
        title: "Website Maintenance",
        description:
            "Ongoing support, updates, and optimization to keep your website running smoothly.",
        icon: Zap,
        features: [
            "Regular Updates",
            "Security Monitoring",
            "Backup Services",
            "Performance Optimization",
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    },
];

const tiers = [
    {
        name: "Basic",
        id: "tier-basic",
        price: "$299",
        description: "Perfect for small businesses just getting started",
        features: [
            "3-Page Website",
            "Mobile-Responsive Design",
            "Contact Form",
            "Basic SEO Setup",
            "Free Domain Setup",
            "2 Weeks Support",
        ],
        featured: false,
    },
    {
        name: "Standard",
        id: "tier-standard",
        price: "$499",
        description: "Great for growing small businesses",
        features: [
            "5-Page Custom Website",
            "Mobile-Responsive Design",
            "Contact Forms & Gallery",
            "SEO Optimization",
            "Social Media Integration",
            "1 Month Free Support",
            "Google Analytics Setup",
        ],
        featured: true,
    },
    {
        name: "Premium",
        id: "tier-premium",
        price: "$799",
        description: "Best value for established businesses",
        features: [
            "10-Page Custom Website",
            "Basic E-commerce (5 products)",
            "Advanced SEO Optimization",
            "Custom Contact Forms",
            "Blog Setup",
            "2 Months Free Support",
            "Performance Optimization",
            "Basic Analytics Dashboard",
        ],
        featured: false,
    },
];

const guarantees = [
    {
        icon: Shield,
        title: "Money-Back Guarantee",
        description: "Not satisfied? Get a full refund within 14 days.",
    },
    {
        icon: Clock,
        title: "On-Time Delivery",
        description: "Your project delivered on schedule, guaranteed.",
    },
    {
        icon: Headphones,
        title: "Ongoing Support",
        description: "Free support included with every package.",
    },
];

export default function ServicesPage() {
    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative">
                <div className="container relative">
                    <div className="mx-auto max-w-3xl text-center">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground"
                        >
                            Affordable Web Services
                            <br />
                            <span className="gradient-text">Premium Results</span>
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
                        >
                            Professional web design and development services at prices 
                            that small businesses can actually afford. No compromises on quality.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
                <section className="section-spacing">
                    <div className="container">
                        <div className="mx-auto max-w-2xl text-center mb-16">
                            <span className="badge badge-primary mb-4">Our Services</span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground">
                                Everything you need to{" "}
                                <span className="gradient-text">succeed online</span>
                            </h2>
                        </div>

                        <div className="grid gap-8 lg:grid-cols-2">
                            {services.map((service) => (
                                <div
                                    key={service.title}
                                    className="group glass-card hover-card overflow-hidden"
                                >
                                    {/* Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img 
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                                        <div className="absolute bottom-4 left-4">
                                            <div className="icon-container">
                                                <service.icon className="h-5 w-5" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-foreground mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-4">
                                            {service.description}
                                        </p>
                                        <ul className="grid grid-cols-2 gap-2">
                                            {service.features.map((feature) => (
                                                <li 
                                                    key={feature}
                                                    className="flex items-center gap-2 text-sm text-muted-foreground"
                                                >
                                                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="section-spacing border-y border-white/5">
                    <div className="container">
                        <div className="mx-auto max-w-2xl text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground">
                                Simple,{" "}
                                <span className="gradient-text">transparent pricing</span>
                            </h2>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Choose the perfect plan for your business. No hidden fees, no surprises.
                            </p>
                        </div>

                        <div className="mx-auto max-w-5xl">
                            <div className="grid gap-6 lg:grid-cols-3">
                                {tiers.map((tier) => (
                                    <div
                                        key={tier.id}
                                        className={`relative rounded-2xl p-8 flex flex-col ${
                                            tier.featured
                                                ? "bg-primary ring-2 ring-primary shadow-xl shadow-primary/20"
                                                : "glass-card"
                                        }`}
                                    >
                                        {tier.featured && (
                                            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white text-primary text-xs font-semibold">
                                                    <Sparkles className="w-3 h-3" />
                                                    Most Popular
                                                </span>
                                            </div>
                                        )}

                                        <div className="flex-grow">
                                            <h3 className={`text-lg font-semibold ${
                                                tier.featured ? "text-white" : "text-foreground"
                                            }`}>
                                                {tier.name}
                                            </h3>
                                            
                                            <p className={`mt-2 text-sm ${
                                                tier.featured ? "text-white/70" : "text-muted-foreground"
                                            }`}>
                                                {tier.description}
                                            </p>

                                            <div className="mt-6 flex items-baseline gap-2">
                                                <span className={`text-4xl font-display font-bold ${
                                                    tier.featured ? "text-white" : "text-foreground"
                                                }`}>
                                                    {tier.price}
                                                </span>
                                                <span className={`text-sm ${
                                                    tier.featured ? "text-white/60" : "text-muted-foreground"
                                                }`}>
                                                    /project
                                                </span>
                                            </div>

                                            <ul className={`mt-8 space-y-3 text-sm ${
                                                tier.featured ? "text-white/90" : "text-muted-foreground"
                                            }`}>
                                                {tier.features.map((feature) => (
                                                    <li key={feature} className="flex items-start gap-3">
                                                        <Check className={`w-5 h-5 flex-shrink-0 ${
                                                            tier.featured ? "text-white" : "text-primary"
                                                        }`} />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <Link
                                            href="/contact"
                                            className={`mt-8 btn h-11 justify-center ${
                                                tier.featured
                                                    ? "bg-white text-primary hover:bg-white/90 shadow-lg"
                                                    : "btn-primary"
                                            }`}
                                        >
                                            Get Started
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </div>
                                ))}
                            </div>

                            {/* Custom Quote CTA */}
                            <div className="mt-12 text-center">
                                <p className="text-muted-foreground mb-4">
                                    Need something custom? We've got you covered.
                                </p>
                                <Link 
                                    href="/contact"
                                    className="btn btn-outline h-11 px-8"
                                >
                                    Request Custom Quote
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Guarantees Section */}
                <section className="section-spacing">
                    <div className="container">
                        <div className="mx-auto max-w-4xl">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-foreground">
                                    Our Guarantees
                                </h2>
                            </div>

                            <div className="grid gap-6 md:grid-cols-3">
                                {guarantees.map((item) => (
                                    <div 
                                        key={item.title}
                                        className="text-center p-6 glass-card"
                                    >
                                        <div className="icon-container mx-auto mb-4">
                                            <item.icon className="h-5 w-5" />
                                        </div>
                                        <h3 className="font-semibold text-foreground mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-spacing border-t border-white/5">
                    <div className="container">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground mb-6">
                                Ready to get started?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-10">
                                Let's discuss your project and find the perfect solution for your business.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="/contact"
                                    className="group btn btn-primary h-12 px-8 text-base"
                                >
                                    Get Free Quote
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                                <Link
                                    href="/portfolio"
                                    className="btn btn-outline h-12 px-8 text-base"
                                >
                                    View Our Work
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    );
}
