"use client";
import Link from "next/link";
import { ArrowRight, Palette, Monitor, Smartphone, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

const features = [
    {
        name: "Budget-Friendly Design",
        description:
            "Professional, custom designs that look expensive but won't break your budget.",
        icon: Palette,
    },
    {
        name: "Mobile-Responsive",
        description:
            "All websites work perfectly on phones, tablets, and desktops - no extra cost.",
        icon: Monitor,
    },
    {
        name: "Quick Setup",
        description:
            "Get online fast with our streamlined process. Most sites launched within 1-2 weeks.",
        icon: Smartphone,
    },
    {
        name: "Fast & Secure",
        description:
            "Lightning-fast loading speeds and basic security features included in every package.",
        icon: Zap,
    },
];

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
                <div className="container relative">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                            Professional Websites at{" "}
                            <span className="relative whitespace-nowrap">
                                <span className="relative bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
                                    Affordable Prices
                                </span>
                            </span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
                            Get a stunning, professional website without the
                            premium price tag.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Button asChild size="lg" className="group">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center"
                                >
                                    Get Free Quote
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <Link href="/portfolio">View Our Work</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Limited Time Offer Banner */}
            <section className="py-16 sm:py-20">
                <div className="container">
                    <div className="mx-auto max-w-5xl">
                        <div className="relative rounded-xl bg-gradient-to-r from-primary/5 via-card to-primary/5 p-8 sm:p-12 text-center border border-primary/20 shadow-sm">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
                                    50% OFF
                                </span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mt-4 mb-4">
                                Special Offer for Small & Medium Businesses
                            </h3>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <span className="text-lg text-muted-foreground">
                                    Until Aug 31, 2025
                                </span>
                                <Button asChild size="lg">
                                    <Link href="/services">View Prices</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 sm:py-32">
                <div className="container">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Everything you need for a successful website
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            From design to development, we handle every aspect
                            of your web presence with expertise and care.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-5xl">
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                            {features.map((feature) => (
                                <div
                                    key={feature.name}
                                    className="group relative rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50"
                                >
                                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <feature.icon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <h3 className="font-display text-lg font-semibold text-foreground">
                                        {feature.name}
                                    </h3>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 sm:py-32">
                <div className="container">
                    <div className="relative isolate overflow-hidden rounded-3xl bg-primary px-6 py-24 text-center shadow-2xl sm:px-16">
                        <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Ready for an affordable website?
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-foreground/90">
                            Get a professional website that works for your
                            business and your budget. No hidden fees, no
                            surprises - just great value.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="bg-white text-primary hover:bg-white/90"
                                asChild
                            >
                                <Link href="/contact">Get Free Quote</Link>
                            </Button>
                            <Button
                                variant="ghost"
                                size="lg"
                                className="text-white hover:bg-primary-600"
                                asChild
                            >
                                <Link href="/portfolio">View Portfolio</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
