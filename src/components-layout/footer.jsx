import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { inter } from "../lib/fonts"; // Импортируем шрифт
import Link from "next/link";

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
      width={{ base: "375px", md: "auto" }}
      height={{ base: "513px", md: "254px" }}
      pt={{ base: "31px", md: 0 }}
      display="flex flex-col"
      justifyContent="center"
      fontFamily="Inter"
      fontSize={"16px"}
      letterSpacing={"-2%"}
      fontWeight={400}
      color="#DFE0DB"
    >
      <Box
        width={{ base: "335px", md: "auto" }}
        height={{ base: "416px", md: "254px" }}
        ml="20px"
        border={{ base: "1px solid red", md: "none" }}
      >
        <Box
          mt={{ base: "20px", md: 0 }}
          mb={{ base: "41px", md: 0 }}
          ml={{ base: "5px", md: 0 }}
        >
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
          border={{ base: "1px solid #ccc", md: "none" }}
        >
          <Text textStyle={textStyle}>
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
              width={26}
              height={26}
            />
            <Image
              src="/lib/icons/Facebook.svg"
              alt="Facebook"
              width={26}
              height={26}
              style={{
                marginLeft: "10px",
              }} /* Добавлен отступ вместо ml из IconButton */
            />
          </Flex>
          <Box mt="28px" textAlign="left" className={inter.className}>
            <Text>Contacts:</Text>
            <Box display="flex" flexDirection="column">
              <Link href="tel:+17634855531">+17634855531</Link>
              <Link href="mailto:edvisions.pro@gmail.com">
                edvisions.pro@gmail.com
              </Link>
            </Box>
          </Box>
          <Box mt="28px" textAlign="left" className={inter.className}>
            <Text>Socials</Text>
            <Text>Privacy Policy</Text>
          </Box>
        </Flex>
      </Box>
      <Box
        mt="40px"
        borderTop="1px solid #FFFFFF1A"
        bottom="0"
        left="0"
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
