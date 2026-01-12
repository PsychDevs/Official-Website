"use client";
import Link from "next/link";
import {
    Code,
    Sparkles,
    Rocket,
    Heart,
    Clock,
    DollarSign,
    ArrowRight,
    CheckCircle2,
    Target,
    Users,
    Award,
} from "lucide-react";
import { motion } from "motion/react";

const values = [
    {
        name: "Design Excellence",
        description:
            "Beautiful, professional designs that represent your brand perfectly and create lasting impressions.",
        icon: Sparkles,
    },
    {
        name: "Clean Code",
        description: 
            "Fast, secure websites built with modern best practices and optimized for performance.",
        icon: Code,
    },
    {
        name: "Fast Delivery",
        description: 
            "Quick turnaround times without compromising on quality. Most projects in 1-2 weeks.",
        icon: Rocket,
    },
    {
        name: "Client-Focused",
        description: 
            "Your success is our priority. We work closely with you every step of the way.",
        icon: Heart,
    },
];

const team = [
    {
        name: "Lasith Dissanayake",
        role: "Founder & Lead Developer",
        image: "/team/lasith.jpg",
        bio: "Building digital dreams with passion and precision.",
    },
    {
        name: "Ashen Senarathne",
        role: "Web Developer",
        image: "/team/ashen.jpeg",
        bio: "Targeting perfection in every line of code.",
    },
    {
        name: "Vihanga Tharuka",
        role: "Web Developer",
        image: "/team/vihanga.jpeg",
        bio: "Crafting seamless digital experiences.",
    },
    {
        name: "Vidumini Pathirage",
        role: "Talent Acquisition",
        image: "/team/vidumini.jpg",
        bio: "Building a team of exceptional talent.",
    },
];

const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "4", label: "Team Members" },
    { value: "2+", label: "Years Experience" },
];

const careers = [
    {
        title: "UI/UX Design Intern",
        type: "Part-time",
        compensation: "Project-based",
        description:
            "Join us to learn user interface and user experience design while working on real client projects.",
        requirements: [
            "Basic knowledge of design principles",
            "Familiarity with Figma or similar design tools",
            "Passion for creating user-centered designs",
            "Available for part-time commitment",
        ],
    },
];

const benefits = [
    "Work on real client projects from day one",
    "Flexible part-time schedule that fits your studies",
    "Get paid for completed projects",
    "Build a strong portfolio with real-world projects",
    "Learn from experienced professionals",
    "Remote-friendly work environment",
];

