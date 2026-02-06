import { TitleStroke } from "./ui/title-stroke";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const trustItems = [
  {
    title: "Free On-Site Estimate",
    text: "No guesswork. We come to you, assess the space, and provide expert input at no cost.",
  },
  {
    title: "Clear Pricing & Deadlines",
    text: "Honest quotes, no hidden fees, and we stick to the schedule.",
  },
  {
    title: "Safe, High-Quality Materials",
    text: "Only certified, durable, and beautiful finishes go into your home.",
  },
  {
    title: "Guaranteed Craftsmanship",
    text: "Our work is backed by warranty and a satisfaction guarantee.",
  },
  {
    title: "50+ Projects Completed",
    text: "Real results, real reviews, real homes.",
  },
];

function TrustSection() {
   const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30% 0px" });

  const [showWhyPeople, setShowWhyPeople] = useState(false); 
  const [showTrust, setShowTrust] = useState(false); 

  const [shownTrustItems, setShownTrustItems] = useState(Array(trustItems.length).fill(false));

  useEffect(() => {
    const sequence = [
      { setter: setShowWhyPeople, delay: 300 },
      { setter: setShowTrust, delay: 300 },
    ];

    let timers = [];

    if (isInView) {
      sequence.forEach(({ setter }) => setter(false));
      setShownTrustItems(Array(trustItems.length).fill(false));
      let total = 0;
      sequence.forEach(({ setter, delay }) => {
        total += delay;
        timers.push(setTimeout(() => setter(true), total));
      });
      const afterContent = total + 300;
      trustItems.forEach((_, idx) => {
        timers.push(setTimeout(() => {
          setShownTrustItems(prev => prev.map((v, i) => i <= idx ? true : v));
        }, afterContent + idx * 500));
      });
    } else {
      sequence.forEach(({ setter }) => setter(false));
      setShownTrustItems(Array(trustItems.length).fill(false));
    }
    return () => timers.forEach(clearTimeout);
  }, [isInView]);

  return (
    <section ref={ref} className="w-full pt-[120px] xl:pt-[180px] pb-[120px] xl:pb-[200px] px-[20px] xl:pl-[80px] xl:pr-[67px]">
      <h2 className="pb-[40px] xl:pb-[50px]">
        <span className="font-league font-[500] uppercase tracking-[-0.01em] text-[35px] xl:text-[44px] leading-[1]">
          <span style={{ visibility: showWhyPeople ? "visible" : "hidden" }}>
            {"Why people "}
          </span>
          <span style={{ visibility: showTrust ? "visible" : "hidden" }}>
            <TitleStroke text="Trust" /> 
          </span>
          <span style={{ visibility: showWhyPeople ? "visible" : "hidden" }}>
            {" Us"}
          </span>
        </span>
      </h2>

      <div
        className="
          grid
          grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-5 
          gap-y-[20px] gap-x-[14px] lg:gap-[20px] xl:gap-[30px]
          justify-items-start
        "
      >
        {trustItems.map((item, idx) => (
          <div
            key={item.title}
            style={{
              opacity: shownTrustItems[idx] ? 1 : 0,
              transform: shownTrustItems[idx] ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.5s, transform 0.5s',
            }}
            className="flex flex-col gap-1 w-[161px] md:w-[200px] lg:w-[161px] xl:w-[197px]"
          >
            <h3 className="font-inter font-[600] text-[16px] leading-[100%] tracking-[-0.02em] text-[#9B948A] mb-2">
              {item.title}
            </h3>
            <p className="font-inter font-normal text-[16px] leading-[100%] tracking-[-0.02em]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export { TrustSection };
