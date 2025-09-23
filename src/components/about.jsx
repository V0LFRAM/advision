import Image from "next/image";

const About = () => {
  return (
    <section className="w-full bg-[rgb(var(--bg))] text-[rgb(var(--fg))]">
      <div className="py-[120px] px-[20px] xl:px-[80px] flex flex-wrap gap-[20px] justify-between">
        <div>
          <h2 className="flex flex-wrap items-baseline xl:block gap-x-3 max-w-[700px]">
            <span
              className="
            font-league font-semibold uppercase tracking-[-0.01em]
            text-[35px] xl:text-[44px] leading-[1] text-[rgb(var(--fg))] relative
          "
            >
              Design that
            </span>
            <span
              className="
            font-league font-semibold uppercase tracking-[-0.01em]
            text-[35px] xl:text-[44px] leading-[1] text-transparent 
            [-webkit-text-stroke:2px_rgb(var(--fg))]
          "
            >
              Reflects
              <span
                className="
            font-league font-semibold uppercase tracking-[-0.01em]
            text-[35px] xl:text-[44px] leading-[1] text-[rgb(var(--fg))] relative ml-[15px]
          "
              >
                You —
              </span>
            </span>
            <span
              className="
            font-league font-semibold uppercase tracking-[-0.01em]
            text-[35px] xl:text-[44px] leading-[1] text-[rgb(var(--fg))] 
          "
            >
              Craftsmanship that Lasts
            </span>
          </h2>
          <p
            className="
            font-league font-semibold uppercase tracking-[-0.02em]
            text-[16px] xl:text-[20px] leading-[1] text-[rgb(var(--fg))] max-w-[700px]
          "
          >
            At EdVision, we don’t just finish walls — we bring your ideas to life. Based in
            Minneapolis, we specialize in custom accent walls, high-end tilework, and full bathroom
            remodels that elevate everyday spaces.
          </p>
          <p
            className="
            font-league font-semibold uppercase tracking-[-0.02em]
            text-[16px] xl:text-[20px] leading-[1] text-[rgb(var(--fg))]  max-w-[700px]
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
      </div>
    </section>
  );
};

export { About };
