import { Layout, Code, Zap, Smartphone, ShoppingCart, Cpu } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const services = [
  {
    title: 'Web Development',
    description: 'Modern, responsive websites tailored to your brand and audience.',
    icon: Layout,
    features: ['Custom UI/UX', 'SEO Optimization', 'Performance Tuning'],
  },
  {
    title: 'Custom Software',
    description: 'Powerful, scalable software solutions built for your business needs.',
    icon: Code,
    features: ['API Development', 'Cloud Integration', 'Automation'],
  },
  {
    title: 'Branding & Identity',
    description: 'Logo design, style guides, and marketing materials to elevate your brand.',
    icon: Zap,
    features: ['Brand Strategy', 'Logo & Visuals', 'Marketing Assets'],
  },
  {
    title: 'E-commerce Development',
    description: 'Robust online stores with seamless shopping experiences.',
    icon: ShoppingCart,
    features: ['Product Catalog', 'Payment Integration', 'Order Management'],
  },
  {
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps for iOS and Android.',
    icon: Smartphone,
    features: ['iOS & Android', 'Push Notifications', 'App Store Launch'],
  },
  {
    title: 'AI Integrations',
    description: 'Enhance your products with smart automation and analytics.',
    icon: Cpu,
    features: ['Chatbots', 'Process Automation', 'Data Insights'],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <div className="container pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
              Our Services
            </h1>
            <p className="text-xl leading-8 text-muted-foreground mb-8">
              We help businesses grow with beautiful web design, robust software, and digital solutions tailored to your needs.
            </p>
            <Button asChild size="lg">
              <Link href="/contact" className="flex flex-row items-center justify-center">
                Get a Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="py-16 sm:py-24 px-4">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
                <service.icon className="h-10 w-10 text-primary mb-4" />
                <h2 className="text-xl font-semibold text-white mb-2">{service.title}</h2>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="text-sm text-gray-400 mb-2 space-y-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center justify-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32">
        <div className="container">
          <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6 py-24 text-center shadow-2xl border border-gray-700 sm:px-16">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to start your project?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-200">
              Let's talk about your goals and how we can help you achieve them.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                variant="secondary"
                size="lg"
                className="bg-primary text-black hover:bg-primary/90"
                asChild
              >
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button variant="ghost" size="lg" className="text-white hover:bg-gray-700" asChild>
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 