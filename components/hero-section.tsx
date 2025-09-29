"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

const ArrowRightIcon = () => (
  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const PlayIcon = () => (
  <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2-2V8a2 2 0 012-2z"
    />
  </svg>
)

export function HeroSection() {
  const [showDemoMessage, setShowDemoMessage] = useState(false)

  const handleGetStarted = () => {
    const pricingSection = document.getElementById("pricing")
    if (pricingSection) {
      pricingSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const handleWatchDemo = () => {
    setShowDemoMessage(true)
    setTimeout(() => setShowDemoMessage(false), 3000) // Hide after 3 seconds
  }

  return (
    <section className="relative overflow-hidden">
      {showDemoMessage && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-card border border-border rounded-lg px-6 py-3 shadow-lg">
          <p className="text-sm text-foreground">🎬 Demo video coming soon!</p>
        </div>
      )}

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/20 to-primary/15" />

        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-accent/30 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute top-20 right-10 w-48 h-48 bg-primary/25 rounded-full blur-2xl animate-bounce"
            style={{ animationDelay: "1s", animationDuration: "3s" }}
          />
          <div
            className="absolute bottom-20 left-1/4 w-40 h-40 bg-accent/35 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-10 right-1/3 w-56 h-56 bg-primary/20 rounded-full blur-3xl animate-bounce"
            style={{ animationDelay: "0.5s", animationDuration: "4s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--accent)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-24 md:py-32 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-sm text-muted-foreground">
              ✨ Introducing Inspmatch
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl text-balance">
            The AI-powered app to <span className="text-accent">transform</span> product discovery on Shopify
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground text-pretty">
            Inspmatch lets your customers search by image and instantly find similar products in your store.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-base px-8" onClick={handleGetStarted}>
              Get Started Free
              <ArrowRightIcon />
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 bg-transparent" onClick={handleWatchDemo}>
              <PlayIcon />
              Watch Demo
            </Button>
          </div>

          <div className="mt-12 text-sm text-muted-foreground">AI that redefines product discovery</div>
        </div>
      </div>
    </section>
  )
}
