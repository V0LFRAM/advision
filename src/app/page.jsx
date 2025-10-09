import { About } from "@/components/about";
import { HeroSection } from "@/components/hero";
import { HowSection } from "@/components/how";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TrustSection } from "@/components/trust";
import { LookSection } from "@/components/look";
import { GridBack } from "@/components/ui/grid-back";

export default function Home() {
  return (
    <>
      <GridBack />
      <Header />
      <HeroSection />
      <About />
      <LookSection />
      <HowSection />
      <TrustSection />
      <Footer />
    </>
  );
}
