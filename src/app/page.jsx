"use client";

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

import { useState } from "react";
import { ModalForm } from "@/components/modals/modal-form";

export default function Home() {
  const [isOpenModalForm, setIsOpenModalForm] = useState(false);
  const [formType, setFormType] = useState(null); // "contact" | "questionary"

  const openModal = (type) => {
    setFormType(type);
    setIsOpenModalForm(true);
  };

  return (
    <>
      <HeaderSection />
      <GridBack />
      <HeroSection openModal={openModal} />
      <About />
      <AccordionSection />
      <LookSection />
      <HowSection />
      <PrecisionSection openModal={openModal} />
      <TrustSection />
      <FormSection />
      <Footer />

      {isOpenModalForm && <ModalForm formType={formType} setIsOpenModalForm={setIsOpenModalForm} />}
    </>
  );
}
