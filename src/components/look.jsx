"use client";

import { useState } from "react";
import Image from "next/image";
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

  // 🔹 изменено: теперь просто цикличное переключение
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % lookItems.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + lookItems.length) % lookItems.length);
  };

  // 🔸 добавлено: функция для расчёта трёх видимых элементов по кругу
  const getVisibleItems = () => {
    const total = lookItems.length;
    const left = (index - 1 + total) % total;
    const center = index;
    const right = (index + 1) % total;
    return [lookItems[left], lookItems[center], lookItems[right]];
  };

  const visibleItems = getVisibleItems(); // 🔸 добавлено

  return (
    <section
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
            Take a <TitleStroke text={"Closer Look"} />
            <br />
            At real homes we’ve enhanced
            <br />
            with custom finishing solutions
          </span>
        </h2>

        {/* 🔹 изменено: теперь отображаем именно три картинки по кругу */}
        <div className="relative flex justify-between gap-[20px] lg:gap-[80px] items-center">
          {visibleItems.map((item, idx) => (
            <div
              key={idx}
              className={`
      relative transition-all duration-500
      ${idx === 1 ? "hidden xl:block" : "block"}
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

          {/* 🔸 добавлены стрелки поверх всех изображений */}
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
            Take a <TitleStroke text={"Closer Look"} />
            <br />
            At real homes we’ve enhanced
            <br />
            with custom finishing solutions
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
