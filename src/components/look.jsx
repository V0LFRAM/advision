"use client";
import { useState } from "react";
import Image from "next/image";

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
    <section className="w-full bg-[#1E1E1C] pt-[120px] xl:pt-[180px] pb-[120px] xl:pb-[200px] overflow-hidden">
      {/* Desktop */}
      <div className="hidden xl:block px-[80px] xl:pr-[67px] relative">
        <h2
          style={{ fontFamily: "League Spartan, sans-serif" }}
          className="
            text-right font-league font-regular uppercase tracking-[-0.02em]
            text-[44px] leading-[100%] text-[#DFE0DB] mb-[60px]
          "
        >
          Take a{" "}
          <span
            className="
            font-league font-semibold uppercase tracking-[-0.01em]
            text-[35px] xl:text-[44px] leading-[1] text-transparent 
            [-webkit-text-stroke:2px_rgb(var(--fg))]
          "
          >
            Closer Look
          </span>
          <br />
          At real homes we’ve enhanced
          <br />
          with custom finishing solutions
        </h2>

        {/* 🔹 изменено: теперь отображаем именно три картинки по кругу */}
        <div className="relative flex justify-between gap-[80px] items-center">
          {visibleItems.map((item, idx) => (
            <div key={idx} className="relative transition-all duration-500">
              <Image
                src={item.img}
                alt={item.date}
                width={373}
                height={438}
                className="object-cover w-[373px] h-[438px] z-[1] rounded-lg"
              />
              <p
                className="
                  font-inter font-normal text-[20px] leading-[100%] tracking-[-0.02em]
                  text-[#DFE0DB] mt-[20px] text-center
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
      <div className="xl:hidden px-[19px] pr-[20px] relative">
        <h2
          className="
            text-left font-league font-regular uppercase tracking-[-0.02em]
            text-[33px] leading-[100%] text-[#DFE0DB] mb-[40px]
          "
        >
          Take a{" "}
          <span className="text-transparent [-webkit-text-stroke:1px_#DFE0DB] text-[35px]">
            Closer Look
          </span>
          <br />
          At real homes we’ve enhanced
          <br />
          with custom finishing solutions
        </h2>

        <div className="relative w-full flex justify-center">
          <Image
            src={lookItems[index].img}
            alt={lookItems[index].date}
            width={336}
            height={392}
            className="object-cover w-[336px] h-[392px] z-[1] rounded-lg"
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
            text-[#DFE0DB] mt-[16px] text-center
          "
        >
          {lookItems[index].date}
        </p>
      </div>
    </section>
  );
};
