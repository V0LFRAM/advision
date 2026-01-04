"use client";

import { useEffect } from "react";
import { NavContactsSideBar } from "./nav-contacts-side-bar";

const FormEndSection = ({ setIsOpenSuccessModal }) => {
  // ✅ Scroll Lock
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[1100] flex justify-end bg-black bg-opacity-70">
      {/* RIGHT PANEL */}
      <div className="flex flex-col items-start w-full h-full bg-[rgb(var(--bg))] p-[24px] pb-[120px]">
        {/* ✅ CLOSE BUTTON */}
        <button
          onClick={() => setIsOpenSuccessModal(false)}
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

        {/* ✅ CONTENT */}
        <div className="mt-[104px] flex flex-col gap-[20px]">
          <h2 className="font-league font-[500] uppercase tracking-[-0.01em] text-[32px] xl:text-[48px] leading-[1] text-[rgb(var(--fg))]">
            GOT YOUR IDEA!
          </h2>
          <p className="font-inter font-normal text-[16px] xl:text-[18px] leading-[100%] tracking-[-0.02em] text-[rgb(var(--fg))]">
            Thanks for sending your inspiration — our
            <br />
            team will review it and get back to you within
            <br />
            24 hours with a tailored plan and estimate.
          </p>
          <p className="font-inter font-normal text-[16px] xl:text-[18px] leading-[100%] tracking-[-0.02em] text-[rgb(var(--fg))]">
            If you&apos;d like to speed things up, feel free to
            <br />
            give us a call at +17634855531.
          </p>
          <h3 className="font-league font-[500] uppercase tracking-[-0.01em] text-[24px] xl:text-[32px] leading-[1] text-[rgb(var(--fg))]">
            LET&apos;S TURN YOUR VISION
            <br />
            INTO REALITY!
          </h3>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <NavContactsSideBar />
      </div>
    </div>
  );
};

export { FormEndSection };
