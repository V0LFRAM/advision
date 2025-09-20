import { Box, Flex, Text, Link } from "@chakra-ui/react";
import Image from "next/image";

function Footer() {
  const textStyle = {
    letterSpacing: "-2%",
    fontWeight: 400,
    color: "#DFE0DB",
  };
  return (
    <Box
      bg="#1E1E1C"
      minWidth={{ base: "375px", md: "auto" }}
      pt={{ base: "31px", md: "60px" }}
      fontFamily="Inter"
      fontSize={"16px"}
      letterSpacing={"-2%"}
      fontWeight={400}
      lineHeight="19px"
      color="#DFE0DB"
      position="relative"
      width="100%"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent={{ base: "flex-start", md: "space-between" }}
        alignItems={{ md: "start" }}
        px={{ base: "20px", md: "80px" }}
        pt={{ base: "20px", md: 0 }}
      >
        <Box mb={{ base: "41px", md: 0 }} ml={{ base: "5px", md: 0 }}>
          <Image
            src="/logo-big.png"
            alt="EdVision Logo big"
            width={326}
            height={92}
          />
        </Box>

        <Flex
          //   border="1px solid orange" // Text+Contacts+Socials Container
          direction={{ base: "column", md: "row-reverse" }}
          justify={{ base: "flex-start" }}
          align="flex-start"
          width="100%"
        >
          <Box
          // border="1px solid white" // Text Container
          >
            <Text textStyle={textStyle} width="305px" height="57px">
              EdVision LLC — custom finishes, accent walls, tile & bathroom
              remodeling in Minneapolis and surrounding suburbs.{" "}
            </Text>
            <Flex
              mt="11px"
              direction="row"
              justifyContent="flex-start"
              zIndex={10}
            >
              <Image
                src="/lib/icons/Instagram.svg"
                alt="Instagram"
                width={25}
                height={25}
              />
              <Image
                src="/lib/icons/Facebook.svg"
                alt="Facebook"
                width={25}
                height={25}
                style={{
                  marginLeft: "10px",
                }}
              />
            </Flex>
          </Box>

          <Flex
            // border="1px solid magenta" // Contacts Container
            direction="column"
            alignItems="flex-start"
            mt={{ base: "28px", md: "0" }}
            mr={{ base: 0, md: "79px" }}
          >
            <Box
              display="inline-flex"
              flexDirection="column"
              alignItems="flex-start"
            >
              <Text display="inline">Contacts:</Text>
              <Box display="flex" flexDirection="row" mt="6px" gap="11px">
                <Image
                  src="/lib/icons/Phone.svg"
                  alt="Phone"
                  width={20}
                  height={20}
                />
                <Link href="tel:+17634855531">+17634855531</Link>
              </Box>
              <Box display="flex" flexDirection="row" mt="8px" gap="7px">
                <Image
                  src="/lib/icons/Email.svg"
                  alt="Email"
                  width={20}
                  height={20}
                />
                <Link href="mailto:edvisions.pro@gmail.com" lineHeight="20px">
                  edvisions.pro@gmail.com
                </Link>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        direction={{ base: "column", md: "row-reverse" }}
        justify={{ base: "flex-start", md: "space-between" }}
        align={{ base: "block", md: "center" }}
        mt={{ base: "28px", md: "83px" }}
        pt={{ base: "0", md: "19px" }}
        pb={{ base: "0", md: "20px" }}
        borderTop={{ base: "none", md: "1px solid #FFFFFF1A" }} // ✅ линия только на desktop
        width="100%"
      >
        <Flex
          //   border="1px solid yellow" // Socials container
          display="inline-flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems="flex-start"
          pl={{ base: "20px" }}
          pr={{ md: "195px" }}
        >
          <Text mr={{ base: "0", md: "28px" }}>Socials</Text>
          <Text whiteSpace="nowrap">Privacy Policy</Text>
        </Flex>
        <Flex mt={{ base: "40px", md: "0" }}>
          <Text
            width="100%"
            borderTop={{ base: "1px solid #FFFFFF1A", md: "none" }}
            fontStyle="italic"
            fontSize={{ base: "10px", md: "16px" }}
            lineHeight="12px"
            px={{ base: "20px", md: "80px" }}
            pt={{ base: "6px" }}
            pb={{ base: "8px" }}
            whiteSpace="nowrap"
          >
            Designed by Iryna Savchenko
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export { Footer };
