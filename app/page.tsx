import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import NFTCollection from "@/src/components/NFTCollection";
import CTA from "@/src/components/CTA";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-background">
      <Hero />
      <About />
      <NFTCollection />
      <CTA />
    </main>
  );
}
