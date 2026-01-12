"use client";

import { useState } from "react";
import Link from "next/link";
import { 
    Mail, 
    Phone, 
    MapPin, 
    Clock, 
    Send, 
    MessageSquare,
    CheckCircle2,
    Sparkles
} from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "motion/react";

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "psychdevs@gmail.com",
        href: "mailto:psychdevs@gmail.com",
        description: "We respond within 24 hours",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+94 770 212 604",
        href: "tel:+94770212604",
        description: "Available during business hours",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Remote-first",
        href: null,
        description: "Serving clients worldwide",
    },
    {
        icon: Clock,
        label: "Response Time",
        value: "Within 24 hours",
        href: null,
        description: "Guaranteed response",
    },
];

const faqs = [
    {
        question: "How much does a website cost?",
        answer: "Our websites start at just $149 for basic sites, with most projects ranging from $149 to $399 depending on features needed.",
    },
    {
        question: "How long does it take?",
        answer: "Most simple websites are completed within 1-2 weeks. More complex sites take 2-4 weeks.",
    },
    {
        question: "Do you offer ongoing support?",
        answer: "Yes! We provide maintenance, updates, and support packages for all our clients.",
    },
    {
        question: "What's included in the price?",
        answer: "All packages include custom design, mobile responsiveness, basic SEO setup, and post-launch support.",
    },
];

