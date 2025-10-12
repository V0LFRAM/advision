const TitleStroke = ({ text }) => {
  return (
    <span
      className="
            font-league font-[500] uppercase tracking-[-0.01em]
            text-[35px] xl:text-[44px] leading-[1] text-transparent 
            [-webkit-text-stroke:2px_rgb(var(--fg))]
          "
    >
      {text}
    </span>
  );
};

export { TitleStroke };
