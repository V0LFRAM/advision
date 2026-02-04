"use client";

import Image from "next/image";
import { TitleStroke } from "./ui/title-stroke";
import { ContactForm } from "./contact-form";

import { useState } from "react";
import { ModalForm } from "./modals/modal-form";

const FormSection = () => {
  const [isOpenModalForm, setIsOpenModalForm] = useState(false);
  const [formType, setFormType] = useState(null);

  return (
    <section id="get-a-quote" className="w-full relative">
      <div className="px-[20px] xl:px-[80px] xl:flex ">
        <div className="hidden xl:block ">
          <Image
            src="/images/form.png"
            alt="Decor"
            width={1920}
            height={100}
            className="w-[487px] h-[895px]"
          />
        </div>
        <div className="ml-auto ">
          <h2
            className="uppercase tracking-[-0.01em]
            text-[35px] xl:text-[44px] leading-[1] relative mb-[20px] max-w-[602px] "
          >
            Ready to Transform Your Space? Let’s Start With a
            <span className="absolute bottom-[-35px] xl:bottom-[-45px] right-[0px] ">
              <TitleStroke text={"Free Quote"} />
            </span>
          </h2>
          <div className="relative w-[72px] h-[87px] xl:w-[227px] xl:h-[250px] xl:absolute xl:right-0 xl:bottom-[343px]">
            <Image
              src="/images/form-mob.png"
              alt="Decor"
              width={1920}
              height={100}
              className="w-full h-auto"
            />
          </div>
          <p className="font-'mobile-body' text-[16px] xl:font-'inter' xl:text-[20px] max-w-[200px] xl:max-w-[540px] block ml-auto xl:ml-0 relative top-[-30px] xl:top-[50px]">
            Tell us about your project — we’ll contact you within 24 hours with a free quote or
            consultation.
          </p>
          <div className="xl:mt-[200px] xl:mr-[300px]">
            <ContactForm
              onSuccess={() => {
                setFormType("contact");
                setIsOpenModalForm(true);
              }}
            />
          </div>
        </div>
      </div>
      {/* ✅ MODAL */}
      {isOpenModalForm && (
        <ModalForm
          setIsOpenModalForm={setIsOpenModalForm}
          formType={formType}
          openAsSuccess={true}
        />
      )}
    </section>
  );
};

export { FormSection };
