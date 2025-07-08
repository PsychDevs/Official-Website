"use client"
import Link from 'next/link'
import { ArrowRight, Code, Layout, Zap, Smartphone, ShoppingCart, Cpu, UserCheck, Clock, LifeBuoy, TrendingUp, BadgeDollarSign, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/Button"
import { useState } from 'react'

const features = [
  {
    name: "Web Design",
    description: "Modern, responsive websites tailored to your brand and audience.",
    icon: Layout,
  },
  {
    name: "Custom Software",
    description: "Powerful, scalable software solutions built for your business needs.",
    icon: Code,
  },
  {
    name: "Branding & Identity",
    description: "Logo design, style guides, and marketing materials to elevate your brand.",
    icon: Zap,
  },
  {
    name: "E-commerce Development",
    description: "Robust online stores with seamless shopping experiences.",
    icon: ShoppingCart,
  },
  {
    name: "Mobile App Development",
    description: "Cross-platform mobile apps for iOS and Android.",
    icon: Smartphone,
  },
  {
    name: "AI Integrations (Optional)",
    description: "Enhance your products with smart automation and analytics.",
    icon: Cpu,
  },
]

const exampleSites = [
  {
    name: 'E-commerce Store',
    description: 'Sell products online with a beautiful, secure, and scalable shop.',
    icon: ShoppingCart,
  },
  {
    name: 'Portfolio Website',
    description: 'Showcase your work and skills with a modern, responsive portfolio.',
    icon: Layout,
  },
  {
    name: 'SaaS Dashboard',
    description: 'Custom dashboards for SaaS products, analytics, and user management.',
    icon: Cpu,
  },
  {
    name: 'Company Blog',
    description: 'Engage your audience and boost SEO with a fast, easy-to-manage blog.',
    icon: Code,
  },
  {
    name: 'Booking Platform',
    description: 'Let customers book appointments or services online with ease.',
    icon: Smartphone,
  },
  {
    name: 'Branding & Landing Page',
    description: 'High-converting landing pages and branding sites for your business.',
    icon: Zap,
  },
]

const whyChoose = [
  {
    name: 'Personalized Approach',
    description: 'Every project is tailored to your unique needs and goals.',
    icon: UserCheck,
  },
  {
    name: 'Fast Delivery',
    description: 'We deliver high-quality work on time, every time.',
    icon: Clock,
  },
  {
    name: 'Ongoing Support',
    description: 'We\'re here for you after launch with reliable support.',
    icon: LifeBuoy,
  },
  {
    name: 'Cutting-Edge Tech',
    description: 'We use the latest tools and best practices.',
    icon: TrendingUp,
  },
  {
    name: 'Transparent Pricing',
    description: 'No hidden fees, clear project scopes.',
    icon: BadgeDollarSign,
  },
  {
    name: 'Proven Results',
    description: 'Our clients love the results we deliver.',
    icon: Star,
  },
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Founder, Bloom Boutique',
    avatar: '/avatars/sarah.jpg',
    quote: 'PsychDevs delivered our e-commerce site ahead of schedule and exceeded our expectations. The team was responsive, creative, and truly cared about our success.'
  },
  {
    name: 'David Kim',
    role: 'CTO, FinTechPro',
    avatar: '/avatars/david.jpg',
    quote: 'The custom dashboard PsychDevs built for us is fast, beautiful, and easy to use. Their process was smooth and transparent from start to finish.'
  },
  {
    name: 'Emily Chen',
    role: 'Marketing Lead, HealthSync',
    avatar: '/avatars/emily.jpg',
    quote: 'We loved working with PsychDevs! Our new website looks amazing and our traffic has doubled since launch.'
  },
  {
    name: 'Michael Lee',
    role: 'CEO, BookItNow',
    avatar: '/avatars/michael.jpg',
    quote: 'The booking platform they built for us is robust and user-friendly. Highly recommend PsychDevs for any digital project.'
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 sm:py-32">
        <div className="container relative flex flex-col items-center justify-center">
          <div className="mx-auto max-w-6xl text-center">
            <h1 className="font-display text-3xl sm:text-6xl font-bold tracking-tight text-foreground max-w-6xl mx-auto">
             Modern Websites | Custom Software
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We deliver robust digital solutions tailored to your needs
            </p>
            <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-center md:gap-6 w-full max-w-md mx-auto">
              <Button asChild size="lg" className="w-full md:w-auto md:h-12 md:px-8">
                <Link href="/contact" className="flex flex-row items-center text-black justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full md:w-auto md:h-12 md:px-8">
                <Link href="/portfolio" className="justify-center">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Example Sites Section */}
      <section className="py-24 sm:py-32 px-4">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Everything your Business needs
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Our comprehensive suite of services to cater your needs
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {exampleSites.map((site) => (
                <div key={site.name} className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 sm:p-8 rounded-2xl shadow-md text-center gap-y-2">
                  <site.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{site.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{site.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose PsychDevs Section */}
      <section className="py-20 sm:py-32 px-4">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Choose PsychDevs?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover what sets us apart and why clients love working with us
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {whyChoose.map((item) => (
                <div
                  key={item.name}
                  className="group relative rounded-2xl border bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 shadow-md transition-all hover:shadow-lg text-center flex flex-col items-center"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <TestimonialsCarousel />

      {/* CTA Section */}
      <section className="py-20 sm:py-32">
        <div className="container">
          <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6 py-24 text-center shadow-2xl border border-gray-700 sm:px-16">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to start your next project?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-200">
              Let PsychDevs help you build something amazing. Get in touch with us today.
            </p>
            <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-center md:gap-6 w-full max-w-md mx-auto">
              <Button asChild size="lg" className="w-full md:w-auto md:h-12 md:px-8">
                <Link href="/contact" className="flex flex-row items-center text-black justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full md:w-auto md:h-12 md:px-8">
                <Link href="/about" className="justify-center">About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Testimonials Carousel Section
function TestimonialsCarousel() {
  const [index, setIndex] = useState(0)
  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))

  // For center mode: get prev, current, next
  const getTestimonial = (i: number) => testimonials[(i + testimonials.length) % testimonials.length]
  const prevT = getTestimonial(index - 1)
  const currT = getTestimonial(index)
  const nextT = getTestimonial(index + 1)

  return (
    <section className="py-20 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-6">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Listen from the clients who trusted in PsychDevs
          </p>
        </div>
        <div className="relative flex flex-col items-center">
          {/* Carousel with 3 cards: prev, current, next */}
          <div className="relative flex items-center justify-center w-full max-w-7xl mx-auto" style={{ minHeight: 380 }}>
            {/* Left Arrow */}
            <button onClick={prev} title="Previous testimonial" className="absolute left-0 z-20 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 border border-white/20 hover:bg-primary/20 transition shadow-lg">
              <ChevronLeft className="h-6 w-6 text-primary" />
            </button>
            {/* Cards */}
            <div className="flex w-full items-center justify-center gap-0 max-w-7xl mx-auto relative">
              {/* Previous (blurred, scaled) */}
              <div className="hidden md:flex flex-col items-center justify-center w-2/5 h-[260px] mx-[-40px] opacity-60 scale-90 blur-sm pointer-events-none select-none transition-all duration-500 overflow-hidden z-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                <img src={prevT.avatar} alt={prevT.name} className="w-16 h-16 rounded-full object-cover border-2 border-primary/20 mb-2" />
                <blockquote className="text-md italic text-foreground/70 text-center">“{prevT.quote}”</blockquote>
                <div className="font-semibold text-primary text-base mt-2">{prevT.name}</div>
              </div>
              {/* Spacer for absolute main card */}
              <div className="w-full max-w-3xl h-[320px] mx-2" />
              {/* Next (blurred, scaled) */}
              <div className="hidden md:flex flex-col items-center justify-center w-2/5 h-[260px] mx-[-40px] opacity-60 scale-90 blur-sm pointer-events-none select-none transition-all duration-500 overflow-hidden z-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                <img src={nextT.avatar} alt={nextT.name} className="w-16 h-16 rounded-full object-cover border-2 border-primary/20 mb-2" />
                <blockquote className="text-md italic text-foreground/70 text-center">“{nextT.quote}”</blockquote>
                <div className="font-semibold text-primary text-base mt-2">{nextT.name}</div>
              </div>
              {/* Main card absolutely centered */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-3xl h-[320px] flex flex-col items-center justify-between bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-xl p-12 border border-white/20 mx-2 transition-all duration-500 overflow-hidden">
                <img src={currT.avatar} alt={currT.name} className="w-20 h-20 rounded-full object-cover border-4 border-primary/30 mb-4 shadow-lg" />
                <blockquote className="text-xl italic text-foreground mb-6 text-center">“{currT.quote}”</blockquote>
                <div className="font-semibold text-primary text-lg">{currT.name}</div>
                <div className="text-sm text-muted-foreground">{currT.role}</div>
              </div>
            </div>
            {/* Right Arrow */}
            <button onClick={next} title="Next testimonial" className="absolute right-0 z-20 translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 border border-white/20 hover:bg-primary/20 transition shadow-lg">
              <ChevronRight className="h-6 w-6 text-primary" />
            </button>
          </div>
          {/* Dots */}
          <div className="flex gap-2 mt-8">
            {testimonials.map((_, i) => (
              <span key={i} className={`h-2 w-2 rounded-full ${i === index ? 'bg-primary' : 'bg-gray-400/40'}`}></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 