export default function ContactPage() {
    const [state, handleFormspreeSubmit] = useForm("xblkogdg");

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        projectType: "",
        budget: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [statusMessage, setStatusMessage] = useState("");

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            await handleFormspreeSubmit(e);
        } catch (error: any) {
            setSubmitStatus("error");
            console.error("Form submission error:", error);
            setStatusMessage(
                "Something went wrong. Please try again or contact us directly at psychdevs@gmail.com"
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    if (state.succeeded && submitStatus !== "success") {
        setSubmitStatus("success");
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            company: "",
            phone: "",
            projectType: "",
            budget: "",
            message: "",
        });

        setTimeout(() => {
            setSubmitStatus("idle");
        }, 7000);
    }

    if (state.errors && Object.keys(state.errors).length > 0 && submitStatus !== "error") {
        setSubmitStatus("error");
        setStatusMessage("Please check your form and try again.");
    }

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
                            <MessageSquare className="w-3.5 h-3.5" />
                            Get in Touch
                        </motion.span>
                        
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground"
                        >
                            Let's Build Something{" "}
                            <span className="gradient-text">Amazing</span>
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
                        >
                            Ready to transform your business with a stunning website? 
                            Get in touch for a free consultation and quote.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Contact Info Cards */}
                <section className="py-12 -mt-12 relative z-10">
                    <div className="container">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            {contactInfo.map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="glass-card p-5 hover-card"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="icon-container flex-shrink-0">
                                            <item.icon className="w-5 h-5" />
                                </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                                            {item.href ? (
                                        <a
                                                    href={item.href}
                                                    className="font-medium text-foreground hover:text-primary transition-colors"
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="font-medium text-foreground">{item.value}</p>
                                            )}
                                            <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                                </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="section-spacing">
                    <div className="container">
                        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
                            {/* Form */}
                            <div className="lg:col-span-3">
                                <div className="glass-card p-6 md:p-8">
                                    <div className="mb-6">
                                        <h2 className="text-xl font-semibold text-foreground mb-2">
                                Start Your Project
                            </h2>
                                        <p className="text-muted-foreground text-sm">
                                            Fill out the form below and we'll get back to you within 24 hours.
                                        </p>
                                    </div>

                            {/* Status Messages */}
                            {submitStatus === "success" && (
                                        <motion.div 
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-6 flex items-start gap-3"
                                        >
                                            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-medium">Message sent successfully!</p>
                                                <p className="text-sm opacity-80">We'll get back to you within 24 hours.</p>
                                </div>
                                        </motion.div>
                            )}

                            {submitStatus === "error" && (
                                        <motion.div 
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 mb-6"
                                        >
                                    {statusMessage}
                                        </motion.div>
                            )}

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                                <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                                                    First name *
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                                    id="firstName"
                                            required
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                                    className="input"
                                                    placeholder="John"
                                        />
                                                <ValidationError prefix="First name" field="firstName" errors={state.errors} className="mt-1 text-sm text-red-400" />
                                    </div>
                                    <div>
                                                <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                                    id="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                                    className="input"
                                                    placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                                Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                                className="input"
                                                placeholder="john@example.com"
                                    />
                                            <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-sm text-red-400" />
                                </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        id="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                                    className="input"
                                                    placeholder="Your company"
                                    />
                                </div>
                                <div>
                                                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                                                    Phone
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                                    className="input"
                                                    placeholder="+1 234 567 890"
                                    />
                                </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                                <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                                        Project Type
                                    </label>
                                    <select
                                        name="projectType"
                                        id="projectType"
                                        value={formData.projectType}
                                        onChange={handleInputChange}
                                                    className="input"
                                    >
                                                    <option value="">Select a type</option>
                                                    <option value="New Website">New Website</option>
                                                    <option value="Website Redesign">Website Redesign</option>
                                                    <option value="E-commerce Store">E-commerce Store</option>
                                                    <option value="Web Application">Web Application</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div>
                                                <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                                        Budget Range
                                    </label>
                                    <select
                                        name="budget"
                                        id="budget"
                                        value={formData.budget}
                                        onChange={handleInputChange}
                                                    className="input"
                                    >
                                                    <option value="">Select budget</option>
                                                    <option value="$149 - $249">$149 - $249</option>
                                                    <option value="$250 - $399">$250 - $399</option>
                                                    <option value="$400 - $600">$400 - $600</option>
                                                    <option value="$600+">$600+</option>
                                    </select>
                                </div>
                                        </div>

                                <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                                Project Details *
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                                rows={5}
                                        required
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Tell us about your project, goals, and any specific requirements..."
                                                className="input resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                            className="btn btn-primary w-full h-12 text-base justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                            {isSubmitting ? (
                                                <>
                                                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                                                    Sending...
                                                </>
                                            ) : submitStatus === "success" ? (
                                                <>
                                                    <CheckCircle2 className="w-4 h-4 mr-2" />
                                                    Sent Successfully
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-4 h-4 mr-2" />
                                                    Send Message
                                                </>
                                            )}
                                </button>
                            </form>
                                </div>
                            </div>

                            {/* FAQ Sidebar */}
                            <div className="lg:col-span-2">
                                <div className="sticky top-24">
                                    <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                                        <Sparkles className="w-4 h-4 text-primary" />
                                        Frequently Asked Questions
                                    </h3>
                                    <div className="space-y-4">
                                        {faqs.map((faq) => (
                                            <div 
                                                key={faq.question}
                                                className="glass-card p-5"
                                            >
                                                <h4 className="font-medium text-foreground mb-2">
                                                    {faq.question}
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Direct Contact CTA */}
                                    <div className="mt-8 glass-card p-6 text-center">
                                        <p className="text-muted-foreground mb-4">
                                            Prefer to talk directly?
                                        </p>
                                        <a
                                            href="mailto:psychdevs@gmail.com"
                                            className="btn btn-outline h-10 px-6 inline-flex"
                                        >
                                            <Mail className="w-4 h-4 mr-2" />
                                            Email Us Directly
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-spacing border-t border-white/5">
                    <div className="container">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-foreground mb-4">
                                Not sure what you need?
                            </h2>
                            <p className="text-muted-foreground mb-8">
                                Check out our services or portfolio to get inspired.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="/services"
                                    className="btn btn-outline h-11 px-8"
                                >
                                    View Services
                                </Link>
                                <Link
                                    href="/portfolio"
                                    className="btn btn-outline h-11 px-8"
                                >
                                    View Portfolio
                                </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
