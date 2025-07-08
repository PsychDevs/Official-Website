import Link from "next/link"
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react"

const navigation = {
  main: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
    {
      name: "X",
      href: "#",
      icon: Twitter,
    },
  ],
}

export function Footer() {
  return (
    <footer className="border-t bg-background/90">
      <div className="container py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 text-center md:text-left">
          <div className="space-y-4 text-center md:text-left">
            <Link href="/" className="flex items-center justify-center md:justify-start space-x-2">
              <span className="font-display text-xl font-bold">PsychDevs</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-3xl">
              We are a digital agency specializing in modern web development and custom software solutions for businesses of all sizes. We are a team of passionate developers and designers to provide the best possible service to our clients. 
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
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
          <div className="space-y-4 md:text-right">
            <h3 className="text-sm font-semibold mb-2">Contact Us</h3>
            <p className="text-sm text-muted-foreground">Email: <a href="mailto:psychdevs@gmail.com" className="text-primary underline">psychdevs@gmail.com</a></p>
            <p className="text-sm text-muted-foreground">Phone: <a href="tel:+94750212605" className="text-primary underline">+94 75 021 2605</a></p>
            {/* <p className="text-sm text-muted-foreground">Location: 123 AI Street, Tech City, World</p> */}
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} PsychDevs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 