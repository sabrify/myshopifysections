import { Button } from "../ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center px-6 md:px-12 py-16 bg-background">
      {/* Left content */}
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 font-mono">
          Sections so good, <br /> they feel stolen!
        </h1>

        <p className="text-muted-foreground mb-8 text-lg">
          
         Sections <span className="line-through">looted from</span> 👀 inspired  by Fenty, Bellroy & more <br/>
           Tested layouts that convert!
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-[#00ff94]" variant="default" >
            <Link href="/collection/shopify">Explore Sections</Link>
          </Button>
          <Button
            variant="outline"
            
          >
            <Link href="/how-it-works">See How It Works</Link>
          </Button>
        </div>
      </div>

      {/* Raccoon image */}
      <div className="mt-10 md:mt-0 md:ml-12">
        <img
          src="/raccoon.png"
          alt="Sneaky Raccoon Mascot"
          className="h-48 md:h-64 pixelated"
        />
      </div>
    </section>
  );
}
