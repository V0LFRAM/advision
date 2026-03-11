"use client";

import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/lib/icons/arrow";
import { Footer } from "@/components/footer";
import { GridBack } from "@/components/ui/grid-back";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[rgb(var(--bg))]">
      <section className="relative flex-1 w-full flex flex-col items-center pt-[88px] pb-[68px] z-10">
        <GridBack />

        <div className="relative z-20 flex flex-col items-center justify-center w-full flex-1">
          <div className="relative">
            <div className="relative flex items-center justify-center h-[240px] md:h-[350px] lg:h-[451px] w-fit">
              <div className="flex gap-[120px] md:gap-[200px] lg:gap-[300px] z-10 pointer-events-none">
                <span className="font-inter font-normal text-[180px] md:text-[280px] lg:text-[400px] leading-[100%] tracking-[-0.02em] text-[rgb(var(--fg))]">
                  4
                </span>
                <span className="font-inter font-normal text-[180px] md:text-[280px] lg:text-[400px] leading-[100%] tracking-[-0.02em] text-[rgb(var(--fg))]">
                  4
                </span>
              </div>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] md:w-[350px] md:h-[350px] lg:w-[451px] lg:h-[451px] z-20 pointer-events-none">
                <Image
                  src="/images/404-Bricks.png"
                  alt="404 Bricks"
                  fill
                  priority
                  quality={100}
                  className="object-cover"
                />
              </div>

              <div className="absolute font-inter font-normal text-[10px] lg:text-[20px] leading-[100%] tracking-[-0.02em] text-[rgb(var(--fg))] bottom-[65px] -right-[5px] md:bottom-[90px] md:right-[0px] lg:bottom-[100px] lg:-right-[10px]">
                oops
              </div>

              <div className="absolute font-inter font-normal text-[10px] md:text-[16px] lg:text-[20px] leading-[100%] tracking-[-0.02em] text-[rgb(var(--fg))] top-[35px] md:top-[40px] left-[20px] md:left-[30px] lg:left-[60px]">
                page not found
              </div>
            </div>

            <div className="flex justify-center w-full mt-0">
              <Link
                href="/"
                className="group relative overflow-hidden border-[#9B948A] border-[1px] w-[280px] md:w-[371px] h-[45px] flex items-center justify-center z-[30]"
              >
                <span className="relative z-20 flex items-center gap-3 text-white group-hover:text-[rgb(var(--fg))] transition-colors duration-1000 font-inter font-normal text-[20px] leading-[100%] tracking-[-0.02em]">
                  Back to Home
                  <span className="mt-[2px] transition-transform duration-1000 ease-in-out group-hover:rotate-45 origin-center">
                    <Arrow />
                  </span>
                </span>
                <div className="absolute inset-0 bg-[#9B948A] z-0" />
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[rgb(var(--bg))] rounded-full transition-transform duration-1000 ease-in-out scale-0 group-hover:scale-[45] z-10" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full z-20 relative bg-[rgb(var(--bg))]">
        <Footer />
      </div>
    </div>
  );
}
