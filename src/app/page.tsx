"use client"
import Link from 'next/link'
import { ArrowRight, Code, Cpu, Layout, Zap } from 'lucide-react'
import { Button } from "@/components/ui/button"

const features = [
  {
    name: "AI-Powered Design",
    description: "Leverage the power of artificial intelligence to create stunning, user-centric designs.",
    icon: Layout,
  },
  {
    name: "Modern Development",
    description: "Built with the latest technologies and best practices for optimal performance.",
    icon: Code,
  },
  {
    name: "Smart Automation",
    description: "Automate repetitive tasks and streamline your workflow with AI integration.",
    icon: Zap,
  },
  {
    name: "Advanced Analytics",
    description: "Gain valuable insights with AI-driven analytics and reporting tools.",
    icon: Cpu,
  },
]

const tools = [
  { name: 'ChatGPT', logo: '/chatgpt.svg' },
  { name: 'Midjourney', logo: '/midjourney.svg' },
  { name: 'Framer', logo: '/framer.svg' },
  { name: 'Copilot', logo: '/copilot.svg' },
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="container relative">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Transform Your Digital Presence with{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
                  AI-Powered Solutions
                </span>
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We help businesses create beautiful, performant, and intelligent digital products that drive growth and innovation.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Powered by the Best AI Tools
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                We leverage cutting-edge AI tools to deliver exceptional results
              </p>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-4">
              {tools.map((tool) => (
                <div key={tool.name} className="flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-800 p-8">
                  <img
                    className="max-h-12 w-full object-contain"
                    src={tool.logo}
                    alt={tool.name}
                  />
                  <p className="mt-4 text-sm font-semibold text-gray-900 dark:text-white">{tool.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything you need to build amazing products
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our comprehensive suite of services combines cutting-edge technology with expert craftsmanship.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="group relative rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
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
              Ready to transform your digital presence?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-foreground/90">
              Let's work together to create something amazing. Get in touch with us today.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button variant="ghost" size="lg" className="text-white hover:bg-primary-600" asChild>
                <Link href="/services">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 