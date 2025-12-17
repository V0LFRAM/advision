import { About } from "@/components/about";
import { HeroSection } from "@/components/hero";
import { HowSection } from "@/components/how";
import { HeaderSection } from "@/components/header";
import { Footer } from "@/components/footer";
import { TrustSection } from "@/components/trust";
import { LookSection } from "@/components/look";

import AccordionSection from "@/components/accordion";
import { GridBack } from "@/components/ui/grid-back";
import { FormSection } from "@/components/form-section";
import PrecisionSection from "@/components/precision";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <GridBack />
      <HeroSection />
      <About />
      <AccordionSection />
      <LookSection />
      <HowSection />
      <PrecisionSection />
      <TrustSection />
      <FormSection />
      <Footer />
    </>
  );
}
