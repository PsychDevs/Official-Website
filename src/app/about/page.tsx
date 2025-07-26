"use client";
import {
    Code,
    Sparkles,
    Rocket,
    Heart,
    Users,
    Briefcase,
    Clock,
    DollarSign,
} from "lucide-react";

const values = [
    {
        name: "Design Excellence",
        description:
            "Beautiful, professional designs that represent your brand perfectly.",
        icon: Sparkles,
    },
    {
        name: "Clean Code",
        description: "Fast, secure websites built with modern best practices.",
        icon: Code,
    },
    {
        name: "Fast Delivery",
        description: "Quick turnaround times without compromising on quality.",
        icon: Rocket,
    },
    {
        name: "Client-Focused",
        description: "Your success is our priority. We work closely with you.",
        icon: Heart,
    },
];

const team = [
    {
        name: "Lasith Dissanayake",
        role: "Founder & Developer",
        image: "/team/lasith.jpg",
        bio: "Building digital dreams 💬",
    },
    {
        name: "Ashen Senarathne",
        role: "Web Developer",
        image: "/team/ashen.jpeg",
        bio: "Targeting the perfection 🥷",
    },
    {
        name: "Vihanga Tharuka",
        role: "Web Developer",
        image: "/team/vihanga.jpeg",
        bio: "Crafting seamless experiences 🖥️",
    },
    {
        name: "Vidumini Pathirage",
        role: "Talent Acquisition",
        image: "/team/vidumini.jpg",
        bio: "Collecting potential stars 🌟",
    },
];

const careers = [
    {
        title: "UI/UX Design Intern",
        type: "Part-time, Project-based",
        description:
            "Join us to learn user interface and user experience design while working on real client projects.",
        requirements: [
            "Basic knowledge of design principles",
            "Familiarity with Figma or similar design tools",
            "Passion for creating user-centered designs",
            "Available for part-time commitment",
        ],
        icon: Sparkles,
    },
];

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                            About PsychDevs
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            We are a team of entrepreneurs who believe that
                            every business deserves a professional website,
                            regardless of budget.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Values Section */}
            <section className="min-h-screen flex items-center justify-center">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Mission */}
                    <div className="mx-auto max-w-3xl text-center mb-20">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Our Mission
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            Making professional web design accessible and
                            affordable for every business.
                        </p>
                    </div>

                    {/* Values */}
                    <div className="mx-auto max-w-3xl text-center mb-16">
                        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                            Our Values
                        </h2>
                    </div>
                    <dl className="mx-auto grid max-w-5xl grid-cols-1 gap-x-8 gap-y-12 text-base leading-7 sm:grid-cols-2 lg:grid-cols-4 text-center">
                        {values.map((value) => (
                            <div
                                key={value.name}
                                className="flex flex-col items-center"
                            >
                                <dt className="font-semibold text-foreground">
                                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary mx-auto">
                                        <value.icon
                                            className="h-6 w-6 text-white"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <span className="text-center">
                                        {value.name}
                                    </span>
                                </dt>
                                <dd className="mt-2 text-muted-foreground text-center">
                                    {value.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            {/* Team Section */}
            <section className="min-h-screen flex items-center justify-center">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Meet Our Team
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            Our small but dedicated team is passionate about
                            creating exceptional digital experiences that help
                            businesses grow.
                        </p>
                    </div>
                    <ul
                        role="list"
                        className="mx-auto grid max-w-6xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 justify-items-center"
                    >
                        {team.map((person) => (
                            <li key={person.name} className="text-center">
                                <div className="aspect-square w-48 overflow-hidden rounded-2xl bg-gray-50 mx-auto">
                                    {person.image ? (
                                        <img
                                            src={person.image}
                                            alt={person.name}
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <div className="h-full w-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                                            <Users className="h-16 w-16 text-primary/40" />
                                        </div>
                                    )}
                                </div>
                                <h3 className="mt-4 text-base font-semibold leading-6 tracking-tight text-foreground text-center">
                                    {person.name}
                                </h3>
                                <p className="text-sm leading-6 text-primary text-center">
                                    {person.role}
                                </p>
                                <p className="mt-2 text-sm leading-6 text-muted-foreground text-center">
                                    {person.bio}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Careers Section */}
            <section className="min-h-screen flex items-center justify-center py-16 mt-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Join Our Growing Team
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            Looking for passionate interns to join our mission
                            of making quality web design accessible. Work on
                            real projects, gain valuable experience, and get
                            paid based on project completion.
                        </p>
                    </div>

                    <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 justify-items-center">
                        {careers.map((position) => (
                            <div
                                key={position.title}
                                className="group relative rounded-2xl border bg-card p-8 shadow-sm transition-all hover:shadow-md hover:border-primary/50 w-full max-w-lg"
                            >
                                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <position.icon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">
                                    {position.title}
                                </h3>
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                                        <Clock className="mr-1 h-3 w-3" />
                                        Part-time
                                    </span>
                                    <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                                        <DollarSign className="mr-1 h-3 w-3" />
                                        Project-based
                                    </span>
                                </div>
                                <p className="text-muted-foreground mb-6">
                                    {position.description}
                                </p>
                                <div className="space-y-2">
                                    <h4 className="font-medium text-foreground">
                                        Requirements:
                                    </h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        {position.requirements.map(
                                            (req, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-start"
                                                >
                                                    <span className="mr-2 text-primary">
                                                        •
                                                    </span>
                                                    {req}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                                <div className="mt-6">
                                    <a
                                        href={`mailto:psychdevs@gmail.com?subject=Internship Application - ${position.title}`}
                                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                                    >
                                        Apply Now
                                        <Briefcase className="ml-1 h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mx-auto mt-12 max-w-2xl text-center">
                        <div className="rounded-lg bg-primary/5 p-6 border border-primary/20">
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                                Why Intern with PsychDevs?
                            </h3>
                            <ul className="text-muted-foreground space-y-2 text-left max-w-lg mx-auto">
                                <li className="flex items-start">
                                    <span className="mr-2 text-primary">✓</span>
                                    Work on real client projects from day one
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-primary">✓</span>
                                    Flexible part-time schedule that fits your
                                    studies
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-primary">✓</span>
                                    Get paid for completed projects
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 text-primary">✓</span>
                                    Build a strong portfolio with real-world
                                    projects
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
