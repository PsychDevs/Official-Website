import { Check, Layout, Code, Zap, Cpu } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    title: 'AI-Powered Web Design',
    description: 'Modern, responsive websites designed with the help of AI for optimal user experience and conversion.',
    icon: Layout,
    image: '/services/webdesign.jpg',
    features: ['Custom UI/UX', 'SEO Optimization', 'Performance Tuning'],
  },
  {
    title: 'Software Solutions',
    description: 'Custom SaaS, automation tools, and integrations tailored to your business needs.',
    icon: Code,
    image: '/services/software.jpg',
    features: ['API Development', 'Cloud Integration', 'DevOps Setup'],
  },
  {
    title: 'Branding & Identity',
    description: 'Logo design, style guides, and marketing materials to elevate your brand.',
    icon: Zap,
    image: '/services/branding.jpg',
    features: ['Brand Strategy', 'Logo & Visuals', 'Marketing Assets'],
  },
  {
    title: 'AI Integrations',
    description: 'Chatbots, automation, and data analysis powered by the latest AI technologies.',
    icon: Cpu,
    image: '/services/ai.jpg',
    features: ['AI Chatbots', 'Process Automation', 'Data Insights'],
  },
]

const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    price: { monthly: '$1,999' },
    description: 'Perfect for small businesses and startups',
    features: [
      '5 Pages Website',
      'Basic SEO Setup',
      'Contact Form',
      'Social Media Integration',
      '1 Month Support',
    ],
    featured: false,
  },
  {
    name: 'Pro',
    id: 'tier-pro',
    price: { monthly: '$4,999' },
    description: 'Ideal for growing businesses',
    features: [
      '10 Pages Website',
      'Advanced SEO',
      'Custom Features',
      'E-commerce Integration',
      '3 Months Support',
      'Performance Optimization',
      'Analytics Setup',
    ],
    featured: true,
  },
  {
    name: 'Custom',
    id: 'tier-custom',
    price: { monthly: 'Custom' },
    description: 'Tailored solutions for enterprise needs',
    features: [
      'Unlimited Pages',
      'Custom Development',
      'AI Integration',
      'Enterprise Features',
      'Priority Support',
      'Dedicated Team',
      'SLA Agreement',
    ],
    featured: false,
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-gray-900 dark:text-white flex items-center justify-center px-4">
      <div className="w-full max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Our Services</h1>
        <div className="mb-10 grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-0 flex flex-col group overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-32 w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                <img src={service.image} alt={service.title} className="object-cover w-24 h-24 rounded-xl shadow-lg border-4 border-white dark:border-gray-900 -mt-8" />
                <service.icon className="absolute top-4 right-4 h-8 w-8 text-primary/70" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">{service.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{service.description}</p>
                <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 text-sm mb-4">
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Pricing Tiers</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Starter</h3>
              <p className="text-3xl font-bold mb-2">$1,999</p>
              <p className="mb-4 text-gray-500 dark:text-gray-400">For small businesses and startups</p>
              <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 text-sm mb-4">
                <li>5 Pages Website</li>
                <li>Basic SEO</li>
                <li>1 Month Support</li>
              </ul>
              <a href="/contact" className="inline-block rounded bg-primary px-4 py-2 text-white font-semibold hover:bg-primary/90 transition">Get Started</a>
            </div>
            <div className="bg-primary text-white rounded-lg shadow p-6 text-center border-2 border-primary">
              <h3 className="text-xl font-semibold mb-2">Pro</h3>
              <p className="text-3xl font-bold mb-2">$4,999</p>
              <p className="mb-4">For growing businesses</p>
              <ul className="list-disc list-inside text-white/80 text-sm mb-4">
                <li>10 Pages Website</li>
                <li>Advanced SEO</li>
                <li>3 Months Support</li>
                <li>Performance Optimization</li>
              </ul>
              <a href="/contact" className="inline-block rounded bg-white text-primary px-4 py-2 font-semibold hover:bg-gray-100 transition">Get Started</a>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Custom</h3>
              <p className="text-3xl font-bold mb-2">Custom</p>
              <p className="mb-4 text-gray-500 dark:text-gray-400">Tailored solutions for enterprise</p>
              <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 text-sm mb-4">
                <li>Unlimited Pages</li>
                <li>Custom Development</li>
                <li>AI Integration</li>
                <li>Priority Support</li>
              </ul>
              <a href="/contact" className="inline-block rounded bg-primary px-4 py-2 text-white font-semibold hover:bg-primary/90 transition">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 