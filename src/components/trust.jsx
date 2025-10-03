import Image from "next/image";

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

const TrustSection = () => {
  return (
    <section className="w-full bg-[#1E1E1C]  pt-[120px] xl:pt-[180px] pb-[120px] xl:pb-[200px]  px-[20px] xl:pl-[80px] xl:pr-[67px]">
      <div className="xl:block">
        {/* Header */}
        <h2
          className="
            font-league font-regular lg:font-medium uppercase tracking-[-0.02em]
            text-[35px] xl:text-[44px] leading-[100%] text-[#DFE0DB] pb-[40px] xl:pb-[50px]
          "
        >
          Why people{" "}
          <span className="text-transparent [-webkit-text-stroke:1px_rgb(var(--fg))]">Trust</span>{" "}
          Us
        </h2>

        {/* Desktop */}

        <div className="hidden xl:grid lg:grid-cols-5 xl:gap-[30px]">
          {trustItems.map((item, idx) => (
            <div key={idx} className="xl:w-[197px] xl:flex flex-col xl:gap-2">
              <h3
                className="
                  font-inter font-semibold text-[16px] leading-[100%] tracking-[-0.02em] 
                  text-[#9B948A]
                "
              >
                {item.title}
              </h3>
              <p
                className="
                  font-inter font-normal text-[16px] leading-[100%] tracking-[-0.02em] 
                  text-[#DFE0DB]
                "
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile */}

      <div className="xl:hidden grid grid-cols-2 gap-y-[20px] gap-x-[14px]">
        {trustItems.map((item, idx) => (
          <div key={idx} className="w-[161px] flex flex-col gap-2">
            <h3
              className="
                  font-inter font-semibold text-[16px] leading-[100%] tracking-[-0.02em] 
                  text-[#9B948A]
                "
            >
              {item.title}
            </h3>
            <p
              className="
                  font-inter font-normal text-[16px] leading-[100%] tracking-[-0.02em] 
                  text-[#DFE0DB]
                "
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export { TrustSection };
