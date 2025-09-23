import Image from "next/image";

function Home() {
  return (
    <div className="pt-[20px] bg-red-500">
      <h1 className="text-green-500">Вітаннячка!!!---!!!!!</h1>
      <div className="flex flex-row justify-between items-center">
        <div className="w-[326px] h-[92px]">
          <img
            src="/logo-big.png"
            alt="EdVision Logo big"
            // width={326}
            // height={92}
          />
        </div>
        <div className="w-[28px] h-[12px]">
          <img
            src="/lib/icons/Hamburger.svg"
            alt="Hamburger Menu"
            // width={28}
            // height={12}
          />
        </div>
      </div>
    </div>
  );
}

export { Home };
