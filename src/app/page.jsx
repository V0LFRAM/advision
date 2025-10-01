import { About } from "@/components/about";
import { HeroSection } from "@/components/hero";
import { HowSection } from "@/components/how";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <HowSection />
      <Footer />
    </>
  );
}
