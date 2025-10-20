"use client";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";

/*
  HeaderSection
  - responsive for desktop and mobile
  - colors via CSS variables:
      --bg   -> основний фон (меню моб та ін.)
      --fg   -> колір тексту / іконок
      --acc  -> колір акценту (вимога: фон як у аккордеона)
  - z-index >= 50
*/

export function HeaderSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="w-full z-50"
      style={{
        background: "rgb(var(--acc))", // фон як у аккордеона, непрозорий
      }}
    >
      {/* DESKTOP / MOBILE wrapper */}
      <div
        className="hidden md:flex items-center justify-between"
        style={{
          height: "99px", // desktop height: top21 + logo57 + bottom21 = 99
          paddingLeft: "80px",
          paddingRight: "80px",
        }}
      >
        {/* left logo */}
        <div className="flex items-center" style={{ marginTop: "21px", marginBottom: "21px" }}>
          {/* Тут вставляй свій SVG-логотип замість <Logo /> */}
          <div style={{ width: 99, height: 57 }}>
            {/* Placeholder: заміни на свій SVG */}
            <Logo />
          </div>
        </div>

        {/* center nav */}
        <nav className="flex gap-[20px] items-center" aria-label="Main navigation">
          {["About us", "Services", "Projects", "Your Idea", "Get a Quote"].map((item) => (
            <a
              key={item}
              href="#"
              className="font-inter"
              style={{
                fontWeight: 500,
                fontStyle: "Medium",
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "-2%",
                color: "rgb(var(--fg))",
              }}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* right phone */}
        <div
          style={{
            marginRight: "80px",
            color: "rgb(var(--fg))",
          }}
        >
          <a
            href="tel:+17634855531"
            className="font-inter"
            style={{
              fontWeight: 400,
              fontStyle: "Regular",
              fontSize: "16px",
              lineHeight: "100%",
              letterSpacing: "-2%",
              color: "rgb(var(--fg))",
            }}
          >
            +17634855531
          </a>
        </div>
      </div>

      {/* MOBILE */}
      <div
        className="flex md:hidden items-center justify-between"
        style={{
          height: "80px", // approx: top20 + logo40 + bottom20
          paddingLeft: "21px",
          paddingRight: "21px",
        }}
      >
        {/* logo small */}
        <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <div style={{ width: 69, height: 40 }}>
            {/* Placeholder logo — заміни на свій SVG */}
            <Logo small />
          </div>
        </div>

        {/* hamburger / close */}
        <button
          onClick={() => setIsOpen((s) => !s)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
          className="flex items-center"
          style={{ paddingTop: "34px", paddingBottom: "34px" }}
        >
          {!isOpen ? (
            // Hamburger — використовує currentColor
            <svg
              width="28"
              height="13"
              viewBox="0 0 28 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "rgb(var(--fg))" }}
              aria-hidden
            >
              <line x1="0" y1="0.5" x2="28" y2="0.500002" stroke="currentColor" strokeWidth="1" />
              <line x1="0" y1="6.5" x2="28" y2="6.5" stroke="currentColor" strokeWidth="1" />
              <line x1="0" y1="12.5" x2="28" y2="12.5" stroke="currentColor" strokeWidth="1" />
            </svg>
          ) : (
            // Cross — використовує currentColor
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "rgb(var(--fg))" }}
              aria-hidden
            >
              <path
                d="M1 1L15 15M15 1L1 15"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.5"
              />
            </svg>
          )}
        </button>

        {/* Mobile menu panel (sliding from right) */}
        {/* Visible only on mobile; slides under header */}
        <div
          className={`fixed top-0 right-0 md:hidden z-40 h-screen w-full transform transition-transform duration-500 ease-in-out`}
          style={{
            // меню починається одразу під header (тобто його верх = висота header)
            // тут робимо translateX в залежності від isOpen
            transform: isOpen ? "translateX(0%)" : "translateX(100%)",
            background: "rgb(var(--bg))", // непрозорий фон як основного bg схеми
            // щоб меню було під хедером, ми ставимо top: headerHeight
            // але оскільки меню fixed та ми хочемо, щоб хедер залишався над ним, header z-index 50 > menu z-40
            top: "0",
          }}
        >
          {/* spacer equal header height to have menu content start below header */}
          <div style={{ height: "80px" }} aria-hidden />

          {/* menu content container */}
          <div style={{ paddingLeft: "20px", paddingRight: "20px", position: "relative" }}>
            {/* menu items starting at 56px from header */}
            <div
              style={{ marginTop: "56px", display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {["About us", "Services", "Projects", "Your Idea", "Get a Quote"].map((it) => (
                <a
                  key={it}
                  href="#"
                  className="font-inter"
                  style={{
                    fontSize: "20px",
                    lineHeight: "100%",
                    color: "rgb(var(--fg))",
                    textAlign: "left",
                  }}
                >
                  {it}
                </a>
              ))}
            </div>

            {/* social icons positioned relative to content:
                Под посленим пунктом на расстоянии 342px расположены две иконки...
                Реалізація: absolute позиція від верхнього краю menu content (я зробив top: calc(56px + 5*line + gaps + 342px) у вигляді CSS calc)
            */}
            <div
              style={{
                position: "absolute",
                // приблизний розрахунок: 56px (від хедера) + 5 пунктів * 20px (приблизна висота рядка) + 4 gaps*20px + 342px
                // використовуємо calc для гнучкості
                top: "calc(56px + 5*20px + 4*20px + 342px)", // best-effort згідно техзавдання
                left: "19px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              {/* Instagram */}
              <div style={{ width: 25, height: 25 }}>
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "rgb(var(--fg))" }}
                >
                  <path
                    d="M1.14453 14.7689V6.38467C1.14453 4.9949 1.69662 3.66205 2.67933 2.67933C3.66205 1.69662 4.9949 1.14453 6.38467 1.14453H14.7689C16.1587 1.14453 17.4915 1.69662 18.4742 2.67933C19.4569 3.66205 20.009 4.9949 20.009 6.38467V14.7689C20.009 16.1587 19.4569 17.4915 18.4742 18.4742C17.4915 19.4569 16.1587 20.009 14.7689 20.009H6.38467C4.9949 20.009 3.66205 19.4569 2.67933 18.4742C1.69662 17.4915 1.14453 16.1587 1.14453 14.7689Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>

              {/* Facebook */}
              <div style={{ width: 25, height: 25 }}>
                <svg
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "rgb(var(--fg))" }}
                >
                  <path
                    d="M21.2086 10.576C21.2086 4.79086 16.5134 0.0957031 10.7283 0.0957031C4.94321 0.0957031 0.248047 4.79086 0.248047 10.576C0.248047 15.6484 3.85326 19.872 8.63226 20.8466V13.7201H6.53621V10.576H8.63226V7.95591C8.63226 5.93321 10.2777 4.28781 12.3004 4.28781H14.9204V7.43189H12.8244C12.248 7.43189 11.7763 7.9035 11.7763 8.47992V10.576H14.9204V13.7201H11.7763V21.0038C17.0689 20.4798 21.2086 16.0152 21.2086 10.576Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              {/* switch icon aligned to right on same horizontal axis */}
              <div style={{ position: "absolute", right: "20px", top: 0 }}>
                <ThemeToggle />
              </div>
            </div>

            {/* horizontal line under icons */}
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: "calc(56px + 5*20px + 4*20px + 342px + 25px + 20px)", // icons top + icon height + some gap
                height: "0.5px",
                background: "rgba(255,255,255,0.1)",
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

/* ---------- Placeholder Logo component ----------
   Заміни в коді нижче на свій SVG код логотипа (вказав, що ти вставиш його сам).
   Компонент використовує currentColor, тому колір логотипа буде слідувати --fg.
*/
function Logo({ small }) {
  const style = {
    width: small ? 69 : 99,
    height: small ? 40 : 57,
    display: "block",
    color: "rgb(var(--fg))",
  };

  return (
    <svg
      role="img"
      aria-label="Logo"
      viewBox="0 0 99 57"
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Встав/заміни тут реальний SVG код логотипа. Приклади форм задані як stroke/fill=currentColor*/}
      <rect width="99" height="57" fill="none" />
      <text x="0" y="35" fill="currentColor" fontSize="18" fontFamily="Inter, sans-serif">
        LOGO
      </text>
    </svg>
  );
}
