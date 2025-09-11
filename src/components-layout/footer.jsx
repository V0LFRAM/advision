import { Box, Flex, Text, Link } from "@chakra-ui/react";
import Image from "next/image";
import { inter } from "../lib/fonts"; // Импортируем шрифт

// components-layout/footer.jsx
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
      minHeight={{ base: "513px", md: "254px" }}
      pt={{ base: "31px", md: 60 }}
      px={{ base: "20px", md: 80 }}
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
        border="1px solid red" // Main container
        direction={{ base: "column", md: "row" }}
        justifyContent={{ base: "flex-start", md: "space-between" }}
        minWidth={{ base: "335px", md: "auto" }}
        minHeight={{ base: "416px", md: "254px" }}
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
          border="1px solid orange" // Text+Contacts+Socials Container
          ml={{ base: 0, md: "79px" }}
          mr={{ base: 0, md: "75px" }}
          direction={{ base: "column", md: "row" }}
          justify={{ base: "flex-start" }}
          align="flex-start"
          width="100%"
        >
          <Box
            border="1px solid white" // Text Container
            width={{ base: "335px", md: "auto" }}
            gap={{ base: 0, md: "40px" }}
          >
            <Text textStyle={textStyle} width="335px" height="57px">
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
            border="1px solid magenta" // Text+Contacts+Socials Container
            direction="column"
            alignItems="flex-start"
          >
            <Box
              border="1px solid blue" // Contacts container
              mt={{ base: "28px", md: "0" }}
              // textAlign="left"
              // className={inter.className}
              // border={{ base: "1px solid green", md: "none" }}
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
            </Box>

            <Box
              border="1px solid yellow" // Socials container
              position={{ base: "static", md: "absolute" }}
              bottom={{ md: "8px" }}
              right={{ md: "75px" }}
              display="inline-flex"
              flexDirection={{ base: "column", md: "row" }}
              alignItems="flex-start"
              mt="28px"
              textAlign="left"
              width={{ base: "110px", md: "auto" }}
              height={{ base: "42px", md: "auto" }}
            >
              <Text mr={{ base: "0", md: "28px" }}>Socials</Text>
              <Text>Privacy Policy</Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>

      <Box
        mt={{ base: "40px", md: "83px" }}
        borderTop="1px solid #FFFFFF1A"
        fontSize={{ base: "10px", md: "16px" }}
        fontStyle="italic"
      >
        <Text
          ml="21px"
          mb={{ base: "8px", md: "20px" }}
          mt={{ base: "6px", md: "19px" }}
        >
          Designed by Iryna Savchenko
        </Text>
      </Box>
    </Box>
  );
}

export { Footer };