export default function AboutPage() {
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
                            <Users className="w-3.5 h-3.5" />
                            About Us
                        </motion.span>
                        
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground"
                        >
                            We Make Premium
                            <br />
                            <span className="gradient-text">Websites Accessible</span>
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
                        >
                            We're a team of passionate developers who believe that every business 
                            deserves a professional website, regardless of budget.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
                <section className="py-16 border-b border-white/5">
                    <div className="container">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center">
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

                {/* Mission Section */}
                <section className="section-spacing">
                    <div className="container">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <div>
                                <span className="badge badge-primary mb-6">
                                    <Target className="w-3.5 h-3.5" />
                                    Our Mission
                                </span>
                                <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground mb-6">
                                    Making quality web design{" "}
                                    <span className="gradient-text">affordable for everyone</span>
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    We started PsychDevs with a simple belief: every business, 
                                    regardless of size or budget, deserves a website that truly 
                                    represents their brand and helps them succeed online.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our mission is to bridge the gap between expensive enterprise-level 
                                    web development and the affordable solutions that small and medium 
                                    businesses need. We deliver premium quality without the premium price tag.
                                </p>
                            </div>
                            <div className="relative">
                                <div className="relative rounded-2xl overflow-hidden border border-white/10">
                                    <img 
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                                        alt="Team collaboration"
                                        className="w-full h-auto"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                                </div>
                                {/* Floating card */}
                                <div className="absolute -bottom-6 -left-6 glass-card p-4 max-w-[200px]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                            <Award className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-foreground">98%</div>
                                            <div className="text-xs text-muted-foreground">Client Satisfaction</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="section-spacing border-y border-white/5">
                    <div className="container">
                        <div className="mx-auto max-w-2xl text-center mb-16">
                            <span className="badge badge-primary mb-4">
                                <Heart className="w-3.5 h-3.5" />
                                Our Values
                            </span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground">
                                What drives us{" "}
                                <span className="gradient-text">every day</span>
                            </h2>
                        </div>

                        <div className="mx-auto max-w-5xl">
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                                {values.map((value) => (
                                    <div
                                        key={value.name}
                                        className="group glass-card hover-card p-6 text-center"
                                    >
                                        <div className="icon-container mx-auto mb-5">
                                            <value.icon className="h-5 w-5" />
                                        </div>
                                        <h3 className="font-semibold text-foreground mb-2">
                                            {value.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {value.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="section-spacing">
                    <div className="container">
                        <div className="mx-auto max-w-2xl text-center mb-16">
                            <span className="badge badge-primary mb-4">
                                <Users className="w-3.5 h-3.5" />
                                Our Team
                            </span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground">
                                Meet the people behind{" "}
                                <span className="gradient-text">PsychDevs</span>
                            </h2>
                            <p className="mt-4 text-muted-foreground">
                                A small but dedicated team passionate about creating exceptional 
                                digital experiences that help businesses grow.
                            </p>
                        </div>

                        <div className="mx-auto max-w-5xl">
                            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                                {team.map((person) => (
                                    <div
                                        key={person.name}
                                        className="group text-center"
                                    >
                                        <div className="relative mb-4 mx-auto w-40 h-40 rounded-2xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors">
                                            <img
                                                src={person.image}
                                                alt={person.name}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <h3 className="font-semibold text-foreground">
                                            {person.name}
                                        </h3>
                                        <p className="text-sm text-primary mb-1">
                                            {person.role}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {person.bio}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Careers Section */}
                <section className="section-spacing border-y border-white/5">
                    <div className="container">
                        <div className="mx-auto max-w-2xl text-center mb-16">
                            <span className="badge badge-primary mb-4">
                                <Rocket className="w-3.5 h-3.5" />
                                Join Our Team
                            </span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground">
                                Grow your career with{" "}
                                <span className="gradient-text">PsychDevs</span>
                            </h2>
                            <p className="mt-4 text-muted-foreground">
                                We're looking for passionate interns to join our mission. 
                                Work on real projects and get paid for your contributions.
                            </p>
                        </div>

                        <div className="mx-auto max-w-4xl">
                            <div className="grid lg:grid-cols-2 gap-8">
                                {/* Open Positions */}
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-6">
                                        Open Positions
                                    </h3>
                                    {careers.map((position) => (
                                        <div
                                            key={position.title}
                                            className="glass-card p-6"
                                        >
                                            <div className="flex items-start justify-between mb-4">
                                                <div>
                                                    <h4 className="text-lg font-semibold text-foreground">
                                                        {position.title}
                                                    </h4>
                                                    <div className="flex items-center gap-3 mt-2">
                                                        <span className="badge badge-primary text-xs">
                                                            <Clock className="w-3 h-3" />
                                                            {position.type}
                                                        </span>
                                                        <span className="badge badge-success text-xs">
                                                            <DollarSign className="w-3 h-3" />
                                                            {position.compensation}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-muted-foreground mb-4">
                                                {position.description}
                                            </p>
                                            <div className="space-y-2 mb-6">
                                                <p className="text-sm font-medium text-foreground">Requirements:</p>
                                                <ul className="space-y-1.5">
                                                    {position.requirements.map((req) => (
                                                        <li key={req} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                                            {req}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <a
                                                href={`mailto:psychdevs@gmail.com?subject=Internship Application - ${position.title}`}
                                                className="btn btn-primary h-10 px-6 inline-flex"
                                            >
                                                Apply Now
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </a>
                                        </div>
                                    ))}
                                </div>

                                {/* Why Join Us */}
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-6">
                                        Why Join PsychDevs?
                                    </h3>
                                    <div className="glass-card p-6">
                                        <ul className="space-y-4">
                                            {benefits.map((benefit) => (
                                                <li key={benefit} className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                                    <span className="text-muted-foreground">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-spacing">
                    <div className="container">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground mb-6">
                                Ready to work with us?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-10">
                                Let's discuss your project and see how we can help you succeed online.
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
                                    href="/services"
                                    className="btn btn-outline h-12 px-8 text-base"
                                >
                                    View Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    );
}
