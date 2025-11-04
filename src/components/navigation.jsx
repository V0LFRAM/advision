const Nav = () => {
  const navItems = [
    { text: "About us", link: "#about-us" },
    { text: "Services", link: "#services" },
    { text: "Projects", link: "#projects" },
    { text: "Your Idea", link: "#your-idea" },
    { text: "Get a Quote", link: "#get-a-quote" },
  ];

  return (
    <nav className="flex flex-col gap-[24px] mt-6 xl:mt-0 px-[21px] xl:flex-row xl:items-center xl:gap-[20px]">
      {navItems.map((item) => (
        <a
          key={item.text}
          href={item.link}
          className="
                font-inter font-medium text-[20px]
                text-[rgb(var(--fg))] hover:opacity-80
              "
        >
          {item.text}
        </a>
      ))}
    </nav>
  );
};

export { Nav };
