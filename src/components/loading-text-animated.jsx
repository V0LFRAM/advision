import React, { useEffect, useState } from "react";

const DURATION = 5000;

const LoadingTextAnimated = () => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let rafId;
    let start = null;

    const animate = (timestamp) => {
      if (start === null) start = timestamp;
      const elapsed = timestamp - start;
      const p = Math.min(elapsed / DURATION, 1);
      setProgress(p);

      if (p < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        setTimeout(() => setFadeOut(true), 200);
      }
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div
      className="relative inline-block user-select-none"
      style={{
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.7s cubic-bezier(.4,0,.2,1)',
        pointerEvents: fadeOut ? 'none' : undefined,
      }}
    >
    <p className="flex flex-wrap items-baseline">
        <span
        className="
            font-[600] uppercase tracking-[-0.01em]
            text-[40px] xl:text-[80px] leading-[1] text-transparent mr-[15px]
            [-webkit-text-stroke:2px_rgb(var(--fg))]"
            style={{fontFamily: 'League Spartan, sans-serif'}}
        >
        LOADING
        </span>
    </p>

    <div
        className="absolute inset-0 overflow-hidden pointer-events-none select-none"
        style={{
        clipPath: `inset(${100 - progress * 100}% 0 0 0)`,
        WebkitClipPath: `inset(${100 - progress * 100}% 0 0 0)`,
        }}
    >
        <p className="flex flex-wrap items-baseline">
        <span
            className="
            font-[600] uppercase tracking-[-0.01em]
            text-[40px] xl:text-[80px] leading-[1.02] text-transparent mr-[15px]
            [-webkit-text-stroke:2px_rgb(var(--fg))]"
            style={{
            color: "white",
            WebkitTextFillColor: "white",
            transform: "translateY(-1px)",
            fontFamily: 'League Spartan, sans-serif',
            }}
        >
            LOADING
        </span>
        </p>
    </div>
    </div>
  );
};

export { LoadingTextAnimated };