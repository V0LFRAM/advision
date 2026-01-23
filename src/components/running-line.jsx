"use client";

export function RunningLine() {
  const item = " & start a project ";
  const repeated = Array(12).fill(item).join(" ");

  return (
    <section className="w-full overflow-hidden bg-[rgb(var(--bg))]">
      <div className="relative pb-[74px] md:pb-[175px] pt-[80px] md:pt-[126px]">
        <div
          // display, spacing and nowrap moved to className; animation & will-change set via inline style
          className="inline-flex items-center whitespace-nowrap"
          style={{ willChange: "transform", animation: "run 120s linear infinite" }}
        >
          <h2
            className="mx-10 whitespace-nowrap text-[30px] md:text-[75px] leading-[100%] tracking-[-0.02em] uppercase text-right font-[500] text-[rgb(var(--fg))]"
            style={{
              fontFamily:
                '"League Spartan", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontStyle: "normal",
            }}
          >
            {repeated}
          </h2>

          <h2
            className="mx-10 whitespace-nowrap text-[30px] md:text-[75px] leading-[100%] tracking-[-0.02em] uppercase text-right font-[500] text-[rgb(var(--fg))]"
            style={{
              fontFamily:
                '"League Spartan", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontStyle: "normal",
            }}
          >
            {repeated}
          </h2>
        </div>
      </div>

      <style jsx>{`
        /* keep keyframes here (can't move into className) */
        @keyframes run {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
