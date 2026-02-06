"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";


const accordionItems = [
  {
    id: 1,
    title: "ACCENT WALLS",
    text: "TV walls, fireplaces, nurseries - custom-built to reflect your taste. \nWe design and install personalized feature walls using wood, panels, decorative plaster, or wallpaper - for living rooms, bedrooms, or kids' spaces.",
    img: "/images/accent.png",
  },
  {
    id: 2,
    title: "TILE INSTALLATION",
    text: "Clean, durable tilework for bathrooms, kitchens, and hallways. We offer custom layouts, geometric patterns, and water-resistant finishes.",
    img: "/images/tile.png",
  },
  {
    id: 3,
    title: "BATHROOM REMODELING",
    text: "Full-service upgrades - from demolition and layout changes to tiling, lighting, and final touches. Designed for function and elegance.",
    img: "/images/bathroom.png",
  },
  {
    id: 4,
    title: "WALLPAPER APPLICATION",
    text: "Expert installation of high-end wallpaper - even for complex textures, patterns, and double-height surfaces.",
    img: "/images/wallpaper.png",
  },
];

export default function AccordionSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30% 0px" });


  const [showInMinneapolis, setShowInMinneapolis] = useState(false); 
  const [showOurInteriorFinishing, setShowOurInteriorFinishing] = useState(false); 
  const [showServices, setShowServices] = useState(false); 
  const [showContent, setShowContent] = useState(false); 

  useEffect(() => {
    const sequence = [
      { setter: setShowInMinneapolis, delay: 300 },
      { setter: setShowOurInteriorFinishing, delay: 300 },
      { setter: setShowServices, delay: 300 },
      { setter: setShowContent, delay: 300 },
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

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section ref={ref} id="services" className="bg-[rgb(var(--bg))] text-[rgb(var(--fg))] w-full">
      {/* Заголовок секции */}
      <div className="px-[20px] pt-[120px] lg:pt-[160px]">
        <h2
          style={{ fontFamily: "League Spartan, sans-serif" }}
          className="
            font-league font-regular lg:font-medium uppercase tracking-[-0.02em]
            text-[35px] xl:text-[44px] leading-[100%] md:ml-[170px] lg:ml-[410px] xl:ml-[640px] text-right md:text-left"
        >
          <span style={{ visibility: showOurInteriorFinishing ? "visible" : "hidden" }}>
            OUR INTERIOR <br className="block md:hidden" />
            </span>
            <span className="block text-left md:inline" 
            style={{ visibility: showOurInteriorFinishing ? "visible" : "hidden" }}>
              FINISHING&nbsp;
            
            <span style={{ visibility: showServices ? "visible" : "hidden" }} 
            className="text-transparent [-webkit-text-stroke:1px_rgb(var(--fg))]">
              SERVICES
            </span>
            <br />
            <span style={{ visibility: showInMinneapolis ? "visible" : "hidden" }}>
              {'IN MINNEAPOLIS '}
            </span>
            
          </span>
        </h2>
      </div>

      <div
        className={`flex flex-col mt-[40px] transition-all duration-700 ease-out
          ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}
      >
        {accordionItems.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={item.id}
              className={`relative transition-all duration-500 ease-in-out
                ${isActive ? "bg-[rgb(var(--acc))]" : "bg-transparent"}
              `}
            >
              <div className="absolute top-0 left-[20px] right-[20px] lg:left-[80px] lg:right-[80px] h-[0.5px] z-10 bg-[rgb(var(--fg))]"></div>

              <div className="absolute bottom-0 left-[20px] right-[20px] lg:left-[80px] lg:right-[80px] h-[0.5px] z-10 bg-[rgb(var(--fg))]"></div>
              <div className="overflow-hidden relative z-20">
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`transition-all duration-500 ease-in-out w-full flex justify-between items-center px-[20px] lg:px-[80px] relative ${
                    isActive ? "lg:py-[20px] lg:mt-[20px]" : "lg:py-[18px]"
                  }`}
                >
                  <div className="flex lg:items-center items-start gap-[30px] my-[12px] lg:my-0">
                    <span className="font-inter text-[16px] leading-[100%] text-[rgb(var(--fg))]">
                      {String(item.id).padStart(2, "0")}
                    </span>
                    <h3 className="font-inter text-[24px] lg:text-[32px] md:ml-[125px] lg:ml-[303px] xl:ml-[535px] font-normal leading-[100%] text-left text-[rgb(var(--fg))]">
                      {item.title}
                    </h3>
                  </div>
                  <svg
                    className={`transition-transform duration-500 ease-in-out w-[22px] h-[22px] lg:w-[22px] lg:h-[22px] text-[rgb(var(--fg))] ${
                      isActive ? "-rotate-[75deg]" : "rotate-0"
                    }`}
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.2267 15.744L6.42857 19.7092L6.37703 19.7223L6.36661 19.67L6.03932 18.0377L6.02983 17.9916L17.9105 14.8082L0.290622 4.63532L1.17392 3.1054L18.7947 13.2787L15.6109 1.39672L15.6555 1.3819L17.2328 0.849175L17.2833 0.832078L21.2752 15.7303L21.2267 15.744Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="0.1"
                    />
                  </svg>
                </button>
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isActive ? "max-h-[600px] opacity-100 lg:pb-[32px]" : "max-h-0 opacity-0"
                  }`}
                >
                  <div
                    className={`flex items-start lg:flex-row gap-[16px] px-[20px] lg:px-[80px] transition-all duration-500`}
                  >
                    <div className="flex-shrink-0 pb-[20px]">
                      <Image
                        src={item.img}
                        alt={item.title}
                        quality={100}
                        width={161}
                        height={223}
                        className="object-cover w-[161px] lg:w-[233px] h-[223px] lg:h-[155px]"
                      />
                    </div>
                    <p className="whitespace-pre-line font-inter font-normal text-[16px] leading-[115%] tracking-[-0.02em] lg:text-[20px] lg:ml-[104px] xl:ml-[334px] lg:max-w-[523px] text-[rgb(var(--fg))] opacity-80">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
