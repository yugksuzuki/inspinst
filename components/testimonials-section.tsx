import { Card, CardContent } from "@/components/ui/card"

const Star = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const testimonials = [
  {
    name: "Anna",
    role: "Owner of TrendyShoes",
    content: "Inspmatch made product discovery effortless. Our conversion rates jumped by 20% in the first month.",
    rating: 5,
  },
  {
    name: "Leo",
    role: "CEO at UrbanStyle",
    content: "Customers spend more time browsing because they can search visually. It's a game-changer for engagement.",
    rating: 5,
  },
  {
    name: "Maya",
    role: "Shopify Merchant",
    content: "Integration was quick and painless. Inspmatch feels like a natural part of our store.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Loved by Shopify merchants worldwide
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Here's what store owners are saying about Inspmatch.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-foreground mb-4">"{testimonial.content}"</blockquote>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
