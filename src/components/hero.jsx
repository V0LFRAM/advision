"use client";
import { useState } from "react";

import { Arrow } from "@/lib/icons/arrow";
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";
import { HeroTitleStroke } from "./ui/hero-title-stroke";
import { ModalForm } from "./modals/modal-form";

const HeroSection = () => {
  const [isOpenModalForm, setIsOpenModalForm] = useState(false);
  return (
    <>
      <section className="w-full">
        <div className="pt-[66px] xl:pt-[88px] pl-[20px] pr-[20px] xl:pl-[82px] xl:pr-[78px] relative flex flex-col gap-y-10">
          <h1 className="flex flex-wrap items-baseline gap-x-3">
            <div>
              <HeroTitleStroke text={"ACCENT"} />
              <span
                className="
              font-league font-[500] uppercase tracking-[-0.01em]
              text-[40px] xl:text-[80px] leading-[1] text-[rgb(var(--fg))] relative
            "
              >
                Walls & Cust
                <span className="relative inline-block">
                  o
                  <span className="absolute top-[-10px] right-[13.5px]">
                    <ThemeToggle />
                  </span>
                </span>
                m Tile
              </span>
            </div>

            <div className="ml-auto">
              <span
                className="
              font-league font-[500] uppercase tracking-[-0.01em]
              text-[40px] xl:text-[80px] leading-[1] text-[rgb(var(--fg))] mr-[15px]
            "
              >
                That Make a
              </span>
              <HeroTitleStroke text={"Statement"} />
            </div>
          </h1>
          <div className="flex gap-[24px] xl:gap-[50px] xl:ml-auto mb-[55px] flex-wrap">
            <p
              className="
              max-w-[440px] 
              w-full
              xl:w-auto
              font-inter font-normal
              text-[18px] leading-[100%]
              tracking-[-0.02em] 
              text-[rgb(var(--fg))]
            "
            >
              Serving Minneapolis homeowners with bold, modern finishes — from TV walls to full
              bathroom remodels
            </p>
            <div className="flex gap-[17px] xl:gap-[35px]">
              <button
                onClick={() => setIsOpenModalForm(true)}
                className="bg-[#9B948A] text-[16px] xl:text-[18px] w-[159px] xl:w-[197px] h-[34px] xl:h-[46px] flex items-center justify-center gap-2"
              >
                Get a Free Quote
                <span className="mt-[2px]">
                  <Arrow />
                </span>
              </button>
              <button className="border-[#9B948A] text-[16px] xl:text-[18px] border-[1px] w-[159px] xl:w-[197px] h-[34px] xl:h-[46px] flex items-center justify-center gap-2">
                Send Your Idea
                <span className="mt-[2px]">
                  <Arrow />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="lg:hidden relative w-full min-h-[335px] max-h-[335px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          <Image
            src="/images/hero-mob.png"
            alt="Hero Image"
            fill
            quality={100}
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="hidden lg:block relative w-full min-h-[600px] max-h-[600px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          <Image
            src="/images/hero-image.png"
            alt="Hero Image"
            fill
            quality={100}
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>
      {isOpenModalForm && <ModalForm setIsOpenModalForm={setIsOpenModalForm} />}
    </>
  );
};

export { HeroSection };
