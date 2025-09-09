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
      //   width={{ base: "375px", md: "auto" }}
      minWidth={{ base: "375px", md: "auto" }}
      minHeight={{ base: "513px", md: "254px" }}
      pt={{ base: "31px", md: 0 }}
      pl={{ base: "20px", md: 0 }}
      pr={{ base: "20px", md: 0 }}
      display="flex flex-col"
      justifyContent="center"
      fontFamily="Inter"
      fontSize={"16px"}
      letterSpacing={"-2%"}
      fontWeight={400}
      lineHeight="19px"
      color="#DFE0DB"
    >
      <Box
        minWidth={{ base: "335px", md: "auto" }}
        minHeight={{ base: "416px", md: "254px" }}
        pt={{ base: "20px", md: 0 }}
        // border={{ base: "1px solid red", md: "none" }}
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
          direction={{ base: "column" }}
          justify={{ base: "flex-start", md: "space-between" }}
          width="335px"
          height="93px"
        >
          <Box>
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
                }} /* Добавлен отступ вместо ml из IconButton */
              />
            </Flex>
          </Box>

          <Box
            mt="28px"
            p="0"
            textAlign="left"
            className={inter.className}
            // border={{ base: "1px solid green", md: "none" }}
          >
            <Box
              display="inline-flex"
              flexDirection="column"
              alignItems="flex-start"
            >
              <Text display="inline">Contacts:</Text>
              <Box display="flex" flexDirection="row" mt="6px">
                <Image
                  src="/lib/icons/Phone.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
                <Link href="tel:+17634855531">+17634855531</Link>
              </Box>
              <Box display="flex" flexDirection="row" mt="8px">
                <Image
                  src="/lib/icons/Email.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
                <Link
                  href="mailto:edvisions.pro@gmail.com"
                  //   style={{ boxSizing: "border-box" }}
                  lineHeight="20px"
                >
                  edvisions.pro@gmail.com
                </Link>
              </Box>
            </Box>
          </Box>

          <Box
            display="inline-flex"
            flexDirection="column"
            alignItems="flex-start"
            mt="28px"
            textAlign="left"
            width={110}
            height={42}
          >
            <Text>Socials</Text>
            <Text>Privacy Policy</Text>
          </Box>
        </Flex>
      </Box>

      <Box
        mt="40px"
        borderTop="1px solid #FFFFFF1A"
        fontSize="10px"
        fontStyle="italic"
      >
        <Text ml="21px" mb="8px" mt="6px">
          Designed by Iryna Savchenko
        </Text>
      </Box>
    </Box>
  );
}

export { Footer };
