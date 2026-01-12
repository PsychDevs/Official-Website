"use client";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { 
    Palette, 
    Monitor, 
    Rocket, 
    Zap, 
    Clock,
    Star,
    CheckCircle2,
    Users,
    TrendingUp,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const features = [
    {
        name: "Custom Design",
        description:
            "Unique, hand-crafted designs that capture your brand's essence and set you apart from competitors.",
        icon: Palette,
    },
    {
        name: "Mobile-First",
        description:
            "Responsive websites that look stunning on every device, from smartphones to large displays.",
        icon: Monitor,
    },
    {
        name: "Fast Delivery",
        description:
            "Launch your online presence quickly with our streamlined 1-2 week delivery process.",
        icon: Rocket,
    },
    {
        name: "Optimized Speed",
        description:
            "Lightning-fast loading times and performance optimization built into every project.",
        icon: Zap,
    },
];

const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "1-2", label: "Weeks Turnaround" },
    { value: "24/7", label: "Support Available" },
];

const testimonials = [
    {
        quote: "PsychDevs transformed our outdated website into a modern, professional platform. Our leads increased by 40% within the first month.",
        author: "Sarah Chen",
        role: "Founder, GreenLeaf Wellness",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
        rating: 5,
    },
    {
        quote: "Exceptional quality at an unbeatable price. They delivered exactly what we needed, on time and within budget.",
        author: "Marcus Rodriguez",
        role: "CEO, TechStart Solutions",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        rating: 5,
    },
    {
        quote: "The team's attention to detail is remarkable. Our e-commerce store looks premium and converts beautifully.",
        author: "Emily Watson",
        role: "Owner, Artisan Crafts",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
        rating: 5,
    },
];

