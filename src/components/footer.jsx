import Image from "next/image";

function Footer() {
  return (
    <div className="bg-[rgb(var(--bg))] min-w-[375px] md:min-w-0 pt-[31px] md:pt-[60px] font-inter text-[16px] tracking-[-0.02em] font-normal leading-[19px] text-[rgb(var(--fg))] relative w-full">
      <div className="flex flex-col md:flex-row justify-start md:justify-between md:items-start px-20px md:px-80px pt-20px md:pt-0">
        <div className="mb-[41px] md:mb-0 ml-[5px] md:ml-0">
          <img src="/logo-big.png" alt="EdVision Logo big" width={326} height={92} />
        </div>

        <div className="flex flex-col md:flex-row-reverse justify-start items-start w-full">
          <div>
            <p className="w-[305px] h-[57px] tracking-[-0.02em] font-normal text-[rgb(var(--fg))]">
              EdVision LLC — custom finishes, accent walls, tile & bathroom remodeling in
              Minneapolis and surrounding suburbs.{" "}
            </p>
            <div className="flex flex-row justify-start mt-11px z-10">
              <img src="/lib/icons/Instagram.svg" alt="Instagram" width={25} height={25} />
              <img
                src="/lib/icons/Facebook.svg"
                alt="Facebook"
                width={25}
                height={25}
                style={{
                  marginLeft: "10px",
                }}
              />
            </div>
          </div>

          <div className="flex flex-col items-start mt-[28px] md:mt-0 mr-0 md:mr-[79px]">
            <div className="flex flex-col items-start">
              <p className="inline">Contacts:</p>
              <div className="flex flex-row mt-[6px] gap-[11px]">
                <img src="/lib/icons/Phone.svg" alt="Phone" width={20} height={20} />
                <a href="tel:+17634855531">+17634855531</a>
              </div>
              <div className="flex flex-row mt-[8px] gap-[7px]">
                <img src="/lib/icons/Email.svg" alt="Email" width={20} height={20} />
                <a href="mailto:edvisions.pro@gmail.com" className="lineHeight-20px">
                  edvisions.pro@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse justify-start md:justify-between md:items-center mt-[28px] md:mt-[83px] pt-0 md:pt-[19px] pb-0 md:pb-[20px] border-t md:border-t border-white/10 w-full">
        <div className="flex flex-col md:flex-row items-start pl-[20px] pr-[195px]">
          <p className="mr-0 md:mr-[28px]">Socials</p>
          <p className="whiteSpace-nowrap">Privacy Policy</p>
        </div>
        <div className="mt-[40px] md:mt-0">
          <p className="width-100% border-t: 1px solid #FFFFFF1A md:border-t-none fontStyle-italic fontSize:10px md:fontSize-16px lineHeight-12px px:20px md:px-80px pt:6px md:pt-0 pb:8px whiteSpace-nowrap">
            Designed by Iryna Savchenko
          </p>
        </div>
      </div>
    </div>
  );
}

export { Footer };
