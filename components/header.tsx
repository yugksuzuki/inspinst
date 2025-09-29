"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"

const MenuIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const XIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showDocsMessage, setShowDocsMessage] = useState(false)

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    // Close mobile menu after clicking
    setIsMenuOpen(false)
  }

  const handleGetStarted = () => {
    const pricingSection = document.getElementById("pricing")
    if (pricingSection) {
      pricingSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    setIsMenuOpen(false) // Close mobile menu if open
  }

  const handleDocsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setShowDocsMessage(true)
    setTimeout(() => setShowDocsMessage(false), 3000) // Hide after 3 seconds
    setIsMenuOpen(false) // Close mobile menu if open
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {showDocsMessage && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-card border border-border rounded-lg px-6 py-3 shadow-lg">
          <p className="text-sm text-foreground">📚 Documentation coming soon!</p>
        </div>
      )}

      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Image src="/images/inspmatch-logo.png" alt="Inspmatch" width={32} height={32} className="h-8 w-auto" />
          <span className="text-xl font-bold text-foreground"></span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            onClick={(e) => handleSmoothScroll(e, "features")}
            className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            Features
          </a>
          <a
            href="#testimonials"
            onClick={(e) => handleSmoothScroll(e, "testimonials")}
            className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            Testimonials
          </a>
          <a
            href="#pricing"
            onClick={(e) => handleSmoothScroll(e, "pricing")}
            className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            Pricing
          </a>
          <a
            href="#"
            onClick={handleDocsClick}
            className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            Docs
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm" onClick={handleGetStarted}>
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <a
              href="#features"
              onClick={(e) => handleSmoothScroll(e, "features")}
              className="block text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Features
            </a>
            <a
              href="#testimonials"
              onClick={(e) => handleSmoothScroll(e, "testimonials")}
              className="block text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleSmoothScroll(e, "pricing")}
              className="block text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Pricing
            </a>
            <a
              href="#"
              onClick={handleDocsClick}
              className="block text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Docs
            </a>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
              <Button size="sm" onClick={handleGetStarted}>
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
