import Link from "next/link";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

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
    social: [
        {
            name: "Twitter",
            href: "https://twitter.com/psychdevs",
            icon: Twitter,
        },
        {
            name: "Instagram",
            href: "https://instagram.com/psychdevs",
            icon: Instagram,
        },
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
        <footer className="border-t bg-muted/30 mt-16 md:mt-24">
            <div className="container py-12 md:py-16">
                <div className="grid gap-8 md:grid-cols-4">
                    {/* Brand Section */}
                    <div className="space-y-4 md:col-span-2">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="font-display text-xl font-bold">
                                PsychDevs
                            </span>
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-md">
                            We create affordable, professional websites that
                            help small businesses succeed online. Quality web
                            design at prices that won't break your budget.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            {navigation.social.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-foreground">
                            Services
                        </h3>
                        <ul className="space-y-2">
                            {navigation.services.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-foreground">
                            Get in Touch
                        </h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <p>
                                <a
                                    href="mailto:psychdevs@gmail.com"
                                    className="hover:text-primary transition-colors"
                                >
                                    psychdevs@gmail.com
                                </a>
                            </p>
                            <p>
                                <a
                                    href="tel:+94750212605"
                                    className="hover:text-primary transition-colors"
                                >
                                    +94 750 212 605
                                </a>
                            </p>
                            <p className="text-xs">Remote-first team</p>
                            <p className="text-xs">Serving clients worldwide</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} PsychDevs. All rights
                        reserved.
                    </p>
                    <div className="mt-4 md:mt-0 flex space-x-6">
                        <Link
                            href="/privacy"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
