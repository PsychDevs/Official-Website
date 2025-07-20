"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";
import { emailjsConfig } from "@/lib/emailjs-config";

export default function ContactPage() {
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
    const [submitStatus, setSubmitStatus] = useState<
        "idle" | "success" | "error"
    >("idle");
    const [statusMessage, setStatusMessage] = useState("");

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            // Debug: Log configuration values (remove in production)
            console.log("EmailJS Config:", {
                serviceId: emailjsConfig.serviceId,
                templateId: emailjsConfig.templateId,
                publicKey: emailjsConfig.publicKey.substring(0, 10) + "...",
            });

            // Prepare template parameters for EmailJS
            const templateParams = {
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                message: `Company: ${formData.company || "Not specified"}
Phone: ${formData.phone || "Not provided"}
Project Type: ${formData.projectType || "Not specified"}
Budget: ${formData.budget || "Not specified"}

Message:
${formData.message}`,
                to_email: "psychdevs@gmail.com",
            };

            console.log("Template Params:", templateParams);

            // Send email using EmailJS
            const result = await emailjs.send(
                emailjsConfig.serviceId,
                emailjsConfig.templateId,
                templateParams,
                emailjsConfig.publicKey
            );

            console.log("EmailJS Result:", result);

            if (result.status === 200) {
                setSubmitStatus("success");
                // Reset form
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

                // Reset button text after 7 seconds
                setTimeout(() => {
                    setSubmitStatus("idle");
                }, 7000);
            } else {
                throw new Error(`EmailJS returned status: ${result.status}`);
            }
        } catch (error: any) {
            setSubmitStatus("error");
            console.error("EmailJS Error Details:", error);

            // Provide more specific error messages
            let errorMessage =
                "Something went wrong. Please try again or contact us directly at psychdevs@gmail.com";

            if (error.text) {
                if (error.text.includes("Invalid public key")) {
                    errorMessage =
                        "Configuration error: Invalid public key. Please contact support.";
                } else if (error.text.includes("Service not found")) {
                    errorMessage =
                        "Configuration error: Service not found. Please contact support.";
                } else if (error.text.includes("Template not found")) {
                    errorMessage =
                        "Configuration error: Template not found. Please contact support.";
                } else if (error.text.includes("Network")) {
                    errorMessage =
                        "Network error. Please check your connection and try again.";
                }
            }

            setStatusMessage(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Header Section */}
            <section className="min-h-screen flex items-center justify-center">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                            Let's Build Something Amazing
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            Ready to transform your business with a stunning
                            website? Get in touch for a free consultation and
                            quote.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="min-h-screen flex items-center justify-center">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight text-foreground">
                                Get in Touch
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-muted-foreground">
                                We'd love to discuss your project and see how we
                                can help bring your vision to life. Here's how
                                you can reach us:
                            </p>

                            <dl className="mt-10 space-y-4 text-base leading-7 text-muted-foreground">
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Email</span>
                                        <Mail
                                            className="h-6 w-6 text-primary"
                                            aria-hidden="true"
                                        />
                                    </dt>
                                    <dd>
                                        <a
                                            href="mailto:psychdevs@gmail.com"
                                            className="hover:text-primary"
                                        >
                                            psychdevs@gmail.com
                                        </a>
                                    </dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">
                                            Telephone
                                        </span>
                                        <Phone
                                            className="h-6 w-6 text-primary"
                                            aria-hidden="true"
                                        />
                                    </dt>
                                    <dd>
                                        <a
                                            href="tel:+94750212605"
                                            className="hover:text-primary"
                                        >
                                            +94 750 212 605
                                        </a>
                                    </dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">
                                            Location
                                        </span>
                                        <MapPin
                                            className="h-6 w-6 text-primary"
                                            aria-hidden="true"
                                        />
                                    </dt>
                                    <dd>
                                        Remote-first team serving clients
                                        worldwide
                                    </dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">
                                            Response time
                                        </span>
                                        <Clock
                                            className="h-6 w-6 text-primary"
                                            aria-hidden="true"
                                        />
                                    </dt>
                                    <dd>We respond within 24 hours</dd>
                                </div>
                            </dl>

                            {/* FAQ Section */}
                            <div className="mt-10">
                                <h3 className="text-lg font-semibold text-foreground">
                                    Quick Questions
                                </h3>
                                <dl className="mt-4 space-y-4 text-sm">
                                    <div>
                                        <dt className="font-medium text-foreground">
                                            How much does a website cost?
                                        </dt>
                                        <dd className="mt-1 text-muted-foreground">
                                            Our websites start at just $149 for
                                            basic sites, with most projects
                                            ranging from $149 to $399 depending
                                            on features needed.
                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="font-medium text-foreground">
                                            How long does it take?
                                        </dt>
                                        <dd className="mt-1 text-muted-foreground">
                                            Most simple websites are completed
                                            within 1-2 weeks. More complex sites
                                            take 2-4 weeks.
                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="font-medium text-foreground">
                                            Do you offer ongoing support?
                                        </dt>
                                        <dd className="mt-1 text-muted-foreground">
                                            Yes! We provide maintenance,
                                            updates, and support packages for
                                            all our clients.
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-card p-8 rounded-2xl border shadow-sm">
                            <h2 className="text-xl font-semibold text-foreground mb-6">
                                Start Your Project
                            </h2>

                            {/* Status Message - Only show errors */}
                            {submitStatus === "error" && (
                                <div className="p-4 rounded-md bg-red-50 text-red-800 border border-red-200">
                                    {statusMessage}
                                </div>
                            )}

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="first-name"
                                            className="block text-sm font-medium text-foreground"
                                        >
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            id="first-name"
                                            autoComplete="given-name"
                                            required
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="last-name"
                                            className="block text-sm font-medium text-foreground"
                                        >
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            id="last-name"
                                            autoComplete="family-name"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-foreground"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="company"
                                        className="block text-sm font-medium text-foreground"
                                    >
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        id="company"
                                        autoComplete="organization"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        className="mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-foreground"
                                    >
                                        Phone Number (Optional)
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        autoComplete="tel"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="projectType"
                                        className="block text-sm font-medium text-foreground"
                                    >
                                        Project Type
                                    </label>
                                    <select
                                        name="projectType"
                                        id="projectType"
                                        value={formData.projectType}
                                        onChange={handleInputChange}
                                        className="mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                    >
                                        <option value="">
                                            Select a project type
                                        </option>
                                        <option value="New Website">
                                            New Website
                                        </option>
                                        <option value="Website Redesign">
                                            Website Redesign
                                        </option>
                                        <option value="E-commerce Store">
                                            E-commerce Store
                                        </option>
                                        <option value="Web Application">
                                            Web Application
                                        </option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        htmlFor="budget"
                                        className="block text-sm font-medium text-foreground"
                                    >
                                        Budget Range
                                    </label>
                                    <select
                                        name="budget"
                                        id="budget"
                                        value={formData.budget}
                                        onChange={handleInputChange}
                                        className="mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                    >
                                        <option>Select your budget</option>
                                        <option>$149 - $249</option>
                                        <option>$250 - $399</option>
                                        <option>$400 - $600</option>
                                        <option>$600+</option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-foreground"
                                    >
                                        Project Details
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        required
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Tell us about your project, goals, and any specific requirements..."
                                        className="mt-2 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full rounded-md bg-primary px-4 py-3 text-white font-semibold hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting
                                        ? "Sending..."
                                        : submitStatus === "success"
                                        ? "Email sent"
                                        : "Send Project Inquiry"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
