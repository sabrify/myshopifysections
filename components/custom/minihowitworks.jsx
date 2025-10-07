"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Clipboard, Paintbrush } from "lucide-react"
import Link from "next/link"

export default function MiniHowItWorks() {
  const steps = [
    { icon: Mail, title: "Get the code" },
    { icon: Clipboard, title: "Copy & Paste" },
    { icon: Paintbrush, title: "Add & Style" },
  ]

  return (
    <section className="relative py-16 bg-background text-center">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mb-6 text-3xl font-bold">
          How it works <span className="text-[#00ff94]">(3 easy steps)</span>
        </h2>
        <p className="text-muted-foreground mb-12">
          Set up your Shopify section in minutes - no coding needed.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, title }, i) => (
            <Card
              key={i}
              className="p-6 border-gray-700 bg-secondary/30 hover:border-[#00ff94] transition-all duration-300"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-[#00ff94]/10">
                  <Icon className="h-6 w-6 text-[#00ff94]" />
                </div>
                <h3 className="font-semibold">{title}</h3>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/how-it-works">
            <Button
              size="lg"
              className="bg-[#00ff94] text-[#0a0e14] hover:bg-[#00ff94]/90 font-bold"
            >
              Learn more
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
