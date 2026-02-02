const HeroTitleStroke = ({ text }) => {
  return (
    <span
      className="
              font-league font-[600] uppercase tracking-[-0.01em]
              text-[40px] xl:text-[80px] leading-[1] text-transparent mr-[15px]
              [-webkit-text-stroke:1px_rgb(var(--fg))]
            "
    >
      {text}
    </span>
  );
};

export { HeroTitleStroke };
