import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"

const navigation = {
  main: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
    {
      name: "GitHub",
      href: "#",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
  ],
}

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-display text-xl font-bold">AI Agency</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              We are a lean startup agency specializing in AI-powered web design and software solutions.
            </p>
            <div className="flex space-x-4 mt-4">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-2xl"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-7 w-7" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold mb-2">Contact Us</h3>
            <p className="text-sm text-muted-foreground">Email: <a href="mailto:hello@aiagency.com" className="text-primary underline">hello@aiagency.com</a></p>
            <p className="text-sm text-muted-foreground">Phone: <a href="tel:+1234567890" className="text-primary underline">+1 (234) 567-890</a></p>
            <p className="text-sm text-muted-foreground">Location: 123 AI Street, Tech City, World</p>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} AI Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 