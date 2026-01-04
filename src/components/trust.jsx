import { TitleStroke } from "./ui/title-stroke";

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
  return (
    <section className="w-full pt-[120px] xl:pt-[180px] pb-[120px] xl:pb-[200px] px-[20px] xl:pl-[80px] xl:pr-[67px]">
      <h2 className="pb-[40px] xl:pb-[50px]">
        <span className="font-league font-[500] uppercase tracking-[-0.01em] text-[35px] xl:text-[44px] leading-[1]">
          Why people <TitleStroke text="Trust" /> Us
        </span>
      </h2>

      <div
        className="
          grid
          grid-cols-2 
          xl:grid-cols-5 
          gap-y-[20px] gap-x-[14px] xl:gap-[30px]
          justify-items-start
        "
      >
        {trustItems.map((item) => (
          <div
            key={item.title}
            className="
              flex flex-col gap-1
              w-[161px] xl:w-[197px]
            "
          >
            <h3 className="font-inter font-[600] text-[16px] leading-[100%] tracking-[-0.02em] text-[#9B948A]">
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
