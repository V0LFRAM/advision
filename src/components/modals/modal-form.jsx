"use client";

import { useEffect } from "react";
import Image from "next/image";
import { ContactForm } from "../contact-form";
import { NavContactsSideBar } from "../nav-contacts-side-bar";
import { QuestionaryForm } from "../questionary-form";

const ModalForm = ({ setIsOpenModalForm, formType }) => {
  // ✅ Scroll Lock
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[1000] flex justify-end bg-black bg-opacity-70">
      {/* RIGHT PANEL */}
      <div className="flex flex-col items-start w-full h-full bg-[rgb(var(--bg))] p-[19px] pb-[120px]">
        {/* ✅ CLOSE BUTTON */}
        <button
          onClick={() => setIsOpenModalForm(false)}
          aria-label="Close"
          className="absolute top-[20px] right-[20px] text-[rgb(var(--fg))]"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* ✅ TITLE */}
        {formType === "contact" && (
          <h2 className="font-inter uppercase font-medium text-[16px] leading-[120%] tracking-[-0.02em] text-[rgb(var(--fg))] mt-[104px] mb-[20px]">
            Fill out the form — our specialist
            <br />
            will contact you within 1 hour.
          </h2>
        )}

        {formType === "questionary" && (
          <>
            <h2 className="font-inter uppercase font-medium text-[16px] leading-[120%] tracking-[-0.02em] text-[rgb(var(--fg))] mt-[104px] mb-[20px]">
              Book a Free On-Site Measurement
            </h2>

            <p
              className="
        max-w-[337px] 
        w-full
        xl:w-auto
        font-inter font-normal
        text-[16px] leading-[120%]
        tracking-[-0.02em] 
        text-[rgb(var(--fg))]
        mb-[20px]
      "
            >
              Want a clear estimate and expert advice?
              <br />
              Fill out the form below, and we’ll call you within 1 hour to confirm your request and
              schedule a free on-site visit at your convenience.
            </p>
          </>
        )}

        {/* ✅ CONTACT FORM (REUSE EXISTING) */}
        <div className="mb-[40px]">
          {formType === "contact" && <ContactForm />}
          {formType === "questionary" && <QuestionaryForm />}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <NavContactsSideBar />
      </div>
    </div>
  );
};

export { ModalForm };
