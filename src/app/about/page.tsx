import { Code, Sparkles, Rocket, Heart } from 'lucide-react'

const stats = [
  { id: 1, name: 'Projects Completed', value: '50+' },
  { id: 2, name: 'Happy Clients', value: '30+' },
  { id: 3, name: 'Years Experience', value: '3+' },
  { id: 4, name: 'AI Tools Used', value: '10+' },
]

const values = [
  {
    name: 'Innovation',
    description: 'We constantly explore new technologies and methodologies to stay ahead of the curve.',
    icon: Sparkles,
  },
  {
    name: 'Quality',
    description: 'We maintain the highest standards in our code and design, ensuring robust and scalable solutions.',
    icon: Code,
  },
  {
    name: 'Efficiency',
    description: 'We leverage AI to streamline processes and deliver results faster without compromising quality.',
    icon: Rocket,
  },
  {
    name: 'Sustainability',
    description: 'We build solutions that are environmentally conscious and socially responsible.',
    icon: Heart,
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-gray-900 dark:text-white flex items-center justify-center px-4">
      <div className="w-full max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About AI Agency</h1>
        <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
          We are a lean startup agency specializing in AI-powered web design and software solutions. Our mission is to empower businesses worldwide with beautiful, performant, and intelligent digital products.
        </p>
        <h2 className="text-2xl font-semibold mb-2 mt-8">Our Vision</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          To be the global leader in AI-driven digital transformation, making advanced technology accessible and impactful for every business.
        </p>
        <h2 className="text-2xl font-semibold mb-2 mt-8">Meet the Team</h2>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <div className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-xl shadow p-6 w-64">
            <img src="/team/alex.jpg" alt="Alex Kim" className="w-20 h-20 rounded-full object-cover mb-3 border-4 border-primary/30" />
            <span className="block font-semibold text-lg">Alex Kim</span>
            <span className="block text-sm text-gray-500 dark:text-gray-400 mb-2">Founder & Lead Developer</span>
            <p className="text-sm text-muted-foreground text-center">Visionary leader with a passion for AI and beautiful code.</p>
          </div>
          <div className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-xl shadow p-6 w-64">
            <img src="/team/jordan.jpg" alt="Jordan Lee" className="w-20 h-20 rounded-full object-cover mb-3 border-4 border-primary/30" />
            <span className="block font-semibold text-lg">Jordan Lee</span>
            <span className="block text-sm text-gray-500 dark:text-gray-400 mb-2">AI Solutions Architect</span>
            <p className="text-sm text-muted-foreground text-center">Expert in machine learning and automation for business growth.</p>
          </div>
          <div className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-xl shadow p-6 w-64">
            <img src="/team/morgan.jpg" alt="Morgan Smith" className="w-20 h-20 rounded-full object-cover mb-3 border-4 border-primary/30" />
            <span className="block font-semibold text-lg">Morgan Smith</span>
            <span className="block text-sm text-gray-500 dark:text-gray-400 mb-2">UI/UX Designer</span>
            <p className="text-sm text-muted-foreground text-center">Designs intuitive, delightful experiences for every user.</p>
          </div>
        </div>
      </div>
    </div>
  )
} 