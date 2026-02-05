"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

import { TitleStroke } from "./ui/title-stroke";

const lookItems = [
  {
    img: "/images/look1.png",
    date: "January 2025",
  },
  {
    img: "/images/look2.png",
    date: "August 2024",
  },
  {
    img: "/images/look3.png",
    date: "March 2024",
  },

];

export const LookSection = () => {
  const [index, setIndex] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40% 0px" });

  const [showSolutions, setShowSolutions] = useState(false); 
  const [showRealHomes, setShowRealHomes] = useState(false); 
  const [showWithCustomFinishing, setShowWithCustomFinishing] = useState(false); 
  const [showTakeA, setShowTakeA] = useState(false); 
  const [showWeveEnhanced, setShowWeveEnhanced] = useState(false);
  const [showAt, setShowAt] = useState(false);
  const [showCloserLook, setShowCloserLook] = useState(false);

  useEffect(() => {
    const sequence = [
      { setter: setShowSolutions, delay: 400 },
      { setter: setShowRealHomes, delay: 400 },
      { setter: setShowWithCustomFinishing, delay: 400 },
      { setter: setShowTakeA, delay: 400 },
      { setter: setShowWeveEnhanced, delay: 400 },
      { setter: setShowAt, delay: 400 },
      { setter: setShowCloserLook, delay: 400 },
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

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % lookItems.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + lookItems.length) % lookItems.length);
  };

  const getVisibleItems = () => {
    const total = lookItems.length;
    const left = (index - 1 + total) % total;
    const center = index;
    const centerTwo = (index + 1) % total; // visible ≥1920px
    const right = (index + 2) % total;
    return [lookItems[left], lookItems[center], lookItems[centerTwo], lookItems[right]];
  };

  const visibleItems = getVisibleItems(); 

  return (
    <section 
      ref={ref}
      id="projects"
      className="w-full pt-[120px] md:pt-[180px] pb-[120px] md:pb-[158px] overflow-hidden"
    >
      {/* Desktop */}
      <div className="hidden md:block px-[20px] lg:px-[80px] xl:pr-[67px] relative">
        <h2 className="mb-[60px]">
          <span
            className="
            font-[500] uppercase tracking-[-0.01em]
            text-[35px] xl:text-[44px] leading-[1] 
          "
          >
            <span style={{ visibility: showTakeA ? "visible" : "hidden" }}>
              {'Take a '} 
            </span>
            <span style={{ visibility: showCloserLook ? "visible" : "hidden" }}>
              <TitleStroke text={"Closer Look"} />
            </span>
            <br />
            <span style={{ visibility: showAt ? "visible" : "hidden" }}>
              {'At '} 
            </span>
            <span style={{ visibility: showRealHomes ? "visible" : "hidden" }}>
              {'real homes '}
            </span>
            <span style={{ visibility: showWeveEnhanced ? "visible" : "hidden" }}>
              {'we’ve enhanced'}
            </span>
            <br />
            <span style={{ visibility: showWithCustomFinishing ? "visible" : "hidden" }}>
              {'with custom finishing '}
            </span>
            
            <span style={{ visibility: showSolutions ? "visible" : "hidden" }}>
              {'solutions'}
            </span>
          </span>
        </h2>

        <div 
          className={`relative flex justify-between gap-[20px] lg:gap-[80px] items-center transition-all duration-700 ease-out
          ${showCloserLook ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}
        >
          {visibleItems.map((item, idx) => (
            <div
              key={idx}
              className={`
                relative transition-all duration-500
                ${idx === 1 ? "hidden xl:block" : "block"}
                ${idx === 2 ? "hidden 2xl:block" : ""}
              `}
            >
              <Image
                src={item.img}
                alt={item.date}
                width={373}
                height={438}
                className="object-cover w-[373px] h-[438px] z-[1]"
              />
              <p
                className="
                  font-inter font-normal text-[20px] leading-[100%] tracking-[-0.02em]
                  text-[#DFE0DB] mt-[10px] text-center
                "
              >
                {item.date}
              </p>
            </div>
          ))}

          <button
            onClick={prevSlide}
            className="
              absolute left-[20px] top-1/2 -translate-y-1/2 z-[10]
            "
          >
            <Image src="/lib/icons/chevron-left.png" alt="Previous" width={40} height={40} />
          </button>

          <button
            onClick={nextSlide}
            className="
              absolute right-[20px] top-1/2 -translate-y-1/2 z-[10]
            "
          >
            <Image src="/lib/icons/chevron-right.png" alt="Next" width={40} height={40} />
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden px-[19px] pr-[20px] relative">
        <h2
          className="
            text-left font-league font-regular uppercase tracking-[-0.02em]
            text-[33px] leading-[100%] mb-[40px]
          "
        >
          <span
            className="
            font-[500] uppercase tracking-[-0.01em]
            text-[35px] xl:text-[44px] leading-[1] 
          "
          >
            <span style={{ visibility: showTakeA ? "visible" : "hidden" }}>
              {'Take a '} 
            </span>
            
            <span style={{ visibility: showCloserLook ? "visible" : "hidden" }}>
              <TitleStroke text={"Closer Look"} />
            </span>
            <br />
            <span style={{ visibility: showAt ? "visible" : "hidden" }}>
              {'At '} 
            </span>
            <span style={{ visibility: showRealHomes ? "visible" : "hidden" }}>
              {'real homes '}
            </span>
            <span style={{ visibility: showWeveEnhanced ? "visible" : "hidden" }}>
              {'we’ve enhanced'}
            </span>
            <br />
            <span style={{ visibility: showWithCustomFinishing ? "visible" : "hidden" }}>
              {'with custom finishing '}
            </span>
            <span style={{ visibility: showSolutions ? "visible" : "hidden" }}>
              {'solutions'}
            </span>
          </span>
        </h2>

        <div className="relative w-full flex justify-center">
          <Image
            src={lookItems[index].img}
            alt={lookItems[index].date}
            width={336}
            height={392}
            className="object-cover w-[336px] h-[392px] z-[1]"
          />
          <button
            onClick={prevSlide}
            className="absolute left-[12px] top-1/2 -translate-y-1/2 z-[10]"
          >
            <Image src="/lib/icons/chevron-left.png" alt="Previous" width={32} height={32} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-[12px] top-1/2 -translate-y-1/2 z-[10]"
          >
            <Image src="/lib/icons/chevron-right.png" alt="Next" width={32} height={32} />
          </button>
        </div>

        <p
          className="
            font-inter font-normal text-[16px] leading-[100%] tracking-[-0.02em]
            mt-[16px] text-center
          "
        >
          {lookItems[index].date}
        </p>
      </div>
    </section>
  );
};
