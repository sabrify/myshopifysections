"use client"
import Navbar from "@/components/navigation/navbar";
import Hero from "@/components/mainsection/hero";
import MainCollection from "@/components/mainsection/collection";
import Features from "@/components/mainsection/features";



export default function Home() {
  

  return (
    <main>
      <Navbar />
      <Hero />
      <MainCollection/>
      <Features/>
    </main>
  );
}
