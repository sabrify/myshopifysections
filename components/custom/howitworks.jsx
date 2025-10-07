import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Clipboard, Paintbrush } from "lucide-react"
import Link from "next/link"

export function HowItWorksSection() {
  const steps = [
    {
      icon: Mail,
      number: "01",
      title: "Get the code",
      description: "After your purchase, you'll receive a link to your section's code - your raccoon's loot drop.",
    },
    {
      icon: Clipboard,
      number: "02",
      title: "Copy & Paste",
      description: "Follow our step-by-step guide. No developer needed - it's easier than sneaking into a trash can.",
    },
    {
      icon: Paintbrush,
      number: "03",
      title: "Add & Style",
      description:
        "Use Shopify's editor to add text, images, and products. Style it however you like - your brand, your rules.",
    },
  ]

  return (
    <section className="relative min-h-screen overflow-hidden bg-background px-4 py-16 md:py-24">
      {/* Hero Area */}
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex-1 text-center md:text-left">
            <h1 className="mb-4 text-balance text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              How it works <span className="text-[#00ff94]">(it&apos;s easier than stealing cookies)</span>
            </h1>
            <p className="text-pretty text-lg text-gray-400 md:text-xl">
              Follow 3 quick steps to get your Shopify section up and running - no coding, no stress.
            </p>
          </div>

          {/* Pixel Raccoon Mascot */}
          <div className="flex-shrink-0">
            <div className="relative h-32 w-32 md:h-40 md:w-40">
              <img
                src="/raccoon.png"
                alt="Pixel raccoon mascot"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Steps Section */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-2 border-gray-700 bg-secondary p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#00ff94] hover:shadow-[0_0_30px_rgba(0,255,148,0.3)]"
              >
                {/* Pixel border effect */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute left-0 top-0 h-2 w-2 bg-[#00ff94]" />
                  <div className="absolute right-0 top-0 h-2 w-2 bg-[#00ff94]" />
                  <div className="absolute bottom-0 left-0 h-2 w-2 bg-[#00ff94]" />
                  <div className="absolute bottom-0 right-0 h-2 w-2 bg-[#00ff94]" />
                </div>

                {/* Step Number */}
                <div className="mb-4 inline-block rounded-md bg-[#00ff94]/10 px-3 py-1 font-mono text-sm font-bold text-[#00ff94]">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-[#00ff94]/10 transition-all duration-300 group-hover:bg-[#00ff94]/20 group-hover:shadow-[0_0_20px_rgba(0,255,148,0.4)]">
                  <Icon className="h-8 w-8 text-[#00ff94]" strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-2xl font-bold text-white">{step.title}</h3>
                <p className="text-pretty leading-relaxed text-gray-400">{step.description}</p>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="flex justify-center">
          <Button
            size="lg"
            className="group relative overflow-hidden bg-[#00ff94] px-8 py-6 text-lg font-bold text-[#0a0e14] transition-all duration-300 hover:bg-[#00ff94]/90 hover:shadow-[0_0_40px_rgba(0,255,148,0.5)]"
          >
            <Link href="/collection/shopify" className="relative z-10">Explore Sections</Link>
            {/* Pixel shimmer effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
          </Button>
        </div>
      </div>

      {/* Decorative pixel grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, #00ff94 1px, transparent 1px),
            linear-gradient(to bottom, #00ff94 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
    </section>
  )
}
