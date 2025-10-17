const HeroTitleStroke = ({ text }) => {
  return (
    <span
      className="
              font-league font-[500] uppercase tracking-[-0.01em]
              text-[40px] xl:text-[80px] leading-[1] text-transparent mr-[15px]
              [-webkit-text-stroke:2px_rgb(var(--fg))]
            "
    >
      {text}
    </span>
  );
};

export { HeroTitleStroke };
