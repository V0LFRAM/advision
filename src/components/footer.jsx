"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <footer className="bg-[rgb(var(--bg))] min-w-[375px] md:min-w-0 pt-[31px] md:pt-[60px] font-inter text-[16px] tracking-[-0.02em] font-normal leading-[19px] text-[rgb(var(--fg))] relative w-full">
      <div className="absolute top-0 left-0 w-full border-t border-[rgb(var(--border))]" />
      <div className="flex flex-col xl:flex-row justify-start xl:justify-between xl:items-start px-[20px] xl:px-[80px] pt-[20px] md:pt-0">
        <div className="mb-[41px] md:mb-[20px] ml-[5px] md:ml-0 w-[326px] h-[92px] relative">
          {mounted && (
            <Image
              src={theme === "dark" ? "/images/logo-main-dark.svg" : "/images/logo-main-light.svg"}
              alt="EdVision Logo main"
              fill
              quality={100}
              className="object-contain"
              priority
            />
          )}
        </div>

        <div className="flex flex-col md:gap-[20px] xl:flex-row-reverse justify-start items-start w-full">
          <div>
            <p className="w-[305px] h-[57px] tracking-[-0.02em] font-normal text-[rgb(var(--fg))]">
              EdVision LLC — custom finishes, accent walls, tile & bathroom remodeling in
              Minneapolis and surrounding suburbs.{" "}
            </p>
            <div className="flex flex-row justify-start gap-[11px] md:gap-[8px] mt-[11px] z-10">
              <a
                href="https://www.instagram.com/edward_tiler?igsh=emhpb2ZmbXB2ZHUz"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-[25px] h-[25px]"
              >
                {mounted && (
                  <Image
                    src={
                      theme === "dark"
                        ? "/images/instagram-dark.png"
                        : "/images/instagram-light.png"
                    }
                    alt="Instagram"
                    fill
                    quality={100}
                    className="object-contain"
                    priority
                  />
                )}
              </a>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.0562 12.5762C23.0562 6.79111 18.3611 2.09595 12.576 2.09595C6.79086 2.09595 2.0957 6.79111 2.0957 12.5762C2.0957 17.6487 5.70092 21.8722 10.4799 22.8469V15.7203H8.38387V12.5762H10.4799V9.95615C10.4799 7.93346 12.1253 6.28806 14.148 6.28806H16.7681V9.43214H14.672C14.0956 9.43214 13.624 9.90375 13.624 10.4802V12.5762H16.7681V15.7203H13.624V23.0041C18.9165 22.4801 23.0562 18.0155 23.0562 12.5762Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-col items-start mt-[28px] md:mt-0 mr-0 md:mr-[79px]">
            <div className="flex flex-col items-start">
              <p className="inline">Contacts:</p>
              <a href="tel:+17634855531" className="flex mt-[6px] gap-[10px]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.77817 1.7021C5.79234 0.693763 7.46234 0.87293 8.31151 2.00793L9.36317 3.41126C10.0548 4.3346 9.99317 5.6246 9.17234 6.44043L8.97401 6.63876C8.95152 6.72202 8.94923 6.80944 8.96734 6.89376C9.01984 7.23376 9.30401 7.95376 10.494 9.1371C11.684 10.3204 12.409 10.6038 12.754 10.6571C12.8409 10.6746 12.9307 10.672 13.0165 10.6496L13.3565 10.3113C14.0865 9.58626 15.2065 9.45043 16.1098 9.94126L17.7015 10.8079C19.0657 11.5479 19.4098 13.4013 18.2932 14.5121L17.109 15.6888C16.7357 16.0596 16.234 16.3688 15.6223 16.4263C14.114 16.5671 10.5998 16.3871 6.90567 12.7146C3.45817 9.28626 2.79651 6.29626 2.71234 4.82293C2.67067 4.07793 3.02234 3.44793 3.47067 3.00293L4.77817 1.7021ZM7.31151 2.7571C6.88901 2.19293 6.10234 2.14793 5.65901 2.58876L4.35067 3.88876C4.07567 4.1621 3.94401 4.46376 3.96067 4.7521C4.02734 5.92293 4.56067 8.62043 7.78734 11.8288C11.1723 15.1938 14.2982 15.2946 15.5065 15.1813C15.7532 15.1588 15.9982 15.0304 16.2273 14.8029L17.4107 13.6254C17.8923 13.1471 17.7865 12.2754 17.1048 11.9054L15.5132 11.0396C15.0732 10.8013 14.5582 10.8796 14.2382 11.1979L13.859 11.5754L13.4173 11.1321C13.859 11.5754 13.8582 11.5763 13.8573 11.5763L13.8565 11.5779L13.854 11.5804L13.8482 11.5854L13.8357 11.5971C13.8005 11.6297 13.7626 11.6593 13.7223 11.6854C13.6557 11.7296 13.5673 11.7788 13.4565 11.8196C13.2315 11.9038 12.9332 11.9488 12.5648 11.8921C11.8423 11.7813 10.8848 11.2888 9.61234 10.0238C8.34067 8.75876 7.84401 7.8071 7.73234 7.08543C7.67484 6.7171 7.72067 6.41876 7.80567 6.19376C7.85246 6.06715 7.91943 5.94896 8.00401 5.84376L8.03067 5.8146L8.04234 5.8021L8.04734 5.7971L8.04984 5.7946L8.05151 5.79293L8.29151 5.5546C8.64817 5.19876 8.69817 4.6096 8.36234 4.16043L7.31151 2.7571Z"
                    fill="currentColor"
                  />
                </svg>
                +17634855531
              </a>

              <a
                href="mailto:edvisions.pro@gmail.com"
                className="lineHeight-20px flex items-center mt-[8px] gap-[10px]"
              >
                <div className="relative w-[20px] h-[20px]">
                  {mounted && (
                    <Image
                      src={theme === "dark" ? "/images/email-dark.png" : "/images/email-light.png"}
                      alt="Envelope"
                      fill
                      quality={100}
                      className="object-contain"
                      priority
                    />
                  )}
                </div>
                edvisions.pro@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse justify-start md:justify-between md:items-center md:text-[rgba(147,140,130,1)] mt-[28px] md:mt-[83px] pt-0 md:pt-[19px] pb-0 md:pb-[20px] border-t-0 md:border-t md:border-[rgb(var(--border))] w-full">
        <div className="flex flex-col md:flex-row items-start pl-[20px] pr-[200px]">
          <p className="mr-0 md:mr-[28px]">Socials</p>
          <p className="whiteSpace-nowrap w-[104px]">Privacy Policy</p>
        </div>
        <div className="mt-[40px] md:mt-0">
          <p className="w-full border-t border-[rgb(var(--border))] md:border-t-0 italic md:not-italic text-[10px] md:text-[16px] text-[rgba(147,140,130,1)] leading-[12px] px-[20px] md:px-[80px] pt-[6px] md:pt-0 pb-[8px] whitespace-nowrap">
            Designed by Iryna Savchenko
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
