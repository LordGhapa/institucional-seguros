import CTA from "@/components/CTA";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import Solutions from "@/app/components/Solutions";
import Testimonials from "@/app/components/Testimonials";
import { Reveal } from "@/components/ui/reveal";
import WhyChooseUs from "@/app/components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <Reveal>
        <Solutions />
      </Reveal>
      <Reveal>
        <Services />
      </Reveal>
      <Reveal>
        <WhyChooseUs />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
    </main>
  );
}
