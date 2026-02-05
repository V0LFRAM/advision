"use client";

import Image from "next/image";
import { TitleStroke } from "./ui/title-stroke";
import { ContactForm } from "./contact-form";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ModalForm } from "./modals/modal-form";

const FormSection = () => {
  const [isOpenModalForm, setIsOpenModalForm] = useState(false);
  const [formType, setFormType] = useState(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30% 0px" });

  const [showReady, setShowReady] = useState(false);
  const [showFreeQuote, setShowFreeQuote] = useState(false);
  const [showTellUsAbout, setShowTellUsAbout] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    const sequence = [
      { setter: setShowReady, delay: 400 },
      { setter: setShowFreeQuote, delay: 400 },
      { setter: setShowTellUsAbout, delay: 400 },
      { setter: setShowForm, delay: 400 },
      { setter: setShowImages, delay: 400 },
    ];

    let timers = [];

    if (isInView) {
      sequence.forEach(({ setter }) => setter(false));
      let total = 0;
      sequence.forEach(({ setter, delay }) => {
        total += delay;
        timers.push(setTimeout(() => setter(true), total));
      });
    } else {
      sequence.forEach(({ setter }) => setter(false));
    }
    return () => timers.forEach(clearTimeout);
  }, [isInView]);

  return (
    <section ref={ref} id="get-a-quote" className="w-full relative">
      <div className="px-[20px] xl:px-[80px] xl:flex ">
        <div className="hidden xl:block " style={{ visibility: showImages ? "visible" : "hidden" }}>
          <Image
            src="/images/form.png"
            alt="Decor"
            width={1920}
            height={100}
            className="w-[487px] h-[895px]"
          />
        </div>
        <div className="ml-auto xl:w-[50%] xl:flex flex-col items-end">
          <div className="max-w-[602px]">
            <h2
              className="uppercase tracking-[-0.01em]
              text-[35px] xl:text-[44px] leading-[1] relative mb-[20px] xl:ml-auto max-w-[602px] "
            >
              <span style={{ visibility: showReady ? "visible" : "hidden" }}>
                Ready to Transform Your Space? Let’s Start With a
              </span>
              <span
                style={{ visibility: showFreeQuote ? "visible" : "hidden" }}
                className="absolute bottom-[-35px] xl:bottom-[-45px] right-[0px] "
              >
                <TitleStroke text={"Free Quote"} />
              </span>
            </h2>
            <div
              style={{ visibility: showImages ? "visible" : "hidden" }}
              className="relative w-[72px] h-[87px] xl:w-[227px] xl:h-[250px] xl:absolute xl:right-0 xl:bottom-[343px]"
            >
              <Image
                src="/images/form-mob.png"
                alt="Decor"
                width={1920}
                height={100}
                className="w-full h-auto"
              />
            </div>
            <p
              style={{ visibility: showTellUsAbout ? "visible" : "hidden" }}
              className="font-'mobile-body' text-[16px] xl:font-'inter'  xl:text-[20px] max-w-[200px] xl:max-w-[540px] block ml-auto xl:ml-0 relative top-[-30px] xl:top-[50px]"
            >
              Tell us about your project — we’ll contact you within 24 hours with a free quote or
              consultation.
            </p>
          </div>
          <div
            className="xl:mt-[200px] xl:mr-[300px]"
            style={{ visibility: showForm ? "visible" : "hidden" }}
          >
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
