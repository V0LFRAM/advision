import { About } from "@/components/about";
import { HeroSection } from "@/components/hero";
import { HowSection } from "@/components/how";
import { HeaderSection } from "@/components/header";
import { Footer } from "@/components/footer";
import { TrustSection } from "@/components/trust";
import { LookSection } from "@/components/look";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <HeroSection />
      <About />
      <LookSection />
      <HowSection />
      <TrustSection />
      <Footer />
    </>
  );
}
