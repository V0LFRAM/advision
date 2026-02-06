"use client";

import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { TitleStroke } from "./ui/title-stroke";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useBreakpointValue } from "@chakra-ui/react";

export default function PrecisionSection({ openModal }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30% 0px" });
  const variant = useBreakpointValue({ base: false, lg: true });

  const [showPrecision, setShowPrecision] = useState(false);
  const [showMobileTextTwo, setShowMobileTextTwo] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showLoved, setShowLoved] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showHallImage, setShowHallImage] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    let sequence;
    if (variant) {
      sequence = [
        { setter: setShowPrecision, delay: 300 },
        { setter: setShowText, delay: 300 },
        { setter: setShowLoved, delay: 300 },
        { setter: setShowDescription, delay: 300 },
        { setter: setShowButton, delay: 300 },
        { setter: setShowHallImage, delay: 300 },
        { setter: setShowImage, delay: 300 },
      ];
    } else {
      sequence = [
        { setter: setShowImage, delay: 300 },
        { setter: setShowMobileTextTwo, delay: 700 },
        { setter: setShowLoved, delay: 300 },
        { setter: setShowText, delay: 300 },
        { setter: setShowPrecision, delay: 300 },
        { setter: setShowDescription, delay: 300 },
        { setter: setShowButton, delay: 300 },
        { setter: setShowHallImage, delay: 300 },
      ];
    }

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
    <section ref={ref} id="your-idea" className="w-full relative overflow-hidden lg:h-[80vh] xl:h-[100vh]">
      <div className="absolute inset-0 -z-10 bg-[rgb(var(--bg))]" />

      {/* DESKTOP layout (xl and up) */}
      <div className="hidden lg:flex w-full pl-[193px] lg:pl-[93px] xl:pl-[80px] pr-[80px] pt-[120px] relative z-20">
        <div
          style={{ visibility: showImage ? "visible" : "hidden" }}
          className="lg:w-[244px] xl:w-[544px] flex-shrink-0 pt-[255px]"
        >
          <Image
            src="/images/precision-corridor.png"
            alt="design corridor"
            width={310}
            height={398}
            className="object-cover"
            priority
            quality={100}
            style={{
              transform: showImage ? "scale(0.8) translateX(-40px)" : "scale(1) translateX(0px)",
              transition: "transform 2s cubic-bezier(.4,0,.2,1)",
            }}
          />
        </div>

        <div className="flex flex-col pl-[32px] xl:pl-[60px]">
          <h2
            className="uppercase tracking-[-0.01em] text-[35px] xl:text-[44px] leading-[1] relative mb-[20px]"
            style={{
              fontFamily:
                '"League Spartan", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontWeight: 500,
            }}
          >
            <span
              className="xl:ml-[40px] xl:block xl:w-[660px]"
              style={{ visibility: showText ? "visible" : "hidden" }}
            >
              Have a Design in Mind or
              <br />
              {"SOMETHING YOU "}
              <span
                className="inline-block align-baseline"
                style={{ visibility: showLoved ? "visible" : "hidden" }}
              >
                <TitleStroke text={"LOVED"} />
              </span>
              {" Online?"}
            </span>

            <span
              style={{ visibility: showText ? "visible" : "hidden" }}
              className="block pl-[-40px]"
            >
              {"LET US BRING IT TO LIFE WITH STYLE"}
            </span>
            <span className="block pl-[-40px]">
              <span style={{ visibility: showText ? "visible" : "hidden" }}>{"AND "}</span>
              <span
                style={{ visibility: showPrecision ? "visible" : "hidden" }}
                className="inline-block align-baseline"
              >
                <TitleStroke text={"precision"} />
              </span>
            </span>
          </h2>
          <div className="xl:flex xl:flex-col items-end">
            <div className="relative">
              <p
                style={{ visibility: showDescription ? "visible" : "hidden" }}
                className="text-[18px] xl:text-[20px] leading-[1.55] text-[rgb(var(--fg))] mb-6 max-w-[517px]"
              >
                Whether you've saved a design from Pinterest, spotted something amazing on
                Instagram, or simply imagined how your perfect wall or bathroom should look — we're
                ready to help make it real. Just send us a photo, sketch, or even a few keywords —
                and we'll take it from there. You'll receive a clear plan, expert recommendations,
                and a transparent quote — all within 24 hours.
              </p>

              <button
                onClick={() => openModal("questionary")}
                className="relative z-30 w-fit flex items-center gap-3 bg-[#A89F94] hover:bg-[#92897F] transition-all px-8 py-3 text-[17px] font-medium"
                style={{ visibility: showButton ? "visible" : "hidden" }}
              >
                Send Us Your Idea
                <FiArrowUpRight size={20} />
              </button>
              <div
                style={{ visibility: showHallImage ? "visible" : "hidden" }}
                className="mt-[60px] absolute w-[622px] h-[332px]"
              >
                <Image
                  src="/images/precision-hall.png"
                  alt="design hall"
                  width={623}
                  height={332}
                  className="object-cover"
                  priority
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE layout (below xl) */}
      <div className="lg:hidden flex flex-col w-full px-[18px] pt-[60px] pb-0 z-20">
        <div className="mb-2">
          <h2
            className="uppercase tracking-[-0.02em] text-[35px] leading-[90%] text-[rgb(var(--fg))]"
            style={{
              fontFamily: '"League Spartan", sans-serif',
              fontWeight: 400,
              fontStyle: "regular",
            }}
          >
            <span
              className="xl:ml-[40px] xl:block xl:w-[660px]"
              style={{ visibility: showText ? "visible" : "hidden" }}
            >
              HAVE A DESIGN IN MIND OR SOMETHING
              <br />
              {"YOU "}
            </span>
            <span
              className="inline-block align-baseline scale-[0.9] origin-left"
              style={{ visibility: showLoved ? "visible" : "hidden" }}
            >
              <TitleStroke text={"LOVED"} />
            </span>
            <span
              className="xl:ml-[40px] xl:block xl:w-[660px]"
              style={{ visibility: showText ? "visible" : "hidden" }}
            >
              {"ONLINE?"}
            </span>
          </h2>

          <h2
            className="uppercase tracking-[-0.02em] text-[35px] leading-[90%] text-[rgb(var(--fg))]"
            style={{
              fontFamily: '"League Spartan", sans-serif',
              fontWeight: 400,
              fontStyle: "regular",
              visibility: showMobileTextTwo ? "visible" : "hidden",
            }}
          >
            LET US BRING IT TO LIFE WITH STYLE
            <br />
            {" AND "}
            <span
              style={{ visibility: showPrecision ? "visible" : "hidden" }}
              className="inline-block align-baseline scale-[0.9] origin-left"
            >
              <TitleStroke text={"PRECISION"} />
            </span>
          </h2>
        </div>

        <div className="mx-auto mb-6 w-full h-[465px] absolute">
          <div
            style={{
              position: "absolute",
              left: showImage ? "auto" : 0,
              right: showImage ? 20 : "auto",
              top: showImage ? 160 : 20,
              width: showImage ? 72 : "100vw",
              height: showImage ? 87 : "100%",
              transition: "all 2s cubic-bezier(.4,0,.2,1)",
              zIndex: 2,
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/precision-corridor.png"
              alt="design mobile corridor"
              fill
              quality={100}
              className="object-cover"
              style={{
                transition: "all 2s cubic-bezier(.4,0,.2,1)",
                objectPosition: "center",
              }}
            />
          </div>
        </div>

        <div className="w-full mx-0 mb-[28px]">
          <p
            className="text-[16px] leading-[115%] tracking-[-0.02em] text-[rgb(var(--fg))] mb-[24px] ml-0 w-[250px] md:w-[80%]"
            style={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: 400,
              fontStyle: "normal",
              visibility: showDescription ? "visible" : "hidden",
            }}
          >
            Whether you've saved a design from Pinterest, spotted something amazing on Instagram, or
            simply imagined how your perfect wall or bathroom should look — we're ready to help make
            it real.
            <br />
            Just send us a photo, sketch, or even a few keywords — and we'll take it from there.
            You'll receive a clear plan, expert recommendations, and a transparent quote — all
            within 24 hours.
          </p>
          <button
            style={{ visibility: showButton ? "visible" : "hidden" }}
            onClick={() => openModal("questionary")}
            className="relative z-30 flex items-center justify-center gap-3 bg-[#A89F94] hover:bg-[#92897F] transition-all px-6 py-3 text-[16px] font-medium w-[159px] h-[34px] ml-0"
          >
            <span className="text-nowrap">Send Us Your Idea</span>
            <FiArrowUpRight size={20} />
          </button>
        </div>

        <div
          style={{ visibility: showHallImage ? "visible" : "hidden" }}
          className="-mx-[20px] flex justify-center"
        >
          <div className="relative w-[100vw] md:w-[728px] h-[282px] overflow-hidden">
            <Image
              src="/images/precision-hall.png"
              alt="design mobile hall"
              fill
              className="object-cover"
              quality={100}
              style={{
                objectPosition: "calc(100% + 19px) center",
              }}
              priority
              sizes="375px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export { PrecisionSection };
