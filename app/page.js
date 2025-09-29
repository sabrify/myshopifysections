"use client";
import Navbar from "@/components/navigation/navbar";
import Hero from "@/components/mainsection/hero";
import MainCollection from "@/components/mainsection/collection";
import Features from "@/components/mainsection/features";
import Testimonials from "@/components/mainsection/testimonials";
import Footer from "@/components/navigation/desktop-footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MainCollection />
      <Features />
      <Testimonials />
      <Footer />
    </main>
  );
}
