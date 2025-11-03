"use client";
import { useState } from "react";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

export function HeaderSection() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["About us", "Services", "Projects", "Your Idea", "Get a Quote"];

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

        <nav className="hidden md:flex items-center gap-[20px]">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="
          font-inter font-medium text-[16px]
          text-[rgb(var(--fg))] hover:opacity-80
        "
            >
              {item}
            </a>
          ))}
        </nav>

        {/* НОМЕР ТЕЛЕФОНА справа (только десктоп) */}
        <div className="hidden md:block">
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
          className="md:hidden flex items-center"
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
      <nav
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
        <div className="flex flex-col gap-[24px] mt-6 px-[21px]">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="
                font-inter font-medium text-[20px]
                text-[rgb(var(--fg))] hover:opacity-80
              "
            >
              {item}
            </a>
          ))}
        </div>

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
        <div
          className="
            flex flex-col items-start px-[19px]
            border-t border-[rgb(var(--border))]
            pt-[20px] pb-[28px]
          "
        >
          <div className="flex flex-row items-center mt-[6px] gap-[11px]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.77817 1.7021C5.79234 0.693763 7.46234 0.87293 8.31151 2.00793L9.36317 3.41126C10.0548 4.3346 9.99317 5.6246 9.17234 6.44043L8.97401 6.63876C8.95152 6.72202 8.94923 6.80944 8.96734 6.89376C9.01984 7.23376 9.30401 7.95376 10.494 9.1371C11.684 10.3204 12.409 10.6038 12.754 10.6571C12.8409 10.6746 12.9307 10.672 13.0165 10.6496L13.3565 10.3113C14.0865 9.58626 15.2065 9.45043 16.1098 9.94126L17.7015 10.8079C19.0657 11.5479 19.4098 13.4013 18.2932 14.5121L17.109 15.6888C16.7357 16.0596 16.234 16.3688 15.6223 16.4263C14.114 16.5671 10.5998 16.3871 6.90567 12.7146C3.45817 9.28626 2.79651 6.29626 2.71234 4.82293C2.67067 4.07793 3.02234 3.44793 3.47067 3.00293L4.77817 1.7021ZM7.31151 2.7571C6.88901 2.19293 6.10234 2.14793 5.65901 2.58876L4.35067 3.88876C4.07567 4.1621 3.94401 4.46376 3.96067 4.7521C4.02734 5.92293 4.56067 8.62043 7.78734 11.8288C11.1723 15.1938 14.2982 15.2946 15.5065 15.1813C15.7532 15.1588 15.9982 15.0304 16.2273 14.8029L17.4107 13.6254C17.8923 13.1471 17.7865 12.2754 17.1048 11.9054L15.5132 11.0396C15.0732 10.8013 14.5582 10.8796 14.2382 11.1979L13.859 11.5754L13.4173 11.1321C13.859 11.5754 13.8582 11.5763 13.8573 11.5763L13.8565 11.5779L13.854 11.5804L13.8482 11.5854L13.8357 11.5971C13.8005 11.6297 13.7626 11.6593 13.7223 11.6854C13.6557 11.7296 13.5673 11.7788 13.4565 11.8196C13.2315 11.9038 12.9332 11.9488 12.5648 11.8921C11.8423 11.7813 10.8848 11.2888 9.61234 10.0238C8.34067 8.75876 7.84401 7.8071 7.73234 7.08543C7.67484 6.7171 7.72067 6.41876 7.80567 6.19376C7.85246 6.06715 7.91943 5.94896 8.00401 5.84376L8.03067 5.8146L8.04234 5.8021L8.04734 5.7971L8.04984 5.7946L8.05151 5.79293L8.29151 5.5546C8.64817 5.19876 8.69817 4.6096 8.36234 4.16043L7.31151 2.7571Z"
                fill="currentColor"
              />
            </svg>
            <a href="tel:+17634855531">+17634855531</a>
          </div>
          <div className="flex flex-row items-center mt-[8px] gap-[7px]">
            <div className="relative w-[20px] h-[20px]">
              <Image
                src="/images/email-light.png"
                alt="Envelope"
                fill
                className="object-contain dark:hidden"
                priority
              />
              <Image
                src="/images/email-dark.png"
                alt="Envelope"
                fill
                className="object-contain hidden dark:block"
                priority
              />
            </div>
            <a href="mailto:edvisions.pro@gmail.com" className="lineHeight-20px">
              edvisions.pro@gmail.com
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
