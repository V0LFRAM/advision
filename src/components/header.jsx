"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

function Header() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="pt-[20px]">
      <div className="flex flex-row justify-between items-center">
        <div className="w-[326px] h-[92px]">
          <div className="w-[99px] h-[57px] relative">
            <Image
              src={resolvedTheme === "dark" ? "/logo-dark.svg" : "/logo-light.svg"}
              alt="Logo"
              objectFit="contain"
              fill
            />
          </div>
        </div>
        <div className="w-[99px] h-[57px] relative">
          <Image
            src="/lib/icons/Hamburger.svg"
            alt="Hamburger Menu"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}

export { Header };
