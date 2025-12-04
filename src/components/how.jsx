import Image from "next/image";
import { TitleStroke } from "./ui/title-stroke";

const steps = [
  {
    id: "01",
    title: "Reach Out with Your Idea",
    text: "Call, message, or send a photo of your space — we’ll discuss your vision, goals, and what’s possible.",
    img: "/images/howOne.png",
  },
  {
    id: "02",
    title: "Free On-Site Measurement",
    text: "We visit your location at a convenient time to take accurate measurements and answer your questions.",
    img: "/images/howTwo.png",
  },
  {
    id: "03",
    title: "Design & Transparent Estimate",
    text: "You receive a custom design plan and a clear quote — no hidden costs, no surprises.",
    img: "/images/howThree.png",
  },
  {
    id: "04",
    title: "Project Execution",
    text: "We bring your vision to life with professional craftsmanship and attention to detail.",
    img: "/images/howFour.png",
  },
  {
    id: "05",
    title: "Final Review & Quality Check",
    text: "We inspect everything together and make sure every detail meets your expectations.",
    img: "/images/howFive.png",
  },
];

const HowSection = () => {
  return (
    <section className="w-full">
      <div className="px-[20px] xl:px-[78px]">
        <h2
          className="
            xl:pb-[75px] text-center
          "
        >
          <span
            className="
            font-[500] uppercase tracking-[-0.01em]
            text-[35px] xl:text-[44px] leading-[1] 
          "
          >
            HOW WE <TitleStroke text={"WORK"} />
          </span>
        </h2>

        {/* Desktop grid */}
        <div className="hidden xl:grid grid-cols-5 gap-[74px]">
          {steps.map(({ id, title, text, img }, index) => {
            const isEven = (index + 1) % 2 === 0;
            return (
              <div
                key={id}
                className={`relative flex flex-col gap-4 w-[197px] ${isEven ? "mt-[99px]" : "mt-[205px]"}`}
              >
                {/* Большое число над правым краем */}
                <span
                  className="
                  absolute
                  top-0
                  right-0
                  -rotate-90
                  origin-top-right
                  -translate-x-[48px]
                  -translate-y-[111px]
                  text-[35px] xl:text-[48px]
                  leading-none
                  p-0 m-0
                  inline-block
                  text-[rgb(var(--fg))]
                  tracking-[-0.02em]
                "
                >
                  .{id}
                </span>

                <div>
                  <h3 className="font-inter font-[500] text-semibold text-[16px] mb-2 text-[#9B948A]">
                    {title}
                  </h3>
                  <p className="font-inter text-[14px] leading-[1.4] mb-[12px]">{text}</p>
                  <div className="w-[197px] h-[165px] relative">
                    <Image src={img} alt={title} fill className="object-cover" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile column */}
        <div className="flex flex-col relative xl:hidden mt-[80px]">
          {steps.map(({ id, title, text, img }, index) => {
            const isEven = (index + 1) % 2 === 0;
            return (
              <div
                key={id}
                className={`relative flex flex-col w-[203px] mb-[50px] ${isEven ? "self-start" : "self-end"}`}
              >
                <p
                  className={`
                  absolute
                  top-0
                  ${isEven ? "left-0" : "right-0 translate-x-[12px]"}
                  text-[48px]
                  -rotate-90
                  origin-top-left
                  leading-none
                  p-0 m-0
                  inline-block
                  font-normal
                  text-[rgba(255,255,255,
                  0.6)]
                  tracking-[-0.02em]
                  `}
                >
                  .{id}
                </p>

                <div className="mt-[40px]">
                  <h3 className="font-inter font-[500] text-[16px] mb-2 text-[#9B948A]">{title}</h3>
                  <p className="font-inter text-[14px] leading-[1.4] mb-4">{text}</p>
                  <div className="w-full h-[180px] relative">
                    <Image src={img} alt={title} fill className="object-cover" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { HowSection };
