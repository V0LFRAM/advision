import Image from "next/image";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { TitleStroke } from "./ui/title-stroke";

const textMock = [
  {
    index: 1,
    num: "120+",
    title: "Projects Completed",
    text: "From cozy homes to stylish apartments across whole World.",
  },
  {
    index: 2,
    num: "8+",
    title: "Years of Experience",
    text: "Interior finishing you can rely on — built with precision.",
  },
  {
    index: 3,
    num: "24h",
    title: "Design Proposal",
    text: "Send us a photo — we’ll reply with ideas & estimate in a day.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40% 0px" });
  const [animated, setAnimated] = useState(false);
  
  const [showCraftsmanship, setShowCraftsmanship] = useState(false);
  const [showYou, setShowYou] = useState(false); 
  const [showDesignThat, setShowDesignThat] = useState(false);
  const [showThatLasts, setShowThatLasts] = useState(false);
  const [showReflects, setShowReflects] = useState(false); 
  const [showContent, setShowContent] = useState(false); 
  const [showText, setShowText] = useState(false); 
  const [showMore, setShowMore] = useState(false);


  const [shownTextMock, setShownTextMock] = useState([false, false, false]);
  const [counters, setCounters] = useState([1, 1, 1]);
  const [activeCounterIdx, setActiveCounterIdx] = useState(null);

  useEffect(() => {
    if (isInView && !animated) setAnimated(true);
  }, [isInView, animated]);   


  useEffect(() => {
    const sequence = [
      { setter: setShowCraftsmanship, delay: 500 },
      { setter: setShowYou, delay: 500 },
      { setter: setShowDesignThat, delay: 500 },
      { setter: setShowThatLasts, delay: 500 },
      { setter: setShowReflects, delay: 500 },
      { setter: setShowContent, delay: 500 },
      { setter: setShowText, delay: 500 },
      { setter: setShowMore, delay: 500 },
    ];
    let timers = [];
    if (animated) {
      sequence.forEach(({ setter }) => setter(false));
      setShownTextMock([false, false, false]);
      setCounters([1, 1, 1]);
      setActiveCounterIdx(null);
      let total = 0;
      sequence.forEach(({ setter, delay }) => {
        total += delay;
        timers.push(setTimeout(() => setter(true), total));
      });
      const afterMore = total + 500;
      timers.push(setTimeout(() => {
        setShownTextMock([true, false, false]);
        setActiveCounterIdx(0);
      }, afterMore));
    } else {
      sequence.forEach(({ setter }) => setter(false));
      setShownTextMock([false, false, false]);
      setCounters([1, 1, 1]);
      setActiveCounterIdx(null);
    }
    return () => timers.forEach(clearTimeout);
  }, [animated]);

  useEffect(() => {
    if (activeCounterIdx === null) return;
    if (!shownTextMock[activeCounterIdx]) return;
    let rafId;
    let start = 1;
    let end = parseInt(textMock[activeCounterIdx].num);
    if (isNaN(end)) end = 1;
    let startTime = null;
    const duration = 700;
    function animateCount(ts) {
      if (!startTime) startTime = ts;
      const elapsed = ts - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(start + (end - start) * progress);
      setCounters(prev => prev.map((v, i) => i === activeCounterIdx ? value : v));
      if (progress < 1) {
        rafId = requestAnimationFrame(animateCount);
      } else {
        setCounters(prev => prev.map((v, i) => i === activeCounterIdx ? end : v));
        if (activeCounterIdx < textMock.length - 1) {
          setTimeout(() => {
            setShownTextMock(prev => prev.map((val, idx) => idx <= activeCounterIdx + 1 ? true : val));
            setActiveCounterIdx(activeCounterIdx + 1);
          }, 100); 
        }
      }
    }
    rafId = requestAnimationFrame(animateCount);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [activeCounterIdx, shownTextMock]);

  return (
    <section  id="about-us" className="w-full" >
      <div className="py-[120px] px-[20px] xl:px-[80px] flex flex-wrap gap-[20px] justify-between">
        <div ref={ref}>
          <h2 className="flex flex-wrap items-baseline xl:block gap-x-3 max-w-[700px] mb-[20px]">
            <span
              className="
                font-league font-[500] uppercase tracking-[-0.01em]
                text-[35px] xl:text-[44px] leading-[1] 
              "
            >
              <span style={{ visibility: showDesignThat ? "visible" : "hidden" }}>
                {'Design that '}
              </span>
               
              <span style={{ visibility: showReflects ? "visible" : "hidden" }}>
                <TitleStroke text={"Reflects"} /> 
              </span>
              
              <span style={{ visibility: showYou ? "visible" : "hidden" }}>
                {' You —  '}
              </span>
              
              <span style={{ visibility: showCraftsmanship ? "visible" : "hidden" }}>
                {'Craftsmanship '}
              </span>

               <span style={{ visibility: showThatLasts ? "visible" : "hidden" }}>
                {'that Lasts '}
              </span>
              
            </span>
          </h2>
          <p
            style={{ visibility: showContent ? "visible" : "hidden" }}
            className="
            font-league font-[500]  tracking-[-0.02em]
            text-[16px] xl:text-[20px] leading-[1] max-w-[700px] mb-[20px]
          "
          >
            At EdVision, we don’t just finish walls — we bring your ideas to life. Based in
            Minneapolis, we specialize in custom accent walls, high-end tilework, and full bathroom
            remodels that elevate everyday spaces.
          </p>
          <p
            style={{ visibility: showText ? "visible" : "hidden" }}
            className="
            font-league font-[500]  tracking-[-0.02em]
            text-[16px] xl:text-[20px] leading-[1]  max-w-[700px]
          "
          >
            Whether you're looking for a sleek TV wall, a cozy fireplace accent, or a bathroom
            transformation, we turn your vision into a durable, stylish reality. We listen, plan,
            and deliver — with attention to detail and commitment to quality.
          </p>
        </div>
        <div 
          style={{ visibility: showContent ? "visible" : "hidden" }}
          className="lg:hidden relative w-full h-[260px]" 
        >
          <Image
            src="/images/about-mob.png"
            alt="About Image"
            fill
            quality={100}
            priority
            sizes="100%"
            className="object-cover"
          />
        </div>
        <div 
          style={{ visibility: showText ? "visible" : "hidden" }}
          className="hidden lg:block relative w-[378] h-[460px]"
        >
          <Image
            src="/images/about-image.png"
            alt="About Image"
            fill
            quality={100}
            priority
            sizes="378px"
            className="object-cover"
          />
        </div>
        <div className="w-full ">
          <span
            style={{ visibility: showMore ? "visible" : "hidden" }}
            className="font-league font-normal tracking-[-0.01em]
            text-[35px] xl:text-[44px] leading-[1] text-[#9B948A]"
          >
            more
          </span>
          <ul className="flex flex-wrap gap-[12px] mt-[28px] xl:gap-[146px] [&>li:last-child]:ml-auto xl:[&>li:last-child]:ml-[112px]">
            {textMock.map((item, index) => (
              <li
                key={index}
                style={{ visibility: shownTextMock[index] ? "visible" : "hidden" }}
                className="mb-[20px] last:mb-0 flex flex-col xl:flex-col gap-[10px] xl:gap-[20px] w-[160px] xl:w-[220px]"
              >
                <span
                  className=" tracking-[-0.02em]
                  text-[65px] xl:text-[80px] leading-[1] text-[#DFE0DB] mb-[8px]"
                >
                  {item.index === 1
                    ? `${counters[0]}+`
                    : item.index === 2
                    ? `${counters[1]}+`
                    : item.index === 3
                    ? `${counters[2]}${item.num.replace(/\d+/,'')}`
                    : item.num}
                </span>
                <div>
                  <h3
                    className="font-[700] tracking-[-0.02em]
                  text-[16px] xl:text-[20px] leading-[1] mb-[10px]"
                  >
                    {item.title}
                  </h3>
                  <p
                    className="font-normal tracking-[-0.02em]
                  text-[16px] xl:text-[20px] leading-[1]"
                  >
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <Image
        src="/images/about-bottom-decor.png"
        alt="Decor"
        width={1920}
        height={100}
        className="w-full h-auto xl:block hidden"
        style={{
                transform: isInViewImage ? "scale(1.1)" : "scale(1)",
                transition: "transform 4s cubic-bezier(.4,0,.2,1)",
              }}
      />
      <Image
        src="/images/about-bottom-decor-mob.png"
        alt="Decor"
        width={1920}
        height={100}
        className="w-full h-auto xl:hidden"
      /> */}
    </section>
  );
};

export { About };
