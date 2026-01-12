import Link from "next/link";
import { Github, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const navigation = {
    main: [
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Contact", href: "/contact" },
    ],
    services: [
        { name: "Web Design", href: "/services" },
        { name: "E-commerce", href: "/services" },
        { name: "Web Development", href: "/services" },
        { name: "Maintenance", href: "/services" },
    ],
    legal: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
    ],
    social: [
        {
            name: "LinkedIn",
            href: "https://linkedin.com/company/psychdevs",
            icon: Linkedin,
        },
        {
            name: "GitHub",
            href: "https://github.com/psychdevs",
            icon: Github,
        },
    ],
};

export function Footer() {
    return (
        <footer className="relative border-t border-white/5 bg-background">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
            
            <div className="container relative">
                {/* Main Footer Content */}
                <div className="py-16 md:py-20">
                    <div className="grid gap-12 lg:grid-cols-12">
                        {/* Brand Section */}
                        <div className="lg:col-span-5 space-y-6">
                            <Link href="/" className="inline-flex items-center gap-2 group">
                                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-display font-bold text-primary-foreground text-sm transition-transform group-hover:scale-105">
                                    PD
                                </div>
                                <span className="font-display text-xl font-bold text-foreground">
                                    PsychDevs
                                </span>
                            </Link>
                            <p className="text-muted-foreground max-w-sm leading-relaxed">
                                We create affordable, professional websites that help 
                                businesses succeed online. Quality web design at prices 
                                that won't break your budget.
                            </p>
                            
                            {/* Contact Info */}
                            <div className="space-y-3">
                                <a 
                                    href="mailto:psychdevs@gmail.com"
                                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                                >
                                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 group-hover:bg-primary/10 transition-colors">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    psychdevs@gmail.com
                                </a>
                                <a 
                                    href="tel:+94770212604"
                                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                                >
                                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 group-hover:bg-primary/10 transition-colors">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    +94 770 212 604
                                </a>
                                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5">
                                        <MapPin className="w-4 h-4" />
                                    </div>
                                    Remote-first · Worldwide
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-2 pt-2">
                                {navigation.social.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={item.name}
                                    >
                                        <item.icon className="h-4 w-4" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className="lg:col-span-7">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                                {/* Company */}
                                <div>
                                    <h3 className="text-sm font-semibold text-foreground mb-4">
                                        Company
                                    </h3>
                                    <ul className="space-y-3">
                                        {navigation.main.map((item) => (
                                            <li key={item.name}>
                                                <Link
                                                    href={item.href}
                                                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                                                >
                                                    {item.name}
                                                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Services */}
                                <div>
                                    <h3 className="text-sm font-semibold text-foreground mb-4">
                                        Services
                                    </h3>
                                    <ul className="space-y-3">
                                        {navigation.services.map((item) => (
                                            <li key={item.name}>
                                                <Link
                                                    href={item.href}
                                                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                                                >
                                                    {item.name}
                                                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Legal */}
                                <div>
                                    <h3 className="text-sm font-semibold text-foreground mb-4">
                                        Legal
                                    </h3>
                                    <ul className="space-y-3">
                                        {navigation.legal.map((item) => (
                                            <li key={item.name}>
                                                <Link
                                                    href={item.href}
                                                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                                                >
                                                    {item.name}
                                                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} PsychDevs. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            All systems operational
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
