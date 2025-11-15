"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import { NavContactsSideBar } from "./nav-contacts-side-bar";
import { Nav } from "./navigation";
import { useBreakpointValue } from "@chakra-ui/react";

export function HeaderSection() {
  const [isOpen, setIsOpen] = useState(false);
  const variant = useBreakpointValue({ base: false, xl: true });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Чистим при размонтировании
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className="
        relative w-full z-[50] border-b border-[rgb(var(--border))]
        bg-[rgb(var(--bg))] md:py-[20px] md:px-[80px]
      "
    >
      {/* HEADER BAR */}
      <div
        className="
          flex items-center justify-between
          h-[80px]
          mx-[21px] md:mx-0
        "
      >
        {/* LOGO */}
        <div className="relative w-[69px] md:w-[99px] h-[40px] md:h-[57px]">
          <Image
            src="/images/logo-big-light.png"
            alt="Logo"
            fill
            className="object-contain dark:hidden"
            priority
          />
          <Image
            src="/images/logo-big-dark.png"
            alt="Logo"
            fill
            className="object-contain hidden dark:block"
            priority
          />
        </div>

        {/* ЦЕНТРАЛЬНОЕ МЕНЮ (только десктоп) */}
        {variant && <Nav />}

        {/* НОМЕР ТЕЛЕФОНА справа (только десктоп) */}
        <div className="hidden xl:block">
          <a
            href="tel:+17634855531"
            className="font-inter text-[16px] text-[rgb(var(--fg))] hover:opacity-80"
          >
            +17634855531
          </a>
        </div>

        {/* BURGER */}
        <button
          onClick={() => setIsOpen((s) => !s)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
          className="xl:hidden flex items-center"
        >
          <svg
            width="28"
            height="13"
            viewBox="0 0 28 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[rgb(var(--fg))]"
          >
            <line x1="0" y1="0.5" x2="28" y2="0.5" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="6.5" x2="28" y2="6.5" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="12.5" x2="28" y2="12.5" stroke="currentColor" strokeWidth="1" />
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed top-0 right-0
          h-screen w-full
          bg-[rgb(var(--bg))]
          transform transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          flex flex-col
        `}
      >
        {/* LINE + LOGO */}
        <div className="flex items-center justify-between h-[80px] px-[21px] border-b border-[rgb(var(--border))]">
          <div className="relative w-[69px] h-[40px]">
            <Image
              src="/images/logo-big-light.png"
              alt="Logo"
              fill
              className="object-contain dark:hidden"
            />
            <Image
              src="/images/logo-big-dark.png"
              alt="Logo"
              fill
              className="object-contain hidden dark:block"
            />
          </div>

          {/* CROSS */}
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="flex items-center"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[rgb(var(--fg))]"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* LINKS */}
        {!variant && <Nav />}

        {/* SOCIALS + TOGGLE */}
        <div
          className="
            flex items-center justify-between
            mt-auto pl-[19px]
            pb-[13px]
          "
        >
          <div className="flex items-center gap-[10px]">
            {/* Instagram */}
            <div className="relative w-[24px] h-[24px]">
              <Image
                src="/images/instagram-light.png"
                alt="Instagram"
                fill
                className="object-contain dark:hidden"
              />
              <Image
                src="/images/instagram-dark.png"
                alt="Instagram"
                fill
                className="object-contain hidden dark:block"
              />
            </div>

            {/* Facebook */}
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[rgb(var(--fg))]"
            >
              <path
                d="M21.2086 10.576C21.2086 4.79086 16.5134 0.0957031 10.7283 0.0957031C4.94321 0.0957031 0.248047 4.79086 0.248047 10.576C0.248047 15.6484 3.85326 19.872 8.63226 20.8466V13.7201H6.53621V10.576H8.63226V7.95591C8.63226 5.93321 10.2777 4.28781 12.3004 4.28781H14.9204V7.43189H12.8244C12.248 7.43189 11.7763 7.9035 11.7763 8.47992V10.576H14.9204V13.7201H11.7763V21.0038C17.0689 20.4798 21.2086 16.0152 21.2086 10.576Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="mr-[20px]">
            <ThemeToggle />
          </div>
        </div>
        <NavContactsSideBar />
      </div>
    </header>
  );
}
