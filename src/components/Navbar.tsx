"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight } from "lucide-react";

const navigation = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled 
                    ? "bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/5" 
                    : "bg-transparent"
            )}
        >
            <nav className="container flex h-16 md:h-20 items-center justify-between">
                {/* Logo */}
                <Link 
                    href="/" 
                    className="group"
                >
                    <span className="font-display text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                        PsychDevs
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "relative px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                                pathname === item.href
                                    ? "text-foreground"
                                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                            )}
                        >
                            {item.name}
                            {pathname === item.href && (
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                            )}
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-3">
                    <Link 
                        href="/contact"
                        className="group btn btn-primary h-10 px-5 text-sm"
                    >
                        Get Quote
                        <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-foreground hover:bg-white/5 transition-colors"
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMobileMenuOpen ? (
                        <X className="h-5 w-5" />
                    ) : (
                        <Menu className="h-5 w-5" />
                    )}
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "md:hidden fixed inset-x-0 top-16 bg-background/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 ease-out",
                    isMobileMenuOpen 
                        ? "opacity-100 translate-y-0 pointer-events-auto" 
                        : "opacity-0 -translate-y-4 pointer-events-none"
                )}
            >
                <div className="container py-4">
                    <div className="flex flex-col gap-1">
                        {navigation.map((item, index) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all",
                                    pathname === item.href
                                        ? "bg-primary/10 text-primary"
                                        : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                                )}
                                style={{ 
                                    animationDelay: `${index * 50}ms`,
                                    animation: isMobileMenuOpen ? 'fade-up 0.3s ease-out forwards' : 'none'
                                }}
                            >
                                {item.name}
                                {pathname === item.href && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                )}
                            </Link>
                        ))}
                    </div>
                    
                    {/* Mobile CTA */}
                    <div className="mt-4 pt-4 border-t border-white/5">
                        <Link 
                            href="/contact"
                            className="group btn btn-primary w-full h-12 text-base justify-center"
                        >
                            Get Free Quote
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile menu overlay */}
            {isMobileMenuOpen && (
                <div 
                    className="md:hidden fixed inset-0 top-16 bg-black/50 -z-10"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </header>
    );
}
