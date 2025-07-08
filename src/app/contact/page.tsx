import { Mail, Phone, Instagram, Facebook, Linkedin, Twitter, Send } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 sm:py-40">
        <div className="container pt-20">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-8">
              Let's Connect
            </h1>
            <p className="text-xl leading-8 text-muted-foreground mb-8">
              Ready to start your project or have a question? Reach out and let's build something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Card & Form Section */}
      <section className="py-8 sm:py-16 px-4">
        <div className="container grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Card */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center justify-center">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Details</h2>
            <div className="flex flex-col gap-4 mb-6 w-full">
              <div className="flex items-center gap-3 justify-center">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:psychdevs@gmail.com" className="text-primary underline">psychdevs@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+94750212605" className="text-primary underline">+94 75 021 2605</a>
              </div>
            </div>
            <div className="flex justify-center gap-4 mb-6">
              <a href="#" className="text-primary hover:text-white transition"><Instagram className="h-7 w-7" /></a>
              <a href="#" className="text-primary hover:text-white transition"><Facebook className="h-7 w-7" /></a>
              <a href="#" className="text-primary hover:text-white transition"><Linkedin className="h-7 w-7" /></a>
              <a href="#" className="text-primary hover:text-white transition"><Twitter className="h-7 w-7" /></a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-xl p-8 flex flex-col gap-6 backdrop-blur-md">
            <h2 className="text-2xl font-bold text-white mb-2">Send a Message</h2>
            <div className="relative">
              <input type="text" id="name" name="name" required className="peer w-full bg-transparent border-b-2 border-gray-600 focus:border-primary text-white py-3 px-2 outline-none placeholder-transparent transition" placeholder="Your Name" />
              <label htmlFor="name" className="absolute left-2 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:text-primary peer-focus:text-xs">Your Name</label>
            </div>
            <div className="relative">
              <input type="email" id="email" name="email" required className="peer w-full bg-transparent border-b-2 border-gray-600 focus:border-primary text-white py-3 px-2 outline-none placeholder-transparent transition" placeholder="Your Email" />
              <label htmlFor="email" className="absolute left-2 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:text-primary peer-focus:text-xs">Your Email</label>
            </div>
            <div className="relative">
              <textarea id="message" name="message" rows={4} required className="peer w-full bg-transparent border-b-2 border-gray-600 focus:border-primary text-white py-3 px-2 outline-none placeholder-transparent transition resize-none" placeholder="Your Message" />
              <label htmlFor="message" className="absolute left-2 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:text-primary peer-focus:text-xs">Your Message</label>
            </div>
            <Button type="submit" size="lg" className="w-full flex items-center justify-center gap-2 mt-2">
              Send Message <Send className="h-5 w-5" />
            </Button>
          </form>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="py-12 sm:py-20">
        <div className="container max-w-2xl mx-auto text-left">
          <h3 className="text-2xl font-bold text-foreground mb-4">What happens next?</h3>
          <ul className="text-lg text-muted-foreground space-y-2">
            <li>✅ We'll reply within 24 hours.</li>
            <li>✅ We'll discuss your needs and goals.</li>
            <li>✅ You'll get a clear plan and next steps—no pressure, no obligation.</li>
          </ul>
        </div>
      </section>
    </div>
  )
} 