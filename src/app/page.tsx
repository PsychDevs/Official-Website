"use client";
import Link from "next/link";
import { 
    Palette, 
    Monitor, 
    Rocket, 
    Zap, 
    Clock,
    Star,
    CheckCircle2,
    Users,
    TrendingUp
} from "lucide-react";
import { motion } from "motion/react";

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

const trustedLogos = [
    { name: "TechCorp", initial: "T" },
    { name: "StartupX", initial: "S" },
    { name: "GrowthLab", initial: "G" },
    { name: "NextWave", initial: "N" },
    { name: "BlueScale", initial: "B" },
];

export default function HomePage() {
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

            {/* Trusted By Section */}
                <section className="py-16 border-b border-white/5">
                    <div className="container">
                        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider">
                            Trusted by growing businesses
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                            {trustedLogos.map((logo) => (
                                <div 
                                    key={logo.name}
                                    className="flex items-center gap-2 text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center font-display font-bold text-lg">
                                        {logo.initial}
                                    </div>
                                    <span className="font-medium hidden sm:block">{logo.name}</span>
                                </div>
                            ))}
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

                {/* Testimonials Section */}
                <section className="section-spacing">
                    <div className="container">
                        <div className="mx-auto max-w-2xl text-center mb-16">
                            <span className="badge badge-primary mb-4">Testimonials</span>
                            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                                Loved by businesses{" "}
                                <span className="gradient-text">worldwide</span>
                            </h2>
                        </div>

                        <div className="mx-auto max-w-6xl">
                            <div className="grid gap-6 md:grid-cols-3">
                                {testimonials.map((testimonial) => (
                                    <div
                                        key={testimonial.author}
                                        className="glass-card p-6 flex flex-col"
                                    >
                                        {/* Rating */}
                                        <div className="flex gap-1 mb-4">
                                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                            ))}
                                        </div>
                                        
                                        {/* Quote */}
                                        <p className="text-foreground/90 leading-relaxed mb-6 flex-grow">
                                            "{testimonial.quote}"
                                        </p>
                                        
                                        {/* Author */}
                                        <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                                            <img 
                                                src={testimonial.avatar}
                                                alt={testimonial.author}
                                                className="w-10 h-10 rounded-full object-cover"
                                            />
                                            <div>
                                                <div className="font-medium text-foreground">{testimonial.author}</div>
                                                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
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
