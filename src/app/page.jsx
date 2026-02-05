"use client";
import { useEffect, useState } from "react";

import { About } from "@/components/about";
import { HeroSection } from "@/components/hero";
import { HowSection } from "@/components/how";
import { Footer } from "@/components/footer";
import { TrustSection } from "@/components/trust";
import { LookSection } from "@/components/look";

import AccordionSection from "@/components/accordion";
import { GridBack } from "@/components/ui/grid-back";
import { FormSection } from "@/components/form-section";
import PrecisionSection from "@/components/precision";

import { ModalForm } from "@/components/modals/modal-form";
import { RunningLine } from "@/components/running-line";
import { ImageSection } from "@/components/ui/image-section";

export default function Home() {
  const [isOpenModalForm, setIsOpenModalForm] = useState(false);
  const [formType, setFormType] = useState(null);
  const [isTimeoutHero, setIsTimeoutHero] = useState(false);

  const openModal = (type) => {
    setFormType(type);
    setIsOpenModalForm(true);
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTimeoutHero(true);
    }, 2000); 

    if (!isTimeoutHero) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      clearTimeout(timer);
    };

  }, [!isTimeoutHero]);


  return (
    <>
      {/* <GridBack />  */}
      <HeroSection openModal={openModal} isTimeoutHero={isTimeoutHero} />
      {isTimeoutHero && <About />}
      {isTimeoutHero && <ImageSection />}
      {isTimeoutHero && <AccordionSection />}
      {isTimeoutHero && <LookSection />}
      {isTimeoutHero && <HowSection />}
      {isTimeoutHero && <PrecisionSection openModal={openModal} />}
      {isTimeoutHero && <TrustSection />}
      {isTimeoutHero && <FormSection />}
      {isTimeoutHero && <RunningLine />}
      {isTimeoutHero && <Footer />}

      {isOpenModalForm && <ModalForm formType={formType} setIsOpenModalForm={setIsOpenModalForm} />}
    </>
  );
}
