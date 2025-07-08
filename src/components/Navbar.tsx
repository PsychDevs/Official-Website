"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-background/90 h-16 px-4 flex items-center justify-between",
        isScrolled && "shadow-sm"
      )}
    >
      <nav className="w-full flex h-16 items-center justify-between">
        <div className="mr-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-display text-xl font-bold">PsychDevs</span>
          </Link>
        </div>
        <div className="hidden md:flex md:items-center md:justify-center flex-1">
          <div className="flex items-center space-x-6 ml-auto">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4 md:ml-8">
        </div>
      </nav>
      <div className="flex flex-1 items-center justify-end md:hidden px-4">
        <Button
          variant="ghost"
          size="icon"
          className="ml-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-start pt-24 px-6 md:hidden">
          <div className="flex flex-col w-full gap-y-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block rounded-lg px-3 py-3 text-lg font-semibold transition-colors hover:bg-accent hover:text-accent-foreground text-center",
                  pathname === item.href
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
} 