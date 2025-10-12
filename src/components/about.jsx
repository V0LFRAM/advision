import Image from "next/image";
import { TitleStroke } from "./ui/title-stroke";

const textMock = [
  {
    num: "120+",
    title: "Projects Completed",
    text: "From cozy homes to stylish apartments across whole World.",
  },
  {
    num: "8+",
    title: "Years of Experience",
    text: "Interior finishing you can rely on — built with precision.",
  },
  {
    num: "24h",
    title: "Design Proposal",
    text: "Send us a photo — we’ll reply with ideas & estimate in a day.",
  },
];

const About = () => {
  return (
    <section className="w-full">
      <div className="py-[120px] px-[20px] xl:px-[80px] flex flex-wrap gap-[20px] justify-between">
        <div>
          <h2 className="flex flex-wrap items-baseline xl:block gap-x-3 max-w-[700px] mb-[20px]">
            <span
              className="
            font-league font-[500] uppercase tracking-[-0.01em]
            text-[35px] xl:text-[44px] leading-[1] 
          "
            >
              Design that
              <TitleStroke text={"Reflects"} />
              You — Craftsmanship that Lasts
            </span>
          </h2>
          <p
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
        <div className="lg:hidden relative w-full h-[260px]">
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
        <div className="hidden lg:block relative w-[378] h-[460px]">
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
            className="font-league font-normal tracking-[-0.01em]
            text-[35px] xl:text-[44px] leading-[1] text-[#9B948A] mb-[28px]"
          >
            more
          </span>
          <ul className="flex flex-wrap gap-[12px] xl:gap-[146px] [&>li:last-child]:ml-auto xl:[&>li:last-child]:ml-[112px]">
            {textMock.map((item, index) => (
              <li
                key={index}
                className="mb-[20px] last:mb-0 flex flex-col xl:flex-col gap-[10px] xl:gap-[20px] w-[160px] xl:w-[220px]"
              >
                <span
                  className=" tracking-[-0.02em]
                  text-[65px] xl:text-[80px] leading-[1] text-[#DFE0DB] mb-[8px]"
                >
                  {item.num}
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
      <Image
        src="/images/about-bottom-decor.png"
        alt="Decor"
        width={1920}
        height={100}
        className="w-full h-auto xl:block hidden"
      />
      <Image
        src="/images/about-bottom-decor-mob.png"
        alt="Decor"
        width={1920}
        height={100}
        className="w-full h-auto xl:hidden"
      />
    </section>
  );
};

export { About };
