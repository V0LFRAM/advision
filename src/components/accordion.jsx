"use client";
import { useState } from "react";
import Image from "next/image";

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

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-[#1E1E1C] text-white w-full">
      {/* Заголовок секции */}
      <div className="px-[20px] pt-[40px]">
        <h2
          style={{ fontFamily: "League Spartan, sans-serif" }}
          className="
            font-league font-regular md:font-medium uppercase tracking-[-0.02em]
            text-[35px] md:text-[44px] leading-[100%] md:ml-[640px] text-right md:text-left"
        >
          OUR INTERIOR <br className="block md:hidden" />
          <span className="block text-left md:inline">
            FINISHING&nbsp;
            <span className="text-transparent [-webkit-text-stroke:1px_rgb(var(--fg))]">
              SERVICES
            </span>
            <br />
            IN MINNEAPOLIS
          </span>
        </h2>
      </div>

      {/* Контейнер аккордеона */}
      <div className="flex flex-col mt-[40px]">
        {accordionItems.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={item.id}
              className={`relative transition-all duration-500 ease-in-out
                ${isActive ? "bg-[#43413D]" : "bg-transparent"}
              `}
            >
              {/* Верхняя линия */}
              <div className="absolute top-0 left-[20px] right-[20px] md:left-[80px] md:right-[80px] h-[0.5px] bg-[#DFE0DB] z-10"></div>

              {/* Нижняя линия */}
              <div className="absolute bottom-0 left-[20px] right-[20px] md:left-[80px] md:right-[80px] h-[0.5px] bg-[#DFE0DB] z-10"></div>
              {/* Верхняя строка (номер + заголовок + стрелка) */}
              <div className="overflow-hidden relative z-20">
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`transition-all duration-500 ease-in-out w-full flex justify-between items-center px-[20px] md:px-[80px] relative ${
                    isActive ? "md:pt-[20px]" : "md:pt-0"
                  }`}
                >
                  <div className="flex md:items-center items-start gap-[30px] my-[12px] md:my-0">
                    <span className="font-inter text-[16px] leading-[100%]">
                      {String(item.id).padStart(2, "0")}
                    </span>
                    <h3 className="font-inter text-[24px] md:text-[32px] md:ml-[535px] font-normal leading-[100%] text-left">
                      {item.title}
                    </h3>
                  </div>
                  <Image
                    src="/lib/icons/arrow.png"
                    alt="arrow"
                    width={80}
                    height={80}
                    className={`transition-transform duration-500 ease-in-out w-[50px] h-[50px] md:w-[70px] md:h-[70px] ${
                      isActive ? "rotate-0" : "rotate-90"
                    }`}
                  />
                </button>
                {/* Контент (картинка + текст) */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isActive ? "max-h-[600px] opacity-100 md:pb-[32px]" : "max-h-0 opacity-0"
                  }`}
                >
                  <div
                    className={`flex items-start md:flex-row gap-[16px]  px-[20px] md:px-[80px] transition-all duration-500`}
                  >
                    <div className="flex-shrink-0">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={161}
                        height={223}
                        className="object-cover w-[161px] md:w-[233px] h-[223px] md:h-[155px]"
                      />
                    </div>
                    <p className="whitespace-pre-line font-inter text-[16px] md:text-[20px] leading-[130%] md:ml-[334px] md:max-w-[523px] font-normal text-[#E6E6E6]">
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
