import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import { Reveal } from "@/components/ui/reveal";

export default function Home() {
  return (
    <main>
      <Hero />
      <Reveal>
        <Solutions />
      </Reveal>
    </main>
  );
}
