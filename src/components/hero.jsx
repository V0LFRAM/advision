import { Arrow } from "@/lib/icons/arrow";
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full ">
      <div className="pt-[66px] xl:pt-[88px] pl-[20px] pr-[20px] xl:pl-[82px] xl:pr-[78px] relative flex flex-col gap-y-10">
        <h1 className="flex flex-wrap items-baseline gap-x-3">
          <div>
            <span
              className="
              font-league font-semibold uppercase tracking-[-0.01em]
              text-[40px] xl:text-[80px] leading-[1] text-transparent mr-[15px]
              [-webkit-text-stroke:2px_rgb(var(--fg))]
            "
            >
              ACCENT
            </span>

            <span
              className="
              font-league font-semibold uppercase tracking-[-0.01em]
              text-[40px] xl:text-[80px] leading-[1] text-[rgb(var(--fg))] relative
            "
            >
              Walls & Cust
              <span className="relative inline-block">
                o
                <span className="absolute top-[-7px] right-[14px]">
                  <ThemeToggle />
                </span>
              </span>
              m Tile
            </span>
          </div>

          <div className="ml-auto">
            <span
              className="
              font-league font-semibold uppercase tracking-[-0.01em]
              text-[40px] xl:text-[80px] leading-[1] text-[rgb(var(--fg))] mr-[15px]
            "
            >
              That Make a
            </span>

            <span
              className="
              font-league font-semibold uppercase tracking-[-0.01em]
              text-[40px] xl:text-[80px] leading-[1] text-transparent
              [-webkit-text-stroke:2px_rgb(var(--fg))]
            "
            >
              Statement
            </span>
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
            <button className="bg-[#9B948A] w-[159px] xl:w-[197px] h-[34px] xl:h-[46px] flex items-center justify-center gap-2">
              Get a Free Quote
              <span className="mt-[2px]">
                <Arrow />
              </span>
            </button>
            <button className="border-[#9B948A] border-[1px] w-[159px] xl:w-[197px] h-[34px] xl:h-[46px] flex items-center justify-center gap-2">
              Send Your Idea
              <span className="mt-[2px]">
                <Arrow />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="lg:hidden relative w-full h-screen">
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
      <div className="hidden lg:block relative w-full h-screen">
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
  );
};

export { HeroSection };
