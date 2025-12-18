const TitleStroke = ({ text, stroke = 1 }) => {
  return (
    <span
      className="font-league font-[500] uppercase tracking-[-0.01em] text-[35px] xl:text-[44px] leading-[1] text-transparent"
      style={{
        WebkitTextStroke: `${stroke}px rgb(var(--fg))`,
        WebkitTextFillColor: "transparent",
        // небольшая страховка для несопровождающих браузеров
        textStroke: `${stroke}px rgb(var(--fg))`,
      }}
    >
      {text}
    </span>
  );
};

export { TitleStroke };
