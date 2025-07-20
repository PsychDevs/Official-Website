import {
    Check,
    Layout,
    Code,
    Zap,
    Cpu,
    Palette,
    Monitor,
    ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const services = [
    {
        title: "Custom Web Design",
        description:
            "Unique, brand-focused website designs that capture your brand essence and convert visitors into customers.",
        icon: Palette,
        image: "/services/webdesign.jpg",
        features: [
            "Custom UI/UX Design",
            "Brand Integration",
            "Mobile-First Approach",
            "Conversion Optimization",
        ],
    },
    {
        title: "E-commerce Development",
        description:
            "Complete online stores with payment integration, inventory management, and customer analytics.",
        icon: ShoppingCart,
        image: "/services/ecommerce.jpg",
        features: [
            "Payment Integration",
            "Inventory Management",
            "Customer Analytics",
            "Mobile Commerce",
        ],
    },
    {
        title: "Responsive Development",
        description:
            "Fast, modern websites built with the latest technologies and optimized for all devices.",
        icon: Monitor,
        image: "/services/development.jpg",
        features: [
            "Modern Frameworks",
            "SEO Optimization",
            "Performance Tuning",
            "Cross-browser Support",
        ],
    },
    {
        title: "Website Maintenance",
        description:
            "Ongoing support, updates, and optimization to keep your website running smoothly.",
        icon: Zap,
        image: "/services/maintenance.jpg",
        features: [
            "Regular Updates",
            "Security Monitoring",
            "Backup Services",
            "Performance Optimization",
        ],
    },
];

const tiers = [
    {
        name: "Basic",
        id: "tier-basic",
        price: { monthly: "$149" },
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
        price: { monthly: "$249" },
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
        price: { monthly: "$399" },
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

export default function ServicesPage() {
    return (
        <div className="flex flex-col">
            {/* Header Section - Fullscreen */}
            <section className="min-h-screen flex items-center justify-center">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                            Affordable Web Services
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            Professional web design and development services at
                            prices that small businesses can actually afford
                        </p>
                    </div>

                    {/* Limited Time Offer Banner */}
                    <div className="mx-auto mt-12 max-w-3xl">
                        <div className="relative rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-6 text-center border border-primary/20">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
                                    50% OFF
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-foreground mt-2 mb-2">
                                Special Offer for Small & Medium Businesses
                            </h3>
                            <p className="text-base text-muted-foreground">
                                Valid until August 31, 2025
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Services Grid */}
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                            {services.map((service) => (
                                <div
                                    key={service.title}
                                    className="flex flex-col"
                                >
                                    <div className="relative mb-8 h-64 overflow-hidden rounded-2xl bg-gray-50">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <service.icon className="h-20 w-20 text-primary" />
                                        </div>
                                    </div>
                                    <dt className="text-base font-semibold leading-7 text-foreground">
                                        <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                                            <service.icon
                                                className="h-6 w-6 text-white"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        {service.title}
                                    </dt>
                                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                                        <p className="flex-auto">
                                            {service.description}
                                        </p>
                                        <ul className="mt-4 space-y-2">
                                            {service.features.map((feature) => (
                                                <li
                                                    key={feature}
                                                    className="flex items-center text-sm"
                                                >
                                                    <Check className="mr-2 h-4 w-4 text-primary" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    {/* Pricing Section */}
                    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <h3 className="text-2xl font-bold tracking-tight text-foreground">
                                Our Pricing Plans
                            </h3>
                            <p className="mt-6 text-base leading-7 text-muted-foreground">
                                Choose the perfect plan for your business needs.
                                All plans include modern design, mobile
                                optimization, and ongoing support.
                            </p>
                        </div>
                    </div>

                    <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {tiers.map((tier) => (
                            <div
                                key={tier.id}
                                className={`rounded-3xl p-8 ring-1 ${
                                    tier.featured
                                        ? "bg-primary ring-primary"
                                        : "ring-gray-200"
                                }`}
                            >
                                <h3
                                    className={`text-lg font-semibold leading-8 ${
                                        tier.featured
                                            ? "text-white"
                                            : "text-foreground"
                                    }`}
                                >
                                    {tier.name}
                                </h3>
                                <p
                                    className={`mt-4 text-sm leading-6 ${
                                        tier.featured
                                            ? "text-primary-foreground/80"
                                            : "text-muted-foreground"
                                    }`}
                                >
                                    {tier.description}
                                </p>
                                <p className="mt-6 flex items-baseline gap-x-1">
                                    <span
                                        className={`text-4xl font-bold tracking-tight ${
                                            tier.featured
                                                ? "text-white"
                                                : "text-foreground"
                                        }`}
                                    >
                                        {tier.price.monthly}
                                    </span>
                                    {tier.price.monthly !== "Custom" && (
                                        <span
                                            className={`text-sm font-semibold leading-6 ${
                                                tier.featured
                                                    ? "text-primary-foreground/80"
                                                    : "text-muted-foreground"
                                            }`}
                                        >
                                            /project
                                        </span>
                                    )}
                                </p>
                                {tier.price.monthly !== "Custom" && (
                                    <div className="mt-2 flex items-center gap-2">
                                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                            50% OFF
                                        </span>
                                        <span
                                            className={`text-sm line-through ${
                                                tier.featured
                                                    ? "text-primary-foreground/60"
                                                    : "text-muted-foreground"
                                            }`}
                                        >
                                            {tier.name === "Basic"
                                                ? "$298"
                                                : tier.name === "Standard"
                                                ? "$498"
                                                : "$798"}
                                        </span>
                                    </div>
                                )}
                                <ul
                                    role="list"
                                    className={`mt-8 space-y-3 text-sm leading-6 ${
                                        tier.featured
                                            ? "text-primary-foreground/90"
                                            : "text-muted-foreground"
                                    }`}
                                >
                                    {tier.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex gap-x-3"
                                        >
                                            <Check
                                                className={`h-6 w-5 flex-none ${
                                                    tier.featured
                                                        ? "text-white"
                                                        : "text-primary"
                                                }`}
                                                aria-hidden="true"
                                            />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    className={`mt-8 w-full ${
                                        tier.featured
                                            ? "bg-white text-primary hover:bg-gray-50"
                                            : "bg-primary text-white hover:bg-primary/90"
                                    }`}
                                    asChild
                                >
                                    <a href="/contact">
                                        {tier.price.monthly === "Custom"
                                            ? "Contact Us"
                                            : "Get Started"}
                                    </a>
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
