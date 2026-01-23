"use client";

import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { TitleStroke } from "./ui/title-stroke";

export default function PrecisionSection({ openModal }) {
  return (
    <section className="w-full relative overflow-hidden">
      {/* background layer sits below page lines -> negative z */}
      <div className="absolute inset-0 -z-10 bg-[rgb(var(--bg))]" />

      {/* DESKTOP layout (xl and up) */}
      <div className="hidden lg:flex w-full pl-[193px] lg:pl-[93px] xl:pl-[193px] pr-[80px] pt-[120px] relative z-20">
        {/* Левая колонка с рисунком (ширина 544px) */}
        <div className="lg:w-[244px] xl:w-[544px] flex-shrink-0 pt-[375px]">
          <Image
            src="/images/precision-corridor.png"
            alt="design corridor"
            width={197}
            height={253}
            className="object-cover"
            priority
          />
        </div>

        {/* Правая колонка: заголовок, параграф, кнопка, нижний рисунок */}
        <div className="flex flex-col pl-[32px] xl:pl-[60px]">
          {/* Заголовок */}
          <h2
            className="uppercase tracking-[-0.01em] text-[35px] xl:text-[44px] leading-[1] relative mb-[20px] max-w-[602px]"
            style={{
              fontFamily:
                '"League Spartan", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontWeight: 500,
            }}
          >
            Have a Design in Mind or
            <br />
            SOMETHING YOU{" "}
            <span className="inline-block align-baseline">
              <TitleStroke text={"LOVED"} />
            </span>
            <br />
            {/* 3-я и 4-я строки с отступом слева -40px (на 40px левее) */}
            <span className="block pl-[-40px]">LET US BRING IT TO LIFE WITH STYLE</span>
            <span className="block pl-[-40px]">
              AND{" "}
              <span className="inline-block align-baseline">
                <TitleStroke text={"precision"} />
              </span>
            </span>
          </h2>

          {/* Параграф */}
          <p className="text-[18px] leading-[1.55] text-[rgb(var(--fg))] mb-6 max-w-[517px]">
            Whether you've saved a design from Pinterest, spotted something amazing on Instagram, or
            simply imagined how your perfect wall or bathroom should look — we're ready to help make
            it real. Just send us a photo, sketch, or even a few keywords — and we'll take it from
            there. You'll receive a clear plan, expert recommendations, and a transparent quote —
            all within 24 hours.
          </p>

          {/* Кнопка — левый край совпадает с параграфом */}
          <button
            onClick={() => openModal("questionary")}
            className="relative z-30 w-fit flex items-center gap-3 bg-[#A89F94] hover:bg-[#92897F] transition-all px-8 py-3 text-[17px] font-medium"
          >
            Send Us Your Idea
            <FiArrowUpRight size={20} />
          </button>

          {/* Нижняя картинка — смещена вправо, должна доходить до правого края страницы */}
          <div className="mt-[60px] ml-auto">
            <Image
              src="/images/precision-hall.png"
              alt="design hall"
              width={623}
              height={332}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* MOBILE layout (below xl) */}
      <div className="lg:hidden flex flex-col w-full px-[18px] pt-[60px] pb-0 z-20">
        {/* Заголовок мобильной версии - разделен на две части */}
        <div className="mb-2">
          {/* Первая часть заголовка с отступом слева 22px */}
          <h2
            className="uppercase tracking-[-0.02em] text-[35px] leading-[90%] text-[rgb(var(--fg))] ml-[16px]"
            style={{
              fontFamily: '"League Spartan", sans-serif',
              fontWeight: 400,
              fontStyle: "regular",
            }}
          >
            HAVE A DESIGN IN MIND OR SOMETHING
            <br />
            YOU {/* Уменьшаем размер компонента TitleStroke для соответствия высоте букв */}
            <span className="inline-block align-baseline scale-[0.9] origin-left">
              <TitleStroke text={"LOVED"} />
            </span>
            {""}
            ONLINE?
          </h2>

          {/* Вторая часть заголовка */}
          <h2
            className="uppercase tracking-[-0.02em] text-[35px] leading-[90%] text-[rgb(var(--fg))]"
            style={{
              fontFamily: '"League Spartan", sans-serif',
              fontWeight: 400,
              fontStyle: "regular",
            }}
          >
            LET US BRING IT TO LIFE WITH STYLE
            <br />
            AND {/* Уменьшаем размер компонента TitleStroke для соответствия высоте букв */}
            <span className="inline-block align-baseline scale-[0.9] origin-left">
              <TitleStroke text={"PRECISION"} />
            </span>
          </h2>
        </div>

        {/* Верхняя мини-картинка на мобильном - верх на уровне верха букв нижней строки заголовка */}
        <div className="mx-auto mb-6">
          <Image
            src="/images/precision-corridor.png"
            alt="design mobile corridor"
            width={72}
            height={87}
            className="object-cover absolute right-[20px] top-[225px]" /* Подогнано под нижнюю строку заголовка */
          />
        </div>

        {/* Контейнер параграфа и кнопки с выравниванием по левому краю */}
        <div className="w-full mx-0 mb-[28px]">
          <p
            className="text-[16px] leading-[115%] tracking-[-0.02em] text-[rgb(var(--fg))] mb-[24px] ml-0 w-[250px]"
            style={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: 400,
              fontStyle: "normal",
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
          {/* Кнопка с фиксированным размером 159x34px и выравниванием по левому краю */}
          <button
            onClick={() => openModal("questionary")}
            className="relative z-30 flex items-center justify-center gap-3 bg-[#A89F94] hover:bg-[#92897F] transition-all px-6 py-3 text-[16px] font-medium w-[159px] h-[34px] ml-0"
          >
            <span className="text-nowrap">Send Us Your Idea</span>
            <FiArrowUpRight size={20} />
          </button>
        </div>

        {/* Bottom image — должна занять всю ширину экрана (375px). Родитель имеет px-[20px], поэтому используем -mx-[20px] + w-screen */}
        <div className="-mx-[20px] flex justify-center">
          <div className="relative w-[375px] h-[282px] overflow-hidden">
            <Image
              src="/images/precision-hall.png"
              alt="design mobile hall"
              fill
              className="object-cover"
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
