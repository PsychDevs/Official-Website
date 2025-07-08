"use client"
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { X } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with Next.js and Stripe integration.',
    category: 'Web Development',
    image: '/portfolio/ecommerce.jpg',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    link: '#',
  },
  {
    id: 2,
    title: 'AI Chatbot',
    description: 'Custom AI chatbot for customer service automation.',
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
    <div className="min-h-screen bg-background text-gray-900 dark:text-white px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Portfolio</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-0 flex flex-col group overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-40 w-full overflow-hidden">
                <img src={project.image} alt={project.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h2>
                <p className="mb-4 text-gray-600 dark:text-gray-300">{project.description}</p>
                <div className="mt-auto">
                  <span className="block text-sm font-semibold mb-1">Technologies:</span>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="inline-block bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 