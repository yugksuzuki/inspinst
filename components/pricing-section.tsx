"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const Bird = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 7h.01" />
    <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
    <path d="m20 7 2 .5-2 .5" />
    <path d="M10 18v3" />
    <path d="M14 17.75V21" />
    <path d="M7 18a6 6 0 0 0 3.84-10.61" />
  </svg>
)

const Mail = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-10 5L2 7" />
  </svg>
)

const Bell = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="m13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
)

export function PricingSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          signupType: "early_access",
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Erro ao cadastrar email")
      }

      setIsSubmitted(true)
      setEmail("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro inesperado")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="pricing" className="py-24 bg-muted/20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Bird className="h-8 w-8 text-accent mr-3 animate-bounce" />
            <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/20">
              Coming Soon
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Get Early Bird Access
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Inspmatch is currently in development. Be the first to know when we launch and get exclusive early access to
            transform your Shopify store.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <Card className="border-border/50 bg-card/50 backdrop-blur relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5" />
            <div className="absolute top-4 right-4 opacity-10">
              <Bird className="h-24 w-24 text-accent" />
            </div>

            <CardHeader className="text-center relative z-10">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Mail className="h-6 w-6 text-accent" />
                Join the Waitlist
              </CardTitle>
              <CardDescription className="mt-2 text-base">
                Get notified when Inspmatch launches and receive exclusive early access benefits
              </CardDescription>
            </CardHeader>

            <CardContent className="relative z-10">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 h-12 text-base"
                      disabled={isLoading}
                    />
                    <Button type="submit" className="h-12 px-8 font-medium" disabled={isLoading}>
                      <Bell className="h-4 w-4 mr-2" />
                      {isLoading ? "Enviando..." : "Notify Me"}
                    </Button>
                  </div>

                  {error && (
                    <div className="text-center p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-sm text-red-600">{error}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border/50">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">🎯</div>
                      <div className="text-sm font-medium text-foreground mt-1">Early Access</div>
                      <div className="text-xs text-muted-foreground">Be first to try</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">💰</div>
                      <div className="text-sm font-medium text-foreground mt-1">Special Pricing</div>
                      <div className="text-xs text-muted-foreground">Launch discounts</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">🚀</div>
                      <div className="text-sm font-medium text-foreground mt-1">Priority Support</div>
                      <div className="text-xs text-muted-foreground">Direct access</div>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="h-16 w-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bird className="h-8 w-8 text-accent animate-pulse" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">You're on the list! 🎉</h3>
                  <p className="text-muted-foreground">
                    We'll notify you as soon as Inspmatch is ready to transform your store.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