export default function HomePage() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextTestimonial = useCallback(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, []);

    const prevTestimonial = useCallback(() => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, []);

    // Auto-rotate testimonials
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(nextTestimonial, 5000);
        return () => clearInterval(interval);
    }, [isPaused, nextTestimonial]);
    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="h-screen flex items-center justify-center relative">
                <div className="container relative z-10">
                    <div className="mx-auto max-w-4xl text-center">
                        {/* Headline */}
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]"
                        >
                            Professional Websites
                            <br />
                            <span className="gradient-text">At Affordable Prices</span>
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                        >
                            Get a stunning, high-converting website without the enterprise price tag. 
                            Custom designs that make your business look like a million bucks.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <Link
                                href="/contact"
                                className="group btn btn-primary h-12 px-8 text-base"
                            >
                                Get Free Quote
                            </Link>
                            <Link
                                href="/portfolio"
                                className="btn btn-outline h-12 px-8 text-base"
                            >
                                View Our Work
                            </Link>
                        </motion.div>

                        {/* Social Proof */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground"
                        >
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div 
                                            key={i} 
                                            className="w-8 h-8 rounded-full border-2 border-background bg-gradient-to-br from-primary/30 to-cyan-500/30 flex items-center justify-center"
                                        >
                                            <Users className="w-3.5 h-3.5 text-primary" />
                                        </div>
                                    ))}
                                </div>
                                <span>50+ happy clients</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

                {/* Stats Section */}
                <section className="py-20 md:py-28">
                    <div className="container">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat) => (
                                <div 
                                    key={stat.label}
                                    className="text-center"
                                >
                                    <div className="text-4xl md:text-5xl font-display font-bold gradient-text">
                                        {stat.value}
                                    </div>
                                    <div className="mt-2 text-sm text-muted-foreground">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="section-spacing">
                    <div className="container">
                        {/* Section Header */}
                        <div className="mx-auto max-w-2xl text-center mb-16">
                            <span className="badge badge-primary mb-4">Why Choose Us</span>
                            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                                Everything you need for a{" "}
                                <span className="gradient-text">successful website</span>
                            </h2>
                            <p className="mt-4 text-lg text-muted-foreground">
                                From design to development, we handle every aspect of your web presence 
                                with expertise and care.
                            </p>
                        </div>

                        {/* Feature Cards */}
                        <div className="mx-auto max-w-6xl">
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                                {features.map((feature) => (
                                    <div
                                        key={feature.name}
                                        className="group glass-card hover-card p-6 transition-all duration-300"
                                    >
                                        <div className="icon-container mb-5">
                                            <feature.icon className="h-5 w-5" />
                                        </div>
                                        <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                                            {feature.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="section-spacing border-y border-white/5">
                    <div className="container">
                        <div className="mx-auto max-w-2xl text-center mb-16">
                            <span className="badge badge-primary mb-4">Simple Process</span>
                            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                                From idea to launch in{" "}
                                <span className="gradient-text">3 simple steps</span>
                            </h2>
                        </div>

                        <div className="mx-auto max-w-5xl">
                            <div className="grid md:grid-cols-3 gap-8 relative">
                                {/* Connection lines for desktop */}
                                <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
                                
                                {[
                                    { step: "01", title: "Share Your Vision", description: "Tell us about your business and what you need. We'll provide a free quote within 24 hours.", icon: Users },
                                    { step: "02", title: "Design & Develop", description: "We create your custom website with regular updates and revisions until you're 100% satisfied.", icon: Palette },
                                    { step: "03", title: "Launch & Grow", description: "Go live with your new website and start attracting customers. We provide ongoing support.", icon: TrendingUp },
                                ].map((item) => (
                                    <div key={item.step} className="relative text-center">
                                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary text-primary-foreground font-display font-bold text-lg mb-6 shadow-lg shadow-primary/25">
                                            {item.step}
                                        </div>
                                        <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                                        <p className="text-muted-foreground">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Carousel Section */}
                <section className="section-spacing">
                    <div className="container">
                        <div className="mx-auto max-w-2xl text-center mb-16">
                            <span className="badge badge-primary mb-4">Testimonials</span>
                            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                                Loved by businesses{" "}
                                <span className="gradient-text">worldwide</span>
                            </h2>
                        </div>

                        <div className="mx-auto max-w-3xl">
                            {/* Carousel Container */}
                            <div 
                                className="relative"
                                onMouseEnter={() => setIsPaused(true)}
                                onMouseLeave={() => setIsPaused(false)}
                            >
                                {/* Navigation Buttons */}
                                <button
                                    onClick={prevTestimonial}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors"
                                    aria-label="Previous testimonial"
                                >
                                    <ChevronLeft className="w-5 h-5 text-foreground" />
                                </button>
                                <button
                                    onClick={nextTestimonial}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors"
                                    aria-label="Next testimonial"
                                >
                                    <ChevronRight className="w-5 h-5 text-foreground" />
                                </button>

                                {/* Testimonial Card */}
                                <div className="overflow-hidden">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentTestimonial}
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -50 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="glass-card p-8 md:p-12"
                                        >
                                            {/* Rating */}
                                            <div className="flex gap-1 mb-6 justify-center">
                                                {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                                                ))}
                                            </div>
                                            
                                            {/* Quote */}
                                            <blockquote className="text-xl md:text-2xl text-foreground/90 leading-relaxed text-center mb-8">
                                                "{testimonials[currentTestimonial].quote}"
                                            </blockquote>
                                            
                                            {/* Author */}
                                            <div className="flex items-center justify-center gap-4">
                                                <img 
                                                    src={testimonials[currentTestimonial].avatar}
                                                    alt={testimonials[currentTestimonial].author}
                                                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                                                />
                                                <div className="text-left">
                                                    <div className="font-semibold text-foreground text-lg">
                                                        {testimonials[currentTestimonial].author}
                                                    </div>
                                                    <div className="text-sm text-muted-foreground">
                                                        {testimonials[currentTestimonial].role}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Dots Indicator */}
                                <div className="flex justify-center gap-2 mt-6">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentTestimonial(index)}
                                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                                index === currentTestimonial 
                                                    ? 'bg-primary w-8' 
                                                    : 'bg-white/20 hover:bg-white/40'
                                            }`}
                                            aria-label={`Go to testimonial ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Preview Section */}
                <section className="section-spacing border-y border-white/5">
                    <div className="container">
                        <div className="mx-auto max-w-2xl text-center mb-12">
                            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                                Transparent,{" "}
                                <span className="gradient-text">affordable pricing</span>
                            </h2>
                            <p className="mt-4 text-lg text-muted-foreground">
                                No hidden fees. No surprises. Just great value for your investment.
                            </p>
                        </div>

                        <div className="mx-auto max-w-4xl">
                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    { name: "Basic", price: "$299", features: ["3-Page Website", "Mobile-Responsive", "Contact Form", "2 Weeks Support"] },
                                    { name: "Standard", price: "$499", features: ["5-Page Website", "SEO Optimization", "Social Integration", "1 Month Support"], featured: true },
                                    { name: "Premium", price: "$799", features: ["10-Page Website", "E-commerce Ready", "Blog Setup", "2 Months Support"] },
                                ].map((tier) => (
                                    <div 
                                        key={tier.name}
                                        className={`rounded-2xl p-6 ${
                                            tier.featured 
                                                ? 'bg-primary text-primary-foreground ring-2 ring-primary shadow-xl shadow-primary/20' 
                                                : 'glass-card'
                                        }`}
                                    >
                                        <h3 className={`font-semibold ${tier.featured ? 'text-white' : 'text-foreground'}`}>
                                            {tier.name}
                                        </h3>
                                        <div className="mt-4">
                                            <span className={`text-4xl font-display font-bold ${tier.featured ? 'text-white' : 'text-foreground'}`}>
                                                {tier.price}
                                            </span>
                                        </div>
                                        <ul className={`mt-6 space-y-3 text-sm ${tier.featured ? 'text-white/90' : 'text-muted-foreground'}`}>
                                            {tier.features.map((feature) => (
                                                <li key={feature} className="flex items-center gap-2">
                                                    <CheckCircle2 className={`w-4 h-4 ${tier.featured ? 'text-white' : 'text-primary'}`} />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            <div className="text-center mt-8">
                                <Link href="/services" className="btn btn-outline h-11 px-8">
                                    View All Plans
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="section-spacing">
                    <div className="container">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
                                Ready to transform your{" "}
                                <span className="gradient-text">online presence?</span>
                            </h2>
                            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                                Get a professional website that works for your business and your budget. 
                                No hidden fees, no surprises – just great value.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="/contact"
                                    className="group btn btn-primary h-12 px-8 text-base"
                                >
                                    Get Your Free Quote
                                </Link>
                                <Link
                                    href="/portfolio"
                                    className="btn btn-outline h-12 px-8 text-base"
                                >
                                    View Portfolio
                                </Link>
                            </div>
                            <p className="mt-6 text-sm text-muted-foreground">
                                <Clock className="w-4 h-4 inline mr-1" />
                                We respond within 24 hours
                            </p>
                        </div>
                    </div>
                </section>
        </div>
    );
}
