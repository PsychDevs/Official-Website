import { Code, Sparkles, Rocket, Heart, Users, Award, Clock, Target } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/Button"

const stats = [
  { id: 1, name: 'Projects Completed', value: '50+', icon: Award },
  { id: 2, name: 'Happy Clients', value: '30+', icon: Users },
  { id: 3, name: 'Years Experience', value: '3+', icon: Clock },
  { id: 4, name: 'Success Rate', value: '98%', icon: Target },
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
    description: 'We streamline processes and deliver results faster without compromising quality.',
    icon: Rocket,
  },
  {
    name: 'Partnership',
    description: 'We build long-term relationships with our clients, treating every project as a collaboration.',
    icon: Heart,
  },
]

const team = [
  {
    name: 'Alex Kim',
    role: 'Founder & Lead Developer',
    image: '/team/alex.jpg',
    bio: 'Visionary leader with a passion for creating beautiful, functional code and exceptional user experiences.',
  },
  {
    name: 'Jordan Lee',
    role: 'Senior Software Engineer',
    image: '/team/jordan.jpg',
    bio: 'Expert in modern web technologies and scalable software architecture.',
  },
  {
    name: 'Morgan Smith',
    role: 'UI/UX Designer',
    image: '/team/morgan.jpg',
    bio: 'Creates intuitive, delightful experiences that users love and businesses trust.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 sm:py-40">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-12">
              About PsychDevs
            </h1>
            <p className="text-xl leading-8 text-muted-foreground mb-8">
              We're a passionate team of developers, designers, and digital strategists dedicated to transforming ideas into powerful digital solutions.
            </p>
            <p className="text-xl leading-8 text-muted-foreground mb-8">
              Founded with a vision to make exceptional web development accessible to businesses of all sizes, we combine technical expertise with creative innovation to deliver results that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/*
        Our Story, Mission & Vision, and Our Values sections are commented out for now.
        Uncomment and update when ready to showcase more about the company!
      */}

      {/* Future: Careers/Team Section can go here */}

      {/* CTA Section */}
      <section className="py-20 sm:py-32">
        <div className="container">
          <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6 py-24 text-center shadow-2xl border border-gray-700 sm:px-16">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to work with us?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-200">
              Let's discuss your project and see how we can help bring your vision to life.
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