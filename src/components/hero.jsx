"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { Arrow } from "@/lib/icons/arrow";
import { ThemeToggle } from "./ThemeToggle";
import { HeroTitleStroke } from "./ui/hero-title-stroke";
import { LoadingTextAnimated } from "./loading-text-animated";
import { useBreakpointValue } from "@chakra-ui/react";


import { useEffect, useState } from "react";
import { GridBack } from "./ui/grid-back";

const HeroSection = ({ openModal, isTimeoutHero }) => {
  const variant = useBreakpointValue({ base: false, lg: true });

  const [showStatement, setShowStatement] = useState(false); 
  const [showWalls, setShowWalls] = useState(false); 
  const [showThatMakeA, setShowThatMakeA] = useState(false); 
  const [showAccent, setShowAccent] = useState(false); 
  const [showThemeToggle, setShowThemeToggle] = useState(false); 
  const [showCustomTile, setShowCustomTile] = useState(false);

  const [startScale, setStartScale] = useState(true);

  useEffect(() => {
    const sequence = [
      { setter: setShowStatement, delay: 1500 },
      { setter: setShowWalls, delay: 500 },
      { setter: setShowThatMakeA, delay: 500 },
      { setter: setShowAccent, delay: 500 },
      { setter: setShowThemeToggle, delay: 500 },
      { setter: setShowCustomTile, delay: 500 },
    ];

    let timers = [];

    if (isTimeoutHero) {
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
  }, [isTimeoutHero]);

  useEffect(() => {
    let timer;
    if (isTimeoutHero) {
      timer = setTimeout(() => setStartScale(true), 1000);
    } else {
      setStartScale(false);
    }
    return () => clearTimeout(timer);
  }, [isTimeoutHero]);

  return (
    <>
      <section className={`w-full pt-[66px] xl:pt-[88px] h-[100vh] ${variant ? "min-h-[700px]" : ""} relative`}>
        <motion.div
          animate={{ zIndex: 10, height: isTimeoutHero ? "358px" : "calc(100vh - 57px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="pl-[20px] pr-[20px] lg:pl-[82px] lg:pr-[78px] relative flex flex-col gap-y-10 z-10 bg-[rgb(var(--bg))] overflow-hidden"
        >
          <GridBack />

          {!isTimeoutHero && (
            <div className="w-full h-[100vh] flex items-center justify-center pb-[200px]">
              <LoadingTextAnimated />
            </div>
          )}

          {isTimeoutHero && (
            <h1 className="flex flex-wrap items-baseline gap-x-3">
              <div>
                <span style={{ visibility: showAccent ? "visible" : "hidden" }}>
                  <HeroTitleStroke text={"ACCENT"} />
                </span>
                <span
                  className="
              font-league font-[600] uppercase tracking-[-0.01em]
              text-[40px] xl:text-[80px] leading-[1] text-[rgb(var(--fg))] relative
            "
                >
                  <span style={{ visibility: showWalls ? "visible" : "hidden" }}>{"Walls & "}</span>

                  <span>
                    <span style={{ visibility: showCustomTile ? "visible" : "hidden" }}>Cust</span>
                    <span className="relative inline-block">
                      <span style={{ visibility: showCustomTile ? "visible" : "hidden" }}>o</span>
                      <span
                        style={{ visibility: showThemeToggle ? "visible" : "hidden" }}
                        className="absolute top-[-10px] right-[13.5px] hidden xxl:block"
                      >
                        <ThemeToggle />
                      </span>
                    </span>
                    <span style={{ visibility: showCustomTile ? "visible" : "hidden" }}>
                      m Tile
                    </span>
                  </span>
                </span>
              </div>

              <div className="ml-auto mr-[20px]">
                <span
                  style={{ visibility: showThatMakeA ? "visible" : "hidden" }}
                  className="
                font-league font-[600] uppercase tracking-[-0.01em]
                text-[40px] xl:text-[80px] leading-[1] text-[rgb(var(--fg))] mr-[15px]
              "
                >
                  That Make a
                </span>

                <span style={{ visibility: showStatement ? "visible" : "hidden" }}>
                  <HeroTitleStroke text={"Statement"} />
                </span>
              </div>
            </h1>
          )}
          {isTimeoutHero && (
            <div
              style={{ visibility: showCustomTile ? "visible" : "hidden" }}
              className="flex gap-[24px] xl:gap-[50px] xl:ml-auto mb-[55px] flex-wrap"
            >
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
                  onClick={() => openModal("contact")}
                  className="bg-[#9B948A] text-[16px] xl:text-[18px] w-[159px] xl:w-[197px] h-[34px] xl:h-[46px] flex items-center justify-center gap-2 z-[10]"
                >
                  Get a Free Quote
                  <span className="mt-[2px]">
                    <Arrow />
                  </span>
                </button>
                <button
                  onClick={() => openModal("questionary")}
                  className="border-[#9B948A] text-[16px] xl:text-[18px] border-[1px] w-[159px] xl:w-[197px] h-[34px] xl:h-[46px] flex items-center justify-center gap-2 z-[10]"
                >
                  Send Your Idea
                  <span className="mt-[2px]">
                    <Arrow />
                  </span>
                </button>
              </div>
            </div>
          )}
        </motion.div>
        {isTimeoutHero && (
          <div className="lg:hidden relative w-full min-h-[335px] max-h-[335px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] absolute bottom-0">
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
        )}

        {isTimeoutHero && (
          <div className="hidden lg:block absolute bottom-0 w-full overflow-hidden min-h-[600px] max-h-[600px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] z-[1]">
            <Image
              src="/images/hero-image.png"
              alt="Hero Image"
              fill
              quality={100}
              priority
              sizes="100vw"
              className="object-cover"
              style={{
                transform: startScale ? "scale(1.1)" : "scale(1)",
                transition: "transform 4s cubic-bezier(.4,0,.2,1)",
              }}
            />
          </div>
        )}
      </section>
    </>
  );
};

export { HeroSection };
