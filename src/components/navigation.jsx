const Nav = ({ setIsOpen }) => {
  const navItems = [
    { text: "About us", link: "#about-us" },
    { text: "Services", link: "#services" },
    { text: "Projects", link: "#projects" },
    { text: "Your Idea", link: "#your-idea" },
    { text: "Get a Quote", link: "#get-a-quote" },
  ];

  return (
    <nav className="flex flex-col gap-[24px] mt-6 lg:mt-0 px-[21px] lg:flex-row lg:items-center lg:gap-[20px]">
      {navItems.map((item) => (
        <a
          onClick={()=> setIsOpen(false)}
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
