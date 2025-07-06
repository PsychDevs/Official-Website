"use client"

import Link from 'next/link'
import { Calendar, Clock, Tag } from 'lucide-react'

const posts = [
  {
    id: 1,
    title: 'The Future of AI in Web Development',
    description: 'Exploring how artificial intelligence is transforming the way we build and maintain websites.',
    date: 'Mar 16, 2024',
    readTime: '6 min read',
    category: 'AI',
    image: '/blog/ai-web-dev.jpg',
    slug: 'future-of-ai-in-web-development',
  },
  {
    id: 2,
    title: 'Building Scalable Applications with Next.js',
    description: 'Learn how to create high-performance web applications using Next.js and modern best practices.',
    date: 'Mar 14, 2024',
    readTime: '8 min read',
    category: 'Development',
    image: '/blog/nextjs-scalable.jpg',
    slug: 'building-scalable-applications-with-nextjs',
  },
  {
    id: 3,
    title: 'The Rise of AI-Powered Design Tools',
    description: 'How AI is revolutionizing the design process and making it more efficient than ever.',
    date: 'Mar 12, 2024',
    readTime: '5 min read',
    category: 'Design',
    image: '/blog/ai-design.jpg',
    slug: 'rise-of-ai-powered-design-tools',
  },
  {
    id: 4,
    title: 'Optimizing Website Performance',
    description: "Essential tips and techniques for improving your website's speed and user experience.",
    date: 'Mar 10, 2024',
    readTime: '7 min read',
    category: 'Performance',
    image: '/blog/performance.jpg',
    slug: 'optimizing-website-performance',
  },
  {
    id: 5,
    title: 'The Impact of AI on Digital Marketing',
    description: 'How artificial intelligence is changing the landscape of digital marketing strategies.',
    date: 'Mar 8, 2024',
    readTime: '6 min read',
    category: 'Marketing',
    image: '/blog/ai-marketing.jpg',
    slug: 'impact-of-ai-on-digital-marketing',
  },
  {
    id: 6,
    title: 'Building Accessible Web Applications',
    description: 'Best practices for creating inclusive and accessible web applications for all users.',
    date: 'Mar 6, 2024',
    readTime: '8 min read',
    category: 'Accessibility',
    image: '/blog/accessibility.jpg',
    slug: 'building-accessible-web-applications',
  },
]

const categories = ['All', 'AI', 'Development', 'Design', 'Performance', 'Marketing', 'Accessibility']

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-gray-900 dark:text-white px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
        <div className="grid gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold mb-2">
                <Link href={`/blog/${post.slug}`} className="text-primary hover:underline">{post.title}</Link>
              </h2>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</div>
              <p className="text-gray-600 dark:text-gray-300">{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 