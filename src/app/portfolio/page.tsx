"use client"
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { X } from 'lucide-react'
import { Layout, Code, Zap, Smartphone, ShoppingCart, Cpu } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform with seamless checkout and product management.',
    category: 'Web Development',
    image: '/portfolio/ecommerce.jpg',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    link: '#',
  },
  {
    id: 2,
    title: 'AI Chatbot',
    description: 'A custom AI chatbot for customer service automation.',
    category: 'AI Integration',
    image: '/portfolio/chatbot.jpg',
    technologies: ['Python', 'TensorFlow', 'React', 'Node.js'],
    link: '#',
  },
  {
    id: 3,
    title: 'Brand Identity',
    description: 'Complete brand identity design for a tech startup.',
    category: 'Branding',
    image: '/portfolio/branding.jpg',
    technologies: ['Figma', 'Illustrator', 'Photoshop'],
    link: '#',
  },
  {
    id: 4,
    title: 'SaaS Dashboard',
    description: 'Analytics dashboard for a SaaS platform.',
    category: 'Web Development',
    image: '/portfolio/dashboard.jpg',
    technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    link: '#',
  },
  {
    id: 5,
    title: 'Mobile App',
    description: 'Cross-platform mobile app for fitness tracking.',
    category: 'Mobile Development',
    image: '/portfolio/mobileapp.jpg',
    technologies: ['React Native', 'Firebase', 'Redux'],
    link: '#',
  },
  {
    id: 6,
    title: 'AI Content Generator',
    description: 'AI-powered content generation tool for marketers.',
    category: 'AI Integration',
    image: '/portfolio/aicontent.jpg',
    technologies: ['Python', 'GPT-3', 'FastAPI', 'React'],
    link: '#',
  },
]

const categories = ['All', 'Web Development', 'AI Integration', 'Branding', 'Mobile Development']

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 sm:py-40">
        <div className="container pt-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-10">
              Our Portfolio
            </h1>
            <p className="text-xl leading-8 text-muted-foreground mb-8">
              Explore some of the projects we've delivered for clients across industries. We combine creativity, technology, and strategy to build digital products that make an impact.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-16 sm:py-24 px-4">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <div key={project.title} className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-lg p-0 flex flex-col group overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 w-full overflow-hidden flex items-center justify-center">
                  <img src={project.image} alt={project.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-semibold text-white mb-1">{project.title}</h2>
                  <span className="inline-block text-xs font-medium text-primary mb-2">{project.category}</span>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="inline-block bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
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
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 