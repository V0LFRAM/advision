// import { Box, Flex, Text, Link } from "@chakra-ui/react";
import Image from "next/image";
import { inter } from "../lib/fonts"; // Импортируем шрифт

// componentsLayout/footer.jsx
function Footer() {
  const textStyle = {
    letterSpacing: "-2%",
    fontWeight: 400,
    color: "#DFE0DB",
  };
  return (
    <div
      //   bg="#1E1E1C"
      className="bg-[#1E1E1C] min-w-[375px] md:min-w-0 pt-[31px] md:pt-[60px] font-inter text-[16px] tracking-[-0.02em] font-normal leading-[19px] text-[#DFE0DB] relative w-full"
      //   minWidth={{ base: "375px", md: "auto" }}
      //   pt={{ base: "31px", md: "60px" }}
      //   fontFamily="Inter"
      //   fontSize={"16px"}
      //   letterSpacing={"-2%"}
      //   fontWeight={400}
      //   lineHeight="19px"
      //   color="#DFE0DB"
      //   position="relative"
      //   width="100%"
    >
      <div
        className="flex flex-col md:flex-row justify-start md:justify-between md:items-start px-20px md:px-80px pt-20px md:pt-0"
        // direction={{ base: "column", md: "row" }}
        // justifyContent={{ base: "flex-start", md: "space-between" }}
        // alignItems={{ md: "start" }}
        // px={{ base: "20px", md: "80px" }}
        // pt={{ base: "20px", md: 0 }}
      >
        <div
          className="mb-[41px] md:mb-0 ml-[5px] md:ml-0"
          //  mb={{ base: "41px", md: 0 }} ml={{ base: "5px", md: 0 }}
        >
          <img
            src="/logo-big.png"
            alt="EdVision Logo big"
            width={326}
            height={92}
          />
        </div>

        <div
          className="flex flex-col md:flex-row-reverse justify-start items-start w-full"
          //   border="1px solid orange" // Text+Contacts+Socials Container
          // direction={{ base: "column", md: "row-reverse" }}
          // justify={{ base: "flex-start" }}
          // align="flex-start"
          // width="100%"
        >
          <div
          // border="1px solid white" // Text Container
          >
            <p
              className="w-[305px] h-[57px] tracking-[-0.02em] font-normal text-[#DFE0DB]"
              // textStyle={textStyle} width="305px" height="57px"
            >
              EdVision LLC — custom finishes, accent walls, tile & bathroom
              remodeling in Minneapolis and surrounding suburbs.{" "}
            </p>
            <div
              className="flex flex-row justify-start mt-11px z-10"
              // mt="11px"
              // direction="row"
              // justifyContent="flex-start"
              // zIndex={10}
            >
              <img
                src="/lib/icons/Instagram.svg"
                alt="Instagram"
                width={25}
                height={25}
              />
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

          <div
            // border="1px solid magenta" // Contacts Container
            className="flex flex-col items-start mt-[28px] md:mt-0 mr-0 md:mr-[79px]"
          >
            <div className="flex inline-flex flex-col items-start">
              <p className="inline">Contacts:</p>
              <div className="flex flex-row mt-[6px] gap-[11px]">
                <img
                  src="/lib/icons/Phone.svg"
                  alt="Phone"
                  width={20}
                  height={20}
                />
                <a href="tel:+17634855531">+17634855531</a>
              </div>
              <div className="flex flex-row mt-[8px] gap-[7px]">
                <img
                  src="/lib/icons/Email.svg"
                  alt="Email"
                  width={20}
                  height={20}
                />
                <a
                  href="mailto:edvisions.pro@gmail.com"
                  className="lineHeight-20px"
                >
                  edvisions.pro@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse justify-start md:justify-between md:items-center mt-[28px] md:mt-[83px] pt-0 md:pt-[19px] pb-0 md:pb-[20px] border-t md:border-t-[1px] border-white/10 w-full">
        <div
          //   border="1px solid yellow" // Socials container
          className="flex inline-flex flexDirection:column, md:row alignItems:flex-start pl:20px pr-md:195px"
        >
          <p className="mr:0 md:mr-28px">Socials</p>
          <p className="whiteSpace-nowrap">Privacy Policy</p>
        </div>
        <div className="mt:40px md:mt-0">
          <p className="width-100% border-t: 1px solid #FFFFFF1A md:border-t-none fontStyle-italic fontSize:10px md:fontSize-16px lineHeight-12px px:20px md:px-80px pt:6px md:pt-0 pb:8px whiteSpace-nowrap">
            Designed by Iryna Savchenko
          </p>
        </div>
      </div>
    </div>
  );
}

export { Footer };
